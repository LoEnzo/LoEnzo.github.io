---
title: Go并发编程
tags:
 - go
categories: 
 - GoNotes
date: 2021-05-13
---

::: tip

:::

# go协程 goroutine 

百度Go语言优势，肯定有一条是说Go天生就有支持并发的优势，其他语言支持多线程并发，需要一定的门槛，基础的积累，学习多线程、进程语法。在Go中，就不需要考虑这些，原生提供goroutine(协程)，自动帮你处理任务，

在函数前加上`go`即开启了一个`goroutine`

```go
func main() {
    // 执行普通函数
    func (){}
    // 开启协程执行这个函数
    go func(){}
}
```

go的入口函数是main函数，相当于主线程，其内部调用的其他函数才能开启协程，而main函数执行完后，不管协程函数是否执行完了，都会停止

下面事例，结果有时候都会输出，有时候只有main函数的输出语句，因为协程开启需要时间，开启`time.Sleep`休眠，给协程运行时间，结果都会打印，这种方式不推荐

```go
func firstGoroutine() {
	fmt.Println("hello, go")
}

func main() {
	// 启动一个协程
	//go firstGoroutine()
	//fmt.Println("hello, world")
	//time.Sleep(time.Second)
}

// hello, world
```

::: detail 多个方法协程执行

```go
func secondGoroutine(name string) {
	for i := 0; i < 10; i++ {
		fmt.Printf("In goroutine %s\n", name)
		// 为了避免第一个协程执行过快，观察不到并发的效果，加个休眠
		time.Sleep(10 * time.Millisecond)
	}
}

func main() {
	go secondGoroutine("协程1号")
	go secondGoroutine("协程2号")
	time.Sleep(time.Second)
}

// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程1号
// In goroutine 协程2号
// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程1号
// In goroutine 协程2号
// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程1号
// In goroutine 协程2号
// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程2号
// In goroutine 协程1号
// In goroutine 协程1号
// In goroutine 协程2号
```

:::

# go信道 channel

goroutine是go语言程序的并发，那么channel就是并发体之间的通讯机制，是一个goroutine与另外一个goroutine之间传输的通道（信道）,它是一种队列式的数据结构，遵循先入先出的规则

## 信道的定义、简单使用

```go
// 声明后的信道，其零值是nil，无法直接使用，必须配合make函进行初始化。
var 信道实例 chan 信道类型

// 定义容量为10的信道
var 信道实例 [10]chan 信道类型

信道实例 := make(chan 信道类型)
channel := make(chan int)

// 关闭信道
close(channel)

// 往信道中发送数据
channel<- 200

// 从信道中取出数据，并赋值给mydata
mydata := <-channel

// 重复关闭信道会报错，判断信道是否关闭，x是信道传出的值，ok为false，信道未关闭，ok未true，信道关闭
x,ok := <-channel
```

## 信道的容量与长度

```go
// 初始化信道可以指定缓存容量大写，不指定默认是0，也是无缓冲信道，指定了值为缓冲信道，容量和长度可以通过 cap() len()取值	
channel := make(chan int)
channel := make(chan int, 10)

func main() {
    pipline := make(chan int, 10)
    fmt.Printf("信道可缓冲 %d 个数据\n", cap(pipline))
    pipline<- 1
    fmt.Printf("信道中当前有 %d 个数据", len(pipline))
}

// 信道可缓冲 10 个数据
// 信道中当前有 1 个数据
```

## 缓冲信道与无缓冲信道

* 缓冲信道

  允许信道里存储一个或多个值，形成一个缓冲区，多个协程之间接收端和发送段可以`异步状态`

```go
pipline := make(chan int, 10)
```

* 无缓冲信道

  信道里面无法缓存数据，意味着多个协程之间接收端和发送端是`同步状态`，一方发送，另外一方需要立马接收数据，否则就会造成堵塞

```go
pipline := make(chan int)
pipline := make(chan int, 0)
```

事例

```go
func main() {
    // 无缓冲信道
	var channel = make(chan int)

	go createChannel(channel)
	for i := 0; i < 3; i++ {
		myData := <-channel
		Printf("channel中的数据是：%d\n", myData)
	}
    time.Sleep(time.Second)
}

func createChannel(myChannel chan int) {
	for i := 0; i < 3; i++ {
		myChannel <- 100 + i
	}
}

// channel中的数据是：100
// channel中的数据是：101
// channel中的数据是：102
```

## 双向信道与单向信道

我们定义的信道一般都是双向信道，也就是可以发送数据，也可以接收数据，但有时候需要对信道做一些限制，使其只能接收或发送信息，这就是单向信道

- `<-chan` 表示这个信道，只能从里发出数据，对于程序来说就是只读
- `chan<-` 表示这个信道，只能从外面接收数据，对于程序来说就是只写

