---
title: Go反射
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-25
---

::: tip

:::

# 反射三定律

Go 语言里有个反射三定律，是你在学习反射时，很重要的参考：

1. Reflection goes from interface value to reflection object.
2. Reflection goes from reflection object to interface value.
3. To modify a reflection object, the value must be settable.

翻译一下，就是：

1. 反射可以将接口类型变量 转换为“反射类型对象”；
2. 反射可以将 “反射类型对象”转换为 接口类型变量；
3. 如果要修改 “反射类型对象” 其类型必须是 可写的；

## 两种类型：Type 和 Value

**真实世界，反射世界**

这里学习原作者的理解，将反射前环境称为 **真实世界**，而将反射后的环境称为 **反射世界**，比喻不严谨，但是便于理解，所以我这里也跟着这么学的

**反射类型**

go反射中有两种类型是反射的核心，学习`reflect`包，需要先学习，`reflect.Type`、`reflect.Value`

他们分别对应真实世界里的`type`和`value`

一个接口变量，分别由`type`和`data`一起组成的，在反射世界里，两者是分开存在，分别由`reflect.Type`、`reflect.Value`表现

::: details eflect.Type`是以接口的形式存在的，部分代码

```go
type Type interface {
    Align() int
    FieldAlign() int
    Method(int) Method
    MethodByName(string) (Method, bool)
    NumMethod() int
    Name() string
    PkgPath() string
    Size() uintptr
    String() string
    Kind() Kind
    Implements(u Type) bool
    AssignableTo(u Type) bool
    ConvertibleTo(u Type) bool
    Comparable() bool
    Bits() int
    ChanDir() ChanDir
    IsVariadic() bool
    Elem() Type
    Field(i int) StructField
    FieldByIndex(index []int) StructField
    FieldByName(name string) (StructField, bool)
    FieldByNameFunc(match func(string) bool) (StructField, bool)
    In(i int) Type
    Key() Type
    Len() int
    NumField() int
    NumIn() int
    NumOut() int
    Out(i int) Type
    common() *rtype
    uncommon() *uncommonType
}
```

:::

::: details  reflect.Value 是以一个结构体的形式存在

```go
type Value struct {
    typ *rtype
    ptr unsafe.Pointer
    flag
}
```

:::

::: details reflect.Value 接收的方法

```go
Addr
Bool
Bytes
runes
CanAddr
CanSet
Call
CallSlice
call
Cap
Close
Complex
Elem
Field
FieldByIndex
FieldByName
FieldByNameFunc
Float
Index
Int
CanInterface
Interface
InterfaceData
IsNil
IsValid
IsZero
Kind
Len
MapIndex
MapKeys
MapRange
Method
NumMethod
MethodByName
NumField
OverflowComplex
OverflowFloat
OverflowInt
OverflowUint
Pointer
Recv
recv
Send
send
Set
SetBool
SetBytes
setRunes
SetComplex
SetFloat
SetInt
SetLen
SetCap
SetMapIndex
SetUint
SetPointer
SetString
Slice
Slice3
String
TryRecv
TrySend
Type
Uint
UnsafeAddr
assignTo
Convert
```

:::

## 反射的三大定律

Go 语言里有个反射三定律，是你在学习反射时，很重要的参考：

* Reflection goes from interface value to reflection object；反射可以将接口类型变量 转换为“反射类型对象”；

* Reflection goes from reflection object to interface value；反射可以将 “反射类型对象”转换为 接口类型变量；

* To modify a reflection object, the value must be settable；如果要修改 “反射类型对象” 其类型必须是 可写的；

### 第一定律

反射可以将接口类型变量 转换为“反射类型对象”



### 第二定律

反射可以将 “反射类型对象”转换为 接口类型变量



### 第三定律

如果要修改 “反射类型对象” 其类型必须是 可写的