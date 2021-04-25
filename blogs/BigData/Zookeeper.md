---
title: zookeeper简单使用
tags:
 - zookeeper
categories:
 - BigData
date: 2020-09-09
---

::: tip

:::

<!-- more -->

## 安装启动

* [下载安装，选取带bin.tar.gz](http://mirror.bit.edu.cn/apache/zookeeper/)，否则启动报错找不到jar包之类的

* 修改环境变量

  > export ZOOKEEPER=/opt/app/lab/apache-zookeeper-3.5.8
  >
  > export PATH=${ZOOKEEPER}/bin:$PATH

* 修改默认配置，路径conf，复制一份模板用于修改，修改配置

  > cp zoo_sample.cfg zoo.cfg
  
  ```properties
  # example sakes.
  dataDir=/tmp/zookeeper
  # 新添加的，路径需要手动创建
  dataLogDir=/tmp/zookeeper/log
  # the port at which the clients will connect
  clientPort=2181
  ```
  
  启动，`start-foreground`启动可以看到报错

* > Usage: ./bin/zkServer.sh {start|start-foreground|stop|restart|status|upgrade|print-cmd}
>



## 其他

#### 1. 升级zookeeper

最开始是用的`kafka`自带的`zookeeper`配置文件方式启动的，使用`kafka manager`的时候报错，百度原因是`zookeeper`版本太低了

查看当前`zookeeper`版本，默认端口是2181，去官网下载新版本的`zookeeper`安装包安装即可

```shell
echo stat|nc localhost 2181
Zookeeper version: 3.4.12-e5259e437540f349646870ea94dc2658c4e44b3b, built on 03/27/2018 03:55 GMT
```

#### 2. 日志报错

> Unable to access datadir, exiting abnormally
>
> Snapshot directory has log files. Check if dataLogDir and dataDir configuration is correct

在执行清除文件的时候，Zookeeper发现当前节点上缺少`snap directory`(临时目录)，即缺少`/data/zookeeper/data/version-2`，并且在Zookeeper尝试自动创建此目录时也失败了 ( `zookeeper.datadir.autocreate` 是`flase`) ，最终导致了`exiting abnormally`(异常退出）

解决：删除设置的两个目录下的`version-2`即可，

