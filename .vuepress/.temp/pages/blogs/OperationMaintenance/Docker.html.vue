<template><div><p>::: tip</p>
<p><strong>Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口</strong>。它是目前最流行的 Linux 容器解决方案。Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。</p>
<p>:::</p>
<!-- more -->
<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2>
<p><strong>相关链接：</strong></p>
<p><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker 官网</a></p>
<p><a href="https://github.com/docker/docker-ce" target="_blank" rel="noopener noreferrer">Github Docker 源码</a></p>
<p><a href="https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY" target="_blank" rel="noopener noreferrer">Docker官网命令文档</a></p>
<p><a href="http://www.dockerinfo.net/document" target="_blank" rel="noopener noreferrer">Docker中文文档</a></p>
<p><a href="https://cr.console.aliyun.com/cn-hangzhou/instances" target="_blank" rel="noopener noreferrer">阿里云镜像容器</a></p>
<h3 id="docker架构" tabindex="-1"><a class="header-anchor" href="#docker架构" aria-hidden="true">#</a> Docker架构</h3>
<p><img src="@source/blogs/OperationMaintenance/images/docker/docker01.png" alt=""></p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>Docker 是一个开源的商业产品，有两个版本：社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）。企业版包含了一些收费服务，个人开发者一般用不到，一般安装社区版，<a href="https://www.runoob.com/docker/centos-docker-install.html" target="_blank" rel="noopener noreferrer">参考</a></p>
<p>::: details Centos 安装 docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 手动安装，如已经安装需要卸载旧版本
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 设置仓库
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
  
# 添加源地址
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装 Docker Engine-Community
sudo yum install docker-ce docker-ce-cli containerd.io

# 启动 Docker
sudo systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details ubuntu 安装 docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>前提是先执行apt-get update  apt-get upgrade

如果还出现这个问题 依次执行下面的步骤：

#添加docker源、
sudo echo &quot;deb https://download.docker.com/linux/ubuntu zesty edge&quot; &gt; /etc/apt/sources.list.d/docker.list

#支持解析https
apt-get install -y apt-transport-https ca-certificates curl software-properties-common

#添加GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#设置存储库位置
add-apt-repository &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable&quot;

#执行安装命令
apt-get install -y docker-ce

