<template><div><p>::: tip
Vuepress搭建的个人静态博客，使用GithubAction实现本地提交推送，github监听到提交后根据<code v-pre>ci.yml</code>实现自动部署到gh-pages</p>
<p>:::</p>
<!-- more -->
<h3 id="_1-vuepress-搭建" tabindex="-1"><a class="header-anchor" href="#_1-vuepress-搭建" aria-hidden="true">#</a> 1. Vuepress 搭建</h3>
<ul>
<li><a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">官方文档</a>，参考官方文档自己搭建</li>
<li><a href="https://vuepress-theme-reco.recoluan.com/" target="_blank" rel="noopener noreferrer">vuepress-theme-reco</a> 在这个主题基础上初始化<code v-pre>blog</code>改造；</li>
</ul>
<h3 id="_2-项目同步" tabindex="-1"><a class="header-anchor" href="#_2-项目同步" aria-hidden="true">#</a> 2. 项目同步</h3>
<ul>
<li>在<code v-pre>github</code>上创建对应的项目</li>
<li>将自己搭建的<code v-pre>vuepress</code>或者基于上面主题改造的项目推送到自己的<code v-pre>github</code>项目</li>
</ul>
<h3 id="_3-设置公钥私钥" tabindex="-1"><a class="header-anchor" href="#_3-设置公钥私钥" aria-hidden="true">#</a> 3. 设置公钥私钥</h3>
<ul>
<li>
<p>本地项目位置打开<code v-pre>Git Bash</code>，邮箱与<code v-pre>github</code>注册邮箱保持一致</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa -C youremail@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>本地生成文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 默认路径
C:\Users\yourComputerName\.ssh

# 私钥
id_rsa

# 公钥
id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在<code v-pre>github</code>当前项目的位置</p>
<p>Settings --&gt; Deploy key --&gt; Add Deploy key   添加公钥</p>
<p>Settings --&gt; Secrets 添加私钥</p>
</li>
</ul>
<h3 id="_4-githubactions" tabindex="-1"><a class="header-anchor" href="#_4-githubactions" aria-hidden="true">#</a> 4 githubActions</h3>
<p>​	在当前项目，点击Actions创建 <code v-pre>.yml</code> 文件，可选用已经有的模板进行修改</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>name: blog deploy

on: 
  push:
    branches:
    # 修改为分支
    - myblog	
    #  - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v1
    - run: yarn install
    - run: yarn build
    
    # npm 使用下面这种
    # - run: npm ci
    # - run: npm install vuepress
    # - run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
      	# 之前项目的私钥，对应的要填写正确
        ACTIONS_DEPLOY_KEY: ${{secrets.ACCESS_TOKEN}}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: public
        # PUBLISH_DIR: docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-本地deploy脚本" tabindex="-1"><a class="header-anchor" href="#_5-本地deploy脚本" aria-hidden="true">#</a> 5. 本地deploy脚本</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run build
yarn build

# 进入生成的文件夹
#cd docs/.vuepress/dist
cd public

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:LoEnzo/myblog.git master:gh-pages
# git push -f https://gitee.com/myMagicRain/myblog.git master:gh-pages

cd -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-让github-page绑定自定义域名" tabindex="-1"><a class="header-anchor" href="#_6-让github-page绑定自定义域名" aria-hidden="true">#</a> 6. 让github page绑定自定义域名</h3>
<p><strong>自定义域名不生效</strong></p>
<p>个人遇到问题，直接在设置中customs添加自定义域名，域名供应商处也添加了指向cname的，通自定义域名也能访问，但是加载图片，css样式等找不到资源</p>
<p>解决：</p>
<p>将代码放到分支，githubAction中，通过npm，或yarn构建出来的静态网页放到mater，这样就通过自己定义域名访问了。</p>
<p><strong>自定义域名，第二次推送就会失效，需要再手动添加一次</strong></p>
<p>解决：</p>
<p>在 <code v-pre>.vuepress\public</code>文件夹目录下，创建一个自己<code v-pre>CNAME</code>文件，不带后缀，内容就是你自己购买的自定义域名，注意不带www 或者http</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>hjwu.ml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


