---
title: 虚拟机安装centos7
tags:
 - VMware 
categories:
 - DevTools
date: 2020-05-11

---

::: tip



:::

<!-- more -->

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

#### 3.3. 同步虚拟机和主机时间

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

