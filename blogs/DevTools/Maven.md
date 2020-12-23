---
title: Maven使用手册
tags:
 - Maven
categories:
 - DevTools
date: 2020-05-11
---

::: tip

maven理解，常用指令，以及常规报错汇总。

:::

<!-- more -->

一、Maven常用指令

### 1. 常用指令

```shell
# 打包项目到本地，一般在target文件夹下；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)
mvn clean package

# 打包到本地仓库，根据settings.xml文件夹中指定路径；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install
mvn clean install

# 打包上传到远程仓库，如私服nexus等，需要配置相应的pom.xml文件；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install、deploy
mvn clean deploy
```

父子工程版本依赖，父工程一般包含`pom.xml`及里面相应依赖的版本设定；子工程依赖父工程

### 2. pom.xml配置文件中gav的说明

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

### 2.  流水线无法更新pom.xml

报错如下，意思是“在 XXX的更新间隔过去或强制更新之前，不会重新尝试解析”。

> resolution will not be reattempted until the update interval of XXX has elapsed or updates are force

如果你去本地的`maven`仓库，你会发现，其只有`lastUpdate`结尾的文件，没有`jar`包，或着pom文件的。

这个时候，你无论怎么点击`IDEA`中的`Reimports All Maven Projects`都是没有用的。原因上面也说了，要么等更新时间过去，要么强制更新。
`maven`的默认更新时间为`day`，即一天更新一次。

解决：

1. > 所以我们一般都是采用强制更新的方式，到对应工程目录先，执行maven指令 **mvn clean install -U**

2. > 修改**settings.xml**

::: details 修改**settings.xml**，添加`<updatePolicy>always</updatePolicy>`；

```xml
<repositories>
   <repository>
     <id>xr-snapshots</id>
 	  <url>http://nexus.alibaba.com/repository/snapshots/</url>
     <snapshots>
       <enabled>true</enabled>
       <!-- 注意 -- >
       <updatePolicy>always</updatePolicy>
     </snapshots>
     <releases>
       <enabled>false</enabled>
       <!-- 注意 -- >
       <updatePolicy>always</updatePolicy>
     </releases>
   </repository>
 </repositories>

<pluginRepositories>
   <pluginRepository>
     <id>xr-plugins</id>
     <name>xingren plugins</name>
     <url>http://nexus.alibaba.com/repository/public/</url>
     <releases>
     	<enabled>true</enabled>
     	<!-- 注意 -- >
     	<updatePolicy>always</updatePolicy>
     </releases>
      <snapshots>
      	<enabled>true</enabled>
      	<!-- 注意 -- >
      	<updatePolicy>always</updatePolicy>
      </snapshots>
   </pluginRepository>
</pluginRepositories>
```

:::