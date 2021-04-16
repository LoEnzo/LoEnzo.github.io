---
title: Go流程控制
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-15
---

::: tip 

:::

# 条件语句

`if - else`语句，与其他语言相似，需要注意的是，go编译器需要`else if`、`else`两侧的`}``{`需要保持在同一行

if 后面跟的条件表达式，需要返回布尔类型，也是`true`或`false`，不能是0、1或者nil，同样支持 `&&`，`||`

```go
import "fmt"

func main() {
    age := 20
    gender := "male"
    if age > 18 {
        fmt.Println("已经成年了")
    } else if age >12 {
        fmt.Println("已经是青少年了")
    } else {
        fmt.Println("还不是青少年")
    }

    // 多条件
	if age > 18 && gender == "male" {
		fmt.Println("是成年男性")
	}
    
    // 组合使用
    if age := 20; age > 18 {
        fmt.Println("已经成年了")
    }
}
```

# 选择语句

格式如下，注意 case 表达式后的冒号

```go
switch 表达式 {
    case 表达式1:
        代码块
    case 表达式2:
    default:
        代码块
}
```

注意：

* switch 后面可以不接表达式，直接判定里面的case，此时逻辑类似于`else if`
* switch 后面可以接函数表达式，只要函数表达式返回值于case后面的值类型保持一致
* case 后边的表达式可以的简单表达式，多条件表达式（`或`用`，`隔开）
* fallthrough 穿透能力，可以返回判定下一个表达式的结果，但只能一层

常规单、多条件，fallthrough实例

```go
func switchNoCondition() {
	score := 30
	switch {
	case score >= 95 && score <= 100:
		fmt.Println("优秀")
	case score >= 80:
		fmt.Println("良好")
	case score >= 60:
		fmt.Println("合格")
	case score >= 0:
		fmt.Println("不合格")
		fallthrough
	case score <= 30, score >= 0:
		fmt.Println("差,fallthrough 穿透了第一层")
	case score > 100:
		fmt.Println("fallthrough 穿透不了第二层")
	default:
		fmt.Println("输入有误...")
	}
}

// 不合格
// 差,fallthrough 穿透了第一层
```

switch 后面接函数表达式

```go
func switchConditionFunc() {
	chinese := 80
	english := 50
	math := 100

	switch getResult(chinese, english, math) {
	// case 后也必须 是布尔类型
	case true:
		fmt.Println("该同学所有成绩都合格")
	case false:
		fmt.Println("该同学有挂科记录")
	}
}

func getResult(args ...int) bool {
	for _, i := range args {
		if i < 60 {
			return false
		}
	}
	return true
}

// 该同学有挂科记录
```

# 循环语句

for 循环语句后面可以跟三种表达形式，单表达式、多表达式（类似java fori循环），range表达式（遍历可迭代的对象），还有一种没有条件的，类似于死循环

格式：

```go
for [condition |  ( init; condition; increment ) | Range]
{
   statement(s);
}
```

* 单条件

```go
func forSingleFunc() {
	i := 0
	for i < 3 {
		fmt.Println(i)
		i++
	}
}
```

* 多条件

```go
func forMoreFunc() {
	for i := 0; i < 3; i++ {
		fmt.Println(i)
	}
}
```

* for-range

```go
func forRangeFunc() {
	myArr := [...]string{"arr1", "arr2", "arr3"}
	for _, item := range myArr {
		fmt.Printf("item is %s\n", item)
	}
}

// item is arr1
// item is arr2
// item is arr3
```

* 无条件

```go
func forNoFunc() {
	for {
    // 等价于 for ;;{
		fmt.Println("无限打印")
	}
}
```

# 无条件跳转语句

格式如下，goto打破原有的代码执行顺序，通常与条件语句使用实现条件转移，构成循环，跳出循环等功能，

注意：goto 标签 和 标签：表达式之前不能变量声明，否则会报语法错误

```go
goto 标签;
...
...
标签: 表达式;
```

打印1-10之间的偶数

```go
func getEvenNumberFunc() {
	i := 1
flag:
	for i <= 10 {
		if i%2 == 1 {
			i++
			goto flag
		}
		fmt.Println(i)
		i++
	}
}
```

# 延迟语句

格式如下：`defer`后面跟函数的调用即可，

`defer`的使用场景，对于多次资源调用的方法，最后需要关闭资源的场景，在return后会自动执行defer，避免多次手动关闭资源

```go
defer xxxfunc()
```

* `defer`只是延时函数的调用，不受后面的逻辑影响，多个`defer`逆序输出

```go
func deferOrderOneFunc() {
	name := "go"
	age := 18
	defer fmt.Println(name) // 输出: go
	defer fmt.Println(age)  // 输出: 18

	name = "python"
	fmt.Println(name) // 输出: python
}

// python
// 18
// go
```

* `defer`在return之后

```go
var name = "go"

func main() {
	// defer 顺序在 return之后
	myName := deferOrderTwoFunc() 
	fmt.Printf("main 函数里的name: %s\n", name)   // 先return name被defer修改了全局变量，name是go
	fmt.Println("main 函数里的myName: ", myName)  // return 后，name被defer修改了全局变量，此时赋值给myName的是python
}

func deferOrderTwoFunc() string {
	defer func() {
		name = "python"
	}()

	fmt.Printf("deferOrderTwoFunc 函数里的name：%s\n", name) // 此时，name全局变量为go
	return name	
}

// deferOrderTwoFunc 函数里的name：go
// main 函数里的name: python
// main 函数里的myName:  go
```

* `defer`与匿名函数

```go
func anonymousFunc() {
	name := "go"
	defer func() {
		fmt.Println(name) // 输出: python
	}()
	defer func(name string) {
		fmt.Println(name) // 输出: go
	}(name)
	name = "python"
	fmt.Println(name) // 输出: python
}

// python
// go
// python
```

* `defer`还可以修改返回值

```go
func triple(x int) (result int) {   // x传值4
	defer func() {
		result += x    // defer 修改返回值 8+4
	}()
	return double(x)   // 8
}

func double(x int) int {
	return x + x      // 4 + 4 
}

// 12
```

