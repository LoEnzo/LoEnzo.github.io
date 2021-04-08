---
title: 开发环境配置笔记
tags:
 - tools
categories: 
 - Other
date: 2021-04-06
---

::: tip 

Window更换电脑，需要重新配置整套开发环境，环境变量，常用软件自定义设计，总是忘记需要百度，所以这里做个汇总，方便下次自己查阅
:::



[常用软件安卓目录参考](https://hjwu.gq/blogs/Other/SoftwareSummary.html)

## Dev

### JDK 

```shell
JAVA_HOME	jdk安装路径
CLASSPATH	;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
PATH		%JAVA_HOME%\bin	%JAVA_HOME%\jre\bin
验证：java -version
```

### Node.js

```shell
# 安装完成默认会添加到path路径，如果不慎勾选取消了，或者使用的压缩包，配置PATH即可
PATH	# 软件安装目录
```

### maven

```shell
MAVEN_HOME	# 软件安装路径
PATH		%MAVEN_HOME%\bin
```

### Tomcat

```shell
CATALINA_BASE	# 软件安装路径
CATALINA_HOME	# 软件安装路径
PATH			%CATALINA_HOME%\lib	%CATALINA_HOME%\bin
# 验证:	安装目录\bin 启动startup.bat，本地访问 localhost:8080，能看到tomcat信息即可
```

### Yarn

```shell
# 安装完成即可使用过，如果采用压缩包安装
PATH	# 安装目录\bin
验证：	yarn -v
```

### Go

```shell
# 安装完成即可使用，如果采用压缩包安装
PATH	# 安装目录\bin
验证：	go evn
```

### Git

```shell
# 安装完成即可使用，如果采用压缩包安装
PATAH	# 安装目录\cmd
验证：	git version
```

## Database

### MySql

```shell
# 下载安装完成后，以管理员方式启动命令提示符，切换到 安装目录\bin 下
# 初始化数据库，执行指令后会显示初始化的密码	
mysqld --initialize --console
mysqld -install	# 安装服务	
net start mysql # 启动服务	
mysql -hlocalhost -uroot -p	 # 登录MySql,格式：mysql -h 主机名 -u 用户名 -p
```

:::details my.ini	启动前需要配置初始化 my.ini配置文件，没有则新建即可

```
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=C:\\web\\mysql-8.0.11
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=C:\\web\\sqldata
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

:::

### Redis

```shell
# 下载安装完成之后，以管理员方式启动命令提示符，切换到 安装目录 下
redis-server --service-install redis.windows.conf	# 以该配置文件注册服务，去服务中启动该服务即可，避免每次使用后面命令窗口运行
requirepass your_password	# 在redis.windows.conf找到 requirepass foobared, 去除注解，修改密码即可
# 推荐使用 AnotherRedisDesktopManager 可视化客户端，新建连接，Auth 输入设定的密码即可
```

## Editor

### SublmeText3

```shell
# 安装中文插件

Ctrl+`	输入下列内容，出现success或者提示框即可
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

ctrl+shift+p	打开命令面板

输入install pacakge enter
输入ChineseLocalzations enter即可

# 安装插件 一键格式化 html css js

同上，输入html-css-js prettify enter
注意，默认使用nodejs环境，安装插件完成后，在首选项，设置，插件设置中修改该插件的设置，修改文件的node path即可
```

### Typora

```shell
# 修改默认样式

打开 安装路径\resources\app\style base-control.css
搜索 typora-source .CodeMirror-lines，修改 max-width: 1200px
打开typora偏好设置，打开 github 主题配置，其他主题同理
搜索 write标签，修改 max-width: 1060ox
```

## Other

### scoop

```shell
# windows 包管理工具，类似于linux yum 
# 管理员启动Powershell，依次执行
set-executionpolicy remotesigned -scope currentuser
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

# 添加额外软件源
scoop bucket add extras https://github.com/lukesampson/scoop-extras.git

scoop install sudo  # 安装完成，可以win+r启动命令行，命令前加入sudo可实现管理员权限运行
scoop install git
```

::: details  报错无法访问 raw.githubusercontent.com，需要先将域名写入hosts文件

```shell
185.199.108.133   raw.githubusercontent.com
185.199.109.133   raw.githubusercontent.com
185.199.110.133   raw.githubusercontent.com
185.199.111.133   raw.githubusercontent.com
```

:::

### tail

```shell
# windows下查查看日志无法使用tail，可以使用git bash代替
# 网上找下tail.exe, 下载完成后，放到 C:\Windows\System32 即可在其他终端使用tail指令
# 这里放置一个，失效百度 链接: https://pan.baidu.com/s/1-LiogYgYcAEbZUstdEZURg 密码: 1w6p
```

