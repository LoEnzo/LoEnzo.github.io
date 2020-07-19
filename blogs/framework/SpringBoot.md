---
title: SpringBoot介绍及简单使用
tags:
 - SpringBoot
categories:
 - framework
date: 2020-05-11
---

::: tip

springboot介绍以及简单使用

:::

<!-- more -->

## 一、知识点

简介：

**SpringBoot** 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。简单来说，SpringBoot就是整合了很多基础框架的模板配置方式，达到开箱即用的效果。

### 1. SpringBoot项目下的mvnw与mvnw.cmd

Maven是一个常用的构建工具，但是Maven的版本和插件的配合并不是那么完美，有时候你不得不切换到一个稍微旧一些的版本，以保证所有东西正常工作。

而Gradle提供了一个Wrapper，可以很好解决版本切换的问题，当然更重要的是不需要预安装Gradle。

Maven虽然没有官方的Wrapper，但是有一个第三方的Wrapper可以使用。

安装很简单 `mvn -N io.takari:maven:wrapper `，安装完成如下

![安装](http://ju.outofmemory.cn/imgr?src=http%3A%2F%2Fwww.huangyunkun.com%2Fimages%2F2015%2F10%2Fmaven-wrapper.png)

使用的时候直接 `./mvnw clean install `即可，它会自动下载最新版本来执行。

![运行](http://ju.outofmemory.cn/imgr?src=http%3A%2F%2Fwww.huangyunkun.com%2Fimages%2F2015%2F10%2Fmaven-wrapper-run.png)

如果需要指定版本,重新生成mvnw文件在运行即可

1.  mvn -N io.takari:maven:wrapper -Dmaven=3.1.0
2.  ./mvnw clean install

### 启动报错

```cmd
Error running 'App': Command line is too long. Shorten command line for App
```

解决：

在 `.idea\workspace.xml`，目录下添加改节点，重新启动报错1，需要再重新打包一次

```xml
<component name="PropertiesComponent"> 
<property name="dynamic.classpath" value="true" />
```

* 加载mysql驱动显示以下信息

```javascript
Loading class com.mysql.jdbc.Driver'. This is deprecated. The new driver class is com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.
```

解决：

配置文件中驱动升级为`com.mysql.cj.jdbc.Driver`，完整配置如下：

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/springboot?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
```

