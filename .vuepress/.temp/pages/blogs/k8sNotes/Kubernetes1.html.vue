<template><div><p>::: tip</p>
<p><strong>Kubernetes</strong>是一个开源的，用于管理云平台中多个主机上的容器化的应用，<strong>Kubernetes</strong>的目标是让部署容器化的应用简单并且高效（powerful）,Kubernetes提供了应用部署，规划，更新，维护的一种机制。根据<a href="https://www.bilibili.com/video/BV1cK4y1L7Am?p=1" target="_blank" rel="noopener noreferrer">哔哩哔哩黑马视频</a>学习，学习来源于搬迁，部分文档有根据自己学习进行修改和补充，<a href="https://www.orchome.com/1786" target="_blank" rel="noopener noreferrer">文档学习资源</a></p>
<p>:::</p>
<!-- more -->
<h1 id="第一章-kubernetes介绍" tabindex="-1"><a class="header-anchor" href="#第一章-kubernetes介绍" aria-hidden="true">#</a> 第一章 kubernetes介绍</h1>
<p>本章节主要介绍应用程序在服务器上部署方式演变以及kubernetes的概念、组件和工作原理。</p>
<h2 id="应用部署方式演变" tabindex="-1"><a class="header-anchor" href="#应用部署方式演变" aria-hidden="true">#</a> 应用部署方式演变</h2>
<p>在部署应用程序的方式上，主要经历了三个时代：</p>
<ul>
<li>
<p><strong>传统部署</strong>：互联网早期，会直接将应用程序部署在物理机上</p>
<blockquote>
<p>优点：简单，不需要其它技术的参与</p>
<p>缺点：不能为应用程序定义资源使用边界，很难合理地分配计算资源，而且程序之间容易产生影响</p>
</blockquote>
</li>
<li>
<p><strong>虚拟化部署</strong>：可以在一台物理机上运行多个虚拟机，每个虚拟机都是独立的一个环境</p>
<blockquote>
<p>优点：程序环境不会相互产生影响，提供了一定程度的安全性</p>
<p>缺点：增加了操作系统，浪费了部分资源</p>
</blockquote>
</li>
<li>
<p><strong>容器化部署</strong>：与虚拟化类似，但是共享了操作系统</p>
<blockquote>
<p>优点：</p>
<p>​    可以保证每个容器拥有自己的文件系统、CPU、内存、进程空间等</p>
<p>​    运行应用程序所需要的资源都被容器包装，并和底层基础架构解耦</p>
<p>​    容器化的应用程序可以跨云服务商、跨Linux操作系统发行版进行部署</p>
</blockquote>
</li>
</ul>
<p><img src="@source/blogs/k8sNotes/images/k8s/image-20200505183738289.png" alt="image-20200505183738289"></p>
<p>容器化部署方式给带来很多的便利，但是也会出现一些问题，比如说：</p>
<ul>
<li>一个容器故障停机了，怎么样让另外一个容器立刻启动去替补停机的容器</li>
<li>当并发访问量变大的时候，怎么样做到横向扩展容器数量</li>
</ul>
<p>这些容器管理的问题统称为<strong>容器编排</strong>问题，为了解决这些容器编排问题，就产生了一些容器编排的软件：</p>
<ul>
<li><strong>Swarm</strong>：Docker自己的容器编排工具</li>
<li><strong>Mesos</strong>：Apache的一个资源统一管控的工具，需要和Marathon结合使用</li>
<li><strong>Kubernetes</strong>：Google开源的的容器编排工具</li>
</ul>
<img src="@source/blogs/k8sNotes/images/k8s/image-20200524150339551.png" alt="image-20200524150339551" style="border:1px solid;zoom:110%;" />
<h2 id="kubernetes简介" tabindex="-1"><a class="header-anchor" href="#kubernetes简介" aria-hidden="true">#</a> kubernetes简介</h2>
<img src="@source/blogs/k8sNotes/images/k8s/image-20200406232838722.png" alt="image-20200406232838722" style="zoom:100%;border:1px solid;" />
<p>​</p>
<p>​    kubernetes，是一个全新的基于容器技术的分布式架构领先方案，是谷歌严格保密十几年的秘密武器----Borg系统的一个开源版本，于2014年9月发布第一个版本，2015年7月发布第一个正式版本。</p>
<p>​    kubernetes的本质是<strong>一组服务器集群</strong>，它可以在集群的每个节点上运行特定的程序，来对节点中的容器进行管理。目的是实现资源管理的自动化，主要提供了如下的主要功能：</p>
<ul>
<li><strong>自我修复</strong>：一旦某一个容器崩溃，能够在1秒中左右迅速启动新的容器</li>
<li><strong>弹性伸缩</strong>：可以根据需要，自动对集群中正在运行的容器数量进行调整</li>
<li><strong>服务发现</strong>：服务可以通过自动发现的形式找到它所依赖的服务</li>
<li><strong>负载均衡</strong>：如果一个服务起动了多个容器，能够自动实现请求的负载均衡</li>
<li><strong>版本回退</strong>：如果发现新发布的程序版本有问题，可以立即回退到原来的版本</li>
<li><strong>存储编排</strong>：可以根据容器自身的需求自动创建存储卷</li>
</ul>
<p><img src="@source/blogs/k8sNotes/images/k8s/image-20200526203726071.png" alt="image-20200526203726071"></p>
<h2 id="kubernetes组件" tabindex="-1"><a class="header-anchor" href="#kubernetes组件" aria-hidden="true">#</a> kubernetes组件</h2>
<p>一个kubernetes集群主要是由<strong>控制节点(master)</strong>、**工作节点(node)**构成，每个节点上都会安装不同的组件。</p>
<p><strong>master：集群的控制平面，负责集群的决策  (  管理  )</strong></p>
<blockquote>
<p><strong>ApiServer</strong> : 资源操作的唯一入口，接收用户输入的命令，提供认证、授权、API注册和发现等机制</p>
<p><strong>Scheduler</strong> : 负责集群资源调度，按照预定的调度策略将Pod调度到相应的node节点上</p>
<p><strong>ControllerManager</strong> : 负责维护集群的状态，比如程序部署安排、故障检测、自动扩展、滚动更新等</p>
<p>**Etcd **：负责存储集群中各种资源对象的信息</p>
</blockquote>
<p>**node：集群的数据平面，负责为容器提供运行环境 ( 干活 ) **</p>
<blockquote>
<p><strong>Kubelet</strong> : 负责维护容器的生命周期，即通过控制docker，来创建、更新、销毁容器</p>
<p><strong>KubeProxy</strong> : 负责提供集群内部的服务发现和负载均衡</p>
<p><strong>Docker</strong> : 负责节点上容器的各种操作</p>
</blockquote>
<img src="@source/blogs/k8sNotes/images/k8s/image-20200406184656917.png" alt="image-20200406184656917" style="zoom:200%;" />
<p>下面，以部署一个nginx服务来说明kubernetes系统各个组件调用关系：</p>
<ol>
<li>
<p>首先要明确，一旦kubernetes环境启动之后，master和node都会将自身的信息存储到etcd数据库中</p>
</li>
<li>
<p>一个nginx服务的安装请求会首先被发送到master节点的apiServer组件</p>
</li>
<li>
<p>apiServer组件会调用scheduler组件来决定到底应该把这个服务安装到哪个node节点上</p>
<p>在此时，它会从etcd中读取各个node节点的信息，然后按照一定的算法进行选择，并将结果告知apiServer</p>
</li>
<li>
<p>apiServer调用controller-manager去调度Node节点安装nginx服务</p>
</li>
<li>
<p>kubelet接收到指令后，会通知docker，然后由docker来启动一个nginx的pod</p>
<p>pod是kubernetes的最小操作单元，容器必须跑在pod中至此，</p>
</li>
<li>
<p>一个nginx服务就运行了，如果需要访问nginx，就需要通过kube-proxy来对pod产生访问的代理</p>
</li>
</ol>
<p>​        这样，外界用户就可以访问集群中的nginx服务了</p>
<h2 id="kubernetes概念" tabindex="-1"><a class="header-anchor" href="#kubernetes概念" aria-hidden="true">#</a> kubernetes概念</h2>
<p><strong>Master</strong>：集群控制节点，每个集群需要至少一个master节点负责集群的管控</p>
<p><strong>Node</strong>：工作负载节点，由master分配容器到这些node工作节点上，然后node节点上的docker负责容器的运行</p>
<p><strong>Pod</strong>：kubernetes的最小控制单元，容器都是运行在pod中的，一个pod中可以有1个或者多个容器</p>
<p><strong>Controller</strong>：控制器，通过它来实现对pod的管理，比如启动pod、停止pod、伸缩pod的数量等等</p>
<p><strong>Service</strong>：pod对外服务的统一入口，下面可以维护者同一类的多个pod</p>
<p><strong>Label</strong>：标签，用于对pod进行分类，同一类pod会拥有相同的标签</p>
<p><strong>NameSpace</strong>：命名空间，用来隔离pod的运行环境</p>
<img src="@source/blogs/k8sNotes/images/k8s/image-20200403224313355.png" alt="image-20200403224313355" style="zoom:200%;" />
<h1 id="第二章-集群环境搭建" tabindex="-1"><a class="header-anchor" href="#第二章-集群环境搭建" aria-hidden="true">#</a> 第二章 集群环境搭建</h1>
<p>本章节主要介绍如何搭建kubernetes的集群环境</p>
<h2 id="环境规划" tabindex="-1"><a class="header-anchor" href="#环境规划" aria-hidden="true">#</a> 环境规划</h2>
<h3 id="集群类型" tabindex="-1"><a class="header-anchor" href="#集群类型" aria-hidden="true">#</a> 集群类型</h3>
<p>kubernetes集群大体上分为两类：<strong>一主多从</strong>和<strong>多主多从</strong>。</p>
<ul>
<li>一主多从：一台Master节点和多台Node节点，搭建简单，但是有单机故障风险，适合用于测试环境</li>
<li>多主多从：多台Master节点和多台Node节点，搭建麻烦，安全性高，适合用于生产环境</li>
</ul>
<p><img src="@source/blogs/k8sNotes/images/k8s/image-20200404094800622.png" alt="image-20200404094800622"></p>
<blockquote>
<p><code v-pre>说明：为了测试简单，本次搭建的是  一主两从   类型的集群</code></p>
</blockquote>
<h3 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h3>
<p>kubernetes有多种部署方式，目前主流的方式有kubeadm、minikube、二进制包</p>
<ul>
<li>minikube：一个用于快速搭建单节点kubernetes的工具</li>
<li>kubeadm：一个用于快速搭建kubernetes集群的工具</li>
<li>二进制包 ：从官网下载每个组件的二进制包，依次去安装，此方式对于理解kubernetes组件更加有效</li>
</ul>
<blockquote>
<p><code v-pre>说明：现在需要安装kubernetes的集群环境，但是又不想过于麻烦，所以选择使用kubeadm方式</code></p>
</blockquote>
<h3 id="主机规划" tabindex="-1"><a class="header-anchor" href="#主机规划" aria-hidden="true">#</a> 主机规划</h3>
<table>
<thead>
<tr>
<th>作用</th>
<th>IP地址</th>
<th>操作系统</th>
<th>配置</th>
</tr>
</thead>
<tbody>
<tr>
<td>Master</td>
<td>192.168.109.100</td>
<td>Centos7.5    基础设施服务器</td>
<td>2颗CPU  2G内存   50G硬盘</td>
</tr>
<tr>
<td>Node1</td>
<td>192.168.109.101</td>
<td>Centos7.5    基础设施服务器</td>
<td>2颗CPU  2G内存   50G硬盘</td>
</tr>
<tr>
<td>Node2</td>
<td>192.168.109.102</td>
<td>Centos7.5    基础设施服务器</td>
<td>2颗CPU  2G内存   50G硬盘</td>
</tr>
</tbody>
</table>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<p>​    本次环境搭建需要安装三台Centos服务器（一主二从），然后在每台服务器中分别安装docker（18.06.3），kubeadm（1.17.4）、kubelet（1.17.4）、kubectl（1.17.4）程序。</p>
<h3 id="主机安装" tabindex="-1"><a class="header-anchor" href="#主机安装" aria-hidden="true">#</a> 主机安装</h3>
<p>安装虚拟机过程中注意下面选项的设置：</p>
<ul>
<li>
<p>操作系统环境：CPU（2C）    内存（2G）   硬盘（50G）</p>
</li>
<li>
<p>语言选择：中文简体</p>
</li>
<li>
<p>软件选择：基础设施服务器</p>
</li>
<li>
<p>分区选择：自动分区</p>
</li>
<li>
<p>网络配置：按照下面配置网路地址信息</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>网络地址：192.168.109.100  （每台主机都不一样  分别为100、101、102）
子网掩码：255.255.255.0
默认网关：192.168.109.2
DNS：    223.5.5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/k8sNotes/images/k8s/image-20200505213817934.png" alt="image-20200505213817934"></p>
</li>
<li>
<p>主机名设置：按照下面信息设置主机名</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>master节点： master
node节点：   node1
node节点：   node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/k8sNotes/images/k8s/image-20200505214156148.png" alt="image-20200505214156148"></p>
</li>
</ul>
<h3 id="环境初始化" tabindex="-1"><a class="header-anchor" href="#环境初始化" aria-hidden="true">#</a> 环境初始化</h3>
<ol>
<li>检查操作系统的版本</li>
</ol>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 此方式下安装kubernetes集群要求Centos版本要在7.5或之上
[root@master ~]# cat /etc/redhat-release
CentOS Linux release 7.5.1804 (Core)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2） 主机名解析</p>
<p>为了方便后面集群节点间的直接调用，在这配置一下主机名解析，企业中推荐使用内部DNS服务器</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 主机名成解析 编辑三台服务器的/etc/hosts文件，添加下面内容
192.168.109.100  master
192.168.109.101  node1
192.168.109.102  node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3） 时间同步</p>
<p>kubernetes要求集群中的节点时间必须精确一致，这里直接使用chronyd服务从网络同步时间。</p>
<p>企业中建议配置内部的时间同步服务器</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 启动chronyd服务
[root@master ~]# systemctl start chronyd
# 设置chronyd服务开机自启
[root@master ~]# systemctl enable chronyd
# chronyd服务启动稍等几秒钟，就可以使用date命令验证时间了
[root@master ~]# date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4） 禁用iptables和firewalld服务</p>
<p>kubernetes和docker在运行中会产生大量的iptables规则，为了不让系统规则跟它们混淆，直接关闭系统的规则</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 1 关闭firewalld服务
[root@master ~]# systemctl stop firewalld
[root@master ~]# systemctl disable firewalld
# 2 关闭iptables服务
[root@master ~]# systemctl stop iptables
[root@master ~]# systemctl disable iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5） 禁用selinux</p>
<p>selinux是linux系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇葩问题</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 编辑 /etc/selinux/config 文件，修改SELINUX的值为disabled
# 注意修改完毕之后需要重启linux服务
SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6） 禁用swap分区</p>
<p>swap分区指的是虚拟内存分区，它的作用是在物理内存使用完之后，将磁盘空间虚拟成内存来使用</p>
<p>启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备</p>
<p>但是如果因为某些原因确实不能关闭swap分区，就需要在集群安装过程中通过明确的参数进行配置说明</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 编辑分区配置文件/etc/fstab，注释掉swap分区一行
# 注意修改完毕之后需要重启linux服务
 UUID=455cc753-7a60-4c17-a424-7741728c44a1 /boot    xfs     defaults        0 0
 /dev/mapper/centos-home /home                      xfs     defaults        0 0
