(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{659:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("Cmd用到的命令汇总，每次使用都会忘记，单独写一篇用到了就及时记录一下")])]),s._v(" "),a("h2",{attrs:{id:"网络测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测试"}},[s._v("#")]),s._v(" 网络测试")]),s._v(" "),a("h3",{attrs:{id:"telnet-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telnet-命令"}},[s._v("#")]),s._v(" telnet 命令")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("作用：检测网络是否畅通")])]),s._v(" "),a("li",[a("p",[s._v("（1）telnet IP 端口。")]),s._v(" "),a("p",[s._v("（2）telnet 域名 端口。")])]),s._v(" "),a("li",[a("p",[s._v("事例：telnet 10.5.78.40 8089")])])]),s._v(" "),a("p",[s._v("oracle 报错 oracle12c安装失败【INS-30131】执行安装程序验证所需要的初始设置失败")]),s._v(" "),a("p",[s._v("解决 ：")]),s._v(" "),a("ul",[a("li",[s._v("1.Ctrl+R 输入cmd 进入命令\n"),a("ol",[a("li",[s._v("首先进入你的Oracle安装包中setup.exe所在的目录下")]),s._v(" "),a("li",[s._v("在setup.exe所在的目录下执行命令\n"),a("code",[s._v('setup.exe -ignorePrereq -J"-Doracle.install.db.validate.supportedOSCheck=false"')])]),s._v(" "),a("li",[s._v("不行执行"),a("code",[s._v('setup.exe -ignorePrereq -J"-Doracle.install.client.validate.clientSupportedOSCheck=false"')]),s._v("命令\n之后会自动进入安装步骤中")])])])]),s._v(" "),a("p",[s._v("查杀进程")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口占用 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ano")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("findstr "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"端口\n# 查看进程 \ntasklist |findstr "')]),s._v("进程id号"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n# 杀掉进程 \ntaskkill /f /t /im "')]),s._v('进程id或者进程名称"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"自动修改本地dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动修改本地dns"}},[s._v("#")]),s._v(" 自动修改本地DNS")]),s._v(" "),a("p",[s._v("用于公司内网需要指定DNS内容，避免每次切换家里网络和公司网络的麻烦")]),s._v(" "),a("p",[s._v("新建"),a("code",[s._v(".bat")]),s._v("后缀的文件，修改下面需要手动指定的"),a("code",[s._v("ip、dns")]),s._v("等内容并保存，以管理员方式启动即可，根据提示运行")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("自动修改DNS")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("@ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" off\n\n@ECHO OFF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("PUSHD %~DP0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("TITLE Network Configuration By Jiang Dequan\n\n%1 %2\nver"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5."')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nul"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("goto :Admin\nmshta vbscript:createobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shell.application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".shellexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%~s0"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"goto :Admin"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runas"')]),s._v(",1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window.close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("goto :eof\n:Admin\n\n:: Define Your Network Configuration\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IP_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".5.124\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUBNET_MASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".5.254\n\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRIMARY_DNS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".1.250\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.26")]),s._v(".1.249\n\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOCAL_CONNECTION_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("本地网络连接\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WIRELESS_CONNECTION_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("WLAN\n\n:menu\ncls\n\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 第一次运行，请修改脚本里面的IP为自己的IP，修改"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地连接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("为"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": Enable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Fixed IP\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": Enable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("本地网络连接"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - DHCP\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(": Enable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WLAN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - Fixed IP\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": Enable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WLAN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - DHCP\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": Exit\necho.\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\necho.\necho.\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" /p "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user_input")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("请输入数字：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" call:configNetworkConnection %LOCAL_CONNECTION_NAME% %WIRELESS_CONNECTION_NAME%\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" call:dhcp %LOCAL_CONNECTION_NAME%\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" call:configNetworkConnection %WIRELESS_CONNECTION_NAME% %LOCAL_CONNECTION_NAME%\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" %user_input% equ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" call:dhcp %WIRELESS_CONNECTION_NAME%\nPause\n\ngoto menu\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" /b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n:dhcp\n:: Get parameters\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETWORK_CONNECTION_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%1\n\nEcho off \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" %NETWORK_CONNECTION_NAME% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enable\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Obtain IP address automatically "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" address name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dhcp\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Obtain DNS automatically "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dns name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%NETWORK_CONNECTION_NAME%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dhcp\n\nEcho Success"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\n\ngoto:eof\n\n:configNetworkConnection\n\n:: Get parameters\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENABLE_NETWORK_CONNECTION_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%1\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DISABLE_NETWORK_CONNECTION_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%2\n\nEcho off\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to disable %DISABLE_NETWORK_CONNECTION_NAME% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%DISABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" %ENABLE_NETWORK_CONNECTION_NAME% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnetsh interface "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" interface "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("admin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("enable\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the IP of %ENABLE_NETWORK_CONNECTION_NAME% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP Set Addr "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" Static %IP_ADDRESS% %GATEWAY% %SUBNET_MASK% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" primary dns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP Set dns "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" static %PRIMARY_DNS% primary "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  Start to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nNetsh interface IP "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" dns "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%ENABLE_NETWORK_CONNECTION_NAME%"')]),s._v(" %DNS% "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n\nEcho Success "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Your IP is %IP_ADDRESS%, good luck"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\ngoto:eof\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);