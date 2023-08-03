---
title: CTF Tools
tags:
 - CTF
categories:
 - CTFWriteUp
date: 2020-06-02
---

::: tip

CTF 相关工具持续整理

:::

## 其他

### 平台

* [CTFHub](https://www.ctfhub.com/#/tools)

### 在线

* [md5在线解密破解,md5解密加密 (cmd5.com)](https://www.cmd5.com/)

## WEB 相关

### dirsearch

> 简介：dirsearch是一个基于python3的命令行工具，常用于暴力扫描页面结构，包括网页中的目录和文件

下载：https://gitee.com/explore

使用：直接 clone下来，进入目录，`dirsearch.py -h`可以查看相关帮助

相关文档：[dirsearch目录扫描工具下载与使用 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/537515948)

使用示例：`python dirsearch.py -u http://a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com:8081`

返回：

```shell
  _|. _ _  _  _  _ _|_    v0.4.2.6
 (_||| _) (/_(_|| (_| )

Extensions: php, aspx, jsp, html, js | HTTP method: GET | Threads: 25 | Wordlist size: 11347

Output File: C:\Users\loenozo\Desktop\dirsearch-master\reports\a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com_8081\__23-06-02_11-48-32.txt

Target: http://a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com:8081/

[11:48:33] Starting:
[11:49:11] 200 -  172B  - /index.php.bak

Task Completed
```

### mimikatz

> 简介：一款内网渗透工具，可以用于取证，学习链接[【内网渗透】mimikatz 基本使用 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/399799909)

工具：[mimikatz/x64/mimikatz.exe at master · ParrotSec/mimikatz · GitHub](https://github.com/ParrotSec/mimikatz/blob/master/x64/mimikatz.exe)

示例：

```shell
  .#####.   mimikatz 2.2.0 (x64) #18362 Feb 29 2020 11:13:36
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # lsadump::sam /system:SYSTEM.0 /SAM:SAM.0
ERROR kuhl_m_lsadump_sam ; CreateFile (SYSTEM hive) (0x00000002)

mimikatz # lsadump::sam /sam:SAM /system:SYSTEM
```

- GitTools: git泄漏利用工具, 地址: https://github.com/internetwache/GitTools
- ds_store_exp: DS_Store泄漏利用工具, 地址: https://github.com/lijiejie/ds_store_exp
- burpsuite、fiddler: 抓包工具
- 菜刀、antsword蚁剑、behinder冰蝎: php木马利用工具
- 御剑: web目录扫描
- sqlmap: sql注入扫描
- namp: 端口扫描
- wappalyzer: 指纹识别
- netcat: 网络工具包
- metasploit: 渗透工具

## Reverse 相关

### IDA

> 简介：一款交互式反汇编工具，逆向分析工具-静态分析

使用：一般我用来反编译 `.exe`程序

相关文档：[IDA PRO新手使用教程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/82177268)

### pyinstxtractor.py
>简介：一款反编译工具，反编译由`pyinstaller`打包的exe文件下载连接：  

https://nchc.dl.sourceforge.net/project/pyinstallerextractor/dist/pyinstxtractor.py

- PEiD: 壳分析工具
- Ollydbg: 逆向分析工具-动态调试
- Android Killer: 安卓反编译
- Roeder’s .NET Reflector: .NET Framework反编译
- EasyPythonDecompiler: pyc反编译, 地址: https://sourceforge.net/projects/easypythondecompiler
- JD-GUI: Java反编译工具
- ILSpy: 是一个开源的.NET反编译工具
- angr: 约束求解器

## MISC 相关

### Wireshark

> 简介：网络分析工具

工具：[Wireshark · Download](https://www.wireshark.org/download.html)，这个地址下载快一点：[Wireshark v3.6.1 绿色版.zip - 蓝奏云 (lanzoul.com)](https://l13144.lanzoul.com/its9lzbk38h)

相关文档：[网络分析工具——WireShark的使用（超详细）_世间繁华梦一出的博客-CSDN博客](https://blog.csdn.net/zzwwhhpp/article/details/113077747)

### WhiteSpace

> 简介：WhiteSpace，是一种只用空白字符(空格，TAB和回车)编程的语言，而其它可见字符统统为注释。

工具：WhiteSpace 在线编译软件，[Whitelips the Esoteric Language IDE (vii5ard.github.io)](https://vii5ard.github.io/whitespace/)

### RouterPassView

> 简介：路由器密码查看器

### QR_Research

> 简介：二维码扫描器

### aircrack-ng/Wireshark

> 简介：流量分析

### 010editor

> 简介：16进制编辑器

### Advanced Archive Password Recovery

> 简介：压缩包密码破解

### R-studio、Diskgenius: 

> 简介：文件恢复、镜像挂载

### advanced office password recovery

> 简介：doc密码暴力破解

### volatility

> 简介：内存取证

### binwalk

> 简介：二进制文件分析

### foremost

> 简介：文件分离

### Audacity

> 简介: 音频分析

### steghide

> 简介: 隐藏文件

### gifsplitter

> 简介: gif分离工具

### MP3Stego

> 简介: Mp3隐写工具

### tweakpng

> 简介: png图片分析工具

### ntfsstreamseditor

> 简介: NTFS分区数据流检测工具

### pdfcrack

> 简介: pdf密码爆破

## Cryptography 相关

- kt.gy: 各种编码转换工具, 地址: https://github.com/koczkatamas/koczkatamas.github.io
- CyberChef: 英国情报机构政府通信总部官方离线解密解码html工具, 地址: https://github.com/gchq/CyberChef
- CTFtools: 工具合集, 地址: https://www.ctftools.com/down
- CTFCrackTools: 加解密工具合集
- bugku在线工具箱: 地址: https://tool.bugku.com/
- hydra: 系统服务密码暴力破解
- hashcat: hash密码破解
- mimikatz: 获取Win明文登录密码
- RsaCtfTool: rsa破解工具, 地址: https://github.com/Ganapati/RsaCtfTool

## PWN 相关

- pwntools: pwn常用工具
- checksec: 查看防御措施
- gdb: 二进制程序调试
- peda: 反汇编插件



# AWD相关

## 脚本

* 同步本地源码和远端源码脚本，用于修复漏洞后上传

::: details uploadScript.sh

```sh
#!/bin/bash

# 本地目录
localDir="/root/awd"
# 远端目录
remoteDir="/root"
# 连接远程服务器ip或域名
sshHost="121.x.x.5"
# 连接远程服务器端口号
sshPort="22"
# 连接远程服务器用户名
sshUser="user"
# 连接远程服务器密码
sshPass="password"

# sshpass + scp 全覆盖，耗时，不能同步删除文件
# sshpass -p "$sshPass" scp -P "$sshPort" -o StrictHostKeyChecking=no -r "$localDir"  "$sshUser"@"$sshHost":"$remoteDir"

# 只同步变更文件或目录，第一次最好先备份
rsync -av --progress --delete -e "sshpass -p $sshPass ssh -p $sshPort" "$localDir"  "$sshUser@$sshHost:$remoteDir"
```

:::