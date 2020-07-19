---
title: Linux常用指令和常用软件包安装
tags:
 - Linux
categories:
 - framework
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
ls -l /proc/进程号/cwd               #得到 服务/进程 的路径
history |grep 命令（应用）           #查找命令中含有“命令”的历史记录
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

### 5. 安装常用安装包

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
dpkg -s 软件名  dpkg --get-selections
```

### 6. 安装telnet

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

### 7. 同步虚拟机和主机时间

```shell
# 下载依赖（这步我没有做）
yum -y install perl gcc gcc-c++ make cmake kernel kernel-headers kernel-devel net-tools

# 点击VMware -> 虚拟机 -> 安装WMware Tools

# 将CD-ROM 挂载到指定目录，/mnt/cdrom目录若不存在，自行创建
mount -t auto /dev/cdrom /mnt/cdrom

# 查看压缩包名称
ll /mnt/cadrom/

# 拷贝安装包到用户目录 /home/user
cp /mnt/cdrom/WMwareTools压缩包名称.tar.gz

# 解除挂载
umount /dev/cdrom

# 解压安装包
tar -zxvf VMwareTools压缩包.tar.gz

# 进入解压目录
cd vmware-tools-distrib/

# 运行 vmware-install.pl文件
./vmware-install.pl

# 一路enter,看到Enjoy表示安装成功，

# 虚拟机里可以在设置中勾选将主机与虚拟机时间同步
```

### 8. 注意

```shell
# 修改 /etc/profile 环境配置文件错误，导致linux所有命令失效
export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
```

## 三、虚拟机安装`centos 7`

### 1. 安装`VMware 15`虚拟机

### 2. 安装`SSH`

```shell
# 安装ssh
sudo yum install -y curl policycoreutils-pythonopenssh-server

# 将ssh服务设置为开机自启
sudo systemctl enable sshd  
 
# 启动ssh服务
sudo systemctl start sshd

# 安装防火墙
yum install firewalled systemd -y

# 开启防火墙
service firwalled start

# 添加`http`服务到`firewalld`，`permmanet`表示永久生效，若不加--permanet系统下次启动就会失效
sudo firewall-cmd --permanet --add-service=http

# 重启防火墙
sudo systemctl reload firewalld

# 安装Postfix以发送邮件通知
sudo yum install postfix


# 将postfix服务设置为开机自启
sudo systemctl start postfix

在安装Postfix期间，可能会出现配置屏幕。选择“Internet Site”并按enter键。使用您的服务器的外部DNS以“mail name”并按enter。如果出现额外的屏幕，继续按enter键接受默认值。
```

### 3. 防火墙

#### 		3.1  `iptable`防火墙

```shell
# 查看防火墙状态
service iptables status  
 
# 停止防火墙
service iptables stop  
 
# 启动防火墙
service iptables start  
 
# 重启防火墙
service iptables restart
  
# 永久关闭防火墙
chkconfig iptables off  
 
# 永久关闭后重启
chkconfig iptables on　

# 保存退出重启防火墙
service iptables restart

# 开启80端口
vim /etc/sysconfig/iptables
# 加入如下代码
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
```

#### 		3.2  `firwall`防火墙

```shell
# 开启
service firewalld start

# 重启
service firewalld restart

# 关闭
service firewalld stop

# 查看firewall服务状态
systemctl status firewalld

# 查看firewall的状态
firewall-cmd --state

# 查看防火墙规则
firewall-cmd --list-all 

# 查询端口是否开放
firewall-cmd --query-port=8080/tcp

# 开放80端口
firewall-cmd --permanent --add-port=80/tcp

# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp

# 重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload

# 参数解释
1、firwall-cmd：是Linux提供的操作firewall的一个工具；
2、--permanent：表示设置为持久；
3、--add-port：标识添加的端口；
```

### 4. 其他配置

#### 4.1 访问虚拟机服务器慢

​		SecureCRT、Xshell 访问本地虚拟机linux系统慢的问题，原因是ssh的服务端在连接时会自动检测dns环境是否一致导致的，修改为不检测即可，操作如下：

```shell
# 修改ssh配置文件
cd /etc/ssh/
vim sshd_config

# 修改UseDNS的属性值为no, 并打开注释
UseDNS: no

# 重新启动sshd服务
service sshd restart
```

