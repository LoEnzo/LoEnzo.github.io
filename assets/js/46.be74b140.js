(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{673:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("WSL2 是再Windows上运行linux，相对于虚拟机长占后台，WSL2占用资源更少，同样能完成包括大多数命令行工具、程序和应用。")])]),s._v(" "),e("h1",{attrs:{id:"wsl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wsl"}},[s._v("#")]),s._v(" WSL")]),s._v(" "),e("h2",{attrs:{id:"wsl概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wsl概要"}},[s._v("#")]),s._v(" WSL概要")]),s._v(" "),e("p",[s._v("WSL 是 Windows Subsystem for Linux 的缩写，意思是 linux 版的 window 子系统。")]),s._v(" "),e("p",[s._v("Linux 的 Windows 子系统让开发人员无需虚拟机就可以直接在 Windows 上运行 Linux 环境，包括大多数命令行工具、程序和应用。")]),s._v(" "),e("p",[e("strong",[s._v("使用 WSL 的好处是：")])]),s._v(" "),e("ul",[e("li",[s._v("与在虚拟机下使用 Linux 相比，WSL 占用资源更少，更加流畅")]),s._v(" "),e("li",[s._v("WSL 可以对 Windows 文件系统下的文件直接进行读写，文件传输更方便")]),s._v(" "),e("li",[s._v("剪贴板互通，可以直接在 Windows 下其它地方复制文本内容，粘贴到 WSL")])]),s._v(" "),e("p",[e("strong",[s._v("WSL2简介")]),s._v("\nWSL 2 是 WSL 中体系结构的新版本，它更改了 Linux 分发版与 Windows 进行交互的方式。 WSL 2 的主要目标是提高文件系统性能并增加完全的系统调用兼容性。 每个 Linux 分发版都可以作为 WSL 1 或 WSL 2 运行，并可随时在它们之间进行切换。 WSL 2 是对基础体系结构的一次重大改造，它使用虚拟化技术和 Linux 内核来实现其新功能")]),s._v(" "),e("p",[s._v("总结下有以下几个优点")]),s._v(" "),e("ul",[e("li",[s._v("WSL2附带真实的Linux4.19内核，能带来完整的系统调用兼容性")]),s._v(" "),e("li",[s._v("支持本机直接运行Docker容器")]),s._v(" "),e("li",[s._v("WSL2运行速度更快")])]),s._v(" "),e("h2",{attrs:{id:"wsl安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wsl安装"}},[s._v("#")]),s._v(" WSL安装")]),s._v(" "),e("h3",{attrs:{id:"启用windows-子系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用windows-子系统"}},[s._v("#")]),s._v(" 启用Windows 子系统")]),s._v(" "),e("p",[s._v("安装适用于 Linux 的 Windows 子系统，必须先启用“适用于 Linux 的 Windows 子系统”可选功能，然后才能在 Windows 上安装 Linux 分发版。以管理员身份打开 PowerShell 并运行：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("dism"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("online "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable-feature")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("featurename:Microsoft"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Windows"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Subsystem"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Linux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("all "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("norestart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("若要仅安装 WSL 1，现在应重启计算机并继续"),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#install-your-linux-distribution-of-choice",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装所选的 Linux 分发版"),e("OutboundLink")],1),s._v("，否则请等待重启并继续更新到 WSL 2")]),s._v(" "),e("p",[s._v("阅读有关"),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/compare-versions",target:"_blank",rel:"noopener noreferrer"}},[s._v("比较 WSL 2 和 WSL 1"),e("OutboundLink")],1),s._v(" 的详细信息。")]),s._v(" "),e("h3",{attrs:{id:"更新到-wsl-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新到-wsl-2"}},[s._v("#")]),s._v(" 更新到 WSL 2")]),s._v(" "),e("p",[s._v("若要更新到 WSL 2，必须满足以下条件：")]),s._v(" "),e("ul",[e("li",[s._v("运行 Windows 10（"),e("a",{attrs:{href:"ms-settings:windowsupdate"}},[s._v("已更新到版本 2004")]),s._v(" 的"),e("strong",[s._v("内部版本 19041")]),s._v(" 或更高版本）。")]),s._v(" "),e("li",[s._v("通过按 Windows 徽标键 + R，检查你的 Windows 版本，然后键入 "),e("strong",[s._v("winver")]),s._v("，选择“确定”。 （或者在 Windows 命令提示符下输入 "),e("code",[s._v("ver")]),s._v(" 命令）。 如果内部版本低于 19041，请"),e("a",{attrs:{href:"ms-settings:windowsupdate"}},[s._v("更新到最新的 Windows 版本")]),s._v("。 "),e("a",{attrs:{href:"https://www.microsoft.com/software-download/windows10",target:"_blank",rel:"noopener noreferrer"}},[s._v("获取 Windows 更新助手"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("h3",{attrs:{id:"启用-虚拟机平台-可选组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用-虚拟机平台-可选组件"}},[s._v("#")]),s._v(" 启用“虚拟机平台”可选组件")]),s._v(" "),e("p",[s._v("安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。")]),s._v(" "),e("p",[s._v("以管理员身份打开 PowerShell 并运行：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("重新启动")]),s._v("计算机，以完成 WSL 安装并更新到 WSL 2。")]),s._v(" "),e("h3",{attrs:{id:"将-wsl-2-设置为默认版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-wsl-2-设置为默认版本"}},[s._v("#")]),s._v(" 将 WSL 2 设置为默认版本")]),s._v(" "),e("p",[s._v("安装新的 Linux 分发版时，请在 PowerShell 中运行以下命令，以将 WSL 2 设置为默认版本：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("wsl --set-default-version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("运行该命令后，你可能会看到此消息："),e("code",[s._v("WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel")]),s._v("。 跟随链接（https://aka.ms/wsl2kernel），在文档中安装来自该页面的 MSI，以便在计算机上安装 Linux 内核供 WSL 2 使用。 安装内核后，请再次运行该命令，该命令应会成功完成而不显示消息。")]),s._v(" "),e("p",[s._v("备注")]),s._v(" "),e("p",[s._v("从 WSL 1 更新到 WSL 2 可能需要几分钟才能完成，具体取决于目标分发版的大小。 如果从 Windows 10 周年更新或创意者更新运行 WSL 1 的旧（历史）安装，可能会遇到更新错误。 按照这些说明"),e("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-legacy#uninstallingremoving-the-legacy-distro",target:"_blank",rel:"noopener noreferrer"}},[s._v("卸载并删除任何旧分发"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("如果 "),e("code",[s._v("wsl --set-default-version")]),s._v(" 结果为无效命令，请输入 "),e("code",[s._v("wsl --help")]),s._v("。 如果 "),e("code",[s._v("--set-default-version")]),s._v(" 未列出，则表示你的 OS 不支持它，你需要更新到版本 2004、内部版本 19041 或更高版本。")]),s._v(" "),e("h3",{attrs:{id:"安装-linux-分发版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-linux-分发版"}},[s._v("#")]),s._v(" 安装 Linux 分发版")]),s._v(" "),e("p",[s._v("打开windows应用商店，搜索ubuntu，并选择你偏好的 Linux 分发版。我安装的是Ubuntu 20.04版本。")]),s._v(" "),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意：")]),s._v(" "),e("ol",[e("li",[s._v("ssh连接设置：")])]),s._v(" "),e("p",[s._v("每次切换网络，或者重新连接网络，主机会动态分配给WSL一个ip，ssh连接能智能查找本地WSL（例如MobaXterm）可以直接连接，但是连接ftp，就需要每次修改连接的ip。其次还有一些环境变量的冲突问题，因为主机和WSL的PATH环境变量和hosts配置是共享的。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("// 关闭WSL和主机的交互，在WSL下\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[interop]'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("enabled=false"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('appendWindowsPath=false"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/wsl.conf\n\n// 在powershell"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("以管理员身份运行"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("中输入: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("以重启wsl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnet stop LxssManager\nnet start LxssManager\n\n// 后续ssh，ftp连接，ip可以直接设置为127.0.0.1即可\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("DNS配置")])]),s._v(" "),e("p",[s._v("WSL会自动在启动时根据虚拟交换机WSL生成"),e("code",[s._v("/etc/resolv.conf")]),s._v("文件，如下为默认的文件内容：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [network]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# generateResolvConf = false")]),s._v("\nnameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.27")]),s._v(".96.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("暂时解决方案")]),s._v("：自动开机启动项写入配置")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo -e \"\\nnameserver 114.114.114.114\\nnameserver 8.8.8.8\\nnameserver 8.8.4.4\" > /etc/resolv.conf'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"options timeout:1 attempts:1 rotate'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("nameserver 114.114.114.114"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('nameserver 8.8.8.8"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/resolv.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("设置root用户登陆")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置ubuntu登录默认用户为root，我的是 ubuntu2004，根据自己对应版本来")]),s._v("\nubuntu2004 config --default-user root\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置允许root用户登陆，好像是允许ftp root登陆的，自行测试")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/ssh/sshd_config\nLoginGraceTime 2m\nPermitRootLogin "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nStrictModes "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置允许密码登陆")]),s._v("\nPasswordAuthentication "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 之前修改的下面这种方式，修改Root账户密码，参考")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止Windows WSL服务，在Power Shell（以管理员身份）运行")]),s._v("\nnet stop lxssmanager \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改WSL默认用户， 在Power Shell（以管理员身份）运行，重新打开WSL即可看到登录用户为Root")]),s._v("\nC:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("用户名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("AppData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Local"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Microsoft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WindowsApps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ubuntu2004.exe config --default-user root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("设置开机自启动ssh服务，让三方软件可以通过ssh连接")])]),s._v(" "),e("p",[s._v("每次开机，终端管理软件无法通过ssh连接Linux, 需要先通过自带命令行，或者启动ubuntu客户端，输入"),e("code",[s._v("service ssh restart")]),s._v("，之后才能连接")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# win+R, 输入shell:startup，进入开机启动文件夹目录，新建一个.bat的批处理文件，内容如下：")]),s._v("\nubuntu2004 -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service ssh start"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"ubuntu添加启动脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu添加启动脚本"}},[s._v("#")]),s._v(" ubuntu添加启动脚本")]),s._v(" "),e("p",[s._v("ubuntu20.04添加启动脚本，开机启动nameserver，防止每次启动WSL2 nameserver被初始化覆盖")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("防止WSL2 nameserver 重启被覆盖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Incredibly unhelpful.\n\nIt is the issue for many people, it is the same in issue trackers/forums/etc across the internet.\n\nThe WSL instance cannot resolve domain names. Editing resolv.conf to point to a functioning nameserver \"works\" for the duration of the session, but as soon as the distro is rebooted resolv.conf is regenerated using WSL's original template. Because etc/resolv.conf is actually a symlink to run/resolvconf/resolv.conf\n\nSteps that have worked for me:\n\nBoot your distro.\ncd ~/../../etc\nCreate wsl.conf, however you see fit. , and edit it later, whatever.sudo vim wsl.confsudo touch wsl.conf\nAdd these lines to wsl.conf:\n[network]\ngenerateResolvConf=false\nexit or in Windows cmd wsl --terminate [YourDistroName]\nBoot your distro.\nAt this point, thanks to wsl.conf, run/resolvconf should no longer exist and will never be created again.\n\ncd ~/../../etc\nsudo rm resolv.conf - this deletes the existing symlink file.\nCreate a new resolv.conf, however you see fit. , and edit it later, whatever.sudo vim resolv.confsudo touch resolv.conf\nAdd this line to resolv.conf:\n\nreplace 8.8.8.8 with your preferred functional nameserver.nameserver 8.8.8.8\nexit or in Windows cmd wsl --terminate [YourDistroName]\nwsl --shutdown just to be sure that you've definitely killed everything.\nBoot your distro.\nConfirm that your resolv.conf changes are still in effect, or just ping a domain name and cry tears of joy after struggling to get this working for far too fucking long\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])])]),s._v(" "),e("h2",{attrs:{id:"移除wsl中path共享windows-可选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除wsl中path共享windows-可选"}},[s._v("#")]),s._v(" 移除WSL中PATH共享Windows(可选)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/wsl.conf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不加载Windows中的PATH内容")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("interop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nappendWindowsPath "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不自动挂载Windows系统所有磁盘分区")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("automount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nenabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n启动powershell\nwsl --list\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 适用于 Linux 的 Windows 子系统:")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu-20.04 (默认)")]),s._v("\nwsl --terminate Ubuntu-20.04\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"ubuntu安装源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装源"}},[s._v("#")]),s._v(" ubuntu安装源")]),s._v(" "),e("p",[s._v("备份源")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/apt/sources.list /etc/apt/sources.list.bak\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo gedit /etc/apt/sources.list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("ubuntu20.04源")]),s._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加阿里源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb-src")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb-src")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb-src")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb-src")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb-src")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加清华源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("deb")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse multiverse")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("刷新并立即生效")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新软件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"wls和vmware冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wls和vmware冲突解决"}},[s._v("#")]),s._v(" WLS和VMware冲突解决")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("powershell")]),s._v("工具，输入下面指令：")]),s._v(" "),e("ul",[e("li",[s._v("启用VMware："),e("code",[s._v("bcdedit /set hypervisorlaunchtype off")])]),s._v(" "),e("li",[s._v("启用WSL："),e("code",[s._v("bcdedit /set hypervisorlaunchtype auto")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);