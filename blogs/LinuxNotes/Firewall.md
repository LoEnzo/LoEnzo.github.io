---
title: Linux防火墙
tags:
 - firewall
 - ufw
 - iptables
categories:
 - Linux
date: 2021-01-18

---

::: tip

Linux防火墙，作为公网和内网之间的保护屏障，在保障数据安装性方面有至关重要的作用。常用的防火墙有 firewall，iptables，ufw，centos7开始默认是firewall。

:::

<!-- more -->

# firewall

| 指令                                                         | 备注               |
| ------------------------------------------------------------ | ------------------ |
| `systemctl start firewalld.service`                          | 开启防火墙         |
| `systemctl stop firewalld.service`                           | 停止防火墙         |
| `systemctl status firewalld`                                 | 查看防火墙设置状态 |
| `systemctl enable firewalld.service`                         | 开机自动启动       |
| `firewall-cmd --permanent --zone=public --add-port=8080-8081/tcp` | 开放端口永久       |
| `firewall-cmd  --zone=public --add-port=8080-8081/tcp`       | 开放端口临时       |
| `firewall-cmd --list-port`                                   | 查看端口           |

查看配置：

```shell
cat /etc/firewalld/zones/public.xml
```

::: details firewall 端口开放配置

```xml
<zone>
  <short>Public</short>
  <description>For use in public areas. You do not trust the other computers on networks to not harm your computer. Only selected incoming connections are accepted.</description>
  <service name="dhcpv6-client"/>
  <service name="ssh"/>
  <port protocol="tcp" port="80"/>   # 刚才开发的端口号
  <port protocol="tcp" port="8080"/>
</zone>
```

:::

​	

# iptables



