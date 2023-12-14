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
<p><a href="https://yeasy.gitbook.io/docker_practice/os/alpine" target="_blank" rel="noopener noreferrer">Alpine</a></p>
<p><a href="https://cr.console.aliyun.com/cn-hangzhou/instances" target="_blank" rel="noopener noreferrer">阿里云镜像容器</a></p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>一般分为四部分，第一条指令必须是<code v-pre>FROM</code>。一个声明以<code v-pre>＃</code>字符开头则被视为注释。可以在Docker文件中使用<code v-pre>RUN</code>，<code v-pre>CMD</code>，<code v-pre>FROM</code>，<code v-pre>EXPOSE</code>，<code v-pre>ENV</code>等指令。</p>
<ul>
<li>基础镜像信息</li>
<li>维护者信息</li>
<li>镜像操作指令</li>
<li>容器启动时执行指令</li>
</ul>
<h2 id="指令说明" tabindex="-1"><a class="header-anchor" href="#指令说明" aria-hidden="true">#</a> 指令说明</h2>
<table>
<thead>
<tr>
<th>指令</th>
<th>格式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>FROM</strong></td>
<td><code v-pre>FROM &lt;image&gt;</code> <br><code v-pre>FROM &lt;image&gt;:&lt;tag&gt;</code> <br><code v-pre>FROM &lt;image&gt; @ &lt;digest&gt;</code></td>
<td>指定基础镜像，必须为第一个命令，<br/>tag，digest为可选的，不写会拉取latest版本的基础镜像</td>
</tr>
<tr>
<td><strong>MAINTAINER</strong></td>
<td><code v-pre>MAINTAINER &lt;name&gt;</code> <br><code v-pre>MAINTAINER &lt;email&gt;</code></td>
<td>维护者信息</td>
</tr>
<tr>
<td><strong>LABEL</strong></td>
<td><code v-pre>LABEL &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; ...</code></td>
<td>用于为镜像添加元数据</td>
</tr>
<tr>
<td><strong>ENV</strong></td>
<td><code v-pre>ENV &lt;key&gt; &lt;value&gt;</code></td>
<td>设置环境变量</td>
</tr>
<tr>
<td><strong>RUN</strong></td>
<td><code v-pre>RUN &lt;command&gt;</code><br><code v-pre>RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code></td>
<td>构建镜像时执行的命令</td>
</tr>
<tr>
<td><strong>ADD</strong></td>
<td><code v-pre>ADD &lt;src&gt;... &lt;dest&gt;</code><br><code v-pre>ADD [&quot;&lt;src&gt;&quot;,... &quot;&lt;dest&gt;&quot;] </code></td>
<td>将本地文件添加到容器中，<br>tar类型文件会自动解压(网络压缩资源不会被解压)，<br>可以访问网络资源，类似wget<br><code v-pre>ADD [&quot;&lt;src&gt;&quot;,... &quot;&lt;dest&gt;&quot;] </code>用于支持包含空格的路径</td>
</tr>
<tr>
<td><strong>COPY</strong></td>
<td><code v-pre>COPY &lt;src&gt;... &lt;dest&gt;</code></td>
<td>功能类似ADD，但是是不会自动解压文件，也不能访问网络资源</td>
</tr>
<tr>
<td><strong>CMD</strong></td>
<td><code v-pre>CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code></td>
<td>构建容器后调用，也就是在容器启动时才进行调用。</td>
</tr>
<tr>
<td><strong>ENTRYPOINT</strong></td>
<td><code v-pre>ENTRYPOINT [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code></td>
<td>配置容器，使其可执行化。配合CMD可省去&quot;application&quot;，只使用参数</td>
</tr>
<tr>
<td><strong>EXPOSE</strong></td>
<td><code v-pre>EXPOSE &lt;port&gt; [&lt;port&gt;...]</code></td>
<td>指定于外界交互的端口</td>
</tr>
<tr>
<td><strong>VOLUME</strong></td>
<td><code v-pre>VOLUME [&quot;/path/to/dir&quot;]</code></td>
<td>用于指定持久化目录</td>
</tr>
<tr>
<td><strong>WORKDIR</strong></td>
<td><code v-pre>WORKDIR /path/to/workdir</code></td>
<td>工作目录，类似于cd命令</td>
</tr>
<tr>
<td><strong>USER</strong></td>
<td><code v-pre>USER user</code><br/><code v-pre>USER user:group</code><br/><code v-pre>USER uid</code><br/><code v-pre>USER uid:gid</code><br/><code v-pre>USER user:gid</code><br/><code v-pre>USER uid:group</code></td>
<td>指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户<br/>使用USER指定用户时，可以使用用户名、UID或GID，或是两者的组合<br/>当服务不需要管理员权限时，可以通过该命令指定运行用户，并且可以在之前创建所需要的用户</td>
</tr>
<tr>
<td><strong>ARG</strong></td>
<td><code v-pre>ARG &lt;name&gt;[=&lt;default value&gt;]</code></td>
<td>用于指定传递给构建运行时的变量</td>
</tr>
<tr>
<td><strong>ONBUILD</strong></td>
<td><code v-pre>ONBUILD [INSTRUCTION]</code></td>
<td>用于设置镜像触发器</td>
</tr>
</tbody>
</table>
<h2 id="指令示例" tabindex="-1"><a class="header-anchor" href="#指令示例" aria-hidden="true">#</a> 指令示例</h2>
<h3 id="from" tabindex="-1"><a class="header-anchor" href="#from" aria-hidden="true">#</a> FROM</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
　　FROM &lt;image&gt;
　　FROM &lt;image&gt;:&lt;tag&gt;
　　FROM &lt;image&gt;@&lt;digest&gt;
# 示例：
　　FROM mysql:5.6
# 注：
　　# tag或digest是可选的，如果不使用这两个值时，会使用latest版本的基础镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maintainer" tabindex="-1"><a class="header-anchor" href="#maintainer" aria-hidden="true">#</a> MAINTAINER</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    MAINTAINER &lt;name&gt;
# 示例：
    MAINTAINER Jasper Xu
    MAINTAINER sorex@163.com
    MAINTAINER Jasper Xu &lt;sorex@163.com&gt;
# 注：
	# maintainer已过时，通过label设置元数据
	# LABEL maintainer=&quot;loenzo&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> LABEL</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
	LABEL &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; ...
# 示例：
	LABEL version=&quot;1.0&quot; description=&quot;这是一个Web服务器&quot; by=&quot;IT笔录&quot;
# 注：
　　# 使用LABEL指定元数据时，一条LABEL指定可以指定一或多条元数据，指定多条元数据时不同元数据之间通过空格分隔。
　　# 推荐将所有的元数据通过一条LABEL指令指定，以免生成过多的中间镜像。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> ENV</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
	# &lt;key&gt;之后的所有内容均会被视为其&lt;value&gt;的组成部分，因此，一次只能设置一个变量
    ENV &lt;key&gt; &lt;value&gt;  
    # 可以设置多个变量，每个变量为一个&quot;&lt;key&gt;=&lt;value&gt;&quot;的键值对，
    # 如果&lt;key&gt;中包含空格，可以使用\来进行转义，也可以通过&quot;&quot;来进行标示；另外，反斜线也可以用于续行
    ENV &lt;key&gt;=&lt;value&gt; ...  
# 示例：
    ENV myName John Doe
    ENV myDog Rex The Dog
    ENV myCat=fluffy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> RUN</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># RUN用于在镜像容器中执行命令，其有以下两种命令执行方式：
# shell执行
# 格式：
    RUN &lt;command&gt;
# exec执行
# 格式：
    RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]
