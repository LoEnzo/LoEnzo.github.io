<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h2 id="docker容器相关" tabindex="-1"><a class="header-anchor" href="#docker容器相关" aria-hidden="true">#</a> Docker容器相关</h2>
<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3>
<p><strong>Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口</strong>。它是目前最流行的 Linux 容器解决方案。Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情</p>
<h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3>
<p>Dockerfile 是拿来构建自定义镜像的，并没有直接生成容器。只是可以在运行镜像时运行容器而已，若是想使用这个镜像的话还需要使用docker run命令来运行这个镜像，从而生成运行一个容器</p>
<h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h3>
<p>docker-compose.yml是用来编排项目的，里面包含使用各种镜像创建的容器服务，使用的镜像可以是网络上的，也可以是根据使用Dockerfile文件来build生成的镜像，相当于是把上一步的这个工作给做了</p>
<p>docker-compose可以在单个服务器上创建多个容器，多个副本</p>
<h3 id="docker-swarm" tabindex="-1"><a class="header-anchor" href="#docker-swarm" aria-hidden="true">#</a> Docker Swarm</h3>
<p>Docker Swarm 是 Docker 的集群管理工具。它将 Docker 主机池转变为单个虚拟 Docker 主机。 Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机</p>
<p>docker swarm可以在多个服务器创建多个容器，多个副本，实现集群，负载均衡， 不过现在主要被Kubernetes替代</p>
<h3 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> Kubernetes</h3>
<p>google基于自己的borg开发的容器编排工具，目前主流，能实现docker swarm能实现的功能，且其他功能更加强大</p>
<h3 id="docker容器和传统虚拟机的区别" tabindex="-1"><a class="header-anchor" href="#docker容器和传统虚拟机的区别" aria-hidden="true">#</a> Docker容器和传统虚拟机的区别</h3>
<p>容器是在<strong>操作系统层面</strong>上实现虚拟化，直接复用本地主机的操作系统，而传统方式则是在<strong>硬件层面</strong>实现</p>
<p>容器</p>
<p><img src="@source/blogs/OperationMaintenance/images/DockerMore/docker-containerized-and-vm-transparent-bg.png" alt="docker-containerized-and-vm-transparent-bg"></p>
<h2 id="containerd" tabindex="-1"><a class="header-anchor" href="#containerd" aria-hidden="true">#</a> containerd</h2>
<h3 id="docker-和-contraierd-简单说明" tabindex="-1"><a class="header-anchor" href="#docker-和-contraierd-简单说明" aria-hidden="true">#</a> docker 和 contraierd 简单说明</h3>
<p>docker 由 docker-client, dockerd, containerd, docker-shim, runc组成，所以containerd是docker的基础组件之一</p>
<p>从k8s的角度看，可以选择 containerd 或 docker 作为运行时组件：其中 containerd 调用链更短，组件更少，更稳定，占用节点资源更少。所以k8s后来的版本开始默认使用 containerd</p>
<p>containerd 相比于docker , 多了 namespace 概念，每个 image 和 container 都会在各自的namespace下可见。</p>
<p>docker 作为 k8s 容器运行时，调用关系为：<code v-pre>kubelet --&gt; dockershim （在 kubelet 进程中） --&gt; dockerd --&gt; containerd</code></p>
<p>containerd 作为 k8s 容器运行时，调用关系为：<code v-pre>kubelet --&gt; cri plugin（在 containerd 进程中） --&gt; containerd</code></p>
<p>containerd 相比 docker, 多了 namespace 概念，每个image 和 container 都会在对应的 namespace 下可见，k8s 会使用 k8a.io 作为命名空间，<code v-pre>crictl images list -n k8s.io</code></p>
<h3 id="相关执行说明" tabindex="-1"><a class="header-anchor" href="#相关执行说明" aria-hidden="true">#</a> 相关执行说明</h3>
<ul>
<li>
<p>ctr 是 containerd 的一个客户端工具。</p>
</li>
<li>
<p>crictl 是 CRI 兼容的容器运行时命令行接口，可以使用它来检查和调试 k8s 节点上的容器运行时和应用程序。</p>
</li>
<li>
<p>ctr -v 输出的是 containerd 的版本，crictl -v 输出的是当前 k8s 的版本</p>
</li>
</ul>
<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>docker</th>
<th>ctr（containerd）</th>
<th>crictl（kubernetes）</th>
</tr>
</thead>
<tbody>
<tr>
<td>命令</td>
<td>docker</td>
<td>ctr（containerd）</td>
<td>crictl（kubernetes）</td>
</tr>
<tr>
<td>查看运行的容器</td>
<td>docker ps</td>
<td>ctr task ls/ctr container ls</td>
<td>crictl ps</td>
</tr>
<tr>
<td>查看镜像</td>
<td>docker images</td>
<td>ctr image ls</td>
<td>crictl images</td>
</tr>
<tr>
<td>查看容器日志</td>
<td>docker logs</td>
<td>无</td>
<td>crictl logs</td>
</tr>
<tr>
<td>查看容器数据信息</td>
<td>docker inspect</td>
<td>ctr container info</td>
<td>crictl inspect</td>
</tr>
<tr>
<td>查看容器资源</td>
<td>docker stats</td>
<td>无</td>
<td>crictl stats</td>
</tr>
<tr>
<td>启动/关闭已有的容器</td>
<td>docker start/stop</td>
<td>ctr task start/kill</td>
<td>crictl start/stop</td>
</tr>
<tr>
<td>运行一个新的容器</td>
<td>docker run</td>
<td>ctr run</td>
<td>无（最小单元为pod）</td>
</tr>
<tr>
<td>修改镜像标签</td>
<td>docker tag</td>
<td>ctr image tag</td>
<td>无</td>
</tr>
<tr>
<td>创建一个新的容器</td>
<td>docker create</td>
<td>ctr container create</td>
<td>crictl create</td>
</tr>
<tr>
<td>导入镜像</td>
<td>docker load</td>
<td>ctr image import</td>
<td>无</td>
</tr>
<tr>
<td>导出镜像</td>
<td>docker save</td>
<td>ctr image export</td>
<td>无</td>
</tr>
<tr>
<td>删除容器</td>
<td>docker rm</td>
<td>ctr container rm</td>
<td>crictl rm</td>
</tr>
<tr>
<td>删除镜像</td>
<td>docker rmi</td>
<td>ctr image rm</td>
<td>crictl rmi</td>
</tr>
<tr>
<td>拉取镜像</td>
<td>docker pull</td>
<td>ctr image pull</td>
<td>ctictl pull</td>
</tr>
<tr>
<td>推送镜像</td>
<td>docker push</td>
<td>ctr image push</td>
<td>无</td>
</tr>
<tr>
<td>在容器内部执行命令</td>
<td>docker exec</td>
<td>无</td>
<td>crictl exec</td>
</tr>
</tbody>
</table>
<h2 id="k8s-相关" tabindex="-1"><a class="header-anchor" href="#k8s-相关" aria-hidden="true">#</a> K8s 相关</h2>
<ul>
<li>获取 apiserver 地址</li>
</ul>
<p><code v-pre>cat ～/.kube/config | grep server: | awk '{print $2}'</code></p>
<ul>
<li>获取 token</li>
</ul>
<p><code v-pre>kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep kubepi-user | awk '{print $1}') | grep token: | awk '{print $2}'</code></p>
<ul>
<li>获取 config ：默认路径 <code v-pre>～/.kube/config</code></li>
</ul>
<h2 id="工具推荐" tabindex="-1"><a class="header-anchor" href="#工具推荐" aria-hidden="true">#</a> 工具推荐：</h2>
<p><strong>dive</strong></p>
<p>A tool for exploring a docker image, layer contents, and discovering ways to shrink the size of your Docker/OCI image.
https://github.com/wagoodman/dive</p>
<p><strong>ctop</strong></p>
<p>容器监控工具
https://github.com/bcicen/ctop</p>
<p><strong>lazydocker</strong></p>
<p>A simple terminal UI for both docker and docker-compose, written in Go with the gocui library.
https://github.com/jesseduffield/lazydocker</p>
</div></template>


