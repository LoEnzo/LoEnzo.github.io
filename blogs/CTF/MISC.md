---
title: MISC WriteUp 
tags:
 - CTF
 - MISC
categories:
 - CTFWriteUp
date: 2020-05-17
---

::: tip

CTF MISC（杂项）WriteUp

:::

题目来源： [题目 - Bugku CTF](https://ctf.bugku.com/challenges/index/gid/1/tid/4.html)

## 签到题

::: details 签到题 详情查看

解题：没啥，送分，扫描微信回复flag即可

:::

## 社工-进阶收集

::: details 社工-进阶收集 详情查看

提　　示: flag{小美小区名字拼音}

描　　述: 小明当年为了追求小美想尽办法获得小美的地址。直到有一天小美发了一条说说，小明觉得希望来了。 (实战改编题，难度降低了。)

![qq](./images/qq.png)	

解题：图片是西安大雁塔北广场，走着去下一站不久6站，也就说，前面6站是不用换成的，最后一战是换成到的 大雁塔 站，且还提到始发站，打开地图，满足位置的只有地铁2号线；以始发站 韦曲南 800m半径、第二站 航天城 1000m半径画圆，上下排除几十米误差，交叉点即为小美家地址

![image-20230517155315966](./images/image-20230517155315966.png)

:::

## 1和0的故事

::: details 1和0的故事 详情查看

解题：下载文件，得到如下text

```
0000000001110010000000000
0000000000011110100000000
0000000001110001000000000
0000000010111100000000000
0000000010101010000000000
0000000001100010100000000
0000000010101010100000000
0000000001000001100000000
1100011101110110100011000
0001000010110010010010100
0100111101000011101110011
0011110100101011001001001
1000001001100001001101000
1111000111111011100101000
1011011111001101111110111
1000110110010010101101100
1000111100111111111110111
0000000010110001100010100
0000000010010100101010001
0000000010101010100011001
0000000000100111111110010
0000000000011001011110111
0000000001001100100100001
0000000011000011011011001
0000000011010000101110101
```

看样子大概想到是长宽相等的正方形，优先想是否是二维码，二维码 左上、右上、左下有定位符，看数字，基本都是0，大概率就是二维码了；

可以往上找工具，或者直接在excel中按单元格录入数据，然后 将1置成黑色，0置成白色，注意，定位符按平时扫描儿的二维码置底色即可，最终扫描二维码可以得到flag

:::

## easy_nbt

::: details easy_nbt 详情查看

解题：根据题目 easy_nbt，下载文件得到并解压，得到 New World 文件夹，文件内容看不懂啥意思，直接打开，也找不到相关信息；百度 nbt 搜到了是游戏 我的世界 里面的一种文件格式，也是直接解压的，尝试从外层目录 level.dat文件开始解压，

解压得到 level文件，用文本文件根据提示以二进制方式打开，搜索flag可得结果

![image-20230517165515136](./images/image-20230517165515136.png)

:::

## 隐写

::: details 隐写 详情查看

下载得到 2.png 图片

工具：[TweakPNG (entropymine.com)](http://entropymine.com/jason/tweakpng/)

解题：图片来一般解题先改长宽高，使用 `TweakPNG`工具打开图片，看到下面的参数，将`500x400`，修改成`500x500`，改大一点也没关系，保存后重新打开图片即可看到答案

![image-20230519102909808](./images/image-20230519102909808.png)



![image-20230519103023236](./images/image-20230519103023236.png)

:::

## 眼见非实

::: details 眼见非实 详情查看

下载文件，得到 `眼见非实.docx`，直接打开，看不懂，notepad-- 以二进制打开，参考下面，可以知道 PK 开头，或二进制 `50 4B 03 04`的文件为 zip 格式文件，

[各种文件类型及文件头标识大全（十六进制） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/571208394)

修改文件后缀为 zip 后解压，得到一些文件夹目录，根据提示答案就是 flag{}

支持文件夹文本内容的搜索软件，或者挨个搜索一下每个文件，就能查看 flag

:::

## 这是一张单纯的图片

::: details 这是一张单纯的图片 详情查看

下载文件，得到 `file.jgp`，

解题：图片打开，没啥特别的，nodepad-- 打开，发现最末尾有串可疑字符，提取拼接后 `\&#107;\&#101;\&#121;\&#123;\&#121;\&#111;\&#117;\&#32;\&#97;\&#114;\&#101;\&#32;\&#114;\&#105;\&#103;\&#104;\&#116;\&#125;`，

斜杠是我多加的，否则在 md文档中自动转义了；

使用在线工具 [在线Unicode编码转换-Unicode和ASCII在线互转-中文转Unicode工具 (jsons.cn)](http://www.jsons.cn/unicode)，ASSII转Unicode，即可查看 flag

另外，参考别人思路，notepad-- 打开看到这 assii 字符后，直接修改后缀为 .html，当网页打开可以自动转移，和我拷贝到 typora md文本编辑器直接转义显示出flag一样的道理

:::

## 游戏过关

::: details 游戏过关 详细查看

文件下载，得到`ConsoleApplication4.exe`，双击为控制台窗口小游戏，根据提示

```
玩个游戏
n是灯的序号，m是灯的状态
如果第 N 个灯的 m 为 1，则打开，否则关闭
一开始所有的灯都关着
现在你可以输入 n 来改变它的状态
但是你要注意一件事，如果你改变第 N 个灯的状态，第 (N-1) 和 (N+1) 的状态也会改变
当所有灯都亮起时，会出现标志
现在，输入 n
输入 n,n(1-8)
```

根据提示直接开始完，瞎鼓捣一下，居然就出结果了....

![game](./images/game.png)

还是IDA查看一下

![image-20230530144033615](./images/game01.png)

双击函数进去，在双击出现函数，得到如下：

```c
int sub_45E940()
{
  int v0; // eax
  int v1; // edx
  int v3; // [esp-4h] [ebp-168h]
  int i; // [esp+D0h] [ebp-94h]
  char v5[22]; // [esp+DCh] [ebp-88h] BYREF
  char v6[32]; // [esp+F2h] [ebp-72h] BYREF
  char v7[4]; // [esp+112h] [ebp-52h] BYREF
  char v8[64]; // [esp+120h] [ebp-44h]
  int v9; // [esp+160h] [ebp-4h]
  int savedregs; // [esp+164h] [ebp+0h] BYREF

  sub_45A7BE("done!!! the flag is ");
  v8[0] = 18;
  v8[1] = 64;
  v8[2] = 98;
  v8[3] = 5;
  v8[4] = 2;
  v8[5] = 4;
  v8[6] = 6;
  v8[7] = 3;
  v8[8] = 6;
  v8[9] = 48;
  v8[10] = 49;
  v8[11] = 65;
  v8[12] = 32;
  v8[13] = 12;
  v8[14] = 48;
  v8[15] = 65;
  v8[16] = 31;
  v8[17] = 78;
  v8[18] = 62;
  v8[19] = 32;
  v8[20] = 49;
  v8[21] = 32;
  v8[22] = 1;
  v8[23] = 57;
  v8[24] = 96;
  v8[25] = 3;
  v8[26] = 21;
  v8[27] = 9;
  v8[28] = 4;
  v8[29] = 62;
  v8[30] = 3;
  v8[31] = 5;
  v8[32] = 4;
  v8[33] = 1;
  v8[34] = 2;
  v8[35] = 3;
  v8[36] = 44;
  v8[37] = 65;
  v8[38] = 78;
  v8[39] = 32;
  v8[40] = 16;
  v8[41] = 97;
  v8[42] = 54;
  v8[43] = 16;
  v8[44] = 44;
  v8[45] = 52;
  v8[46] = 32;
  v8[47] = 64;
  v8[48] = 89;
  v8[49] = 45;
  v8[50] = 32;
  v8[51] = 65;
  v8[52] = 15;
  v8[53] = 34;
  v8[54] = 18;
  v8[55] = 16;
  v8[56] = 0;
  qmemcpy(v5, "{ ", 2);
  v5[2] = 18;
  v5[3] = 98;
  v5[4] = 119;
  v5[5] = 108;
  v5[6] = 65;
  v5[7] = 41;
  v5[8] = 124;
  v5[9] = 80;
  v5[10] = 125;
  v5[11] = 38;
  v5[12] = 124;
  v5[13] = 111;
  v5[14] = 74;
  v5[15] = 49;
  v5[16] = 83;
  v5[17] = 108;
  v5[18] = 94;
  v5[19] = 108;
  v5[20] = 84;
  v5[21] = 6;
  qmemcpy(v6, "`S,yhn _uec{", 12);
  v6[12] = 127;
  v6[13] = 119;
  v6[14] = 96;
  v6[15] = 48;
  v6[16] = 107;
  v6[17] = 71;
  v6[18] = 92;
  v6[19] = 29;
  v6[20] = 81;
  v6[21] = 107;
  v6[22] = 90;
  v6[23] = 85;
  v6[24] = 64;
  v6[25] = 12;
  v6[26] = 43;
  v6[27] = 76;
  v6[28] = 86;
  v6[29] = 13;
  v6[30] = 114;
  v6[31] = 1;
  strcpy(v7, "u~");
  for ( i = 0; i < 56; ++i )
  {
    # 参考别人理解，是 V5 和 V8两个数组求与，然后在和 0x13u 求与
    v5[i] ^= v8[i];
    v5[i] ^= 0x13u;
  }
  v0 = sub_45A7BE("%s\n");
  v3 = v1;
  sub_459AE9(&savedregs, &dword_45EC04, v0);
  return sub_458801((unsigned int)&savedregs ^ v9, v3);
}
```

借用网上大佬的python代码

```python
# py 3
# coding:utf-8
 
array1 = [18,64,98,5,2,4,6,3,6,48,49,65,32,12,48,65,31,78,62,32,49,32,1,57,96,3,21,9,4,62,3,5,4,1,2,3,44,65,78,32,16,97,54,16,44,52,32,64,89,45,32,65,15,34,18,16,0]
#第一个数组
 
array2 = [123,32,18,98,119,108,65,41,124,80,125,38,124,111,74,49,83,108,94,108,84,6,96,83,44,121,104,110,32,95,117,101,99,123,127,119,96,48,107,71,92,29,81,107,90,85,64,12,43,76,86,13,114,1,117,126,0]
#第二个数组
 
flag = ''
for i in range(len(array1)):
    flag+= chr(array1[i] ^ array2[i] ^ 0x13 )
    #两个数组求与，然后每一位与0x13求与
    
print (flag)
```

:::

## 啊哒

::: details 啊哒 详情查看

下载文件得：ada.jpg

解题：邮件查看属性，发现有 `照相机型号：73646E6973635F32303138`，看起来是16进制字符串， 尝试转其他进制，看结果应该不是这思路

网上搜索了下，16进制转ASCII字符串，参考下列工具，得到结果`sdnisc_2018`，看这返回结果，感觉是这个没错

估计是个密码啥的，尝试修改文件后缀为 `.zip`，打开发现有文件`flag.text`，输入上面密码即可得 flag

工具：[十六进制到ASCII | 十六进制到文本字符串转换器 (rapidtables.org)](https://www.rapidtables.org/zh-CN/convert/number/hex-to-ascii.html#:~:text=在输入文本框中粘贴十六进制字节码。,选择字符编码类型。 按下转换按钮。)

:::

## telnet

::: details telnet 详情查看

下载文件得：`networking.pcap`

解题：notepad-- 文件直接打开，提示二级制或者文本方式打开，两种格式，打开后，全文搜索 flag直接看到结果

学习：.pcap 文件：[(89条消息) pcap文件详解_meteor^_^的博客-CSDN博客](https://blog.csdn.net/ytx2014214081/article/details/80112277)

工具：[Wireshark · Download](https://www.wireshark.org/download.html)，这个地址下载快一点：[Wireshark v3.6.1 绿色版.zip - 蓝奏云 (lanzoul.com)](https://l13144.lanzoul.com/its9lzbk38h)

运行程序，打开`networking.pcap`文件，邮件追踪流，TCP就可以直接看到 flag

![image-20230612173154233](./images/telnet.png)

:::

## ping

::: details ping详情查看

下载文件得解压得 `ping.pcap`

解题：使用工具 wireshark 打开，看着一串下来都是 ICMP 的，每条看起来很有规律，按个点击，发先就是 Data 数据中的前两位会变化，

如下图，看最后面也能看到 `f`，就是对应的16进制转换成的字符，按顺序即可看到 `flag{}`，所以就是每条 Data 数据截取前两位，然后再16进制转换为字符串即可

![ping](./images/ping.png)

wireshark 还有个指令模式，再对应的目录下，可参考下面使用

指令：` ./Wireshark/App/Wireshark/tshark.exe -r ping.pcap -T fields -e data.data | cut -c -2 | awk '{printf($1)}'`

![ping-01](./images/ping-01.png)

[16进制到ASCII字符串在线转换工具 - Coding.Tools](https://coding.tools/cn/hex-to-ascii)

使用在线工具即可将所得16进制转为字符串

:::

## blind_injection

::: details blind_injection 详情查看

下载文件解压得：`cap.pcap`

![blind_injection](./images/blind_injection.png)

解题：根据提示是盲注，看数据流，http请求即是盲注内容

`http://119.23.75.183:8033/Less-5/?id=1'%20and%20substr((select%20group_concat(table_name)%20from%20information_schema.tables%20where%20table_schema=database()),1,1)='a'%20--+`

一般来说，都是响应包字节不同或者是序号中的最后一个才是正确的字符，入截图中，第一个字符是 `e`，按此规律一次凭借得`emails,flag_e62d3da86fe34a83bbfbdb9d3177a641`

有个问题：有可能挨个拼接，不知道哪位开始才是最终的flag，如果字符串过长，是不可取的，要么得自己写脚本直接跑出来，再看结果，要么，得定位到flag开始出现的位置，一般搜索字符`f`，且当前行满足也整行是当前响应的最后一条记录，然后从那里开始再往后面推即可

:::

## Snowfall

::: details Snowfall 详情查看

下载文件解压得：`step1.text`，`step2.text`

解题：打开两个解压文件，都是写纯文本的内容，根据提示，肯定也是看 `step1.text`文件，

看评论区思路，才发现每行后面有些空行，notepad-- 打开文件直接看没看出来，不过光标再每行最后位置可以看出区别，根据评论区提示，这种要去 `whitespace`解

工具：[Whitelips the Esoteric Language IDE (vii5ard.github.io)](https://vii5ard.github.io/whitespace/)

将第一个文件的问题直接复制进去，点击run即可，可以看到结果：`OK now you can run whitespace code. By the way, the key is H0wt0Pr1ntAWh17e5p4ceC0de. `

![Snowfall-01](./images/Snowfall-01.png)

下面是 `whitespace` 语言解析后输出结果，右边是解析后的栈流程

第二个文本解析结果如下：

![Snowfall-02](./images/Snowfall-02.png)

文件开头是7z，估计是个压缩包，参考网友思路，先将右侧栈流程拷贝到文本，就是写脚本，输入一个压缩包，第一步得到的key就是解压密码，参考`python`脚本如下：

```python
import re
from queue import LifoQueue


with open("snowfall.txt", "r") as f:
	data = f.read()
	data = data.splitlines()

stack = LifoQueue()

ret = ""
for line in data:
	if "push" in line:
		num = int(re.findall("push (.*?)$", line)[0])
		stack.put(num)
	elif line == "add":
		stack.put(stack.get() + stack.get())
	elif line == "dup":
		num = stack.get()
		stack.put(num)
		stack.put(num)
	elif line == "drop":
		stack.get()
	elif line == "printc":
		asc = chr(stack.get())
		# print(asc, end="")
		ret += asc

# save file
bin_data = ret.encode("latin1")
with open("1.7z", "wb") as f:
	f.write(bin_data)
```

五个函数说明：

> push：将数字压入栈顶
> printc：将栈顶元素弹出并以ASCII字符形式输出
> dup：复制栈顶元素后压入栈顶drop:弹出栈顶元素
> add：将堆栈最上方的两个元素弹出，二者做加法运算,得到的结果入栈***

执行python脚本，得到 `1.7z`压缩包，输入解压密码key `H0wt0Pr1ntAWh17e5p4ceC0de` 得到 `flag.text`，

打开文件，又是很多空行，也是复制到 `whitespace`网站解析，点击 RUN，居然没有结果，重新查看右边的栈流程，很多 drop 操作，也就是执行又删除了，对比之前的两个栈流程，将 `drop` 修改为 `printc`，也就是打印出来，重新修改后的python脚本即可，脚本如下：

```python
import re
from queue import LifoQueue


with open("flagresult.txt", "r") as f:
	data = f.read()
	data = data.splitlines()

stack = LifoQueue()

ret = ""
for line in data:
	if "push" in line:
		num = int(re.findall("push (.*?)$", line)[0])
		stack.put(num)
	elif line == "add":
		stack.put(stack.get() + stack.get())
	elif line == "dup":
		num = stack.get()
		stack.put(num)
		stack.put(num)
	elif line == "drop":
		asc = chr(stack.get())
		print(asc, end="")
```
:::

## chatgpt-1

::: details chatgpt-1 详情查看

描述: 本题是在研究chatgpt的灵光乍现。 也算是对AI安全性的一种测试。 由于是基于AI的，所以难度不能保证每个人一致但总体不会相差过大。 做题需要自备ApiKey（平台承诺不会窃取任何用户的ApiKey），介意勿开

启动应用场景，访问地址，估计每次不一样，这里就贴地址了，再右上角设置中配置自己的 openai 的  `apikey`

然后就可以开始了，了解几句，大概知道这个题的意思了，他内置隐藏了flag，需要你通过聊天，突破他自有的安全意识

截图参考：

![chatgpt-1](./images/chatgpt-1.png)

:::

## 简单取证1

::: details 简单取证1 详情查看

解压下载得：config 文件目录

工具：[mimikatz/x64/mimikatz.exe at master · ParrotSec/mimikatz · GitHub](https://github.com/ParrotSec/mimikatz/blob/master/x64/mimikatz.exe)、[md5在线解密破解,md5解密加密 (cmd5.com)](https://www.cmd5.com/)

解题：此类型，一般是解密`SYSTEM`文件，下载`mimikatz`软件，将exe文件放置到config文件目录（待分析文件目录同级），执行指令`lsadump::sam /sam:SAM /system:SYSTEM`，结果如下：

```shell

  .#####.   mimikatz 2.2.0 (x64) #18362 Feb 29 2020 11:13:36
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # lsadump::sam /sam:SAM /system:SYSTEM
Domain : DESKTOP-VBBTMVS
SysKey : 37f0b72b8ef4052d5a305281c2c8905c
Local SID : S-1-5-21-2468344919-3152572563-1510310172

SAMKey : 6bbc5d51b8b9609e241bba9a2558048e

RID  : 000001f4 (500)
User : Administrator

RID  : 000001f5 (501)
User : Guest

RID  : 000001f7 (503)
User : DefaultAccount

RID  : 000001f8 (504)
User : WDAGUtilityAccount
  Hash NTLM: 8adf83b531e1cdadc8d16b206d87a4d5

Supplemental Credentials:
* Primary:NTLM-Strong-NTOWF *
    Random Value : 58d06fcf956eb58ebd0869ec521014e6

* Primary:Kerberos-Newer-Keys *
    Default Salt : WDAGUtilityAccount
    Default Iterations : 4096
    Credentials
      aes256_hmac       (4096) : 1faacace6af0e20c359b06724c78091e449bf47b89acc2038f04e4ba2d572831
      aes128_hmac       (4096) : 709124a7e0fa42ff205ba8e78185c294
      des_cbc_md5       (4096) : c8c2263e86f426d0

* Packages *
    NTLM-Strong-NTOWF

* Primary:Kerberos *
    Default Salt : WDAGUtilityAccount
    Credentials
      des_cbc_md5       : c8c2263e86f426d0


RID  : 000003e8 (1000)
User : administrator-QQAAzz
// hash 加密方式 NTLM，后面是 md5 hash值
  Hash NTLM: 5f9469a1db6c8f0dfd98af5c0768e0cd

Supplemental Credentials:
* Primary:NTLM-Strong-NTOWF *
    Random Value : ec93efdfb8a9278be59f7a1f4116a46e

* Primary:Kerberos-Newer-Keys *
    Default Salt : DESKTOP-VBBTMVSadministrator-QQAAzz
    Default Iterations : 4096
    Credentials
      aes256_hmac       (4096) : 08da13a926b2b211cb0f1ba75ab191f72ed77469734eaf1f201199e553565005
      aes128_hmac       (4096) : 21f966b6130439e9675a028093241e31
      des_cbc_md5       (4096) : c8804662201043a2
    OldCredentials
      aes256_hmac       (4096) : cc294cf8db8838e1c973d8e868a4c32d7fd215162c9ae75a797493fd96cec3b7
      aes128_hmac       (4096) : d7230e305d7f9ab31247e9ed06da3e9f
      des_cbc_md5       (4096) : 62dfbf1c0dbc8685
    OlderCredentials
      aes256_hmac       (4096) : 11bc124de204c19f0f9305390aad0785f0bb5250eb0147a55d3ce95549bcc455
      aes128_hmac       (4096) : ac7b1df27906f24c8b9228e9e573f48f
      des_cbc_md5       (4096) : e6c7194a6eab4673

* Packages *
    NTLM-Strong-NTOWF

* Primary:Kerberos *
    Default Salt : DESKTOP-VBBTMVSadministrator-QQAAzz
    Credentials
      des_cbc_md5       : c8804662201043a2
    OldCredentials
      des_cbc_md5       : 62dfbf1c0dbc8685
```

在线MD5解密，选择类型`NTLM`，输入`5f9469a1db6c8f0dfd98af5c0768e0cd`，得结果`forensics`，拼接结果得 `flag{administrator-QQAAzz_forensics}`

:::

## 出师表

::: details 出师表 详情查看

解压下载文件得两个压缩包：`key.rar` 和 `出师表rar`

解题：

尝试打开，发现`key.rar`是不需要密码的，`出师表.rar`中有一张图片，解压需要密码，明显根据提示，密码来自第一个压缩包

`key.rar`包含了 p1 到 p13个文件，每个文件都是出师表中的句子，截取前面三个，发现末尾有A字符，每个不一样，有些还没有，下面是截取前面三个

![image-20230803163318724](./images/chushibiao-01.png)

A字符肯定是有作用的，不过统计了每个A字符数量作为密码未能解开第二个压缩包，只得根据评论区提示了，每个文件压缩前后大小有差值，

![image-20230803163533072](./images/chushibiao-02.png)

`75 101 121 58 90 104 117 71 76 64 64 46 48`，通过 asiic 解码得到 `Key:ZhuGL@@.0`，看字符密码就是`ZhuGL@@.0`

解压得到图片，提示`flag in here`，使用`010 Editor`工具打开图片，搜索 文本 flag可以看到下面内容：

![image-20230803170941835](./images/chushibiao-03.png)

字符串：`flag in here{LjFWBuxFNTzEWv6t2NfxjNFSH1sQEwBt5wTTLD1fJ}`

提交报错，那就是里面的字符还有一层编码，对其Base64解码未成功，对其Base58解码成功

注：

**Base58编码介绍：**
Base64是很多人熟知的一种编码，在URL传输领域，还有类似的Base32编码。
Base58编码去掉了一些特殊字符及容易混淆的字母和数字。。
   1、Base_58 主要是用于“比特币”中使用的一种独特的编码方式，主要用于产生“比特币”的钱包地址。
   2、相比 Base_64，Base_58 不使用数字 “0“，字母大写“O“，字母大写 “I“，和字母小写 “l“，以及 “+“ 和 “/“ 符号，比Base64共减少6个字符，故称着Base58。
**Base58编码字符：
** “123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz”
**Base58编码优势：**
   1、易读，没有混淆的字母和数字。
   2、此编码是一个混淆编码，看上去像Base64，但是其实不是；同时编码效率又高于Base32

:::