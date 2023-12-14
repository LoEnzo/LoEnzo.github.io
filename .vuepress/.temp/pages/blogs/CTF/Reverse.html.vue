<template><div><p>::: tip</p>
<p>CTF Reverse（逆向）WriteUp</p>
<p>:::</p>
<p>题目来源： <a href="https://ctf.bugku.com/challenges/index/gid/1/tid/7.html" target="_blank" rel="noopener noreferrer">题目 - Bugku CTF</a></p>
<h2 id="入门逆向" tabindex="-1"><a class="header-anchor" href="#入门逆向" aria-hidden="true">#</a> 入门逆向</h2>
<p>::: details 入门逆向 详情查看</p>
<p>工具：IDA</p>
<p>下载链接：<a href="https://www.hex-rays.com/download-center/" target="_blank" rel="noopener noreferrer">Download center (hex-rays.com)</a></p>
<p>解题：</p>
<p>下载文件 baby.exe</p>
<p>使用 IDA 工具默认方式打开，main 文件即可直接查看答案</p>
<p><img src="@source/blogs/CTF/images/image-20230516113940673.png" alt="image-20230516113940673"></p>
<p>:::</p>
<h2 id="easy-re" tabindex="-1"><a class="header-anchor" href="#easy-re" aria-hidden="true">#</a> Easy_Re</h2>
<p>::: details Easy_Re 详情查看</p>
<p>工具：IDA</p>
<p>下载链接：<a href="https://www.hex-rays.com/download-center/" target="_blank" rel="noopener noreferrer">Download center (hex-rays.com)</a></p>
<p>解题：</p>
<p>下载文件 re1.exe</p>
<p>使用 IDA 工具默认方式打开，查看 Hex View-1，ALT+T 搜索<code v-pre>CTF</code>即可看到答案</p>
<p><img src="@source/blogs/CTF/images/image-20230516145942802.png" alt="image-20230516145942802"></p>
<p>:::</p>
<h2 id="逆向入门" tabindex="-1"><a class="header-anchor" href="#逆向入门" aria-hidden="true">#</a> 逆向入门</h2>
<p>::: details 逆向入门 详情查看</p>
<p>解题：</p>
<p>下载文件 admin.exe</p>
<p>修改后缀为 text，文本编辑器打开可以看到 <code v-pre>data:image/png:base64</code>，选在在线base64转图片，即可看到转出的二维码，扫描二维码即可看到答案</p>
<p>网址：<a href="http://www.jsons.cn/img2base64/" target="_blank" rel="noopener noreferrer">图片在线转换base64编码-在线base64编码转换成图片工具 (jsons.cn)</a></p>
<p><img src="@source/blogs/CTF/images/image-20230516150728411.png" alt="image-20230516150728411"></p>
<p>:::</p>
<h2 id="easy-vb" tabindex="-1"><a class="header-anchor" href="#easy-vb" aria-hidden="true">#</a> Easy_vb</h2>
<p>::: details Easy_vb 详情查看</p>
<p>工具：IDA 下载链接：<a href="https://www.hex-rays.com/download-center/" target="_blank" rel="noopener noreferrer">Download center (hex-rays.com)</a></p>
<p>解题：</p>
<p>下载得到文件 <code v-pre>easy_vb.exe</code></p>
<p>可以先切换<code v-pre>Hex View-1</code>模式查看有没有特殊的字符，<code v-pre>ALT+T</code>尝试搜索关键字<code v-pre>flag</code>，<code v-pre>ctf</code>等，直接搜索到了答案</p>
<p><img src="@source/blogs/CTF/images/Easy_vb.png" alt="image-20230524173455595"></p>
<p>提交答案报错，根据提示，答案为 flag{xxxx}，修改 MCTF 为 flag ，尝试提交，正确</p>
<p>:::</p>
<h2 id="signin" tabindex="-1"><a class="header-anchor" href="#signin" aria-hidden="true">#</a> signin</h2>
<p>::: details signin 详情查看</p>
<p>提　　示: 君远至此，辛苦至甚。 窃谓欲状，亦合依例，并赐此题。</p>
<p>描　　述: 来源：第七届山东省大学生网络安全技能大赛</p>
<p>下载文件得：<code v-pre>sign_in.zip</code>，解压缩得<code v-pre>sign_in_apk</code>，</p>
<p>工具：<a href="https://github.com/charles2gan/GDA-android-reversing-Tool/releases" target="_blank" rel="noopener noreferrer">Releases · charles2gan/GDA-android-reversing-Tool (github.com)</a></p>
<p>解题：看到解压后是APK文件，及为安卓逆向，寻找对应工具，如上GDA，</p>
<p>查看源码，如下，找到一个 getFlag 函数，大致找到 getFlag() 函数返回值，再逆向就可以了</p>
<p><img src="@source/blogs/CTF/images/signin-01.png" alt="image-20230525112952638"></p>
<p>后续不知道怎么查看，看评论区，&quot;大致说可以再R中搜索对应的编号，安卓为创建的固定值添加的一个标识ID方便重复引用。所以要去找这个写好的固定值究竟在哪里，R里写了tosring在strings里，所以去该xml文件里查&quot;</p>
<p><img src="@source/blogs/CTF/images/signin-02.png" alt="image-20230525113717445"></p>
<p>这里是找到了对应的 16进制编号位置，但是不明白为啥要去 strings.xml 文件中查找，而且这文件有很多，只是正好我找第一个找到了而已</p>
<p><img src="@source/blogs/CTF/images/signin-03.png" alt="image-20230525113935149"></p>
<p>到这里就找到了这一串看起来特殊的值了，根据前面 getFlag下面的 reverse 提示，将这串字符逆序输出，再Base64解码即可得到答案</p>
<p><img src="@source/blogs/CTF/images/signin-04.png" alt="image-20230525114158168"></p>
<p>:::</p>
<h2 id="特殊的base64" tabindex="-1"><a class="header-anchor" href="#特殊的base64" aria-hidden="true">#</a> 特殊的Base64</h2>
<p>::: details 特殊的Base64 详情查看</p>
<p>下载文件：解压得<code v-pre>特殊的Base64.exe</code>文件</p>
<p>解题：</p>
<p>先IDA打开，<code v-pre>alt+t</code>搜索 flag 相关信息，可以看到如下信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>.rdata:0000000000489008 aMtyqm7wjodkrnl db 'mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI==',0
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到一串可以的 Base64编码串，<code v-pre>mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI==</code>，直接使用在线工具进行Base64解码，返回信息明显是错误的，</p>
<p>下面看到另外一串可以的字符<code v-pre>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0987654321/+</code>，看起来像是字典，密码表之类的，百度了 及 查看评论区，了解到 Base64 有个基本的密码表：<code v-pre>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/</code>，看起来和反编译查看到的，长度一致，只是顺序不同，也就说是说，这道题采用了自己的 Base64编码表，而不是常规的，</p>
<p>按顺序，也就是 A对应A，a对应B，B对应C的编码表，前者是题目本身，后者是标准Base64编码表顺序，</p>
<p>百度到python有对应的包可以直接使用</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>import base64
import string

