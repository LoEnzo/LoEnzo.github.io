---
title: Docker 
tags:
 - Docker
categories:
 - Framework
date: 2020-12-10
---

::: tip

**Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口**。它是目前最流行的 Linux 容器解决方案。Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。

:::

<!-- more -->


### 相关链接：

[Docker 官网](https://www.docker.com/)

[Github Docker 源码](https://github.com/docker/docker-ce)

[Docker官网命令文档](https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY)

### 安装

Docker 是一个开源的商业产品，有两个版本：社区版（Community Edition，缩写为 CE）和企业版（Enterprise Edition，缩写为 EE）。企业版包含了一些收费服务，个人开发者一般用不到，一般安装社区版，[参考](https://www.runoob.com/docker/centos-docker-install.html)

```shell
# 官方安装脚本自动安装
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
```

### 常规指令

```shell
# 查看docker信息
docker info

# 查看docker进程
docker ps
显示信息如下：
```

::: details docker ps显示进程信息

| CONTAINER ID | IMAGE      | COMMAND              | CREATED        | STATUS   | PORTS                                     | NAMES              |
| ------------ | ---------- | -------------------- | -------------- | -------- | ----------------------------------------- | ------------------ |
| 容器id       | 使用的镜像 | 启动容器时运行的命令 | 容器的创建时间 | 容器状态 | 容器的端口信息和使用的连接类型（tcp\udp） | 自动分配的容器名称 |

:::

## Docker指令

### 生命周期管理

```shell
# 创建一个新的容器并运行一个命令：docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
docker run

# 启动/停止/重启容器：docker start/stop/restart [OPTIONS] CONTAINER [CONTAINER...]
Docker start|stop|restart

# 杀掉一个运行中的容器：docker kill [OPTIONS] CONTAINER [CONTAINER...]
docker kill 

# 删除一个或多个容器：docker rm [OPTIONS] CONTAINER [CONTAINER...]
# -f :通过 SIGKILL 信号强制删除一个运行中的容器
# -l :移除容器间的网络连接，而非容器本身。
# -v :删除与容器关联的卷
docker rm

# 在运行的容器中执行命令：docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
# -d :分离模式: 在后台运行
# -i :即使没有附加也保持STDIN 打开
# -t :分配一个伪终端
docker exec
```

::: details docker run options 参数说明

| 参数              | 说明                                                         | 示例                                   |
| ----------------- | ------------------------------------------------------------ | -------------------------------------- |
| **-a**            | 指定标准输入输出内容类型，可选 **STDIN**/**STDOUT**/**STDERR** 三项 | **-a stdin**                           |
| **-d**            | 后台运行容器，并返回容器ID                                   |                                        |
| **-i**            | 以交互模式运行容器，通常与 -t 同时使用                       |                                        |
| **-P**            | 随机端口映射，容器内部端口**随机**映射到主机的端口           |                                        |
| **-p**            | 指定端口映射，格式为：主机(宿主)端口:容器端口****            | **-p 3306:3306**                       |
| **-t**            | 为容器重新分配一个伪输入终端，通常与 -i 同时使用             |                                        |
| **--name**        | 为容器指定一个名称                                           | **--name mysql**                       |
| **--dns**         | 指定容器使用的DNS服务器，默认和宿主一致                      | **--dns 8.8.8.8**                      |
| **-h**            | 指定容器的hostname                                           |                                        |
| **-e**            | 设置环境变量                                                 | **-e username="ritchie":**             |
| **--env-file=[]** | 从指定文件读入环境变量                                       |                                        |
| **--cpuset**      | 绑定容器到指定CPU运行                                        | **--cpuset="0-2" or --cpuset="0,1,2"** |
| **-m**            | 设置容器使用内存最大值                                       |                                        |
| **--net**         | 指定容器的网络连接类型，支持 **bridge**/**host**/**none**/**container**: 四种类型 | **--net="bridge"**                     |
| **--link=[]**     | 添加链接到另一个容器                                         |                                        |
| **--expose=[]**   | 开放一个端口或一组端口                                       |                                        |
| **-v**            | 绑定一个卷                                                   |                                        |

:::

#### 容器管理

```shell
#  列出容器：docker ps [OPTIONS]
# -a 显示所有的容器，包括未运行的
docker ps

# 列出指定的容器的端口映射：docker port [OPTIONS] CONTAINER [PRIVATE_PORT[/PROTO]]
docker port

# 获取容器的日志：docker logs [OPTIONS] CONTAINER
# -f : 跟踪日志输出
# --since :显示某个开始时间的所有日志
# -t : 显示时间戳
# --tail :仅列出最新N条容器日志
docker logs
```

#### 镜像仓库

```shell
# 登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub：docker login|logout [OPTIONS] [SERVER]
docker login|logout

# 从镜像仓库中拉取或者更新指定镜像：docker pull [OPTIONS] NAME[:TAG|@DIGEST]
docker pull

# 将本地的镜像上传到镜像仓库,要先登陆到镜像仓库：docker push [OPTIONS] NAME[:TAG]
docker push

# 登陆阿里云仓库
sudo docker login --username=hjwu_enzo registry.cn-hangzhou.aliyuncs.com

#从Registry中拉取镜像
sudo docker pull registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]

# 将镜像推送到Registry
sudo docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]
sudo docker push registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]
```

### 本地镜像管理

```shell
# 列出本地镜像：docker images [OPTIONS] [REPOSITORY[:TAG]]
# -a :列出本地所有的镜像（含中间映像层，默认情况下，过滤掉中间映像层）；
# --digests :显示镜像的摘要信息；
# -f :显示满足条件的镜像；
# --format :指定返回值的模板文件；
# --no-trunc :显示完整的镜像信息；
# -q :只显示镜像ID。
docker images 

# 删除本地一个或多少镜像。
docker rmi : 
```

