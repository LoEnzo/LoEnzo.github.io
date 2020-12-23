---
title: Windows下安装PHP开发环境
tags:
 - Apache
 - php
categories:
 - StudyNotes
date: 2020-08-08
---

::: tip

Windows下安装PHP开发环境的基本配置，包含Apache，mysql，php

:::

<!-- more -->

### 一、Apache

因为Apache官网只提供源代码，如果要使用必须得自己编译，这里我选择第三方安装包Apache Lounge。

- 进入Apachelounge官方[下载地址](http://www.apachelounge.com/download/);
- 首先下载并安装**vc redist**，这是Apache运行必需的一个组件;
- 下载Apache解压版，将解压后的文件夹放在你想要安装的路径下;
- 修改配置文件:

打开你的对应的安装路径 Apache\conf\httpd.conf

1. 配置中默认的路径：**C:\Apache24** 下（版本号可能不同）
   将其中所有前面没有被"#"注释的 **c:\Apache24**、**C:\Apache24\htdocs** 和 ***C:\Apache24\cgi-bin\***改成对应的路径。

2. 指定IP和端口：在**httpd.conf**找到**ServerName www.example.com:80**，将前面的注释去掉，将"www.example.com"修改为"localhost"。如果你要修改端口，将这里"80”和前面“Listen：80”中的80一起修改。

3. 添加系统变量：将"Apache的安装路径\bin"添加到Path中。验证安装是否成功：运行Apache的启动httpd.exe。在浏览器上输入localhost:80，如果不是无法访问那么Apache的配置便完成了。

4. 将Apache注册为Windows服务

   以管理员打开命令行

```shell
# Install | Uninstall
httpd.exe -k install
httpd.exe -k uninstall
```

### 二、PHP

1. 进入官网[下载安装](http://windows.php.net/download)，下载最新线程安全版PHP zip压缩包，解压缩后放在想要安装的路径下；

   **注意：** 下载的PHP VC版本不能比前面安装的vc redist版高。

2. 进入PHP安装目录，复制一份**php.ini-development** 改名为 **php.ini** 放到安装路径下

```ini
# 打开找到;extension_dir=ext，去掉注释符;，将值改为PHP安装路径\ext
extension_dir = "C:/Config/php-7.4.9/ext"
```

3. 在Apache中加载PHP & 定义执行PHP模块的文件，打开Apache的配置文件`conf\httpd.conf`，找到`LoadModule`区域，在其后加入：

```ini
# 不同的PHP版本“php7apache2_4.dll”可能不同，下载的php压缩包的时候选择 Thread Safe，否则没有dll
LoadModule php7_module "PHP安装路径\php7apache2_4.dll"
<IfModule php7_module>
    #告诉Apache PHP的安装路径
    PHPIniDir 'C:/Config/php-7.4.9/php.ini'        
    # define php  module file .php和.html的文件能执行PHP程序
    AddType application/x-httpd-php .php .html
    #AddType application/x-httpd-php-source .phps
</IfModule>
```

4. 测试：在 Apache安装路径\htdocs下新建文件：test.php，里面编辑：`<?php phpinfo(); ?>`， 启动Apache， 在浏览器输入：localhost:80/test.php，能看到php相关信息即成功。

### 三、MySQL

1. 官网[下载安装](https://dev.mysql.com/downloads/)，根据自己的需求的版本安装，默认初始化配置不在赘述

2. 在PHP中加载连接MySQL的程序集

   在`php.ini` extension板块中增加一行`extension=php_mysqli.dll`，不同的PHP版本可能提供不同的连接mysq的程序集，去ext文件夹下看看PHP提供的是什么这里就写什么，我添加了没有生效；

   把自带的哪一行注释取消了却生效了，不知道为啥，自带的是`;extension=mysqli`，取消注释即可

3. 测试：在test.php中编辑：`<?php $mysqli = mysqli_connect("localhost","root","pwd") or die("cannt connet"); ?>`，启动数据库，重启Apache，在浏览器端查看，如果没有错误信息便配置正确了。

