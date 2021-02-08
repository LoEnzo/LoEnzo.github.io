---
title: Spring Cloud Netflix
tags:
 - Netflix
 - Eureka
 - Ribbon
 - Hystrix
 - Feign
 - Zuul
categories:
 - SpringCloudNotes
date: 2021-02-08
---

::: tip

Spring Cloud Netflix 是在  Netflix OSS 基础上的封装，里面包含有分布式系统中常用的核心组件：Eureka、Ribbon、Hystrix、Feign、Zuul

:::
<!-- more -->

## Spring Cloud Netflix

Netflix OSS 开源组件集成，包括Eureka、Hystrix、Ribbon、Feign、Zuul等核心组件。

- Eureka：服务治理组件，包括服务端的注册中心和客户端的服务发现机制；
- Ribbon：负载均衡的服务调用组件，具有多种负载均衡调用策略；
- Hystrix：服务容错组件，实现了断路器模式，为依赖服务的出错和延迟提供了容错能力；
- Feign：基于Ribbon和Hystrix的声明式服务调用组件；
- Zuul：API网关组件，对请求提供路由及过滤功能。

### [Spring Cloud Eureka：服务注册与发现](http://www.macrozheng.com/#/cloud/eureka?id=spring-cloud-eureka：服务注册与发现)

微服务架构需要有一个注册中心，所有的微服务都会在注册中心注册自己的地址和端口信息，每个微服务都会定时从注册中心获取服务列表，同时汇报自己的运行情况，保证整个微服务的正常运行，Eureka就是实现这一套流程的组件。

**搭建注册中心**

* IDEA初始化一个SpringBoot应用，可以在创建的选择组件：`Spring Cloud Discovery -> Eureka Server`，或者创建后手动添加pom

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

* 启动类添加注解`@EnableEurekaServer`注解来启用Euerka注册中心功能

* `application.yml `添加Eureka注册中心的配置

```yaml
server:
  port: 8001 #指定运行端口
spring:
  application:
    name: eureka-server #指定服务名称
eureka:
  instance:
    hostname: localhost #指定主机地址
  client:
    fetch-registry: false #指定是否要从注册中心获取服务（注册中心不需要开启）
    register-with-eureka: false #指定是否要注册到注册中心（注册中心不需要开启）
  server:
    enable-self-preservation: false #关闭保护模式
```

**搭建客户端**

* 依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

* 启动类添加注解`@EnableDiscoveryClient`来表明这是一个Eureka客户端

  **注意：**`@EnableEurekaClient`只适用于Eureka作为注册中心，`@EnableDiscoveryClient`可以是其他注册中心

* `application.yml`添加Eureka客户端基础配置

```yaml
server:
  port: 8101 #运行端口号
spring:
  application:
    name: eureka-client #服务名称
eureka:
  client:
    register-with-eureka: true #注册到Eureka的注册中心
    fetch-registry: true #获取注册实例列表
    service-url:
      defaultZone: http://localhost:8001/eureka/ #配置注册中心地址
      # defaultZone: http://replica1:8002/eureka/,http://replica2:8003/eureka/ 注册到多个配置中心
```

访问注册中心`http://localhost:8001`即可客户端成功注册

**搭建注册中心集群**

由于多个微服务都是注册到注册中心通过服务列表来相互调用，一旦注册中心宕机，会导致所有服务都出现问题，所以我们需要多个注册中心来保证服务正常运行

* 根据注册中心配置文件新增一个`application-replica1.yml`、`application-replica2.yml`配置文件，根据下面配置修改端口号，hostname（为了在注册中心里面好区分），注册中心的地址即可

  **注意：**注册中心地址使用的 `replica2`这样的域名，可以在hosts里面修改下文件

  ```properties
  127.0.0.1 replica2
  127.0.0.1 replica3
  ```

```yaml
server:
  port: 8002
# 另外一个注册中心的端口号
# port: 8003 
spring:
  application:
    name: eureka-server
eureka:
  instance:
    hostname: replica1
  client:
    serviceUrl:
      defaultZone: http://replica2:8003/eureka/ #注册到另一个Eureka注册中心
      # defaultZone: http://replica2:8002/eureka/ # 另外一个注册中心的地址
    fetch-registry: true
    register-with-eureka: true
```

访问任意一个注册中心即可看到成功注册的客户端和备份注册中心

![](./images/springcloud_arch01.png)

**Eureka常用配置**

```yaml
eureka:
  client: #eureka客户端配置
    register-with-eureka: true #是否将自己注册到eureka服务端上去
    fetch-registry: true #是否获取eureka服务端上注册的服务列表
    service-url:
      defaultZone: http://localhost:8001/eureka/ # 指定注册中心地址
    enabled: true # 启用eureka客户端
    registry-fetch-interval-seconds: 30 #定义去eureka服务端获取服务列表的时间间隔
  instance: #eureka客户端实例配置
    lease-renewal-interval-in-seconds: 30 #定义服务多久去注册中心续约
    lease-expiration-duration-in-seconds: 90 #定义服务多久不去续约认为服务失效
    metadata-map:
      zone: jiangsu #所在区域
    hostname: localhost #服务主机名称
    prefer-ip-address: false #是否优先使用ip来作为主机名
  server: #eureka服务端配置
    enable-self-preservation: false #关闭eureka服务端的保护机制
```

### [Spring Cloud Ribbon：负载均衡的服务调用](http://www.macrozheng.com/#/cloud/ribbon?id=spring-cloud-ribbon：负载均衡的服务调用)