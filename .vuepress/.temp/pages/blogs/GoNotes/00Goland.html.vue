<template><div><p>::: tip</p>
<p>近年来go语言越来越火热，值得了解一下，扩宽下知识面，先简单学习下基础语法，go语言学习笔记，<a href="http://golang.iswbm.com/en/latest/index.html" target="_blank" rel="noopener noreferrer">参考地址</a>，后面的笔记都是基于该作者的笔记一步步学习，练习的<a href="https://gitee.com/myMagicRain/go-study" target="_blank" rel="noopener noreferrer">工程地址</a>
:::</p>
<h1 id="goland配置" tabindex="-1"><a class="header-anchor" href="#goland配置" aria-hidden="true">#</a> Goland配置</h1>
<p>Goland作为JetBrains家族的一员，习惯IDEA开发的人通常选用此开发工具，也可以使用巨硬的VScode，这里只介绍Goland配置</p>
<ul>
<li>
<p>配置GOROOT，类似于JDK</p>
<p>点击Files-&gt;Settings-&gt;GOROOT，设置为go语言开发环境的路径</p>
</li>
<li>
<p>配置GOPTAH，类似于workspace</p>
<p>点击Files-&gt;Settings-&gt;GOPATH，设置GOPATH为自己的项目路径</p>
</li>
<li>
<p>设置 goproxy，类似于maven一样，可以拉取一些库</p>
<p>点击Files-&gt;Settings-&gt;Go Modules，设置GRPROXY，value可以为以下值：</p>
<ul>
<li><code v-pre>https://goproxy.io</code></li>
<li><code v-pre>https://goproxy.cn</code></li>
<li><code v-pre>https://mirrors.aliyun.com/goproxy/</code></li>
</ul>
</li>
<li>
<p>设置go imports（自动格式化插件）</p>
<p>点击Files-&gt;Settings-&gt;Tools-&gt;File Watchers,  再点击 + 添加 goimports，会自动下载，需要科学上网才能下来，// todo</p>
</li>
</ul>
<h1 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h1>
<ul>
<li>
<p>GOROOT</p>
<p>在GO语言中表示的是 Go语言编译、工具、标准库等的安装路径，通过它可以告诉系统你的 go.exe 是放在哪里，不设置的话，你后面执行 <code v-pre>go get</code> 、<code v-pre>go install</code> 的时候，系统就不认识它了</p>
</li>
<li>
<p>GOPATH</p>
<p>表示 Go的工作目录，这个目录指定了需要从哪个地方寻找GO的包、可执行程序等，这个目录可以是多个目录表示。这里我设置成我的工作空间（目录你可以自己定）</p>
</li>
<li>
<p>一般目录结构</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>project
├─bin	包含了可执行程序，注意是可执行的，不需要解释执行
├─pkg	包含了使用的包或者说库
└─src	里面包含了go的代码源文件，其中仍按包的不同进行组织
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


