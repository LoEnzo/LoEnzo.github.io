<template><div><p>::: tip</p>
<p>CTF 相关工具持续整理</p>
<p>:::</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="平台" tabindex="-1"><a class="header-anchor" href="#平台" aria-hidden="true">#</a> 平台</h3>
<ul>
<li><a href="https://www.ctfhub.com/#/tools" target="_blank" rel="noopener noreferrer">CTFHub</a></li>
</ul>
<h3 id="在线" tabindex="-1"><a class="header-anchor" href="#在线" aria-hidden="true">#</a> 在线</h3>
<ul>
<li><a href="https://www.cmd5.com/" target="_blank" rel="noopener noreferrer">md5在线解密破解,md5解密加密 (cmd5.com)</a></li>
</ul>
<h2 id="web-相关" tabindex="-1"><a class="header-anchor" href="#web-相关" aria-hidden="true">#</a> WEB 相关</h2>
<h3 id="dirsearch" tabindex="-1"><a class="header-anchor" href="#dirsearch" aria-hidden="true">#</a> dirsearch</h3>
<blockquote>
<p>简介：dirsearch是一个基于python3的命令行工具，常用于暴力扫描页面结构，包括网页中的目录和文件</p>
</blockquote>
<p>下载：https://gitee.com/explore</p>
<p>使用：直接 clone下来，进入目录，<code v-pre>dirsearch.py -h</code>可以查看相关帮助</p>
<p>相关文档：<a href="https://zhuanlan.zhihu.com/p/537515948" target="_blank" rel="noopener noreferrer">dirsearch目录扫描工具下载与使用 - 知乎 (zhihu.com)</a></p>
<p>使用示例：<code v-pre>python dirsearch.py -u http://a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com:8081</code></p>
<p>返回：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  _|. _ _  _  _  _ _|_    v0.4.2.6
 (_||| _) (/_(_|| (_| )

Extensions: php, aspx, jsp, html, js | HTTP method: GET | Threads: 25 | Wordlist size: 11347

Output File: C:\Users\loenozo\Desktop\dirsearch-master\reports\a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com_8081\__23-06-02_11-48-32.txt

Target: http://a8c4c27b-6588-405c-8522-5287f73fcc01.challenge.qsnctf.com:8081/

[11:48:33] Starting:
[11:49:11] 200 -  172B  - /index.php.bak

Task Completed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mimikatz" tabindex="-1"><a class="header-anchor" href="#mimikatz" aria-hidden="true">#</a> mimikatz</h3>
<blockquote>
<p>简介：一款内网渗透工具，可以用于取证，学习链接<a href="https://zhuanlan.zhihu.com/p/399799909" target="_blank" rel="noopener noreferrer">【内网渗透】mimikatz 基本使用 - 知乎 (zhihu.com)</a></p>
</blockquote>
<p>工具：<a href="https://github.com/ParrotSec/mimikatz/blob/master/x64/mimikatz.exe" target="_blank" rel="noopener noreferrer">mimikatz/x64/mimikatz.exe at master · ParrotSec/mimikatz · GitHub</a></p>
<p>示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>  .#####.   mimikatz 2.2.0 (x64) #18362 Feb 29 2020 11:13:36
 .## ^ ##.  &quot;A La Vie, A L'Amour&quot; - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       &gt; http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        &gt; http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # lsadump::sam /system:SYSTEM.0 /SAM:SAM.0
ERROR kuhl_m_lsadump_sam ; CreateFile (SYSTEM hive) (0x00000002)

mimikatz # lsadump::sam /sam:SAM /system:SYSTEM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>GitTools: git泄漏利用工具, 地址: https://github.com/internetwache/GitTools</li>
<li>ds_store_exp: DS_Store泄漏利用工具, 地址: https://github.com/lijiejie/ds_store_exp</li>
<li>burpsuite、fiddler: 抓包工具</li>
<li>菜刀、antsword蚁剑、behinder冰蝎: php木马利用工具</li>
<li>御剑: web目录扫描</li>
<li>sqlmap: sql注入扫描</li>
<li>namp: 端口扫描</li>
<li>wappalyzer: 指纹识别</li>
<li>netcat: 网络工具包</li>
<li>metasploit: 渗透工具</li>
</ul>
<h2 id="reverse-相关" tabindex="-1"><a class="header-anchor" href="#reverse-相关" aria-hidden="true">#</a> Reverse 相关</h2>
<h3 id="ida" tabindex="-1"><a class="header-anchor" href="#ida" aria-hidden="true">#</a> IDA</h3>
<blockquote>
<p>简介：一款交互式反汇编工具，逆向分析工具-静态分析</p>
</blockquote>
<p>使用：一般我用来反编译 <code v-pre>.exe</code>程序</p>
<p>相关文档：<a href="https://zhuanlan.zhihu.com/p/82177268" target="_blank" rel="noopener noreferrer">IDA PRO新手使用教程 - 知乎 (zhihu.com)</a></p>
<h3 id="pyinstxtractor-py" tabindex="-1"><a class="header-anchor" href="#pyinstxtractor-py" aria-hidden="true">#</a> pyinstxtractor.py</h3>
<blockquote>
<p>简介：一款反编译工具，反编译由<code v-pre>pyinstaller</code>打包的exe文件下载连接：</p>
</blockquote>
<p>https://nchc.dl.sourceforge.net/project/pyinstallerextractor/dist/pyinstxtractor.py</p>
<ul>
<li>PEiD: 壳分析工具</li>
<li>Ollydbg: 逆向分析工具-动态调试</li>
<li>Android Killer: 安卓反编译</li>
<li>Roeder’s .NET Reflector: .NET Framework反编译</li>
<li>EasyPythonDecompiler: pyc反编译, 地址: https://sourceforge.net/projects/easypythondecompiler</li>
<li>JD-GUI: Java反编译工具</li>
<li>ILSpy: 是一个开源的.NET反编译工具</li>
<li>angr: 约束求解器</li>
</ul>
<h2 id="misc-相关" tabindex="-1"><a class="header-anchor" href="#misc-相关" aria-hidden="true">#</a> MISC 相关</h2>
<h3 id="wireshark" tabindex="-1"><a class="header-anchor" href="#wireshark" aria-hidden="true">#</a> Wireshark</h3>
<blockquote>
<p>简介：网络分析工具</p>
</blockquote>
<p>工具：<a href="https://www.wireshark.org/download.html" target="_blank" rel="noopener noreferrer">Wireshark · Download</a>，这个地址下载快一点：<a href="https://l13144.lanzoul.com/its9lzbk38h" target="_blank" rel="noopener noreferrer">Wireshark v3.6.1 绿色版.zip - 蓝奏云 (lanzoul.com)</a></p>
<p>相关文档：<a href="https://blog.csdn.net/zzwwhhpp/article/details/113077747" target="_blank" rel="noopener noreferrer">网络分析工具——WireShark的使用（超详细）_世间繁华梦一出的博客-CSDN博客</a></p>
<h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace" aria-hidden="true">#</a> WhiteSpace</h3>
<blockquote>
<p>简介：WhiteSpace，是一种只用空白字符(空格，TAB和回车)编程的语言，而其它可见字符统统为注释。</p>
</blockquote>
<p>工具：WhiteSpace 在线编译软件，<a href="https://vii5ard.github.io/whitespace/" target="_blank" rel="noopener noreferrer">Whitelips the Esoteric Language IDE (vii5ard.github.io)</a></p>
<h3 id="routerpassview" tabindex="-1"><a class="header-anchor" href="#routerpassview" aria-hidden="true">#</a> RouterPassView</h3>
<blockquote>
<p>简介：路由器密码查看器</p>
</blockquote>
<h3 id="qr-research" tabindex="-1"><a class="header-anchor" href="#qr-research" aria-hidden="true">#</a> QR_Research</h3>
<blockquote>
<p>简介：二维码扫描器</p>
</blockquote>
<h3 id="aircrack-ng-wireshark" tabindex="-1"><a class="header-anchor" href="#aircrack-ng-wireshark" aria-hidden="true">#</a> aircrack-ng/Wireshark</h3>
<blockquote>
<p>简介：流量分析</p>
</blockquote>
<h3 id="_010editor" tabindex="-1"><a class="header-anchor" href="#_010editor" aria-hidden="true">#</a> 010editor</h3>
<blockquote>
<p>简介：16进制编辑器</p>
</blockquote>
<h3 id="advanced-archive-password-recovery" tabindex="-1"><a class="header-anchor" href="#advanced-archive-password-recovery" aria-hidden="true">#</a> Advanced Archive Password Recovery</h3>
<blockquote>
<p>简介：压缩包密码破解</p>
</blockquote>
<h3 id="r-studio、diskgenius" tabindex="-1"><a class="header-anchor" href="#r-studio、diskgenius" aria-hidden="true">#</a> R-studio、Diskgenius:</h3>
<blockquote>
<p>简介：文件恢复、镜像挂载</p>
</blockquote>
<h3 id="advanced-office-password-recovery" tabindex="-1"><a class="header-anchor" href="#advanced-office-password-recovery" aria-hidden="true">#</a> advanced office password recovery</h3>
<blockquote>
<p>简介：doc密码暴力破解</p>
</blockquote>
<h3 id="volatility" tabindex="-1"><a class="header-anchor" href="#volatility" aria-hidden="true">#</a> volatility</h3>
<blockquote>
<p>简介：内存取证</p>
</blockquote>
<h3 id="binwalk" tabindex="-1"><a class="header-anchor" href="#binwalk" aria-hidden="true">#</a> binwalk</h3>
<blockquote>
<p>简介：二进制文件分析</p>
</blockquote>
<h3 id="foremost" tabindex="-1"><a class="header-anchor" href="#foremost" aria-hidden="true">#</a> foremost</h3>
<blockquote>
<p>简介：文件分离</p>
</blockquote>
<h3 id="audacity" tabindex="-1"><a class="header-anchor" href="#audacity" aria-hidden="true">#</a> Audacity</h3>
<blockquote>
<p>简介: 音频分析</p>
</blockquote>
<h3 id="steghide" tabindex="-1"><a class="header-anchor" href="#steghide" aria-hidden="true">#</a> steghide</h3>
<blockquote>
<p>简介: 隐藏文件</p>
</blockquote>
<h3 id="gifsplitter" tabindex="-1"><a class="header-anchor" href="#gifsplitter" aria-hidden="true">#</a> gifsplitter</h3>
<blockquote>
<p>简介: gif分离工具</p>
</blockquote>
<h3 id="mp3stego" tabindex="-1"><a class="header-anchor" href="#mp3stego" aria-hidden="true">#</a> MP3Stego</h3>
<blockquote>
<p>简介: Mp3隐写工具</p>
</blockquote>
<h3 id="tweakpng" tabindex="-1"><a class="header-anchor" href="#tweakpng" aria-hidden="true">#</a> tweakpng</h3>
<blockquote>
<p>简介: png图片分析工具</p>
</blockquote>
<h3 id="ntfsstreamseditor" tabindex="-1"><a class="header-anchor" href="#ntfsstreamseditor" aria-hidden="true">#</a> ntfsstreamseditor</h3>
<blockquote>
<p>简介: NTFS分区数据流检测工具</p>
</blockquote>
<h3 id="pdfcrack" tabindex="-1"><a class="header-anchor" href="#pdfcrack" aria-hidden="true">#</a> pdfcrack</h3>
<blockquote>
<p>简介: pdf密码爆破</p>
</blockquote>
<h2 id="cryptography-相关" tabindex="-1"><a class="header-anchor" href="#cryptography-相关" aria-hidden="true">#</a> Cryptography 相关</h2>
<ul>
<li>kt.gy: 各种编码转换工具, 地址: https://github.com/koczkatamas/koczkatamas.github.io</li>
<li>CyberChef: 英国情报机构政府通信总部官方离线解密解码html工具, 地址: https://github.com/gchq/CyberChef</li>
<li>CTFtools: 工具合集, 地址: https://www.ctftools.com/down</li>
<li>CTFCrackTools: 加解密工具合集</li>
<li>bugku在线工具箱: 地址: https://tool.bugku.com/</li>
<li>hydra: 系统服务密码暴力破解</li>
<li>hashcat: hash密码破解</li>
<li>mimikatz: 获取Win明文登录密码</li>
<li>RsaCtfTool: rsa破解工具, 地址: https://github.com/Ganapati/RsaCtfTool</li>
</ul>
<h2 id="pwn-相关" tabindex="-1"><a class="header-anchor" href="#pwn-相关" aria-hidden="true">#</a> PWN 相关</h2>
<ul>
<li>pwntools: pwn常用工具</li>
<li>checksec: 查看防御措施</li>
<li>gdb: 二进制程序调试</li>
<li>peda: 反汇编插件</li>
</ul>
</div></template>


