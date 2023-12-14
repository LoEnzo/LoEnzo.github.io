<template><div><p>::: tip</p>
<p>Spring Cloud Config 分为服务端和客户端两个部分。<strong>服务端被称为分布式配置中心</strong>，它是个独立的应用，可以从配置仓库获取配置信息并提供给客户端使用。<strong>客户端可以通过配置中心来获取配置信息，在启动时加载配置</strong>。Spring Cloud Config 的配置中心默认采用Git来存储配置信息，所以天然就支持配置信息的版本管理，并且可以使用Git客户端来方便地管理和访问配置信息</p>
<p>:::</p>
<!-- more -->
<h1 id="spring-cloud-config" tabindex="-1"><a class="header-anchor" href="#spring-cloud-config" aria-hidden="true">#</a> Spring Cloud Config</h1>
<h2 id="统一配置中心" tabindex="-1"><a class="header-anchor" href="#统一配置中心" aria-hidden="true">#</a> <strong>统一配置中心</strong></h2>
<p>如果微服务架构中没有使用统一配置中心时，所存在的问题：</p>
<ul>
<li>配置文件分散在各个项目里，不方便维护</li>
<li>配置内容安全与权限，实际开发中，开发人员是不知道线上环境的配置的</li>
<li>更新配置后，项目需要重启</li>
</ul>
<h2 id="在git仓库中准备配置信息" tabindex="-1"><a class="header-anchor" href="#在git仓库中准备配置信息" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=%E5%9C%A8git%E4%BB%93%E5%BA%93%E4%B8%AD%E5%87%86%E5%A4%87%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF" target="_blank" rel="noopener noreferrer">在Git仓库中准备配置信息</a></h2>
<p>由于Spring Cloud Config 需要一个存储配置信息的Git仓库，这里我们先在Git仓库中添加好配置文件再演示其功能，</p>
<p>Git仓库地址为：<a href="https://gitee.com/macrozheng/springcloud-config" target="_blank" rel="noopener noreferrer">原作者地址</a>，fork下来修改为自己的地址，便于后面在仓库修改配置调用服务查看配置修改是否生效</p>
<p>主要结构：</p>
<ul>
<li>master dev 分支</li>
<li>分支中的各环境单独的一个配置文件，<code v-pre>application-dev.yml</code>、<code v-pre>application-test.yml</code>、<code v-pre>application-pro.yml</code>等</li>
<li>多个微服务的多个环境配置文件，可以创建子目录区分，这里只创建了**\config**子目录作为测试</li>
</ul>
<h2 id="创建config-server模块" tabindex="-1"><a class="header-anchor" href="#创建config-server模块" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=%E5%88%9B%E5%BB%BAconfig-server%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">创建config-server模块</a></h2>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-config-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>application.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动类添加<code v-pre>@EnableConfigServer</code>注解启用配置中心功能</li>
</ul>
<h2 id="创建config-client模块" tabindex="-1"><a class="header-anchor" href="#创建config-client模块" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=%E5%88%9B%E5%BB%BAconfig-client%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">创建config-client模块</a></h2>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-config&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>bootstrap.yml</code>配置文件</li>
</ul>
<p><strong>注意</strong>：之所以要用<code v-pre>bootstrap.yml</code>，是因为启动<strong>SpringBoot</strong>项目时，会优先读取<code v-pre>bootstrap.yml</code>里的配置，然后才会读取<code v-pre>application.yml</code>。如果不通过<code v-pre>bootstrap.yml</code>里的配置，先从配置中心拉下相应的配置文件，就会报错</p>
<p><strong>总结</strong>：<code v-pre>bootstrap.yml</code>（bootstrap.properties）用来在程序引导时执行，应用于更加早期配置信息读取，如可以使用来配置application.yml中使用到参数等；<code v-pre>application.yml</code>（application.properties) 应用程序特有配置信息，可以用来配置后续各个模块中需使用的公共参数等；<code v-pre>bootstrap.yml</code> 先于 <code v-pre>application.yml </code>加载</p>
<p><strong>典型场景</strong>：当使用 <strong>Spring Cloud Config Server</strong> 的时候，你应该在 <code v-pre>bootstrap.yml</code> 里面指定 <code v-pre>spring.application.name</code> 和 <code v-pre>spring.cloud.config.server.git.uri</code>或者一些加密/解密的信息</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9001
spring:
  application:
    name: config-client
  cloud:
    config:                # Config客户端配置
      profile: dev         # 启用配置后缀名称
      label: dev           # 分支名称
      uri: http://localhost:8901  # 配置中心地址
      name: config 				  # 配置文件名称
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>ConfigClientController </code>类用于获取配置</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@RestController
public class ConfigClientController {

    @Value(&quot;${config.info}&quot;)
    private String configInfo;

