---
title: Spring Cloud Alibaba Sentinel 
tags:
 - Spring Cloud Alibaba
 - Sentinel 
categories:
 - SpringCloudNotes
date: 2021-09-07
---

::: tip

Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案，Sentinel 作为其核心组件之一，具有熔断与限流等一系列服务保护功能。

:::
<!-- more -->

# Sentinel

随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从**流量控制、熔断降级、系统负载保护**等多个维度保护服务的稳定性。

Sentinel具有如下特性:

- 丰富的应用场景：承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀，可以实时熔断下游不可用应用；
- 完备的实时监控：同时提供实时的监控功能。可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况；
- 广泛的开源生态：提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合；
- 完善的 SPI 扩展点：提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。

# 安装并启动

Sentinel控制台是一个轻量级的控制台应用，它可用于实时查看单机资源监控及集群资源汇总，并提供了一系列的规则管理功能，如流控规则、降级规则、热点规则等

[官方下载](https://github.com/alibaba/Sentinel/releases)

启动：

```shell
java -jar sentinel-dashboard-1.8.2.jar
```

访问：http://localhost:8080，可以修改为其他端口启动` --server.port=8081`，默认账户密码是`sentinel`

# 创建`sentinel-service`模块

用于演示Sentinel的熔断与限流功能

* `pom.xml`：使用nacos作为注册中心，添加nacos依赖，

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

* `application.yaml`：主要配置 nacos 和 sentinel 控制台地址

```yaml
server:
  port: 8401
spring:
  application:
    name: sentinel-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #配置Nacos地址
    sentinel:
      transport:
        dashboard: localhost:8080 #配置sentinel dashboard地址
        port: 8719
service-url:
  user-service: http://nacos-user-service
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

# 限流

Sentinel Starter 默认为所有的 HTTP 服务提供了限流埋点，我们也可以通过使用`@SentinelResource`来自定义一些限流行为

::: 创建 RateLimitController 类

```java
@RestController
@RequestMapping("/rateLimit")
public class RateLimitController {
    /**
     * 按资源名称限流，需要指定限流处理逻辑
     */
    @GetMapping("/byResource")
    @SentinelResource(value = "byResource",blockHandler = "handleException")
    public CommonResult byResource() {
        return new CommonResult("按资源名称限流", 200);
    }

    /**
     * 按URL限流，有默认的限流处理逻辑
     */
    @GetMapping("/byUrl")
    @SentinelResource(value = "byUrl",blockHandler = "handleException")
    public CommonResult byUrl() {
        return new CommonResult("按url限流", 200);
    }

    public CommonResult handleException(BlockException exception){
        return new CommonResult(exception.getClass().getCanonicalName(),200);
    }
}
```

:::

## 根据资源限流

我们可以根据@SentinelResource注解中定义的value（资源名称）来进行限流操作，但是需要指定限流处理逻辑。

启动 Nacos 和 sentinel-service 模块

由于Sentinel采用的`懒加载规则`，需要我们先访问下接口，Sentinel控制台中才会有对应服务信息，我们先访问下该接口：http://localhost:8401/rateLimit/byResource

* 在Sentinel控制台配置流控规则，根据`@SentinelResource`注解的value值：

![image-20210907151204859](./images/image-20210907151204859.png)

* 验证：快速访问 `http://localhost:8401/rateLimit/byResource`

```json
// 成功返回
{
    "data": null,
    "message": "按资源名称限流",
    "code": 200
}

// 限流返回
{
    "data": null,
    "message": "com.alibaba.csp.sentinel.slots.block.flow.FlowException",
    "code": 200
}
```

## 根据Url限流

除了上面的根据`@SentinelResource`主机的 value 值，我们还可以通过访问的URL来限流，会返回默认的限流处理信息

相比上面的根据资源限流，只需要把资源名改为对应的 url 即可，这里是 `/rateLimit/byUrl`

![image-20210907151958086](./images/image-20210907151958086.png)

* 验证：快速访问 `http://localhost:8401/rateLimit/byUrl`

```json
// 成功访问
{
    "data": null,
    "message": "按url限流",
    "code": 200
}

// 限流
Blocked by Sentinel (flow limiting)
```

## 自定义限流

除了默认的 资源限流、url限流 两种方式，我们还可以根据自己的实际情况设置限流规则

- 创建 `CustomBlockHandler` 类用于自定义限流处理逻辑，注意方法要是`static`

```java
public class CustomBlockHandler {

    public static CommonResult handleException(BlockException exception){
        return new CommonResult("自定义限流信息",200);
    }
}
```

* 在`RateLimitController` 中使用自定义限流处理逻辑：

`@SentinelResource`注解中添加 `blockHandlerClass=自己创建自定义Handler类`

```java
@RestController
@RequestMapping("/rateLimit")
public class RateLimitController {

    @GetMapping("/customBlockHandler")
    @SentinelResource(value = "customBlockHandler", blockHandler = "handleException", blockHandlerClass = CustomBlockHandler.class)
    public CommonResult blockHandler() {
        return new CommonResult("限流成功", 200);
    }
}
```

* 验证：快速访问 `http://localhost:8401/rateLimit/customBlockHandler`

```json
// 成功返回
{
    "data": null,
    "message": "限流成功",
    "code": 200
}

// 自定义限流返回
{
    "data": null,
    "message": "自定义限流信息",
    "code": 200
}
```

# 熔断

Sentinel 支持对服务间调用进行保护，对故障应用进行熔断操作，这里我们使用RestTemplate来调用nacos-user-service服务所提供的接口来演示下该功能

* 使用`@SentinelRestTemplate`来包装下`RestTemplate`实例：

```java
@Configuration
public class RibbonConfig {

    @Bean
    @SentinelRestTemplate
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
```

* 添加`CircleBreakerController`类，定义对`nacos-user-service`提供接口的调用：

::: details 定义对 nacos-user-service 接口的调用

```java
@RestController
@RequestMapping("/breaker")
public class CircleBreakerController {

    private Logger LOGGER = LoggerFactory.getLogger(CircleBreakerController.class);
    @Autowired
    private RestTemplate restTemplate;
    @Value("${service-url.user-service}")
    private String userServiceUrl;

    @RequestMapping("/fallback/{id}")
    @SentinelResource(value = "fallback",fallback = "handleFallback")
    public CommonResult fallback(@PathVariable Long id) {
        return restTemplate.getForObject(userServiceUrl + "/user/{1}", CommonResult.class, id);
    }

    @RequestMapping("/fallbackException/{id}")
    @SentinelResource(value = "fallbackException",fallback = "handleFallback2", exceptionsToIgnore = {NullPointerException.class})
    public CommonResult fallbackException(@PathVariable Long id) {
        if (id == 1) {
            throw new IndexOutOfBoundsException();
        } else if (id == 2) {
            throw new NullPointerException();
        }
        return restTemplate.getForObject(userServiceUrl + "/user/{1}", CommonResult.class, id);
    }

    public CommonResult handleFallback(Long id) {
        User defaultUser = new User(-1L, "defaultUser", "123456");
        return new CommonResult<>(defaultUser,"服务降级返回",200);
    }

    public CommonResult handleFallback2(@PathVariable Long id, Throwable e) {
        LOGGER.error("handleFallback2 id:{},throwable class:{}", id, e.getClass());
        User defaultUser = new User(-2L, "defaultUser2", "123456");
        return new CommonResult<>(defaultUser,"服务降级返回",200);
    }
}
```

:::