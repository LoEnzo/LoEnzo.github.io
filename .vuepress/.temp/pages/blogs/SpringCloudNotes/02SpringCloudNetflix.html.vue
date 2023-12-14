<template><div><p>::: tip</p>
<p>Spring Cloud Netflix 是在  Netflix OSS 基础上的封装，里面包含有分布式系统中常用的核心组件：Eureka、Ribbon、Hystrix、Feign、Zuul</p>
<p>:::</p>
<!-- more -->
<h1 id="spring-cloud-netflix" tabindex="-1"><a class="header-anchor" href="#spring-cloud-netflix" aria-hidden="true">#</a> Spring Cloud Netflix</h1>
<p>Netflix OSS 开源组件集成，包括Eureka、Hystrix、Ribbon、Feign、Zuul等核心组件。</p>
<ul>
<li>Eureka：服务治理组件，包括服务端的注册中心和客户端的服务发现机制；</li>
<li>Ribbon：负载均衡的服务调用组件，具有多种负载均衡调用策略；</li>
<li>Hystrix：服务容错组件，实现了断路器模式，为依赖服务的出错和延迟提供了容错能力；</li>
<li>Feign：基于Ribbon和Hystrix的声明式服务调用组件；</li>
<li>Zuul：API网关组件，对请求提供路由及过滤功能。</li>
</ul>
<h2 id="spring-cloud-eureka-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#spring-cloud-eureka-服务注册与发现" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/eureka?id=spring-cloud-eureka%EF%BC%9A%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E4%B8%8E%E5%8F%91%E7%8E%B0" target="_blank" rel="noopener noreferrer">Spring Cloud Eureka：服务注册与发现</a></h2>
<h3 id="eureka简介" tabindex="-1"><a class="header-anchor" href="#eureka简介" aria-hidden="true">#</a> <strong>Eureka</strong>简介</h3>
<p>微服务架构需要有一个注册中心，所有的微服务都会在注册中心注册自己的地址和端口信息，每个微服务都会定时从注册中心获取服务列表，同时汇报自己的运行情况，保证整个微服务的正常运行，Eureka就是实现这一套流程的组件。</p>
<h3 id="搭建注册中心" tabindex="-1"><a class="header-anchor" href="#搭建注册中心" aria-hidden="true">#</a> <strong>搭建注册中心</strong></h3>
<ul>
<li>IDEA初始化一个SpringBoot应用，可以在创建的选择组件：<code v-pre>Spring Cloud Discovery -&gt; Eureka Server</code>，或者创建后手动添加pom</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>启动类添加注解<code v-pre>@EnableEurekaServer</code>注解来启用Euerka注册中心功能</p>
</li>
<li>
<p><code v-pre>application.yml </code>添加Eureka注册中心的配置</p>
</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搭建客户端" tabindex="-1"><a class="header-anchor" href="#搭建客户端" aria-hidden="true">#</a> <strong>搭建客户端</strong></h3>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>启动类添加注解<code v-pre>@EnableDiscoveryClient</code>来表明这是一个Eureka客户端</p>
<p><strong>注意：</strong><code v-pre>@EnableEurekaClient</code>只适用于Eureka作为注册中心，<code v-pre>@EnableDiscoveryClient</code>可以是其他注册中心</p>
</li>
<li>
<p><code v-pre>application.yml</code>添加Eureka客户端基础配置</p>
</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问注册中心<code v-pre>http://localhost:8001</code>即可客户端成功注册</p>
<h3 id="搭建注册中心集群" tabindex="-1"><a class="header-anchor" href="#搭建注册中心集群" aria-hidden="true">#</a> <strong>搭建注册中心集群</strong></h3>
<p>由于多个微服务都是注册到注册中心通过服务列表来相互调用，一旦注册中心宕机，会导致所有服务都出现问题，所以我们需要多个注册中心来保证服务正常运行</p>
<ul>
<li>
<p>根据注册中心配置文件新增一个<code v-pre>application-replica1.yml</code>、<code v-pre>application-replica2.yml</code>配置文件，根据下面配置修改端口号，hostname（为了在注册中心里面好区分），注册中心的地址即可</p>
<p><strong>注意</strong>：注册中心地址使用的 <code v-pre>replica2</code>这样的域名，可以在hosts里面修改下文件</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>127.0.0.1 replica2
127.0.0.1 replica3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问任意一个注册中心即可看到成功注册的客户端和备份注册中心</p>
<p><img src="@source/blogs/SpringCloudNotes/images/springcloud_arch01.png" alt=""></p>
<h3 id="eureka常用配置" tabindex="-1"><a class="header-anchor" href="#eureka常用配置" aria-hidden="true">#</a> <strong>Eureka常用配置</strong></h3>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>eureka:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-cloud-ribbon-负载均衡的服务调用" tabindex="-1"><a class="header-anchor" href="#spring-cloud-ribbon-负载均衡的服务调用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/ribbon?id=spring-cloud-ribbon%EF%BC%9A%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%9A%84%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8" target="_blank" rel="noopener noreferrer">Spring Cloud Ribbon：负载均衡的服务调用</a></h2>
<h3 id="ribbon简介" tabindex="-1"><a class="header-anchor" href="#ribbon简介" aria-hidden="true">#</a> Ribbon简介</h3>
<p>在微服务架构中， 我们服务一般都会部署多个，用户请求进来会调用哪一个就需要负载均衡平衡，当我们使用RestTemplate来调用其他服务时，Ribbon可以很方便的实现负载均衡功能。</p>
<p><strong><a href="https://hjwu.gq/blogs/JavaNotes/RestTemplate.html" target="_blank" rel="noopener noreferrer">RestTemplate简单使用</a></strong></p>
<h3 id="创建user-service客户端模块" tabindex="-1"><a class="header-anchor" href="#创建user-service客户端模块" aria-hidden="true">#</a> <strong>创建user-service客户端模块</strong></h3>
<p>供 <strong>Ribbon</strong> 提供服务使用，同时修改配置文件，启动 <strong>user-service</strong> 8020，8021两个端口，注册到注册中心8001中，user-service 中写一些常见的CURD接口即可</p>
<ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8201
spring:
  application:
    name: user-service
eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://localhost:8001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建ribbon-service模块" tabindex="-1"><a class="header-anchor" href="#创建ribbon-service模块" aria-hidden="true">#</a> <strong>创建ribbon-service模块</strong></h3>
<p>通过<code v-pre>ribbon-service</code> 服务的 <strong>RestTemplate</strong>直接调用 <code v-pre>user-service</code> 模块的接口即可</p>
<ul>
<li>新增依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8301
spring:
  application:
    name: ribbon-service
eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://localhost:8001/eureka/
service-url:
  user-service: http://user-service    # 对应注册中心中 user-server 服务的name地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>负载均衡使用，在创建<code v-pre>RestTemplate</code> bean基础上添加注解 <code v-pre>@LoadBalanced</code> 即可</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RibbonConfig {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Ribbon <strong>全局配置</strong>与<strong>指定服务配置</strong></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>user-service: # 指定user-service 服务配置，全局配置去除这行即可，我实测全局配置未生效，不知道为啥
  ribbon:
    ConnectTimeout: 1000 #服务请求连接超时时间（毫秒）
    ReadTimeout: 3000 #服务请求处理超时时间（毫秒）
    OkToRetryOnAllOperations: true #对超时请求启用重试机制
    MaxAutoRetriesNextServer: 1 #切换重试实例的最大个数
    MaxAutoRetries: 1 # 切换实例后重试最大次数
    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule #修改负载均衡算法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 修改负载均衡算法</p>
