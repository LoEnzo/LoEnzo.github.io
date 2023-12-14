<template><div><p>::: tip</p>
<p><strong>k3s</strong>是rancher开源的一个Kubernetes发行版，从名字上就可以看出k3s相对k8s做了很多裁剪和优化，二进制程序不足50MB，占用资源更少，只需要512MB内存即可运行</p>
<p>:::</p>
<!-- more -->
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<ul>
<li>
<p><a href="https://docs.rancher.cn/docs/k3s/quick-start/_index" target="_blank" rel="noopener noreferrer">K3S Rancher官网文档</a></p>
</li>
<li>
<p><a href="https://zhuanlan.zhihu.com/p/125499493" target="_blank" rel="noopener noreferrer">轻量级Kubernetes k3s初探</a></p>
</li>
</ul>
<h2 id="k3s概述" tabindex="-1"><a class="header-anchor" href="#k3s概述" aria-hidden="true">#</a> K3s概述</h2>
<p>k3s是史上最轻量级Kubernetes，相比K8S少了5，主要裁剪了下面这5个功能，如果想学习k8s，而又不想折腾k8s的繁琐安装部署，完全可以使用k3s代替k8s，k3s包含了k8s的所有基础功能，而k8s附加功能其实大多数情况也用不到</p>
<ul>
<li>过时的功能和非默认功能</li>
<li>Alpha功能</li>
<li>内置的云提供商插件</li>
<li>内置的存储驱动</li>
<li>Docker</li>
</ul>
<p>相比K8s的优化</p>
<ul>
<li>使用内嵌轻量级数据库SQLite作为默认数据存储替代etcd，当然etcd仍然是支持的。</li>
<li>内置了local storage provider、service load balancer、helm controller、Traefik ingress controller，开箱即用。</li>
<li>所有Kubernetes控制平面组件如api-server、scheduler等封装成为一个精简二进制程序，控制平面只需要一个进程即可运行。</li>
<li>删除内置插件(比如cloudprovider插件和存储插件)。</li>
<li>减少外部依赖，操作系统只需要安装较新的内核以及支持cgroup即可，k3s安装包已经包含了containerd、Flannel、CoreDNS，非常方便地一键式安装，不需要额外安装Docker、Flannel等组件</li>
</ul>
<p>K3s使用场景：</p>
<ul>
<li>Edge</li>
<li>IoT</li>
<li>CI</li>
<li>ARM</li>
</ul>
<h2 id="k3s安装" tabindex="-1"><a class="header-anchor" href="#k3s安装" aria-hidden="true">#</a> K3s安装</h2>
<p>国内用户一键安装脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>K3s 服务将被配置为在节点重启后或进程崩溃或被杀死时自动重启。</li>
<li>将安装其他实用程序，包括<code v-pre>kubectl</code>、<code v-pre>crictl</code>、<code v-pre>ctr</code>、<code v-pre>k3s-killall.sh</code> 和 <code v-pre>k3s-uninstall.sh</code>。</li>
<li>将kubeconfig文件写入到<code v-pre>/etc/rancher/k3s/k3s.yaml</code>，由 K3s 安装的 kubectl 将自动使用该文件</li>
</ul>
<p>再其他节点安装K3s，并加入到集群中,</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置<code v-pre>K3S_URL</code>参数会使 K3s 以 worker 模式运行。K3s agent 将在所提供的 URL 上向监听的 K3s 服务器注册。<code v-pre>K3S_TOKEN</code>使用的值存储在你的服务器节点上的<code v-pre>/var/lib/rancher/k3s/server/node-token</code>路径下。</p>
<p><strong>注意</strong></p>
<p>每台计算机必须具有唯一的主机名。如果您的计算机没有唯一的主机名，请传递<code v-pre>K3S_NODE_NAME</code>环境变量，并为每个节点提供一个有效且唯一的主机名。</p>
<p>k3s 默认使用 crictl 替代docker 管理容器，同一个公司出品，指令和docker基本保持一直，</p>
<h2 id="k9s" tabindex="-1"><a class="header-anchor" href="#k9s" aria-hidden="true">#</a> K9s</h2>
<p>快捷管理kubenetes集群的运维软件，k3s同理</p>
<ul>
<li><a href="https://github.com/derailed/k9s/releases" target="_blank" rel="noopener noreferrer">github地址</a></li>
<li><a href="https://www.cnblogs.com/zgshi/p/12681355.html" target="_blank" rel="noopener noreferrer">参考文档</a></li>
</ul>
<p>下载对应版本的系统即可，以windows平台为例，下载下来，解压，把k9s.exe 加入系统环境变量即可。</p>
<ul>
<li>登录服务器，下载k8s集群的yaml配置文件，注意把里面的 127.0.0.1 修改为你服务器的实际ip</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># k3s 
/etc/rancher/k3s/k3s.yaml

# k8s
./kube/config

# 将文件下载到本地路径，创建环境变量配置
%KUBECTLCONFIGE%		k3s.yaml配置文件路径

