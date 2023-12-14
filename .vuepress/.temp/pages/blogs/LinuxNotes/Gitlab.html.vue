<template><div><p>::: tip
在虚拟机Linux搭建私有Gitlab，对应虚拟机端口转发，常规配置问题，安装常用JDK，Maven，Git；</p>
<p>:::</p>
<!-- more -->
<h3 id="_1-安装gitlab" tabindex="-1"><a class="header-anchor" href="#_1-安装gitlab" aria-hidden="true">#</a> 1. 安装<code v-pre>gitlab</code></h3>
<p>因为直接下载安装<code v-pre>gitlab</code>，速度相对较慢，选取清华大学开源镜像网站，由于虚拟机里操作命令，再切换为Windows会比较卡顿，建议再<code v-pre>SecureCRT</code>中进行操作</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 新建 gitlab-ce.repo, 并配置镜像下载路径
vim /etc/yum.repos.d/gitlab-ce.repo

# 配置
[gitlab-ce]
name=Gitlab CE Repository
baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/
gpgcheck=0
enabled=1

# 执行安装
sudo yum makecache
sudo yum install gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件" aria-hidden="true">#</a> 2. 修改配置文件</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 修改配置文件指定服务器`ip`和自定义端口
vim /etc/gitlab/gitlab.rb

# 修改访问路径地址
external_url 'http://localhost:8080'

# 刷新配置(这一步很执行很久，耐心等待)
sudo gitlab-ctl reconfigure

# 重启gitlab
sudo gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-gitlab相关指令" tabindex="-1"><a class="header-anchor" href="#_3-gitlab相关指令" aria-hidden="true">#</a> 3. gitlab相关指令</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看状态
gitlab-ctl status
 
# 开启
gitlab-ctl start

# 关闭
gitlab-ctl stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-重设root密码" tabindex="-1"><a class="header-anchor" href="#_4-重设root密码" aria-hidden="true">#</a> 4. 重设<code v-pre>root</code>密码</h3>
<p>​		看网上教程是重启完<code v-pre>gitlab</code>就可以直接在浏览器访问服务器地址加设置的端口号即可登陆，</p>
<p>默认的用户名: admin@example.com  | root 密码: 5iveL!fe，但不知道为什么我没有生效，所以需要自己修改密码</p>
<p>官方参考文档：https://docs.gitlab.com/ce/security/reset_root_password.html</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 启动 Ruby on Rails 控制台  (这一步，执行非常慢，还提示错误，或者不反应， 建议在虚拟机命令里操作)
gitlab-rails console -e production

# 搜索用户名
user = User.where(id:1).first 或
user = User.find_by(email: 'admin@example.com')

# 更改并确认密码
user.password = 'secret_pass'
user.password_confirmation = 'secret_pass'

# 保存
user.save!

# 退出
quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-端口转发" tabindex="-1"><a class="header-anchor" href="#_5-端口转发" aria-hidden="true">#</a> 5. 端口转发</h3>
<p>​		添加端口转发， 使同一个局域网的其他<code v-pre>ip</code>可以方位本地的虚拟机服务器</p>
<p><code v-pre>VMware</code> ：编辑 --&gt;  虚拟网络编辑器 --&gt; <code v-pre>vmnet8</code> --&gt;  <code v-pre>nat</code>设置  --&gt;  端口转发  添加</p>
<p><strong>配置：</strong></p>
<ul>
<li>主机端口（别人访问主机端口，转发到虚拟机）</li>
<li>虚拟机<code v-pre>ip</code></li>
<li>虚拟机端口（Tomcat端口）</li>
</ul>
<h3 id="_6-配置ssh公钥" tabindex="-1"><a class="header-anchor" href="#_6-配置ssh公钥" aria-hidden="true">#</a> 6. 配置ssh公钥</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 生成公钥
ssh-keygen -t rsa -C &quot;XXX@163.com.cn&quot;

# 以上命令会创建 .ssh 的隐藏文件夹,文件夹中有2个文件:id_rsa(私钥)和id_rsa.pub(公钥)

# 查看公钥内容并拷贝
vi id_rsa.pub