<table>
<thead>
<tr>
<th>参数 <code v-pre>com.netflix.loadbalancer.XXX</code></th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>RandomRule</code></td>
<td>从提供服务的实例中以随机的方式</td>
</tr>
<tr>
<td><code v-pre>RoundRobinRule</code></td>
<td>以线性轮询的方式，就是维护一个计数器，从提供服务的实例中按顺序选取，第一次选第一个，第二次选第二个，以此类推，到最后一个以后再从头来过；</td>
</tr>
<tr>
<td><code v-pre>RetryRule</code></td>
<td>在RoundRobinRule的基础上添加重试机制，即在指定的重试时间内，反复使用线性轮询策略来选择可用实例；</td>
</tr>
<tr>
<td><code v-pre>WeightedResponseTimeRule</code></td>
<td>对RoundRobinRule的扩展，响应速度越快的实例选择权重越大，越容易被选择；</td>
</tr>
<tr>
<td><code v-pre>BestAvailableRule</code></td>
<td>选择并发较小的实例</td>
</tr>
<tr>
<td><code v-pre>AvailabilityFilteringRule</code></td>
<td>先过滤掉故障实例，再选择并发较小的实例</td>
</tr>
<tr>
<td><code v-pre>ZoneAwareLoadBalancer</code></td>
<td>采用双重过滤，同时过滤不是同一区域的实例和故障实例，选择并发较小的实例</td>
</tr>
</tbody>
</table>
<p>:::</p>
<ul>
<li>通过创建bean进行全局配置</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Bean
public IRule customRule(){
   return new RandomRule();  // 随机
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动注册中心<code v-pre>eureka-service</code>，启动<code v-pre>user-service</code>8020、8021，客户端，启动<code v-pre>ribbon-service</code>服务</p>
<p>调用<code v-pre>ribbon-service</code>服务能看到<code v-pre>user-service</code>两个端口的控制台交替打印即可，可以尝试其他负载均衡策略，查看控制台变化</p>
<h2 id="spring-cloud-hystrix-服务容错保护" tabindex="-1"><a class="header-anchor" href="#spring-cloud-hystrix-服务容错保护" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/hystrix?id=spring-cloud-hystrix%EF%BC%9A%E6%9C%8D%E5%8A%A1%E5%AE%B9%E9%94%99%E4%BF%9D%E6%8A%A4" target="_blank" rel="noopener noreferrer">Spring Cloud Hystrix：服务容错保护</a></h2>
<h3 id="hystrix简介" tabindex="-1"><a class="header-anchor" href="#hystrix简介" aria-hidden="true">#</a> Hystrix简介</h3>
<p>在微服务架构中，服务与服务之间通过远程调用的方式进行通信，一旦某个被调用的服务发生了故障，其依赖服务也会发生故障，此时就会发生故障的蔓延，最终导致系统瘫痪。Hystrix实现了断路器模式，当某个服务发生故障时，通过断路器的监控，给调用方返回一个错误响应，而不是长时间的等待，这样就不会使得调用方由于长时间得不到响应而占用线程，从而防止故障的蔓延。Hystrix具备<strong>服务降级、服务熔断、线程隔离、请求缓存、请求合并及服务监控</strong>等强大功能。</p>
<h3 id="创建一个hystrix-service模块" tabindex="-1"><a class="header-anchor" href="#创建一个hystrix-service模块" aria-hidden="true">#</a> <strong>创建一个hystrix-service模块</strong></h3>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8401
spring:
  application:
    name: hystrix-service
eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://localhost:8001/eureka/
service-url:
  user-service: http://user-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动类添加注解<code v-pre>@EnableCircuitBreaker</code>开启断路器功能</li>
</ul>
<h3 id="服务熔断、服务降级、服务限流" tabindex="-1"><a class="header-anchor" href="#服务熔断、服务降级、服务限流" aria-hidden="true">#</a> 服务熔断、服务降级、服务限流</h3>
<p>微服务是完成一个单一的业务功能，这样做的好处是可以做到解耦，每个微服务可以独立演进。但是，一个应用可能会有多个微服务组成，微服务之间的数据交互通过远程过程调用完成。服务之间调用链路太长，相互调用，如果其中一个服务调用时间太长，或者不可用，大量请求堆积，占用系统资源，进而导致系统崩溃，所谓的&quot;雪崩效应&quot;</p>
<p><strong>服务熔断</strong>：当检测到某个服务多次超时或相应时间太长，会对该服务降级处理，熔断该服务的调用，快速返回错误详细信息，避免长时间等待和资源占用，当检测到节点相应正常后，恢复调用</p>
<p><strong>服务降级</strong>：从整体负荷考虑，服务分优先级，保证核心业务，暂时停止非核心业务</p>
<p><strong>服务限流</strong>：限制并发请求量，超过阈值拒绝请求</p>
<p>整点秒杀活动，服务限流是指允许能负载的请求量进来，多余的请求拒绝；服务降级是整点秒杀时对用户注册等非核心的业务做降级处理；服务熔断是当秒杀活动访问太多导致超时，熔断该服务，并作降级处理，返回用户友好提示信息</p>
<ul>
<li>服务降级演示</li>
</ul>
<p><code v-pre>UserHystrixController</code>添加用于测试服务降级的接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@GetMapping(&quot;/testFallback/{id}&quot;)
public CommonResult testFallback(@PathVariable Long id) {
    return userService.getUser(id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在UserService中添加调用方法与服务降级方法，方法上需要添加<code v-pre>@HystrixCommand</code>注解：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@HystrixCommand(fallbackMethod = &quot;getDefaultUser&quot;)
public CommonResult getUser(Long id) {
    return restTemplate.getForObject(userServiceUrl + &quot;/user/{1}&quot;, CommonResult.class, id);
}

public CommonResult getDefaultUser(@PathVariable Long id) {
    User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
    return new CommonResult&lt;&gt;(defaultUser);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> <strong>验证</strong></h3>
<p>启动<code v-pre>eureka-server</code>、<code v-pre>user-service</code>、<code v-pre>hystrix-service</code>服务；</p>
<p>正常调用<code v-pre>http://localhost:8401/user/testFallback/1</code>返回</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
	data: {
		id: 1,
		username: &quot;macro&quot;,
		password: &quot;123456&quot;,
	},
	message: &quot;操作成功&quot;,
	code: 200,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭<code v-pre>user-service</code>服务，再次调用，服务降级，直接返回预设错误信息</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
	data: {
		id: -1,
		username: &quot;defaultUser&quot;,
		password: &quot;123456&quot;,
	},
	message: &quot;操作成功&quot;,
	code: 200,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><a href="http://www.macrozheng.com/#/cloud/hystrix?id=hystrix%E7%9A%84%E8%AF%B7%E6%B1%82%E7%BC%93%E5%AD%98" target="_blank" rel="noopener noreferrer">Hystrix的请求缓存</a></strong></p>
<p><strong><a href="http://www.macrozheng.com/#/cloud/hystrix?id=%E8%AF%B7%E6%B1%82%E5%90%88%E5%B9%B6" target="_blank" rel="noopener noreferrer">Hystrix请求合并</a></strong></p>
<p><strong><a href="http://www.macrozheng.com/#/cloud/hystrix_dashboard?id=hystrix-dashboard%EF%BC%9A%E6%96%AD%E8%B7%AF%E5%99%A8%E6%89%A7%E8%A1%8C%E7%9B%91%E6%8E%A7" target="_blank" rel="noopener noreferrer">Hystrix Dashboard：断路器执行监控</a></strong></p>
<h2 id="spring-cloud-openfeign-基于ribbon和hystrix的声明式服务调用" tabindex="-1"><a class="header-anchor" href="#spring-cloud-openfeign-基于ribbon和hystrix的声明式服务调用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/feign?id=spring-cloud-openfeign%EF%BC%9A%E5%9F%BA%E4%BA%8Eribbon%E5%92%8Chystrix%E7%9A%84%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%9C%8D%E5%8A%A1%E8%B0%83%E7%94%A8" target="_blank" rel="noopener noreferrer">Spring Cloud OpenFeign：基于Ribbon和Hystrix的声明式服务调用</a></h2>
<h3 id="feign简介" tabindex="-1"><a class="header-anchor" href="#feign简介" aria-hidden="true">#</a> Feign简介</h3>
<p>Feign是声明式的服务调用工具，我们只需创建一个接口并用注解的方式来配置它，就可以实现对某个服务接口的调用，简化了直接使用RestTemplate来调用服务接口的开发量。Feign具备可插拔的注解支持，同时支持Feign注解、JAX-RS注解及SpringMvc注解。当使用Feign时，Spring Cloud集成了Ribbon和Eureka以提供负载均衡的服务调用及基于Hystrix的服务容错保护功能。</p>
<h3 id="创建一个feign-service模块" tabindex="-1"><a class="header-anchor" href="#创建一个feign-service模块" aria-hidden="true">#</a> 创建一个feign-service模块</h3>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8701
spring:
  application:
    name: feign-service
eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://localhost:8001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>启动类上添加注解<code v-pre>@EnableFeignClients</code>启动<strong>Feign</strong>客户端功能</p>
</li>
<li>
<p><strong>Feigin</strong>客户端<strong>user-service</strong>服务的接口绑定</p>
<p>创建一个<code v-pre>user-service</code>接口，内容基于<code v-pre>user-service</code>服务的<strong>Controller</strong>类修改为接口，保留<strong>springmvc</strong>的注解即可</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>// value对应要连接的user-service服务，fallback对应的为user-service降级服务的实现类
@FeignClient(value = &quot;user-service&quot;,fallback = UserFallbackService.class)
public interface UserService {
    @PostMapping(&quot;/user/create&quot;)
    CommonResult create(@RequestBody User user);

    @GetMapping(&quot;/user/{id}&quot;)
    CommonResult&lt;User&gt; getUser(@PathVariable Long id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建<strong>降级服务</strong>实现类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Component
public class UserFallbackService implements UserService {
    @Override
    public CommonResult create(User user) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser);
    }

    @Override
    public CommonResult&lt;User&gt; getUser(Long id) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>开启日志，打印详细的http请求细节</li>
</ul>
<p>::: details 日志等级</p>
<ul>
<li><strong>NONE</strong>：默认的，不显示任何日志；</li>
<li><strong>BASIC</strong>：仅记录请求方法、URL、响应状态码及执行时间；</li>
<li><strong>HEADERS</strong>：除了BASIC中定义的信息之外，还有请求和响应的头信息；</li>
<li><strong>FULL</strong>：除了HEADERS中定义的信息之外，还有请求和响应的正文及元数据。</li>
</ul>
<p>:::</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class FeignConfig {
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Feign</strong>常用配置，<strong>Feign</strong>中可以直接使用<strong>ribbon</strong>，hystrix配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>feign:
  hystrix:
    enabled: true #在Feign中开启Hystrix
  compression:
    request:
      enabled: false #是否对请求进行GZIP压缩
      mime-types: text/xml,application/xml,application/json #指定压缩的请求数据类型
      min-request-size: 2048 #超过该大小的请求会被压缩
    response:
      enabled: false #是否对响应进行GZIP压缩
logging:
  level: #修改日志级别
    com.macro.cloud.service.UserService: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证-1" tabindex="-1"><a class="header-anchor" href="#验证-1" aria-hidden="true">#</a> 验证</h3>
<p>启动<code v-pre>eureka-server</code>、<code v-pre>user-service</code>、<code v-pre>feign-service</code>服务；</p>
<p>访问<code v-pre>http://localhost:8701/user/1</code>，<code v-pre>user-service</code>两端口控制台正常交替打印</p>
<p>关闭两个所有的<code v-pre>user-service</code>服务，再次访问，返回为降级预设错误</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
	data: {
		id: -1,
		username: &quot;defaultUser&quot;,
		password: &quot;123456&quot;,
	},
	message: &quot;操作成功&quot;,
	code: 200,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-cloud-zuul-api网关服务" tabindex="-1"><a class="header-anchor" href="#spring-cloud-zuul-api网关服务" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/zuul?id=spring-cloud-zuul%EF%BC%9Aapi%E7%BD%91%E5%85%B3%E6%9C%8D%E5%8A%A1" target="_blank" rel="noopener noreferrer">Spring Cloud Zuul：API网关服务</a></h2>
<h3 id="zuul简介" tabindex="-1"><a class="header-anchor" href="#zuul简介" aria-hidden="true">#</a> Zuul简介</h3>
<p>API网关为微服务架构中的服务提供了统一的访问入口，客户端通过API网关访问相关服务。API网关的定义类似于设计模式中的门面模式，它相当于整个微服务架构中的门面，所有客户端的访问都通过它来进行路由及过滤。它实现了<strong>请求路由、负载均衡、校验过滤、服务容错、服务聚合</strong>等功能。</p>
<h3 id="创建一个zuul-proxy模块" tabindex="-1"><a class="header-anchor" href="#创建一个zuul-proxy模块" aria-hidden="true">#</a> 创建一个zuul-proxy模块</h3>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8801
spring:
  application:
    name: zuul-proxy
eureka: 	
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://localhost:8001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>启动类添加注解<code v-pre>EnableZuulProxy</code>启用Zuul的API网关功能</p>
</li>
<li>
<p>启动<code v-pre>eureka-server</code>，两个<code v-pre>user-service</code>，<code v-pre>feign-service</code>和<code v-pre>zuul-proxy</code>来演示Zuul的常用功能</p>
</li>
<li>
<p>配置路由规则：</p>
</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>zuul:
  routes: #给服务配置路由
    user-service:
      path: /userService/**
    feign-service:
      path: /feignService/**
  ignored-services: user-service,feign-service  #关闭默认路由配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证接口，因为已经使用了feign，所以可以看到userService两个端口的控制台交替答应成功的日志记录，默认的路由规则就是注册到注册中心的服务名，也就是说访问userService，user-service都能成功调用user-service服务的接口，关闭默认路由后，默认的访问路径就失效了</p>
<p>访问<code v-pre>http://localhost:8801/userService/user/1</code>，<code v-pre>http://localhost:8801/user-service/user/1</code>都可以发现请求路由到了user-service上了；</p>
<p>访问<code v-pre>http://localhost:8801/feignService/user/1</code>，<code v-pre>http://localhost:8801/feign-service/user/1</code>都可以发现请求路由到了feign-service上了</p>
<ul>
<li>配置路由访问前缀，访问接口底之前加上前缀路径即可</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>zuul:
  prefix: /proxy #给网关路由添加前缀
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：<code v-pre>http://localhost:8801/proxy/userService/user/1</code></p>
<h3 id="查看路由信息" tabindex="-1"><a class="header-anchor" href="#查看路由信息" aria-hidden="true">#</a> <strong>查看路由信息</strong></h3>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application-yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>management:
  endpoints:
    web:
      exposure:
        include: 'routes'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>测试</li>
</ul>
<p>查看简单路由信息：<code v-pre>http://localhost:8801/actuator/routes/</code></p>
<p>查看详细路由信息：<code v-pre>http://localhost:8801/actuator/routes/details</code></p>
<h3 id="header过滤及重定向添加host-未测试" tabindex="-1"><a class="header-anchor" href="#header过滤及重定向添加host-未测试" aria-hidden="true">#</a> <strong>Header过滤及重定向添加Host(未测试)</strong></h3>
<p>Zuul在请求路由时，默认会过滤掉一些敏感的头信息，以下配置可以防止路由时的Cookie及Authorization的丢失</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>zuul:
  sensitive-headers: Cookie,Set-Cookie,Authorization  # 配置过滤敏感的请求头信息，设置为空就不会过滤
  add-host-header: true                               # 设置为true重定向是会添加host请求头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤器</p>
<p>路由与过滤是Zuul的两大核心功能，路由功能负责将外部请求转发到具体的服务实例上去，是实现统一访问入口的基础，过滤功能负责对请求过程进行额外的处理，是请求校验过滤及服务聚合的基础</p>
<p><strong>Zuul中集中典型的过滤器类型</strong></p>
<table>
<thead>
<tr>
<th>过滤器</th>
<th>说明</th>
<th>场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>pre</code></td>
<td>在请求被路由到目标服务前执行，</td>
<td>比如权限校验、打印日志等功能；</td>
</tr>
<tr>
<td><code v-pre>routing</code></td>
<td>在请求被路由到目标服务时执行，这是使用Apache HttpClient或Netflix Ribbon构建和发送原始HTTP请求的地方；</td>
<td></td>
</tr>
<tr>
<td><code v-pre>post</code></td>
<td>在请求被路由到目标服务后执行</td>
<td>比如给目标服务的响应添加头信息，收集统计数据等功能；</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td>请求在其他阶段发生错误时执行</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>zuul过滤器生命周期</strong></p>
<p><img src="@source/blogs/SpringCloudNotes/images/springcloud_zuul01.png" alt=""></p>
<p><strong>自定义过滤器</strong></p>
<p>添加下面自定义的过滤器，调用<code v-pre>http://localhost:8801/user-service/user/1</code>即可看到日志生效；</p>
<p><strong>仿照写了一个其他的过滤器，判断请求是否又accessToken或者其他参数的，没有生效，过滤器理解还不通透。</strong></p>
<p>::: details Prelog Filter</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>package com.macro.cloud.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by macro on 2019/9/9.
 */
@Component
public class PreLogFilter extends ZuulFilter {
    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    /**
     * 过滤器类型，有pre、route、post、error四种。
     */
    @Override
    public String filterType() {
        return &quot;pre&quot;;
    }

    /**
     * 过滤器执行顺序，数值越小优先级越高。
     */
    @Override
    public int filterOrder() {
        return 1;
    }

    /**
     * 是否进行过滤，返回true会执行过滤。
     */
    @Override
    public boolean shouldFilter() {
        return true;
    }

    /**
     * 自定义的过滤器逻辑，当shouldFilter()返回true时会执行。
     */
    @Override
    public Object run() throws ZuulException {
        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest request = requestContext.getRequest();
        String host = request.getRemoteHost();
        String method = request.getMethod();
        String uri = request.getRequestURI();
        LOGGER.info(&quot;Remote host:{},method:{},uri:{}&quot;, host, method, uri);
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p><strong>禁用过滤器</strong></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>zuul:
  PreLogFilter:       # 对应过滤器的名称
    pre:              # 对应过滤器的类型
      disable: true   # 是否禁用过滤器，默认为false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>核心过滤器</strong></p>
<p>::: details 核心过滤器</p>
<table>
<thead>
<tr>
<th>过滤器名称</th>
<th>过滤类型</th>
<th>优先级</th>
<th>过滤器的作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>ServletDetectionFilter</td>
<td>pre</td>
<td>-3</td>
<td>检测当前请求是通过DispatcherServlet处理运行的还是ZuulServlet运行处理的</td>
</tr>
<tr>
<td>Servlet30WrapperFilter</td>
<td>pre</td>
<td>-2</td>
<td>对原始的HttpServletRequest进行包装</td>
</tr>
<tr>
<td>FormBodyWrapperFilter</td>
<td>pre</td>
<td>-1</td>
<td>将Content-Type为application/x-www-form-urlencoded或multipart/form-data的请求包装成FormBodyRequestWrapper对象</td>
</tr>
<tr>
<td>DebugFilter</td>
<td>route</td>
<td>1</td>
<td>根据zuul.debug.request的配置来决定是否打印debug日志</td>
</tr>
<tr>
<td>PreDecorationFilter</td>
<td>route</td>
<td>5</td>
<td>对当前请求进行预处理以便执行后续操作</td>
</tr>
<tr>
<td>RibbonRoutingFilter</td>
<td>route</td>
<td>10</td>
<td>通过Ribbon和Hystrix来向服务实例发起请求，并将请求结果进行返回</td>
</tr>
<tr>
<td>SimpleHostRoutingFilter</td>
<td>route</td>
<td>100</td>
<td>只对请求上下文中有routeHost参数的进行处理，直接使用HttpClient向routeHost对应的物理地址进行转发</td>
</tr>
<tr>
<td>SendForwardFilter</td>
<td>route</td>
<td>500</td>
<td>只对请求上下文中有forward.to参数的进行处理，进行本地跳转</td>
</tr>
<tr>
<td>SendErrorFilter</td>
<td>post</td>
<td>0</td>
<td>当其他过滤器内部发生异常时的会由它来进行处理，产生错误响应</td>
</tr>
<tr>
<td>SendResponseFilter</td>
<td>post</td>
<td>1000</td>
<td>利用请求上下文的响应信息来组织请求成功的响应内容</td>
</tr>
</tbody>
</table>
<p>:::</p>
<h3 id="ribbon和hystrix的支持" tabindex="-1"><a class="header-anchor" href="#ribbon和hystrix的支持" aria-hidden="true">#</a> Ribbon和Hystrix的支持</h3>
<p>由于Zuul自动集成了Ribbon和Hystrix，所以Zuul天生就有负载均衡和服务容错能力，我们可以通过Ribbon和Hystrix的配置来配置Zuul中的相应功能，所以可以在配置文件中直接添加Ribbon，Hystrix的配置即可</p>
</div></template>