# 用户使用自定义Base64编码表加密的字符串
base64String = &quot;mTyqm7wjODkrNLcWl0eqO8K8gc1BPk1GNLgUpI==&quot;

# 用户自定义Base64编码顺序
userStr = &quot;AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0987654321/+&quot;
# 标准Base64编码顺序
baseStr = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&quot;

#利用密码表还原成正常base64编码后的字符串
newBase64Code=str1.translate(base64String.maketrans(userStr,baseStr))

#base64解码
print(base64.b64decode(newBase64Code).decode())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行可得结果</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>92826@DESKTOP-HI2TV6C MINGW64 ~/Desktop
$ py 特殊Base64.py
flag{Special_Base64_By_Lich}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="love" tabindex="-1"><a class="header-anchor" href="#love" aria-hidden="true">#</a> love</h2>
<p>::: details love 详情查看</p>
<p>下载文件，解压得 <code v-pre>reverse_3.exe</code></p>
<p>解题：</p>
<p>IDA默认模式打开，查看main函数，<code v-pre>alt+t</code>搜索 flag，然后f5 反编译得下面图</p>
<p><img src="@source/blogs/CTF/images/love.png" alt="love"></p>
<p>直接查看 sub_411127(v9 , v8)函数，只看到了 v8, v9的定义，没看到那里有变更赋值操作；</p>
<p>不知道是不是软件版本不一致导致，网上别人反编译出来的结果如下</p>
<p><img src="@source/blogs/CTF/images/love-1.png" alt="love-1"></p>
<p>看别人这个就比较清晰了，满足if中的判断，就能得到正确的flag</p>
<p>百度了了一下，strncmp() 函数：C 库函数 <strong>int strncmp(const char *str1, const char *str2, size_t n)</strong> 把 <strong>str1</strong> 和 <strong>str2</strong> 进行比较，最多比较前 <strong>n</strong> 个字节。</p>
<p>那就是比较 Dest 和 Str2 的长度一致，strlen() 函数就是 Dest 字符串长度，Str2 双击进去可以查看，或者前面的截图可以看到，如下<code v-pre>e3nifIH9b_C@n@dH</code></p>
<p>Str2等同于Dest，原来 for循环是 Dest[j] += j;我们反过来即可</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>#include&lt;stdio.h&gt;
#include&lt;string.h&gt;

