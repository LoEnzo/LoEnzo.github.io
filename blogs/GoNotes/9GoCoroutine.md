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

## 使用信道标识

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

## 使用WaitGroup

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
// 或
wg := sync.WaitGroup{}
```

实例化WaitGroup后有几个常用的方法：

- `Add`：初始值为0，你传入的值会往计数器上加，这里直接传入你子协程的数量，参数值要等于go协程数量，否则会报错，暂不知道怎么来确定这个值哦
- `Done`：当某个子协程完成后，可调用此方法，会从计数器上减一，通常可以使用 defer 来调用
- `Wait`：阻塞当前协程，直到实例里的计数器归零

```go
func main() {
    
	var wg sync.WaitGroup
    
	wg.Add(2)
	go useWaitGroup(1, &wg)
	go useWaitGroup(2, &wg)
	wg.Wait()

	fmt.Println("子协程执行完成了")
}

func useWaitGroup(x int, wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < 5; i++ {
		fmt.Printf("协程 %d: 输出：%d\n", x, i)
	}
}
```

如果传入的参数变成了下面这种，就会报错如下：

因为子线程函数，传入的参数是waitgroup的值拷贝，主协程的waitGroup wg并没有调用Done()，导致标志位没有释放，出现死锁

```go
func useWaitGroup(x int, wg sync.WaitGroup) {
	defer wg.Done()
	for i := 0; i < 5; i++ {
		fmt.Printf("协程 %d: 输出：%d\n", x, i)
	}
}

// ...
// 协程 1: 输出：3
// 协程 1: 输出：4
// fatal error: all goroutines are asleep - deadlock!

// goroutine 1 [semacquire]:
// sync.runtime_Semacquire(0xc00000a0a8)
```

# 互斥锁和读写锁

go语言中，面对并发，优先考虑信道，如果信道无法解决，需要使用共享内存来解决，就需要了解锁机制

## 互斥锁

互斥锁（Mutex，全称 mutual exclusion）是为了来保护一个资源不会因为并发操作而引起冲突导致数据不准确

Mutex锁定义方式

```go
var mutexLock *sync.Mutex
mutexLock = new(sync.Mutex)

mutexLock := &sync.Mutex{}
```

示例：

去除锁相关的代码，最终count的值小于30000，因为三个协程在同时执行，先读取count，再更新count值，count值不具备原子性，导致数据不准备

```go
func userMutex(count *int, wg *sync.WaitGroup, mutexLock *sync.Mutex) {
	for i := 0; i < 10000; i++ {
		mutexLock.Lock()		//
		*count = *count + 1
		mutexLock.Unlock()		//
	}
	wg.Done()
}

func main() {
	var wg sync.WaitGroup			//
	mutexLock := &sync.Mutex{}		//
	count := 0
	wg.Add(3)
	go userMutex(&count, &wg, mutexLock)
	go userMutex(&count, &wg, mutexLock)
	go userMutex(&count, &wg, mutexLock)
	wg.Wait()
	fmt.Println("count 的值为：", count)
}

// count 的值为： 30000
// 去除 锁相关代码，结果小于 30000
```

**注意**：

- 同一协程里，不要在尚未解锁时再次使加锁
- 同一协程里，不要对已解锁的锁再次解锁
- 加了锁后，别忘了解锁，必要时使用 defer 语句

## 读写锁

RWMutex 里提供了两种锁，每种锁分别对应两个方法，为了避免死锁，两个方法应成对出现，必要时请使用 defer。

- 读锁：调用 RLock 方法开启锁，调用 RUnlock 释放锁
- 写锁：调用 Lock 方法开启锁，调用 Unlock 释放锁（和 Mutex类似）

RWMutex 锁定义方式：

```go
var rwMutexLock *sync.RWMutex
rwMutexLock = new(sync.RWMutex)

// 第二种
rwMutexLock := &sync.RWMutex{}
```

示例：

```go
func userRWMutex(rwMutexLock *sync.RWMutex) {
	for i := 0; i < 4; i++ {
		go func(i int) {
			fmt.Printf("第 %d 个协程准备开始... \n", i)
			// 读锁开启
			rwMutexLock.RLock()
			fmt.Printf("第 %d 个协程获得读锁, sleep 1s 后，释放锁\n", i)
			time.Sleep(time.Second)
			// 读锁释放
			rwMutexLock.RUnlock()
		}(i)
	}
	time.Sleep(time.Second * 2)
}

