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
func (person *Person) increaseAge() {
   person.age += 1
}
```