(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{763:function(t,e,s){"use strict";s.r(e);var o=s(7),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("近年来go语言越来越火热，值得了解一下，扩宽下知识面，先简单学习下基础语法，go语言学习笔记，"),s("a",{attrs:{href:"http://golang.iswbm.com/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),s("OutboundLink")],1),t._v("，后面的笔记都是基于该作者的笔记一步步学习，练习的"),s("a",{attrs:{href:"https://gitee.com/myMagicRain/go-study",target:"_blank",rel:"noopener noreferrer"}},[t._v("工程地址"),s("OutboundLink")],1)])]),s("h1",{attrs:{id:"goland配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goland配置"}},[t._v("#")]),t._v(" Goland配置")]),t._v(" "),s("p",[t._v("Goland作为JetBrains家族的一员，习惯IDEA开发的人通常选用此开发工具，也可以使用巨硬的VScode，这里只介绍Goland配置")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("配置GOROOT，类似于JDK")]),t._v(" "),s("p",[t._v("点击Files->Settings->GOROOT，设置为go语言开发环境的路径")])]),t._v(" "),s("li",[s("p",[t._v("配置GOPTAH，类似于workspace")]),t._v(" "),s("p",[t._v("点击Files->Settings->GOPATH，设置GOPATH为自己的项目路径")])]),t._v(" "),s("li",[s("p",[t._v("设置 goproxy，类似于maven一样，可以拉取一些库")]),t._v(" "),s("p",[t._v("点击Files->Settings->Go Modules，设置GRPROXY，value可以为以下值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("https://goproxy.io")])]),t._v(" "),s("li",[s("code",[t._v("https://goproxy.cn")])]),t._v(" "),s("li",[s("code",[t._v("https://mirrors.aliyun.com/goproxy/")])])])]),t._v(" "),s("li",[s("p",[t._v("设置go imports（自动格式化插件）")]),t._v(" "),s("p",[t._v("点击Files->Settings->Tools->File Watchers,  再点击 + 添加 goimports，会自动下载，需要科学上网才能下来，// todo")])])]),t._v(" "),s("h1",{attrs:{id:"go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go"}},[t._v("#")]),t._v(" Go")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GOROOT")]),t._v(" "),s("p",[t._v("在GO语言中表示的是 Go语言编译、工具、标准库等的安装路径，通过它可以告诉系统你的 go.exe 是放在哪里，不设置的话，你后面执行 "),s("code",[t._v("go get")]),t._v(" 、"),s("code",[t._v("go install")]),t._v(" 的时候，系统就不认识它了")])]),t._v(" "),s("li",[s("p",[t._v("GOPATH")]),t._v(" "),s("p",[t._v("表示 Go的工作目录，这个目录指定了需要从哪个地方寻找GO的包、可执行程序等，这个目录可以是多个目录表示。这里我设置成我的工作空间（目录你可以自己定）")])]),t._v(" "),s("li",[s("p",[t._v("一般目录结构")])])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("project\n├─bin\t包含了可执行程序，注意是可执行的，不需要解释执行\n├─pkg\t包含了使用的包或者说库\n└─src\t里面包含了go的代码源文件，其中仍按包的不同进行组织\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);