func main() {
	rwMutexLock := &sync.RWMutex{}
	// 写锁开启
	rwMutexLock.Lock()
	// 写锁释放
	userRWMutex(rwMutexLock)
	// 写锁释放完成,函数里面的读锁才能继续执行
	rwMutexLock.Unlock()
	// 函数里面的读锁释放完成，才能执行下面的写锁
	rwMutexLock.Lock()
	fmt.Println("程序退出...")
	rwMutexLock.Unlock()
}

// 第 3 个协程准备开始...
// 第 0 个协程准备开始...
// 第 1 个协程准备开始...
// 第 2 个协程准备开始...
// 第 2 个协程获得读锁, sleep 1s 后，释放锁
// 第 3 个协程获得读锁, sleep 1s 后，释放锁
// 第 0 个协程获得读锁, sleep 1s 后，释放锁
// 第 1 个协程获得读锁, sleep 1s 后，释放锁
// 程序退出...
```

# Context

## 使用场景

* 超时请求，调用超时，直接返回错误，避免无线等待（WithTimeOut）
* http服务的request之间相互传递数据，类似于session，可以传递信息（WithValue）

Context，也叫上下文，接口定义如下：

```go
type Context interface {
    Deadline() (deadline time.Time, ok bool)
    Done() <-chan struct{}
    Err() error
    Value(key interface{}) interface{}
}
```

## 4个方法：

- `Deadline`：返回的第一个值是 **截止时间**，到了这个时间点，Context 会自动触发 Cancel 动作。返回的第二个值是 一个布尔值，true 表示设置了截止时间，false 表示没有设置截止时间，如果没有设置截止时间，就要手动调用 cancel 函数取消 Context。
- `Done`：返回一个只读的通道（只有在被cancel后才会返回），类型为 `struct{}`。当这个通道可读时，意味着parent context已经发起了取消请求，根据这个信号，开发者就可以做一些清理动作，退出goroutine。
- `Err`：返回 context 被 cancel 的原因。
- `Value`：返回被绑定到 Context 的值，是一个键值对，所以要通过一个Key才可以获取对应的值，这个值一般是线程安全的。

为什么需要Context

协程goroutine开启后，我们是无法强制关闭它的，一般关闭协程的原因有如下的方式：

* 协程执行完成，自己结束后退出，正常关闭
* 主进程异常，导致协程被迫退出，异常关闭，需要优化代码
* 通过通道发送信号，引导协程退出，开发者手动控制协程

::: details 手动控制协程关闭

```go
func main() {
	stopChan := make(chan bool)

	manualControlChan(stopChan)
	// 主进程延迟10秒，让协程可以运行，随后向stopChan信道传入true
	time.Sleep(10 * time.Second)
	fmt.Println("可以了，通知监控停止")
	stopChan <- true
}

func manualControlChan(stopChan chan bool) {
	go func() {
		for {
			select {
			case <-stopChan:
				// 当stopChan信道能检测到值后，模拟信道关闭
				fmt.Println("监控退出，停止了...")
				return
			default:
				fmt.Println("goroutine监控中...")
				time.Sleep(2 * time.Second)
			}
		}
	}()
}

// goroutine监控中...
// goroutine监控中...
// goroutine监控中...
// goroutine监控中...
// goroutine监控中...
// 可以了，通知监控停止
```

::: 

上面是一个协程的例子，如果是多个协程呢，采用标识的方式无疑很麻烦

::: details 手动关闭多个协程，可以使用close(chan)

```go
func main() {
	stopSingle := make(chan bool)
	for i := 1; i <= 5; i++ {
		go manualCloseChan(stopSingle, i)
	}
	time.Sleep(1 * time.Second)
	// 关闭所有 goroutine
	close(stopSingle)
	// 等待5s，若此时屏幕没有输出 <正在监控中> 就说明所有的goroutine都已经关闭
	time.Sleep(5 * time.Second)
	fmt.Println("主程序退出！！")
}

