<template><div><p>::: tip</p>
<p><strong>Dockerfile</strong>是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取<code v-pre>Dockerfile</code>中的指令自动生成映像。</p>
<p>:::</p>
<!-- more -->
<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要" aria-hidden="true">#</a> 概要</h2>
<p><strong>相关链接：</strong></p>
<p><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker 官网</a></p>
<p><a href="https://github.com/docker/docker-ce" target="_blank" rel="noopener noreferrer">Github Docker 源码</a></p>
<p><a href="https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY" target="_blank" rel="noopener noreferrer">Docker官网命令文档</a></p>
<p><a href="http://www.dockerinfo.net/document" target="_blank" rel="noopener noreferrer">Docker中文文档</a></p>
<p><a href="https://docs.docker.com/compose/compose-file/compose-file-v3/" target="_blank" rel="noopener noreferrer">docker-compose.yaml 官方说明</a></p>
<p><a href="https://yeasy.gitbook.io/docker_practice/os/alpine" target="_blank" rel="noopener noreferrer">Alpine</a></p>
<p><a href="https://cr.console.aliyun.com/cn-hangzhou/instances" target="_blank" rel="noopener noreferrer">阿里云镜像容器</a></p>
<p><strong>简述：</strong></p>
<p>最开始我们启动一个docker容器，拉取镜像，然后通过 <code v-pre>run</code> 命令，指定一些参数（暴露端口，环境变量，容器名称，挂载路径等）来启动容器，比较麻烦，且不容易记住那些携带的参数指令；后面引入Dockerfile，通过文件的形式，构建自己的镜像，通过docker build, run等命令操作容器；但如果是docker启动了一个微服务架构的业务，有很多个容器，每个容器都需要手动启停，就显得特别繁琐。docker-compose用于高效管理这些容器，是用于定义和运行多容器的工具</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<ul>
<li><a href="https://github.com/docker/compose/releases" target="_blank" rel="noopener noreferrer">docker-compose 项目地址</a></li>
</ul>
<p>直接下载最新稳定版<code v-pre>sudo curl -L &quot;https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose</code>，添加到<code v-pre>/user/local/bin</code>，添加可执行权限<code v-pre>sudo chmod +x /usr/local/bin/docker-compose</code></p>
<p>也可以通过<code v-pre>yum</code>、<code v-pre>apt</code>等直接搜索安装，</p>
<p><strong>验证</strong>：<code v-pre>docker-compose --version</code></p>
<ul>
<li><a href="https://raw.githubusercontent.com/docker/compose" target="_blank" rel="noopener noreferrer">docker-compose命令补全工具</a></li>
</ul>
<p>直接下载，根据项目选择最新的版本号即可：<code v-pre>sudo curl -L https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose</code></p>
<p>重启即可生效</p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>一般分为四部分，第一条指令必须是<code v-pre>FROM</code>。一个声明以<code v-pre>＃</code>字符开头则被视为注释。可以在Docker文件中使用<code v-pre>RUN</code>，<code v-pre>CMD</code>，<code v-pre>FROM</code>，<code v-pre>EXPOSE</code>，<code v-pre>ENV</code>等指令。</p>
<ul>
<li>service：服务模块，可多个</li>
<li>networks：网络模块，负责多个容器之间的项目通信</li>
<li>镜像操作指令</li>
<li>容器启动时执行指令</li>
</ul>
<h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2>
<p>常用指令通过<code v-pre>docker-compose --help</code>查看介绍，docker-compose 指令以 <code v-pre>docker-compose</code>开头，大部分指令和docker保持一致</p>
<p>注意：下面格式中的<code v-pre>nginx</code>代表参数为 服务名，要对哪个服务做对应的操作</p>
<table>
<thead>
<tr>
<th>指令</th>
<th>格式</th>
<th>说明</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>up</strong></td>
<td><code v-pre>docker-compose up -d .yaml文件</code></td>
<td>构建、启动容器</td>
<td>-d：标识后台运行</td>
</tr>
<tr>
<td><strong>build</strong></td>
<td><code v-pre>docker-compose build .yaml文件</code></td>
<td>构建或重新构建容器</td>
<td></td>
</tr>
<tr>
<td><strong>exec</strong></td>
<td><code v-pre>docker-compose exec nginx bash</code></td>
<td>进入到容器中</td>
<td></td>
</tr>
<tr>
<td><strong>ps</strong></td>
<td><code v-pre>docker-compose ps</code></td>
<td>查看运行的容器</td>
<td></td>
</tr>
<tr>
<td><strong>logs</strong></td>
<td><code v-pre>docker-compose logs -f nginx</code></td>
<td>查看日志</td>
<td>-f : 滚动查看日志</td>
</tr>
<tr>
<td><strong>config</strong></td>
<td><code v-pre>docker-compose config -q</code></td>
<td>检查<code v-pre>docker-compose.yaml</code>语法是否正确</td>
<td></td>
</tr>
<tr>
<td><strong>rm</strong></td>
<td><code v-pre>docker-compose rm nginx</code></td>
<td>删除容器</td>
<td></td>
</tr>
<tr>
<td><strong>start</strong></td>
<td><code v-pre>docker-compose start nginx</code></td>
<td>启动容器</td>
<td></td>
</tr>
<tr>
<td><strong>stop</strong></td>
<td><code v-pre>docker-compose stop nginx</code></td>
<td>停止容器</td>
<td></td>
</tr>
<tr>
<td><strong>restart</strong></td>
<td><code v-pre>docker-compose restart nginx</code></td>
<td>重启容器</td>
<td></td>
</tr>
<tr>
<td><strong>kill</strong></td>
<td><code v-pre>docker-compose kill nignx</code></td>
<td>通过发送 SIGKILL 信号来停止指定服务的容器</td>
<td></td>
</tr>
<tr>
<td><strong>pause</strong></td>
<td><code v-pre>docker-compose pause nginx</code></td>
<td>暂停容器</td>
<td></td>
</tr>
<tr>
<td><strong>unpause</strong></td>
<td><code v-pre>docker-compose unpause nginx</code></td>
<td>恢复容器</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="docker-compose-yaml语法" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml语法" aria-hidden="true">#</a> docker-compose.yaml语法</h2>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> <strong>version</strong>：</h3>
<p>指定 <code v-pre>docker-compose.yml</code> 文件的写法格式</p>
<h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> <strong>services</strong>：</h3>
<p>多个容器集合</p>
<h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <strong>build</strong>：</h3>
<p>配置构建时，Compose 会利用它自动构建镜像，该值可以是一个路径，也可以是一个对象，用于指定 Dockerfile 参数</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>build: ./dir
---------------
build:
    context: ./dir
    dockerfile: Dockerfile
    args:
        buildno: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> <strong>command</strong>：</h3>
