(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{583:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("内网穿透，简单来说就是将内网局域网的数据让外网能访问到。比如家里的笔记本是通过拨号或者连接路由器上网，没有公网ip，在外面无法获取到家里的电脑上的内容；又比如公司内网，只能在公司连接，不能再家里访问公司电脑的内容。相关的内网穿透软件会分配一个专属域名/端口，这样办公软件就已经在公网上了，")])]),t._v(" "),s("h3",{attrs:{id:"一、natapp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、natapp"}},[t._v("#")]),t._v(" 一、NatApp")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网链接"),s("OutboundLink")],1),t._v("：")])]),t._v(" "),s("li",[s("p",[t._v("点击注册，成功后进入主页，点击左侧购买隧道，NatApp提供了"),s("strong",[t._v("免费隧道")]),t._v("，可以分别购买一个TCP、UDP、Web三种类型的免费隧道，根据提示输入信息即可，完成后即可在下方或者"),s("strong",[t._v("我的隧道")]),t._v("处看到已购买隧道；")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("，包含了Windows、Linux、macos;")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://natapp.cn/article/config_ini",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载配置文件"),s("OutboundLink")],1),t._v("，根据提示修改配置信息")])])]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将本文件放置于natapp同级目录 程序将读取 [default] 段")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在命令行参数模式如 natapp -authtoken=xxx 等相同参数将会覆盖掉此配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#命令行参数 -config= 可以指定任意config.ini文件")]),t._v("\n[default]\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("authtoken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#对应一条隧道的authtoken")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clienttoken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#对应客户端的clienttoken,将会忽略authtoken,若无请留空,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("none                        #log 日志文件,可指定本地文件, none=不做记录,stdout=直接屏幕输出 ,默认为none")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loglevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ERROR                  #日志等级 DEBUG, INFO, WARNING, ERROR 默认为 DEBUG")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#代理设置 如 http://10.123.10.10:3128 非代理上网用户请务必留空")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("启动方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Windows下载为一个"),s("code",[t._v(".exe")]),t._v("的文件，")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令行输入")]),t._v("\nnatapp -authtoken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bat 多配置启动")]),t._v("\nstart natapp -authtoken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxx\nstart natapp -authtoken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("Linux/Mac")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加权限")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x natapp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\n./natapp -authtoken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("9ab6b9040a624f40\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])])])]),t._v(" "),s("p",[t._v("运行成功即可看到路径，linux，window启动都需要保留一个终端窗口，或者"),s("strong",[t._v("改用脚本后台启动运行即可")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"二、utools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、utools"}},[t._v("#")]),t._v(" 二、utools")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.u.tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("utools"),s("OutboundLink")],1),t._v("是一款快捷软件，里面能安装很多的插件，其中就有 内网穿透；")]),t._v(" "),s("p",[t._v("在插件中搜索"),s("strong",[t._v("内网穿透")]),t._v("，安装即可，使用的时候直接输入"),s("strong",[t._v("内网穿透")]),t._v("即可")])])}),[],!1,null,null,null);a.default=e.exports}}]);