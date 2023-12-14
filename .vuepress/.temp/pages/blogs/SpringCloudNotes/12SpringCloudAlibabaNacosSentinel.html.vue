<template><div><p>::: tip</p>
<p>Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案，Sentinel 作为其核心组件之一，具有熔断与限流等一系列服务保护功能。</p>
<p>:::</p>
<!-- more -->
<h1 id="sentinel" tabindex="-1"><a class="header-anchor" href="#sentinel" aria-hidden="true">#</a> Sentinel</h1>
<p>随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从<strong>流量控制、熔断降级、系统负载保护</strong>等多个维度保护服务的稳定性。</p>
<p>Sentinel具有如下特性:</p>
<ul>
<li>丰富的应用场景：承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀，可以实时熔断下游不可用应用；</li>
<li>完备的实时监控：同时提供实时的监控功能。可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况；</li>
<li>广泛的开源生态：提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合；</li>
<li>完善的 SPI 扩展点：提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。</li>
</ul>
<h1 id="降级、熔断、限流" tabindex="-1"><a class="header-anchor" href="#降级、熔断、限流" aria-hidden="true">#</a> 降级、熔断、限流</h1>
<p>系统访问量突然增加，比如秒杀活动；或者某个服务崩溃了，导致调用这个服务的接口迟迟没有响应，超时；这些体验给用户都是一直等待、超时肯定是不行的，一般都会有 <strong>降级、熔断、限流</strong> 三种方式，目的就是为了快速返回，避免因为各种原因让用户无线等待。</p>
<ul>
<li>降级：服务压力增加，对一些非核心业务进行降级，比如双十一，退款系统降级，优先保证下单系统</li>
<li>熔断：微服务，A调B，B调C等常链路，中途B崩溃了，需要直接熔断，快速给用户失败的返回，而不是无限堆积请求，等待，造成雪崩</li>
<li>限流：限制单位时间内请求数量，超过的限制的请求直接快速返回失败的请求</li>
</ul>
<h1 id="安装并启动" tabindex="-1"><a class="header-anchor" href="#安装并启动" aria-hidden="true">#</a> 安装并启动</h1>
<p>Sentinel控制台是一个轻量级的控制台应用，它可用于实时查看单机资源监控及集群资源汇总，并提供了一系列的规则管理功能，如流控规则、降级规则、热点规则等</p>
<p><a href="https://github.com/alibaba/Sentinel/releases" target="_blank" rel="noopener noreferrer">官方下载</a></p>
<p>启动：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>java -jar sentinel-dashboard-1.8.2.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问：http://localhost:8080，可以修改为其他端口启动<code v-pre> --server.port=8081</code>，默认账户密码是<code v-pre>sentinel</code></p>
<h1 id="创建sentinel-service模块" tabindex="-1"><a class="header-anchor" href="#创建sentinel-service模块" aria-hidden="true">#</a> 创建<code v-pre>sentinel-service</code>模块</h1>
<p>用于演示Sentinel的熔断与限流功能</p>
<ul>
<li><code v-pre>pom.xml</code>：使用nacos作为注册中心，添加nacos依赖，</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yaml</code>：主要配置 nacos 和 sentinel 控制台地址</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h1>
<p>Sentinel Starter 默认为所有的 HTTP 服务提供了限流埋点，我们也可以通过使用<code v-pre>@SentinelResource</code>来自定义一些限流行为</p>
<p>::: 创建 RateLimitController 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/rateLimit&quot;)
public class RateLimitController {
    /**
     * 按资源名称限流，需要指定限流处理逻辑
     */
    @GetMapping(&quot;/byResource&quot;)
    @SentinelResource(value = &quot;byResource&quot;,blockHandler = &quot;handleException&quot;)
    public CommonResult byResource() {
        return new CommonResult(&quot;按资源名称限流&quot;, 200);
    }

    /**
     * 按URL限流，有默认的限流处理逻辑
     */
    @GetMapping(&quot;/byUrl&quot;)
    @SentinelResource(value = &quot;byUrl&quot;,blockHandler = &quot;handleException&quot;)
    public CommonResult byUrl() {
        return new CommonResult(&quot;按url限流&quot;, 200);
    }

