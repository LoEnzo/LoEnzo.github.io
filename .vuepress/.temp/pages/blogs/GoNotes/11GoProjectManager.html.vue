<template><div><p>::: tip</p>
<p>:::</p>
<h1 id="包的知识点" tabindex="-1"><a class="header-anchor" href="#包的知识点" aria-hidden="true">#</a> 包的知识点</h1>
<ul>
<li>导包可以多行导入</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import(
    &quot;fmt&quot;
    &quot;sync&quot;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以使用别名，避免同一包名产生冲突</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import mrand &quot;math/rand&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用点</li>
</ul>
<p>但这种用法，会有一定的隐患，就是导入的包里可能有函数，会和我们自己的函数发生冲突</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import . &quot;fmt&quot;

func main() {
    Println(&quot;hello, world&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>包的初始化<code v-pre>init</code></li>
</ul>
<p>包被导入时，会执行<code v-pre>init</code>函数，优先于<code v-pre>main</code>函数，不能有参数和返回值，<strong>建议少用，仅用于全局变量初始化，或者单元测试初始化一些东西</strong></p>
<ul>
<li>包的匿名导入</li>
</ul>
<p>导入一个没有用到的包在编译的时候会报错，如果只想使用<code v-pre>init</code>函数来初始化一些任务，可以对包进行匿名导入</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>import _ &quot;packgename&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>导入的包是路径</p>
</li>
<li>
<p>使用绝对路径导入，而不是相对路径，避免改变了项目放在<code v-pre>src</code>下，改变了<code v-pre>GOPATH</code>而导致运行报错</p>
</li>
<li>
<p>包导入的路径的优先级</p>
</li>
</ul>
<p>如果项目下有<code v-pre>vendor</code>目录，那么优先级是<code v-pre>vender &gt; $GOROOT/src &gt; $GOPATH/src</code></p>
<p>通常<code v-pre>vendor</code> 目录是通过 <code v-pre>go mod vendor</code> 命令生成的，这个命令会将项目依赖全部打包到你的项目目录下的 verdor 文件夹中</p>
<h1 id="go包管理" tabindex="-1"><a class="header-anchor" href="#go包管理" aria-hidden="true">#</a> Go包管理</h1>
<p>go的包管理方式，从<code v-pre>GOPATH</code>到<code v-pre>GO VENDOR</code>到<code v-pre>GO  MODULES</code>，推荐使用<code v-pre>Go Modules</code></p>
<ul>
<li>
<p>GOPATH</p>
<p>可以理解为工作目录，通常的目录结构如下，主要弊端无法在项目中使用指定版本的包，因为其没有包的概念，一个包只能保留一个版本</p>
</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>|_bin：存放编译后生成的二进制可执行文件
|_pkg：存放编译后生成的 .a 文件
|_src：存放项目的源代码，可以是你自己写的代码，也可以是你 go get 下载的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>go vender</p>
<p>为了解决 GOPATH 方案下不同项目下无法使用多个版本库的问题，Go v1.5 开始支持 vendor</p>
<p>它在每个项目的下都创建一个<code v-pre>vendor</code>目录，每个项目需要的以来都下载到该目录下，项目之间不相互影响，但是项目同一个包极大可能被多个项目用到了，每个项目下都保留无疑是对磁盘空间的浪费，别人要使用你的项目，你还得想你依赖的包都上传，否则别人很可能无法使用】</p>
</li>
<li>
<p>go modules</p>
<p><a href="https://segmentfault.com/a/1190000021854441" target="_blank" rel="noopener noreferrer">参考</a></p>
<p>go v1.11版本开始，<code v-pre>go env</code>多了个环境变量<code v-pre>GO111MODULE</code>，通过它可以开启或关闭 go mod 模式，它有三个可选值：<code v-pre>off</code>、<code v-pre>on</code>、<code v-pre>auto</code>，默认值是<code v-pre>auto</code></p>
<ul>
<li><code v-pre>GO111MODULE=off</code>禁用模块支持，编译时会从<code v-pre>GOPATH</code>和<code v-pre>vendor</code>文件夹中查找包</li>
<li><code v-pre>GO111MODULE=on</code>启用模块支持，编译时会忽略<code v-pre>GOPATH</code>和<code v-pre>vendor</code>文件夹，只根据 <code v-pre>go.mod</code>下载依赖</li>
<li><code v-pre>GO111MODULE=auto</code>，当项目在<code v-pre>$GOPATH/src</code>外且项目根目录有<code v-pre>go.mod</code>文件时，自动开启模块支持</li>
</ul>
</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>// 开启go mod方式
go env -w GO111MODULE=&quot;on&quot;

// 设置代理
go env -w GOPROXY=https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="go-mod" tabindex="-1"><a class="header-anchor" href="#go-mod" aria-hidden="true">#</a> go mod</h2>
<h3 id="go-modules-模式核心文件" tabindex="-1"><a class="header-anchor" href="#go-modules-模式核心文件" aria-hidden="true">#</a> go modules 模式核心文件</h3>
<p><code v-pre>go.mod</code></p>
<ul>
<li>第一行：模块的引用路径</li>
<li>第二行：项目使用的 go 版本</li>
<li>第三行：项目所需的直接依赖包及其版本</li>
</ul>
<p>简单的 go.mod</p>
<p>如何将依赖写入<code v-pre>go.mod</code>，通过<code v-pre>go get </code>下载安装指定的依赖，或者<code v-pre>go build</code>导入import中的依赖也能自动下载</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>module go-study

go 1.16

require github.com/qq827435393/gohello v0.0.0-20201127010752-c29ed43981d7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复杂的go.mod</p>
<ul>
<li><code v-pre>exclude</code>： 忽略指定版本的依赖包</li>
<li><code v-pre>replace</code>：由于在国内访问golang.org/x的各个包都需要翻墙，你可以在go.mod中使用replace替换成github上对应的库。</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre v-pre class="language-go"><code>module github.com/BingmingWong/module-test

go 1.14

require (
    example.com/apple v0.1.2
    example.com/banana v1.2.3
    example.com/banana/v2 v2.3.4
    example.com/pear // indirect
    example.com/strawberry // incompatible
)

exclude example.com/banana v1.2.4
replace（
    golang.org/x/crypto v0.0.0-20180820150726-614d502a4dac =&gt; github.com/golang/crypto v0.0.0-20180820150726-614d502a4dac
    golang.org/x/net v0.0.0-20180821023952-922f4815f713 =&gt; github.com/golang/net v0.0.0-20180826012351-8a410e7b638d
    golang.org/x/text v0.3.0 =&gt; github.com/golang/text v0.3.0
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>go.sum</code></p>
<p>每一行都是由 <code v-pre>模块路径</code>，<code v-pre>模块版本</code>，<code v-pre>哈希检验值</code> 组成，其中哈希检验值是用来保证当前缓存的模块不会被篡改。hash 是以<code v-pre>h1:</code>开头的字符串，表示生成checksum的算法是第一版的hash算法（sha256）</p>
<p><strong>注意</strong>：<code v-pre>go.mod 和 go.sum 是 go modules 版本管理的指导性文件，因此 go.mod 和 go.sum 文件都应该提交到你的 Git 仓库中去，避免其他人使用你写项目时，重新生成的go.mod 和 go.sum 与你开发的基准版本的不一致</code></p>
<h3 id="go-mod-相关指令" tabindex="-1"><a class="header-anchor" href="#go-mod-相关指令" aria-hidden="true">#</a> go mod 相关指令</h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>go mod init</td>
<td>生成 go.mod 文件</td>
</tr>
<tr>
<td>go mod download</td>
<td>下载 go.mod 文件中指明的所有依赖到本地cache，默认为<code v-pre>$GOPATH/pkg/mod</code>目录）</td>
</tr>
<tr>
<td>go mod tidy</td>
<td>整理现有的依赖（添加缺少的包，且删除无用的包）</td>
</tr>
<tr>
<td>go mod graph</td>
<td>查看现有的依赖结构</td>
</tr>
<tr>
<td>go mod edit</td>
<td>编辑 go.mod 文件，-fmt 格式化文件</td>
</tr>
<tr>
<td>go mod vendor</td>
<td>导出项目所有的依赖到vendor目录</td>
</tr>
<tr>
<td>go mod verify</td>
<td>校验一个模块是否被篡改过</td>
</tr>
<tr>
<td>go mod why</td>
<td>查看为什么需要依赖某模块</td>
</tr>
</tbody>
</table>
<h3 id="go-编码规范" tabindex="-1"><a class="header-anchor" href="#go-编码规范" aria-hidden="true">#</a> go 编码规范</h3>
<p><a href="http://golang.iswbm.com/en/latest/c03/c03_04.html#" target="_blank" rel="noopener noreferrer">参考</a></p>
<ul>
<li>
<p>文件命名</p>
<p>建议统一小写，不同单词之间用“_”隔开，测试文件以<code v-pre>_test.go</code>结尾</p>
</li>
<li>
<p>常量命名</p>
<p>建议大写下划线分割，可以于变量区分开</p>
</li>
<li>
<p>变量命名</p>
<p>建议驼峰</p>
</li>
<li>
<p>函数命名</p>
<p>建议驼峰，<code v-pre>注意</code>：go根据函数手写字母大小写区分外包能不能访问，需要则大写，不需要小写</p>
</li>
<li>
<p>接口命名</p>
</li>
<li>
<p>注释</p>
</li>
<li>
<p>包导入</p>
</li>
</ul>
<h1 id="go-常用指令" tabindex="-1"><a class="header-anchor" href="#go-常用指令" aria-hidden="true">#</a> Go 常用指令</h1>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>go version</td>
<td>查看版本</td>
<td></td>
</tr>
<tr>
<td>go env</td>
<td>查看环境变量</td>
<td>设置环境变量 go env -w GOPATH=/usr/loca</td>
</tr>
<tr>
<td>go build</td>
<td>编译，</td>
<td>go语言程序需要先编译成二进制，再执行，生成可执行文件在当前目录</td>
</tr>
<tr>
<td>go run</td>
<td>直接运行</td>
<td>也会先编译，但不会生产二进制文件，而是编译成临时文件直接运行</td>
</tr>
<tr>
<td>go install</td>
<td>安装代码包</td>
<td>和go build有些相同，不过会生成很多文件，可执行统一放置到$GOPATH/bin目录下</td>
</tr>
<tr>
<td>go clean</td>
<td>清楚文件</td>
<td>可以用于清楚go install生成的多余文件</td>
</tr>
<tr>
<td>go get</td>
<td>下载代码包</td>
<td><code v-pre>-u</code>：用于下载指定的路径包及其依赖包，默认情况下，不会下载本地已经存在的，只会下载本地不存在的代码包。就是口中常说的更新包 比如：go get -u github.com/jinzhu/gorm。会把最新的 gorm 包下载到你本地<br> <code v-pre>-d</code>：让命令程序只执行下载动作，而不执行安装动作。<br> <code v-pre>-t</code>让命令程序同时下载并安装指定的代码包中的测试源码文件中依赖的代码包<br/> <code v-pre>-fix</code>命令程序在下载代码包后先执行修正动作，而后再进行编译和安装。比如，我的代码是用1.7 开发的，现在go 版本已经是1.13 了，有些包已经发生了变化，那么我们在使用go get命令的时候可以加入-fix标记。这个标记的作用是在检出代码包之后，先对该代码包中不符合Go语言1.7版本的语言规范的语法进行修正，然后再下载它的依赖包，最后再对它们进行编译和安装。<br/> <code v-pre>-v</code>打印出那些下载的代码包的名字<br/> <code v-pre>-f</code>仅在使用-u标记时才有效。该标记会让命令程序忽略掉对已下载代码包的导入路径的检查。如果下载并安装的代码包所属的项目是你从别人那里Fork过来的，那么这样做就尤为重要了 <br/><code v-pre>-x</code>打印出整个过程使用了哪些命令 <br/><code v-pre>-insecure</code> 允许命令程序使用非安全的scheme（如HTTP）去下载指定的代码包。如果你用的代码仓库（如公司内部的Gitlab）没有HTTPS支持，可以添加此标记。请在确定安全的情况下使用它。（记得 使用工具 git 时，有个版本就是 http 升级为了https）</td>
</tr>
</tbody>
</table>
<h1 id="go多环境打包" tabindex="-1"><a class="header-anchor" href="#go多环境打包" aria-hidden="true">#</a> Go多环境打包</h1>
<p>go可以打包不同环境的可执行文件</p>
<p>Windows下打包，切换到go项目<code v-pre>main.go</code>目录下，执行指令：</p>
<ul>
<li>Window：默认 <code v-pre>go build</code>，生成<code v-pre>.exe</code>可执行文件，打包了其他环境需要修改回来，<code v-pre>SET GOOS=windows</code></li>
<li>Linux：执行 <code v-pre>SET CGO_ENABLED=0 SET GOOS=linux SET GOARCH=amd64 go build</code></li>
<li>MacOs：执行 <code v-pre>ET CGO_ENABLED=0 SET GOOS=darwin3 SET GOARCH=amd64 go build</code></li>
</ul>
</div></template>


