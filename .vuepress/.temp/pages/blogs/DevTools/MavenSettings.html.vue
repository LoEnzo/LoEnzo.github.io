<template><div><p>::: tip
maven Settings配置详解，各参数解释，<a href="https://segmentfault.com/a/1190000020534274" target="_blank" rel="noopener noreferrer">转载自</a></p>
<p>:::</p>
<!-- more -->
<p>本文使用的maven版本为3.5.4</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>首先maven setting可以被声明为两个级别：</p>
<p><strong>用户级别</strong>。默认在<code v-pre>${user.home}/.m2/settings.xml</code>。可以通过命令行<code v-pre>-s /path/to/user/settings.xml</code>修改。
<strong>全局级别</strong>。默认在<code v-pre>${maven.conf}/settings.xml</code>。可以通过命令行<code v-pre>-gs /path/to/global/settings.xml</code>修改。
下面对配置中的每一个元素进行说明。</p>
<h4 id="localrepository" tabindex="-1"><a class="header-anchor" href="#localrepository" aria-hidden="true">#</a> <strong>localRepository</strong></h4>
<p>本地仓库地址，默认值<code v-pre>${user.home}/.m2/repository</code>。</p>
<p>如果复制了别人的setting，也要注意下这个值和原来的是否相同，不然又要重下一遍。</p>
<h5 id="interactivemode" tabindex="-1"><a class="header-anchor" href="#interactivemode" aria-hidden="true">#</a> <strong>interactiveMode</strong></h5>
<p>是否需要和用户输入进行交互。如果为false，则会使用合理的默认值。默认为true。</p>
<p>这个配置没怎么使用过，可以通过创建工程的命令对比下：如果为false，命令如下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mvn archetype:generate -DgroupId=com.zworks -DartifactId=maven-setting -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要指定groupId、artifactId、archetypeArtifactId，如果不指定会报错，因为这些是无法推测出值的。</p>
<p>如果为true，命令如下</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>mvn archetype:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后面会让你选择或输入<code v-pre>archetype</code>、<code v-pre>groupId</code>、<code v-pre>artifactId</code>、<code v-pre>version</code>、<code v-pre>package</code>、为false的时候之所以不用指定<code v-pre>version</code>和<code v-pre>package</code>是因为这两个都有默认值。</p>
<h5 id="offline" tabindex="-1"><a class="header-anchor" href="#offline" aria-hidden="true">#</a> <strong>offline</strong></h5>
<p>是否使用离线模式，默认值为false，这个应该不会设置成true的，要用通过命令行-o指定就可以了。</p>
<h4 id="plugingroups" tabindex="-1"><a class="header-anchor" href="#plugingroups" aria-hidden="true">#</a> <strong>pluginGroups</strong></h4>
<p>如果plugin没有指定groupId，会从设置的这些里查找。默认会有<code v-pre>org.apache.maven.plugins</code>和<code v-pre>org.codehaus.mojo</code>。</p>
<p>比如，有了如下配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;pluginGroups&gt;
    &lt;pluginGroup&gt;
        org.mortbay.jetty
    &lt;/pluginGroup&gt;
