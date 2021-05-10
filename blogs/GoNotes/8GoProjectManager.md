---
title: Go项目管理
tags:
 - go
categories: 
 - GoNotes
date: 2021-04-25
---

::: tip

:::

# 包的知识点

* 导包可以多行导入

```go
import(
    "fmt"
    "sync"
)
```

* 可以使用别名，避免同一包名产生冲突

```go
import mrand "math/rand"
```

* 使用点

但这种用法，会有一定的隐患，就是导入的包里可能有函数，会和我们自己的函数发生冲突

```go
import . "fmt"

func main() {
    Println("hello, world")
}
```

* 包的初始化`init`

包被导入时，会执行`init`函数，优先于`main`函数，不能有参数和返回值，**建议少用，仅用于全局变量初始化，或者单元测试初始化一些东西**

* 包的匿名导入

导入一个没有用到的包在编译的时候会报错，如果只想使用`init`函数来初始化一些任务，可以对包进行匿名导入

```go
import _ "packgename"
```

* 导入的包是路径

* 使用绝对路径导入，而不是相对路径，避免改变了项目放在`src`下，改变了`GOPATH`而导致运行报错

* 包导入的路径的优先级

如果项目下有`vendor`目录，那么优先级是`vender > $GOROOT/src > $GOPATH/src`

通常`vendor` 目录是通过 `go mod vendor` 命令生成的，这个命令会将项目依赖全部打包到你的项目目录下的 verdor 文件夹中

# Go Modules

go的包管理方式，从`GOPATH`到`GO VENDOR`到`GO  MODULES`，推荐使用`Go Modules`

* GOPATH

  可以理解为工作目录，通常的目录结构如下，主要弊端无法在项目中使用指定版本的包，因为其没有包的概念，一个包只能保留一个版本

```go
|_bin：存放编译后生成的二进制可执行文件
|_pkg：存放编译后生成的 .a 文件
|_src：存放项目的源代码，可以是你自己写的代码，也可以是你 go get 下载的包
```

* go vender

  为了解决 GOPATH 方案下不同项目下无法使用多个版本库的问题，Go v1.5 开始支持 vendor	

  它在每个项目的下都创建一个`vendor`目录，每个项目需要的以来都下载到该目录下，项目之间不相互影响，但是项目同一个包极大可能被多个项目用到了，每个项目下都保留无疑是对磁盘空间的浪费，别人要使用你的项目，你还得想你依赖的包都上传，否则别人很可能无法使用】

* go mod

  go v1.11版本开始，`go env`多了个环境变量`GO111MODULE`，通过它可以开启或关闭 go mod 模式，它有三个可选值：`off`、`on`、`auto`，默认值是`auto`

  * `GO111MODULE=off`禁用模块支持，编译时会从`GOPATH`和`vendor`文件夹中查找包
  * `GO111MODULE=on`启用模块支持，编译时会忽略`GOPATH`和`vendor`文件夹，只根据 `go.mod`下载依赖
  * `GO111MODULE=auto`，当项目在`$GOPATH/src`外且项目根目录有`go.mod`文件时，自动开启模块支持

```go
// 开启方式
$ go env -w GO111MODULE="on"
```

