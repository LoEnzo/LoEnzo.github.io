<template><div><p>::: tip</p>
<p><strong>Spring Cloud Sleuth</strong> 分布式请求链路跟踪，随着系统越来越庞大，微服务模块越来越多，各服务之间的调用变得复杂，一个请求的得到的最终结果中间可能调用了很多的服务，任何一个服务请求都有可能发生延迟或错误，从而导致失败，这个时候就需要请求链路跟踪工具来帮我们，理清这次请求调用的完整链路，以及各服务之间所消耗的时间，从而定位问题。</p>
<p>:::</p>
<!-- more -->
<h2 id="给服务添加请求链路跟踪" tabindex="-1"><a class="header-anchor" href="#给服务添加请求链路跟踪" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/sleuth?id=%E7%BB%99%E6%9C%8D%E5%8A%A1%E6%B7%BB%E5%8A%A0%E8%AF%B7%E6%B1%82%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA" target="_blank" rel="noopener noreferrer">给服务添加请求链路跟踪</a></h2>
<ul>
<li>给<code v-pre>user-service</code>、<code v-pre>ribbon-service</code>添加依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改<code v-pre>application-yml</code>配置文件</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  zipkin:
    base-url: http://localhost:9411
  sleuth:
    sampler:
      probability: 0.1 #设置Sleuth的抽样收集概率
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合zipkin获取及分析日志" tabindex="-1"><a class="header-anchor" href="#整合zipkin获取及分析日志" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/sleuth?id=%E6%95%B4%E5%90%88zipkin%E8%8E%B7%E5%8F%96%E5%8F%8A%E5%88%86%E6%9E%90%E6%97%A5%E5%BF%97" target="_blank" rel="noopener noreferrer">整合Zipkin获取及分析日志</a></h2>
<p><strong>Zipkin</strong>是Twitter的一个开源项目，可以用来获取和分析Spring Cloud Sleuth 中产生的请求链路跟踪日志，它提供了Web界面来帮助我们直观地查看请求链路跟踪信息。</p>
<p>SpringBoot 2.0以上版本已经不需要自行搭建<code v-pre>zipkin-server</code>，我们可以从该地址下载<a href="https://repo1.maven.org/maven2/io/zipkin/java/zipkin-server/2.12.9/zipkin-server-2.12.9-exec.jar" target="_blank" rel="noopener noreferrer">zipkin-server</a>：</p>
<ul>
<li>启动</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>java -jar zipkin-server-2.12.9-exec.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>Zipkin</strong>页面访问地址：<a href="http://localhost:9411/" target="_blank" rel="noopener noreferrer">http://localhost:9411</a></li>
</ul>
<ul>
<li>启动<code v-pre>eureka-sever</code>，<code v-pre>ribbon-service</code>，<code v-pre>user-service</code>：</li>
</ul>
<p>多次通过<code v-pre>ribbon-serivce</code>调用<code v-pre>user-service</code>接口，可以在<strong>Zipkin</strong>界面筛选服务，查看每一次请求，然后进去可以看到这次请求调用的完整链路，以及调用每个服务所耗时间</p>
<p><strong>注意</strong>：<strong>Sleuth</strong>为抽样搜集，也就是说不是每次请求都会记录</p>
<h2 id="使用elasticsearch存储跟踪信息" tabindex="-1"><a class="header-anchor" href="#使用elasticsearch存储跟踪信息" aria-hidden="true">#</a> <a href="http://www.macrozheng.com/#/cloud/sleuth?id=%E4%BD%BF%E7%94%A8elasticsearch%E5%AD%98%E5%82%A8%E8%B7%9F%E8%B8%AA%E4%BF%A1%E6%81%AF" target="_blank" rel="noopener noreferrer">使用Elasticsearch存储跟踪信息</a></h2>
<p>前面是<strong>Zipkin</strong>重启后，发现跟踪信息就会丢失了，信息存储与内存中，现需要将信息存储下来，方便日后查看</p>
<ul>
<li>
<p>安装<strong>Elasticsearch</strong>，<a href="https://www.elastic.co/cn/downloads/past-releases/elasticsearch-6-2-2" target="_blank" rel="noopener noreferrer">下载地址</a></p>
</li>
<li>
<p>启动</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># STORAGE_TYPE：表示存储类型 ES_HOSTS：表示ES的访问地址
java -jar zipkin-server-2.12.9-exec.jar --STORAGE_TYPE=elasticsearch --ES_HOSTS=localhost:9200 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结合<code v-pre>kibana</code>可视化界面查看每次请求的信息</li>
</ul>
<p>::: tip</p>
<ul>
<li><strong>Zipkin</strong> 并不能完整的每个请求都记录下来，是<strong>抽样收集</strong></li>
<li>重启后，重新调用多次，它一次也搜不到，个人感觉不是很好用</li>
<li>另外<strong>elasticsearch</strong>、<strong>kibana</strong>只是再docker中启动起来了，但是不知道怎么设置索引，我直接都选择的默认的，查不到任何数据插入进来</li>
<li>多次重新启动报错<code v-pre>ERROR: cannot load service names: server error (Internal Server Error)</code>，好像是<strong>elasticsearch</strong>存储数据格式乱了，暂未解决</li>
</ul>
<p>:::</p>
</div></template>


