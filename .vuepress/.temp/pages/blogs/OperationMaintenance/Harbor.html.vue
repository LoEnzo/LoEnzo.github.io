<template><div><p>::: tip</p>
<p>Harbor是由VMWare在Docker Registry的基础之上进行了二次封装，加进去了很多额外程序，而且提供了一个非常漂亮的web界面。用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，Harbor和docker中央仓库的关系，就类似于nexus和Maven中央仓库的关系，Harbor除了存储和分发镜像外还具有用户管理**，<strong>项目管理</strong>，<strong>配置管理和日志查询</strong>，**高可用部署等主要功能。</p>
<p>:::</p>
<!-- more -->
<h1 id="搭建harbor" tabindex="-1"><a class="header-anchor" href="#搭建harbor" aria-hidden="true">#</a> 搭建Harbor</h1>
<h3 id="开源仓库" tabindex="-1"><a class="header-anchor" href="#开源仓库" aria-hidden="true">#</a> 开源仓库</h3>
<ul>
<li><a href="https://github.com/goharbor/harbor/releases" target="_blank" rel="noopener noreferrer">Harbor github 开源项目</a></li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<ul>
<li>可以直接下载release下的压缩包，解压到安装目录即可</li>
<li>修改默认<code v-pre>harbor.yml</code>配置</li>
<li>执行<code v-pre>./prepare</code>校验</li>
<li>执行harbor安装脚本，会自动下载harbor与harbor相关docker镜像，配置，启动harbor容器</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 执行安装指令,最后看到successfully即成功了
./install 

# 安装完成镜像
goharbor/harbor-registryctl:v2.5.1      &quot;/home/harbor/start.…&quot;   10 days ago     Up 10 days (healthy)                                registryctl
goharbor/nginx-photon:v2.5.1            &quot;nginx -g 'daemon of…&quot;   10 days ago     Up 9 days (healthy)    0.0.0.0:8099-&gt;8080/tcp       nginx
goharbor/harbor-jobservice:v2.5.1       &quot;/harbor/entrypoint.…&quot;   10 days ago     Up 10 days (healthy)                                harbor-jobservice
goharbor/harbor-core:v2.5.1             &quot;/harbor/entrypoint.…&quot;   10 days ago     Up 10 days (healthy)                                harbor-core
goharbor/harbor-db:v2.5.1               &quot;/docker-entrypoint.…&quot;   10 days ago     Up 10 days (healthy)                                harbor-db
goharbor/harbor-portal:v2.5.1           &quot;nginx -g 'daemon of…&quot;   10 days ago     Up 10 days (healthy)                                harbor-portal
goharbor/registry-photon:v2.5.1         &quot;/home/harbor/entryp…&quot;   10 days ago     Up 10 days (healthy)                                registry
goharbor/harbor-log:v2.5.1              &quot;/bin/sh -c /usr/loc…&quot;   10 days ago     Up 10days(healthy)127.0.0.1:1514-&gt;10514/tcp         harbor-log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>默认用户名密码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>admin Harbor12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="问题处理历程" tabindex="-1"><a class="header-anchor" href="#问题处理历程" aria-hidden="true">#</a> 问题处理历程</h1>
<p>以下问题基于<a href="https://github.com/goharbor/harbor/releases/tag/v2.5.1" target="_blank" rel="noopener noreferrer">2.5.1</a>版本，内网环境，无法连接外网，仅供参考</p>
<h4 id="install无法安装" tabindex="-1"><a class="header-anchor" href="#install无法安装" aria-hidden="true">#</a> <code v-pre>./install</code>无法安装</h4>
<p>原因：报错内容忘记了， 原因是没有 <code v-pre>harbor.yml</code>，默认根目录提供了 <code v-pre>harbor.yml.tmpl</code>模板默认文件</p>
<p>解决：复制一份配置文件，重命名为<code v-pre>harbor.yml</code>即可</p>
<h4 id="启动包代码形式的错误" tabindex="-1"><a class="header-anchor" href="#启动包代码形式的错误" aria-hidden="true">#</a> 启动包代码形式的错误</h4>
<p>报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>prepare base dir is set to /root/harbor
Traceback (most recent call last):
File &quot;main.py&quot;, line 64, in &lt;module&gt;
main()
File &quot;/usr/lib/python3.6/site-packages/click/core.py&quot;, line 764, in __call__
......
expected &lt;block end&gt;, but found '&lt;block mapping start&gt;'
in &quot;/input/harbor.yml&quot;, line 13, column 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：一般是配置文件格式错误，尤其是空格，或者顶格未对齐等</p>
<p>解决：根据最后一行定位配置文件报错位置，解决即可</p>
<h4 id="部分容器无法启动-例如-nginx-redis" tabindex="-1"><a class="header-anchor" href="#部分容器无法启动-例如-nginx-redis" aria-hidden="true">#</a> 部分容器无法启动，例如 nginx，redis</h4>
<p>原因：<code v-pre>./install</code>安装 Harbor，会启动如下8个容器，我的报错都是应为本地单独启动了一个 nginx、redis 容器，导致harbor无法创建同样的name的容器，</p>
<p>nginx：修改自己nginx的name为其他即可</p>
<p>redis：harbor 采用外置redis，也就是自己的redis作为缓存，不采用内置默认的</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> ⠿ Network harbor_harbor        Created             0.0s
 ⠿ Container harbor-log         Started             0.5s
 ⠿ Container registryctl        Started             1.1s
 ⠿ Container harbor-portal      Started             1.1s
 ⠿ Container registry           Started             1.1s
 ⠿ Container harbor-db          Started             1.0s
 ⠿ Container harbor-core        Started             1.3s
 ⠿ Container nginx              Started             1.7s
 ⠿ Container harbor-jobservice  Started             1.6s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动报错1" tabindex="-1"><a class="header-anchor" href="#启动报错1" aria-hidden="true">#</a> 启动报错1</h4>