func manualCloseChan(ch chan bool, number int) {
	for {
		select {
		case v := <-ch:
			// 仅当 ch 通道被 close，或者有数据发过来(无论是true还是false)才会走到这个分支
			fmt.Printf("监控器%v，接收到通道值为：%v，监控结束。\n", number, v)
			return
		default:
			fmt.Printf("监控器%v，正在监控中...\n", number)
			time.Sleep(2 * time.Second)
		}
	}
}

// 监控器5，正在监控中...
// 监控器4，正在监控中...
// 监控器1，正在监控中...
// 监控器2，正在监控中...
// 监控器3，正在监控中...
// 监控器2，接收到通道值为：false，监控结束。
// 监控器5，接收到通道值为：false，监控结束。
// 监控器1，接收到通道值为：false，监控结束。
// 监控器4，接收到通道值为：false，监控结束。
// 监控器3，接收到通道值为：false，监控结束。
// 主程序退出！！
```

:::

根Context

一个是Background，主要用于main函数、初始化以及测试代码中，作为Context这个树结构的最顶层的Context，也就是根Context，它不能被取消。

一个是TODO，如果我们不知道该使用什么Context的时候，可以使用这个，但是实际应用中，暂时还没有使用过这个TODO。

他们两个本质上都是emptyCtx结构体类型，是一个不可取消，没有设置截止时间，没有携带任何值的Context

```go
var (
    background = new(emptyCtx)
    todo       = new(emptyCtx)
)

func Background() Context {
    return background
}

func TODO() Context {
    return todo
}
```

```go
type emptyCtx int

func (*emptyCtx) Deadline() (deadline time.Time, ok bool) {
    return
}

func (*emptyCtx) Done() <-chan struct{} {
    return nil
}

func (*emptyCtx) Err() error {
    return nil
}

func (*emptyCtx) Value(key interface{}) interface{} {
    return nil
}
```

## Context简单使用

```go
ctx, cancel := context.WithCancel(context.Background())
```

::: details 使用context，关闭多个协程

```go
func main() {
	// 简单使用context关闭多个协程
	ctx, cancel := context.WithCancel(context.Background())
	for i := 1; i <= 5; i++ {
		go manualCloseChanWithContext(ctx, i)
	}
	time.Sleep(1 * time.Second)	
	// 关闭所有 goroutine
	cancel()
	// 等待5s，若此时屏幕没有输出 <正在监控中> 就说明所有的goroutine都已经关闭
	time.Sleep(5 * time.Second)
	fmt.Println("主程序退出！！")
}

func manualCloseChanWithContext(ctx context.Context, number int) {
	for {
		select {
		// 其实可以写成 case <- ctx.Done(),这里为了便于查看 ctx.Done()返回内容
		case v := <-ctx.Done():
			fmt.Printf("监控器%v，接收到通道值为：%v，监控结束。\n", number, v)
			return
		default:
			fmt.Printf("监控器%v，正在监控中...\n", number)
			time.Sleep(2 * time.Second)
		}
	}
}

// 监控器1，正在监控中...
// 监控器3，正在监控中...
// 监控器2，正在监控中...
// 监控器4，正在监控中...
// 监控器5，正在监控中...
// 监控器4，接收到通道值为：{}，监控结束。
// 监控器1，接收到通道值为：{}，监控结束。
// 监控器2，接收到通道值为：{}，监控结束。
// 监控器5，接收到通道值为：{}，监控结束。
// 监控器3，接收到通道值为：{}，监控结束。
// 主程序退出！！
```

:::

## Context的继承

context的4个with函数

```go
func WithCancel(parent Context) (ctx Context, cancel CancelFunc)
func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc)
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)
func WithValue(parent Context, key, val interface{}) Context
```

第一个参数都是父Context，初次创建都是传入根context，比如上面的WithCancel()创建的context，如果把这个context传入下一个withDeadline()创建的 context，那么它也同样具有cancel的功能

```go
// cancelCtx 具有cancel协程的功能
cancelCtx, cancel := context.WithCancel(context.Background())
// deadline 具有deadline和cancel协程的功能
deadlineCtx, cancel := context.WithDeadline(cancelCtx, time.Now().Add(1 * time.Second))
```

WithDeadline 和 WithTimeout 

```go
// 传入的第二个参数是 time.Time 类型，它是一个绝对的时间，意思是在什么时间点超时取消
func WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc)

