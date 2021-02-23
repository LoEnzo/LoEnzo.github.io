---
title: SpringCloud
tags:
 - SpringCloud
categories:
 - SpringCloudNotes
date: 2021-02-08
---

::: tip

mall项目全套学习，mall项目（39k+star）是一套电商系统，使用现阶段主流技术实现。涵盖了SpringBoot 2.3.0、MyBatis 3.4.6、Elasticsearch 7.6.2、RabbitMQ 3.7.15、Redis 5.0、MongoDB 4.2.5、Mysql5.7等技术，采用Docker容器化部署。

本文是我根据作者开源项目，文档依次学习做的缩略学习流程笔记和遇到的问题，工程同样用的作者的开源项目，实际学习中需要根据自己需求安装一些软件，修改一些配置，有些东西没有细写，完整的可以看作者链接。

[doc文档地址](http://www.macrozheng.com/#/)，作者[公众号](https://github.com/macrozheng/mall-learning/blob/master/docs/cloud/springcloud.md#公众号)第一时间获取，根据文档持续学习

:::
<!-- more -->

# SpringCloud整体架构概览

## 什么是SpringCloud

### 目标

协调任何服务，简化分布式系统开发。

### 简介

构建分布式系统不应该是复杂的，SpringCloud对常见的分布式系统模式提供了简单易用的编程模型，帮助开发者构建弹性、可靠、协调的应用程序。 SpringCloud是在SpringBoot的基础上构建的，使开发者可以轻松入门并快速提高工作效率。 SpringCloud为开发人员提供了快速构建分布式系统架构的工具，例如配置管理，服务发现，断路器，智能路由，微代理，控制总线，一次性令牌，全局锁定，领导选举，分布式会话，集群状态等。

## 整体架构

![来自Spring官网](./images/springcloud_arch.png)

## SpringCloud的版本关系

SpringCloud是一个由许多子项目组成的综合项目，各子项目有不同的发布节奏。 为了管理SpringCloud与各子项目的版本依赖关系，发布了一个清单，其中包括了某个SpringCloud版本对应的子项目版本。 为了避免SpringCloud版本号与子项目版本号混淆，SpringCloud版本采用了名称而非版本号的命名，这些版本的名字采用了伦敦地铁站的名字，根据字母表的顺序来对应版本时间顺序，例如Angel是第一个版本, Brixton是第二个版本。 当SpringCloud的发布内容积累到临界点或者一个重大BUG被解决后，会发布一个"service releases"版本，简称SRX版本，比如Greenwich.SR2就是SpringCloud发布的Greenwich版本的第2个SRX版本。

### SpringCloud和SpringBoot版本对应关系

| SpringCloud Version | SpringBoot Version |
| ------------------- | ------------------ |
| Hoxton              | 2.2.x              |
| Greenwich           | 2.1.x              |
| Finchley            | 2.0.x              |
| Edgware             | 1.5.x              |
| Dalston             | 1.5.x              |

### SpringCloud和各子项目版本对应关系

| Component              | Edgware.SR6    | Greenwich.SR2 |
| ---------------------- | -------------- | ------------- |
| spring-cloud-bus       | 1.3.4.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-commons   | 1.3.6.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-config    | 1.4.7.RELEASE  | 2.1.3.RELEASE |
| spring-cloud-netflix   | 1.4.7.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-security  | 1.2.4.RELEASE  | 2.1.3.RELEASE |
| spring-cloud-consul    | 1.3.6.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-sleuth    | 1.3.6.RELEASE  | 2.1.1.RELEASE |
| spring-cloud-stream    | Ditmars.SR5    | Fishtown.SR3  |
| spring-cloud-zookeeper | 1.2.3.RELEASE  | 2.1.2.RELEASE |
| spring-boot            | 1.5.21.RELEASE | 2.1.5.RELEASE |
| spring-cloud-task      | 1.2.4.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-gateway   | 1.0.3.RELEASE  | 2.1.2.RELEASE |
| spring-cloud-openfeign | 暂无           | 2.1.2.RELEASE |

**注意：Greenwich版本是基于SpringBoot 2.1.x版本构建的，不适用于1.5.x版本。随着2019年8月SpringBoot 1.5.x版本停止维护，Edgware版本也将停止维护。**

## SpringCloud子项目简介



### Spring Cloud Netflix

Netflix OSS 开源组件集成，包括Eureka、Hystrix、Ribbon、Feign、Zuul等核心组件。

- Eureka：服务治理组件，包括服务端的注册中心和客户端的服务发现机制；
- Ribbon：负载均衡的服务调用组件，具有多种负载均衡调用策略；
- Hystrix：服务容错组件，实现了断路器模式，为依赖服务的出错和延迟提供了容错能力；
- Feign：基于Ribbon和Hystrix的声明式服务调用组件；
- Zuul：API网关组件，对请求提供路由及过滤功能。

### Spring Cloud OpenFeign

基于Ribbon和Hystrix的声明式服务调用组件，可以动态创建基于Spring MVC注解的接口实现用于服务调用，在SpringCloud 2.0中已经取代Feign成为了一等公民。

### Spring Cloud Config

集中配置管理工具，分布式系统中统一的外部配置管理，默认使用Git来存储配置，可以支持客户端配置的刷新及加密、解密操作。

### Spring Cloud Bus

用于传播集群状态变化的消息总线，使用轻量级消息代理链接分布式系统中的节点，可以用来动态刷新集群中的服务配置。

### Spring Cloud Sleuth

SpringCloud应用程序的分布式请求链路跟踪，支持使用Zipkin、HTrace和基于日志（例如ELK）的跟踪。

### Spring Cloud Consul

基于Hashicorp Consul的服务治理组件。

### Spring Cloud Gateway

API网关组件，对请求提供路由及过滤功能。

### Spring Cloud Admin

微服务应用监控

### Spring Cloud Security

安全工具包，对Zuul代理中的负载均衡OAuth2客户端及登录认证进行支持。

### Spring Cloud Alibaba

Nacos 作为注册中心和配置中心使用

### Spring Cloud Stream

轻量级事件驱动微服务框架，可以使用简单的声明式模型来发送及接收消息，主要实现为Apache Kafka及RabbitMQ。

### Spring Cloud Task

用于快速构建短暂、有限数据处理任务的微服务框架，用于向应用中添加功能性和非功能性的特性。

### Spring Cloud Zookeeper

基于Apache Zookeeper的服务治理组件。