# strlen就是字符串长度，在线编译不知道为啥不对，直接写死16
int main()
{
    char Dest[20]=&quot;e3nifIH9b_C@n@dH&quot;;
    // int len=strlen(str);
    for(int i=0;i&lt;16;i++)
        Dest[i]-=i;
    for(int i=0;i&lt;16;i++)
        printf(&quot;%c&quot;,Dest[i]);
}

// 返回 e2lfbDB2ZV95b3V9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接标准 Base64解码 得<code v-pre>{i_l0ve_you}</code>，根据提示，拼接上 flag 即可</p>
<p>:::</p>
<h2 id="nostring" tabindex="-1"><a class="header-anchor" href="#nostring" aria-hidden="true">#</a> NoString</h2>
<p>::: details NoString 详情查看</p>
<p>下载文件解压得：<code v-pre>NoString.exe</code></p>
<p>解题：IDA打开，F5查看反编译代码，如下：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>int wmain()
{
  signed int v0; // ecx
  signed int i; // eax
  signed int v2; // ecx
  signed int j; // eax
  int k; // eax
  int v5; // eax
  signed int v6; // ecx
  signed int m; // eax
  signed int v8; // ecx
  signed int n; // eax
  char v11; // [esp+0h] [ebp-18h] BYREF
  __int128 v12; // [esp+1h] [ebp-17h]
  __int16 v13; // [esp+11h] [ebp-7h]

  v0 = strlen(Format);
  for ( i = 0; i &lt; v0; ++i )
    Format[i] ^= 9u;
  printf(&quot;yelhzl)`gy|})|)oehnl3&quot;);
  v11 = 0;
  v13 = 0;
  v12 = 0i64;
  v2 = strlen(a80z);
  for ( j = 0; j &lt; v2; ++j )
    a80z[j] ^= 9u;
  scanf(a80z, &amp;v11);
  for ( k = 0; k &lt; 19; ++k )
    *(&amp;v11 + k) ^= 9u;
  v5 = strcmp(&amp;v11, aOehnl3rHfCcgpt);
  if ( v5 )
    v5 = v5 &lt; 0 ? -1 : 1;
  if ( v5 )
  {
    v6 = strlen(aLF);
    for ( m = 0; m &lt; v6; ++m )
      aLF[m] ^= 9u;
    printf(&quot;l{{f{&quot;);
  }
  else
  {
    v8 = strlen(aNa);
    for ( n = 0; n &lt; v8; ++n )
      aNa[n] ^= 9u;
    printf(&quot;{`na}&quot;);
  }
  printf(&quot;\r\n&quot;);
  system(&quot;pause&quot;);
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接运行<code v-pre>NoString.exe</code>， 随意输入字符串，返回错误，程序停止，提示如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>please input u flage:flag
error
请按任意键继续. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果运行情况和反编译代码，最下面<code v-pre>system(&quot;pause&quot;)</code>，那估计上面 if else 语句就说明某个是正确的，某个是错误</p>
<p>两个语句，判定条件是V5，详细如下</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>char v11;

// scanf 输入
scanf(a80z, &amp;v11);
for ( k = 0; k &lt; 19; ++k )
    *(&amp;v11 + k) ^= 9u;


// strcmp 是判断两个字符串是否相等
v5 = strcmp(&amp;v11, aOehnl3rHfCcgpt);

