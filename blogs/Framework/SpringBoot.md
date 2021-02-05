---
title: SpringBoot介绍及简单使用
tags:
 - SpringBoot
categories:
 - Framework
date: 2020-05-11
---

::: tip

**SpringBoot** 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。简单来说，SpringBoot就是整合了很多基础框架的模板配置方式，达到开箱即用的效果。

:::

<!-- more -->

## 一、知识点

### 1. SpringBoot项目下的mvnw与mvnw.cmd

Maven是一个常用的构建工具，但是Maven的版本和插件的配合并不是那么完美，有时候你不得不切换到一个稍微旧一些的版本，以保证所有东西正常工作，而Gradle提供了一个Wrapper，可以很好解决版本切换的问题，当然更重要的是不需要预安装Gradle。

Maven虽然没有官方的Wrapper，但是有一个第三方的Wrapper可以使用。

安装： `mvn -N io.takari:maven:wrapper `；

安装指定版本：`mvn -N io.takari:maven:wrapper -Dmaven=3.1.0`

构建：`./mvnw clean install`

### 2. jar包查看

springboot最终一般是打成jar包，我们一般会指定一个稳定版本打一个Tag分支，确定本次上线的jar版本是否正确需要和上次的jar包进行对比，而服务器通过临时解压开查是比较麻烦的，受限于网速，jar包大小，下载到本地用软件对比也比较麻烦，可以直接用jar指令来查看版本信息。

常用指令：

查看jar包中工程的信息：`jar tvf jar包路径 | grep "jar包中工程名"`

输出jar包某个工程：`jar -xvf jar包路径 BOOT-INF/lib/需要输入的工程名`

| 参数 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| -c   | 创建一个jar包                                                |
| -t   | 显示jar中的内容列表                                          |
| -x   | 解压jar包                                                    |
| -u   | 添加文件到jar包中                                            |
| -f   | 指定jar包的文件名                                            |
| -v   | 生成详细的报造，并输出至标准设备                             |
| -m   | 指定manifest.mf文件.(manifest.mf文件中可以对jar包及其中的内容作一些一设置) |
| -0   | 产生jar包时不对其中的内容进行压缩处理                        |
| -M   | 不产生所有文件的清单文件(Manifest.mf)。这个参数与忽略掉-m参数的设置 |
| -i   | 为指定的jar文件创建索引文件                                  |
| -C   | 表示转到相应的目录下执行jar命令,相当于cd到那个目录，然后不带-C执行jar命令 |

