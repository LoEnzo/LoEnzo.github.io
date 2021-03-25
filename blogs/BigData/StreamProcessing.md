---
title: Spark Stream、Kafka Stream、Storm和Flink对比
tags:
 - Spark
 - kafka
 - Storm
 - Flink
categories:
 - BigData
date: 2020-09-08
---

::: tip
Spark Stream、Kafka Stream、Storm和Flink主流流处理工具的了解，简单对比

:::

<!-- more -->

## 流

Spark Stream、Kafka Stream、Storm等存在的问题

在设计一个低延迟、exactly once、流和批统一的，能够支撑足够大体量的复杂计算的引擎时，Spark Stream等的劣势就显现出来。Spark Streaming的本质还是一个基于microbatch计算的引擎。这种引擎一个天生的缺点就是每个microbatch的调度开销比较大，当我们要求的延迟越低，额外的开销就越大。这就导致了Spark Streaming实际上不是特别适合于做秒级甚至亚秒级的计算。

Kafka Streaming是从一个日志系统做起来的，它的设计目标是足够轻量，足够简洁易用。这一点很难满足我们对大体量的复杂计算的需求。

Storm是一个没有批处理能力的数据流处理器，除此之外Storm只提供了非常底层的API，用户需要自己实现很多复杂的逻辑。