&lt;/pluginGroups&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就可以通过<code v-pre>mvn jetty run</code>替代长命令<code v-pre>mvn org.mortbay.jetty:jetty-maven-plugin:run</code></p>
<h4 id="proxies" tabindex="-1"><a class="header-anchor" href="#proxies" aria-hidden="true">#</a> <strong>proxies</strong></h4>
<p>代理配置，可以配置多个，如果没有指定会使用第一个激活的配置。</p>
<p>可配置的属性</p>
<table>
<thead>
<tr>
<th style="text-align:center">元素</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">active</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">是否激活，默认为true</td>
</tr>
<tr>
<td style="text-align:center">protocol</td>
<td style="text-align:center">String</td>
<td style="text-align:center">代理的协议，默认为http</td>
</tr>
<tr>
<td style="text-align:center">username</td>
<td style="text-align:center">String</td>
<td style="text-align:center">用户名</td>
</tr>
<tr>
<td style="text-align:center">password</td>
<td style="text-align:center">String</td>
<td style="text-align:center">密码</td>
</tr>
<tr>
<td style="text-align:center">port</td>
<td style="text-align:center">int</td>
<td style="text-align:center">端口号，默认8080</td>
</tr>
<tr>
<td style="text-align:center">host</td>
<td style="text-align:center">String</td>
<td style="text-align:center">host</td>
</tr>
<tr>
<td style="text-align:center">nonProxyHosts</td>
<td style="text-align:center">String</td>
<td style="text-align:center">不代理的host，用|分隔</td>
</tr>
<tr>
<td style="text-align:center">id</td>
<td style="text-align:center">String</td>
<td style="text-align:center">id，默认为default</td>
</tr>
</tbody>
</table>
<h4 id="servers" tabindex="-1"><a class="header-anchor" href="#servers" aria-hidden="true">#</a> <strong>servers</strong></h4>
<p>用于认证，支持两种方式</p>
<ul>
<li>密码</li>
<li>privateKey
比如公司搭建了一个私服，上传和下载需要认证，就需要在这里配置。</li>
</ul>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>username</td>
<td>String</td>
<td>用户名</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>密码，与username一起使用</td>
</tr>
<tr>
<td>privateKey</td>
<td>String</td>
<td>privateKey路径</td>
</tr>
<tr>
<td>passphrase</td>
<td>String</td>
<td>和privateKey一起使用</td>
</tr>
<tr>
<td>filePermissions</td>
<td>String</td>
<td>新创建的文件权限</td>
</tr>
<tr>
<td>directoryPermissions</td>
<td>String</td>
<td>新创建的文件夹的权限</td>
</tr>
<tr>
<td>configuration</td>
<td>DOM</td>
<td>配置</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>id，默认default，id需要与repository/mirror中的id相对应</td>
</tr>
</tbody>
</table>
<p>使用密码</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;server&gt;
    &lt;id&gt;deploymentRepo&lt;/id&gt;
    &lt;username&gt;repouser&lt;/username&gt;
    &lt;password&gt;repopwd&lt;/password&gt;
&lt;/server&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用privateKey</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;server&gt;
    &lt;id&gt;siteServer&lt;/id&gt;
    &lt;privateKey&gt;/path/to/private/key&lt;/privateKey&gt;
    &lt;passphrase&gt;optional; leave empty if not used.&lt;/passphrase&gt;
&lt;/server&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mirrors" tabindex="-1"><a class="header-anchor" href="#mirrors" aria-hidden="true">#</a> <strong>mirrors</strong></h4>
<p>仓库的镜像，如果仓库配置了镜像，就会去镜像中下载。</p>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>mirrorOf</td>
<td>String</td>
<td>镜像的仓库id，也就是说是那个仓库的镜像</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>镜像的名字</td>
</tr>
<tr>
<td>url</td>
<td>String</td>
<td>地址</td>
</tr>
<tr>
<td>layout</td>
<td>String</td>
<td>layout，默认default</td>
</tr>
<tr>
<td>mirrorOfLayouts</td>
<td>String</td>
<td>镜像的仓库的layout，默认值为default,legacy</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>id，默认default</td>
</tr>
</tbody>
</table>
<h5 id="mirrorof" tabindex="-1"><a class="header-anchor" href="#mirrorof" aria-hidden="true">#</a> <strong>mirrorOf</strong></h5>
<ul>
<li><code v-pre>*</code>匹配所有的仓库</li>
<li><code v-pre>external:*</code>匹配所有远程仓库，使用localhost的除外，使用file://协议的除外。也就是说，匹配所有不在本机上的远程仓库。</li>
<li>多个仓库可以使用英文逗号分隔</li>
<li>使用感叹号排除指定的仓库</li>
</ul>
<p>举例：</p>
<p><code v-pre>repo,repo1</code>匹配repo 或者 repo1</p>
<p><code v-pre>*,!repo1</code>匹配除了repo1的所有</p>
<p>在匹配的时候，会先找精确匹配的，如果没有用第一个匹配的。</p>
<h4 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> <strong>layout</strong></h4>
<p>layout在Maven 2/3中都是default，只有在Maven 1.x中才是legacy，所以也不太用管。</p>
<p>legacy的目录结构</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  groupId
  |--artifactId
     |--jars
        `--artifact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default的目录结构</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  groupId
  |--artifactId
     |--version
     |  `---artifact
     |---metadata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置国内镜像</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;mirror&gt;
    &lt;id&gt;alimaven&lt;/id&gt;
    &lt;name&gt;aliyun maven&lt;/name&gt;
    &lt;url&gt;https://maven.aliyun.com/repository/central&lt;/url&gt;
    &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="profiles" tabindex="-1"><a class="header-anchor" href="#profiles" aria-hidden="true">#</a> <strong>profiles</strong></h4>
