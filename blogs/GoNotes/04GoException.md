---
title: Go异常机制
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-16
---

::: tip 

:::

go语言中，常规的，在代码执行时发生数组访问越界，空指针引用等，都会触发异常`panic`，但是有时候也需要自己手动触发异常，比如端口号被占用等，手动触发异常，是程序停止运行

# 触发panic

直接使用内置的`panic`函数即可

```go
func touchOffPanic() {
	panic("touch off panic")
}

//panic: touch off panic
//goroutine 1 [running]:
//main.touchOffPanic(...)
```

# 捕获panic

这里需要另外一个函数`recover`，类似于java的`try-catch`，可以让程序跳过异常的地方继续执行

注意：`recover`只在`defer`下生效，在其他作用域不生效，如果没有异常`recover`的打印信息为`nil`，所以需要判空

```go
func main() {
	// 捕获异常
	catchPanic(10)
	fmt.Println("catched Pnic, program is ok")
}

func catchPanic(x int) {
	defer func() {
		// recover() 可以将捕获到的panic信息打印
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()
	var arr = [3]int{1, 2, 3}
	arr[x] = 10
}

// runtime error: index out of range [10] with length 3
// catched Pnic, program is ok
```

# 练习源码

[Exception](https://gitee.com/myMagicRain/go-study/tree/master/src/Exception)