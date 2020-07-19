---
title: Maven使用手册
tags:
 - maven
categories:
 - framework
date: 2020-05-11
---

::: tip

maven理解，常用指令，以及常规报错汇总。

:::

<!-- more -->

## 一、Maven常用指令

### 1. 打包指令

* `mvn package`：打包项目到本地，一般再`target`文件夹下；
* `mvn install`：打包到本地仓库，根据`settings.xml`文件夹中指定路径；
* `mvn deploy`：打包上传到远程仓库，如私服`nexus`等，需要配置相应的`pom.xml`文件；

### 2. 打包过程

* `mvn clean package`
  
  * 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)。
  
* `mvn clean install`
  
  * 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install。
  
* `mvn clean deploy`
  
* 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install、deploy。
  
  父子工程版本依赖，父工程一般包含`pom.xml`及里面相应依赖的版本设定；子工程依赖父工程
  
### 3. pom.xml配置文件中gav的说明

  - groupId：顾名思义，即组织或公司，一般我们会用公司或者自己的前几级包名来进行定义。
  - artifactId：这个值定义的是本项目的名字。
  - version：这个项目在maven进行发布以后的版本号。

```xml
<parent>
    <groupId>com.hjwu.pomdemo</groupId
    <artifactId>helloworld-parent</artifactId>
    <version>2.0.0-SNAPSHOT</version>
</parent>
```

* `SNAPSHOT`开发版本
* 打包
* `< packaging >< /packaging >`对应打包方式，一般为`war`、`jar`

```xml
 <artifactId>helloworld-app-service</artifactId>
 <version>2.0.0-SNAPSHOT</version>
 <packaging>war</packaging>
 <name>helloworld-app-service</name>
```

## 二、问题

### 1. 本地tomcat启动报错

报错`unkown the request`

原因：可能是tomcat端口被占用，

解决：cmd  ->    netstat -aon|findstr  端口号，找出占用该端口的进程和pid，在任务管理器里找出对象pid停掉，或者换tomcat启动端口