# /dev/mapper/centos-swap swap                      swap    defaults        0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7）修改linux的内核参数</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 修改linux的内核参数，添加网桥过滤和地址转发功能
# 编辑/etc/sysctl.d/kubernetes.conf文件，添加如下配置:
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1

# 重新加载配置
[root@master ~]# sysctl -p

# 加载网桥过滤模块
[root@master ~]# modprobe br_netfilter

# 查看网桥过滤模块是否加载成功
[root@master ~]# lsmod | grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8）配置ipvs功能</p>
<p>在kubernetes中service有两种代理模型，一种是基于iptables的，一种是基于ipvs的</p>
<p>两者比较的话，ipvs的性能明显要高一些，但是如果要使用它，需要手动载入ipvs模块</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 1 安装ipset和ipvsadm
[root@master ~]# yum install ipset ipvsadmin -y

# 2 添加需要加载的模块写入脚本文件
[root@master ~]# cat &lt;&lt;EOF &gt;  /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF

# 3 为脚本文件添加执行权限
[root@master ~]# chmod +x /etc/sysconfig/modules/ipvs.modules

# 4 执行脚本文件
[root@master ~]# /bin/bash /etc/sysconfig/modules/ipvs.modules

# 5 查看对应的模块是否加载成功
[root@master ~]# lsmod | grep -e ip_vs -e nf_conntrack_ipv4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9） 重启服务器</p>
<p>上面步骤完成之后，需要重新启动linux系统</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code>[root@master ~]# reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 1 切换镜像源
[root@master ~]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo

