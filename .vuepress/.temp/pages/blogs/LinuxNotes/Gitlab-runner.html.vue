<template><div><p>:::tip
在我们完成项目开发后，提交到git，当监听提交后，自动进行编译，并进行项目的部署，是不是一想就很爽，所以下面引入我们的主角 —— gitlab-CI，<a href="https://fennay.github.io/gitlab-ci-cn/" target="_blank" rel="noopener noreferrer">中文文档</a>。转自<a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer"><strong>午后南杂</strong></a>
:::</p>
<!-- more -->
<h2 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci" aria-hidden="true">#</a> Gitlab CI</h2>
<p>Gitlab-CI 是 GitLab Continuous Integration（Gitlab持续集成）的简称。
从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。
只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CI pipeline。</p>
<h2 id="gitlab-runner" tabindex="-1"><a class="header-anchor" href="#gitlab-runner" aria-hidden="true">#</a> Gitlab-Runner</h2>
<h4 id="安装gitlab-ci-multi-runner-linux" tabindex="-1"><a class="header-anchor" href="#安装gitlab-ci-multi-runner-linux" aria-hidden="true">#</a> 安装gitlab-ci-multi-runner（linux）</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 添加yum源
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh | sudo bash

# 安装
yum install gitlab-ci-multi-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-gitlab-ci-multi-runner-注册-specific-runners" tabindex="-1"><a class="header-anchor" href="#使用-gitlab-ci-multi-runner-注册-specific-runners" aria-hidden="true">#</a> 使用 gitlab-ci-multi-runner 注册 Specific Runners</h4>
<p><img src="https://upload-images.jianshu.io/upload_images/4660406-23e31a052864a7a0.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="runners.jpg"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ gitlab-ci-multi-runner register
Running in system-mode.

Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
&gt;&gt;&gt;&gt;&gt;&gt; 你的URL

Please enter the gitlab-ci token for this runner:
&gt;&gt;&gt;&gt;&gt;&gt; 你的Token

Please enter the gitlab-ci description for this runner:
&gt;&gt;&gt;&gt;&gt;&gt; 你对该runner的描述

Please enter the gitlab-ci tags for this runner (comma separated):
&gt;&gt;&gt;&gt;&gt;&gt; 该runner的标签

Whether to run untagged builds [true/false]:
[false]: true

&gt;&gt;&gt;&gt;&gt;&gt; 是否运行没有标记的项目（后期可以改）

Whether to lock Runner to current project [true/false]:
[false]:

&gt;&gt;&gt;&gt;&gt;&gt; 是否锁定只运行当前项目（后期可以改）

Registering runner... succeeded                     runner=9e48baqx

Please enter the executor: parallels, docker+machine, ssh, virtualbox, docker-ssh+machine, kubernetes, docker, docker-ssh, shell:

&gt;&gt;&gt;&gt;&gt;&gt; 选择runner的类型（根据你的需求选择，我选择的shell，我的项目是node项目）

Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::warning</p>
<ol>
<li>首先你的项目中的 <code v-pre>getlab-runner.yml</code> 文件中的命令需要的环境，你的runner所在的服务器是必须要搭好的，必须你需要执行 <code v-pre>npm install</code> 和 <code v-pre>npm run build</code> ，那你的服务器必须要有node环境；</li>
<li>runner的类型比较重要，你必须要清楚你需要一个什么类型的runner。比如，开始我是需要一个能够运行node项目的runner，但是网上的很多教程统一都是都选择docker，这个时候你电脑上必须要安装了docker才可以，因为这相当于在docker里面又安装了一个docker（docker in docker），所以对于我的需求来说，我选择shell就可以了；</li>
<li>通过Gitlab中某个项目的 <code v-pre>Settings</code> 下的 <code v-pre>CI/CD Pipelines</code> 按钮进入的页面中得到的URL和Token所注册的runner只服务于本项目，当你在其他项目的当前页面时，可以选择让这个runner为当前项目开启服务。
:::</li>
</ol>
<h2 id="配置-gitlab-runner-yml" tabindex="-1"><a class="header-anchor" href="#配置-gitlab-runner-yml" aria-hidden="true">#</a> 配置 gitlab-runner.yml</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mage: node:9.11.1

pages:
 cache:
   paths:
   - node_modules/

 script:
 - cnpm install
 - npm run build
 - sudo rm -rf /data/ftp/http/files/scfAdminDoc
 - sudo mv ./scfAdminDoc /data/ftp/http/files/
 artifacts:
   paths:
   - public
 only:
 - master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体配置见<a href="https://fennay.github.io/gitlab-ci-cn/gitlab-ci-yaml.html" target="_blank" rel="noopener noreferrer">文档</a></p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h4 id="代码推送到gitlab上之后-一直是pending状态-要等很久才pick到一个runner来执行" tabindex="-1"><a class="header-anchor" href="#代码推送到gitlab上之后-一直是pending状态-要等很久才pick到一个runner来执行" aria-hidden="true">#</a> 代码推送到gitlab上之后，一直是pending状态，要等很久才pick到一个runner来执行</h4>
<p>这个现象一般发生在本机注册了多个runner，之前的都删除了，只留下一个，但是当我们在gitlab管理平台移除了某个runner的时候，并没有完全删除记录，当执行的 <code v-pre>gitlab-ci-multi-runner list</code> 的时候你会发现它仍然还在，如果需要彻底删除它，还应该这样做：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cd /etc/gitlab-runner
ls

# 你会看到config.toml文件，打开它并删除已有的那些runner记录
vim config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置node环境" tabindex="-1"><a class="header-anchor" href="#配置node环境" aria-hidden="true">#</a> 配置node环境</h4>
<ol>
<li>下载node-v9.11.1-linux-x64.tar.xz文件</li>
<li>例如放在 <code v-pre>/home</code> 文件夹<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 进入所在目录，解压
tar -xvf node-v9.11.1-linux-x64.tar.xz

# 重命名文件夹
mv node-v9.11.1-linux-x64 nodejs

# 建立软链接，配置全局环境变量（源路径和目标路径为相对路径）
ln -s /home/nodejs/bin/npm /usr/local/bin/
ln -s /home/nodejs/bin/node /usr/local/bin/

# 检查是否配置成功
node -v
npm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="scp上上传" tabindex="-1"><a class="header-anchor" href="#scp上上传" aria-hidden="true">#</a> scp上上传</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 普通
scp ./public/* root@192.168.0.226:/data/ftp/http/files/
scp 源路径/源文件 用户名(root)@服务器IP:目标路径


# 免密码
yum install sshpass
sshpass -p 111111 scp ./public/* root@192.168.0.226:/data/ftp/http/files/
sshpass -p 密码 scp 源路径/源文件 用户名(root)@服务器IP:目标路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是下载，调换顺序</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>scp root@192.168.0.226:/data/ftp/http/files/ ./public/*
scp 用户名(root)@服务器IP:目标路径 源路径/源文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