if ( v5 )
  {
    printf(&quot;l{{f{&quot;);
  }
  else
  {
    printf(&quot;{`na}&quot;);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>aOehnl3rHfCcgpt</code>变量可以在IDA中双击即可，进去可以看到值为 <code v-pre>oehnl3r=&lt;?=hF@CCGPt</code>，v11，是用户输入字符，然后再循环和9做异或运算，然后再和固定字符串做比较，</p>
<p>那么现在直接用固定字符串和9做异或运算应该就能出结果，python示例如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>flagStr = 'oehnl3r=&lt;?=hF@CCGPt'

flag = ''

for s in flagStr:
  flag += chr(ord(s) ^ 9)
print(flag)

// rightStr 来源于 aNa IDA中双击即可看到
rightStr = '{`na}'
right = ''
for r in rightStr:
  right += chr(ord(r) ^ 9)
print(right)

// errorStr 来源于 aLF IDA中双击即可看到
errorStr = 'l{{f{'
error = ''
for e in errorStr:
  error += chr(ord(e) ^ 9)
print(error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/CTF/images/NoString.png" alt="NoString"></p>
<p>冒号和字母e是多余的，根据提示还是 flag{xxx}格式提交即可</p>
<p>:::</p>
<h2 id="mobile1-gctf" tabindex="-1"><a class="header-anchor" href="#mobile1-gctf" aria-hidden="true">#</a> mobile1(gctf)</h2>
<p>::: details mobile1(gctf) 详情查看</p>
<p>下载文件解压得：<code v-pre>gctf_mobile1.apk</code></p>
<p>工具：IDA</p>
<p>解题：使用IDA打开 apk程序，一般先看main函数，或者全局搜索flag，能看到在 <code v-pre>MainActivity</code>文件中包含 flag，详细代码如下:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>package com.example.crackme.MainActivity;
import android.app.Activity;
import android.widget.EditText;
import java.lang.String;
import android.widget.Button;
import java.security.MessageDigest;
import java.lang.StringBuilder;
import java.security.NoSuchAlgorithmException;
import java.lang.Integer;
import android.os.Bundle;
import android.view.View;
import com.example.crackme.MainActivity$1;
import android.view.View$OnClickListener;
import android.view.Menu;
import android.view.MenuInflater;

public class MainActivity extends Activity	// class@000785 from classes.dex
{
    private Button btn_register;
    private EditText edit_sn;
    String edit_userName;

    public void MainActivity(){
       super();
    }
    static EditText access$000(MainActivity x0){
       return x0.edit_sn;
    }
    static boolean access$100(MainActivity x0,String x1,String x2){
       return x0.checkSN(x1, x2);
    }
    static Button access$200(MainActivity x0){
       return x0.btn_register;
    }
    // 重点在这个方法
    // getinstance：静态函数，用来实例化和初始化。
	// update：处理数据
	// reset：重置摘要
	// digest：明文变为密文
    // userName 来自 下面 onCreate函数的变量定义
    private boolean checkSN(String userName,String sn){
       boolean b;
       try{
          b = false;
          if (userName == null || (userName.length() &amp;&amp; (sn != null &amp;&amp; sn.length() == 22))) {
             MessageDigest digest = MessageDigest.getInstance(&quot;MD5&quot;);
             digest.reset();
             digest.update(userName.getBytes());
             byte[] bytes = digest.digest();
             String hexstr = MainActivity.toHexString(bytes, &quot;&quot;);
             StringBuilder sb = &quot;&quot;;
             for (int i = 0; i &lt; hexstr.length(); i = i + 2) {
                sb = sb.append(hexstr.charAt(i));
             }
             String userSN = sb;
             userSN = &quot;flag{&quot;+userSN+&quot;}&quot;;
             if (userSN.equalsIgnoreCase(sn)) {
                b = true;
             }
          }
       }catch(java.security.NoSuchAlgorithmException e2){
          e2.printStackTrace();
       }
       return b;
    }
    private static String toHexString(byte[] bytes,String separator){
       StringBuilder hexString = &quot;&quot;;
       byte[] arr$ = bytes;
       int len$ = arr$.length;
       for (int i$ = 0; i$ &lt; len$; i$++) {
          byte b = arr$[i$];
          int i = b &amp; 0x00ff;
          String hex = Integer.toHexString(i);
          if (hex.length() == 1) {
             hexString = hexString.append('0');
          }
          StringBuilder hexString1 = hexString.append(hex);
          hexString1 = hexString1.append(separator);
       }
       return hexString;
    }
    public void onCreate(Bundle savedInstanceState){
       super.onCreate(savedInstanceState);
       this.setContentView(R.layout.activity_main);
       this.setTitle(R.string.unregister);
      
       this.edit_userName = &quot;Tenshine&quot;;
       this.edit_sn = this.findViewById(0x7f0c0051);
       this.btn_register = this.findViewById(0x7f0c0052);
       this.btn_register.setOnClickListener(new MainActivity$1(this));
    }
    public boolean onCreateOptionsMenu(Menu menu){
       this.getMenuInflater().inflate(R.menu.activity_main, menu);
       return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点flag在 checkSN 方法，代码中的几个方法意思百度了下，注释到上面的代码里面了，下面一个for循环，看提示就是取值  i = 0, i+2位的数，也就是 md5的基数位（索引从0开始的）</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>import hashlib 
import string
def encrypt_md5(str):
	md=hashlib.md5()
	md.update(str.encode(encoding='utf-8'))
	return md.hexdigest()
userName=&quot;Tenshine&quot;
md5Str=encrypt_md5(userName)
print(md5Str)	

for i in range (len(md5Str)):
	if i%2==0:
		print(md5Str[i],end='')
        
// b9c77224ff234f27ac6badf83b855c76
// bc72f242a6af3857  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终结果：<code v-pre>flag{bc72f242a6af3857}</code></p>
<p>:::</p>
<h2 id="mobile2-gctf" tabindex="-1"><a class="header-anchor" href="#mobile2-gctf" aria-hidden="true">#</a> mobile2(gctf)</h2>
<p>::: details mobile2(gctf) 详情查看</p>
<p>下载文件解压得：file 文件夹（压缩包报毒）</p>
<p>解题：打开文件夹目录，拖入vsCode，挨个看了下，没看出啥来，重新开最外层的文件<code v-pre>AndroidManifest.xml</code></p>
<p>直接二进制、或者文本方式打开，搜索 <code v-pre>flag</code>没找到，搜索<code v-pre>f</code>就能看到了，</p>
<p><img src="@source/blogs/CTF/images/mobile2.png" alt="mobile2"></p>
<p>:::</p>
<h2 id="hellosmali2" tabindex="-1"><a class="header-anchor" href="#hellosmali2" aria-hidden="true">#</a> HelloSmali2</h2>
<p>::: details HelloSmali2 详情查看</p>
<p>下载文件解压得：<code v-pre>文件夹 HelloSmali2</code>，文件如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>f45775643c-46846-5990-b3793-32e8ecd15f0d.smali
XMan.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>.smali文件打开看不懂，先不用管，先看java文件</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>/**
 * Created by xuanyonghao on 2017/7/16.
 */
public class XMan {
    public static void main(String[] args) {
        String v6 = &quot;+/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&quot;;
        String s = &quot;xsZDluYYreJDyrpDpucZCo&quot;;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i &lt; s.length(); i++) {
            int tmp = v6.indexOf(s.charAt(i));
            String ss = Integer.toBinaryString(tmp);
            if (ss.length() == 5) {
                ss = &quot;0&quot; + ss;
            } else if (ss.length() == 4) {
                ss = &quot;00&quot; + ss;
            } else if (ss.length() == 3) {
                ss = &quot;000&quot; + ss;
            } else if (ss.length() == 2) {
                ss = &quot;0000&quot; + ss;
            } else if (ss.length() == 1) {
                ss = &quot;00000&quot; + ss;
            } else if (ss.length() == 0) {
                ss = &quot;000000&quot; + ss;
            }
            sb.append(ss);
        }
        String x = sb.toString() + &quot;0000&quot;;
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i &lt; x.length(); i += 8) {
            String tmp = x.substring(i, i + 8);
            byte b = (byte) Integer.parseInt(tmp, 2);
            stringBuilder.append((char) b);
        }
        System.out.println(stringBuilder.toString());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现就是java main函数，尝试直接执行一下看看结果提示</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>javac XMan.java
java XMan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：eM_5m4Li_i4_Ea5y</p>
<p>根据提示，试着输入 XMAN{eM_5m4Li_i4_Ea5y}</p>
<p>NM，真过了....</p>
<p>:::</p>
<h2 id="树木的小秘密" tabindex="-1"><a class="header-anchor" href="#树木的小秘密" aria-hidden="true">#</a> 树木的小秘密</h2>
<p>::: details 树木的小秘密 详情查看</p>
<p>解压下载文件得：<code v-pre>easy_reverse.exe</code>
解题：老规矩，先IDA打开查看一下，<code v-pre>alt+t</code>全局搜索一下<code v-pre>f</code>、<code v-pre>flag</code>、<code v-pre>ctf</code>之类的，没有明显的东西
<code v-pre>F5</code>反编译一下，如下，看到有 py字样，所以可以看出是一个使用pyinstaller打包为exe的文件。使用一个pyinstxtractor.py的工具进行反编译</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code>__int64 __fastcall sub_1400022B0(__int64 a1)
{
  unsigned int v2; // edi
  unsigned __int64 v3; // rsi
  __int64 v4; // rax
  __int64 v5; // r15
  __int64 v6; // r12
  void *v7; // r14
  __int64 v8; // rbx
  __int64 v9; // rax
  __int64 v10; // rbx
  __int64 v12; // [rsp+20h] [rbp-1048h]
  wchar_t Buffer[2048]; // [rsp+30h] [rbp-1038h] BYREF

  if ( (unsigned int)sub_1400039B0() )
    return 0xFFFFFFFFi64;
  v2 = 1;
  *(_DWORD *)(a1 + 20604) = 1;
  if ( (unsigned int)sub_140003D30(a1) || (unsigned int)sub_140003780(a1) || (unsigned int)sub_1400038B0(a1) )
    return 0xFFFFFFFFi64;
  v3 = *(_QWORD *)(a1 + 16);
  v4 = qword_140037CB8(&quot;__main__&quot;);
  v5 = v4;
  if ( !v4 )
  {
    sub_140001C40(&quot;Could not get __main__ module.\n&quot;);
    return (unsigned int)-1;
  }
  v6 = qword_140037CF8(v4);
  if ( !v6 )
  {
    sub_140001C40(&quot;Could not get __main__ module's dict.\n&quot;);
    return (unsigned int)-1;
  }
  if ( v3 &gt;= *(_QWORD *)(a1 + 24) )
    return 0;
  while ( 1 )
  {
    if ( *(_BYTE *)(v3 + 17) != 115 )
      goto LABEL_15;
    LODWORD(v12) = 92;
    v7 = (void *)sub_1400012B0(a1, v3);
    if ( swprintf(Buffer, 0x1000ui64, &quot;%s%c%s.py&quot;, (const char *)(a1 + 16504), v12, (const char *)(v3 + 18)) &gt;= 4096 )
      break;
    v8 = qword_140037CE0(Buffer);
    qword_140037CC0(v5, &quot;__file__&quot;, v8);
    qword_140037C68(v8);
    v9 = qword_140037D70(v7, *(unsigned int *)(v3 + 12));
    v10 = v9;
    if ( !v9 )
    {
      sub_140001C40(&quot;Failed to unmarshal code object for %s\n&quot;, (const char *)(v3 + 18));
      qword_140037D18();
      return (unsigned int)-1;
    }
    qword_140037CC0(v5, &quot;_pyi_main_co&quot;, v9);
    if ( !qword_140037D68(v10, v6, v6) )
    {
      qword_140037D18();
      sub_140001C40(&quot;Failed to execute script '%s' due to unhandled exception!\n&quot;, (const char *)(v3 + 18));
      return v2;
    }
    free(v7);
LABEL_15:
    v3 = sub_140001770(a1, v3);
    if ( v3 &gt;= *(_QWORD *)(a1 + 24) )
      return 0;
  }
  sub_140001C40(&quot;Absolute path to script exceeds PATH_MAX\n&quot;);
  return (unsigned int)-1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工具：https://nchc.dl.sourceforge.net/project/pyinstallerextractor/dist/pyinstxtractor.py
命令：<code v-pre>python pyinstxtractor.py 待反编译文件 </code>
执行后得到下面文件目录树
<img src="@source/blogs/CTF/images/treehole.png" alt="">
很明显文件<code v-pre>123</code>比较可以，打开查看，<code v-pre>==</code>号一般是base64解密，剪切出来，即为正确答案</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>�               @   s�   d dl Z d dlZd dlZdZed�ZdZee�ekrbe �e�Z	e
dee	� � e�d� e��  ne
d� e�d� e��  dS )�    Ni��
 zPlease input your flag:z ZmxhZ3tteV9uYW1lX2lzX3NodW11fQ==zthis is your flag:�   �error)
�base64�time�sys�a�input�b�c�str�	b64decode�m�print�sleep�exit� r   r   z123.py�&lt;module&gt;   s   




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
</div></template>