# 2 查看当前镜像源中支持的docker版本
[root@master ~]# yum list docker-ce --showduplicates

# 3 安装特定版本的docker-ce
# 必须指定--setopt=obsoletes=0，否则yum会自动安装更高版本
[root@master ~]# yum install --setopt=obsoletes=0 docker-ce-18.06.3.ce-3.el7 -y

# 4 添加一个配置文件
# Docker在默认情况下使用的Cgroup Driver为cgroupfs，而kubernetes推荐使用systemd来代替cgroupfs
[root@master ~]# mkdir /etc/docker
[root@master ~]# cat &lt;&lt;EOF &gt;  /etc/docker/daemon.json
{
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;registry-mirrors&quot;: [&quot;https://kn0t2bca.mirror.aliyuncs.com&quot;]
}
EOF

# 5 启动docker
[root@master ~]# systemctl restart docker
[root@master ~]# systemctl enable docker

# 6 检查docker状态和版本
[root@master ~]# docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装kubernetes组件" tabindex="-1"><a class="header-anchor" href="#安装kubernetes组件" aria-hidden="true">#</a> 安装kubernetes组件</h3>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 由于kubernetes的镜像源在国外，速度比较慢，这里切换成国内的镜像源
# 编辑/etc/yum.repos.d/kubernetes.repo，添加下面的配置 
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg

# 安装kubeadm、kubelet和kubectl
[root@master ~]# yum install --setopt=obsoletes=0 kubeadm-1.17.4-0 kubelet-1.17.4-0 kubectl-1.17.4-0 -y

# 配置kubelet的cgroup
# 编辑/etc/sysconfig/kubelet，添加下面的配置
KUBELET_CGROUP_ARGS=&quot;--cgroup-driver=systemd&quot;
KUBE_PROXY_MODE=&quot;ipvs&quot;

# 4 设置kubelet开机自启
[root@master ~]# systemctl enable kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准备集群镜像" tabindex="-1"><a class="header-anchor" href="#准备集群镜像" aria-hidden="true">#</a> 准备集群镜像</h3>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 在安装kubernetes集群之前，必须要提前准备好集群需要的镜像，所需镜像可以通过下面命令查看
[root@master ~]# kubeadm config images list

# 下载镜像
# 此镜像在kubernetes的仓库中,由于网络原因,无法连接，下面提供了一种替代方案
images=(
    kube-apiserver:v1.17.4
    kube-controller-manager:v1.17.4
    kube-scheduler:v1.17.4
    kube-proxy:v1.17.4
    pause:3.1
    etcd:3.4.3-0
    coredns:1.6.5
)

for imageName in ${images[@]} ; do
	docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
	docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName 		k8s.gcr.io/$imageName
	docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群初始化" tabindex="-1"><a class="header-anchor" href="#集群初始化" aria-hidden="true">#</a> 集群初始化</h3>
<p>下面开始对集群进行初始化，并将node节点加入到集群中</p>
<blockquote>
<p>下面的操作只需要在<code v-pre>master</code>节点上执行即可</p>
</blockquote>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 创建集群
[root@master ~]# kubeadm init \
	--kubernetes-version=v1.17.4 \
    --pod-network-cidr=10.244.0.0/16 \
    --service-cidr=10.96.0.0/12 \
    --apiserver-advertise-address=192.168.109.100

# 创建必要文件
[root@master ~]# mkdir -p $HOME/.kube
[root@master ~]# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
[root@master ~]# sudo chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>下面的操作只需要在<code v-pre>node</code>节点上执行即可</p>
</blockquote>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 将node节点加入集群
[root@master ~]# kubeadm join 192.168.10.100:6443 \ 
	--token 8507uc.o0knircuri8etnw2 \
	--discovery-token-ca-cert-hash \
	sha256:acc37967fb5b0acf39d7598f8a439cc7dc88f439a3f4d0c9cae88e7901b9d3f
	
# 查看集群状态 此时的集群状态为NotReady，这是因为还没有配置网络插件
[root@master ~]# kubectl get nodes
NAME     STATUS     ROLES    AGE     VERSION
master   NotReady   master   6m43s   v1.17.4
node1    NotReady   &lt;none&gt;   22s     v1.17.4
node2    NotReady   &lt;none&gt;   19s     v1.17.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装网络插件" tabindex="-1"><a class="header-anchor" href="#安装网络插件" aria-hidden="true">#</a> 安装网络插件</h3>
<p>kubernetes支持多种网络插件，比如flannel、calico、canal等等，任选一种使用即可，本次选择flannel</p>
<blockquote>
<p>下面操作依旧只在<code v-pre>master</code>节点执行即可，插件使用的是DaemonSet的控制器，它会在每个节点上都运行</p>
</blockquote>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 获取fannel的配置文件
[root@master ~]# wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 修改文件中quay.io仓库为quay-mirror.qiniu.com

# 使用配置文件启动fannel
[root@master ~]# kubectl apply -f kube-flannel.yml

# 稍等片刻，再次查看集群节点的状态
[root@master ~]# kubectl get nodes
NAME     STATUS   ROLES    AGE     VERSION
master   Ready    master   15m     v1.17.4
node1    Ready    &lt;none&gt;   8m53s   v1.17.4
node2    Ready    &lt;none&gt;   8m50s   v1.17.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，kubernetes的集群环境搭建完成</p>
<h2 id="服务部署" tabindex="-1"><a class="header-anchor" href="#服务部署" aria-hidden="true">#</a> 服务部署</h2>
<p>接下来在kubernetes集群中部署一个nginx程序，测试下集群是否在正常工作。</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code># 部署nginx
[root@master ~]# kubectl create deployment nginx --image=nginx:1.14-alpine

# 暴露端口
[root@master ~]# kubectl expose deployment nginx --port=80 --type=NodePort

# 查看服务状态
[root@master ~]# kubectl get pods,service
NAME                         READY   STATUS    RESTARTS   AGE
pod/nginx-86c57db685-fdc2k   1/1     Running   0          18m

NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes   ClusterIP   10.96.0.1       &lt;none&gt;        443/TCP        82m
service/nginx        NodePort    10.104.121.45   &lt;none&gt;        80:30073/TCP   17m

# 4 最后在电脑上访问下部署的nginx服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/blogs/k8sNotes/images/k8s/image-20200405142656921.png" alt="image-20200405142656921" style="zoom:80%; border:1px solid" />
<h2 id="命令自动补全" tabindex="-1"><a class="header-anchor" href="#命令自动补全" aria-hidden="true">#</a> 命令自动补全</h2>
<ul>
<li>k8s &lt; 1.3版本</li>
</ul>
<p>可以通过如下命令：<code v-pre>source ./contrib/completions/bash/kubectl</code></p>
<ul>
<li>k8s &gt;= 1.3 版本</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yum install -y bash-completion
source /usr/share/bash-completion/bash_completion
source &lt;(kubectl completion bash)
echo &quot;source &lt;(kubectl completion bash)&quot; &gt;&gt; ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