// 传入的第二个参数是 time.Duration 类型，它是一个相对的时间，意思是多长时间后超时取消
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)
```

::: details context继承 WithDeadline 和 WithDeadline

```go
func main() {
	ctx01, cancel := context.WithCancel(context.Background())
	ctx02, cancel := context.WithDeadline(ctx01, time.Now().Add(1 * time.Second))
    // 相比例子1，仅有这一行改动
    // ctx02, cancel := context.WithTimeout(ctx01, 1* time.Second)
	defer cancel()
	for i :=1 ; i <= 5; i++ {
		go manualCloseChanWithContext(ctx02, i)
	}
	time.Sleep(5  * time.Second)
	if ctx02.Err() != nil {
		fmt.Println("监控器取消的原因: ", ctx02.Err())
	}
	fmt.Println("主程序退出！！")
}

// 监控器1，正在监控中...
// 监控器5，正在监控中...
// 监控器2，正在监控中...
// 监控器3，正在监控中...
// 监控器4，正在监控中...
// 监控器4，接收到通道值为：{}，监控结束。
// 监控器3，接收到通道值为：{}，监控结束。
// 监控器5，接收到通道值为：{}，监控结束。
// 监控器2，接收到通道值为：{}，监控结束。
// 监控器1，接收到通道值为：{}，监控结束。
// 监控器取消的原因:  context deadline exceeded
// 主程序退出！
```

:::

## WithValue

通过context可以传递一些必须的元数据，这些数据附加在context上，元数据以key-value形式传入，key具有可以性，value必须是线程安全的

::: details WithValue context携带 key-value，子context可以继承夫context的key-value

```go
func main() {
	ctx01, cancel := context.WithCancel(context.Background())
	ctx02, cancel := context.WithTimeout(ctx01, 1*time.Second)
	// WithValue context携带元数据 key-value
	ctx03 := context.WithValue(ctx02, "item", "CPU")
	defer cancel()
	for i := 1; i <= 5; i++ {
		go manualCloseChanWithContext(ctx03, i)
	}
	time.Sleep(5 * time.Second)
	if ctx02.Err() != nil {
		fmt.Println("监控器取消的原因: ", ctx03.Err())
	}
	fmt.Println("主程序退出！！")
}

func manualCloseChanWithContext(ctx context.Context, number int) {
	for {
		select {
		// 其实可以写成 case <- ctx.Done(),这里为了便于查看 ctx.Done()返回内容
		case v := <-ctx.Done():
			fmt.Printf("监控器%v，接收到通道值为：%v，监控结束。\n", number, v)
			return
		default:
			// 获取context中携带的value值
			value := ctx.Value("item")
			fmt.Printf("监控器%v，正在监控 %v ...\n", number, value)
			// 获取 item 的值
			time.Sleep(2 * time.Second)
		}
	}
}

// 监控器2，正在监控 CPU ...
// 监控器1，正在监控 CPU ...
// 监控器4，正在监控 CPU ...
// 监控器3，正在监控 CPU ...
// 监控器5，正在监控 CPU ...
// 监控器3，接收到通道值为：{}，监控结束。
// 监控器4，接收到通道值为：{}，监控结束。
// 监控器2，接收到通道值为：{}，监控结束。
// 监控器1，接收到通道值为：{}，监控结束。
// 监控器5，接收到通道值为：{}，监控结束。
// 监控器取消的原因:  context deadline exceeded
// 主程序退出！！
```

:::

# Context使用的一些注意事项：

* Context 作为函数的第一个参数传入，变量命名统一为ctx
* Context 是线程安全的，可以放心地在多个 goroutine 中使用
* Context 传递给多个 goroutine 时候，只要执行一次 cancel()，所有的 goroutine 都可以收到结束信号
* 不要把原本可以由函数参数来传递的变量，交给 Context 的 Value 来传递
* 当一个函数需要接收一个 Context 时，但是此时你还不知道要传递什么 Context 时，可以先用 context.TODO 来代替，而不要选择传递一个 nil
* 当一个 Context 被 cancel 时，继承自该 Context 的所有 子 Context 都会被 cancel

# 练习源码

[Coroutine](https://gitee.com/myMagicRain/go-study/tree/master/src/Coroutine)