---
title: Spring Cloud Config
tags:
 - config
categories:
 - SpringCloudNotes
date: 2021-02-18
---

::: tip

Spring Cloud Config 分为服务端和客户端两个部分。**服务端被称为分布式配置中心**，它是个独立的应用，可以从配置仓库获取配置信息并提供给客户端使用。**客户端可以通过配置中心来获取配置信息，在启动时加载配置**。Spring Cloud Config 的配置中心默认采用Git来存储配置信息，所以天然就支持配置信息的版本管理，并且可以使用Git客户端来方便地管理和访问配置信息

:::
<!-- more -->

# Spring Cloud Config

## **统一配置中心**

如果微服务架构中没有使用统一配置中心时，所存在的问题：

- 配置文件分散在各个项目里，不方便维护
- 配置内容安全与权限，实际开发中，开发人员是不知道线上环境的配置的
- 更新配置后，项目需要重启

## [在Git仓库中准备配置信息](http://www.macrozheng.com/#/cloud/config?id=在git仓库中准备配置信息)

由于Spring Cloud Config 需要一个存储配置信息的Git仓库，这里我们先在Git仓库中添加好配置文件再演示其功能，

Git仓库地址为：[原作者地址](https://gitee.com/macrozheng/springcloud-config)，fork下来修改为自己的地址，便于后面在仓库修改配置调用服务查看配置修改是否生效

主要结构：

* master dev 分支
* 分支中的各环境单独的一个配置文件，`application-dev.yml`、`application-test.yml`、`application-pro.yml`等
* 多个微服务的多个环境配置文件，可以创建子目录区分，这里只创建了**\config**子目录作为测试

## [创建config-server模块](http://www.macrozheng.com/#/cloud/config?id=创建config-server模块)

* 依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

* `application.yml`配置

```yaml
server:
  port: 8901
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git: # 配置存储配置信息的Git仓库，改成自己的地址，便于修改后配置文件后测试
          uri: https://gitee.com/myMagicRain/springcloud-config.git
          username: macro
          password: 123456
          clone-on-start: true #开启启动时直接从git获取配置
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
```

* 启动类添加`@EnableConfigServer`注解启用配置中心功能

## [创建config-client模块](http://www.macrozheng.com/#/cloud/config?id=创建config-client模块)

* 依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

* 添加`bootstrap.yml`配置文件

```yaml
server:
  port: 9001
spring:
  application:
    name: config-client
  cloud:
    config: #Config客户端配置
      profile: dev #启用配置后缀名称
      label: dev #分支名称
      uri: http://localhost:8901 #配置中心地址
      name: config #配置文件名称
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
```


* 配置文件信息的访问格式

```bash
# 获取配置信息
/{label}/{application}-{profile}
# 获取配置文件信息
/{label}/{application}-{profile}.yml
```

### **占位符配置说明**

- `application`：代表应用名称，默认为配置文件中的`spring.application.name`，如果配置了`spring.cloud.config.name`，则为该名称
- `label`：代表分支名称，对应配置文件中的`spring.cloud.config.label`
- `profile`：代表环境名称，对应配置文件中的`spring.cloud.config.profile`


* 添加`ConfigClientController `类用于获取配置

```java
@RestController
public class ConfigClientController {

    @Value("${config.info}")
    private String configInfo;

    @GetMapping("/configInfo")
    public String getConfigInfo() {
        return configInfo;
    }
}
```

启动`eureka-server`、`config-server`服务，

访问 `http://localhost:8901/master/config-dev`，来获取master分支上dev环境的配置信息；

访问 `http://localhost:9001/configInfo`，可以获取到dev分支下dev环境的配置；

### 获取子目录配置

多个微服务的多环境统一用一个git配置中心，默认扫描根目录，会使得配置文件过于臃肿，按服务创建不同的子文件夹目录，方便管理

* `yml`配置

```yaml
spring:
  cloud:
    config:
      server:
        git: 
          search-paths: '{application}'        # 对应服务名相同的文件夹子目录配置文件
#          search-paths: /config               # config目录下的配置文件
#          search-paths: /**                   # 所有目录下的配置文件
```

使用`'{application}'`占位符配置，说明是`config`服务就使用`config`子文件夹下面的配置文件，`config`服务就是前面说的`spring.cloud.config.name`,

### [刷新配置](http://www.macrozheng.com/#/cloud/config?id=刷新配置)