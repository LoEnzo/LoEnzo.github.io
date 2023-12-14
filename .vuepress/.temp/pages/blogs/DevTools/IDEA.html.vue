<template><div><p>::: tip</p>
<p>IDEA常规配置设置，常用插件下载</p>
<p>:::</p>
<!-- more -->
<h3 id="_1-常用设置" tabindex="-1"><a class="header-anchor" href="#_1-常用设置" aria-hidden="true">#</a> 1. 常用设置</h3>
<h4 id="_1-1-鼠标悬停-显示方法信息" tabindex="-1"><a class="header-anchor" href="#_1-1-鼠标悬停-显示方法信息" aria-hidden="true">#</a> 1.1 鼠标悬停，显示方法信息</h4>
<p>File -&gt; Settings(或是快捷键)打开设置窗口.
搜索栏中输入<code v-pre>Show quick documentation on mouse move</code> 就搜索出来了
或是在Editor -&gt; General -&gt; Other中都可以看到
后边的Delay(ms) 是延迟多久之后显示弹窗
原文链接：https://blog.csdn.net/qq_34033853/article/details/86263014</p>
<h4 id="_1-2-右键新建xml文件" tabindex="-1"><a class="header-anchor" href="#_1-2-右键新建xml文件" aria-hidden="true">#</a> 1.2 右键新建xml文件</h4>
<p>File -&gt;  Settings -&gt; Editor -&gt; File and Code Templates</p>
<p>新建xml文件模板，apply即可，其他模板同理，类、方法的默认注释模板也可在此处修改</p>
<h4 id="_1-3-删除自定义maven构建命令" tabindex="-1"><a class="header-anchor" href="#_1-3-删除自定义maven构建命令" aria-hidden="true">#</a> 1.3 删除自定义maven构建命令</h4>
<p>File -&gt; Settings -&gt; other Settings -&gt; mavern helper</p>
<h4 id="_1-4-包显示设置" tabindex="-1"><a class="header-anchor" href="#_1-4-包显示设置" aria-hidden="true">#</a> 1.4 包显示设置</h4>
<p>方便在操作当前java文件或者切换文件时，左边Project面板可以快速定位。勾选下列选项：</p>
<ul>
<li>ComPact Middle Packages</li>
<li>Autoscroll to Source</li>
<li>Autoscroll from Source</li>
<li>Folders Always on Top</li>
<li>Show Excluded Files</li>
<li>Group Tabs</li>
</ul>
<h4 id="_1-5-添加具体操作到工具栏" tabindex="-1"><a class="header-anchor" href="#_1-5-添加具体操作到工具栏" aria-hidden="true">#</a> 1.5 添加具体操作到工具栏</h4>
<ul>
<li>添加<code v-pre>Show in Explorer</code>到工具栏
工具栏右键 -&gt; Customize Menus and Toolbars -&gt; MainToolbar -&gt; Tasks toolbar -&gt; 添加按钮 -&gt; Other -&gt; 搜索 Show in Explorer -&gt; 最后引用设置即可</li>
</ul>
<h4 id="_1-6-实体类实现自动序列化" tabindex="-1"><a class="header-anchor" href="#_1-6-实体类实现自动序列化" aria-hidden="true">#</a> 1.6 实体类实现自动序列化</h4>
<p>实体类实现<code v-pre>Serializable</code>，设置 -&gt; Editor -&gt; Inspections -&gt; Java -&gt; Serialization issues -&gt; Serializable class without 'serialVersionUID' 勾选，</p>
<p>在实体类地方，alt + enter 只能补充就行</p>
<h3 id="_2-常用插件" tabindex="-1"><a class="header-anchor" href="#_2-常用插件" aria-hidden="true">#</a> 2. 常用插件</h3>
<h4 id="_2-1-decom" tabindex="-1"><a class="header-anchor" href="#_2-1-decom" aria-hidden="true">#</a> 2.1 decom</h4>
<p>将<code v-pre>Java Byte compiler</code>插件勾选即可产看class文件反编译的源码</p>
<h4 id="_2-2-alibaba-java-coding-guidines" tabindex="-1"><a class="header-anchor" href="#_2-2-alibaba-java-coding-guidines" aria-hidden="true">#</a> 2.2 Alibaba Java Coding guidines</h4>
<p>本地代码检查，常规变量命名不满足驼峰命名规则，注释，魔法值等</p>
<h4 id="_2-3-generategsdoc" tabindex="-1"><a class="header-anchor" href="#_2-3-generategsdoc" aria-hidden="true">#</a> 2.3 generateGSDoc</h4>
<p>自动生成getter() ，setter()方法</p>
<h4 id="_2-4-maven-helper" tabindex="-1"><a class="header-anchor" href="#_2-4-maven-helper" aria-hidden="true">#</a> 2.4 Maven Helper</h4>
<p>Maven工程管理，快速构建maven工程，提供常见maven指令，支持自定义带参数maven指令并保存</p>
<h4 id="_2-5-jrebel" tabindex="-1"><a class="header-anchor" href="#_2-5-jrebel" aria-hidden="true">#</a> 2.5 JRebel</h4>
<p>web工程热更新插件；无法安装可选择网上下载插件包，离线安装，选择<code v-pre>nstall plugin form disk</code>;</p>
<ul>
<li>激活</li>
</ul>
<p>下载反向代理软件，失效自行百度，：<a href="https://pan.baidu.com/s/16q34ypajfKWtSfs636Ml6w" target="_blank" rel="noopener noreferrer">百度网盘链接</a> 密码: iwi1</p>
<p>所有版本：这里是所有的<a href="https://github.com/ilanyu/ReverseProxy/releases/tag/v1.4" target="_blank" rel="noopener noreferrer">版本</a></p>
<p>运行软件后，再JRebel激活界面输入<code v-pre>http://127.0.0.1:8888/88414687-3b91-4286-89ba-2dc813b107ce+任意邮箱名</code></p>
<h4 id="_2-6-free-mybatise-plugin" tabindex="-1"><a class="header-anchor" href="#_2-6-free-mybatise-plugin" aria-hidden="true">#</a> 2.6 free mybatise plugin</h4>
<p>用于mapper.xml语句与数据库映射接口可以快速相互跳转，还可以根据数据库表快速生成实体类，数据库映射接口和接口实现方法</p>
<h3 id="_3-其他" tabindex="-1"><a class="header-anchor" href="#_3-其他" aria-hidden="true">#</a> 3. 其他</h3>
<h4 id="_3-1-springboot程序启动报错启动报错" tabindex="-1"><a class="header-anchor" href="#_3-1-springboot程序启动报错启动报错" aria-hidden="true">#</a> 3.1 springboot程序启动报错启动报错</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Error running 'App': Command line is too long. Shorten command line for App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决：</p>
<p>在 <code v-pre>.idea\workspace.xml</code>，目录下添加改节点，重新启动报错1，需要再重新打包一次</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;component name=&quot;PropertiesComponent&quot;&gt; 
&lt;property name=&quot;dynamic.classpath&quot; value=&quot;true&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-加载mysql驱动显示以下信息" tabindex="-1"><a class="header-anchor" href="#_3-2-加载mysql驱动显示以下信息" aria-hidden="true">#</a> 3.2 加载mysql驱动显示以下信息</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Loading class com.mysql.jdbc.Driver'. This is deprecated. The new driver class is com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决：</p>
<p>配置文件中驱动升级为<code v-pre>com.mysql.cj.jdbc.Driver</code>，完整配置如下：</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>spring:
  datasource:
    url: jdbc:mysql://localhost:3306/springboot?useUnicode=true&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=CST
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-idea软件启动报错" tabindex="-1"><a class="header-anchor" href="#_3-3-idea软件启动报错" aria-hidden="true">#</a> 3.3 IDEA软件启动报错</h4>
<p>报错如下，原因：软件和其他软件有端口冲突，可能是<code v-pre>vmware</code>和<code v-pre>Hyper-V</code>，因为我当时正好再弄那个</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>java.util.concurrent.CompletionException: java.net.BindException: Address already in use: bind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决：</p>
<p>使用管理员身份打开命令提示符，执行命令<code v-pre>net stop winnat</code>和<code v-pre>net start winnat</code>，不用重启</p>
<p>IDEA激活
https://tech.souyunku.com/?p=16235</p>
</div></template>


