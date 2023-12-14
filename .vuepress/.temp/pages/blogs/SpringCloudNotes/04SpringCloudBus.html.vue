<template><div><p>::: tip</p>
<p><strong>Spring Cloud Bus</strong> （消息总线）通过轻量消息代理连接各个分布的节点，用于广播 状态变更（如配置文件变更）或者其他的消息指令，可以将其理解为管理和传播消息所有分布式服务中的详细即可。<strong>Spring Cloud Bus</strong> 配合 <strong>Spring Cloud Config</strong> 使用可以实现配置的动态刷新。目前 <strong>Spring Cloud Bus</strong> 支持两种消息代理：<strong>RabbitMQ</strong> 和 <strong>Kafka</strong>。<strong>AMQP</strong>（(Advanced Message Queuing Protocol），一个提供统一消息服务的应用层标准高级消息队列协议</p>
<p>:::</p>
<!-- more -->
<h2 id="为什么需要统一配置管理" tabindex="-1"><a class="header-anchor" href="#为什么需要统一配置管理" aria-hidden="true">#</a> 为什么需要统一配置管理</h2>
<ul>
<li>多服务，多环境配置集中管理，结构目录清晰，方便快速查找</li>
<li>运行期间动态调整配置</li>
<li>广播状态变更（配置变更），不要每个微服务都去刷新依次，只需要刷新依次，及所有微服务都可以接收到广播信息进行更新</li>
</ul>
<h2 id="windows-rabbitmq-安装" tabindex="-1"><a class="header-anchor" href="#windows-rabbitmq-安装" aria-hidden="true">#</a> Windows <strong>RabbitMQ</strong> 安装</h2>
<ul>
<li>
<p><strong><a href="http://erlang.org/download/otp_win64_21.3.exe" target="_blank" rel="noopener noreferrer">安装Erlang</a></strong></p>
</li>
<li>
<p><strong><a href="https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.14/rabbitmq-server-3.7.14.exe" target="_blank" rel="noopener noreferrer">安装RabbitMQ</a></strong></p>
</li>
<li>
<p><strong>启动RabbitMQ</strong></p>
</li>
</ul>
<p>启动控制管理台，进入<strong>RabbitMQ</strong>安装目录下的<code v-pre>sbin</code>子目录，输入以下启动管理功能：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>rabbitmq-plugins enable rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为网络原因，没有安装成功<strong>Erlang</strong>，直接在虚拟机中用<strong>docker</strong>启动的<strong>RabbitMQ</strong></p>
<p>本地启动访问地址：<code v-pre>http://localhost:15672/</code>，我是用的虚拟机的ip</p>
<p>默认用户名、密码为<code v-pre>guest</code></p>
<h2 id="动态刷新配置" tabindex="-1"><a class="header-anchor" href="#动态刷新配置" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/bus?id=%E5%8A%A8%E6%80%81%E5%88%B7%E6%96%B0%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">动态刷新配置</a></h2>
<ul>
<li>给<strong>config-server</strong>添加消息总线依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-bus-amqp&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>添加<code v-pre>application-yml</code>配置，添加<code v-pre>RabbitMQ</code>配置及暴露了刷新配置的Actuator端点</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server:
  port: 8904
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          # 自己的git配置仓库，可以根据作者的fork一份，便于验证修改
          uri: https://gitee.com/myMagicRain/springcloud-config.git 
          username: macro # 自己git的用户名和密码
          password: 123456
          clone-on-start: true # 开启启动时直接从git获取配置
  rabbitmq: #rabbitmq相关配置
    host: localhost
    port: 5672
    username: guest
    password: guest
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8001/eureka/
management:
  endpoints: #暴露bus刷新配置的端点
    web:
      exposure:
        include: 'bus-refresh'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动<code v-pre>config-client 9004 9005</code>、<code v-pre>config-server 8094</code></li>
<li>登陆<code v-pre>RabbitMQ</code>，默认用户名和密码是guest，点击<strong>Exchanges</strong>和<strong>Queues</strong>可以发现<strong>Spring Cloud Bus</strong> 创建了一个叫<code v-pre>springCloudBus</code>的交换机及三个以 <code v-pre>springCloudBus.anonymous</code>开头的队列：</li>
</ul>
<p>修改git仓库中配置dev分支的配置文件，因为<code v-pre>config-client</code>配置的是加载dev的配置，先调用，然后刷新配置中心配置，然后再次调用，可以观察到配置变更成功了</p>
<ul>
<li>调用注册中心的接口刷新所有配置，发送<strong>POST</strong>请求：<code v-pre>http://localhost:8904/actuator/bus-refresh</code></li>
</ul>
<p>如果只刷新部分客户端，例如刷新9004的客户端，可以发送<strong>POST</strong>请求：<code v-pre>http://localhost:8904/actuator/bus-refresh/config-client:9004</code></p>
<h2 id="配合webhooks使用" tabindex="-1"><a class="header-anchor" href="#配合webhooks使用" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/bus?id=%E9%85%8D%E5%90%88webhooks%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">配合WebHooks使用</a></h2>
<p>webHooks相当于是一个钩子函数，我们可以配置当向Git仓库push代码时触发这个钩子函数，不然每次更新配置都需要自己手动发送<strong>POST</strong>请求刷新一次，根据自己环境来谨慎使用，配置一般也不是需要一次性全部刷新</p>
<p>这里以Gitee为例来介绍下其使用方式，这里当我们向配置仓库push代码时就会自动刷新服务配置了</p>
<p><img src="@source/blogs/SpringCloudNotes/images/springcloud_bus01.png" alt="来自Spring官网"></p>
</div></template>


