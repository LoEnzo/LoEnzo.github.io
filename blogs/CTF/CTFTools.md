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

## Reverse 相关

### IDA

> 一款交互式反汇编工具

使用：一般我用来反编译 `.exe`程序

相关文档：[IDA PRO新手使用教程 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/82177268)

## MISC 相关

### Wireshark

> 简介：网络分析工具

工具：[Wireshark · Download](https://www.wireshark.org/download.html)，这个地址下载快一点：[Wireshark v3.6.1 绿色版.zip - 蓝奏云 (lanzoul.com)](https://l13144.lanzoul.com/its9lzbk38h)

相关文档：[网络分析工具——WireShark的使用（超详细）_世间繁华梦一出的博客-CSDN博客](https://blog.csdn.net/zzwwhhpp/article/details/113077747)