```go
//定义只写信道类型，起别名
type Sender = chan<- int

//定义只读信道类型，起别名 
type Receiver = <-chan int

func main() {
	var channel = make(chan int)
	singleChannel(channel)
	time.Sleep(time.Second)
}

func singleChannel(channel chan int) {

	go func() {
		var sender Sender = channel
		Println("准备发送数据: 100")
		sender <- 100
	}()
	// 开启协程后channel信道共享
	go func() {
		var receiver Receiver = channel
		//num := <-receiver
		num, ok := <-receiver
		Printf("接收状态：%t, 接到的数据是: %d", ok, num)
	}()
}

// 准备发送数据: 100
// 接收状态：true, 接到的数据是: 100
```

## 遍历信道

遍历信道，可以使用 for 搭配 range关键字，在range时，要确保信道是处于关闭状态，否则循环会阻塞

```go
func main() {
	var channel1 = make(chan int, 10)
	go forEachChannel(channel1)
	for k := range channel1 {
		Println(k)
	}
	time.Sleep(time.Second)
}

func forEachChannel(myChan chan int) {
	for i := 0; i < cap(myChan); i++ {
		myChan <- i + rand.Intn(10)
	}
	// close 信道,不然主函数中遍历完并不会结束，而是会阻塞。
	close(myChan)
}

// 1
// 8
// ...
```

## 用信道来做锁

信道里面的数据量达到设定的容量时，再往里面发送数据会造成阻塞，利用这个特性可以用它来当作锁，值要比较大才能提现出来

```go
func main() {
	// 容量为1可以作为锁，容量大于1，x的结果很可能会小于10000
	var x int
	channel2 := make(chan bool, 1)
    channel2 := make(chan bool, 500) // 结果X的值小于10000
	for i := 0; i < 10000; i++ {
		go channelAsLock(channel2, &x)
	}
	time.Sleep(time.Second)
	Println("x 的值：", x)
}

func channelAsLock(channel chan bool, x *int) {
	channel <- true
	*x += 1
	<-channel
}

// x 的值 10000
```

注意事项：

* 关闭一个未初始化的 channel 会产生 panic
* 重复关闭同一个 channel 会产生 panic
* 向一个已关闭的 channel 发送消息会产生 panic
* 从已关闭的 channel 读取消息不会产生 panic，且能读出 channel 中还未被读取的消息，若消息均已被读取，则会读取到该类型的零值。
* 从已关闭的 channel 读取消息永远不会阻塞，并且会返回一个为 false 的值，用以判断该 channel 是否已关闭（x,ok := <- ch）
* 关闭 channel 会产生一个广播机制，所有向 channel 读取消息的 goroutine 都会收到消息
* channel 在 Golang 中是一等公民，它是线程安全的，面对并发问题，应首先想到 channel

# go WaitGroup

之前的例子中，为了让协程执行完，我们再`main`函数中添加了`time.sleep`的操作，但是真实开发场景中，我们无法估计协程执行完的时间，也就无法设定`time.sleep`，所以这种方式只适用于平时的测试，下面有两种方式来定位什么时候协程执行完了

### 使用信道标识

也就是在所有协程执行完成之后，在发送一个`true`，在主协程中如果获取到了`true`标识，就说明子协程执行完成了

```go
import "fmt"

// 如果注释掉下面带//符号的三行， 就只会输出 子协程执行完成了
func main() {
    done := make(chan bool) //
    go func() {
        for i := 0; i < 5; i++ {
            fmt.Println(i)
        }
        done <- true //
    }()
    <-done //
    fmt.Println("子协程执行完成了")
}

// 0
// ...
// 子协程执行完成了
```

### 使用WaitGroup

使用信道标识，对于单个协程或者协程数量比较少的时候还可以，如果数量多了，代码就看着有点复杂了，所以推荐另外一种方式，使用 sync包 提供的 WaitGroup 类型

::: details 多个协程代码示例

```go
func main() {
	done := make(chan bool)

	signChannel(done)
	<-done
	signChannel1(done)
	<-done

	fmt.Println("子协程执行完成了")
}

func signChannel(done chan bool) {
	go func() {
		for i := 0; i < 50; i++ {
			fmt.Println(i)
		}
		done <- true
	}()
}

func signChannel1(done chan bool) {
	go func() {
		for i := 0; i < 5; i++ {
			fmt.Println("字协程2")
		}
		done <- true
	}()
}


// 0
// 1
// 2
// 3
// 4
// 子协程2号
// 子协程2号
// 子协程2号
// 子协程2号
// 子协程2号
// 子协程执行完成了
```

:::

```
var 实例名 sync.WaitGroup
```

实例化WaitGroup后有几个常用的方法：

- `Add`：初始值为0，你传入的值会往计数器上加，这里直接传入你子协程的数量
- `Done`：当某个子协程完成后，可调用此方法，会从计数器上减一，通常可以使用 defer 来调用
- `Wait`：阻塞当前协程，直到实例里的计数器归零

# 练习源码

[Coroutine]()