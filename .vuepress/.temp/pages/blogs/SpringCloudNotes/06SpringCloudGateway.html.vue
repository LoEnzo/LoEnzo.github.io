<template><div><p>::: tip</p>
<p><strong>Spring Cloud Gateway</strong> 是Spring官方基于Spring 5.0，Spring Boot 2.0和Project Reactor等技术开发的网关，Spring Cloud Gateway旨在为微服务架构提供一种简单而有效的统一的API路由管理方式。<strong>Spring Cloud Gateway</strong>作为<strong>Spring Cloud</strong>生态系中的网关，目标是替代<strong>Zuul</strong>，其不仅提供统一的路由方式，并且基于Filter链的方式提供了网关基本的功能，例如：过滤器、熔断、限流、重试、安全，监控/埋点，和限流等。</p>
<p>:::</p>
<!-- more -->
<h2 id="相关特性" tabindex="-1"><a class="header-anchor" href="#相关特性" aria-hidden="true">#</a> 相关特性</h2>
<ul>
<li>基于Spring Framework 5, Project Reactor 和 Spring Boot 2.0 进行构建；</li>
<li>动态路由：能够匹配任何请求属性；</li>
<li>可以对路由指定 Predicate（断言）和 Filter（过滤器）；</li>
<li>集成Hystrix的断路器功能；</li>
<li>集成 Spring Cloud 服务发现功能；</li>
<li>易于编写的 Predicate（断言）和 Filter（过滤器）；</li>
<li>请求限流功能；</li>
<li>支持路径重写。</li>
</ul>
<h2 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h2>
<ul>
<li><strong>Route（路由</strong>）：路由是构建网关的基本模块，它由<strong>ID</strong>，目标<strong>URI</strong>，一系列的断言和过滤器组成，如果断言为true则匹配该路由；</li>
<li><strong>Predicate（断言）</strong>：指的是Java 8 的 Function Predicate。 输入类型是Spring框架中的ServerWebExchange。 这使开发人员可以匹配HTTP请求中的所有内容，例如请求头或请求参数。如果请求与断言相匹配，则进行路由；</li>
<li><strong>Filter（过滤器）</strong>：分为两种类型的Filter，分别是<strong>GatewayFileter</strong>和<strong>GlobalFileter</strong>，使用过滤器，可以在请求被路由前后对请求进行修改</li>
</ul>
<h2 id="创建api-gateway模块" tabindex="-1"><a class="header-anchor" href="#创建api-gateway模块" aria-hidden="true">#</a> 创建<code v-pre>api-gateway</code>模块</h2>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip</p>
<p><strong>Gateway</strong> 提供了两种不同的方式用于配置路由，一种是通过<strong>yml</strong>文件来配置，另一种是通过<strong>Java Bean</strong>来配置</p>
<p>:::</p>
<ul>
<li>添加<code v-pre>application-yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9201
service-url:
  user-service: http://localhost:8201
spring:
  cloud:
    gateway:
      routes:
        - id: path_route #路由的ID
          uri: ${service-url.user-service}/user/{id} #匹配后路由地址
          predicates: # 断言，路径相匹配的进行路由
            - Path=/user/{id}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动<code v-pre>eureka-server</code>，<code v-pre>user-service</code>和<code v-pre>api-gateway</code>服务，并调用该地址测试：<code v-pre>http://localhost:9201/user/1</code>，该请求被路由到了<code v-pre>http://localhost:8201/user/1</code></p>
