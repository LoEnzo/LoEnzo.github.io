---
title: Linux常用指令和常用软件包安装
tags:
 - Linux
categories:
 - LinuxNotes
date: 2020-05-11
---

::: tip

Linux的常用指令汇总，常用软件包安装；配置文件修改，防火墙修改等

:::

<!-- more -->

## 一、 常规指令

### 1、权限

```shell
chown -R 用户名 文件名(文件夹名)     #更改文件所属用户
chmod 777 路径+文件名（文件夹）      #文件（文件夹）赋权
chmod +x test.txt                  #赋予执行权限（当前用户？）
chmod -x test.txt                  #没收执行权限
chmod username+x test.txt          #某用户增加执行权限
chmod o+x test.txt                 #所有用户增加执行权限
```

### 2、编辑

```shell
vi 文件名                           #编辑文件，已存在则修改，未存在则自动创建
vi /etc/profile                    #编辑linux环境变量
export KAFKA_HOME=/DATA/software/kafka_2.11-2.0.1    #引入环境变量
source /etc/profile                #让修改后的环境变量立即生效
tar xvfz m.tar.gz                  #linux解压安装包
ls > cmd.txt                       #重定向  把命令的结果，重新写到文件里，会覆盖已有的内容
ls >> cmd.txt                      #向文件中追加内容
ps -ef|grep redis                  #查找redis进程
man bash | col -b > bash.txt       #过滤控制字符，解决乱码
grep ok test.txt                   #查找test.txt文件中的ok字段
```

### 3、查找/查看/开启

```shell
ps -ef|grep 应用名称                 #得到(进程)进程号
netstat -nap|grep 进程id             #得到进程对应的端口号
netstat -tunlp|grep 端口号           #得到端口号对应的进程
ls -l /proc/进程号/cwd               #得到 服务/进程 的路径
history |grep 命令（应用）            #查找命令中含有“命令”的历史记录
date                                #显示系统日期
uname -r                            #显示正在使用的内核版本
more 文件名                          #查看文件内容
tail -300f 文件名                    #动态查看最近300行日志
chkconfig --list                    #显示所有自动应用
chkconfig vsftpd on                 #开启自动启动
ls -l | grep "^d"                   #只列出目录
rpm -qa                             #列出系统所有安装包
df /home                            #查看挂载点
which java                          #查找命令在哪个目录
env                                 #查看环境变量
```

### 4、磁盘

```shell
df -h  /  df -lh                     #查看系统各目录磁盘空间及使用情况
du -h --max-depth=1                  #查看当前目录下各文件所占磁盘空间情况
top                                  #top命令是Linux下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，类似于Windows的任务管理器。退出 top 的命令为 q （在 top 运行中敲 q 键一次）。
du -s -h ./*                         #查看当前目录下各文件所占磁盘空间情况
du -sh *| sort -hr                   #当前目录下占用磁盘空间大小排序
```

### 5、内存

```shell
top -d 1                             #监控内存，然后shift+m内存排列
free -g                              #查看内存使用，单位为g
free -m                              #查看内存使用，单位M
grep MemTotal /proc/meminfo | cut -f2 -d:     #查看服务器总内存，单位kb
grep MemTotal /proc/meminfo          #查看服务器总内存，单位kb
```

### 6、系统命令

```shell
reboot                               #重启系统
shutdown -r now                      #重启系统
logout                               #注销登陆
shutdown -h now                      #关闭系统
date 041217002007.00                 #设置日期和时间 - 月日时分年.秒
```

### 7、防火墙

```shell
service iptables stop                #关闭防火墙
systemctl stop                       #关闭防火墙
firewalld.services                   #关闭防火墙
service iptables starts              #打开防火墙
systemctl start                      #打开防火墙
iptables.services                    #打开防火墙
service iptables restart             #重启防火墙
systemctl start                      #重启防火墙
ip6tables.service                    #重启防火墙
systemctl status firewalld          #查看防火墙状态
systemctl disable firewalld         #开机禁用
systemctl enable firewalld          #开机自启
```

### 8、TCP

```shell
netstat -an | grep ESTABLISHED | wc -l       #查看apache当前并发访问数
netstat -anp|more                            #显示整个系统目前的网络情况。例如目前的连接、数据包传
```

### 9、CPU

```shell
# 总核数 = 物理CPU个数 X 每颗物理CPU的核数 
# 总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数

cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l        #查看物理CPU个数
cat /proc/cpuinfo| grep "cpu cores"| uniq                       #查看每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep "processor"| wc -l                      #查看逻辑CPU的个数
cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c           #查看CPU信息（型号）
vmstat 1                                                        #监控CPU. 
top                                                             #监控进程
more /proc/cpuinfo | grep "model name"                          #查看cpu
grep "model name" /proc/cpuinfo                                 #查看cpu
grep "model name" /proc/cpuinfo | cut -f2 -d:                   #查看cpu
getconf LONG_BIT                                                #查看CPU位数(32
```

### 10、用户相关

