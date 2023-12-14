<template><div><p>::: tip</p>
<p>Windows下安装PHP开发环境的基本配置，包含Apache，mysql，php</p>
<p>:::</p>
<!-- more -->
<h3 id="一、apache" tabindex="-1"><a class="header-anchor" href="#一、apache" aria-hidden="true">#</a> 一、Apache</h3>
<p>因为Apache官网只提供源代码，如果要使用必须得自己编译，这里我选择第三方安装包Apache Lounge。</p>
<ul>
<li>进入Apachelounge官方<a href="http://www.apachelounge.com/download/" target="_blank" rel="noopener noreferrer">下载地址</a>;</li>
<li>首先下载并安装<strong>vc redist</strong>，这是Apache运行必需的一个组件;</li>
<li>下载Apache解压版，将解压后的文件夹放在你想要安装的路径下;</li>
<li>修改配置文件:</li>
</ul>
<p>打开你的对应的安装路径 Apache\conf\httpd.conf</p>
<ol>
<li>
<p>配置中默认的路径：<strong>C:\Apache24</strong> 下（版本号可能不同）
将其中所有前面没有被&quot;#&quot;注释的 <strong>c:\Apache24</strong>、<strong>C:\Apache24\htdocs</strong> 和 ***C:\Apache24\cgi-bin***改成对应的路径。</p>
</li>
<li>
<p>指定IP和端口：在<strong>httpd.conf</strong>找到<strong>ServerName www.example.com:80</strong>，将前面的注释去掉，将&quot;www.example.com&quot;修改为&quot;localhost&quot;。如果你要修改端口，将这里&quot;80”和前面“Listen：80”中的80一起修改。</p>
</li>
<li>
<p>添加系统变量：将&quot;Apache的安装路径\bin&quot;添加到Path中。验证安装是否成功：运行Apache的启动httpd.exe。在浏览器上输入localhost:80，如果不是无法访问那么Apache的配置便完成了。</p>
</li>
<li>
<p>将Apache注册为Windows服务</p>
<p>以管理员打开命令行</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># Install | Uninstall
httpd.exe -k install
httpd.exe -k uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、php" tabindex="-1"><a class="header-anchor" href="#二、php" aria-hidden="true">#</a> 二、PHP</h3>
<ol>
<li>
<p>进入官网<a href="http://windows.php.net/download" target="_blank" rel="noopener noreferrer">下载安装</a>，下载最新线程安全版PHP zip压缩包，解压缩后放在想要安装的路径下；</p>
<p><strong>注意：</strong> 下载的PHP VC版本不能比前面安装的vc redist版高。</p>
</li>
<li>
<p>进入PHP安装目录，复制一份<strong>php.ini-development</strong> 改名为 <strong>php.ini</strong> 放到安装路径下</p>
</li>
</ol>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre v-pre class="language-ini"><code># 打开找到;extension_dir=ext，去掉注释符;，将值改为PHP安装路径\ext
extension_dir = &quot;C:/Config/php-7.4.9/ext&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在Apache中加载PHP &amp; 定义执行PHP模块的文件，打开Apache的配置文件<code v-pre>conf\httpd.conf</code>，找到<code v-pre>LoadModule</code>区域，在其后加入：</li>
</ol>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre v-pre class="language-ini"><code># 不同的PHP版本“php7apache2_4.dll”可能不同，下载的php压缩包的时候选择 Thread Safe，否则没有dll
LoadModule php7_module &quot;PHP安装路径\php7apache2_4.dll&quot;
&lt;IfModule php7_module&gt;
    #告诉Apache PHP的安装路径
    PHPIniDir 'C:/Config/php-7.4.9/php.ini'        
    # define php  module file .php和.html的文件能执行PHP程序
    AddType application/x-httpd-php .php .html
    #AddType application/x-httpd-php-source .phps
&lt;/IfModule&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>测试：在 Apache安装路径\htdocs下新建文件：test.php，里面编辑：<code v-pre>&lt;?php phpinfo(); ?&gt;</code>， 启动Apache， 在浏览器输入：localhost:80/test.php，能看到php相关信息即成功。</li>
</ol>
<h3 id="三、mysql" tabindex="-1"><a class="header-anchor" href="#三、mysql" aria-hidden="true">#</a> 三、MySQL</h3>
<ol>
<li>
<p>官网<a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">下载安装</a>，根据自己的需求的版本安装，默认初始化配置不在赘述</p>
</li>
<li>
<p>在PHP中加载连接MySQL的程序集</p>
<p>在<code v-pre>php.ini</code> extension板块中增加一行<code v-pre>extension=php_mysqli.dll</code>，不同的PHP版本可能提供不同的连接mysq的程序集，去ext文件夹下看看PHP提供的是什么这里就写什么，我添加了没有生效；</p>
<p>把自带的哪一行注释取消了却生效了，不知道为啥，自带的是<code v-pre>;extension=mysqli</code>，取消注释即可</p>
</li>
<li>
<p>测试：在test.php中编辑：<code v-pre>&lt;?php $mysqli = mysqli_connect(&quot;localhost&quot;,&quot;root&quot;,&quot;pwd&quot;) or die(&quot;cannt connet&quot;); ?&gt;</code>，启动数据库，重启Apache，在浏览器端查看，如果没有错误信息便配置正确了。</p>
</li>
</ol>
</div></template>


