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

// arr: [1 2 3] [1 2 3] 
// arr2: [1 2 3] 
// arr2: [1 2 3 4]
// [1 2 3 4] 的类型是: [4]int
// type占位符的类型是: main.arr3
// 偷懒定义的方法 [0 2 0]
```

### 切片

切片（Slice）与数组一样，也是可以容纳若干类型相同的元素的容器,切片是对数组的一个连续片段的引用，所以切片是一个引用类型，这个片段可以是整个数组，也可以是由起始和终止索引标识的一些项的子集，需要注意的是，终止索引标识的项不包括在切片内（意思是这是个左闭右开的区间）

注意：

* 容量（`cap`）表示底层数组的大小，长度（`len`）是你可以使用的大小

容量的用处在哪？在与当你用append扩展长度时，如果新的长度小于容量，不会更换底层数组，否则，go会新申请一个底层数组，拷贝这边的值过去，把原来的数组丢掉。

也就是说，容量的用途是：在数据拷贝和内存申请的消耗与内存占用之间提供一个权衡。

而长度，则是为了帮助你限制切片可用成员的数量，提供边界查询的

* 由于 切片是引用类型，所以你不对它进行赋值的话，它的零值（默认值）是 nil

**切片构造**

* 数组截取

```go
func sliceFunc() {
	myArr := [...]int{1, 2, 3}
	fmt.Printf("%d 的类型是: %T\n", myArr[0:2], myArr[0:2])
	myarr := [5]int{1, 2, 3, 4, 5}
	fmt.Printf("myarr 的长度为：%d，容量为：%d\n", len(myarr), cap(myarr))
	mysli1 := myarr[1:3]
	fmt.Printf("mysli1 的长度为：%d，容量为：%d\n", len(mysli1), cap(mysli1))
    // 索引
	mysli2 := myarr[1:3:3]
	fmt.Printf("mysli2 的长度为：%d，容量为：%d\n", len(mysli2), cap(mysli2))
	mysli2 = append(mysli2, 1)
	fmt.Printf("mysli2 扩容后的长度为：%d，容量为：%d\n", len(mysli2), cap(mysli2))
}

// [1 2] 的类型是: []int
// myarr 的长度为：5，容量为：5
// mysli1 的长度为：2，容量为：4
// mysli2 的长度为：2，容量为：2
// mysli2 扩容后的长度为：3，容量为：4
```

* 从头声明赋值

```go
// 声明字符串切片
var strSlice []String
// 声明整形切片
var intSlice []int
// 声明空切片
var intEmptySlice []int{}
```

* 使用`make函数`构造，make函数的格式：`make( []Type, size, cap )`

```go
func main() {
 a := make([]int, 2)
 b := make([]int, 2, 10)
 fmt.Println(a, b)
 fmt.Println(len(a), len(b))
 fmt.Println(cap(a), cap(b))
}

// [0 0] [0 0]
// 2 2
// 2 10
```

* 跟数组一样，偷懒的写法

```go
func main() {
    a := []int{4:2}
    fmt.Println(a)
    fmt.Println(len(a), cap(a))
}

