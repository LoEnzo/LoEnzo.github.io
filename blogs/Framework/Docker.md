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

```shell

```

