---
title: Go接口
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-20
---

::: tip

:::

在 Go 语言中，接口就是方法签名（Method Signature）的集合，**接口指定了一个类型应该具有的方法，并由该类型决定如何实现这些方法**。

# 接口定义

使用`type`关键字来定义接口，格式：

```go
type ObejctName interface {
    method()
}
```

定义电话接口，里面包含`call()`方法

```go
type phone interface {
    call()
    send(message string)
}
```

实现接口

```go
type XiaoMi struct {
	name string
}

// 函数
func Call(phone Phone) {
	phone.send("消息")
}

// XiaoMi 实现 Phone 的方法
func (phone XiaoMi) call() {
	fmt.Printf("我是一台 %s 手机，我能打电话 \n", phone.name)
}

func (phone XiaoMi) send(message string) {
	fmt.Printf("我能发送 %s\n", message)
}

func main() {
	xiaoMi := XiaoMi{name: "小米"}
	xiaoMi.call()
	xiaoMi.send("消息")
    
    // 调用函数，传xiaoMi,因为 XiaoMi实现了Phone的方法，所以XiaoMi也是一个电话
	Call(xiaoMi)
}

// 我是一台 小米 手机，我能打电话 
// 我能发送 消息
// 我能发送 消息
```

