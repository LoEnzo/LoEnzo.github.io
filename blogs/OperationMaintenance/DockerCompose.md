---
title: Docker进阶之DockerCompose
tags:
 - Docker
 - Dockerfile
categories:
 - OperationMaintenance
date: 2021-08-05
---

::: tip

**Dockerfile**是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取`Dockerfile`中的指令自动生成映像。

:::

<!-- more -->

## 概要

**相关链接：**

[Docker 官网](https://www.docker.com/)

[Github Docker 源码](https://github.com/docker/docker-ce)

[Docker官网命令文档](https://docs.docker.com/engine/reference/commandline/cli/?spm=5176.8351553.0.0.4f441991dVcHxY)

[Docker中文文档](http://www.dockerinfo.net/document)

[docker-compose.yaml 官方说明](https://docs.docker.com/compose/compose-file/compose-file-v3/)

[Alpine](https://yeasy.gitbook.io/docker_practice/os/alpine)

[阿里云镜像容器](https://cr.console.aliyun.com/cn-hangzhou/instances)

**简述：**

最开始我们启动一个docker容器，拉取镜像，然后通过 `run` 命令，指定一些参数（暴露端口，环境变量，容器名称，挂载路径等）来启动容器，比较麻烦，且不容易记住那些携带的参数指令；后面引入Dockerfile，通过文件的形式，构建自己的镜像，通过docker build, run等命令操作容器；但如果是docker启动了一个微服务架构的业务，有很多个容器，每个容器都需要手动启停，就显得特别繁琐。docker-compose用于高效管理这些容器，是用于定义和运行多容器的工具

## 安装

* [docker-compose 项目地址](https://github.com/docker/compose/releases)

直接下载最新稳定版`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`，添加到`/user/local/bin`，添加可执行权限`sudo chmod +x /usr/local/bin/docker-compose`

也可以通过`yum`、`apt`等直接搜索安装，

**验证**：`docker-compose --version`

* [docker-compose命令补全工具](https://raw.githubusercontent.com/docker/compose)

直接下载，根据项目选择最新的版本号即可：`sudo curl -L https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/bash/docker-compose -o /etc/bash_completion.d/docker-compose`

重启即可生效

## 基本结构

一般分为四部分，第一条指令必须是`FROM`。一个声明以`＃`字符开头则被视为注释。可以在Docker文件中使用`RUN`，`CMD`，`FROM`，`EXPOSE`，`ENV`等指令。

* service：服务模块，可多个
* networks：网络模块，负责多个容器之间的项目通信
* 镜像操作指令
* 容器启动时执行指令

## 常用指令

常用指令通过`docker-compose --help`查看介绍，docker-compose 指令以 `docker-compose`开头，大部分指令和docker保持一致

注意：下面格式中的`nginx`代表参数为 服务名，要对哪个服务做对应的操作

| 指令        | 格式                             | 说明                                      | 备注              |
| ----------- | -------------------------------- | ----------------------------------------- | ----------------- |
| **up**      | `docker-compose up -d .yaml文件` | 构建、启动容器                            | -d：标识后台运行  |
| **build**   | `docker-compose build .yaml文件` | 构建或重新构建容器                        |                   |
| **exec**    | `docker-compose exec nginx bash` | 进入到容器中                              |                   |
| **ps**      | `docker-compose ps`              | 查看运行的容器                            |                   |
| **logs**    | `docker-compose logs -f nginx`   | 查看日志                                  | -f : 滚动查看日志 |
| **config**  | `docker-compose config -q`       | 检查`docker-compose.yaml`语法是否正确     |                   |
| **rm**      | `docker-compose rm nginx`        | 删除容器                                  |                   |
| **start**   | `docker-compose start nginx`     | 启动容器                                  |                   |
| **stop**    | `docker-compose stop nginx`      | 停止容器                                  |                   |
| **restart** | `docker-compose restart nginx`   | 重启容器                                  |                   |
| **kill**    | `docker-compose kill nignx`      | 通过发送 SIGKILL 信号来停止指定服务的容器 |                   |
| **pause**   | `docker-compose pause nginx`     | 暂停容器                                  |                   |
| **unpause** | `docker-compose unpause nginx`   | 恢复容器                                  |                   |
|             |                                  |                                           |                   |

## docker-compose.yaml语法

### **version**：

指定 `docker-compose.yml` 文件的写法格式

### **services**：

多个容器集合

### **build**：

配置构建时，Compose 会利用它自动构建镜像，该值可以是一个路径，也可以是一个对象，用于指定 Dockerfile 参数

```dockerfile
build: ./dir
---------------
build:
    context: ./dir
    dockerfile: Dockerfile
    args:
        buildno: 1
```

### **command**：

覆盖容器启动后默认执行的命令

```dockerfile
command: bundle exec thin -p 3000
----------------------------------
command: [bundle,exec,thin,-p,3000]
```

### **image**：

指定服务所使用的镜像

```dockerfile
image: java
```

### expose

暴露端口，但不映射到宿主机，只被连接的服务访问，仅可以指定内部端口为参数

```dockerfile
expose:
- "3000"
- "8000"
```

### **ports**：

对外暴露的端口定义，和 expose 对应

```dockerfile
ports:   # 暴露端口信息  - "宿主机端口:容器暴露端口"
- "8763:8763"
- "8763:8763"
```

### **environment**：

环境变量设置，可使用数组或字典两种方式

```dockerfile
environment:
  RACK_ENV: development
  SHOW: 'true'
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SHOW=true
  - SESSION_SECRET
```

### **depends_on**

服务之前的依赖关系，启动服务时，会先启动被依赖的服务

```dockerfile
web:
  depends_on:
    - redis
    - mysql
```

### **networks**：

网络模块，可以用于指定服务使用的网络，使用共同网络的容器可以相互通信

```dockerfile
networks:
   my_network:
      - "bridge"
# host		主机模式，与宿主机共享网络，使用宿主机的ip和端口
# bridge	桥接模式，分配独立的ip，容器连接到一个docker0虚拟网桥，通过docker0网桥与宿主机通信
# none 		孤岛模式，该模式关闭了容器的网络功能
# container 和一个指定的容器共享IP
```

### **links**：

连接到其他服务的容器

```dockerfile
web:
  links:
   - db				# 服务名
   - db:database	# 服务名: 别名
   - redis
```

### **external_links**：

连接到`docker-compose.yml`外部的容器，甚至并非Compose管理的容器，特别是提供共享或公共服务的容器。格式跟links类似

```dockerfile
external_links:
 - redis_1
 - project_db_1:mysql		# 服务名:别名
 - project_db_1:postgresql
```

### volumes

卷挂载路径设置。可以设置宿主机路径 （`HOST:CONTAINER`） ，也可指定访问模式 （`HOST:CONTAINER:ro`），只读（ro），读写（rw），读写（rw）

```dockerfile
volumes:
  - /var/lib/mysql					# 指令容器内的一个路径，让容器创建
  - /opt/data:/var/lib/mysql		# 宿主机路径：容器路径
  - ./cache:/tmp/cache				# 相对于docker-compose.yml路径的宿主机路径：容器路径
  - ~/configs:/etc/configs/:ro		# 相对应当前用户的宿主机路径：容器路径：读写权限
  - datavolume:/var/lib/mysql		# 指定一个存在的卷
```

### **env_file**：

从文件中获取环境变量，可指定一个文件路径或路径列表

如果通过 `docker-compose -f FILE` 指定了Compose文件，那么env_file中的路径是Compose文件所在目录的相对路径。使用environment指定的环境变量会覆盖env_file指定的环境变量

```dockerfile
env_file: .env
--------------------------------
env_file:
  - ./common.env			# 共用
  - ./apps/web.env			# web用
  - /opt/secrets.env		# 密码用
```

### volumes_from

从另一个服务或容器挂载卷。可指定只读（ro）或读写（rw），默认是读写（rw）

```dockerfile
volumes_from:
 - service_name
 - service_name:ro
 - container:container_name
 - container:container_name:rw
```

**dns**

配置dns服务器。可以是一个值，也可以是一个列表

```dockerfile
dns: 8.8.8.8
dns:
  - 8.8.8.8
  - 9.9.9.9
```

### dns_search

配置DNS的搜索域名，可以是一个值，也可以是一个列表

```dockerfile
dns_search: example.com
dns_search:
  - dc1.example.com
  - dc2.example.com
```

### extends

基于已有的服务进行扩展。例如我们已经有了一个 webapp 服务，模板文件为`common.yml`，`development.yml`能继承`common.yml`中的所有服务和环境变量

```dockerfile
# common.yml
webapp:
build: ./webapp
environment:
 - DEBUG=false
 - SEND_EMAILS=false
 
---------------------
# development.yml
web:
extends:
file: common.yml
service: webapp
ports:
 - "8000:8000"
links:
 - db
environment:
- DEBUG=true
db:
image: postgres
```



## 其他

更新容器：

* 当配置文件变更时，`docker-compose up`更新容器
* 会删除旧容器，创建新容器，生成新的ip，所有指向旧容器的连接会关闭，重新指向新容器
