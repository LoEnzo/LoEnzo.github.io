<template><div><p>::: tip</p>
<p>WSL2 是再Windows上运行linux，相对于虚拟机长占后台，WSL2占用资源更少，同样能完成包括大多数命令行工具、程序和应用。</p>
<p>:::</p>
<!-- more -->
<h1 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl" aria-hidden="true">#</a> WSL</h1>
<h2 id="wsl概要" tabindex="-1"><a class="header-anchor" href="#wsl概要" aria-hidden="true">#</a> WSL概要</h2>
<p>WSL 是 Windows Subsystem for Linux 的缩写，意思是 linux 版的 window 子系统。</p>
<p>Linux 的 Windows 子系统让开发人员无需虚拟机就可以直接在 Windows 上运行 Linux 环境，包括大多数命令行工具、程序和应用。</p>
<p><strong>使用 WSL 的好处是：</strong></p>
<ul>
<li>与在虚拟机下使用 Linux 相比，WSL 占用资源更少，更加流畅</li>
<li>WSL 可以对 Windows 文件系统下的文件直接进行读写，文件传输更方便</li>
<li>剪贴板互通，可以直接在 Windows 下其它地方复制文本内容，粘贴到 WSL</li>
</ul>
<p><strong>WSL2简介</strong>
WSL 2 是 WSL 中体系结构的新版本，它更改了 Linux 分发版与 Windows 进行交互的方式。 WSL 2 的主要目标是提高文件系统性能并增加完全的系统调用兼容性。 每个 Linux 分发版都可以作为 WSL 1 或 WSL 2 运行，并可随时在它们之间进行切换。 WSL 2 是对基础体系结构的一次重大改造，它使用虚拟化技术和 Linux 内核来实现其新功能</p>
<p>总结下有以下几个优点</p>
<ul>
<li>WSL2附带真实的Linux4.19内核，能带来完整的系统调用兼容性</li>
<li>支持本机直接运行Docker容器</li>
<li>WSL2运行速度更快</li>
</ul>
<h2 id="wsl安装" tabindex="-1"><a class="header-anchor" href="#wsl安装" aria-hidden="true">#</a> WSL安装</h2>
<h3 id="启用windows-子系统" tabindex="-1"><a class="header-anchor" href="#启用windows-子系统" aria-hidden="true">#</a> 启用Windows 子系统</h3>
<p>安装适用于 Linux 的 Windows 子系统，必须先启用“适用于 Linux 的 Windows 子系统”可选功能，然后才能在 Windows 上安装 Linux 分发版。以管理员身份打开 PowerShell 并运行：</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code>dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若要仅安装 WSL 1，现在应重启计算机并继续<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#install-your-linux-distribution-of-choice" target="_blank" rel="noopener noreferrer">安装所选的 Linux 分发版</a>，否则请等待重启并继续更新到 WSL 2</p>
<p>阅读有关<a href="https://docs.microsoft.com/zh-cn/windows/wsl/compare-versions" target="_blank" rel="noopener noreferrer">比较 WSL 2 和 WSL 1</a> 的详细信息。</p>
<h3 id="更新到-wsl-2" tabindex="-1"><a class="header-anchor" href="#更新到-wsl-2" aria-hidden="true">#</a> 更新到 WSL 2</h3>
<p>若要更新到 WSL 2，必须满足以下条件：</p>
<ul>
<li>运行 Windows 10（<a href="ms-settings:windowsupdate">已更新到版本 2004</a> 的<strong>内部版本 19041</strong> 或更高版本）。</li>
<li>通过按 Windows 徽标键 + R，检查你的 Windows 版本，然后键入 <strong>winver</strong>，选择“确定”。 （或者在 Windows 命令提示符下输入 <code v-pre>ver</code> 命令）。 如果内部版本低于 19041，请<a href="ms-settings:windowsupdate">更新到最新的 Windows 版本</a>。 <a href="https://www.microsoft.com/software-download/windows10" target="_blank" rel="noopener noreferrer">获取 Windows 更新助手</a>。</li>
</ul>
<h3 id="启用-虚拟机平台-可选组件" tabindex="-1"><a class="header-anchor" href="#启用-虚拟机平台-可选组件" aria-hidden="true">#</a> 启用“虚拟机平台”可选组件</h3>
<p>安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。</p>
<p>以管理员身份打开 PowerShell 并运行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>重新启动</strong>计算机，以完成 WSL 安装并更新到 WSL 2。</p>
<h3 id="将-wsl-2-设置为默认版本" tabindex="-1"><a class="header-anchor" href="#将-wsl-2-设置为默认版本" aria-hidden="true">#</a> 将 WSL 2 设置为默认版本</h3>
<p>安装新的 Linux 分发版时，请在 PowerShell 中运行以下命令，以将 WSL 2 设置为默认版本：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>wsl --set-default-version 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行该命令后，你可能会看到此消息：<code v-pre>WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel</code>。 跟随链接（https://aka.ms/wsl2kernel），在文档中安装来自该页面的 MSI，以便在计算机上安装 Linux 内核供 WSL 2 使用。 安装内核后，请再次运行该命令，该命令应会成功完成而不显示消息。</p>
<p>备注</p>
<p>从 WSL 1 更新到 WSL 2 可能需要几分钟才能完成，具体取决于目标分发版的大小。 如果从 Windows 10 周年更新或创意者更新运行 WSL 1 的旧（历史）安装，可能会遇到更新错误。 按照这些说明<a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-legacy#uninstallingremoving-the-legacy-distro" target="_blank" rel="noopener noreferrer">卸载并删除任何旧分发</a>。</p>
<p>如果 <code v-pre>wsl --set-default-version</code> 结果为无效命令，请输入 <code v-pre>wsl --help</code>。 如果 <code v-pre>--set-default-version</code> 未列出，则表示你的 OS 不支持它，你需要更新到版本 2004、内部版本 19041 或更高版本。</p>
<h3 id="安装-linux-分发版" tabindex="-1"><a class="header-anchor" href="#安装-linux-分发版" aria-hidden="true">#</a> 安装 Linux 分发版</h3>
<p>打开windows应用商店，搜索ubuntu，并选择你偏好的 Linux 分发版。我安装的是Ubuntu 20.04版本。</p>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2>
<ol>
<li>ssh连接设置：</li>
</ol>
<p>每次切换网络，或者重新连接网络，主机会动态分配给WSL一个ip，ssh连接能智能查找本地WSL（例如MobaXterm）可以直接连接，但是连接ftp，就需要每次修改连接的ip。其次还有一些环境变量的冲突问题，因为主机和WSL的PATH环境变量和hosts配置是共享的。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// 关闭WSL和主机的交互，在WSL下
echo &quot;[interop]\nenabled=false\nappendWindowsPath=false&quot; | sudo tee /etc/wsl.conf