# 示例：
    RUN [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]
    RUN apk update
    RUN [&quot;/etc/execfile&quot;, &quot;arg1&quot;, &quot;arg1&quot;]
# 注：　　
	# RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。
	# 如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> ADD</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    ADD &lt;src&gt;... &lt;dest&gt;
    ADD [&quot;&lt;src&gt;&quot;,... &quot;&lt;dest&gt;&quot;]  # 用于支持包含空格的路径
# 示例：
    ADD hom* /mydir/          # 添加所有以&quot;hom&quot;开头的文件
    ADD hom?.txt /mydir/      # ? 替代一个单字符,例如：&quot;home.txt&quot;
    ADD test relativeDir/     # 添加 &quot;test&quot; 到 `WORKDIR`/relativeDir/
    ADD test /absoluteDir/    # 添加 &quot;test&quot; 到 /absoluteDir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> COPY</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 复制本地文件推荐使用COPY
# 格式：
    COPY &lt;src&gt;... &lt;dest&gt;
# 示例：
    COPY hom* /mydir/          # 添加所有以&quot;hom&quot;开头的文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;] (执行可执行文件，优先)
    CMD [&quot;param1&quot;,&quot;param2&quot;] (设置了ENTRYPOINT，则直接调用ENTRYPOINT添加参数)
    CMD command param1 param2 (执行shell内部命令)
# 示例：
    CMD echo &quot;This is a test.&quot; | wc -
    CMD [&quot;/usr/bin/wc&quot;,&quot;--help&quot;]
