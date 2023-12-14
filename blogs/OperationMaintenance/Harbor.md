---
title: Harbor
tags:
 - Harbor
categories:
 - OperationMaintenance
date: 2022-06-06
---
::: tip

Harbor是由VMWare在Docker Registry的基础之上进行了二次封装，加进去了很多额外程序，而且提供了一个非常漂亮的web界面。用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，Harbor和docker中央仓库的关系，就类似于nexus和Maven中央仓库的关系，Harbor除了存储和分发镜像外还具有用户管理**，**项目管理**，**配置管理和日志查询**，**高可用部署等主要功能。


:::

<!-- more -->

# 搭建Harbor

### 开源仓库

* [Harbor github 开源项目](https://github.com/goharbor/harbor/releases)

### 安装

* 可以直接下载release下的压缩包，解压到安装目录即可
* 修改默认`harbor.yml`配置
* 执行`./prepare`校验
*  执行harbor安装脚本，会自动下载harbor与harbor相关docker镜像，配置，启动harbor容器

```shell
# 执行安装指令,最后看到successfully即成功了
./install 

# 安装完成镜像
goharbor/harbor-registryctl:v2.5.1      "/home/harbor/start.…"   10 days ago     Up 10 days (healthy)                                registryctl
goharbor/nginx-photon:v2.5.1            "nginx -g 'daemon of…"   10 days ago     Up 9 days (healthy)    0.0.0.0:8099->8080/tcp       nginx
goharbor/harbor-jobservice:v2.5.1       "/harbor/entrypoint.…"   10 days ago     Up 10 days (healthy)                                harbor-jobservice
goharbor/harbor-core:v2.5.1             "/harbor/entrypoint.…"   10 days ago     Up 10 days (healthy)                                harbor-core
goharbor/harbor-db:v2.5.1               "/docker-entrypoint.…"   10 days ago     Up 10 days (healthy)                                harbor-db
goharbor/harbor-portal:v2.5.1           "nginx -g 'daemon of…"   10 days ago     Up 10 days (healthy)                                harbor-portal
goharbor/registry-photon:v2.5.1         "/home/harbor/entryp…"   10 days ago     Up 10 days (healthy)                                registry
goharbor/harbor-log:v2.5.1              "/bin/sh -c /usr/loc…"   10 days ago     Up 10days(healthy)127.0.0.1:1514->10514/tcp         harbor-log
```

* 默认用户名密码

```shell
admin Harbor12345
```

# 问题处理历程

以下问题基于[2.5.1](https://github.com/goharbor/harbor/releases/tag/v2.5.1)版本，内网环境，无法连接外网，仅供参考



#### `./install`无法安装

原因：报错内容忘记了， 原因是没有 `harbor.yml`，默认根目录提供了 `harbor.yml.tmpl`模板默认文件

解决：复制一份配置文件，重命名为`harbor.yml`即可



#### 启动包代码形式的错误

报错：

```shell
prepare base dir is set to /root/harbor
Traceback (most recent call last):
File "main.py", line 64, in <module>
main()
File "/usr/lib/python3.6/site-packages/click/core.py", line 764, in __call__
......
expected <block end>, but found '<block mapping start>'
in "/input/harbor.yml", line 13, column 2
```

原因：一般是配置文件格式错误，尤其是空格，或者顶格未对齐等

解决：根据最后一行定位配置文件报错位置，解决即可



#### 部分容器无法启动，例如 nginx，redis

原因：`./install`安装 Harbor，会启动如下8个容器，我的报错都是应为本地单独启动了一个 nginx、redis 容器，导致harbor无法创建同样的name的容器，

nginx：修改自己nginx的name为其他即可

redis：harbor 采用外置redis，也就是自己的redis作为缓存，不采用内置默认的

```shell
 ⠿ Network harbor_harbor        Created             0.0s
 ⠿ Container harbor-log         Started             0.5s
 ⠿ Container registryctl        Started             1.1s
 ⠿ Container harbor-portal      Started             1.1s
 ⠿ Container registry           Started             1.1s
 ⠿ Container harbor-db          Started             1.0s
 ⠿ Container harbor-core        Started             1.3s
 ⠿ Container nginx              Started             1.7s
 ⠿ Container harbor-jobservice  Started             1.6s
```



#### 启动报错1

报错：`ERROR:root:Error: The protocol is https but attribute ssl_cert is not set`

解决：修改`harbor.yml`，修改hostname 为当前服务器ip



#### 启动报错2

报错：`ERROR:root:Error: The protocol is https but attribute ssl_cert is not set`

解决：注释掉 https 相关内容，为配置证书这些，所有以http访问



#### 无法推动到 harbor 仓库

原因：本地 docker daemon.json 未配置信任该仓库

解决：修改 daemon.json ，刷新配置并重启

```shell
vi /etc/docker/daemon.json

{
    "insecure-registries": ["harbor.xxx.com"]	# nginx配置了域名的，就写域名即可，未配置，直接ip:端口也可
}

sudo systemctl daemon-reload					# 刷新配置				   
sudo systemctl restart docker					# 重启docker
```



#### 修改docker配置，重启docker后，无法登陆 harbor

报错：web端登良，输入用户名、密码，报错提示核心服务不可用，查看容器，发现部分容器状态是 "healthy starting"，查看容器日志：

```shell
Error response from daemon: configured logging driver does not support reading
```

原因：`daemon.json` 配置错误，其次，docker 重启时，自己的 redis 容器未自动重启，导致 harbor 未连接上，重启即可



#### 重启 harbor 报错，部分容器报错

```shell
# 可以手动挨个启动容器，也可以重新 `./install`，貌似等于全新安装，或者使用根目录下 `docker-compose.yaml` 启动，不过需要修改里面默认配置，保证和 harbor.yml 中 自己修改后的配置一样即可

# 切换到harbor 安装的根目录
docker-compose up -d
```



#### 推送镜像到harbor，HTTP 413 报错

报错详情：

```shell
error parsing HTTP 413 response body: invalid character '<' looking for beginning of value: "<html>\r\n<head><title>413 Request Entity Too Large</title></head>\r\n<body bgcolor=\"white\">\r\n<center><h1>413 Request Entity Too Large</h1></center>\r\n<hr><center>nginx/1.10.3</center>\r\n</body>\r\n</html>\r\n"
```

解决：nginx代理，修改默认限制上传附件，修改 nginx.conf 

```shell
http{
	client_max_body_size     50m;  # 文件大小限制，默认1m，限制请求体的大小，若超过所设定的大小，返回413错误
	client_header_timeout    1m;   # 读取请求头的超时时间，若超过所设定的大小，返回408错误
	client_body_timeout      1m;   # 读取请求实体的超时时间，若超过所设定的大小，返回413错误
	proxy_connect_timeout    60s;  # http请求无法立即被容器(tomcat, netty等)处理，被放在nginx的待处理池中等待被处理。此参数为等待的最长时间，默认为60秒，官方推荐最长不要超过75秒
	proxy_read_timeout       1m;   # http请求被容器(tomcat, netty等)处理后，nginx会等待处理结果，也就是容器返回的response。此参数即为服务器响应时间，默认60秒
	proxy_send_timeout       1m;   # http请求被服务器处理完后，把数据传返回给Nginx的用时，默认60秒
}
```



#### **docker 推送到harbor报错**

原因：报错内容忘记了， 原因是因为 harbor默认提供一个名为`library`的项目，如果你推送的镜像不是该命名的，需要修改，或者新建一个对应的名称的项目即可

解决：修改需要推送的镜像名，后者新建项目



#### **contained 拉取 harbor 报错，默认采用的 https 导致的**

报错：

```shell
crictl pull harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT
FATA[0000] pulling image: rpc error: code = Unknown desc = failed to pull and unpack image "harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT": failed to resolve reference "harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT": failed to do request: Head "https://harbor.killer.com/v2/mall/mall-admin/manifests/1.0-SNAPSHOT": dial tcp 172.xx.xx.105:443: connect: connection refused 
```

解决：

```shell
# 修改 contained 配置，使其支持http，注意，配置文件有问题，重启会报错的，注意查看
version = 2
root = "/var/lib/containerd"
state = "/run/containerd"
oom_score = 0

[grpc]
  max_recv_message_size = 16777216
  max_send_message_size = 16777216

[debug]
  level = "info"

[metrics]
  address = ""
  grpc_histogram = false

[plugins]
  [plugins."io.containerd.grpc.v1.cri"]
    sandbox_image = "k8s.gcr.io/pause:3.6"
    max_container_log_line_size = -1
    [plugins."io.containerd.grpc.v1.cri".containerd]
      default_runtime_name = "runc"
      snapshotter = "overlayfs"
      [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
          runtime_engine = ""
          runtime_root = ""
          [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
            systemdCgroup = true
    [plugins."io.containerd.grpc.v1.cri".registry]
      [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
      # 以下为新增，https://registry-1.docker.io为原始的
        [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]
          endpoint = ["http://harbor.xx.com","https://registry-1.docker.io"]
      [plugins."io.containerd.grpc.v1.cri".registry.configs]
        [plugins."io.containerd.grpc.v1.cri".registry.configs."harbor.xx.com".tls]
          insecure_skip_verify = true

# 每个节点都修改 hosts，对应harbor的域名，仅仅自己调用可以
vi /etc/hosts
172.xx.xx.105 harbor.xx.com

# 重启contained服务
systemctl restart containerd
systemctl status containerd.service

# 如果配置文件有问题，重启containerd可能报错如下
Job for containerd.service failed because the control process exited with error code. See "systemctl status containerd.service" and "journalctl -xe" for details.
```

* K8S主动拉取私有仓库地址Secret（经过上面配置已经可以拉取，这个未尝试）

```shell
kubectl create secret docker-registry {secret名字} --docker-server={仓库地址} --docker-username={你的账号} --docker-password={你的密码} --docker-email {你的邮箱} -n {命名空间}


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
```





























