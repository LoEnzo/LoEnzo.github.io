---
title: Spring Cloud Bus
tags:
 - SpringCloud
categories:
 - SpringCloudNotes
date: 2021-02-19
---

::: tip

**Spring Cloud Bus** （消息总线）通过轻量消息代理连接各个分布的节点，用于广播 状态变更（如配置文件变更）或者其他的消息指令，可以将其理解为管理和传播消息所有分布式服务中的详细即可。**Spring Cloud Bus** 配合 **Spring Cloud Config** 使用可以实现配置的动态刷新。目前 **Spring Cloud Bus** 支持两种消息代理：**RabbitMQ** 和 **Kafka**。**AMQP**（(Advanced Message Queuing Protocol），一个提供统一消息服务的应用层标准高级消息队列协议

:::
<!-- more -->

## 为什么需要统一配置管理

* 多服务，多环境配置集中管理，结构目录清晰，方便快速查找
* 运行期间动态调整配置
* 广播状态变更（配置变更），不要每个微服务都去刷新依次，只需要刷新依次，及所有微服务都可以接收到广播信息进行更新

## Windows **RabbitMQ** 安装

* **[安装Erlang](http://erlang.org/download/otp_win64_21.3.exe)**

* **[安装RabbitMQ](https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.14/rabbitmq-server-3.7.14.exe)**

* **启动RabbitMQ**

启动控制管理台，进入**RabbitMQ**安装目录下的`sbin`子目录，输入以下启动管理功能：

```shell
rabbitmq-plugins enable rabbitmq_management
```

因为网络原因，没有安装成功**Erlang**，直接在虚拟机中用**docker**启动的**RabbitMQ**

本地启动访问地址：`http://localhost:15672/`，我是用的虚拟机的ip

默认用户名、密码为`guest`

## [动态刷新配置](http://www.macrozheng.com/#/cloud/bus?id=动态刷新配置)

* 给**config-server**添加消息总线依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bus-amqp</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

* 添加`application-yml`配置，添加`RabbitMQ`配置及暴露了刷新配置的Actuator端点

```yaml
server:
  port: 8904
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          # 自己的git配置仓库，可以根据作者的fork一份，便于验证修改
          uri: https://gitee.com/myMagicRain/springcloud-config.git 
          username: macro # 自己git的用户名和密码
          password: 123456
          clone-on-start: true # 开启启动时直接从git获取配置
  rabbitmq: #rabbitmq相关配置
    host: localhost
    port: 5672
    username: guest
    password: guest
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
management:
  endpoints: #暴露bus刷新配置的端点
    web:
      exposure:
        include: 'bus-refresh'
```

* 启动`config-client 9004 9005`、`config-server 8094` 
* 登陆`RabbitMQ`，默认用户名和密码是guest，点击**Exchanges**和**Queues**可以发现**Spring Cloud Bus** 创建了一个叫`springCloudBus`的交换机及三个以 `springCloudBus.anonymous`开头的队列：

修改git仓库中配置dev分支的配置文件，因为`config-client`配置的是加载dev的配置，先调用，然后刷新配置中心配置，然后再次调用，可以观察到配置变更成功了

- 调用注册中心的接口刷新所有配置，发送**POST**请求：`http://localhost:8904/actuator/bus-refresh`

如果只刷新部分客户端，例如刷新9004的客户端，可以发送**POST**请求：`http://localhost:8904/actuator/bus-refresh/config-client:9004`

## [配合WebHooks使用](http://www.macrozheng.com/#/cloud/bus?id=配合webhooks使用)

webHooks相当于是一个钩子函数，我们可以配置当向Git仓库push代码时触发这个钩子函数，不然每次更新配置都需要自己手动发送**POST**请求刷新一次，根据自己环境来谨慎使用，配置一般也不是需要一次性全部刷新

这里以Gitee为例来介绍下其使用方式，这里当我们向配置仓库push代码时就会自动刷新服务配置了

![来自Spring官网](./images/springcloud_bus01.png)