如果还是不行 就再跑一次update然后执行安装命令。我的环境就是这么装起来的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="查看docker信息" tabindex="-1"><a class="header-anchor" href="#查看docker信息" aria-hidden="true">#</a> 查看docker信息</h3>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
<th>参数</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>docker info</strong></td>
<td>查看docker 系统信息，包括镜像和容器数</td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>docker version</strong></td>
<td>查看docker的版本信息</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="docker全局概览" tabindex="-1"><a class="header-anchor" href="#docker全局概览" aria-hidden="true">#</a> Docker全局概览</h2>
<p><img src="@source/blogs/OperationMaintenance/images/docker/docker02.png" alt=""></p>
<h2 id="生命周期管理" tabindex="-1"><a class="header-anchor" href="#生命周期管理" aria-hidden="true">#</a> 生命周期管理</h2>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>docker run</strong></td>
<td>创建容器并运行</td>
<td><code v-pre>docker run --name killer-nginx -p 8900:80 -d nginx</code></td>
</tr>
<tr>
<td><strong>docker start</strong></td>
<td>启动容器</td>
<td>容器id、名称：<code v-pre>docker start nginx</code></td>
</tr>
<tr>
<td><strong>docker stop</strong></td>
<td>停止容器</td>
<td>容器id、名称：<code v-pre>docker stop nginx</code></td>
</tr>
<tr>
<td><strong>docker restart</strong></td>
<td>重启容器</td>
<td>容器id、名称：<code v-pre>docker restart nginx</code></td>
</tr>
<tr>
<td><strong>docker kill</strong></td>
<td>杀掉运行中的容器</td>
<td>容器id、名称：<code v-pre>docker kill nginx</code></td>
</tr>
<tr>
<td><strong>docker rm</strong></td>
<td>删除容器</td>
<td><code v-pre>-f </code>：强制删除一个运行中的容器，<br><code v-pre>-l</code>：移除容器间的网络连接，而非容器本身<br><code v-pre>-v </code>：删除与容器关联的卷<br><code v-pre>docker rm nginx</code></td>
</tr>
<tr>
<td><strong>docker exec</strong></td>
<td>进入容器执行命令</td>
<td><code v-pre>-d </code>：分离模式: 在后台运行<br><code v-pre>-i </code>：即使没有附加也保持STDIN 打开<br><code v-pre>-t </code>：分配一个伪终端<br><code v-pre>docker exec -it centos /bin/bash</code></td>
</tr>
</tbody>
</table>
<p>::: details docker run options 参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>-a</strong></td>
<td>指定标准输入输出内容类型，可选<strong>STDIN</strong>/<strong>STDOUT</strong>/<strong>STDERR</strong> 三项</td>
<td><strong>-a stdin</strong></td>
</tr>
<tr>
<td><strong>-d</strong></td>
<td>后台运行容器，并返回容器ID</td>
<td></td>
</tr>
<tr>
<td><strong>-i</strong></td>
<td>以交互模式运行容器，通常与 -t 同时使用</td>
<td></td>
</tr>
<tr>
<td><strong>-P</strong></td>
<td>随机端口映射，容器内部端口<strong>随机</strong>映射到主机的端口</td>
<td></td>
</tr>
<tr>
<td><strong>-p</strong></td>
<td>指定端口映射，格式为：主机(宿主)端口:容器端口****</td>
<td><strong>-p 3306:3306</strong></td>
</tr>
<tr>
<td><strong>-t</strong></td>
<td>为容器重新分配一个伪输入终端，通常与 -i 同时使用</td>
<td></td>
</tr>
<tr>
<td><strong>--name</strong></td>
<td>为容器指定一个名称</td>
<td><strong>--name mysql</strong></td>
</tr>
<tr>
<td><strong>--dns</strong></td>
<td>指定容器使用的DNS服务器，默认和宿主一致</td>
<td><strong>--dns 8.8.8.8</strong></td>
</tr>
<tr>
<td><strong>-h</strong></td>
<td>指定容器的hostname</td>
<td></td>
</tr>
<tr>
<td><strong>-e</strong></td>
<td>设置环境变量</td>
<td><strong>-e username=&quot;ritchie&quot;:</strong></td>
</tr>
<tr>
<td><strong>--env-file=[]</strong></td>
<td>从指定文件读入环境变量</td>
<td></td>
</tr>
<tr>
<td><strong>--cpuset</strong></td>
<td>绑定容器到指定CPU运行</td>
<td><strong>--cpuset=&quot;0-2&quot; or --cpuset=&quot;0,1,2&quot;</strong></td>
</tr>
<tr>
<td><strong>-m</strong></td>
<td>设置容器使用内存最大值</td>
<td></td>
</tr>
<tr>
<td><strong>--net</strong></td>
<td>指定容器的网络连接类型，支持<strong>bridge</strong>/<strong>host</strong>/<strong>none</strong>/<strong>container</strong>: 四种类型</td>
<td><strong>--net=&quot;bridge&quot;</strong></td>
</tr>
<tr>
<td><strong>--link=[]</strong></td>
<td>添加链接到另一个容器</td>
<td></td>
</tr>
<tr>
<td><strong>--expose=[]</strong></td>
<td>开放一个端口或一组端口</td>
<td></td>
</tr>
<tr>
<td><strong>-v</strong></td>
<td>绑定一个卷</td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理" aria-hidden="true">#</a> 容器管理</h3>
<h4 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h4>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>docker ps</strong></td>
<td>列出容器</td>
<td><code v-pre>-a</code>：所有容器  <code v-pre>docker ps -a</code></td>
</tr>
<tr>
<td><strong>docker port</strong></td>
<td>列出指定的容器的端口映射</td>
<td><code v-pre>docker port mysql</code></td>
</tr>
<tr>
<td><strong>docker logs</strong></td>
<td>获取容器的日志</td>
<td><code v-pre>-f </code>：跟踪日志输出<br><code v-pre>--since</code>：显示某个开始时间的所有日志<br><code v-pre>-t</code>：显示时间戳<br><code v-pre>--tail </code>：仅列出最新N条容器日志<br><code v-pre>docker logs --tail=10 mysql </code></td>
</tr>
</tbody>
</table>
<p>::: details docker ps 显示进程信息</p>
<table>
<thead>
<tr>
<th>CONTAINER ID</th>
<th>IMAGE</th>
<th>COMMAND</th>
<th>CREATED</th>
<th>STATUS</th>
<th>PORTS</th>
<th>NAMES</th>
</tr>
</thead>
<tbody>
<tr>
<td>容器id</td>
<td>使用的镜像</td>
<td>启动容器时运行的命令</td>
<td>容器的创建时间</td>
<td>容器状态</td>
<td>容器的端口信息和使用的连接类型（tcp\udp）</td>
<td>自动分配的容器名称</td>
</tr>
</tbody>
</table>
<p>:::</p>
<h4 id="批量操作容器" tabindex="-1"><a class="header-anchor" href="#批量操作容器" aria-hidden="true">#</a> 批量操作容器</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>docker 启动所有的容器
docker start $(docker ps -a | awk '{ print $1}' | tail -n +2)