<p>setting中的profile主要为了提供本地的路径以及定义构建中要使用到的仓库。</p>
<h5 id="profile-in-setting-vs-profile-in-pom" tabindex="-1"><a class="header-anchor" href="#profile-in-setting-vs-profile-in-pom" aria-hidden="true">#</a> <strong>profile in setting VS profile in pom</strong></h5>
<p>setting中的profile一般存放的是不太会变且不会影响构建过程的元素，对全局都影响。</p>
<p>pom中的profile有更多的设置项，但是影响范围只有自身以及子模块。</p>
<h5 id="profile的激活方式" tabindex="-1"><a class="header-anchor" href="#profile的激活方式" aria-hidden="true">#</a> <strong>profile的激活方式</strong></h5>
<ul>
<li>通过setting中的activeProfiles指定。</li>
<li>检测操作系统信息是否匹配。</li>
<li>检查环境变量是否匹配。</li>
<li>检测文件是否存在。</li>
<li>检测JDK版本是否匹配。</li>
<li>通过命令行<code v-pre>-P</code>指定。</li>
</ul>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>activation</td>
<td>Activation</td>
<td>激活的条件</td>
</tr>
<tr>
<td>properties</td>
<td>Properties</td>
<td>配置</td>
</tr>
<tr>
<td>repositories</td>
<td>List&lt; Repository&gt;</td>
<td>远程仓库</td>
</tr>
<tr>
<td>pluginRepositories</td>
<td>List&lt; Repository&gt;</td>
<td>远程插件仓库</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>Id,默认default</td>
</tr>
</tbody>
</table>
<h4 id="activation" tabindex="-1"><a class="header-anchor" href="#activation" aria-hidden="true">#</a> <strong>activation</strong></h4>
<p>profile的激活条件，满足条件则激活。</p>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>activeByDefault</td>
<td>boolean</td>
<td>是否默认激活</td>
</tr>
<tr>
<td>jdk</td>
<td>String</td>
<td>如果JDK版本匹配则激活</td>
</tr>
<tr>
<td>os</td>
<td>ActivationOS</td>
<td>如果操作系统匹配则激活</td>
</tr>
<tr>
<td>property</td>
<td>ActivationProperty</td>
<td>如果系统属性匹配则激活</td>
</tr>
<tr>
<td>file</td>
<td>ActivationFile</td>
<td>如果文件存在/不存在则激活</td>
</tr>
</tbody>
</table>
<h4 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> <strong>jdk</strong></h4>
<ul>
<li>前缀匹配，比如1.8能匹配jdk1.8.0_181</li>
<li>[1.5,1.8)能匹配1.5、1.6、1.7，语法具体可以参看<a href="https://maven.apache.org/enforcer/enforcer-rules/versionRanges.html" target="_blank" rel="noopener noreferrer">Version Range Specification</a></li>
</ul>
<h5 id="activationos" tabindex="-1"><a class="header-anchor" href="#activationos" aria-hidden="true">#</a> <strong>ActivationOS</strong></h5>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>系统的名称</td>
</tr>
<tr>
<td>family</td>
<td>String</td>
<td>系统的系列，如windows、mac</td>
</tr>
<tr>
<td>arch</td>
<td>String</td>
<td>Cpu的架构</td>
</tr>
<tr>
<td>version</td>
<td>String</td>
<td>系统版本</td>
</tr>
</tbody>
</table>
<h5 id="activationproperty" tabindex="-1"><a class="header-anchor" href="#activationproperty" aria-hidden="true">#</a> <strong>ActivationProperty</strong></h5>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>系统属性名称</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>系统属性值</td>
</tr>
</tbody>
</table>
<h5 id="activationfile" tabindex="-1"><a class="header-anchor" href="#activationfile" aria-hidden="true">#</a> <strong>ActivationFile</strong></h5>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>missing</td>
<td>String</td>
<td>文件名称，当该文件不存在时激活</td>
</tr>
<tr>
<td>exists</td>
<td>String</td>
<td>文件名称，当该文件存在时激活</td>
</tr>
</tbody>
</table>
<h5 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> <strong>repository</strong></h5>
<p>这里是经常需要修改的地方，公司里一般都有自己的私服，就需要把相应的仓库加进来。就是因为仓库没配置，才会有一些包下不下来。</p>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>releases</td>
<td>RepositoryPolicy</td>
<td>如何下载releases</td>
</tr>
<tr>
<td>snapshots</td>
<td>RepositoryPolicy</td>
<td>如何下载snapshots</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>仓库的唯一标示</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>仓库的名称</td>
</tr>
<tr>
<td>url</td>
<td>String</td>
<td>仓库的地址</td>
</tr>
<tr>
<td>layout</td>
<td>String</td>
<td>layout，默认值default</td>
</tr>
</tbody>
</table>
<h5 id="repositorypolicy" tabindex="-1"><a class="header-anchor" href="#repositorypolicy" aria-hidden="true">#</a> <strong>RepositoryPolicy</strong></h5>
<table>
<thead>
<tr>
<th>元素</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>enabled</td>
<td>boolean</td>
<td>是否启用该仓库去下载这个类型的artifact</td>
</tr>
<tr>
<td>updatePolicy</td>
<td>String</td>
<td>更新的频率，可选值always（总是）、daily（每天，默认值）、interval:XXX（间隔多少分钟）、never（从不）</td>
</tr>
<tr>
<td>checksumPolicy</td>
<td>String</td>
<td>如果校验失败该如何做，可选值fail、warn</td>
</tr>
</tbody>
</table>
<h5 id="pluginrepository" tabindex="-1"><a class="header-anchor" href="#pluginrepository" aria-hidden="true">#</a> <strong>pluginRepository</strong></h5>
<p>插件仓库，配置的值和repository是一样的。</p>
<h4 id="activeprofiles" tabindex="-1"><a class="header-anchor" href="#activeprofiles" aria-hidden="true">#</a> <strong>activeProfiles</strong></h4>
<p>激活的配置，可以配置多个。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;activeProfiles&gt;
    &lt;activeProfile&gt;alwaysActiveProfile&lt;/activeProfile&gt;
    &lt;activeProfile&gt;anotherAlwaysActiveProfile&lt;/activeProfile&gt;
&lt;/activeProfiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="http://maven.apache.org/ref/3.5.4/maven-settings/settings.html" target="_blank" rel="noopener noreferrer">maven setting 官方文档</a></li>
<li><a href="https://howtodoinjava.com/maven/create-java-project-maven/" target="_blank" rel="noopener noreferrer">Maven Create Java Project – Interactive vs Non-interactive modes</a></li>
<li><a href="https://www.cnblogs.com/question-sky/p/6538909.html" target="_blank" rel="noopener noreferrer">Maven settings.xml配置解读</a></li>
<li><a href="https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploying-in-legacy-layout.html" target="_blank" rel="noopener noreferrer">Deploy an artifact in legacy layout</a></li>
<li><a href="https://maven.apache.org/guides/mini/guide-mirror-settings.html" target="_blank" rel="noopener noreferrer">Using Mirrors for Repositories</a></li>
<li><a href="https://maven.apache.org/guides/introduction/introduction-to-profiles.html" target="_blank" rel="noopener noreferrer">Introduction to Build Profiles</a></li>
</ul>
</div></template>


