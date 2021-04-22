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

## 实现接口

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

## 接口实现多态

鸭子类型（Duck typing）的定义是，只要你长得像鸭子，叫起来也像鸭子，那我认为你就是一只鸭子

举个例子，我先定义商品（Goods）接口，意思是一个类型或者结构体，其中具有一些方法，`getPrice()` 和 `orderInfo()` 两个方法，那么我们可以理解为，只要实现了这两个方法的类型/结构体就可以称之为一个商品

* 定义一个`Goods`接口，里面有`getPrice`

```go
type Good interface {
    getPrice() int
    orderInfo() string
}
```

* 定义两个结构体，分别是`Computer`和`FreeGift`

```go
type Computer struct {
    name string
    quantity int
    price int
}

type FreeGift struct {
    name string
    quantity int
    price int
}
```

* 实现`Goods`的两个方法，`Computer`和`FreeGift`都算是商品`Goods`了

```go
// Computer
func (computer Computer) getPrice() int {
	return computer.quantity * computer.price
}
func (computer Computer) orderInfo() string {
	return "您要购买" + strconv.Itoa(computer.quantity) + "个" +
		computer.name + "计：" + strconv.Itoa(computer.getPrice()) + "元"
}

// FreeGift
func (gift FreeGift) getPrice() int {
	return 0
}
func (gift FreeGift) orderInfo() string {
	return "您要购买" + strconv.Itoa(gift.quantity) + "个" +
		gift.name + "计：" + strconv.Itoa(gift.getPrice()) + "元"
}
```

* 对商品`Computer`和`FreeGift`进行实例化

```go
computer := Computer{
	name:     "computer",
	quantity: 1,
	price:    8000,
}
earphones := FreeGift{
	name:     "耳机",
	quantity: 1,
	price:    200,
}
```

* 创建一个购物车，（也就是类型为 Good的切片），来存放这些商品

```go
goods := []Goods{computer, earphones}
```

* 并调用方法计算最终的价格

```go
func calculateAllPrice(goods []Goods) int {
	var allPrice int
	for _, good := range goods {
		fmt.Println(good.orderInfo())
		allPrice += good.getPrice()
	}
	return allPrice
}
```

::: details 完整代码如下：

```go
package main

import (
	"fmt"
	"strconv"
)

// 定义一个接口
type Goods interface {
	getPrice() int
	orderInfo() string
}

type Computer struct {
	name     string
	quantity int
	price    int
}

// 实现Goods接口
func (computer Computer) getPrice() int {
	return computer.quantity * computer.price
}
func (computer Computer) orderInfo() string {
	return "您要购买" + strconv.Itoa(computer.quantity) + "个" +
		computer.name + "计：" + strconv.Itoa(computer.getPrice()) + "元"
}

type FreeGift struct {
	name     string
	quantity int
	price    int
}

func (gift FreeGift) getPrice() int {
	return 0
}
func (gift FreeGift) orderInfo() string {
	return "您要购买" + strconv.Itoa(gift.quantity) + "个" +
		gift.name + "计：" + strconv.Itoa(gift.getPrice()) + "元"
}

// 计算价格方法
func calculateAllPrice(goods []Goods) int {
	var allPrice int
	for _, good := range goods {
		fmt.Println(good.orderInfo())
		allPrice += good.getPrice()
	}
	return allPrice
}

func main() {
	// 实例化
	computer := Computer{
		name:     "computer",
		quantity: 1,
		price:    8000,
	}
	earphones := FreeGift{
		name:     "耳机",
		quantity: 1,
		price:    200,
	}

	goods := []Goods{computer, earphones}
	allPrice := calculateAllPrice(goods)
	fmt.Printf("该订单总共需要支付 %d 元", allPrice)
}

// 您要购买1个computer计：8000元
// 您要购买1个耳机计：0元
// 该订单总共需要支付 8000 元
```

:::

## 类型断言

Type Assertion（中文名叫：类型断言），作用如下：

* 判断类型是否为`nil`
* 判断类型是否为某个具体类型

使用方式有两种：

* 第一种：`t := i.(T)`

  可以断言一个接口对象`i`里面是不是`nil`，`i`代表接口对象，`T`代表接口对象存储的值类型，如果断言成功，返回`t`，断言失败，触发`panic`

```go
func triggerPanicOne() {
	var i interface{} = 10
	t1 := i.(int)
	fmt.Println(t1)
	t2 := i.(string)
	fmt.Println(t2)
}

// 10
// panic: interface conversion: interface {} is int, not string
```

* 第二种：`t, ok:= i.(T)`

```go
func main() {
    var i interface{} = 10
    t1, ok := i.(int)
    fmt.Printf("%d-%t\n", t1, ok)
}

// 10-true
```