docker 关闭所有的容器
docker stop $(docker ps -a | awk '{ print $1}' | tail -n +2)

docker 删除所有的容器
docker rm $(docker ps -a | awk '{ print $1}' | tail -n +2)

docker 删除所有的镜像
docker rmi $(docker images | awk '{print $3}' |tail -n +2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像管理" tabindex="-1"><a class="header-anchor" href="#镜像管理" aria-hidden="true">#</a> 镜像管理</h3>
<h4 id="常用指令-1" tabindex="-1"><a class="header-anchor" href="#常用指令-1" aria-hidden="true">#</a> 常用指令</h4>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>docker login/logout</code></td>
<td>登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库：<code v-pre>docker login</code></td>
</tr>
<tr>
<td><code v-pre>docker pull</code></td>
<td>从镜像仓库中拉取或者更新指定镜像：<code v-pre>docker pull mysql</code></td>
</tr>
<tr>
<td><code v-pre>docker push</code></td>
<td>将本地的镜像上传到镜像仓库,要先登陆到镜像仓库：<code v-pre>docker push mysql</code></td>
</tr>
<tr>
<td><code v-pre>docker search</code></td>
<td>搜索镜像：<code v-pre>docker search mysql</code></td>
</tr>
</tbody>
</table>
<h4 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h4>
<table>
<thead>
<tr>
<th>指令</th>
</tr>
</thead>
<tbody>
<tr>
<td>登陆到阿里云镜像仓库：<code v-pre>docker login --username=hjwu_enzo registry.cn-hangzhou.aliyuncs.com</code></td>
</tr>
<tr>
<td>从resgistry拉取镜像：<code v-pre>docker pull registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]</code></td>
</tr>
<tr>
<td>给镜像重命名：<code v-pre>docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]</code></td>
</tr>
<tr>
<td>将镜像推送到registry：<code v-pre>docker push registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]</code></td>
</tr>
</tbody>
</table>
<h4 id="本地镜像管理" tabindex="-1"><a class="header-anchor" href="#本地镜像管理" aria-hidden="true">#</a> 本地镜像管理</h4>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>docker images</code></td>
<td>列出本地镜像</td>
<td><code v-pre>-a</code>：列出本地所有的镜像；<br><code v-pre>--digests</code>：显示镜像的摘要信息；<br><code v-pre>-f</code>：显示满足条件的镜像；<br><code v-pre>--format</code> ：指定返回值的模板文件；<br><code v-pre>--no-trunc </code>：显示完整的镜像信息；<br><code v-pre>-q</code> ：只显示镜像ID<br><code v-pre>docker images -a</code></td>
</tr>
<tr>
<td><code v-pre>docker rmi</code></td>
<td>删除本地一个或多少镜像</td>
<td><code v-pre>-f </code>：强制删除<br><code v-pre>docker rmi images_name</code></td>
</tr>
<tr>
<td><code v-pre>docker tag</code></td>
<td>标记本地镜像，将其归入某一仓库</td>
<td></td>
</tr>
<tr>
<td><code v-pre>docker build</code></td>
<td>用于根据 <code v-pre>Dockerfile</code> 创建镜像</td>
<td><code v-pre>-f </code>：指定要使用的Dockerfile路径；</td>
</tr>
<tr>
<td><code v-pre>docker save</code></td>
<td>将镜像导出为文件</td>
<td><code v-pre>-o</code>：输出到的文件</td>
</tr>
<tr>
<td><code v-pre>docker load</code></td>
<td>将文件导入为镜像</td>
<td></td>
</tr>
<tr>
<td><code v-pre>docker export</code></td>
<td>将容器导出为文件，<strong>会保存该镜像操作的历史记录</strong>，文件较大</td>
<td></td>
</tr>
<tr>
<td><code v-pre>docker import</code></td>
<td>将文件导入为镜像，<strong>会丢失所有元数据和历史记录</strong>，仅保留容器当时的状态</td>
<td></td>
</tr>
<tr>
<td><code v-pre>docker image prune </code></td>
<td>删除无效镜像，镜像被更新覆盖的时候，老镜像会变成这种<code v-pre>&lt;none&gt;</code>标识</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="容器间通信" tabindex="-1"><a class="header-anchor" href="#容器间通信" aria-hidden="true">#</a> 容器间通信</h3>
<ul>
<li>
<p>通过容器 ip 访问（不推荐）</p>
<p>容器重启后，ip 会变动，查看还得进入容器内查看（其他方式暂时不知道）</p>
</li>
<li>
<p>通过宿主机 ip 访问</p>
<p>容器启动后对外暴露一个端口，通过 宿主机 ip : 容器暴露对外的端口 完成访问，</p>
</li>
<li>
<p>通过link建立连接（官方不推荐使用）</p>
<p>容器启动的时候带参数 <code v-pre>--link container_name: container_alias_name(可选)</code>，是的 源容器可以和被链接的容器相互通信，并且被链接的容器可以获得源容器的一些数据，比如环境变量</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 源容器：mysql
docker run -itd --name test-mysql -e MYSQL_ROOT_PASSWORD=root mysql:5.7
#被链接容器 centos
docker run -itd --name test-centos --link test-mysql:mysql  centos /bin/bash
#进入test-centos
docker exec -it test-centos /bin/bash
# 通过 连接名 或者别名 连接mysql
[root@23423423234]# mysql -h test-mysql -uroot -p 
[root@23423423234]# mysql -h mysql -uroot -p 

