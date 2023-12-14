<template><div><p>::: tip</p>
<p>maven理解，常用指令，以及常规报错汇总。</p>
<p>:::</p>
<!-- more -->
<h1 id="maven常用指令" tabindex="-1"><a class="header-anchor" href="#maven常用指令" aria-hidden="true">#</a> Maven常用指令</h1>
<h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 打包项目到本地，一般在target文件夹下；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)
mvn clean package

# 打包到本地仓库，根据settings.xml文件夹中指定路径；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install
mvn clean install

# 打包上传到远程仓库，如私服nexus等，需要配置相应的pom.xml文件；
# 依次执行：clean、resources、compile、testResources、testCompile、test、jar(打包)、install、deploy
mvn clean deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父子工程版本依赖，父工程一般包含<code v-pre>pom.xml</code>及里面相应依赖的版本设定；子工程依赖父工程</p>
<h2 id="pom-xml配置文件说明-gav" tabindex="-1"><a class="header-anchor" href="#pom-xml配置文件说明-gav" aria-hidden="true">#</a> pom.xml配置文件说明（gav）</h2>
<ul>
<li>groupId：顾名思义，即组织或公司，一般我们会用公司或者自己的前几级包名来进行定义。</li>
<li>artifactId：这个值定义的是本项目的名字。</li>
<li>version：这个项目在maven进行发布以后的版本号。</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;parent&gt;
    &lt;groupId&gt;com.hjwu.pomdemo&lt;/groupId
    &lt;artifactId&gt;helloworld-parent&lt;/artifactId&gt;
    &lt;version&gt;2.0.0-SNAPSHOT&lt;/version&gt;
&lt;/parent&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>SNAPSHOT</code>开发版本</li>
<li>打包</li>
<li><code v-pre>&lt; packaging &gt;&lt; /packaging &gt;</code>对应打包方式，一般为<code v-pre>war</code>、<code v-pre>jar</code></li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code> &lt;artifactId&gt;helloworld-app-service&lt;/artifactId&gt;
 &lt;version&gt;2.0.0-SNAPSHOT&lt;/version&gt;
 &lt;packaging&gt;war&lt;/packaging&gt;
 &lt;name&gt;helloworld-app-service&lt;/name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清除仓库" tabindex="-1"><a class="header-anchor" href="#清除仓库" aria-hidden="true">#</a> 清除仓库</h2>
<p>清除本地仓库因为网络或者配置文件导致下载失败生成的<code v-pre>lastUpdated</code>的文件，保存下列文件为<code v-pre>bat</code>后缀文件，双击运行即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 设置本地仓库路径
set REPOSITORY_PATH=C:\repository
rem 正在搜索...
for /f &quot;delims=&quot; %%i in ('dir /b /s &quot;%REPOSITORY_PATH%\*lastUpdated*&quot;') do (
    del /s /q %%i
)
rem 搜索完毕
pause

# 或者 ctrl + R 切换到 本地仓库路径，输入下列指令
for /r %i in (*.lastUpdated) do del %i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题" aria-hidden="true">#</a> 其他问题</h1>
<h3 id="_1-本地tomcat启动报错" tabindex="-1"><a class="header-anchor" href="#_1-本地tomcat启动报错" aria-hidden="true">#</a> 1. 本地tomcat启动报错</h3>
<p>报错<code v-pre>unkown the request</code></p>
<p>原因：可能是tomcat端口被占用，</p>
<p>解决：cmd  -&gt;    netstat -aon|findstr  端口号，找出占用该端口的进程和pid，在任务管理器里找出对象pid停掉，或者换tomcat启动端口</p>
<h3 id="_2-流水线无法更新pom-xml" tabindex="-1"><a class="header-anchor" href="#_2-流水线无法更新pom-xml" aria-hidden="true">#</a> 2.  流水线无法更新pom.xml</h3>
<p>报错如下，意思是“在 XXX的更新间隔过去或强制更新之前，不会重新尝试解析”。</p>
<blockquote>
<p>resolution will not be reattempted until the update interval of XXX has elapsed or updates are force</p>
</blockquote>
<p>如果你去本地的<code v-pre>maven</code>仓库，你会发现，其只有<code v-pre>lastUpdate</code>结尾的文件，没有<code v-pre>jar</code>包，或着pom文件的。</p>
<p>这个时候，你无论怎么点击<code v-pre>IDEA</code>中的<code v-pre>Reimports All Maven Projects</code>都是没有用的。原因上面也说了，要么等更新时间过去，要么强制更新。
<code v-pre>maven</code>的默认更新时间为<code v-pre>day</code>，即一天更新一次。</p>
<p>解决：</p>
<ol>
<li>
<blockquote>
<p>所以我们一般都是采用强制更新的方式，到对应工程目录先，执行maven指令 <strong>mvn clean install -U</strong></p>
</blockquote>
</li>
<li>
<blockquote>
<p>修改<strong>settings.xml</strong></p>
</blockquote>
</li>
</ol>
<p>::: details 修改<strong>settings.xml</strong>，添加<code v-pre>&lt;updatePolicy&gt;always&lt;/updatePolicy&gt;</code>；</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;repositories&gt;
   &lt;repository&gt;
     &lt;id&gt;xr-snapshots&lt;/id&gt;
 	  &lt;url&gt;http://nexus.alibaba.com/repository/snapshots/&lt;/url&gt;
     &lt;snapshots&gt;
       &lt;enabled&gt;true&lt;/enabled&gt;
       &lt;!-- 注意 -- &gt;
       &lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
     &lt;/snapshots&gt;
     &lt;releases&gt;
       &lt;enabled&gt;false&lt;/enabled&gt;
       &lt;!-- 注意 -- &gt;
       &lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
     &lt;/releases&gt;
   &lt;/repository&gt;
 &lt;/repositories&gt;

&lt;pluginRepositories&gt;
   &lt;pluginRepository&gt;
     &lt;id&gt;xr-plugins&lt;/id&gt;
     &lt;name&gt;xingren plugins&lt;/name&gt;
     &lt;url&gt;http://nexus.alibaba.com/repository/public/&lt;/url&gt;
     &lt;releases&gt;
     	&lt;enabled&gt;true&lt;/enabled&gt;
     	&lt;!-- 注意 -- &gt;
     	&lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
     &lt;/releases&gt;
      &lt;snapshots&gt;
      	&lt;enabled&gt;true&lt;/enabled&gt;
      	&lt;!-- 注意 -- &gt;
      	&lt;updatePolicy&gt;always&lt;/updatePolicy&gt;
      &lt;/snapshots&gt;
   &lt;/pluginRepository&gt;
&lt;/pluginRepositories&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
</div></template>