<p>覆盖容器启动后默认执行的命令</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>command: bundle exec thin -p 3000
----------------------------------
command: [bundle,exec,thin,-p,3000]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> <strong>image</strong>：</h3>
<p>指定服务所使用的镜像</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>image: java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> expose</h3>
<p>暴露端口，但不映射到宿主机，只被连接的服务访问，仅可以指定内部端口为参数</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>expose:
- &quot;3000&quot;
- &quot;8000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ports" tabindex="-1"><a class="header-anchor" href="#ports" aria-hidden="true">#</a> <strong>ports</strong>：</h3>
<p>对外暴露的端口定义，和 expose 对应</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>ports:   # 暴露端口信息  - &quot;宿主机端口:容器暴露端口&quot;
- &quot;8763:8763&quot;
- &quot;8763:8763&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> <strong>environment</strong>：</h3>
<p>环境变量设置，可使用数组或字典两种方式</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>environment:
  RACK_ENV: development
  SHOW: 'true'
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SHOW=true
  - SESSION_SECRET
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="depends-on" tabindex="-1"><a class="header-anchor" href="#depends-on" aria-hidden="true">#</a> <strong>depends_on</strong></h3>
<p>服务之前的依赖关系，启动服务时，会先启动被依赖的服务</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>web:
  depends_on:
    - redis
    - mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> <strong>networks</strong>：</h3>
