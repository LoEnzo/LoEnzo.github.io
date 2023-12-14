---
title: Go面向对象
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-20
---

::: tip

:::

# 面向对象

## 结构体

声明结构体，格式：

```go
type 结构体名 struct {
    属性名   属性类型
    属性名   属性类型
    ...
}

// 示例 
type Person struct {
    name string
    age int
}
```

## 方法

构建一个方法，格式：

```go
func (实例名 结构体名) 方法名 {
}

// 示例 
func (person Person) FmtPerson {
    fmt.Printf("名字：%s\n", person.name)
    fmt.Printf("年龄：%d\n", person.age)
}
```

完整示例

```go
// 定义一个名为 Person 的结构体
type Person struct {
	name   string
	age    int
	gender string
}

// 定义一个与 Person 的绑定的方法
func (person Person) FmtPerson() {
	fmt.Printf("名字：%s\n", person.name)
	fmt.Printf("年龄：%d\n", person.age)
	fmt.Printf("性别：%s\n", person.gender)
}

func main() {
	// 实例化
	myself := Person{name: "小明", age: 24, gender: "male"}
	// 调用函数
	myself.FmtPerson()
}
```

## 方法参数类型

方法的参数类型可以是`实例`，也可以是`指针`，两者的区别在于参数为指针时，可以修改实例对象的属性值，

```go
// 参数是指针，去除*，修改person的属性值，打印结果为24
func (person *Person) increaseAge() {
   person.age += 1
}

fmt.Printf("当前年龄：%d\n", myself.age)

// 当前年龄：25
```

什么时候采用方法参数类型：

* 需要在方法体内改变结构体内容
* 出于性能原因，当结构体过大的时候，（未验证，参考别人说的）
* 考虑代码一致性

## 结构体继承

go里面没有类的概念，有的叫组合，把一个结构体的内容嵌入到另外一个结构体中就叫做组合，那个结构体可以直接使用内部结构体的属性

``` go
type company struct {
    companyName string
    companyAddr string
}

type staff struct {
    name string
    age int
    gender string
    position string
    company		// 匿名字段 等同于把company的属性都加入进来了
}

func main() {
	myCompany := company{"腾讯", "深圳"}
	myStaff := staff{"张三", 18, "男", "重庆", myCompany}
	fmt.Printf("%s 在 %s 工作\n", myStaff.name, myCompany.companyName)
	fmt.Printf("%s 在 %s 工作\n", myStaff.name, myStaff.companyName)
	fmt.Printf("%s 在 %s 工作\n", myStaff.name, myStaff.company.companyName)
}

// 张三 在 腾讯 工作
```

最终`myCompany.companyName`、`myStaff.companyName`、`myStaff.company.companyName`的结果都是一样的

## 内部方法和外部方法

go语言中，要区分函数`首字母大小写`，它决定方法的访问权限

* 首字母大写，这个方法对所有包都是`public`，都能调用
* 搜字母小写，这个方法是`private`，其他包无法访问

## 方法和函数的区别

方法可以理解为特殊的函数，当`函数和对象/结构体绑定`的时候，就可以称这个函数是个方法

* 函数

```go
func 函数名(形式参数列表)(返回值列表){
    函数体
}
```

* 方法

```go
func 方法名(实例名 结构体名)(返回值列表)(){
    方法体
}
```

# 练习源码

[Object](https://gitee.com/myMagicRain/go-study/tree/master/src/Object)