    public CommonResult handleException(BlockException exception){
        return new CommonResult(exception.getClass().getCanonicalName(),200);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="根据资源限流" tabindex="-1"><a class="header-anchor" href="#根据资源限流" aria-hidden="true">#</a> 根据资源限流</h2>
<p>我们可以根据@SentinelResource注解中定义的value（资源名称）来进行限流操作，但是需要指定限流处理逻辑。</p>
<p>启动 Nacos 和 sentinel-service 模块</p>
<p>由于Sentinel采用的<code v-pre>懒加载规则</code>，需要我们先访问下接口，Sentinel控制台中才会有对应服务信息，我们先访问下该接口：http://localhost:8401/rateLimit/byResource</p>
<ul>
<li>在Sentinel控制台配置流控规则，根据<code v-pre>@SentinelResource</code>注解的value值：</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907151204859.png" alt="image-20210907151204859"></p>
<ul>
<li>验证：快速访问 <code v-pre>http://localhost:8401/rateLimit/byResource</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>// 成功返回
{
    &quot;data&quot;: null,
    &quot;message&quot;: &quot;按资源名称限流&quot;,
    &quot;code&quot;: 200
}

// 限流返回
{
    &quot;data&quot;: null,
    &quot;message&quot;: &quot;com.alibaba.csp.sentinel.slots.block.flow.FlowException&quot;,
    &quot;code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据url限流" tabindex="-1"><a class="header-anchor" href="#根据url限流" aria-hidden="true">#</a> 根据Url限流</h2>
<p>除了上面的根据<code v-pre>@SentinelResource</code>主机的 value 值，我们还可以通过访问的URL来限流，会返回默认的限流处理信息</p>
<p>相比上面的根据资源限流，只需要把资源名改为对应的 url 即可，这里是 <code v-pre>/rateLimit/byUrl</code></p>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907151958086.png" alt="image-20210907151958086"></p>
<ul>
<li>验证：快速访问 <code v-pre>http://localhost:8401/rateLimit/byUrl</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>// 成功访问
{
    &quot;data&quot;: null,
    &quot;message&quot;: &quot;按url限流&quot;,
    &quot;code&quot;: 200
}

// 限流
Blocked by Sentinel (flow limiting)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义限流" tabindex="-1"><a class="header-anchor" href="#自定义限流" aria-hidden="true">#</a> 自定义限流</h2>
<p>除了默认的 资源限流、url限流 两种方式，我们还可以根据自己的实际情况设置限流规则</p>
<ul>
<li>创建 <code v-pre>CustomBlockHandler</code> 类用于自定义限流处理逻辑，注意方法要是<code v-pre>static</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public class CustomBlockHandler {

    public static CommonResult handleException(BlockException exception){
        return new CommonResult(&quot;自定义限流信息&quot;,200);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在<code v-pre>RateLimitController</code> 中使用自定义限流处理逻辑：</li>
</ul>
<p><code v-pre>@SentinelResource</code>注解中添加 <code v-pre>blockHandlerClass=自己创建自定义Handler类</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/rateLimit&quot;)
public class RateLimitController {

    @GetMapping(&quot;/customBlockHandler&quot;)
    @SentinelResource(value = &quot;customBlockHandler&quot;, blockHandler = &quot;handleException&quot;, blockHandlerClass = CustomBlockHandler.class)
    public CommonResult blockHandler() {
        return new CommonResult(&quot;限流成功&quot;, 200);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>验证：快速访问 <code v-pre>http://localhost:8401/rateLimit/customBlockHandler</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>// 成功返回
{
    &quot;data&quot;: null,
    &quot;message&quot;: &quot;限流成功&quot;,
    &quot;code&quot;: 200
}

// 自定义限流返回
{
    &quot;data&quot;: null,
    &quot;message&quot;: &quot;自定义限流信息&quot;,
    &quot;code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="熔断" tabindex="-1"><a class="header-anchor" href="#熔断" aria-hidden="true">#</a> 熔断</h1>
<p><code v-pre>Sentinel</code> 支持对服务间调用进行保护，对故障应用进行熔断操作，这里我们使用<code v-pre>RestTemplate</code>来调用<code v-pre>nacos-user-service</code>服务所提供的接口来演示下该功能，对于使用RestTemplate调用的服务，如果发生故障，回直接熔断，快速返回失败</p>
<h2 id="sentinelresttemplate注解" tabindex="-1"><a class="header-anchor" href="#sentinelresttemplate注解" aria-hidden="true">#</a> @SentinelRestTemplate注解</h2>
<ul>
<li>使用<code v-pre>@SentinelRestTemplate</code>来包装下<code v-pre>RestTemplate</code>实例：</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RibbonConfig {

    @Bean
    @SentinelRestTemplate
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>CircleBreakerController</code>类，定义对<code v-pre>nacos-user-service</code>提供接口的调用：</li>
</ul>
<p>::: details 定义对 nacos-user-service 接口的调用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/breaker&quot;)
public class CircleBreakerController {

    private Logger LOGGER = LoggerFactory.getLogger(CircleBreakerController.class);
    @Autowired
    private RestTemplate restTemplate;
    @Value(&quot;${service-url.user-service}&quot;)
    private String userServiceUrl;

    @RequestMapping(&quot;/fallback/{id}&quot;)
    @SentinelResource(value = &quot;fallback&quot;,fallback = &quot;handleFallback&quot;)
    public CommonResult fallback(@PathVariable Long id) {
        return restTemplate.getForObject(userServiceUrl + &quot;/user/{1}&quot;, CommonResult.class, id);
    }

    @RequestMapping(&quot;/fallbackException/{id}&quot;)
    @SentinelResource(value = &quot;fallbackException&quot;,fallback = &quot;handleFallback2&quot;, exceptionsToIgnore = {NullPointerException.class})
    public CommonResult fallbackException(@PathVariable Long id) {
        if (id == 1) {
            throw new IndexOutOfBoundsException();
        } else if (id == 2) {
            throw new NullPointerException();
        }
        return restTemplate.getForObject(userServiceUrl + &quot;/user/{1}&quot;, CommonResult.class, id);
    }

    public CommonResult handleFallback(Long id) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser,&quot;服务降级返回&quot;,200);
    }

    public CommonResult handleFallback2(@PathVariable Long id, Throwable e) {
        LOGGER.error(&quot;handleFallback2 id:{},throwable class:{}&quot;, id, e.getClass());
        User defaultUser = new User(-2L, &quot;defaultUser2&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser,&quot;服务降级返回&quot;,200);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>验证：</li>
</ul>
<p>访问 <code v-pre>http://localhost:8401/breaker/fallback/1</code> 成功返回，访问编号4，不存在，或者断开 <code v-pre>nacos-user-service</code>，返回失败信息</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: -1,
        &quot;username&quot;: &quot;defaultUser&quot;,
        &quot;password&quot;: &quot;123456&quot;
    },
    &quot;message&quot;: &quot;服务降级返回&quot;,
    &quot;code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code v-pre>http://localhost:8401/breaker/fallbackException/2</code>，代码中抛出一个 NullPointerException 异常，所以不会发生降级处理，其他的访问 1 或者 不存在的服务则会发生对应的异常，因为 <code v-pre>exceptionsToIgnore</code>参数中排除了该异常</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: -2,
        &quot;username&quot;: &quot;defaultUser&quot;,
        &quot;password&quot;: &quot;123456&quot;
    },
    &quot;message&quot;: &quot;服务降级返回&quot;,
    &quot;code&quot;: 200
}

// 空指针不发生熔断降级
{
    &quot;timestamp&quot;: &quot;2021-09-09T05:42:14.105+0000&quot;,
    &quot;status&quot;: 500,
    &quot;error&quot;: &quot;Internal Server Error&quot;,
    &quot;message&quot;: &quot;No message available&quot;,
    &quot;path&quot;: &quot;/breaker/fallbackException/2&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sentinelresttemplate全局代理" tabindex="-1"><a class="header-anchor" href="#sentinelresttemplate全局代理" aria-hidden="true">#</a> @SentinelRestTemplate全局代理</h2>
<p>前面可以发现，对于每个不通类型的请求，映射的每个 RequestMapping 请求方法都需要 @SentinelResource()，如果有自定义注解，势必会写更多的方法。其实 @SentinelRestTemplate注解也支持统一的降级熔断处理，</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RibbonConfig {

    @Bean
//    负载均衡
    @LoadBalanced
//    @SentinelRestTemplate 注解的限流(blockHandler, blockHandlerClass)和降级(fallback, fallbackClass)属性不强制填写
//    给所有调用 restTemplate 的方法都添加 限流、降级，原理是给 restTemplate 添加了自定义拦截器
//    CustomBlockHandler 公共处理 限流、降级的类，注意返回对象需要为原本方法要返回的对象（前端需要的对象）
    @SentinelRestTemplate(blockHandlerClass = CustomBlockHandler.class, blockHandler = &quot;handleBlock&quot;,
            fallbackClass = CustomBlockHandler.class, fallback = &quot;handleFallback&quot;
    )
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的自定义限流熔断方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public class CustomBlockHandler {

    //限流业务逻辑
    public static SentinelClientHttpResponse handleBlock(HttpRequest request,
                                           byte[] body, ClientHttpRequestExecution execution, BlockException ex) {
        return new SentinelClientHttpResponse(&quot;自定义限流信息&quot;);
    }

    //异常熔断降级业务逻辑
    public static SentinelClientHttpResponse handleFallback(HttpRequest request,
                                              byte[] body, ClientHttpRequestExecution execution, BlockException ex) {
        return new SentinelClientHttpResponse(&quot;自定义降级信息&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>
<p><code v-pre>@LoadBalanced</code>要添加，否则会报错<code v-pre>java.net.UnknownHostException: nacos-user-service</code>，<a href="https://www.jianshu.com/p/2c10bf7f26dd" target="_blank" rel="noopener noreferrer">详细参考网友分析</a>，添加后有多个 <code v-pre>nacos-user-service</code>服务，可以自动实现负载均衡</p>
</li>
<li>
<p>全局的 @SentinelRestTemplate()，我这里没有生效，网上参考解决办法，<strong>待处理</strong></p>
<ul>
<li>
<p>SpringBoot SpringCloud SpringAlibaba 版本需要对应正确，<a href="https://hub.fastgit.org/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">参考版本对应</a>，这个最直观</p>
</li>
<li>
<p>配置中添加下面配置，并把 RestTemplate 移动到Main主启动类中，<a href="https://blog.csdn.net/liuhenghui5201/article/details/113839889" target="_blank" rel="noopener noreferrer">参考</a></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code># 开启或关闭@SentinelRestTemplate注解
resttemplate:
  sentinel:
    enabled: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h1 id="整合fegin" tabindex="-1"><a class="header-anchor" href="#整合fegin" aria-hidden="true">#</a> 整合Fegin</h1>
<p>Sentinel也适配了Feign组件，我们使用Feign来进行服务间调用时，也可以使用它来进行熔断</p>
<ul>
<li>pom.xml</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>application.yaml</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>feign:
  sentinel:
    enabled: true #打开sentinel对feign的支持
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>主启动类添加<code v-pre>@EnableFeignClients</code>启动<code v-pre>Feign</code>的功能</li>
<li>创建<code v-pre>UserService</code>接口用于对<code v-pre>nacos-user-service</code>服务的调用，对应的实现类，用于对降级进行具体实现处理</li>
</ul>
<p>::: details 定义UserService 接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@FeignClient(value = &quot;nacos-user-service&quot;,fallback = UserFallbackService.class)
public interface UserService {
    @PostMapping(&quot;/user/create&quot;)
    CommonResult create(@RequestBody User user);

    @GetMapping(&quot;/user/{id}&quot;)
    CommonResult&lt;User&gt; getUser(@PathVariable Long id);

    @GetMapping(&quot;/user/getByUsername&quot;)
    CommonResult&lt;User&gt; getByUsername(@RequestParam String username);

    @PostMapping(&quot;/user/update&quot;)
    CommonResult update(@RequestBody User user);

    @PostMapping(&quot;/user/delete/{id}&quot;)
    CommonResult delete(@PathVariable Long id);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details UserService 实现类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Component
public class UserFallbackService implements UserService {
    @Override
    public CommonResult create(User user) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser,&quot;服务降级返回&quot;,200);
    }

    @Override
    public CommonResult&lt;User&gt; getUser(Long id) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser,&quot;服务降级返回&quot;,200);
    }

    @Override
    public CommonResult&lt;User&gt; getByUsername(String username) {
        User defaultUser = new User(-1L, &quot;defaultUser&quot;, &quot;123456&quot;);
        return new CommonResult&lt;&gt;(defaultUser,&quot;服务降级返回&quot;,200);
    }

    @Override
    public CommonResult update(User user) {
        return new CommonResult(&quot;调用失败，服务被降级&quot;,500);
    }

    @Override
    public CommonResult delete(Long id) {
        return new CommonResult(&quot;调用失败，服务被降级&quot;,500);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: 添加 UserFeignController 中使用 UserService 通过 Feign 调用 nacos-user-service 服务中的接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RequestMapping(&quot;/user&quot;)
public class UserFeignController {
    @Autowired
    private UserService userService;

    @GetMapping(&quot;/{id}&quot;)
    public CommonResult getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping(&quot;/getByUsername&quot;)
    public CommonResult getByUsername(@RequestParam String username) {
        return userService.getByUsername(username);
    }

    @PostMapping(&quot;/create&quot;)
    public CommonResult create(@RequestBody User user) {
        return userService.create(user);
    }

    @PostMapping(&quot;/update&quot;)
    public CommonResult update(@RequestBody User user) {
        return userService.update(user);
    }

    @PostMapping(&quot;/delete/{id}&quot;)
    public CommonResult delete(@PathVariable Long id) {
        return userService.delete(id);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>验证：调用<code v-pre>http://localhost:8401/user/4</code>，返回降级</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>{
    &quot;data&quot;: {
        &quot;id&quot;: -1,
        &quot;username&quot;: &quot;defaultUser&quot;,
        &quot;password&quot;: &quot;123456&quot;
    },
    &quot;message&quot;: &quot;服务降级返回&quot;,
    &quot;code&quot;: 200
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用nacos存储规则" tabindex="-1"><a class="header-anchor" href="#使用nacos存储规则" aria-hidden="true">#</a> 使用Nacos存储规则</h1>
<p>可能大家实验的时候，因为修改配置，或者代码，重启了<code v-pre>sentinel-service</code>服务，重新调用接口，发现 限流、熔断规则失效了，查看 Sentinel 控制台，发现规则消失了。</p>
<p>默认情况下，当我们在Sentinel控制台中配置规则时，控制台推送规则方式是通过API将规则推送至客户端并直接更新到内存中。一旦我们重启应用，规则将消失。</p>
<p>下面我们介绍下如何将配置规则进行持久化，以存储到Nacos为例</p>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2>
<ul>
<li>我们再 Nacos 配置中心创建 限流、熔断规则，配置中心将规则推送到 Sentinel 客户端</li>
<li>Sentinel 控制台 也从配置中心获取配置信息</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907180210235.png" alt="image-20210907180210235"></p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<ul>
<li>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.csp&lt;/groupId&gt;
    &lt;artifactId&gt;sentinel-datasource-nacos&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yaml</code>，添加Nacos数据源配置：</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    sentinel:
      datasource:
        ds1:
          nacos:
            server-addr: localhost:8848
            dataId: ${spring.application.name}-sentinel
            groupId: DEFAULT_GROUP
            data-type: json
            rule-type: flow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在 Nacos 中添加配置</li>
</ul>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907181148111.png" alt="image-20210907181148111"></p>
<p>相关参数解释：</p>
<ul>
<li>resource：资源名称；</li>
<li>limitApp：来源应用；</li>
<li>grade：阈值类型，0表示线程数，1表示QPS；</li>
<li>count：单机阈值；</li>
<li>strategy：流控模式，0表示直接，1表示关联，2表示链路；</li>
<li>controlBehavior：流控效果，0表示快速失败，1表示Warm Up，2表示排队等待；</li>
<li>clusterMode：是否集群。</li>
</ul>
<p>返回 Sentinel 控制台可以发现 已经有一条限流规则了，且访问接口验证生效，重启 <code v-pre>sentinel-service</code> ，查看 sentinel 控制台，限流规则仍然存在</p>
</div></template>