# 注： 　　
	# CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="entrypoint" tabindex="-1"><a class="header-anchor" href="#entrypoint" aria-hidden="true">#</a> ENTRYPOINT</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    ENTRYPOINT [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;] (可执行文件, 优先)
    ENTRYPOINT command param1 param2 (shell内部命令)
# 示例：
    FROM ubuntu
    ENTRYPOINT [&quot;top&quot;, &quot;-b&quot;]
    CMD [&quot;-c&quot;]
# 注：　　　
	# ENTRYPOINT与CMD非常类似，不同的是通过docker run执行的命令不会覆盖ENTRYPOINT
	# 而docker run命令中指定的任何参数，都会被当做参数再次传递给ENTRYPOINT
	# Dockerfile中只允许有一个ENTRYPOINT命令，多指定时会覆盖前面的设置，而只执行最后的ENTRYPOINT指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> EXPOSE</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    EXPOSE &lt;port&gt; [&lt;port&gt;...]
# 示例：
    EXPOSE 80 443
    EXPOSE 8080    
    EXPOSE 11211/tcp 11211/udp
# 注：　　
	# EXPOSE并不会让容器的端口访问到主机, 写再dockerfile里面可以让根据镜像创建容器的人知道需要暴露的端口
	# 要使其可访问，需要在docker run运行容器时通过-p来发布这些端口，或通过-P参数来发布EXPOSE导出的所有端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> VOLUME</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    VOLUME [&quot;/path/to/dir&quot;]