```shell
useradd username           		   #创建用户（新创建的用户会在/home下创建一个用户目录incredible-test）
passwd username            		   #给已创建的用户设置密码
usermod --help            		   #修改用户这个命令的相关参数
userdel username           		   #删除用户
groupadd groupname        		   #添加组
groupdel groupname         		   #删除组
su username                		   #切换登陆用户,exit退出到root账户？
rm -rf /home/usernmae      		   #删除用户后，删除该用户目录
passwd                     		   #登陆root账户情况下，修改root密码
passwd username              	   #修改用户密码
useradd username -g groupname      #指定用户到某个组
usermod -g groupname username      #修改用户所在组
whoami                             #查看当前登陆的用户
```

## 二、其他指令

### 1. 文本指令

#### 1.1 命令模式

​	`vi/vim`进入命令模式，后面跟 文件名 可以进入查看文本内容

#### 1.2 输入模式

​	在命令模式下输入 `i` (insert) 可编辑文件

#### 1.3 底线命令模式

```shell
:   -进入底线命令模式
w   -保存文档
q   -退出文本编辑 
q!  -强制退出编辑
wq  -保存并退出文档编辑
/   -根据关键字查询
rm -rf  -删除文件、文件夹
```

### 2. 其他指令

```shell
# 查看端口使用情况
netstart -ntlp

# 修改文件、文件夹权限
chmod 777  文件或目录

# 修改文件所有者
chown -R 用户名 文件名 

# 查看tomcat是否启动
ps -ef|grep tomcat名

# 查找文件中PNR的日志的内容
grep -n 'HER96N' 20191015.log 
```

### 3. yum相关指令

​		`centos`中的`Shell`前端软件包管理器，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包

```shell
# 下载
yum -y install XXX

# 卸载
yum remove XXX

# 卸载相关软件包的相关依赖
sudo yum history list XXX
sudo yum history undo 编号
```

### 4. 安装常用安装包

```shell
# 安装wget用于从外网上下载插件
yum -y install wget

# 安装vim编辑器
yum install vim -y

# 安装linux上传下载软件包
yum -y install lrzsz
	· 上传 rz   
	· 下载 sz
# 安装编译源码所需要的依赖
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker

# ubuntu 下载安装
apt-get install 软件名

# ubuntu 查看是否安装某个软件，查看已安装的所有软件列表
dpkg -l | grep jdk(安装的软件名)

dpkg --get-selections

dpkg -l 显示详细列表

# 卸载安装的软件
sudo apt-get remove XXXX　　　　　＃卸载软件（删除软件包）

sudo apt-get autoremove XXXX     　　　　　#自动卸载软件但保留其配置文件

sudo apt-get autoremove --purge  XXXX 　　　　　#自动卸载软件其删除其配置文件
```

### 5. 安装telnet

```shell
# 安装telnet-server
yum -y install telnet-server

# 安装telnet
yum -y install telnet

# 安装 xinetd 守护进程
yum -y install xinetd

# 重启 xinetd 守护进程
service xinetd restart

# 测试是否安装成功
netstat -tnl | grep 23
```

* 修改 /etc/xinetd.d/telnet，没有则新建，disable 值改为 no

```shell
 default: on
# description: The telnet server serves telnet sessions; it uses \
#       unencrypted username/password pairs for authentication.
service telnet
{
        disable = no
        flags           = REUSE
        socket_type     = stream
        wait            = no
        user            = root
        server          = /usr/sbin/in.telnetd
        log_on_failure  += USERID
}
```

### 6. 注意

```shell
# 修改 /etc/profile 环境配置文件错误，导致linux所有命令失效
export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

### 7. curl请求	

[其他参考](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

```shell
# 手动输入密码（服务的开启了www-authenticate认证功能的）
curl -i -X POST -H 'header信息，多个用多个-H' --u 用户名 --data '请求信息' \接口地址，

# （明文密码，有暴露风险）
curl -i -X POST -H '请求头信息' --user 'user:password' --data '请求信息' \接口地址
```

### 8. 其他指令

```shell
# linux 中文件夹的文件按照时间倒序或者升序排列  ls -lt降序， ls -lrt升序
-l     use a long listing format  以长列表方式显示（详细信息方式）
-t     sort by modification time 按修改时间排序（最新的在最前面）
-r     reverse order while sorting （反序）

# 获取文件夹下匹配规则的最新目录
echo `ls -lt /文件夹目录/ |grep 参数 | head -n 1 |awk '{print $9}'` 
```

### 9. 设置 Swap交换内存

```shell
# 设置交换文件路径，文件大小
# 其中bs是每块的大小，count是块的数量；bs*count，就是swap文件的大小：这里1M*1024=1G。可以根据需要自行调整。
dd if=/dev/zero of=/mydata/swapfile bs=2M count=1024
# 格式化交换分区文件
mkswap swapfile
# 启用swap分区文件
swapon swapfile
# 添加开机启动,添加或者修改这一行：
vi /etc/fstab
swapfile swap swap defaults 0 0
```