<ul>
<li>使用<code v-pre>Java bean</code>配置</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(&quot;path_route2&quot;, r -&gt; r.path(&quot;/user/getByUsername&quot;)
                        .uri(&quot;http://localhost:8201/user/getByUsername&quot;))
                .build();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启<code v-pre>api-gateway</code>服务，调用<code v-pre>http://localhost:9201/user/getByUsername?username=macro</code>，实际请求被路由到了<code v-pre>http://localhost:8201/user/getByUsername?username=macro</code></p>
<h2 id="route-predicate-的使用" tabindex="-1"><a class="header-anchor" href="#route-predicate-的使用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=route-predicate-%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">Route Predicate 的使用</a></h2>
<p><strong>Spring Cloud Gateway</strong>包括许多内置的<strong>Route Predicate</strong>工厂。 所有这些<strong>Predicate</strong>都与HTTP请求的不同属性匹配。 多个<strong>Route Predicate</strong>工厂可以进行组合。</p>
<p><strong>注意</strong>：Predicate中提到的配置都在<code v-pre>application-predicate.yml</code>文件中进行修改，并用该配置启动<code v-pre>api-gateway</code>服务。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    gateway:
      routes:
        - id: after_route
          uri: ${service-url.user-service}
          predicates:
            - After=2019-09-24T16:30:00+08:00[Asia/Shanghai]
            - Before=2019-09-24T16:30:00+08:00[Asia/Shanghai]
            - Between=2019-09-24T16:30:00+08:00[Asia/Shanghai], 2019-09-25T16:30:00+08:00[Asia/Shanghai]
            - Cookie=username,macro
            # curl http://localhost:9201/user/1 --cookie &quot;username=macro&quot; 才能成功匹配
            - Header=X-Request-Id, \d+
            # curl http://localhost:9201/user/1 -H &quot;X-Request-Id:123&quot; 才能成功匹配
            - Host=**.macrozheng.com
            # curl http://localhost:9201/user/1 -H &quot;Host:www.macrozheng.com&quot; 才能成功匹配
			- Method=GET
			# curl http://localhost:9201/user/1
			# - Method=POST
			# curl -X POST http://localhost:9201/user/1 才能成功匹配
			- Path=/user/{id}
			# curl http://localhost:9201/user/1 才能成功匹配
			- Query=username
			# curl http://localhost:9201/user/getByUsername?username=macro 才能成功匹配
			- RemoteAddr=192.168.1.1/24
			# curl http://localhost:9201/user/1 用户从192.168.1.1ip地址上发起请求才能成功匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Route Predicate</th>
<th>说明</th>
<th>配置</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>After</strong></td>
<td>在指定时间之后的请求会匹配该路由</td>
<td><code v-pre>- After=2019-09-24T16:30:00+08:00[Asia/Shanghai]</code></td>
</tr>
<tr>
<td><strong>Before</strong></td>
<td>在指定时间之前的请求会匹配该路由</td>
<td><code v-pre>- Before=2019-09-24T16:30:00+08:00[Asia/Shanghai]</code></td>
</tr>
<tr>
<td><strong>Between</strong></td>
<td>在指定时间区间内的请求会匹配该路由</td>
<td><code v-pre>- Between=2019-09-24T16:30:00+08:00[Asia/Shanghai]</code>, <br> <code v-pre>2019-09-25T16:30:00+08:00[Asia/Shanghai]</code></td>
</tr>
<tr>
<td><strong>Cookie</strong></td>
<td>带有指定Cookie的请求会匹配该路由</td>
<td><code v-pre>- Cookie=username,macro</code></td>
</tr>
<tr>
<td><strong>Header</strong></td>
<td>带有指定请求头的请求会匹配该路由</td>
<td><code v-pre>- Header=X-Request-Id, \d+</code></td>
</tr>
<tr>
<td><strong>Host</strong></td>
<td>带有指定Host的请求会匹配该路由</td>
<td><code v-pre>- Host=**.macrozheng.com</code></td>
</tr>
<tr>
<td><strong>Methode</strong></td>
<td>发送指定方法的请求会匹配该路由</td>
<td><code v-pre>- Method=GET</code></td>
</tr>
<tr>
<td><strong>Path</strong></td>
<td>发送指定路径的请求会匹配该路由</td>
<td><code v-pre>- Path=/user/{id}</code></td>
</tr>
<tr>
<td><strong>Query</strong></td>
<td>带指定查询参数的请求可以匹配该路由</td>
<td><code v-pre>- Query=username</code></td>
</tr>
<tr>
<td><strong>RemoteAddr</strong></td>
<td>从指定远程地址发起的请求可以匹配该路由</td>
<td><code v-pre>- RemoteAddr=192.168.1.1/24</code></td>
</tr>
<tr>
<td><strong>Weight</strong></td>
<td>使用权重来路由相应请求</td>
<td></td>
</tr>
</tbody>
</table>
<p>以下表示有80%的请求会被路由到localhost:8201，20%会被路由到localhost:8202</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    gateway:
      routes:
      - id: weight_high
        uri: http://localhost:8201
        predicates:
        - Weight=group1, 8
      - id: weight_low
        uri: http://localhost:8202
        predicates:
        - Weight=group1, 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用route-predicate-factory" tabindex="-1"><a class="header-anchor" href="#常用route-predicate-factory" aria-hidden="true">#</a> 常用<code v-pre>Route Predicate Factory</code></h4>
<p><img src="@source/blogs/SpringCloudNotes/images/springcloud_gateway01.png" alt=""></p>
<h2 id="route-filter-的使用" tabindex="-1"><a class="header-anchor" href="#route-filter-的使用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=route-filter-%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">Route Filter 的使用</a></h2>
<p>路由过滤器可用于<strong>修改进入的HTTP请求和返回的HTTP响应</strong>，路由过滤器只能指定路由进行使用。<strong>Spring Cloud Gateway</strong> 内置了多种路由过滤器，他们都由<strong>GatewayFilter</strong>的工厂类来产生，下面我们介绍下常用路由过滤器的用法。</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    gateway:
      routes:
      - id: prefix_path_route
        uri: http://localhost:8201
        predicates:
        - Method=GET
        filters:
        - PrefixPath=/user
        # curl http://localhost:8201/1 变成 curl http://localhost:8201/user/1
        - StripPrefix=2
        # curl http://localhost:9201/user-service/a/user/1  变成 curl http://localhost:9201/user-service/user/1
        - AddRequestParameter=username, macro
        # 等同于请求添加了参数curl http://localhost:8201/user/getByUsername?username=macro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Route Filter</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>AddRequestParameter</strong></td>
<td>给请求添加参数的过滤器</td>
<td><code v-pre>- AddRequestParameter=username, macro</code></td>
</tr>
<tr>
<td><strong>StripPrefix</strong></td>
<td>对指定数量的路径前缀进行去除的过滤器</td>
<td><code v-pre>- StripPrefix=2</code></td>
</tr>
<tr>
<td><strong>PrefixPath</strong></td>
<td>对原有路径进行增加操作的过滤器</td>
<td><code v-pre>- PrefixPath=/user</code></td>
</tr>
</tbody>
</table>
<h3 id="hystrix-gatewayfilter" tabindex="-1"><a class="header-anchor" href="#hystrix-gatewayfilter" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=hystrix-gatewayfilter" target="_blank" rel="noopener noreferrer">Hystrix GatewayFilter</a></h3>
<p><strong>Hystrix</strong> 过滤器允许你将断路器功能添加到网关路由中，使你的服务免受级联故障的影响，并提供服务降级处理。</p>
<ul>
<li>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>然后添加相关服务降级的处理类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
public class FallbackController {

    @GetMapping(&quot;/fallback&quot;)
    public Object fallback() {
        Map&lt;String,Object&gt; result = new HashMap&lt;&gt;();
        result.put(&quot;data&quot;,null);
        result.put(&quot;message&quot;,&quot;Get request fallback!&quot;);
        result.put(&quot;code&quot;,500);
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application-yml</code>添加配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    gateway:
      routes:
        - id: hystrix_route
          uri: http://localhost:8201
          predicates:
            - Method=GET
          filters:
            - name: Hystrix
              args:
                name: fallbackcmd
                fallbackUri: forward:/fallback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>验证</p>
<p>关闭<code v-pre>user-service</code>后，调用<code v-pre>http://localhost:9201/user/1</code>返回服务降级处理信息</p>
</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    code: 500,
    data: null,
    message: &quot;Get request fallback!&quot;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requestratelimiter-gatewayfilter" tabindex="-1"><a class="header-anchor" href="#requestratelimiter-gatewayfilter" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=requestratelimiter-gatewayfilter" target="_blank" rel="noopener noreferrer">RequestRateLimiter GatewayFilter</a></h3>
<p><strong>RequestRateLimiter</strong> 过滤器可以用于限流，使用<strong>RateLimiter</strong>实现来确定是否允许当前请求继续进行，如果请求太大默认会返回<strong>HTTP 429</strong>太多请求状态</p>
<ul>
<li>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-redis-reactive&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>添加限流策略的配置类</p>
<p>这里有两种策略一种是<strong>根据请求参数</strong>中的username进行限流，另一种是<strong>根据访问IP</strong>进行限流</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RedisRateLimiterConfig {
    @Bean
    KeyResolver userKeyResolver() {
        return exchange -&gt; Mono.just(exchange.getRequest().getQueryParams().getFirst(&quot;username&quot;));
    }

    @Bean
    public KeyResolver ipKeyResolver() {
        return exchange -&gt; Mono.just(exchange.getRequest().getRemoteAddress().getHostName());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动<strong>Redis</strong>，<a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noopener noreferrer">下载地址</a>，解压到对应目录，启动指令</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 直接启动
redis-server.exe 

# 以配置文件启动，注册到服务，可避免后台挂起控制台
redis-server.exe --service-install redis.windows.conf

# redis.windows.conf 搜索requirepass foobared 添加下列配置，设置密码
requirepass 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>application-requestRateLimiter.yml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9201
spring:
  redis:
    host: localhost
    password: 123456
    port: 6379
  cloud:
    gateway:
      routes:
        - id: requestratelimiter_route
          uri: http://localhost:8201
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 1 #每秒允许处理的请求数量
                redis-rate-limiter.burstCapacity: 2 #每秒最大处理的请求数量
                key-resolver: &quot;#{@ipKeyResolver}&quot; #限流策略，对应策略的Bean
          predicates:
            - Method=GET
logging:
  level:
    org.springframework.cloud.gateway: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>验证</li>
</ul>
<p>多次快速调用<code v-pre>http://localhost:9201/user/1 </code>，每秒调用2次以上，页面报错HTTP 429</p>
<h3 id="retry-gatewayfilter-未测试" tabindex="-1"><a class="header-anchor" href="#retry-gatewayfilter-未测试" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=retry-gatewayfilter" target="_blank" rel="noopener noreferrer">Retry GatewayFilter</a>（未测试）</h3>
<p>对路由请求进行重试的过滤器，可以根据路由请求返回的HTTP状态码来确定是否进行重试</p>
<ul>
<li>修改配置文件</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    gateway:
      routes:
      - id: retry_route
        uri: http://localhost:8201
        predicates:
        - Method=GET
        filters:
        - name: Retry
          args:
            retries: 1 #需要进行重试的次数
            statuses: BAD_GATEWAY #返回哪个状态码需要进行重试，返回状态码为5XX进行重试
            backoff:
              firstBackoff: 10ms
              maxBackoff: 50ms
              factor: 2
              basedOnPreviousValue: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当调用返回500时会进行重试，访问测试地址：<code v-pre>http://localhost:9201/user/111</code>，查看控制台日志，报错了两次，说明重试了一次</p>
<h2 id="结合注册中心使用" tabindex="-1"><a class="header-anchor" href="#结合注册中心使用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/gateway?id=%E7%BB%93%E5%90%88%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">结合注册中心使用</a></h2>
<p>注册到注册中心，使用默认的动态路由和过滤器</p>
<h3 id="使用默认路由" tabindex="-1"><a class="header-anchor" href="#使用默认路由" aria-hidden="true">#</a> 使用默认路由</h3>
<ul>
<li>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>application-eureka.yml</code>配置文件：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9201
spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true #开启从注册中心动态创建路由的功能
          lower-case-service-id: true #使用小写服务名，默认是大写
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
logging:
  level:
    org.springframework.cloud.gateway: debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>验证</li>
</ul>
<p>使用<code v-pre>application-eureka.yml</code>配置文件启动api-gateway服务，访问<code v-pre>http://localhost:9201/user-service/user/1 </code>，可以路由到<strong>user-service</strong>的<code v-pre>http://localhost:8201/user/1 </code></p>
<h2 id="其他参考" tabindex="-1"><a class="header-anchor" href="#其他参考" aria-hidden="true">#</a> 其他参考</h2>
<p><a href="https://blog.csdn.net/rain_web/article/details/102469745" target="_blank" rel="noopener noreferrer">Gateway网关简介及使用</a></p>
</div></template>