// 在powershell(以管理员身份运行)中输入: (以重启wsl)
net stop LxssManager
net start LxssManager

// 后续ssh，ftp连接，ip可以直接设置为127.0.0.1即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>DNS配置</li>
</ol>
<p>WSL会自动在启动时根据虚拟交换机WSL生成<code v-pre>/etc/resolv.conf</code>文件，如下为默认的文件内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:
# [network]
# generateResolvConf = false
nameserver 172.27.96.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>暂时解决方案</strong>：自动开机启动项写入配置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>'echo -e &quot;\nnameserver 114.114.114.114\nnameserver 8.8.8.8\nnameserver 8.8.4.4&quot; &gt; /etc/resolv.conf'

echo -e &quot;options timeout:1 attempts:1 rotate\nnameserver 114.114.114.114\nnameserver 8.8.8.8&quot; &gt;/etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>设置root用户登陆</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 设置ubuntu登录默认用户为root，我的是 ubuntu2004，根据自己对应版本来
ubuntu2004 config --default-user root

# 设置允许root用户登陆，好像是允许ftp root登陆的，自行测试
vi  /etc/ssh/sshd_config
LoginGraceTime 2m
PermitRootLogin yes
StrictModes yes

# 设置允许密码登陆
PasswordAuthentication yes

# 之前修改的下面这种方式，修改Root账户密码，参考
sudo passwd root

# 停止Windows WSL服务，在Power Shell（以管理员身份）运行
net stop lxssmanager 