# 注意，有些本地 .kube/config 文件，config是json文件，可以直接将k3s.yml 转成json格式即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>下载kubectl指令文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看 kubectl.exe 最新版本
https://storage.googleapis.com/kubernetes-release/release/stable.txt

# 下载最新版本
curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.22.2/bin/windows/amd64/kubecti.exe

# 配置kubectl.exe 指定文件路径
%KUBECTL_HOME%		kubectl.exe 文件路径

# curl 工具下载 可选
https://curl.se/windows/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：</p>
<p><img src="@source/blogs/k8sNotes/images/K3s/image-20211003200215533.png" alt="image-20211003200215533"></p>
<p>数据k9s即可进入k9s管理界面，根据快捷键，快速查看资源信息</p>
<p><img src="@source/blogs/k8sNotes/images/K3s/image-20211003200305126.png" alt="image-20211003200305126"></p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<p>pc、ios平台可视化管理k8s集群 kubenav，根据软件描述，导入对应配置即可，k8s,k3s的配置文件上面有说，导入的时候改一下里面的127.0.0.1为自己服务器的ip地址即可</p>
<p><a href="https://docs.kubenav.io/mobile/kubeconfig/" target="_blank" rel="noopener noreferrer">参考文档</a></p>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2>
<p>服务器重启问题</p>
<p>k3s部署在阿里云轻量应用服务器，不知为啥，某天登陆服务器，一直登陆不上，登陆控制台，发现最近4天，CPU几乎一直占用100%，由于一直满载，ssh都登陆不进去，最后只能重启服务器</p>
<p>重启之后k3s服务没有重启，手动重启也不行，重新覆盖安装也不行</p>
<p><code v-pre>starting kubernetes: preparing server: failed to normalize token; must be **in** format K10&lt;CA-HASH&gt;::&lt;USERNAME&gt;:&lt;PASSWORD&gt; **or** &lt;PASSWORD&gt;</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@iZbp10kr3w2ijuyctukq43Z file]# service k3s restart
Redirecting to /bin/systemctl restart k3s.service
Job for k3s.service failed because the control process exited with error code.
See &quot;systemctl status k3s.service&quot; and &quot;journalctl -xe&quot; for details.
[root@iZbp10kr3w2ijuyctukq43Z file]# systemctl status k3s.service
● k3s.service - Lightweight Kubernetes
   Loaded: loaded (/etc/systemd/system/k3s.service; enabled; vendor preset: disabled)
   Active: activating (auto-restart) (Result: exit-code) since Mon 2023-01-16 13:15:01 CST; 2s ago
     Docs: https://k3s.io
  Process: 37172 ExecStart=/usr/local/bin/k3s server (code=exited, status=1/FAILURE)
  Process: 37171 ExecStartPre=/sbin/modprobe overlay (code=exited, status=0/SUCCESS)
  Process: 37169 ExecStartPre=/sbin/modprobe br_netfilter (code=exited, status=0/SUCCESS)
  Process: 37166 ExecStartPre=/bin/sh -xc ! /usr/bin/systemctl is-enabled --quiet nm-cloud-setup.service (code=exited, status=0/SUCCESS)
 Main PID: 37172 (code=exited, status=1/FAILURE)

Jan 16 13:15:01 iZbp10kr3w2ijuyctukq43Z systemd[1]: Failed to start Lightweight Kubernetes.
[root@iZbp10kr3w2ijuyctukq43Z file]# journalctl -xe
Jan 16 13:15:06 iZbp10kr3w2ijuyctukq43Z k3s[37195]: time=&quot;2023-01-16T13:15:06+08:00&quot; level=info msg=&quot;Kine available at unix://kine.sock&quot;
Jan 16 13:15:06 iZbp10kr3w2ijuyctukq43Z k3s[37195]: time=&quot;2023-01-16T13:15:06+08:00&quot; level=fatal msg=&quot;starting kubernetes: preparing server: failed to normalize token; m&gt;
Jan 16 13:15:06 iZbp10kr3w2ijuyctukq43Z systemd[1]: k3s.service: Main process exited, code=exited, status=1/FAILURE
Jan 16 13:15:06 iZbp10kr3w2ijuyctukq43Z systemd[1]: k3s.service: Failed with result 'exit-code'.
-- Subject: Unit failed
-- Defined-By: systemd
-- Support: https://access.redhat.com/support
-- 
-- The unit k3s.service has entered the 'failed' state with result 'exit-code'.
Jan 16 13:15:06 iZbp10kr3w2ijuyctukq43Z systemd[1]: Failed to start Lightweight Kubernetes.
-- Subject: Unit k3s.service has failed
-- Defined-By: systemd
-- Support: https://access.redhat.com/support
-- 
-- Unit k3s.service has failed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p>
<p>删除 <code v-pre>/var/lib/rancher/k3s/server/toke</code>改文件，这个文件是空白的，然后在重启k3s服务即可，对应pod也能正常重启</p>
<p>参考<a href="https://codesti.com/issue/k3s-io/k3s/5025" target="_blank" rel="noopener noreferrer">在 1.22.5+k3s2 上安装失败，出现令牌错误 - K3s-Io/K3s (codesti.com)</a></p>
</div></template>