<p>网络模块，可以用于指定服务使用的网络，使用共同网络的容器可以相互通信</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>networks:
   my_network:
      - &quot;bridge&quot;
# host		主机模式，与宿主机共享网络，使用宿主机的ip和端口
# bridge	桥接模式，分配独立的ip，容器连接到一个docker0虚拟网桥，通过docker0网桥与宿主机通信
# none 		孤岛模式，该模式关闭了容器的网络功能
# container 和一个指定的容器共享IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> <strong>links</strong>：</h3>
<p>连接到其他服务的容器</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>web:
  links:
   - db				# 服务名
   - db:database	# 服务名: 别名
   - redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> <strong>external_links</strong>：</h3>
<p>连接到<code v-pre>docker-compose.yml</code>外部的容器，甚至并非Compose管理的容器，特别是提供共享或公共服务的容器。格式跟links类似</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>external_links:
 - redis_1
 - project_db_1:mysql		# 服务名:别名
 - project_db_1:postgresql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h3>
<p>卷挂载路径设置。可以设置宿主机路径 （<code v-pre>HOST:CONTAINER</code>） ，也可指定访问模式 （<code v-pre>HOST:CONTAINER:ro</code>），只读（ro），读写（rw），读写（rw）</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>volumes:
  - /var/lib/mysql					# 指令容器内的一个路径，让容器创建
  - /opt/data:/var/lib/mysql		# 宿主机路径：容器路径
  - ./cache:/tmp/cache				# 相对于docker-compose.yml路径的宿主机路径：容器路径
  - ~/configs:/etc/configs/:ro		# 相对应当前用户的宿主机路径：容器路径：读写权限
  - datavolume:/var/lib/mysql		# 指定一个存在的卷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="env-file" tabindex="-1"><a class="header-anchor" href="#env-file" aria-hidden="true">#</a> <strong>env_file</strong>：</h3>
<p>从文件中获取环境变量，可指定一个文件路径或路径列表</p>
<p>如果通过 <code v-pre>docker-compose -f FILE</code> 指定了Compose文件，那么env_file中的路径是Compose文件所在目录的相对路径。使用environment指定的环境变量会覆盖env_file指定的环境变量</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>env_file: .env
--------------------------------
env_file:
  - ./common.env			# 共用
  - ./apps/web.env			# web用
  - /opt/secrets.env		# 密码用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volumes-from" tabindex="-1"><a class="header-anchor" href="#volumes-from" aria-hidden="true">#</a> volumes_from</h3>
<p>从另一个服务或容器挂载卷。可指定只读（ro）或读写（rw），默认是读写（rw）</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>volumes_from:
 - service_name
 - service_name:ro
 - container:container_name
 - container:container_name:rw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dns</strong></p>
<p>配置dns服务器。可以是一个值，也可以是一个列表</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>dns: 8.8.8.8
dns:
  - 8.8.8.8
  - 9.9.9.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dns-search" tabindex="-1"><a class="header-anchor" href="#dns-search" aria-hidden="true">#</a> dns_search</h3>
<p>配置DNS的搜索域名，可以是一个值，也可以是一个列表</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code>dns_search: example.com
dns_search:
  - dc1.example.com
  - dc2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3>
<p>基于已有的服务进行扩展。例如我们已经有了一个 webapp 服务，模板文件为<code v-pre>common.yml</code>，<code v-pre>development.yml</code>能继承<code v-pre>common.yml</code>中的所有服务和环境变量</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># common.yml
webapp:
build: ./webapp
environment:
 - DEBUG=false
 - SEND_EMAILS=false
 
---------------------
# development.yml
web:
extends:
file: common.yml
service: webapp
ports:
 - &quot;8000:8000&quot;
links:
 - db
environment:
- DEBUG=true
db:
image: postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<p>更新容器：</p>
<ul>
<li>当配置文件变更时，<code v-pre>docker-compose up</code>更新容器</li>
<li>会删除旧容器，创建新容器，生成新的ip，所有指向旧容器的连接会关闭，重新指向新容器</li>
</ul>
</div></template>


