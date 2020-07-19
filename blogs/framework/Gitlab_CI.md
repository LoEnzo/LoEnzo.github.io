---
title: Gitlab-Ci 
tags:
 - gitlab
 - CI
categories:
 - framework
date: 2020-05-11
---

::: tip

gitlab_CI介绍及简单使用,

:::

<!-- more -->

## 1. CI流水线

## 2. shell脚本

### 1. 访问其他服务器

**主机公钥确认 `StrictHostKeyChecking`**

* `StrictHostKeyChecking=no` 最不安全的级别，当然也没有那么多烦人的提示了，相对安全的内网**测试**时建议使用。如果连接**server**的key在本地不存在，那么就自动添加到文件中（默认是known_hosts），并且给出一个警告。

* `StrictHostKeyChecking=ask` 默认的级别，就是出现刚才的提示了。如果连接和key不匹配，给出提示，并拒绝登录。

* `StrictHostKeyChecking=yes` 最安全的级别，如果连接与key不匹配，就拒绝连接，不会提示详细信息。

### 2. scp跨服务器指令

**scp** 是 secure copy的缩写，scp是linux系统下基于ssh登陆进行安全的远程文件拷贝命令。

linux的 **scp** 命令可以在linux服务器之间复制文件和目录。

3．命令参数：

| 命令参数 | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| -1       | 强制scp命令使用协议ssh1                                      |
| -2       | 强制scp命令使用协议ssh2                                      |
| -4       | 强制scp命令只使用IPv4寻址                                    |
| -6       | 强制scp命令只使用IPv6寻址                                    |
| -B       | 使用批处理模式（传输过程中不询问传输口令或短语）             |
| -C       | 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）            |
| -p       | 保留原文件的修改时间，访问时间和访问权限。                   |
| -q       | 不显示传输进度条。                                           |
| -r       | 递归复制整个目录。                                           |
| -v       | 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。 |
| -c       | cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。 |
| -F       | ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。  |
| -i       | identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。 |
| -I       | limit 限定用户所能使用的带宽，以Kbit/s为单位。               |
| -o       | ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，     |
| -P       | port 注意是大写的P, port是指定数据传输用到的端口号           |
| -S       | program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项 |