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

## Easy_vb

::: details Easy_vb 详情查看

工具：IDA 下载链接：[Download center (hex-rays.com)](https://www.hex-rays.com/download-center/)

解题：

下载得到文件 `easy_vb.exe`

可以先切换`Hex View-1`模式查看有没有特殊的字符，`ALT+T`尝试搜索关键字`flag`，`ctf`等，直接搜索到了答案

![image-20230524173455595](./images/Easy_vb.png)

提交答案报错，根据提示，答案为 flag{xxxx}，修改 MCTF 为 flag ，尝试提交，正确

::: 

## signin

::: details signin 详情查看

提　　示: 君远至此，辛苦至甚。 窃谓欲状，亦合依例，并赐此题。

描　　述: 来源：第七届山东省大学生网络安全技能大赛

下载文件得：`sign_in.zip`，解压缩得`sign_in_apk`，

工具：[Releases · charles2gan/GDA-android-reversing-Tool (github.com)](https://github.com/charles2gan/GDA-android-reversing-Tool/releases)

解题：看到解压后是APK文件，及为安卓逆向，寻找对应工具，如上GDA，

查看源码，如下，找到一个 getFlag 函数，大致找到 getFlag() 函数返回值，再逆向就可以了

![image-20230525112952638](./images/signin-01.png)

后续不知道怎么查看，看评论区，"大致说可以再R中搜索对应的编号，安卓为创建的固定值添加的一个标识ID方便重复引用。所以要去找这个写好的固定值究竟在哪里，R里写了tosring在strings里，所以去该xml文件里查"

![image-20230525113717445](./images/signin-02.png)

这里是找到了对应的 16进制编号位置，但是不明白为啥要去 strings.xml 文件中查找，而且这文件有很多，只是正好我找第一个找到了而已

![image-20230525113935149](./images/signin-03.png)



到这里就找到了这一串看起来特殊的值了，根据前面 getFlag下面的 reverse 提示，将这串字符逆序输出，再Base64解码即可得到答案

![image-20230525114158168](./images/signin-04.png)

:::