# centos 能ping通 mysql, 反过来不行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过networks （推荐）</p>
<p>docker network来创建一个桥接网络，在docker run的时候将容器指定到新创建的桥接网络中，这样同一桥接网络中的容器就可以通过互相访问</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 创建网络
docker network create my_net

# 查看创建的网络
docker network ls

# 创建 mysql 容器，加入 test-network 网络，
docker run -it --network my_net --network-alias mysql_net  -e MYSQL_ROOT_PASSWORD=123 mysql:5.7

docker run -it --network my_net --network-alias centos_net  centos /bin/bash

# 容器之间可以相互ping通，因为两个容器都再同一个 network内
docker exec -it centos ping php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他：</h3>
<h4 id="容器和宿主机相互拷贝文件" tabindex="-1"><a class="header-anchor" href="#容器和宿主机相互拷贝文件" aria-hidden="true">#</a> 容器和宿主机相互拷贝文件</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 将容器配配置文件复制到宿主机：docker container cp 容器名:容器内文件的路径  宿主机路径
docker container cp nginx:/etc/nginx /mydata/nginx/

# 将宿主机的文件拷贝到容器中：docker cp 宿主机路径 容器名:容器内路径
docker cp /mydata/elasticsearch/elasticsearch-analysis-ik-7.6.2.zip elasticsearch:/usr/share/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="daemon-json-配置" tabindex="-1"><a class="header-anchor" href="#daemon-json-配置" aria-hidden="true">#</a> daemon.json 配置</h4>
<p>配置docker的守护进程（dockerd），常规配置私有仓库，个人测试允许tcp访问等</p>
<p><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" rel="noopener noreferrer">官网详细配置示例</a></p>
<p>::: details 配置个人镜像加速器 阿里云 centos</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-'EOF'
{
   &quot;registry-mirrors&quot;: [&quot;https://y2pt19bq.mirror.aliyuncs.com&quot;,&quot;https://registry.docker-cn.com&quot;,&quot;https://docker.mirrors.ustc.edu.cn&quot;,&quot;https://hub-mirror.c.163.com&quot;,&quot;http://f1361db2.m.daocloud.io&quot;],
   &quot;insecure-registries&quot;:[&quot;172.25.4.41:5000&quot;],  # 个人仓库地址，可不配
   &quot;hosts&quot;: [&quot;tcp://0.0.0.0:2376&quot;,&quot;unix:///var/run/docker.sock&quot;]   # 测试允许tcp连接，比如IDEA直接连接
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h4 id="dive分析工具" tabindex="-1"><a class="header-anchor" href="#dive分析工具" aria-hidden="true">#</a> dive分析工具</h4>
<p>dive是镜像构建分析工具，有效查看你的镜像构建浪费的空间</p>
<p>::: details dev 项目地址，常用指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 项目地址
https://github.com/wagoodman/dive

# 常用指令
dive &lt;your-image-tag&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例：</h2>
<h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySql</h3>
<p>::: details mysql 相关指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># docker mysql 将数据存储在本地目录
docker run -d -e MYSQL_ROOT_PASSWORD=admin --name mysql \ 
-v /data/mysql/data:/var/lib/mysql 
-v /data/mysql/my.cnf:/etc/mysql/my.cnf 可选指定配置文件
-p 3306:3306 mysql 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> Elasticsearch</h3>
<p>::: details Elasticsearch 相关指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 拉取elasticsearch镜像
docker pull elasticsearch:7.6.2

# 修改虚拟内存区域大小，否则会因为过小而无法启动
sysctl -w vm.max_map_count=262144

# 使用如下命令启动Elasticsearch服务
docker run -p 9200:9200 -p 9300:9300 --name elasticsearch \
-e &quot;discovery.type=single-node&quot; \
-e &quot;cluster.name=elasticsearch&quot; \
-v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \
-d elasticsearch:7.6.2

# 启动时会发现/usr/share/elasticsearch/data目录没有访问权限，只需要修改/mydata/elasticsearch/data目录的权限，再重新启动即可
chmod 777 /mydata/elasticsearch/data/

# 安装中文分词器IKAnalyzer，并重新启动
docker exec -it elasticsearch /bin/bash

#此命令需要在容器中运行，如果成功，后面两个则不需要，直接重启容器即可
elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.6.2/elasticsearch-analysis-ik-7.6.2.zip

# 容器中直接下载安装可能会报错，注意版本要保持一致，可以在宿主机下载后复制到容器中，
docker cp /mydata/elasticsearch/elasticsearch-analysis-ik-7.6.2.zip elasticsearch:/usr/share/elasticsearch

# 安装中文分词器
elasticsearch-plugin install /usr/share/elasticsearch/elasticsearch-analysis-ik-7.6.2.zip

docker restart elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana" aria-hidden="true">#</a> Kibana</h3>
<p>::: details Kibana 相关指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 下载镜像
docker pull kibana:7.6.2

# 启动服务
docker run --name kibana -p 5601:5601 \
--restart=always \
--link elasticsearch:es \
-e &quot;elasticsearch.hosts=http://es:9200&quot; \
-d kibana:7.6.2

# 将配置文件服务拷贝出来
sudo docker container cp kibana:/usr/share/kibana/config/ /mydata/kibana/

# 末尾添加 i18n.locale: zh-CN，可以启动中文
vi /mydata/kibana/kibana.yml

# 删除容器，添加参数，重启一次
-v /mydata/kibana:/usr/share/kibana/config

# 开启防火墙
firewall-cmd --zone=public --add-port=5601/tcp --permanent
firewall-cmd --reload

# 访问地址
访问地址进行测试：http://192.168.3.101:5601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details  nginx 代理 kibana</p>
<ul>
<li>kabana.yml</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>server.name: kibana
server.host: &quot;0&quot;
server.basePath: &quot;/kibana&quot;
server.rewriteBasePath: true
elasticsearch.hosts: [ &quot;http://elasticsearch:9200&quot; ]
xpack.monitoring.ui.container.elasticsearch.enabled: true
i18n.locale: &quot;zh-CN&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>nginx.conf</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>server{
	listen       80;
	server_name  localhost;
	location /kibana {
 		proxy_pass http://172.26.11.142:5601;
 	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer" aria-hidden="true">#</a> portainer</h3>
<p>docker图形化工具，内置界面简单明了，常规的关于docker状态，容器、镜像的管理，日志查看都可以在图形化界面操作，减少指令</p>
<p>::: details portainer 相关指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 下载镜像
docker pull portainer/portainer

# 启动容器
docker run -p 9000:9000 -p 8000:8000 --name portainer \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /mydata/portainer/data:/data \
-v /mydata/portainer/public:/public \	# 中文汉化
-d portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中文汉化，下载插件，<a href="https://pan.baidu.com/s/13ra6jXHR_7vajLLlf5GVEw" target="_blank" rel="noopener noreferrer">百度云</a>，提取码：<code v-pre>nzue</code></p>
<p>下载后解压上传到 <code v-pre>mydata/portainer/public</code>目录下，<code v-pre>unzip</code>解压，如果启动报错的，请找一下最新版的汉化包，重启解压后覆盖public文件夹，或者启动参数去除链接宿主机汉化那一步，启动原版即可</p>
<p>:::</p>
<h3 id="registry" tabindex="-1"><a class="header-anchor" href="#registry" aria-hidden="true">#</a> Registry</h3>
<p>::: details registry 仓库相关指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>docker pull registry	# 拉取最新 registry 镜像
docker run --name registry \
-v /opt/registry:/var/lib/registry \
-p 5000:5000 --restart=always \
-d registry:latest

# 修改 daemon.js，使其信任该仓库，添加下列内容，需要重启docker生效
&quot;insecure-registries&quot;: [&quot;ip:5000&quot;]

git tag images_before:version images_new:version # 将需要推送的镜像重命名
git tag push ip_addr:5000/images_new:version # 推送镜像到仓库

# http://ip_add:5000/v2/ 访问验证
# http://ip_add:5000/v2/_catalog 查看镜像
# http://ip_add:5000/v2/image_name/tags/list 查看指定镜像
# 服务器指令查看前面带 curl -XGET 即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>docker run  --name nginx -m 200m -p 80:80 \
-v /docker-work/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /docker-work/nginx/logs:/var/log/nginx \
-v /docker-work/nginx/html:/usr/share/nginx/html \
-v /docker-work/nginx/conf:/etc/nginx/conf.d \
-e TZ=Asia/Shanghai \
--privileged=true -d nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="其他-1" tabindex="-1"><a class="header-anchor" href="#其他-1" aria-hidden="true">#</a> 其他</h2>
<p>::: details docker迁移默认目录</p>
<p>docker 默认保存目录在 <code v-pre>/var/lib/docker</code>，随着拉取镜像镜像、构建的容器增加，内存不够，就会导致服务启动新的镜像</p>
<p><a href="https://www.cnblogs.com/insist-forever/p/11739207.html" target="_blank" rel="noopener noreferrer">参考1</a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 挂载外置磁盘 mount 挂载的磁盘 需要挂载的目录
mount dev/vdb /DATA 

# 先停止docker服务，在挂载的磁盘目录创建一个docker保存的目录 /DATA/docker
mkdir /DATA/docker

# 迁移/var/lib/docker目录下面的文件到 /home/docker/lib
rsync -r -avz /var/lib/docker /DATA/docker/lib/

# 修改配置文件，（同步的时候把父文件夹一并同步过来，实际上的目录应在 /home/docker/lib/docker ）
vi /usr/lib/systemd/system/docker.service

[Service]
ExecStart=
ExecStart=/usr/bin/dockerd --graph=/DATA/docker/lib/docker

# 重新加载docker
systemctl disable docker
systemctl enable docker
systemctl daemon-reload
systemctl restart docker

# 查看配置是否修改
docker info
Docker Root Dir: /DATA/docker/lib/docker


# 第二种方法，停止docker服务，迁移目录，让后建立软连接，重启docker
ln -s /home/docker /var/lib/docker
systemctl start docker
# 去除软链接，切换到该目录
rm -rf ./docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details IDEA连接虚拟机docker</p>
<p>IDEA直接连接虚拟机docker，本地即可执行打包构建，docker默认通讯方式只支持本地形式调用，不支持TCP远程，需要修改配置文件实现</p>
<ul>
<li>方法一（推荐）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># sudo vim /etc/docker/daemon.js    没有新建

{
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;registry-mirrors&quot;: [&quot;https://kn0t2bca.mirror.aliyuncs.com&quot;],
  &quot;hosts&quot;: [&quot;tcp://0.0.0.0:2376&quot;,&quot;unix:///var/run/docker.sock&quot;]				# 支持本地和tcp调用
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方法二</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># sudo vim /lib/systemd/system/docker.service

# 在ExecStart配置文件的后面追加  -H tcp://0.0.0.0:2376 即可，
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载 <code v-pre>daemon.js</code>：<code v-pre>systemctl daemon-reload</code></p>
<p>重启docker：<code v-pre>systemctl start docker</code></p>
<p>查看端口是否开放：<code v-pre>netstat -tulp | grep 2376</code></p>
<ul>
<li>IDEA连接验证</li>
</ul>
<p>settings --&gt; Build, Execution, Deployment --&gt; docker ： TCP socket， Engine API URL输入 <code v-pre>tcp://192.168.40.100:2376</code>，虚拟机的ip:设置的端口，软件会自动识别，</p>
<p>下方出现 <code v-pre>Connection successful</code>说明连接成功，下方的Service拓展栏里可以查看docker的镜像、容器等，本地的工程的 <code v-pre>Dockerfile</code>也可以愉快的进行build镜像了</p>
<p>:::</p>
<p>::: 备份镜像和导入镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 备份镜像
while read img; do
	echo $img
	file=&quot;${img/\//-}&quot;
	sudo docker save --output $file.tar $img
done &lt; images.list

# 导入镜像
while read img; do
	echo $img
	file=&quot;${img/\//-}&quot;
	docker load &lt; $file.tar
done &lt; images.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li>批量清理临时镜像文件</li>
</ul>
<p><code v-pre>docker rmi $(docker images -q -f dangling=true)</code></p>
<ul>
<li>清理docker系统中的无用数据（停止的容器、无用的网络和挂在卷、临时镜像、创建镜像缓存）</li>
</ul>
<p><code v-pre>docker system prune --volumes -f </code></p>
</div></template>