// [0,0,0,0,2]
// 5 5
```

### 字典

字典（Map 类型），是由若干个 `key:value` 这样的键值对映射组合在一起的数据结构

格式：`map[key_type]value_type`

* 声明初始化字典

```go
// 第一种
var scores map[string]int = map[string]int{"english": 80, "chinese": 85}
// 第二种
scores := map[string]int{"english": 80, "chinese": 85}
// 第三种
var scores = make(map[string]int)
scores["english"] = 80
scores["chinese"] = 85
```

* 相关操作

```go
// 添加元素，添加的元素key如果已存在，即更新value
scores["math"] = 99
// 读取元素，读取一个不存在的key，不会报错，返回这个value的零值，int即是0
fmt.Printf(scores["math"])
// 删除元素，如果key不存在，go静默处理，不会报错
delete.(scores,"math")
```

* 判断key是否存在

`key`不存在，值为0，但是key的value值可能就是0，所以不能根据是否为0来判断

```go
func judgeKeyFunc() {
	scores := map[string]int{"english": 80, "chinese": 85, "math": 100}
	math, ok := scores["math1"]
	if ok {
    // 可以省略为
    // if math, ok := scores["math1"]; ok {
		fmt.Printf("math值为 %d\n", math)
	} else {
		fmt.Printf("math值不存在\n")
	}
}
```

* 字典循环

```go
func circulateMapFunc() {
	scores := map[string]int{"english": 80, "chinese": 85}

	for subject, score := range scores {
		fmt.Printf("key: %s, value: %d\n", subject, score)
	}

	// 只获取key
	for key := range scores {
		fmt.Printf(key + "\n")
		fmt.Printf("key值为 %v\n", key)
	}

	// 只获取value
	for _, value := range scores {
		fmt.Printf("value值为 %d\n", value)
	}
}
```

### 布尔

true，代表真值，不能与1做比较

false，代表假值，不能与0做比较，需要自己些方法实现

使用`==`和`!=`来判断是否相等

使用 `&&` 表示`且`，用 `||` 表示`或`，并且有短路行为（即左边表达式已经可以确认整个表达式的值，那么右边将不会再被求值

### 指针

* 创建指针

```go
func createPointerFunc() {
	// 第一种
	aint := 1    // 定义普通变量
	ptr := &aint // 定义指针变量

	// 第二种
	astr := new(string) // 创建指针
	*astr = "Go指针创建"    // 给指针赋值

	var bint *int // 声明一个指针
	bint = &aint  // 初始化

	fmt.Println(ptr, astr, bint)
}
```

- `&` ：从一个普通变量中取得内存地址
- `*`：当`*`在赋值操作符（=）的右边，是从一个指针变量中取得变量值，当`*`在赋值操作符（=）的左边，是指该指针指向的变量

* 指针切片

```go
func sliceArrFunc() {
	a := [3]int{89, 90, 91}
	modify(a[:])
	fmt.Println(a)
}

func modify(sls []int) {
	sls[0] = 90
}	

// [90 90 91]
```

* 指定的零值

当指针声明后，没有进行初始化，其零值是 `nil`

## 其他

### 占位符

::: details 通用占位符

| 占位符 | 说明 |
| ---- | ---- |
| %v   | 值的默认格式表示                   |
| %+v  | 类似%v，但输出结构体时会添加字段名 |
| %#v  | 值的Go语法表示                     |
| %T   | 打印值的类型                       |
| %%   | 百分号                             |

:::

::: details 布尔型

| 占位符 | 说明        |
| ------ | ----------- |
| %t     | true或false |

:::

::: details 整型

| 占位符 | 说明        |
| :--- | :----------------------------------------------------------- |
| %b   | 表示为二进制                                                 |
| %c   | 该值对应的unicode码值                                        |
| %d   | 表示为十进制                                                 |
| %o   | 表示为八进制                                                 |
| %x   | 表示为十六进制，使用a-f                                      |
| %X   | 表示为十六进制，使用A-F                                      |
| %U   | 表示为Unicode格式：U+1234，等价于”U+%04X”                    |
| %q   | 该值对应的单引号括起来的go语法字符字面值，必要时会采用安全的转义表示 |

:::

::: details 浮点数与复数

| 占位符 | 说明        |
| :--- | :----------------------------------------------------- |
| %b   | 无小数部分、二进制指数的科学计数法，如-123456p-78      |
| %e   | 科学计数法，如-1234.456e+78                            |
| %E   | 科学计数法，如-1234.456E+78                            |
| %f   | 有小数部分但无指数部分，如123.456                      |
| %F   | 等价于%f                                               |
| %g   | 根据实际情况采用%e或%f格式（以获得更简洁、准确的输出） |
| %G   | 根据实际情况采用%E或%F格式（以获得更简洁、准确的输出） |

:::

::: details 字符串和[]byte

| 占位符 | 说明        |
| :--- | :----------------------------------------------------------- |
| %s   | 直接输出字符串或者[]byte                                     |
| %q   | 该值对应的双引号括起来的go语法字符串字面值，必要时会采用安全的转义表示 |
| %x   | 每个字节用两字符十六进制数表示（使用a-f                      |
| %X   | 每个字节用两字符十六进制数表示（使用A-F）                    |

::: 

::: details 指针

| 占位符 | 说明        |
| :--- | :----------------------------- |
| %p   | 表示为十六进制，并加上前导的0x |

:::

::: details 宽度标识符

| 占位符 | 说明        |
| :---- | :----------------- |
| %f    | 默认宽度，默认精度 |
| %9f   | 宽度9，默认精度    |
| %.2f  | 默认宽度，精度2    |
| %9.2f | 宽度9，精度2       |
| %9.f  | 宽度9，精度0       |

:::