# 更改WSL默认用户， 在Power Shell（以管理员身份）运行，重新打开WSL即可看到登录用户为Root
C:\Users\用户名\AppData\Local\Microsoft\WindowsApps\ubuntu2004.exe config --default-user root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>设置开机自启动ssh服务，让三方软件可以通过ssh连接</li>
</ol>
<p>每次开机，终端管理软件无法通过ssh连接Linux, 需要先通过自带命令行，或者启动ubuntu客户端，输入<code v-pre>service ssh restart</code>，之后才能连接</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># win+R, 输入shell:startup，进入开机启动文件夹目录，新建一个.bat的批处理文件，内容如下：
ubuntu2004 -c &quot;service ssh start&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu添加启动脚本" tabindex="-1"><a class="header-anchor" href="#ubuntu添加启动脚本" aria-hidden="true">#</a> ubuntu添加启动脚本</h2>
<p>ubuntu20.04添加启动脚本，开机启动nameserver，防止每次启动WSL2 nameserver被初始化覆盖</p>
<p>::: details 防止WSL2 nameserver 重启被覆盖</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Incredibly unhelpful.

It is the issue for many people, it is the same in issue trackers/forums/etc across the internet.

The WSL instance cannot resolve domain names. Editing resolv.conf to point to a functioning nameserver &quot;works&quot; for the duration of the session, but as soon as the distro is rebooted resolv.conf is regenerated using WSL's original template. Because etc/resolv.conf is actually a symlink to run/resolvconf/resolv.conf

Steps that have worked for me:

Boot your distro.
cd ~/../../etc
Create wsl.conf, however you see fit. , and edit it later, whatever.sudo vim wsl.confsudo touch wsl.conf
Add these lines to wsl.conf:
[network]
generateResolvConf=false
exit or in Windows cmd wsl --terminate [YourDistroName]
Boot your distro.
At this point, thanks to wsl.conf, run/resolvconf should no longer exist and will never be created again.

cd ~/../../etc
sudo rm resolv.conf - this deletes the existing symlink file.
Create a new resolv.conf, however you see fit. , and edit it later, whatever.sudo vim resolv.confsudo touch resolv.conf
Add this line to resolv.conf:

replace 8.8.8.8 with your preferred functional nameserver.nameserver 8.8.8.8
exit or in Windows cmd wsl --terminate [YourDistroName]
wsl --shutdown just to be sure that you've definitely killed everything.
Boot your distro.
Confirm that your resolv.conf changes are still in effect, or just ping a domain name and cry tears of joy after struggling to get this working for far too fucking long
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h2 id="移除wsl中path共享windows-可选" tabindex="-1"><a class="header-anchor" href="#移除wsl中path共享windows-可选" aria-hidden="true">#</a> 移除WSL中PATH共享Windows(可选)</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>sudo vim /etc/wsl.conf

# 不加载Windows中的PATH内容
[interop]
appendWindowsPath = false

# 不自动挂载Windows系统所有磁盘分区
[automount]
enabled = false

启动powershell
wsl --list
# 适用于 Linux 的 Windows 子系统:
# Ubuntu-20.04 (默认)
wsl --terminate Ubuntu-20.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubuntu安装源" tabindex="-1"><a class="header-anchor" href="#ubuntu安装源" aria-hidden="true">#</a> ubuntu安装源</h2>
<p>备份源</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改源</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo gedit /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ubuntu20.04源</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>#添加阿里源
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
#添加清华源
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新并立即生效</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 更新源
sudo apt-get update
# 更新软件
sudo apt-get upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wls和vmware冲突解决" tabindex="-1"><a class="header-anchor" href="#wls和vmware冲突解决" aria-hidden="true">#</a> WLS和VMware冲突解决</h2>
<p>使用<code v-pre>powershell</code>工具，输入下面指令：</p>
<ul>
<li>启用VMware：<code v-pre>bcdedit /set hypervisorlaunchtype off</code></li>
<li>启用WSL：<code v-pre>bcdedit /set hypervisorlaunchtype auto</code></li>
</ul>
<h2 id="重启wsl2" tabindex="-1"><a class="header-anchor" href="#重启wsl2" aria-hidden="true">#</a> 重启WSL2</h2>
<p>有些配置需要重启生效，可以选择宿主机也就是电脑重启，也可以以管理员运行命令控制台，重启WSL服务</p>
<p>停止：<code v-pre>net stop LxssManager</code></p>
<p>启动：<code v-pre>net start LxssManager</code></p>
</div></template>


