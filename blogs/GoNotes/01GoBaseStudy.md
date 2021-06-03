---
title: Go变量创建
tags:
 - go
 - goland
categories: 
 - GoNotes
date: 2021-04-08
---

::: tip

:::

# 变量

变量分为`普通变量`和`指针变量`

## 变量创建

* 一行声明一个变量

```go
var <name> <type>

// eg:
var name string = "张三" 
var name = "张三"
var rate float32 = 0.89

// 注： 
// 单双引号区分，双引号说明为string，可以省略类型定义
// 值为小数点为指定详细类型的情况下，编译器会指定为 float64，占用内存更大，可以指自己手动指定
```

* 多个变量一起声明

```go
// eg:
var (
    name string
    age int
    gender string
)

// 注：可以分开定义，也可以批量定义
```

* 声明和初始化一个变量

```go
<name> := <value>

// eg:
name := "张三"

// 注：
// 这种定义方式等同于第一种定于方式，但是有限制，只能用于 函数内部
```

* new 函数声明一个指针变量

```go
package main

import "fmt"

func main()  {
    var age int = 28
    var ptr = &age  // &后面接变量名，表示取出该变量的内存地址
    fmt.Println("age: ", age)
    fmt.Println("ptr: ", ptr)
}

// 输出结果
// age:  28
// ptr:  0xc000010098
```

而这里要说的 new 函数，是 Go 里的一个内建函数。

使用表达式 `new(Type)` 将创建一个Type类型的`匿名变量`，初始化为Type类型的零值，然后`返回变量地址`，返回的`指针类型`为`*Type`。

```go
package main

import "fmt"

func main()  {
    ptr := new(int)
    fmt.Println("ptr address: ", ptr)
    fmt.Println("ptr value: ", *ptr)  // * 后面接指针变量，表示从内存地址中取出值
}

// 输出
// ptr address:  0xc000010098
// ptr value:  0
```

用new创建变量和普通变量声明语句方式创建变量没有什么区别，除了不需要声明一个临时变量的名字外，我们还可以在表达式中使用new(Type)。换言之，new函数类似是一种语法糖，而不是一个新的基础概念。

如下两种写法，可以说是等价的

```go
// 使用 new
func newInt() *int {
    return new(int)
}

// 使用传统的方式
func newInt() *int {
    var dummy int
    return &dummy
}
```

以上不管哪种方法，变量/常量都只能声明一次，声明多次，编译就会报错。

但也有例外，这就要说到一个特殊变量：**匿名变量**，也称作占位符，或者空白标识符，用下划线表示。

匿名变量，优点有三：

- 不分配内存，不占用内存空间
- 不需要你为命名无用的变量名而纠结
- 多次声明不会有任何问题

通常我们用匿名接收必须接收值，但是又不会用到的值。

```go
func GetData() (int, int) {
    return 100, 200
}
func main(){
    a, _ := GetData()
    _, b := GetData()
    fmt.Println(a, b)
}
```

