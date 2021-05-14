---
title: Cmd 操作手册
tags:
 - cmd
categories:
 - StudyNotes
date: 2020-05-11
---

::: tip

Cmd用到的命令汇总，每次使用都会忘记，单独写一篇用到了就及时记录一下

:::

<!-- more -->


## 网络测试

### 1. telnet 命令

* 作用：检测网络是否畅通

* （1）telnet IP 端口。

  （2）telnet 域名 端口。 

* 事例：telnet 10.5.78.40 8089

oracle 报错 oracle12c安装失败【INS-30131】执行安装程序验证所需要的初始设置失败

解决 ：

* 1.Ctrl+R 输入cmd 进入命令
  1. 首先进入你的Oracle安装包中setup.exe所在的目录下
  2. 在setup.exe所在的目录下执行命令
      `setup.exe -ignorePrereq -J"-Doracle.install.db.validate.supportedOSCheck=false"`
  3. 不行执行`setup.exe -ignorePrereq -J"-Doracle.install.client.validate.clientSupportedOSCheck=false"`命令
      之后会自动进入安装步骤中

查杀进程

```shell
# 查看端口占用 
netstat -ano |findstr "端口
# 查看进程 
tasklist |findstr "进程id号"
# 杀掉进程 
taskkill /f /t /im "进程id或者进程名称"
```

