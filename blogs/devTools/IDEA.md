---
title: IDEA操作手册
tags:
 - IDEA
categories:
 - software
date: 2020-05-11
---

::: tip

IDEA常规配置设置，常用插件下载

:::

<!-- more -->

## 1. 常用设置

### 1.1 鼠标悬停，显示方法信息

File -> Settings(或是快捷键)打开设置窗口.
搜索栏中输入`Show quick documentation on mouse move` 就搜索出来了
或是在Editor -> General -> Other中都可以看到
后边的Delay(ms) 是延迟多久之后显示弹窗
原文链接：https://blog.csdn.net/qq_34033853/article/details/86263014

### 1.2 右键新建xml文件

File ->  Settings -> Editor -> File and Code Templates

新建xml文件模板，apply即可，其他模板同理，类、方法的默认注释模板也可在此处修改

### 1.3 删除自定义maven构建命令

File -> Settings -> other Settings -> mavern helper

### 1.4 包显示设置

方便在操作当前java文件或者切换文件时，左边Project面板可以快速定位。勾选下列选项：

* ComPact Middle Packages
* Autoscroll to Source
* Autoscroll from Source
* Folders Always on Top
* Show Excluded Files
* Group Tabs

### 1.5 添加具体操作到工具栏

* 添加`Show in Explorer`到工具栏
工具栏右键 -> Customize Menus and Toolbars -> MainToolbar -> Tasks toolbar -> 添加按钮 -> Other -> 搜索 Show in Explorer -> 最后引用设置即可

### 1.6 实体类实现自动序列化

实体类实现`Serializable`，设置 -> Editor -> Inspections -> Java -> Serialization issues -> Serializable class without 'serialVersionUID' 勾选，

在实体类地方，alt + enter 只能补充就行


## 2. 常用插件

### 2.1 decom

将`Java Byte compiler`插件勾选即可产看class文件反编译的源码

### 2.2 Alibaba Java Coding guidines

本地代码检查，常规变量命名不满足驼峰命名规则，注释，魔法值等

### 2.3 generateGSDoc

自动生成getter() ，setter()方法

### 2.4 Maven Helper

Maven工程管理，快速构建maven工程，提供常见maven指令，支持自定义带参数maven指令并保存

### 2.5 JRebel

web工程热更新插件；无法安装可选择网上下载插件包，离线安装，选择`nstall plugin form disk`;

* 激活

下载反向代理软件，失效自行百度，：[百度网盘链接](https://pan.baidu.com/s/16q34ypajfKWtSfs636Ml6w) 密码: iwi1

所有版本：这里是所有的[版本](https://github.com/ilanyu/ReverseProxy/releases/tag/v1.4)

运行软件后，再JRebel激活界面输入`http://127.0.0.1:8888/88414687-3b91-4286-89ba-2dc813b107ce+任意邮箱名`

### 2.6 free mybatise plugin

用于mapper.xml语句与数据库映射接口可以快速相互跳转，还可以根据数据库表快速生成实体类，数据库映射接口和接口实现方法

## 3. 其他

### 3.1 springboot启动报错

```cmd
Error running 'App': Command line is too long. Shorten command line for App
```

解决：

在 `.idea\workspace.xml`，目录下添加改节点，**重新启动报错1，需要再重新打包一次**

```xml
<component name="PropertiesComponent"> 
<property name="dynamic.classpath" value="true" />
```



IDEA激活
https://tech.souyunku.com/?p=16235

