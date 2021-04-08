---
title: Go开发环境配置
tags:
 - go
 - goland
categories: 
 - GoNotes
date: 2021-04-07
---

::: tip 

近年来go语言越来越火热，值得了解一下，扩宽下知识面，先简单学习下基础语法，go语言学习笔记
:::

# Goland配置

Goland作为JetBrains家族的一员，习惯IDEA开发的人通常选用此开发工具，也可以使用巨硬的VScode，这里只介绍Goland配置

* 配置GOROOT，类似于JDK

  点击Files->Settings->GOROOT，设置为go语言开发环境的路径
  
* 配置GOPTAH，类似于workspace

  点击Files->Settings->GOPATH，设置GOPATH为自己的项目路径

* 设置 goproxy，类似于maven一样，可以拉取一些库

  点击Files->Settings->Go Modules，设置GRPROXY，value可以为以下值：

  - `https://goproxy.io`
  - `https://goproxy.cn`
  - `https://mirrors.aliyun.com/goproxy/`

* 设置go imports（自动格式化插件）

  点击Files->Settings->Tools->File Watchers,  再点击 + 添加 goimports，会自动下载，需要科学上网才能下来，// todo



# Go

* GOROOT

  在GO语言中表示的是 Go语言编译、工具、标准库等的安装路径，通过它可以告诉系统你的 go.exe 是放在哪里，不设置的话，你后面执行 `go get` 、`go install` 的时候，系统就不认识它了

* GOPATH

  表示 Go的工作目录，这个目录指定了需要从哪个地方寻找GO的包、可执行程序等，这个目录可以是多个目录表示。这里我设置成我的工作空间（目录你可以自己定）

* 一般目录结构

```shell
project
├─bin	包含了可执行程序，注意是可执行的，不需要解释执行
├─pkg	包含了使用的包或者说库
└─src	里面包含了go的代码源文件，其中仍按包的不同进行组织
```