    @GetMapping(&quot;/configInfo&quot;)
    public String getConfigInfo() {
        return configInfo;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取配置文件信息" tabindex="-1"><a class="header-anchor" href="#获取配置文件信息" aria-hidden="true">#</a> 获取配置文件信息</h3>
<ul>
<li>配置文件信息的访问格式</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code># 获取配置文件信息
/{label}/{application}-{profile}
# 获取配置文件内容信息
/{label}/{application}-{profile}.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>占位符配置说明</li>
</ul>
<table>
<thead>
<tr>
<th>占位符</th>
<th>说明</th>
<th>对应配置</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>label</code></td>
<td>分支名称</td>
<td>对应配置文件中的<code v-pre>spring.cloud.config.label</code></td>
</tr>
<tr>
<td><code v-pre>application</code></td>
<td>应用名称</td>
<td>默认为配置文件中的<code v-pre>spring.application.name</code>，如果配置了<code v-pre>spring.cloud.config.name</code>，则为该名称</td>
</tr>
<tr>
<td><code v-pre>profile</code></td>
<td>环境名称</td>
<td>对应配置文件中的<code v-pre>spring.cloud.config.profile</code></td>
</tr>
</tbody>
</table>
<p>启动<code v-pre>eureka-server</code>、<code v-pre>config-server</code>服务，</p>
<p>访问 <code v-pre>http://localhost:8901/master/config-dev</code>，来获取<strong>master</strong>分支上<strong>dev</strong>环境的配置信息；</p>
<p>访问 <code v-pre>http://localhost:9001/configInfo</code>，可以获取到<strong>dev</strong>分支下<strong>dev</strong>环境的配置；</p>
<h3 id="获取子目录配置" tabindex="-1"><a class="header-anchor" href="#获取子目录配置" aria-hidden="true">#</a> 获取子目录配置</h3>
<p>多个微服务的多环境统一用一个git配置中心，默认扫描根目录，会使得配置文件过于臃肿，按服务创建不同的子文件夹目录，方便管理</p>
<ul>
<li>添加<code v-pre>config-server</code>中<code v-pre>application-yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    config:
      server:
        git: 
          search-paths: '{application}'        # 对应服务名相同的文件夹子目录配置文件
#          search-paths: /config               # config目录下的配置文件
#          search-paths: /**                   # 所有目录下的配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>'{application}'</code>占位符配置，说明是<code v-pre>config</code>服务就使用<code v-pre>config</code>子文件夹下面的配置文件，<code v-pre>config</code>服务就是前面说的<code v-pre>spring.cloud.config.name</code>,</p>
<h3 id="刷新配置" tabindex="-1"><a class="header-anchor" href="#刷新配置" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=%E5%88%B7%E6%96%B0%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">刷新配置</a></h3>
<ul>
<li><code v-pre>config-client</code>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
   &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
   &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>bootstrap.yml</code>配置</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>management:
  endpoints:
    web:
      exposure:
        include: 'refresh'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>添加刷新配置注解</p>
<p>在需要刷新配置的地方添加，这里也就是 <strong>ConfigClientController</strong> 添加<code v-pre>@RefreshScope</code>注解用于刷新配置；</p>
<p>重启<code v-pre>config-client</code>后，post请求<code v-pre>http://localhost:9001/actuator/refresh</code>即可刷新配置，重新调用<code v-pre>http://localhost:9001/configInfo</code>验证配置是否更改成功</p>
</li>
</ul>
<h2 id="创建config-security-server模块" tabindex="-1"><a class="header-anchor" href="#创建config-security-server模块" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=%E5%88%9B%E5%BB%BAconfig-security-server%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">创建config-security-server模块</a></h2>
<p>给配置中心添加安全认证</p>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-config-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>application-yml</code>配置，启动服务</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8905
spring:
  application:
    name: config-security-server
  cloud:
    config:
      server:
        git:
          uri: https://gitee.com/myMagicRain/springcloud-config.git
          username: macro
          password: 123456
          clone-on-start: true #开启启动时直接从git获取配置
  security: #配置用户名和密码
    user:
      name: macro
      password: 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改<code v-pre>config-client</code>配置，重新启动</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 9002
spring:
  application:
    name: config-client
  cloud:
    config:
      profile: dev #启用配置后缀名称
      label: dev #分支名称
      uri: http://localhost:8905 #配置中心地址
      name: config #配置文件名称
      username: macro    # 配置中心的用户名和密码，如果错误，服务启动会报错，无法加载从配置中心加载配置文件
      password: 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动使用<code v-pre>bootstrap-security.yml</code>配置的<code v-pre>config-client</code>服务；</p>
<p>访问<code v-pre>http://localhost:9002/configInfo</code>进行测试，发现可以获取到配置信息，配置中心加入安全验证成功</p>
<h2 id="config-sever集群搭建" tabindex="-1"><a class="header-anchor" href="#config-sever集群搭建" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/config?id=config-sever%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA" target="_blank" rel="noopener noreferrer">config-sever集群搭建</a></h2>
<p>所有微服务从配置中心获取配置文件，一旦配置中心宕机，就会发生严重的后果，所以需要搭建配置中心集群，保证服务正常运行</p>
<ul>
<li>
<p>启动两个端口的<code v-pre>config-server</code> 8902，8903</p>
</li>
<li>
<p>修改<code v-pre>config-client</code>配置文件，添加了从注册中心获取配置中心地址的配置并去除了配置中心uri的配置</p>
</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  cloud:
    config:
      profile: dev		 # 启用环境名称
      label: dev 		 # 分支名称
      name: config       # 配置文件名称
#     uri: http://localhost:8901 # 去除了配置中心地址，改为下面配置
      discovery:
        enabled: true
        service-id: config-server # 指定从注册中心中根据服务名获取配置中心地址，
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>访问<code v-pre>http://localhost:9003/configInfo</code>，发现<code v-pre>config-client</code>可以获取到配置信息。</li>
</ul>
</div></template>