# 在设置中SSH选项中添加生成的密钥即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-安装runner" tabindex="-1"><a class="header-anchor" href="#_7-安装runner" aria-hidden="true">#</a> 7. 安装Runner</h3>
<h4 id="_7-1-下载runner" tabindex="-1"><a class="header-anchor" href="#_7-1-下载runner" aria-hidden="true">#</a> 7.1 下载Runner</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 项目组
https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# 最新版本
sudo apt-get install gitlab-runner

# 安装特定版本
sudo apt-get install gitlab-runner=10.0.0

# 查看gitlab版本
cat /opt/gitlab/embedded/service/gitlab-rails/VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-安装启动runner" tabindex="-1"><a class="header-anchor" href="#_7-2-安装启动runner" aria-hidden="true">#</a> 7.2 安装启动Runner</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 将文件放入/usr/local/bin目录下，修改文件权限 
chmod 777 filename

# 执行安装
sudo /usr/local/bin/gitlab-runner install --user=用户名 --working-directory=/home/用户名

# 启动Runner
sudo /usr/local/bin/gitlab-runner start

# 安装证书
curl 证书下载路径 -o /etc/pki/ca-trust/source/anchors/证书具体路径

# 注册
sudo /usr/local/bin/gitlab-runner register
	· 输入url
	· 输入tocken
	· 输入runner名称
	· 输入runner标签名称
	· 输入执行各项命令的形式为shell

# 多个runner，具体需要那个runner运行需要在ci中配置tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-gitlab-runner-命令" tabindex="-1"><a class="header-anchor" href="#_7-3-gitlab-runner-命令" aria-hidden="true">#</a> 7.3 <code v-pre>Gitlab-runner</code> 命令</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># gitlab-runner 版本信息
gitlab-runner -v 

# gitlab-runner 运行状态
gitlab-runner status

# gitlab-runner 启动
gitLab-runner start

# gitlabr-runner 停止
gitlab-runner stop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-安装git" tabindex="-1"><a class="header-anchor" href="#_8-安装git" aria-hidden="true">#</a> 8. 安装<code v-pre>Git</code></h3>
<p>​		获取<a href="https://github.com/git/git/releases" target="_blank" rel="noopener noreferrer">github</a>最新的Git安装包下载链接</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 下载
wget https://github.com/git/git/archive/v2.24.1.tar.gz

# 解压
tar -zxvf v2.24.1.tar.gz

# 切换到目录下
cd git-2.24.1

# 执行编译
make prefix=/usr/local/git all

# 安装git到对应路径
make prefix=/usr/local/git install

# 环境变量配置
vim /etc/profile
	添加git相关配置信息
	· PATH=$PATH:/usr/local/git/bin
	· export 
	
# 使配置生效
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-安装jdk" tabindex="-1"><a class="header-anchor" href="#_9-安装jdk" aria-hidden="true">#</a> 9. 安装<code v-pre>JDK</code></h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 新建jdk目录
mkdir /usr/local/jdk_1.8

# 下载jdk压缩包（下载不了百度）
wget http://www.oracle.com/technetwork/java/javase/archive-139210.html

#解压
tar -zxvf jdk_1.8

# 环境变量配置
vim /etc/profile
	export JAVA_HOME=/usr/local/jdk_1.8/jdk1.8.0_231
    export CLASSPATH=$:CLASSPATH:$JAVA_HOME/lib/
    export PATH=$PATH:$JAVA_HOME/bin

# 使配置生效
source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-安装maven" tabindex="-1"><a class="header-anchor" href="#_10-安装maven" aria-hidden="true">#</a> 10. 安装<code v-pre>Maven</code></h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 新建maven目录
mKdir /usr/local/maven

# 下载安装包
http://maven.apache.org/download.cgi?Preferred=http%3A%2F%2Fmirror.bit.edu.cn%2Fapache%2F

#解压
tar -zxvf maven_3.6.3

# 环境变量配置
vim etc/profile
	export MAVEN_HOME=/usr/local/maven/maven_3.6.3
	export PATH=$MAVEN_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


