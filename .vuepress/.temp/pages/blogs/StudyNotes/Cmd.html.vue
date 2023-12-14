<template><div><p>::: tip</p>
<p>Cmd用到的命令汇总，每次使用都会忘记，单独写一篇用到了就及时记录一下</p>
<p>:::</p>
<!-- more -->
<h2 id="网络测试" tabindex="-1"><a class="header-anchor" href="#网络测试" aria-hidden="true">#</a> 网络测试</h2>
<h3 id="telnet-命令" tabindex="-1"><a class="header-anchor" href="#telnet-命令" aria-hidden="true">#</a> telnet 命令</h3>
<ul>
<li>
<p>作用：检测网络是否畅通</p>
</li>
<li>
<p>（1）telnet IP 端口。</p>
<p>（2）telnet 域名 端口。</p>
</li>
<li>
<p>事例：telnet 10.5.78.40 8089</p>
</li>
</ul>
<p>oracle 报错 oracle12c安装失败【INS-30131】执行安装程序验证所需要的初始设置失败</p>
<p>解决 ：</p>
<ul>
<li>1.Ctrl+R 输入cmd 进入命令
<ol>
<li>首先进入你的Oracle安装包中setup.exe所在的目录下</li>
<li>在setup.exe所在的目录下执行命令
<code v-pre>setup.exe -ignorePrereq -J&quot;-Doracle.install.db.validate.supportedOSCheck=false&quot;</code></li>
<li>不行执行<code v-pre>setup.exe -ignorePrereq -J&quot;-Doracle.install.client.validate.clientSupportedOSCheck=false&quot;</code>命令
之后会自动进入安装步骤中</li>
</ol>
</li>
</ul>
<p>查杀进程</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看端口占用 
netstat -ano |findstr &quot;端口
# 查看进程 
tasklist |findstr &quot;进程id号&quot;
# 杀掉进程 
taskkill /f /t /im &quot;进程id或者进程名称&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动修改本地dns" tabindex="-1"><a class="header-anchor" href="#自动修改本地dns" aria-hidden="true">#</a> 自动修改本地DNS</h3>
<p>用于公司内网需要指定DNS内容，避免每次切换家里网络和公司网络的麻烦</p>
<p>新建<code v-pre>.bat</code>后缀的文件，修改下面需要手动指定的<code v-pre>ip、dns</code>等内容并保存，以管理员方式启动即可，根据提示运行</p>
<p>::: details 自动修改DNS</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>@ echo off

@ECHO OFF&amp;PUSHD %~DP0 &amp;TITLE Network Configuration By Jiang Dequan

%1 %2
ver|find &quot;5.&quot;&gt;nul&amp;&amp;goto :Admin
mshta vbscript:createobject(&quot;shell.application&quot;).shellexecute(&quot;%~s0&quot;,&quot;goto :Admin&quot;,&quot;&quot;,&quot;runas&quot;,1)(window.close)&amp;goto :eof
:Admin

:: Define Your Network Configuration
SET IP_ADDRESS=172.26.5.124
SET GATEWAY=255.255.255.0
SET SUBNET_MASK=172.26.5.254

SET PRIMARY_DNS=172.26.1.250
SET DNS=172.26.1.249

SET LOCAL_CONNECTION_NAME=本地网络连接
SET WIRELESS_CONNECTION_NAME=WLAN

:menu
cls

echo.
echo 第一次运行，请修改脚本里面的IP为自己的IP，修改[本地连接]为[本地网络连接]
echo ==============================
echo.
echo 1: Enable [本地网络连接] - Fixed IP
echo.
echo 2: Enable [本地网络连接] - DHCP
echo.
echo 3: Enable [WLAN] - Fixed IP
echo.
echo 4: Enable [WLAN] - DHCP
echo.
echo 0: Exit
echo.
echo ==============================
echo.
echo.

set /p user_input=请输入数字：
if %user_input% equ 0 exit /b 0
if %user_input% equ 1 call:configNetworkConnection %LOCAL_CONNECTION_NAME% %WIRELESS_CONNECTION_NAME%
if %user_input% equ 2 call:dhcp %LOCAL_CONNECTION_NAME%
if %user_input% equ 3 call:configNetworkConnection %WIRELESS_CONNECTION_NAME% %LOCAL_CONNECTION_NAME%
if %user_input% equ 4 call:dhcp %WIRELESS_CONNECTION_NAME%
Pause

goto menu

exit /b 0


:dhcp
:: Get parameters
SET NETWORK_CONNECTION_NAME=%1

Echo off 

echo  Start to enable %NETWORK_CONNECTION_NAME% ...
netsh interface set interface name=&quot;%NETWORK_CONNECTION_NAME%&quot; admin=enable

echo  Obtain IP address automatically ...
netsh interface ip set address name = &quot;%NETWORK_CONNECTION_NAME%&quot; source = dhcp

echo  Obtain DNS automatically ...
netsh interface ip set dns name = &quot;%NETWORK_CONNECTION_NAME%&quot; source = dhcp

Echo Success!


goto:eof

:configNetworkConnection

:: Get parameters
SET ENABLE_NETWORK_CONNECTION_NAME=%1
SET DISABLE_NETWORK_CONNECTION_NAME=%2

Echo off
echo  Start to disable %DISABLE_NETWORK_CONNECTION_NAME% ...
netsh interface set interface name=&quot;%DISABLE_NETWORK_CONNECTION_NAME%&quot; admin=disabled

echo  Start to enable %ENABLE_NETWORK_CONNECTION_NAME% ...
netsh interface set interface name=&quot;%ENABLE_NETWORK_CONNECTION_NAME%&quot; admin=enable

echo  Start to set the IP of %ENABLE_NETWORK_CONNECTION_NAME% ...
Netsh interface IP Set Addr &quot;%ENABLE_NETWORK_CONNECTION_NAME%&quot; Static %IP_ADDRESS% %GATEWAY% %SUBNET_MASK% 1

echo  Start to set primary dns ...
Netsh interface IP Set dns &quot;%ENABLE_NETWORK_CONNECTION_NAME%&quot; static %PRIMARY_DNS% primary validate=no

echo  Start to set dns ...
Netsh interface IP add dns &quot;%ENABLE_NETWORK_CONNECTION_NAME%&quot; %DNS% validate=no

Echo Success ! Your IP is %IP_ADDRESS%, good luck!

goto:eof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
</div></template>


