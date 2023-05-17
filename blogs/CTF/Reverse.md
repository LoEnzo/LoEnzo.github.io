---
title: Reverse WriteUp 
tags:
 - CTF
 - Reverse
categories:
 - CTFWriteUp
date: 2020-05-11
---

::: tip

CTF Reverse（逆向）WriteUp

:::

题目来源： [题目 - Bugku CTF](https://ctf.bugku.com/challenges/index/gid/1/tid/7.html)

## 入门逆向

::: details 入门逆向 详情查看

工具：IDA

下载链接：[Download center (hex-rays.com)](https://www.hex-rays.com/download-center/)

解题：

下载文件 baby.exe

使用 IDA 工具默认方式打开，main 文件即可直接查看答案

![image-20230516113940673](./images/image-20230516113940673.png)

:::

## Easy_Re

::: details Easy_Re 详情查看

工具：IDA

下载链接：[Download center (hex-rays.com)](https://www.hex-rays.com/download-center/)

解题：

下载文件 re1.exe

使用 IDA 工具默认方式打开，查看 Hex View-1，ALT+T 搜索`CTF`即可看到答案

![image-20230516145942802](./images/image-20230516145942802.png)

:::

## 逆向入门

::: details 逆向入门 详情查看

解题：

下载文件 admin.exe

修改后缀为 text，文本编辑器打开可以看到 `data:image/png:base64`，选在在线base64转图片，即可看到转出的二维码，扫描二维码即可看到答案

网址：[图片在线转换base64编码-在线base64编码转换成图片工具 (jsons.cn)](http://www.jsons.cn/img2base64/)

![image-20230516150728411](./images/image-20230516150728411.png)

:::