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

## 特殊的Base64

::: details 特殊的Base64 详情查看

下载文件：解压得`特殊的Base64.exe`文件

解题：

先IDA打开，`alt+t`搜索 flag 相关信息，可以看到如下信息

```shell
.rdata:0000000000489008 aMtyqm7wjodkrnl db 'mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI==',0
.rdata:0000000000489008                                         ; DATA XREF: main+36↑o
.rdata:0000000000489031 ; const char Str[]
.rdata:0000000000489031 Str             db 'Please input your flag!!!!',0
.rdata:0000000000489031                                         ; DATA XREF: main+51↑o
.rdata:000000000048904C ; const char aTheFlagIsRight[]
.rdata:000000000048904C aTheFlagIsRight db 'The flag is right!!!!!!!!!',0
.rdata:000000000048904C                                         ; DATA XREF: main+C6↑o
.rdata:0000000000489067 ; const char aThisIsAWrongFl[]
.rdata:0000000000489067 aThisIsAWrongFl db 'This is a wrong flag!!!!!!!!',0
.rdata:0000000000489067                                         ; DATA XREF: main:loc_40161A↑o
.rdata:0000000000489084 unk_489084      db    0                 ; DATA XREF: base64Encode(std::string)+29↑o
.rdata:0000000000489085 asc_489085      db '==',0               ; DATA XREF: base64Encode(std::string)+2AA↑o
.rdata:0000000000489088 asc_489088      db '=',0                ; DATA XREF: base64Encode(std::string)+3DE↑o
.rdata:000000000048908A                 align 10h
.rdata:0000000000489090 aAabbccddeeffgg db 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0987654321/+',0
.rdata:0000000000489090                                         ; DATA XREF: __static_initialization_and_destruction_0(int,int)+4E↑o
```

可以看到一串可以的 Base64编码串，`mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI==`，直接使用在线工具进行Base64解码，返回信息明显是错误的，

下面看到另外一串可以的字符`AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0987654321/+`，看起来像是字典，密码表之类的，百度了 及 查看评论区，了解到 Base64 有个基本的密码表：`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`，看起来和反编译查看到的，长度一致，只是顺序不同，也就说是说，这道题采用了自己的 Base64编码表，而不是常规的，

按顺序，也就是 A对应A，a对应B，B对应C的编码表，前者是题目本身，后者是标准Base64编码表顺序，

百度到python有对应的包可以直接使用

```python
import base64
import string

# 用户使用自定义Base64编码表加密的字符串
base64String = "mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI=="

# 用户自定义Base64编码顺序
userStr = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0987654321/+"
# 标准Base64编码顺序
baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

#利用密码表还原成正常base64编码后的字符串
newBase64Code=str1.translate(base64String.maketrans(userStr,baseStr))

#base64解码
print(base64.b64decode(newBase64Code).decode())
```

执行可得结果

```shell
92826@DESKTOP-HI2TV6C MINGW64 ~/Desktop
$ py 特殊Base64.py
flag{Special_Base64_By_Lich}
```

:::

## love

::: details love 详情查看

下载文件，解压得 `reverse_3.exe`

解题：

IDA默认模式打开，查看main函数，`alt+t`搜索 flag，然后f5 反编译得下面图

![love](./images/love.png)

直接查看 sub_411127(v9 , v8)函数，只看到了 v8, v9的定义，没看到那里有变更赋值操作；

不知道是不是软件版本不一致导致，网上别人反编译出来的结果如下

![love-1](./images/love-1.png)

看别人这个就比较清晰了，满足if中的判断，就能得到正确的flag

百度了了一下，strncmp() 函数：C 库函数 **int strncmp(const char \*str1, const char \*str2, size_t n)** 把 **str1** 和 **str2** 进行比较，最多比较前 **n** 个字节。

那就是比较 Dest 和 Str2 的长度一致，strlen() 函数就是 Dest 字符串长度，Str2 双击进去可以查看，或者前面的截图可以看到，如下`e3nifIH9b_C@n@dH`

Str2等同于Dest，原来 for循环是 Dest[j] += j;我们反过来即可

```c
#include<stdio.h>
#include<string.h>

# strlen就是字符串长度，在线编译不知道为啥不对，直接写死16
int main()
{
    char Dest[20]="e3nifIH9b_C@n@dH";
    // int len=strlen(str);
    for(int i=0;i<16;i++)
        Dest[i]-=i;
    for(int i=0;i<16;i++)
        printf("%c",Dest[i]);
}

// 返回 e2lfbDB2ZV95b3V9
```

直接标准 Base64解码 得`{i_l0ve_you}`，根据提示，拼接上 flag 即可

:::

