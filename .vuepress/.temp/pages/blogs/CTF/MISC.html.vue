<template><div><p>::: tip</p>
<p>CTF MISC（杂项）WriteUp</p>
<p>:::</p>
<p>题目来源： <a href="https://ctf.bugku.com/challenges/index/gid/1/tid/4.html" target="_blank" rel="noopener noreferrer">题目 - Bugku CTF</a></p>
<h2 id="签到题" tabindex="-1"><a class="header-anchor" href="#签到题" aria-hidden="true">#</a> 签到题</h2>
<p>::: details 签到题 详情查看</p>
<p>解题：没啥，送分，扫描微信回复flag即可</p>
<p>:::</p>
<h2 id="社工-进阶收集" tabindex="-1"><a class="header-anchor" href="#社工-进阶收集" aria-hidden="true">#</a> 社工-进阶收集</h2>
<p>::: details 社工-进阶收集 详情查看</p>
<p>提　　示: flag{小美小区名字拼音}</p>
<p>描　　述: 小明当年为了追求小美想尽办法获得小美的地址。直到有一天小美发了一条说说，小明觉得希望来了。 (实战改编题，难度降低了。)</p>
<p><img src="@source/blogs/CTF/images/qq.png" alt="qq"></p>
<p>解题：图片是西安大雁塔北广场，走着去下一站不久6站，也就说，前面6站是不用换成的，最后一战是换成到的 大雁塔 站，且还提到始发站，打开地图，满足位置的只有地铁2号线；以始发站 韦曲南 800m半径、第二站 航天城 1000m半径画圆，上下排除几十米误差，交叉点即为小美家地址</p>
<p><img src="@source/blogs/CTF/images/image-20230517155315966.png" alt="image-20230517155315966"></p>
<p>:::</p>
<h2 id="_1和0的故事" tabindex="-1"><a class="header-anchor" href="#_1和0的故事" aria-hidden="true">#</a> 1和0的故事</h2>
<p>::: details 1和0的故事 详情查看</p>
<p>解题：下载文件，得到如下text</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>0000000001110010000000000
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看样子大概想到是长宽相等的正方形，优先想是否是二维码，二维码 左上、右上、左下有定位符，看数字，基本都是0，大概率就是二维码了；</p>
<p>可以往上找工具，或者直接在excel中按单元格录入数据，然后 将1置成黑色，0置成白色，注意，定位符按平时扫描儿的二维码置底色即可，最终扫描二维码可以得到flag</p>
<p>:::</p>
<h2 id="easy-nbt" tabindex="-1"><a class="header-anchor" href="#easy-nbt" aria-hidden="true">#</a> easy_nbt</h2>
<p>::: details easy_nbt 详情查看</p>
<p>解题：根据题目 easy_nbt，下载文件得到并解压，得到 New World 文件夹，文件内容看不懂啥意思，直接打开，也找不到相关信息；百度 nbt 搜到了是游戏 我的世界 里面的一种文件格式，也是直接解压的，尝试从外层目录 level.dat文件开始解压，</p>
<p>解压得到 level文件，用文本文件根据提示以二进制方式打开，搜索flag可得结果</p>
<p><img src="@source/blogs/CTF/images/image-20230517165515136.png" alt="image-20230517165515136"></p>
<p>:::</p>
<h2 id="隐写" tabindex="-1"><a class="header-anchor" href="#隐写" aria-hidden="true">#</a> 隐写</h2>
<p>::: details 隐写 详情查看</p>
<p>下载得到 2.png 图片</p>
<p>工具：<a href="http://entropymine.com/jason/tweakpng/" target="_blank" rel="noopener noreferrer">TweakPNG (entropymine.com)</a></p>
<p>解题：图片来一般解题先改长宽高，使用 <code v-pre>TweakPNG</code>工具打开图片，看到下面的参数，将<code v-pre>500x400</code>，修改成<code v-pre>500x500</code>，改大一点也没关系，保存后重新打开图片即可看到答案</p>
<p><img src="@source/blogs/CTF/images/image-20230519102909808.png" alt="image-20230519102909808"></p>
<p><img src="@source/blogs/CTF/images/image-20230519103023236.png" alt="image-20230519103023236"></p>
<p>:::</p>
<h2 id="眼见非实" tabindex="-1"><a class="header-anchor" href="#眼见非实" aria-hidden="true">#</a> 眼见非实</h2>
<p>::: details 眼见非实 详情查看</p>
<p>下载文件，得到 <code v-pre>眼见非实.docx</code>，直接打开，看不懂，notepad-- 以二进制打开，参考下面，可以知道 PK 开头，或二进制 <code v-pre>50 4B 03 04</code>的文件为 zip 格式文件，</p>
<p><a href="https://zhuanlan.zhihu.com/p/571208394" target="_blank" rel="noopener noreferrer">各种文件类型及文件头标识大全（十六进制） - 知乎 (zhihu.com)</a></p>
<p>修改文件后缀为 zip 后解压，得到一些文件夹目录，根据提示答案就是 flag{}</p>
<p>支持文件夹文本内容的搜索软件，或者挨个搜索一下每个文件，就能查看 flag</p>
<p>:::</p>
<h2 id="这是一张单纯的图片" tabindex="-1"><a class="header-anchor" href="#这是一张单纯的图片" aria-hidden="true">#</a> 这是一张单纯的图片</h2>
<p>::: details 这是一张单纯的图片 详情查看</p>
<p>下载文件，得到 <code v-pre>file.jgp</code>，</p>
<p>解题：图片打开，没啥特别的，nodepad-- 打开，发现最末尾有串可疑字符，提取拼接后 <code v-pre>\&amp;#107;\&amp;#101;\&amp;#121;\&amp;#123;\&amp;#121;\&amp;#111;\&amp;#117;\&amp;#32;\&amp;#97;\&amp;#114;\&amp;#101;\&amp;#32;\&amp;#114;\&amp;#105;\&amp;#103;\&amp;#104;\&amp;#116;\&amp;#125;</code>，</p>
<p>斜杠是我多加的，否则在 md文档中自动转义了；</p>
<p>使用在线工具 <a href="http://www.jsons.cn/unicode" target="_blank" rel="noopener noreferrer">在线Unicode编码转换-Unicode和ASCII在线互转-中文转Unicode工具 (jsons.cn)</a>，ASSII转Unicode，即可查看 flag</p>
<p>另外，参考别人思路，notepad-- 打开看到这 assii 字符后，直接修改后缀为 .html，当网页打开可以自动转移，和我拷贝到 typora md文本编辑器直接转义显示出flag一样的道理</p>
<p>:::</p>
<h2 id="游戏过关" tabindex="-1"><a class="header-anchor" href="#游戏过关" aria-hidden="true">#</a> 游戏过关</h2>
<p>::: details 游戏过关 详细查看</p>
<p>文件下载，得到<code v-pre>ConsoleApplication4.exe</code>，双击为控制台窗口小游戏，根据提示</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>玩个游戏
n是灯的序号，m是灯的状态
如果第 N 个灯的 m 为 1，则打开，否则关闭
一开始所有的灯都关着
现在你可以输入 n 来改变它的状态
但是你要注意一件事，如果你改变第 N 个灯的状态，第 (N-1) 和 (N+1) 的状态也会改变
当所有灯都亮起时，会出现标志
现在，输入 n
输入 n,n(1-8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据提示直接开始完，瞎鼓捣一下，居然就出结果了....</p>
<p><img src="@source/blogs/CTF/images/game.png" alt="game"></p>
<p>还是IDA查看一下</p>
<p><img src="@source/blogs/CTF/images/game01.png" alt="image-20230530144033615"></p>
<p>双击函数进去，在双击出现函数，得到如下：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>int sub_45E940()
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

  sub_45A7BE(&quot;done!!! the flag is &quot;);
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
  qmemcpy(v5, &quot;{ &quot;, 2);
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
  qmemcpy(v6, &quot;`S,yhn _uec{&quot;, 12);
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
  strcpy(v7, &quot;u~&quot;);
  for ( i = 0; i &lt; 56; ++i )
  {
    # 参考别人理解，是 V5 和 V8两个数组求与，然后在和 0x13u 求与
    v5[i] ^= v8[i];
    v5[i] ^= 0x13u;
  }
  v0 = sub_45A7BE(&quot;%s\n&quot;);
  v3 = v1;
  sub_459AE9(&amp;savedregs, &amp;dword_45EC04, v0);
  return sub_458801((unsigned int)&amp;savedregs ^ v9, v3);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>借用网上大佬的python代码</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code># py 3
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="啊哒" tabindex="-1"><a class="header-anchor" href="#啊哒" aria-hidden="true">#</a> 啊哒</h2>
<p>::: details 啊哒 详情查看</p>
<p>下载文件得：ada.jpg</p>
<p>解题：邮件查看属性，发现有 <code v-pre>照相机型号：73646E6973635F32303138</code>，看起来是16进制字符串， 尝试转其他进制，看结果应该不是这思路</p>
<p>网上搜索了下，16进制转ASCII字符串，参考下列工具，得到结果<code v-pre>sdnisc_2018</code>，看这返回结果，感觉是这个没错</p>
<p>估计是个密码啥的，尝试修改文件后缀为 <code v-pre>.zip</code>，打开发现有文件<code v-pre>flag.text</code>，输入上面密码即可得 flag</p>
<p>工具：[十六进制到ASCII | 十六进制到文本字符串转换器 (rapidtables.org)](https://www.rapidtables.org/zh-CN/convert/number/hex-to-ascii.html#:~:text=在输入文本框中粘贴十六进制字节码。,选择字符编码类型。 按下转换按钮。)</p>
<p>:::</p>
<h2 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet" aria-hidden="true">#</a> telnet</h2>
<p>::: details telnet 详情查看</p>
<p>下载文件得：<code v-pre>networking.pcap</code></p>
<p>解题：notepad-- 文件直接打开，提示二级制或者文本方式打开，两种格式，打开后，全文搜索 flag直接看到结果</p>
<p>学习：.pcap 文件：<a href="https://blog.csdn.net/ytx2014214081/article/details/80112277" target="_blank" rel="noopener noreferrer">(89条消息) pcap文件详解_meteor^_^的博客-CSDN博客</a></p>
<p>工具：<a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">Wireshark · Download</a>，这个地址下载快一点：<a href="https://l13144.lanzoul.com/its9lzbk38h" target="_blank" rel="noopener noreferrer">Wireshark v3.6.1 绿色版.zip - 蓝奏云 (lanzoul.com)</a></p>
<p>运行程序，打开<code v-pre>networking.pcap</code>文件，邮件追踪流，TCP就可以直接看到 flag</p>
<p><img src="@source/blogs/CTF/images/telnet.png" alt="image-20230612173154233"></p>
<p>:::</p>
<h2 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h2>
<p>::: details ping详情查看</p>
<p>下载文件得解压得 <code v-pre>ping.pcap</code></p>
<p>解题：使用工具 wireshark 打开，看着一串下来都是 ICMP 的，每条看起来很有规律，按个点击，发先就是 Data 数据中的前两位会变化，</p>
<p>如下图，看最后面也能看到 <code v-pre>f</code>，就是对应的16进制转换成的字符，按顺序即可看到 <code v-pre>flag{}</code>，所以就是每条 Data 数据截取前两位，然后再16进制转换为字符串即可</p>
<p><img src="@source/blogs/CTF/images/ping.png" alt="ping"></p>
<p>wireshark 还有个指令模式，再对应的目录下，可参考下面使用</p>
<p>指令：<code v-pre> ./Wireshark/App/Wireshark/tshark.exe -r ping.pcap -T fields -e data.data | cut -c -2 | awk '{printf($1)}'</code></p>
<p><img src="@source/blogs/CTF/images/ping-01.png" alt="ping-01"></p>
<p><a href="https://coding.tools/cn/hex-to-ascii" target="_blank" rel="noopener noreferrer">16进制到ASCII字符串在线转换工具 - Coding.Tools</a></p>
<p>使用在线工具即可将所得16进制转为字符串</p>
<p>:::</p>
<h2 id="blind-injection" tabindex="-1"><a class="header-anchor" href="#blind-injection" aria-hidden="true">#</a> blind_injection</h2>
<p>::: details blind_injection 详情查看</p>
<p>下载文件解压得：<code v-pre>cap.pcap</code></p>
<p><img src="@source/blogs/CTF/images/blind_injection.png" alt="blind_injection"></p>
<p>解题：根据提示是盲注，看数据流，http请求即是盲注内容</p>
<p><code v-pre>http://119.23.75.183:8033/Less-5/?id=1'%20and%20substr((select%20group_concat(table_name)%20from%20information_schema.tables%20where%20table_schema=database()),1,1)='a'%20--+</code></p>
<p>一般来说，都是响应包字节不同或者是序号中的最后一个才是正确的字符，入截图中，第一个字符是 <code v-pre>e</code>，按此规律一次凭借得<code v-pre>emails,flag_e62d3da86fe34a83bbfbdb9d3177a641</code></p>
<p>有个问题：有可能挨个拼接，不知道哪位开始才是最终的flag，如果字符串过长，是不可取的，要么得自己写脚本直接跑出来，再看结果，要么，得定位到flag开始出现的位置，一般搜索字符<code v-pre>f</code>，且当前行满足也整行是当前响应的最后一条记录，然后从那里开始再往后面推即可</p>
<p>:::</p>
<h2 id="snowfall" tabindex="-1"><a class="header-anchor" href="#snowfall" aria-hidden="true">#</a> Snowfall</h2>
<p>::: details Snowfall 详情查看</p>
<p>下载文件解压得：<code v-pre>step1.text</code>，<code v-pre>step2.text</code></p>
<p>解题：打开两个解压文件，都是写纯文本的内容，根据提示，肯定也是看 <code v-pre>step1.text</code>文件，</p>
<p>看评论区思路，才发现每行后面有些空行，notepad-- 打开文件直接看没看出来，不过光标再每行最后位置可以看出区别，根据评论区提示，这种要去 <code v-pre>whitespace</code>解</p>
<p>工具：<a href="https://vii5ard.github.io/whitespace/" target="_blank" rel="noopener noreferrer">Whitelips the Esoteric Language IDE (vii5ard.github.io)</a></p>
<p>将第一个文件的问题直接复制进去，点击run即可，可以看到结果：<code v-pre>OK now you can run whitespace code. By the way, the key is H0wt0Pr1ntAWh17e5p4ceC0de. </code></p>
<p><img src="@source/blogs/CTF/images/Snowfall-01.png" alt="Snowfall-01"></p>
<p>下面是 <code v-pre>whitespace</code> 语言解析后输出结果，右边是解析后的栈流程</p>
<p>第二个文本解析结果如下：</p>
<p><img src="@source/blogs/CTF/images/Snowfall-02.png" alt="Snowfall-02"></p>
<p>文件开头是7z，估计是个压缩包，参考网友思路，先将右侧栈流程拷贝到文本，就是写脚本，输入一个压缩包，第一步得到的key就是解压密码，参考<code v-pre>python</code>脚本如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>import re
from queue import LifoQueue


with open(&quot;snowfall.txt&quot;, &quot;r&quot;) as f:
	data = f.read()
	data = data.splitlines()

stack = LifoQueue()

ret = &quot;&quot;
for line in data:
	if &quot;push&quot; in line:
		num = int(re.findall(&quot;push (.*?)$&quot;, line)[0])
		stack.put(num)
	elif line == &quot;add&quot;:
		stack.put(stack.get() + stack.get())
	elif line == &quot;dup&quot;:
		num = stack.get()
		stack.put(num)
		stack.put(num)
	elif line == &quot;drop&quot;:
		stack.get()
	elif line == &quot;printc&quot;:
		asc = chr(stack.get())
		# print(asc, end=&quot;&quot;)
		ret += asc

# save file
bin_data = ret.encode(&quot;latin1&quot;)
with open(&quot;1.7z&quot;, &quot;wb&quot;) as f:
	f.write(bin_data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五个函数说明：</p>
<blockquote>
<p>push：将数字压入栈顶
printc：将栈顶元素弹出并以ASCII字符形式输出
dup：复制栈顶元素后压入栈顶drop:弹出栈顶元素
add：将堆栈最上方的两个元素弹出，二者做加法运算,得到的结果入栈***</p>
</blockquote>
<p>执行python脚本，得到 <code v-pre>1.7z</code>压缩包，输入解压密码key <code v-pre>H0wt0Pr1ntAWh17e5p4ceC0de</code> 得到 <code v-pre>flag.text</code>，</p>
<p>打开文件，又是很多空行，也是复制到 <code v-pre>whitespace</code>网站解析，点击 RUN，居然没有结果，重新查看右边的栈流程，很多 drop 操作，也就是执行又删除了，对比之前的两个栈流程，将 <code v-pre>drop</code> 修改为 <code v-pre>printc</code>，也就是打印出来，重新修改后的python脚本即可，脚本如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>import re
from queue import LifoQueue


with open(&quot;flagresult.txt&quot;, &quot;r&quot;) as f:
	data = f.read()
	data = data.splitlines()

stack = LifoQueue()

ret = &quot;&quot;
for line in data:
	if &quot;push&quot; in line:
		num = int(re.findall(&quot;push (.*?)$&quot;, line)[0])
		stack.put(num)
	elif line == &quot;add&quot;:
		stack.put(stack.get() + stack.get())
	elif line == &quot;dup&quot;:
		num = stack.get()
		stack.put(num)
		stack.put(num)
	elif line == &quot;drop&quot;:
		asc = chr(stack.get())
		print(asc, end=&quot;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="chatgpt-1" tabindex="-1"><a class="header-anchor" href="#chatgpt-1" aria-hidden="true">#</a> chatgpt-1</h2>
<p>::: details chatgpt-1 详情查看</p>
<p>描述: 本题是在研究chatgpt的灵光乍现。 也算是对AI安全性的一种测试。 由于是基于AI的，所以难度不能保证每个人一致但总体不会相差过大。 做题需要自备ApiKey（平台承诺不会窃取任何用户的ApiKey），介意勿开</p>
<p>启动应用场景，访问地址，估计每次不一样，这里就贴地址了，再右上角设置中配置自己的 openai 的  <code v-pre>apikey</code></p>
<p>然后就可以开始了，了解几句，大概知道这个题的意思了，他内置隐藏了flag，需要你通过聊天，突破他自有的安全意识</p>
<p>截图参考：</p>
<p><img src="@source/blogs/CTF/images/chatgpt-1.png" alt="chatgpt-1"></p>
<p>:::</p>
<h2 id="简单取证1" tabindex="-1"><a class="header-anchor" href="#简单取证1" aria-hidden="true">#</a> 简单取证1</h2>
<p>::: details 简单取证1 详情查看</p>
<p>解压下载得：config 文件目录</p>
<p>工具：<a href="https://github.com/ParrotSec/mimikatz/blob/master/x64/mimikatz.exe" target="_blank" rel="noopener noreferrer">mimikatz/x64/mimikatz.exe at master · ParrotSec/mimikatz · GitHub</a>、<a href="https://www.cmd5.com/" target="_blank" rel="noopener noreferrer">md5在线解密破解,md5解密加密 (cmd5.com)</a></p>
<p>解题：此类型，一般是解密<code v-pre>SYSTEM</code>文件，下载<code v-pre>mimikatz</code>软件，将exe文件放置到config文件目录（待分析文件目录同级），执行指令<code v-pre>lsadump::sam /sam:SAM /system:SYSTEM</code>，结果如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
  .#####.   mimikatz 2.2.0 (x64) #18362 Feb 29 2020 11:13:36
 .## ^ ##.  &quot;A La Vie, A L'Amour&quot; - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       &gt; http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        &gt; http://pingcastle.com / http://mysmartlogon.com   ***/

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在线MD5解密，选择类型<code v-pre>NTLM</code>，输入<code v-pre>5f9469a1db6c8f0dfd98af5c0768e0cd</code>，得结果<code v-pre>forensics</code>，拼接结果得 <code v-pre>flag{administrator-QQAAzz_forensics}</code></p>
<p>:::</p>
</div></template>


