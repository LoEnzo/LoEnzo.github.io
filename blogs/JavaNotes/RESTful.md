---
title: 了解什么是RESTful
tags:
 - RESTful
categories:
 - JavaNotes
date: 2020-04-13
---

::: tip

了解什么是RESTful，RESTful的书写风格，以及注意事项。

:::

<!-- more -->

### RESTful起源

REST（Representational State Transfer）表象化状态转变（表述性状态转变），在2000年被提出，基于HTTP、URI、XML、JSON等标准和协议，支持轻量级、跨平台、跨语言的架构设计。是Web服务的一种新的架构风格（一种思想）。

### RESTful架构的主要原则

- 对网络上所有的资源都有一个资源标志符。
- 对资源的操作不会改变标识符。
- 同一资源有多种表现形式（xml、json）
- 所有操作都是无状态的（Stateless）

### RESTful介绍 

RESTful是一种常见的REST应用，是遵循REST风格的web服务，REST式的web服务是一种ROA（面向资源的架构）。

简单的说：RESTful是一种架构的规范与约束、原则，符合这种规范的架构就是RESTful架构。

### RESTful规范与约束 

RESTful 架构的核心规范与约束：统一接口
分为四个子约束：
1.每个资源都拥有一个资源标识，每个资源的资源标识可以用来唯一地标明该资源
2.消息的自描述性
3.资源的自描述性。
4.HATEOAS Hypermedia As The Engine Of Application State(超媒体作为应用状态引擎)
即客户只可以通过服务端所返回各结果中所包含的信息来得到下一步操作所需要的信息，如到底是向哪个URL发送请求等。也就是说，一个典型的REST服务不需要额外的文档标示通过哪些URL访问特定类型的资源，而是通过服务端返回的响应来标示到底能在该资源上执行什么样的操作

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
Books/literature?categories/1  GET 获取文学类数据的第一个目录下的书名
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

