---
title: 内网穿透
tags:
 - natapp
categories:
 - StudyNotes
date: 2020-10-30
---

::: tip

内网穿透，简单来说就是将内网局域网的数据让外网能访问到。比如家里的笔记本是通过拨号或者连接路由器上网，没有公网ip，在外面无法获取到家里的电脑上的内容；又比如公司内网，只能在公司连接，不能再家里访问公司电脑的内容。相关的内网穿透软件会分配一个专属域名/端口，这样办公软件就已经在公网上了，

:::

<!-- more -->

### 一、NatApp

1. [官网链接](https://natapp.cn/)：

2. 点击注册，成功后进入主页，点击左侧购买隧道，NatApp提供了**免费隧道**，可以分别购买一个TCP、UDP、Web三种类型的免费隧道，根据提示输入信息即可，完成后即可在下方或者**我的隧道**处看到已购买隧道；

3. [下载链接](https://natapp.cn/)，包含了Windows、Linux、macos;

4. [下载配置文件](https://natapp.cn/article/config_ini)，根据提示修改配置信息

```properties
#将本文件放置于natapp同级目录 程序将读取 [default] 段
#在命令行参数模式如 natapp -authtoken=xxx 等相同参数将会覆盖掉此配置
#命令行参数 -config= 可以指定任意config.ini文件
[default]
authtoken=                      #对应一条隧道的authtoken
clienttoken=                    #对应客户端的clienttoken,将会忽略authtoken,若无请留空,
log=none                        #log 日志文件,可指定本地文件, none=不做记录,stdout=直接屏幕输出 ,默认为none
loglevel=ERROR                  #日志等级 DEBUG, INFO, WARNING, ERROR 默认为 DEBUG
http_proxy=                     #代理设置 如 http://10.123.10.10:3128 非代理上网用户请务必留空
```

5. 启动方式：

   * Windows下载为一个`.exe`的文件，
   
     ```shell
     # 命令行输入
     natapp -authtoken=xxx 
     
     # bat 多配置启动
     start natapp -authtoken=xxxx
     start natapp -authtoken=xxxx
     ```
   
   * Linux/Mac
   
     ```shell
     # 添加权限
     chmod a+x natapp
     
     # 运行
     ./natapp -authtoken=9ab6b9040a624f40
     ```

运行成功即可看到路径，linux，window启动都需要保留一个终端窗口，或者**改用脚本后台启动运行即可**。

### 二、utools

[utools](https://www.u.tools/)是一款快捷软件，里面能安装很多的插件，其中就有 内网穿透；

在插件中搜索**内网穿透**，安装即可，使用的时候直接输入**内网穿透**即可

