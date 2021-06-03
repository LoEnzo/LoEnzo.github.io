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

# Go包管理

## go包管理发展历程

go的包管理方式，从`GOPATH`到`go vender`到`go modules`，推荐使用`go modules`

* `GOPATH`

  可以理解为工作目录，通常的目录结构如下，包保存路径`$GOPATH/src`下，主要弊端无法在项目中使用指定版本的包，因为其没有包的概念，一个包只能保留一个版本
  
  ```shell
  |_bin：存放编译后生成的二进制可执行文件
  |_pkg：存放编译后生成的 .a 文件
  |_src：存放项目的源代码，可以是你自己写的代码，也可以是你 go get 下载的包
  ```

* `go vender`

  为了解决 `GOPATH` 方案下不同项目下无法使用多个版本库的问题，Go v1.5 开始支持 `vendor`	

  它在每个项目的下都创建一个`vendor`目录，每个项目需要的以来都下载到该目录下，项目之间不相互影响，但是项目同一个包极大可能被多个项目用到了，每个项目下都保留无疑是对磁盘空间的浪费，别人要使用你的项目，你还得先将你依赖的包都上传，否则别人很可能无法使用

* `go modules`

  [参考](https://segmentfault.com/a/1190000021854441)

  go v1.11版本开始，`go env`多了个环境变量`GO111MODULE`，通过它可以开启或关闭 go mod 模式，它有三个可选值：`off`、`on`、`auto`，默认值是`auto`
  
  在项目根目录执行`go mod init`，会生成`go.mod`文件
  
* go包依赖顺序
  
  包保存路径在`$GOPATH/pkg/mod`下，有多版本区分，多个项目可以共享缓存的modules，可以结合vendor一起使用，将项目和vendor文件夹一起上传，可以让别人直接使用的依赖包，而不需要重复下载
  
  * `GO111MODULE=off`：禁用模块支持，编译时会从`GOPATH`和`vendor`文件夹中查找包，
  * `GO111MODULE=on`：启用模块支持，编译时会忽略`GOPATH`和`vendor`文件夹，只根据 `go.mod`下载依赖，
  * `GO111MODULE=auto`：当项目在`$GOPATH/src`外且项目根目录有`go.mod`文件时，自动开启模块支持，

```go
// 开启go mod方式
go env -w GO111MODULE="on"

// 设置代理，加速依赖下载
go env -w GOPROXY=https://goproxy.cn,direct
```

## go mod

### go modules 模式核心文件

`go.mod`

- 第一行：模块的引用路径
- 第二行：项目使用的 go 版本
- 第三行：项目所需的直接依赖包及其版本

简单的 go.mod

如何将依赖写入`go.mod`，通过`go get `下载安装指定的依赖，或者`go build`导入import中的依赖也能自动下载

```go
module go-study

go 1.16

require github.com/qq827435393/gohello v0.0.0-20201127010752-c29ed43981d7
```

复杂的go.mod

- `exclude`： 忽略指定版本的依赖包
- `replace`：由于在国内访问golang.org/x的各个包都需要翻墙，你可以在go.mod中使用replace替换成github上对应的库。

```go
module github.com/BingmingWong/module-test

go 1.14

require (
    example.com/apple v0.1.2
    example.com/banana v1.2.3
    example.com/banana/v2 v2.3.4
    example.com/pear // indirect
    example.com/strawberry // incompatible
)

exclude example.com/banana v1.2.4
replace（
    golang.org/x/crypto v0.0.0-20180820150726-614d502a4dac => github.com/golang/crypto v0.0.0-20180820150726-614d502a4dac
    golang.org/x/net v0.0.0-20180821023952-922f4815f713 => github.com/golang/net v0.0.0-20180826012351-8a410e7b638d
    golang.org/x/text v0.3.0 => github.com/golang/text v0.3.0
)
```

`go.sum`

每一行都是由 `模块路径`，`模块版本`，`哈希检验值` 组成，其中哈希检验值是用来保证当前缓存的模块不会被篡改。hash 是以`h1:`开头的字符串，表示生成checksum的算法是第一版的hash算法（sha256）

**注意**：`go.mod 和 go.sum 是 go modules 版本管理的指导性文件，因此 go.mod 和 go.sum 文件都应该提交到你的 Git 仓库中去，避免其他人使用你写项目时，重新生成的go.mod 和 go.sum 与你开发的基准版本的不一致`

### go mod 相关指令

| 命令            | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| go mod init     | 生成 go.mod 文件                                             |
| go mod download | 下载 go.mod 文件中指明的所有依赖到本地cache，默认为`$GOPATH/pkg/mod`目录） |
| go mod tidy     | 整理现有的依赖（添加缺少的包，且删除无用的包）               |
| go mod graph    | 查看现有的依赖结构                                           |
| go mod edit     | 编辑 go.mod 文件，-fmt 格式化文件                            |
| go mod vendor   | 导出项目所有的依赖到vendor目录                               |
| go mod verify   | 校验一个模块是否被篡改过                                     |
| go mod why      | 查看为什么需要依赖某模块                                     |

## go 包管理器

go get 有时候会下载不下来需要的包，这里就需要一个叫`gopm`，就是go的包管理器，类似于 node.js 的包管理器 npm一样，我本地有时又go下载快，选择使用吧

`gopm`也是一个包，也需要先下载下来

```shell
# 下载
go get -u github.com/gpmgo/gopm
# 安装，先切换目录到 $GOPATH/src/github.com/gpmgo/gopm
go install
# 就可以在 $GOPATH/bin下看到可执行文件了
gopm.exe
# 检测是否安装成功
gopm -v
Gopm version 0.8.8.0307 Beta
```

注意：全局go配置 `set GO111MODULE=auto`，默认也是auto，如果改过on的需要修改为auto即可，`go env -w GO111MODULE="auto"`

`gopm`使用方式

```shell
Commands
NAME:
   Gopm - Go Package Manager

USAGE:
   Gopm [global options] command [command options] [arguments...]

COMMANDS:
   list		list all dependencies of current project			# 列出当前项目的所有依赖项
   gen		generate a gopmfile for current Go project			# 为当前Go项目生成gopmfile
   get		fetch remote package(s) and dependencies			# 获取远程包和依赖项
   bin		download and link dependencies and build binary		# 下载并链接依赖项，构建二进制文件
   config	configure gopm settings								# 配置gopm设置
   run		link dependencies and go run						# 链接依赖项并运行	
   test		link dependencies and go test						# 链接相关性和go测试
   build	link dependencies and go build						# 链接依赖项并开始构建
   install	link dependencies and go install					# 链接依赖项并开始安装
   clean	clean all temporary files							# 清除所有临时文件
   update	check and update gopm resources including itself	# 检查和更新gopm资源，包括其自身
   help, h	Shows a list of commands or help for one command	# 显示命令列表或一个命令的帮助

GLOBAL OPTIONS:
   --noterm, -n		disable color output
   --strict, -s		strict mode
   --debug, -d		debug mode
   --help, -h		show help
   --version, -v	print the version
```

## go运行相关指令

| **指令**       | **说明**                                                     |
| -------------- | ------------------------------------------------------------ |
| **go fmt**     | 格式化文档                                                   |
| **go build**   | 构建出符合平台的二进制文件，windows下就位`.exe`              |
| **go install** | 如果设置了`GOBIN`，执行后会在`$GOPATH/bin`目录生成`.exe`可执行文件 |
| **go run**     | 编译后直接执行                                               |
| **go test**    | 详细见上一篇文档                                             |
| ...            | ...                                                          |

## go 编码规范

[参考](http://golang.iswbm.com/en/latest/c03/c03_04.html#)

* 文件命名

  建议统一小写，不同单词之间用“_”隔开，测试文件以`_test.go`结尾

* 常量命名

  建议大写下划线分割，可以于变量区分开

* 变量命名

  建议驼峰

* 函数命名

  建议驼峰，`注意`：go根据函数手写字母大小写区分外包能不能访问，需要则大写，不需要小写

* 接口命名

* 注释

* 包导入