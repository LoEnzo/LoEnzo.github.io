---
title: 容器相关
tags:
 - Docker
 - Dockerfile
 - Docker-compose
 - Docker Swarm
 - Kubernetes
 - k3s
 - crictl
 - ctr
categories:
 - OperationMaintenance
date: 2021-08-05
---

::: tip

:::

<!-- more -->

## Docker容器相关

### Docker

**Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口**。它是目前最流行的 Linux 容器解决方案。Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情

### Dockerfile

Dockerfile 是拿来构建自定义镜像的，并没有直接生成容器。只是可以在运行镜像时运行容器而已，若是想使用这个镜像的话还需要使用docker run命令来运行这个镜像，从而生成运行一个容器

### Docker Compose

docker-compose.yml是用来编排项目的，里面包含使用各种镜像创建的容器服务，使用的镜像可以是网络上的，也可以是根据使用Dockerfile文件来build生成的镜像，相当于是把上一步的这个工作给做了

docker-compose可以在单个服务器上创建多个容器，多个副本

### Docker Swarm

Docker Swarm 是 Docker 的集群管理工具。它将 Docker 主机池转变为单个虚拟 Docker 主机。 Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机

docker swarm可以在多个服务器创建多个容器，多个副本，实现集群，负载均衡， 不过现在主要被Kubernetes替代

### Kubernetes

google基于自己的borg开发的容器编排工具，目前主流，能实现docker swarm能实现的功能，且其他功能更加强大

### Docker容器和传统虚拟机的区别

容器是在**操作系统层面**上实现虚拟化，直接复用本地主机的操作系统，而传统方式则是在**硬件层面**实现

容器

![docker-containerized-and-vm-transparent-bg](./images/DockerMore/docker-containerized-and-vm-transparent-bg.png)

## containerd

### docker 和 contraierd 简单说明

docker 由 docker-client, dockerd, containerd, docker-shim, runc组成，所以containerd是docker的基础组件之一

从k8s的角度看，可以选择 containerd 或 docker 作为运行时组件：其中 containerd 调用链更短，组件更少，更稳定，占用节点资源更少。所以k8s后来的版本开始默认使用 containerd

containerd 相比于docker , 多了 namespace 概念，每个 image 和 container 都会在各自的namespace下可见。

docker 作为 k8s 容器运行时，调用关系为：`kubelet --> dockershim （在 kubelet 进程中） --> dockerd --> containerd`

containerd 作为 k8s 容器运行时，调用关系为：`kubelet --> cri plugin（在 containerd 进程中） --> containerd`

containerd 相比 docker, 多了 namespace 概念，每个image 和 container 都会在对应的 namespace 下可见，k8s 会使用 k8a.io 作为命名空间，`crictl images list -n k8s.io`

### 相关执行说明

* ctr 是 containerd 的一个客户端工具。

* crictl 是 CRI 兼容的容器运行时命令行接口，可以使用它来检查和调试 k8s 节点上的容器运行时和应用程序。

* ctr -v 输出的是 containerd 的版本，crictl -v 输出的是当前 k8s 的版本

### 常用命令

| 命令                | docker            | ctr（containerd）            | crictl（kubernetes） |
| ------------------- | ----------------- | ---------------------------- | -------------------- |
| 命令                | docker            | ctr（containerd）            | crictl（kubernetes） |
| 查看运行的容器      | docker ps         | ctr task ls/ctr container ls | crictl ps            |
| 查看镜像            | docker images     | ctr image ls                 | crictl images        |
| 查看容器日志        | docker logs       | 无                           | crictl logs          |
| 查看容器数据信息    | docker inspect    | ctr container info           | crictl inspect       |
| 查看容器资源        | docker stats      | 无                           | crictl stats         |
| 启动/关闭已有的容器 | docker start/stop | ctr task start/kill          | crictl start/stop    |
| 运行一个新的容器    | docker run        | ctr run                      | 无（最小单元为pod）  |
| 修改镜像标签        | docker tag        | ctr image tag                | 无                   |
| 创建一个新的容器    | docker create     | ctr container create         | crictl create        |
| 导入镜像            | docker load       | ctr image import             | 无                   |
| 导出镜像            | docker save       | ctr image export             | 无                   |
| 删除容器            | docker rm         | ctr container rm             | crictl rm            |
| 删除镜像            | docker rmi        | ctr image rm                 | crictl rmi           |
| 拉取镜像            | docker pull       | ctr image pull               | ctictl pull          |
| 推送镜像            | docker push       | ctr image push               | 无                   |
| 在容器内部执行命令  | docker exec       | 无                           | crictl exec          |

## 工具推荐：

**dive**

A tool for exploring a docker image, layer contents, and discovering ways to shrink the size of your Docker/OCI image.
https://github.com/wagoodman/dive

**ctop**

容器监控工具
https://github.com/bcicen/ctop

**lazydocker**

A simple terminal UI for both docker and docker-compose, written in Go with the gocui library.
https://github.com/jesseduffield/lazydocker