# 示例：
    VOLUME [&quot;/data&quot;]
    VOLUME [&quot;/var/www&quot;, &quot;/var/log/apache2&quot;, &quot;/etc/apache2&quot;
# 注：　　
	# 一个卷可以存在于一个或多个容器的指定目录，该目录可以绕过联合文件系统，并具有以下功能：
	# 1 卷可以容器间共享和重用
	# 2 容器并不一定要和其它容器共享卷
	# 3 修改卷后会立即生效
	# 4 对卷的修改不会对镜像产生影响
	# 5 卷会一直存在，直到没有任何容器在使用它
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> WORKDIR</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    WORKDIR /path/to/workdir
# 示例：
    WORKDIR /a  (这时工作目录为/a)
    WORKDIR b  (这时工作目录为/a/b)
    WORKDIR c  (这时工作目录为/a/b/c)
# 注：　　
	# 通过WORKDIR设置工作目录后，Dockerfile 中其后的命令RUN、CMD、ENTRYPOINT、ADD、COPY等命令都会在该目录下执行
	# 在使用docker run运行容器时，可以通过-w 参数覆盖构建时所设置的工作目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> USER</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式:　　
	USER user　　
	USER user:group　　
	USER uid　　
	USER uid:gid　　
	USER user:gid　　
	USER uid:group
# 示例：    　　
	USER www
# 注：
　　# 使用USER指定用户后，Dockerfile中其后的命令RUN、CMD、ENTRYPOINT都将使用该用户
　　# 镜像构建完成后，通过docker run运行容器时，可以通过-u参数来覆盖所指定的用户。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="arg" tabindex="-1"><a class="header-anchor" href="#arg" aria-hidden="true">#</a> ARG</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
    ARG &lt;name&gt;[=&lt;default value&gt;]
# 示例：
    ARG site
    ARG build_user=www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onbuild" tabindex="-1"><a class="header-anchor" href="#onbuild" aria-hidden="true">#</a> ONBUILD</h3>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 格式：
　　ONBUILD [INSTRUCTION]
# 示例：
　　ONBUILD ADD . /app/src
　　ONBUILD RUN /usr/local/bin/python-build --dir /app/src
# 注：
　　# 当所构建的镜像被用做其它镜像的基础镜像，该镜像中的触发器将会被钥触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通俗说明" tabindex="-1"><a class="header-anchor" href="#通俗说明" aria-hidden="true">#</a> 通俗说明</h2>
<p><img src="@source/blogs/OperationMaintenance/images/Dockerfile/image-20210805155627174.png" alt="image-20210805155627174"></p>
<h2 id="dockerfile示例" tabindex="-1"><a class="header-anchor" href="#dockerfile示例" aria-hidden="true">#</a> Dockerfile示例</h2>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># This my first nginx Dockerfile
# Version 1.0

# Base images 基础镜像
FROM centos

#MAINTAINER 维护者信息
MAINTAINER tianfeiyu 

#ENV 设置环境变量
ENV PATH /usr/local/nginx/sbin:$PATH

#ADD  文件放在当前目录下，拷过去会自动解压
ADD nginx-1.8.0.tar.gz /usr/local/  
ADD epel-release-latest-7.noarch.rpm /usr/local/  

#RUN 执行以下命令 
RUN rpm -ivh /usr/local/epel-release-latest-7.noarch.rpm
RUN yum install -y wget lftp gcc gcc-c++ make openssl-devel pcre-devel pcre &amp;&amp; yum clean all
RUN useradd -s /sbin/nologin -M www

#WORKDIR 相当于cd
WORKDIR /usr/local/nginx-1.8.0 

RUN ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-pcre &amp;&amp; make &amp;&amp; make install

RUN echo &quot;daemon off;&quot; &gt;&gt; /etc/nginx.conf

#EXPOSE 映射端口
EXPOSE 80

#CMD 运行以下命令
CMD [&quot;nginx&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details 其他示例</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 基础镜像
FROM debian:buster-slim

# maintainer已过时，通过label设置元数据
LABEL maintainer=&quot;jiangliu&quot;

# 指定工作目录
WORKDIR /usr/local

ENV LANG C.UTF-8
ENV JAVA_HOME /usr/local/jdk1.8.0_111
ENV PATH $JAVA_HOME/bin:$PATH

# 指定时区，针对基于Debian和CentOS的镜像，可以直接指定环境变量即可
ENV TZ Asia/Shanghai

ENV JAVA_OPTS &quot;&quot;
ENV JAVA_ARGS &quot;&quot;

# 其它镜像按此方法修改时区
# RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone

# 更换源
RUN echo 'deb http://mirrors.aliyun.com/debian/ buster main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib\n \
    deb http://mirrors.aliyun.com/debian-security buster/updates main\n \
    deb-src http://mirrors.aliyun.com/debian-security buster/updates main\n \
    deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\n \
    deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\n' \
    &gt; /etc/apt/sources.list 

RUN apt-get update

RUN apt-get install -y wget

# RUN wget -O jdk.tar.gz https://github.com/AdoptOpenJDK/openjdk8-upstream-binaries/releases/download/jdk8u265-b01/OpenJDK8U-jre_x64_linux_8u265b01.tar.gz \
# -- no-check-certificate

RUN wget -O jdk.tar.gz http://ftp.cqrd.x/software/RDTools/jdk/javase/8/jdk-8u111-linux-x64.tar.gz

RUN tar -xf jdk.tar.gz

RUN rm -fr jdk.tar.gz

# 复制文件到镜像中
COPY file-server-1.0-SNAPSHOT.jar /app.jar

# 容器启动执行入口
# java [options] -jar filename [args]
ENTRYPOINT java ${JAVA_OPTS} -jar /app.jar ${JAVA_ARGS}
# 声明容器提供服务的端口，方便配置映射
EXPOSE 8080

# 指定默认的参数
# CMD [&quot;&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details 整合run指令，优化后：</p>
<div class="language-docker line-numbers-mode" data-ext="docker"><pre v-pre class="language-docker"><code># 基础镜像
FROM debian:buster-slim

# maintainer已过时，通过label设置元数据
LABEL maintainer=&quot;jiangliu&quot;

# 指定工作目录
WORKDIR /usr/local

ENV LANG C.UTF-8
ENV JAVA_HOME /usr/local/jdk1.8.0_111
ENV PATH $JAVA_HOME/bin:$PATH

# 指定时区，针对基于Debian和CentOS的镜像，可以直接指定环境变量即可
ENV TZ Asia/Shanghai

# 其它镜像按此方法修改时区
# RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime &amp;&amp; echo ${TZ} &gt; /etc/timezone

# 合并所有的可执行脚本
RUN set -x \
    echo 'deb http://mirrors.aliyun.com/debian/ buster main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib\n \
    deb http://mirrors.aliyun.com/debian-security buster/updates main\n \
    deb-src http://mirrors.aliyun.com/debian-security buster/updates main\n \
    deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\n \
    deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\n \
    deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\n'  &gt; /etc/apt/sources.list \
    &amp;&amp; apt-get update \
    &amp;&amp; apt-get install -y wget \
    &amp;&amp; wget -O jdk.tar.gz http://ftp.cqrd.x/software/RDTools/jdk/javase/8/jdk-8u111-linux-x64.tar.gz \
    &amp;&amp; tar -xf jdk.tar.gz \
    &amp;&amp; rm -fr jdk.tar.gz \
    &amp;&amp; apt-get remove --purge --auto-remove -y wget \
    &amp;&amp; rm -rf /var/lib/apt/lists/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
</div></template>


