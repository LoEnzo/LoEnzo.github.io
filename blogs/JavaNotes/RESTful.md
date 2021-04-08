---
title: 了解什么是RESTful
tags:
 - RESTful
categories:
 - JavaNotes
date: 2020-04-13
---

::: tip

了解什么是RESTful，RESTful的书写风格，以及注意事项。REST（英文：**Representational State Transfer**，简称REST）。REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful

:::

<!-- more -->

### RESTful起源

REST（Representational State Transfer）表象化状态转变（表述性状态转变），在2000年被提出，基于HTTP、URI、XML、JSON等标准和协议，支持轻量级、跨平台、跨语言的架构设计。是Web服务的一种新的架构风格（一种思想）。

### RESTful架构的主要原则

- 对网络上所有的资源都有一个**资源标志符**。
- 对**资源**的操作不会改变标识符。
- 同一资源有**多种表现形式**（xml、json）
- 所有操作都是**无状态**的（Stateless）

#### 无状态理解

**有状态**：Web服务中，Client与Server交互的信息（如：用户登录状态)会保存在Server的Session中，再这样的前提下，Client中的用户请求只能被保存有此用户相关状态信息的服务器所接受和理解，这也就意味着在基于状态的Web系统中的Server无法对用户请求进行负载均衡等自由的调度(一个Client请求只能由一个指定的Server处理)。同时这也会导致另外一个容错性的问题，如果指定的Server在Client的用户发出请求的过程中宕机，那么此用户最近的所有交互操作将无法被转移至别的Server上，即此请求将无效化。

**有状态请求：**Server保存了Client的请求状态，Server会通过Client传递的SessionID在Server中的Session作用域找到之前交互的信息，并以此来实现应答。所以Client只能由某一个Server来应答。

**无状态**：

在无状态的Web服务中，每一个Web请求都必须是独立的，请求之间是完全分离的。Server没有保存Client的状态信息，所以Client发送的请求必须包含有能够让服务器理解请求的全部信息，包括自己的状态信息。使得一个Client的Web请求能够被任何可用的Server应答，从而将Web系统扩展到大量的Client中。

**无状态请求：**Server不保存任何请求状态信息，Client的每一个请求都具有User credentials等所需要的全部信息，所以能被任意可用的Server应答。

### RESTful介绍 

RESTful是一种常见的REST应用，是遵循REST风格的web服务，REST式的web服务是一种ROA（面向资源的架构）。

简单的说：RESTful是一种架构的规范与约束、原则，符合这种规范的架构就是RESTful架构。

### RESTful规范与约束 

[规范](http://restful.p2hp.com/home/resource-naming)
[六个约束](http://restful.p2hp.com/home/rest-architectural-constraints#layered-system)

1. Client-Server
2. 无状态
3. 分层系统
4. 统一接口
5. 可缓存
6. 按需代码

目的：实现客户端无需借助任何文档即能调用到所有的服务器资源

### REST资源操作

**幂等性：**对同一REST接口的多次访问，得到的资源状态是相同的；

**安全性：**对该REST接口访问，不会使服务器资源的状态发生改变。

| http方法 | 资源操作 | 幂等性 | 安全性 |
| -------- | -------- | ------ | ------ |
| GET      | SELECT   | 是     | 是     |
| POST     | INSERT   | 否     | 否     |
| PUT      | UPDATE   | 是     | 否     |
| DELETE   | DELETE   | 是     | 否     |

### **使用RESTful前后对比**

**传统URL**：

```java
http://users/query/1 GET 根据用户id查询用户数据

http://users/save POST 新增用户

http://users/update POST 修改用户信息

http://users/delete GET/POST 删除用户信息
```

**RESTful风格**

```java
http://users/{id} GET 根据用户id查询用户数据

http://users POST 新增用户

http://users PUT 修改用户信息

http://users DELETE 删除用户信息  OR http://127.0.0.1/user/{id} DELETE 删除用户信息
```

### RESTful设计准则

宾语必须是名词，建议统一采用复数形式；避免多级URL，不利于阅读，除了一级，其他级别都用查询串表达

```java
Books/literature?categories/1  GET 获取文学类书籍的第一个目录下的书名
```

### RESTful的优缺点：

REST的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"，所谓资源就只是一个实体，比如一张表，一段文字，一张图片等，可以用一个确定的url地址代表这个资源，访问这个url就是访问这个资源，换句话说，url就是这个资源独一无二的标识。

**优点**：

	1. 简单、清亮，低耦合，基于http；
	2. 无状态，调用接口不用考虑上下文，状态，降低复杂度；
	3. 接口风格规范统一，根据调用方式不同来对资源进行不同的操作，摈弃了以前接口开发，尤其是增删改查设定不同接口名的弊端；

**缺点：**

```
1. 不是所有用户想获取的都是资源，比如我要获取订单的状态；
2. 含有多重过滤条件的不适合，需求太复杂的反而直接英译需求的接口名更加清晰；
```

### **SpringMVC实现restful服务:**

**SpringMVC原生态的支持了REST风格的架构设计**

**所涉及到的注解:**

**@RequestMapping**

**@ResponseBody**

**@PathVariable**

**@RequestParam**

访问网站的URL，不同用户，或者不同类别的商品，他们的URL只有部分是不一样的，我们不能为每个不一样的URL都写一个对应的映射，

@RequestParam和@PathVariable就是为了解决这个问题，生成动态URL

```java
@RequestMapping(value="/Users/{userId}")
//public String userProfile(@RequestParam(value="userId") String userId) {
public String userProfile(@PathVariable(value="userId") String userId) {
    rerutn userService.queryUsersById(userId);
}
```

**@PathVariable 和@RequestParam** 的区别：

两者都能实现动态URL功能，但是生成的URL显示效果不同，两者显示效果分别是：

```java
Users/1
Users?userId=1
```

两种注解的使用建议：

**@PathVariable ：**

当URL指向的是某一具体业务资源（或资源列表），例如博客，用户时，使用@PathVariable

```java
Users/1    id为1的用户
```

**@RequestParam**

当URL需要对资源或者资源列表进行过滤，筛选时，用@RequestParam

```java
Users?sex=male   性别为男的用户
```