<p>报错：<code v-pre>ERROR:root:Error: The protocol is https but attribute ssl_cert is not set</code></p>
<p>解决：修改<code v-pre>harbor.yml</code>，修改hostname 为当前服务器ip</p>
<h4 id="启动报错2" tabindex="-1"><a class="header-anchor" href="#启动报错2" aria-hidden="true">#</a> 启动报错2</h4>
<p>报错：<code v-pre>ERROR:root:Error: The protocol is https but attribute ssl_cert is not set</code></p>
<p>解决：注释掉 https 相关内容，为配置证书这些，所有以http访问</p>
<h4 id="无法推动到-harbor-仓库" tabindex="-1"><a class="header-anchor" href="#无法推动到-harbor-仓库" aria-hidden="true">#</a> 无法推动到 harbor 仓库</h4>
<p>原因：本地 docker daemon.json 未配置信任该仓库</p>
<p>解决：修改 daemon.json ，刷新配置并重启</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vi /etc/docker/daemon.json

{
    &quot;insecure-registries&quot;: [&quot;harbor.xxx.com&quot;]	# nginx配置了域名的，就写域名即可，未配置，直接ip:端口也可
}

sudo systemctl daemon-reload					# 刷新配置				   
sudo systemctl restart docker					# 重启docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改docker配置-重启docker后-无法登陆-harbor" tabindex="-1"><a class="header-anchor" href="#修改docker配置-重启docker后-无法登陆-harbor" aria-hidden="true">#</a> 修改docker配置，重启docker后，无法登陆 harbor</h4>
<p>报错：web端登良，输入用户名、密码，报错提示核心服务不可用，查看容器，发现部分容器状态是 &quot;healthy starting&quot;，查看容器日志：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Error response from daemon: configured logging driver does not support reading
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因：<code v-pre>daemon.json</code> 配置错误，其次，docker 重启时，自己的 redis 容器未自动重启，导致 harbor 未连接上，重启即可</p>
<h4 id="重启-harbor-报错-部分容器报错" tabindex="-1"><a class="header-anchor" href="#重启-harbor-报错-部分容器报错" aria-hidden="true">#</a> 重启 harbor 报错，部分容器报错</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 可以手动挨个启动容器，也可以重新 `./install`，貌似等于全新安装，或者使用根目录下 `docker-compose.yaml` 启动，不过需要修改里面默认配置，保证和 harbor.yml 中 自己修改后的配置一样即可

