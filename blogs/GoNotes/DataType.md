---
title: Go数据类型
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-10
---

::: tip 

:::

# 数据类型

go语言数据类型按语言类可分为**布尔型**、**数字类型**、**字符串类型**、**派生类型**；其中**派生类型**包含指针、数组、函数、map、接口、切片等；布尔型和字符串类型和常规的差不多，不做介绍

## 数字类型

### 整型

整形主要有int，uint，可以为int，int8，int16，int32，int64，uint一样

int和uint的区别主要是`u`，`u`代表无符号，

比如int8，能表示的数值个数有 2^8 = 256，范围-128~127；uint代表无符号，范围是0-256

### 浮点型

Go语言中提供了两种精度的浮点数 float32（单精度） 和 float64（双精度）

- float32的精度只能提供大约6个十进制数（表示后科学计数法后，小数点后6位）的精度
- float64的精度能提供大约15个十进制数（表示后科学计数法后，小数点后15位）的精度

```go
var myfloat float32 = 100000018
var myfloat01 float32 = 100000182
var myfloat02 float32 = 100000187

func main() {
	fmt.Println("myfloat: ", myfloat)
	fmt.Println("myfloat: ", myfloat+1)
	fmt.Println("myfloat01: ", myfloat01)
	fmt.Println("myfloat02: ", myfloat01+5)
	fmt.Println(myfloat02 == myfloat01+5)
	fmt.Print(myfloat == myfloat+1)
}
```

## 派生类型

### byte和rune

可以用来表示字符，byte占用1个字节，rune占用4个字节；byte 和 uint8 没有区别，rune 和 uint32 没有区别，uint标识数字，所以单独弄了byte和rune来标识字符，作以区分

```go
import (
    "fmt"
    "unsafe"
)

func main() {
    var a byte = 'A'
    var b rune = 'B'
    fmt.Printf("a 占用 %d 个字节数\nb 占用 %d 个字节数", unsafe.Sizeof(a), unsafe.Sizeof(b))
}
```

### 数组

申明数组，%d，%T为占位符，生效要使用 `fmt.Printf`

```go
func arrayFunc() {
	// 第一种方法
	var arr [3]int = [3]int{1, 2, 3}
	// 第二种方法
	arr1 := [3]int{1, 2, 3}
	// 让go自己分配空间
	arr2 := [...]int{1, 2, 3, 4}
	// 给类型起别名
	type arr3 [3]int
	arr4 := arr3{1, 2, 3}
	// 指定部分数组元素
	arr5 := arr3{1: 2}
	fmt.Println("arr:", arr, arr, "\narr2:", arr1, "\narr2:", arr2)
	fmt.Printf("%d 的类型是: %T\n", arr2, arr2)
	fmt.Printf("type占位符的类型是: %T\n", arr4)
	fmt.Printf("偷懒定义的方法 %d", arr5)
}
```

### 切片



### 进制

::: details fmt进制包的格式化

| 符号 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| %b   | 表示为二进制                                                 |
| %c   | 该值对应的unicode码值                                        |
| %d   | 表示为十进制                                                 |
| %q   | 该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示 |
| %x   | 表示为十六进制，使用a-f                                      |
| %X   | 表示为十六进制，使用A-F                                      |
| %U   | 表示为Unicode格式：U+1234，等价于"U+%04X"                    |
| %E   | 用科学计数法表示                                             |
| %f   | 用浮点数表示                                                 |

:::