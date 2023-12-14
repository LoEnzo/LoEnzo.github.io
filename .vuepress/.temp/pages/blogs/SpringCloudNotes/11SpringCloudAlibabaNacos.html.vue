<template><div><p>::: tip</p>
<p>Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案，Nacos 作为其核心组件之一，可以作为注册中心和配置中心使用。</p>
<p>:::</p>
<!-- more -->
<h2 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> Nacos</h2>
<p>Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。</p>
<p>特性：</p>
<ul>
<li>服务发现和服务健康监测：支持基于DNS和基于RPC的服务发现，支持对服务的实时的健康检查，阻止向不健康的主机或服务实例发送请求；</li>
<li>动态配置服务：动态配置服务可以让您以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置；</li>
<li>动态 DNS 服务：动态 DNS 服务支持权重路由，让您更容易地实现中间层负载均衡、更灵活的路由策略、流量控制以及数据中心内网的简单DNS解析服务；</li>
<li>服务及其元数据管理：支持从微服务平台建设的视角管理数据中心的所有服务及元数据。</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li>
<p><a href="https://github.com/alibaba/nacos/releases" target="_blank" rel="noopener noreferrer">下载Nacos</a></p>
</li>
<li>
<p>配置<code v-pre>JAVA_HOME</code>环境变量，指定JDK安装目录</p>
</li>
<li>
<p>启动，解压安装包，直接运行bin目录下的<code v-pre>startup.cmd -m standalone</code>单机模式 即可，集群模式去除后面的参数即可（本地未成功集群模式）</p>
</li>
<li>
<p>访问，<code v-pre>http://localhost:8848/nacos</code>，默认账号密码都是<code v-pre>nacos</code></p>
</li>
</ul>
<h2 id="注册服务到nacos" tabindex="-1"><a class="header-anchor" href="#注册服务到nacos" aria-hidden="true">#</a> 注册服务到Nacos</h2>
<p>使用<code v-pre>Spring Cloud Alibaba</code> 组件需要添加如下依赖配置</p>
<ul>
<li><code v-pre>pom.xml</code></li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependencyManagement&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
            &lt;version&gt;2.1.0.RELEASE&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/dependencyManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加 Nacos 注册发现依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code v-pre>nacos-user-service</code>服务</p>
<ul>
<li><code v-pre>application.yaml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8206
spring:
  application:
    name: nacos-user-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #配置Nacos地址
management:
  endpoints:
    web:
      exposure:
        include: '*'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code v-pre>nacos-ribbon-service</code>服务</p>
<ul>
<li><code v-pre>appication.yaml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8308
spring:
  application:
    name: nacos-ribbon-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
service-url:
  nacos-user-service: http://nacos-user-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动两个<code v-pre>nacos-user-service</code>、端口分别是<code v-pre>8206、8207</code>，一个<code v-pre>nacos-ribbon-service</code>服务注册到Nacos注册中心，<code v-pre>nacos-config-client</code>是后面要用的，这里先不管</p>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907111759713.png" alt="image-20210907111759713"></p>
<h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>
<p>postman通过调用Ribbon <code v-pre>http://localhost:8308/user/1</code>，调用 user-service 服务，自动实现负载均衡，查看 user-service 两个服务的控制台，可以看到日志交替打印</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>2021-09-07 10:07:58.376  INFO 3052 --- [nio-8206-exec-1] c.macro.cloud.controller.UserController  : 根据id获取用户信息，用户名称为：macro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nacos配置中心" tabindex="-1"><a class="header-anchor" href="#nacos配置中心" aria-hidden="true">#</a> Nacos配置中心</h2>
<p>Nacos可以作为统一的配置中心，可以动态配置服务，可以让您以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置</p>
<h3 id="创建nacos-config-client模块" tabindex="-1"><a class="header-anchor" href="#创建nacos-config-client模块" aria-hidden="true">#</a> 创建<code v-pre>nacos-config-client</code>模块</h3>
<ul>
<li><code v-pre>pom.xml</code></li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-config&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.xml</code></li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  profiles:
    active: dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>bootstrap.yaml</code>：主要是对Nacos的作为配置中心的功能进行配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9101
spring:
  application:
    name: nacos-config-client
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos地址
      config:
        server-addr: localhost:8848 #Nacos地址
        file-extension: yaml #这里我们获取的yaml格式的配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建<code v-pre>ConfigClientController</code>，从Nacos配置中心中获取配置信息</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
@RefreshScope	// 动态刷新
public class ConfigClientController {

    @Value(&quot;${config.info}&quot;)
    private String configInfo;

    @GetMapping(&quot;/configInfo&quot;)
    public String getConfigInfo() {
        return configInfo;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加配置" tabindex="-1"><a class="header-anchor" href="#添加配置" aria-hidden="true">#</a> 添加配置</h3>
<p>位置：配置管理 -&gt; 配置列表 -&gt; 加号新建配置，根据自己配置文件选择格式，一般是<code v-pre>yaml</code></p>
<p><img src="@source/blogs/SpringCloudNotes/images/image-20210907122237808.png" alt="image-20210907122237808"></p>
<p>Data ID 格式：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code># 服务名-配置文件名.配置文件类型
# nacos-config-client-dev.yaml
${spring.application.name}-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加配置文件</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>config:
  info: &quot;config info for dev&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动nacos-config-client，调用接口查看配置信息：http://localhost:9101/configInfo</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>config info for dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="刷新配置" tabindex="-1"><a class="header-anchor" href="#刷新配置" aria-hidden="true">#</a> 刷新配置</h3>
<p>修改刚刚的配置，为<code v-pre>config info for dev refresh</code>，再次调用接口，可以发现配置文件更新成功，控制台可以看到配置文件变化</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>2021-09-07 10:12:06.178  INFO 12540 --- [-localhost_8848] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration' of type [org.springframework.cloud.autoconfigure.ConfigurationPropertiesRebinderAutoConfiguration$$EnhancerBySpringCGLIB$$4b180360] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2021-09-07 10:12:07.175  INFO 12540 --- [-localhost_8848] c.a.c.n.c.NacosPropertySourceBuilder     : Loading nacos data, dataId: 'nacos-config-client-dev.yaml', group: 'DEFAULT_GROUP'
2021-09-07 10:12:07.176  INFO 12540 --- [-localhost_8848] b.c.PropertySourceBootstrapConfiguration : Located property source: CompositePropertySource {name='NACOS', propertySources=[NacosPropertySource {name='nacos-config-client-dev.yaml'}, NacosPropertySource {name='nacos-config-client.yaml'}]}
2021-09-07 10:12:07.177  INFO 12540 --- [-localhost_8848] o.s.boot.SpringApplication               : The following profiles are active: dev
2021-09-07 10:12:07.185  INFO 12540 --- [-localhost_8848] o.s.boot.SpringApplication               : Started application in 2.161 seconds (JVM running for 74.633)
2021-09-07 10:12:07.204  INFO 12540 --- [-localhost_8848] o.s.c.e.event.RefreshEventListener       : Refresh keys changed: [config.info]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<p><a href="https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html" target="_blank" rel="noopener noreferrer">Nacos官方文档</a></p>
<h1 id="使用模块" tabindex="-1"><a class="header-anchor" href="#使用模块" aria-hidden="true">#</a> 使用模块</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>springcloud
├── nacos-config-client -- 用于演示nacos作为配置中心的nacos客户端
├── nacos-user-service -- 注册到nacos的提供User对象CRUD接口的服务，可以启多个服务，测试Ribbon负载均衡
└── nacos-ribbon-service -- 注册到nacos的ribbon服务调用测试服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


