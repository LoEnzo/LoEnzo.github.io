---
title: Spring Cloud Sleuth
tags:
 - SpringCloud
categories:
 - SpringCloudNotes
date: 2021-02-22
---

::: tip

**Spring Cloud Sleuth** 分布式请求链路跟踪，随着系统越来越庞大，微服务模块越来越多，各服务之间的调用变得复杂，一个请求的得到的最终结果中间可能调用了很多的服务，任何一个服务请求都有可能发生延迟或错误，从而导致失败，这个时候就需要请求链路跟踪工具来帮我们，理清这次请求调用的完整链路，以及各服务之间所消耗的时间，从而定位问题。

:::
<!-- more -->

## [给服务添加请求链路跟踪](http://www.macrozheng.com/#/cloud/sleuth?id=给服务添加请求链路跟踪)

* 给`user-service`、`ribbon-service`添加依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-zipkin</artifactId>
</dependency>
```

* 修改`application-yml`配置文件

```yaml
spring:
  zipkin:
    base-url: http://localhost:9411
  sleuth:
    sampler:
      probability: 0.1 #设置Sleuth的抽样收集概率
```

## [整合Zipkin获取及分析日志](http://www.macrozheng.com/#/cloud/sleuth?id=整合zipkin获取及分析日志)

**Zipkin**是Twitter的一个开源项目，可以用来获取和分析Spring Cloud Sleuth 中产生的请求链路跟踪日志，它提供了Web界面来帮助我们直观地查看请求链路跟踪信息。

SpringBoot 2.0以上版本已经不需要自行搭建`zipkin-server`，我们可以从该地址下载[zipkin-server](https://repo1.maven.org/maven2/io/zipkin/java/zipkin-server/2.12.9/zipkin-server-2.12.9-exec.jar)：

* 启动

```shell
java -jar zipkin-server-2.12.9-exec.jar
```

* **Zipkin**页面访问地址：[http://localhost:9411](http://localhost:9411/)

- 启动`eureka-sever`，`ribbon-service`，`user-service`：

多次通过`ribbon-serivce`调用`user-service`接口，可以再**Zipkin**界面筛选服务，查看每一次请求，然后进去可以看到这次请求调用的完整链路，以及调用每个服务所耗时间

## [使用Elasticsearch存储跟踪信息](http://www.macrozheng.com/#/cloud/sleuth?id=使用elasticsearch存储跟踪信息)

前面是**Zipkin**重启后，发现跟踪信息就会丢失了，信息存储与内存中，现需要将信息存储下来，方便日后查看

* 安装**Elasticsearch**，[下载地址](https://www.elastic.co/cn/downloads/past-releases/elasticsearch-6-2-2)

* 启动

```shell
# STORAGE_TYPE：表示存储类型 ES_HOSTS：表示ES的访问地址
java -jar zipkin-server-2.12.9-exec.jar --STORAGE_TYPE=elasticsearch --ES_HOSTS=localhost:9200 
```

* 结合`kibana`可视化界面查看每次请求的信息



::: warning

根据原作者学习流程坐下来发现**Zipkin**的使用体验并不好，不知道是不是哪操作有问题

- **Zipkin** 并不能完整的每个请求都记录下来
- 更多的是我请求了多次，它只记录了一次，
- 重启后，重新调用多次，它一次也搜不到，个人感觉不是很好用
- 另外**elasticsearch**、**kibana**只是再docker中启动起来了，但是不知道怎么设置索引，我直接都选择的默认的，查不到任何数据插入进来

:::