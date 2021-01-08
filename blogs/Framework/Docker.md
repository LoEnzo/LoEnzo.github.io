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

## 概要

### 相关链接：

[Docker 官网](https://www.docker.com/)

[Github Docker 源码](https://github.com/docker/docker-ce)

[Docker官网命令文档](https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY)

[Docker中文文档](http://www.dockerinfo.net/document)

[阿里云镜像容器](https://cr.console.aliyun.com/cn-hangzhou/instances)

### Docker架构

![](./images/docker/docker01.png)

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

::: details ubuntu安装docker

```shell
前提是先执行apt-get update  apt-get upgrade

如果还出现这个问题 依次执行下面的步骤：

#添加docker源、
sudo echo "deb https://download.docker.com/linux/ubuntu zesty edge" > /etc/apt/sources.list.d/docker.list

#支持解析https
apt-get install -y apt-transport-https ca-certificates curl software-properties-common

#添加GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#设置存储库位置
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

#执行安装命令
apt-get install -y docker-ce

如果还是不行 就再跑一次update然后执行安装命令。我的环境就是这么装起来的。
```

:::

### 常规指令

| 指令               | 说明                                  | 参数 | 示例 |
| ------------------ | ------------------------------------- | ---- | ---- |
| **docker info**    | 查看docker 系统信息，包括镜像和容器数 |      |      |
| **docker version** | 查看docker的版本信息                  |      |      |

## Docker指令

![](./images/docker/docker02.png)

### 生命周期管理

| 指令               | 说明             | 参数                                                         | 示例                                                 |
| ------------------ | ---------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **docker run**     | 创建容器并运行   |                                                              | `docker run --name killer-nginx -p 8900:80 -d nginx` |
| **docker start**   | 启动容器         |                                                              | `Docker start nginx`                                 |
| **docker stop**    | 停止容器         |                                                              | `Docker stop nginx`                                  |
| **docker restart** | 重启容器         |                                                              | `docker restart nginx`                               |
| **docker kill**    | 杀掉运行中的容器 |                                                              | `docker kill nginx`                                  |
| **docker rm**      | 删除容器         | `-f `：强制删除一个运行中的容器<br/>` -l `：移除容器间的网络连接，而非容器本身<br/>`-v `：删除与容器关联的卷 | `docker rm nginx`                                    |
| **docker exec**    | 进入容器执行命令 | `-d `：分离模式: 在后台运行<br/>`-i `：即使没有附加也保持STDIN 打开<br/>`-t `：分配一个伪终端 | `docker exec -it centos /bin/bash`                   |

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

### 容器管理

| 指令            | 说明                     | 参数                                                         | 示例                           |
| --------------- | ------------------------ | ------------------------------------------------------------ | ------------------------------ |
| **docker ps**   | 列出容器                 | `-a`：所有容器                                               | `docker ps -a`                 |
| **docker port** | 列出指定的容器的端口映射 |                                                              | `docker port mysql`            |
| **docker logs** | 获取容器的日志           | `-f `：跟踪日志输出<br/>`--since`：显示某个开始时间的所有日志<br/>`-t`：显示时间戳<br/>`--tail `：仅列出最新N条容器日志 | `docker logs --tail=10 mysql ` |

::: details docker ps 显示进程信息

| CONTAINER ID | IMAGE      | COMMAND              | CREATED        | STATUS   | PORTS                                     | NAMES              |
| ------------ | ---------- | -------------------- | -------------- | -------- | ----------------------------------------- | ------------------ |
| 容器id       | 使用的镜像 | 启动容器时运行的命令 | 容器的创建时间 | 容器状态 | 容器的端口信息和使用的连接类型（tcp\udp） | 自动分配的容器名称 |

:::

### 镜像仓库

| 指令                    | 说明                                                         | 示例                  |
| ----------------------- | ------------------------------------------------------------ | --------------------- |
| **docker login/logout** | 登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 | `docker login`        |
| **docker pull**         | 从镜像仓库中拉取或者更新指定镜像                             | `docker pull mysql`   |
| **docker push**         | 将本地的镜像上传到镜像仓库,要先登陆到镜像仓库                | `docker push mysql`   |
| **docker search**       | 搜索镜像                                                     | `docker search mysql` |

#### 远程仓库管理

| 指令                                                         | 说明                 |
| ------------------------------------------------------------ | -------------------- |
| **docker login --username=hjwu_enzo registry.cn-hangzhou.aliyuncs.com** | 登陆到阿里云镜像仓库 |
| **docker pull registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]** | 从resgistry拉取镜像  |
| **docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]** |                      |
| **docker push registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/nginx:[镜像版本号]** | 将进项推送到registry |

#### 本地镜像管理

| 指令              | 说明                                                         | 参数                                                         | 示例                     |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------ |
| **docker images** | 列出本地镜像                                                 | `-a`：列出本地所有的镜像；<br/>`--digests`：显示镜像的摘要信息；<br/>`-f`：显示满足条件的镜像；<br/>`--format` ：指定返回值的模板文件；<br/>`--no-trunc `：显示完整的镜像信息；<br/>`-q` ：只显示镜像ID | `docker images -a`       |
| **docker rmi**    | 删除本地一个或多少镜像                                       | `-f `：强制删除                                              | `docker rmi images_name` |
| **docker tag**    | 标记本地镜像，将其归入某一仓库                               |                                                              |                          |
| **docker build**  | 用于根据 `Dockerfile` 创建镜像                               | `-f `：指定要使用的Dockerfile路径；                          |                          |
| **docker save**   | 将镜像导出为文件                                             | `-o`：输出到的文件                                           |                          |
| **docker load**   | 将文件导入为镜像                                             |                                                              |                          |
| **docker export** | 将容器导出为文件，**会保存该镜像操作的历史记录**，文件较大   |                                                              |                          |
| **docker import** | 将文件导入为镜像，**会丢失所有元数据和历史记录**，仅保留容器当时的状态 |                                                              |                          |

## 示例：

### mysql

```shell
# docker mysql 将数据存储在本地目录
docker run -d -e MYSQL_ROOT_PASSWORD=admin --name mysql -v /data/mysql/data:/var/lib/mysql -p 3306:3306 mysql 

# 指定配置文件
docker run -d -e MYSQL_ROOT_PASSWORD=admin --name mysql -v /data/mysql/my.cnf:/etc/mysql/my.cnf -v /data/mysql/data:/var/lib/mysql -p 3306:3306 mysql 
```