# 切换到harbor 安装的根目录
docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="推送镜像到harbor-http-413-报错" tabindex="-1"><a class="header-anchor" href="#推送镜像到harbor-http-413-报错" aria-hidden="true">#</a> 推送镜像到harbor，HTTP 413 报错</h4>
<p>报错详情：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>error parsing HTTP 413 response body: invalid character '&lt;' looking for beginning of value: &quot;&lt;html&gt;\r\n&lt;head&gt;&lt;title&gt;413 Request Entity Too Large&lt;/title&gt;&lt;/head&gt;\r\n&lt;body bgcolor=\&quot;white\&quot;&gt;\r\n&lt;center&gt;&lt;h1&gt;413 Request Entity Too Large&lt;/h1&gt;&lt;/center&gt;\r\n&lt;hr&gt;&lt;center&gt;nginx/1.10.3&lt;/center&gt;\r\n&lt;/body&gt;\r\n&lt;/html&gt;\r\n&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决：nginx代理，修改默认限制上传附件，修改 nginx.conf</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>http{
	client_max_body_size     50m;  # 文件大小限制，默认1m，限制请求体的大小，若超过所设定的大小，返回413错误
	client_header_timeout    1m;   # 读取请求头的超时时间，若超过所设定的大小，返回408错误
	client_body_timeout      1m;   # 读取请求实体的超时时间，若超过所设定的大小，返回413错误
	proxy_connect_timeout    60s;  # http请求无法立即被容器(tomcat, netty等)处理，被放在nginx的待处理池中等待被处理。此参数为等待的最长时间，默认为60秒，官方推荐最长不要超过75秒
	proxy_read_timeout       1m;   # http请求被容器(tomcat, netty等)处理后，nginx会等待处理结果，也就是容器返回的response。此参数即为服务器响应时间，默认60秒
	proxy_send_timeout       1m;   # http请求被服务器处理完后，把数据传返回给Nginx的用时，默认60秒
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="docker-推送到harbor报错" tabindex="-1"><a class="header-anchor" href="#docker-推送到harbor报错" aria-hidden="true">#</a> <strong>docker 推送到harbor报错</strong></h4>
<p>原因：报错内容忘记了， 原因是因为 harbor默认提供一个名为<code v-pre>library</code>的项目，如果你推送的镜像不是该命名的，需要修改，或者新建一个对应的名称的项目即可</p>
<p>解决：修改需要推送的镜像名，后者新建项目</p>
<h4 id="contained-拉取-harbor-报错-默认采用的-https-导致的" tabindex="-1"><a class="header-anchor" href="#contained-拉取-harbor-报错-默认采用的-https-导致的" aria-hidden="true">#</a> <strong>contained 拉取 harbor 报错，默认采用的 https 导致的</strong></h4>
<p>报错：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>crictl pull harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT
FATA[0000] pulling image: rpc error: code = Unknown desc = failed to pull and unpack image &quot;harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT&quot;: failed to resolve reference &quot;harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT&quot;: failed to do request: Head &quot;https://harbor.killer.com/v2/mall/mall-admin/manifests/1.0-SNAPSHOT&quot;: dial tcp 172.xx.xx.105:443: connect: connection refused 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 修改 contained 配置，使其支持http，注意，配置文件有问题，重启会报错的，注意查看
version = 2
root = &quot;/var/lib/containerd&quot;
state = &quot;/run/containerd&quot;
oom_score = 0

[grpc]
  max_recv_message_size = 16777216
  max_send_message_size = 16777216

[debug]
  level = &quot;info&quot;

[metrics]
  address = &quot;&quot;
  grpc_histogram = false

[plugins]
  [plugins.&quot;io.containerd.grpc.v1.cri&quot;]
    sandbox_image = &quot;k8s.gcr.io/pause:3.6&quot;
    max_container_log_line_size = -1
    [plugins.&quot;io.containerd.grpc.v1.cri&quot;.containerd]
      default_runtime_name = &quot;runc&quot;
      snapshotter = &quot;overlayfs&quot;
      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.containerd.runtimes]
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.containerd.runtimes.runc]
          runtime_type = &quot;io.containerd.runc.v2&quot;
          runtime_engine = &quot;&quot;
          runtime_root = &quot;&quot;
          [plugins.&quot;io.containerd.grpc.v1.cri&quot;.containerd.runtimes.runc.options]
            systemdCgroup = true
    [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry]
      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors]
      # 以下为新增，https://registry-1.docker.io为原始的
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors.&quot;docker.io&quot;]
          endpoint = [&quot;http://harbor.xx.com&quot;,&quot;https://registry-1.docker.io&quot;]
      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs]
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs.&quot;harbor.xx.com&quot;.tls]
          insecure_skip_verify = true

# 每个节点都修改 hosts，对应harbor的域名，仅仅自己调用可以
vi /etc/hosts
172.xx.xx.105 harbor.xx.com

# 重启contained服务
systemctl restart containerd
systemctl status containerd.service

# 如果配置文件有问题，重启containerd可能报错如下
Job for containerd.service failed because the control process exited with error code. See &quot;systemctl status containerd.service&quot; and &quot;journalctl -xe&quot; for details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>K8S主动拉取私有仓库地址Secret（经过上面配置已经可以拉取，这个未尝试）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>kubectl create secret docker-registry {secret名字} --docker-server={仓库地址} --docker-username={你的账号} --docker-password={你的密码} --docker-email {你的邮箱} -n {命名空间}


# 创建yaml指定即可
spec:
  replicas: 2
  template:
    metadata:
      labels:
        app: my-app
    spec:
      imagePullSecrets:
        - name: uread-secret  # secret 名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


