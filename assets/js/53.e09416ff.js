(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{621:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"})]),a("h1",{attrs:{id:"包的知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的知识点"}},[s._v("#")]),s._v(" 包的知识点")]),s._v(" "),a("ul",[a("li",[s._v("导包可以多行导入")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sync"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("可以使用别名，避免同一包名产生冲突")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" mrand "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"math/rand"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("使用点")])]),s._v(" "),a("p",[s._v("但这种用法，会有一定的隐患，就是导入的包里可能有函数，会和我们自己的函数发生冲突")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("包的初始化"),a("code",[s._v("init")])])]),s._v(" "),a("p",[s._v("包被导入时，会执行"),a("code",[s._v("init")]),s._v("函数，优先于"),a("code",[s._v("main")]),s._v("函数，不能有参数和返回值，"),a("strong",[s._v("建议少用，仅用于全局变量初始化，或者单元测试初始化一些东西")])]),s._v(" "),a("ul",[a("li",[s._v("包的匿名导入")])]),s._v(" "),a("p",[s._v("导入一个没有用到的包在编译的时候会报错，如果只想使用"),a("code",[s._v("init")]),s._v("函数来初始化一些任务，可以对包进行匿名导入")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packgename"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("导入的包是路径")])]),s._v(" "),a("li",[a("p",[s._v("使用绝对路径导入，而不是相对路径，避免改变了项目放在"),a("code",[s._v("src")]),s._v("下，改变了"),a("code",[s._v("GOPATH")]),s._v("而导致运行报错")])]),s._v(" "),a("li",[a("p",[s._v("包导入的路径的优先级")])])]),s._v(" "),a("p",[s._v("如果项目下有"),a("code",[s._v("vendor")]),s._v("目录，那么优先级是"),a("code",[s._v("vender > $GOROOT/src > $GOPATH/src")])]),s._v(" "),a("p",[s._v("通常"),a("code",[s._v("vendor")]),s._v(" 目录是通过 "),a("code",[s._v("go mod vendor")]),s._v(" 命令生成的，这个命令会将项目依赖全部打包到你的项目目录下的 verdor 文件夹中")]),s._v(" "),a("h1",{attrs:{id:"go包管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go包管理"}},[s._v("#")]),s._v(" Go包管理")]),s._v(" "),a("h2",{attrs:{id:"go包管理发展历程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go包管理发展历程"}},[s._v("#")]),s._v(" go包管理发展历程")]),s._v(" "),a("p",[s._v("go的包管理方式，从"),a("code",[s._v("GOPATH")]),s._v("到"),a("code",[s._v("go vender")]),s._v("到"),a("code",[s._v("go modules")]),s._v("，推荐使用"),a("code",[s._v("go modules")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("GOPATH")])]),s._v(" "),a("p",[s._v("可以理解为工作目录，通常的目录结构如下，包保存路径"),a("code",[s._v("$GOPATH/src")]),s._v("下，主要弊端无法在项目中使用指定版本的包，因为其没有包的概念，一个包只能保留一个版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_bin：存放编译后生成的二进制可执行文件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_pkg：存放编译后生成的 .a 文件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_src：存放项目的源代码，可以是你自己写的代码，也可以是你 go get 下载的包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("go vender")])]),s._v(" "),a("p",[s._v("为了解决 "),a("code",[s._v("GOPATH")]),s._v(" 方案下不同项目下无法使用多个版本库的问题，Go v1.5 开始支持 "),a("code",[s._v("vendor")])]),s._v(" "),a("p",[s._v("它在每个项目的下都创建一个"),a("code",[s._v("vendor")]),s._v("目录，每个项目需要的以来都下载到该目录下，项目之间不相互影响，但是项目同一个包极大可能被多个项目用到了，每个项目下都保留无疑是对磁盘空间的浪费，别人要使用你的项目，你还得先将你依赖的包都上传，否则别人很可能无法使用")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("go modules")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000021854441",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("go v1.11版本开始，"),a("code",[s._v("go env")]),s._v("多了个环境变量"),a("code",[s._v("GO111MODULE")]),s._v("，通过它可以开启或关闭 go mod 模式，它有三个可选值："),a("code",[s._v("off")]),s._v("、"),a("code",[s._v("on")]),s._v("、"),a("code",[s._v("auto")]),s._v("，默认值是"),a("code",[s._v("auto")])]),s._v(" "),a("p",[s._v("在项目根目录执行"),a("code",[s._v("go mod init")]),s._v("，会生成"),a("code",[s._v("go.mod")]),s._v("文件")])]),s._v(" "),a("li",[a("p",[s._v("go包依赖顺序")]),s._v(" "),a("p",[s._v("包保存路径在"),a("code",[s._v("$GOPATH/pkg/mod")]),s._v("下，有多版本区分，多个项目可以共享缓存的modules，可以结合vendor一起使用，将项目和vendor文件夹一起上传，可以让别人直接使用的依赖包，而不需要重复下载")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("GO111MODULE=off")]),s._v("：禁用模块支持，编译时会从"),a("code",[s._v("GOPATH")]),s._v("和"),a("code",[s._v("vendor")]),s._v("文件夹中查找包，")]),s._v(" "),a("li",[a("code",[s._v("GO111MODULE=on")]),s._v("：启用模块支持，编译时会忽略"),a("code",[s._v("GOPATH")]),s._v("和"),a("code",[s._v("vendor")]),s._v("文件夹，只根据 "),a("code",[s._v("go.mod")]),s._v("下载依赖，")]),s._v(" "),a("li",[a("code",[s._v("GO111MODULE=auto")]),s._v("：当项目在"),a("code",[s._v("$GOPATH/src")]),s._v("外且项目根目录有"),a("code",[s._v("go.mod")]),s._v("文件时，自动开启模块支持，")])])])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启go mod方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" env "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w GO111MODULE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置代理，加速依赖下载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" env "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("w GOPROXY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("goproxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("direct\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"go-mod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-mod"}},[s._v("#")]),s._v(" go mod")]),s._v(" "),a("h3",{attrs:{id:"go-modules-模式核心文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-modules-模式核心文件"}},[s._v("#")]),s._v(" go modules 模式核心文件")]),s._v(" "),a("p",[a("code",[s._v("go.mod")])]),s._v(" "),a("ul",[a("li",[s._v("第一行：模块的引用路径")]),s._v(" "),a("li",[s._v("第二行：项目使用的 go 版本")]),s._v(" "),a("li",[s._v("第三行：项目所需的直接依赖包及其版本")])]),s._v(" "),a("p",[s._v("简单的 go.mod")]),s._v(" "),a("p",[s._v("如何将依赖写入"),a("code",[s._v("go.mod")]),s._v("，通过"),a("code",[s._v("go get")]),s._v("下载安装指定的依赖，或者"),a("code",[s._v("go build")]),s._v("导入import中的依赖也能自动下载")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("module "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("study\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),s._v("\n\nrequire github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("qq827435393"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gohello v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20201127010752")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("c29ed43981d7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("复杂的go.mod")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("exclude")]),s._v("： 忽略指定版本的依赖包")]),s._v(" "),a("li",[a("code",[s._v("replace")]),s._v("：由于在国内访问golang.org/x的各个包都需要翻墙，你可以在go.mod中使用replace替换成github上对应的库。")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("module github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("BingmingWong"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.14")]),s._v("\n\nrequire "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apple v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v("\n    example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("banana v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("\n    example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("banana"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v2 v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v("\n    example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pear "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// indirect")]),s._v("\n    example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("strawberry "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// incompatible")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nexclude example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("banana v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v("\nreplace（\n    golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("crypto v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20180820150726")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("614")]),s._v("d502a4dac "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("golang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("crypto v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20180820150726")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("614")]),s._v("d502a4dac\n    golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("net v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20180821023952")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("922")]),s._v("f4815f713 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("golang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("net v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20180826012351")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("a410e7b638d\n    golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("text v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("golang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("text v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("code",[s._v("go.sum")])]),s._v(" "),a("p",[s._v("每一行都是由 "),a("code",[s._v("模块路径")]),s._v("，"),a("code",[s._v("模块版本")]),s._v("，"),a("code",[s._v("哈希检验值")]),s._v(" 组成，其中哈希检验值是用来保证当前缓存的模块不会被篡改。hash 是以"),a("code",[s._v("h1:")]),s._v("开头的字符串，表示生成checksum的算法是第一版的hash算法（sha256）")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("："),a("code",[s._v("go.mod 和 go.sum 是 go modules 版本管理的指导性文件，因此 go.mod 和 go.sum 文件都应该提交到你的 Git 仓库中去，避免其他人使用你写项目时，重新生成的go.mod 和 go.sum 与你开发的基准版本的不一致")])]),s._v(" "),a("h3",{attrs:{id:"go-mod-相关指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-mod-相关指令"}},[s._v("#")]),s._v(" go mod 相关指令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("go mod init")]),s._v(" "),a("td",[s._v("生成 go.mod 文件")])]),s._v(" "),a("tr",[a("td",[s._v("go mod download")]),s._v(" "),a("td",[s._v("下载 go.mod 文件中指明的所有依赖到本地cache，默认为"),a("code",[s._v("$GOPATH/pkg/mod")]),s._v("目录）")])]),s._v(" "),a("tr",[a("td",[s._v("go mod tidy")]),s._v(" "),a("td",[s._v("整理现有的依赖（添加缺少的包，且删除无用的包）")])]),s._v(" "),a("tr",[a("td",[s._v("go mod graph")]),s._v(" "),a("td",[s._v("查看现有的依赖结构")])]),s._v(" "),a("tr",[a("td",[s._v("go mod edit")]),s._v(" "),a("td",[s._v("编辑 go.mod 文件，-fmt 格式化文件")])]),s._v(" "),a("tr",[a("td",[s._v("go mod vendor")]),s._v(" "),a("td",[s._v("导出项目所有的依赖到vendor目录")])]),s._v(" "),a("tr",[a("td",[s._v("go mod verify")]),s._v(" "),a("td",[s._v("校验一个模块是否被篡改过")])]),s._v(" "),a("tr",[a("td",[s._v("go mod why")]),s._v(" "),a("td",[s._v("查看为什么需要依赖某模块")])])])]),s._v(" "),a("h2",{attrs:{id:"go-包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-包管理器"}},[s._v("#")]),s._v(" go 包管理器")]),s._v(" "),a("p",[s._v("go get 有时候会下载不下来需要的包，这里就需要一个叫"),a("code",[s._v("gopm")]),s._v("，就是go的包管理器，类似于 node.js 的包管理器 npm一样，我本地有时又go下载快，选择使用吧")]),s._v(" "),a("p",[a("code",[s._v("gopm")]),s._v("也是一个包，也需要先下载下来")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\ngo get -u github.com/gpmgo/gopm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装，先切换目录到 $GOPATH/src/github.com/gpmgo/gopm")]),s._v("\ngo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就可以在 $GOPATH/bin下看到可执行文件了")]),s._v("\ngopm.exe\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测是否安装成功")]),s._v("\ngopm -v\nGopm version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(".8.0307 Beta\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("注意：全局go配置 "),a("code",[s._v("set GO111MODULE=auto")]),s._v("，默认也是auto，如果改过on的需要修改为auto即可，"),a("code",[s._v('go env -w GO111MODULE="auto"')])]),s._v(" "),a("p",[a("code",[s._v("gopm")]),s._v("使用方式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Commands\nNAME:\n   Gopm - Go Package Manager\n\nUSAGE:\n   Gopm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCOMMANDS:\n   list\t\tlist all dependencies of current project\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前项目的所有依赖项")]),s._v("\n   gen\t\tgenerate a gopmfile "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" current Go project\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为当前Go项目生成gopmfile")]),s._v("\n   get\t\tfetch remote package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" and dependencies\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取远程包和依赖项")]),s._v("\n   bin\t\tdownload and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" dependencies and build binary\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载并链接依赖项，构建二进制文件")]),s._v("\n   config\tconfigure gopm settings\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置gopm设置")]),s._v("\n   run\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" dependencies and go run\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接依赖项并运行\t")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" dependencies and go "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接相关性和go测试")]),s._v("\n   build\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" dependencies and go build\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接依赖项并开始构建")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" dependencies and go "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 链接依赖项并开始安装")]),s._v("\n   clean\tclean all temporary files\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除所有临时文件")]),s._v("\n   update\tcheck and update gopm resources including itself\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查和更新gopm资源，包括其自身")]),s._v("\n   help, h\tShows a list of commands or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示命令列表或一个命令的帮助")]),s._v("\n\nGLOBAL OPTIONS:\n   --noterm, -n\t\tdisable color output\n   --strict, -s\t\tstrict mode\n   --debug, -d\t\tdebug mode\n   --help, -h\t\tshow "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n   --version, -v\tprint the version\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"go运行相关指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go运行相关指令"}},[s._v("#")]),s._v(" go运行相关指令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[s._v("指令")])]),s._v(" "),a("th",[a("strong",[s._v("说明")])])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[s._v("go fmt")])]),s._v(" "),a("td",[s._v("格式化文档")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("go build")])]),s._v(" "),a("td",[s._v("构建出符合平台的二进制文件，windows下就位"),a("code",[s._v(".exe")])])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("go install")])]),s._v(" "),a("td",[s._v("如果设置了"),a("code",[s._v("GOBIN")]),s._v("，执行后会在"),a("code",[s._v("$GOPATH/bin")]),s._v("目录生成"),a("code",[s._v(".exe")]),s._v("可执行文件")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("go run")])]),s._v(" "),a("td",[s._v("编译后直接执行")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("go test")])]),s._v(" "),a("td",[s._v("详细见上一篇文档")])]),s._v(" "),a("tr",[a("td",[s._v("...")]),s._v(" "),a("td",[s._v("...")])])])]),s._v(" "),a("h2",{attrs:{id:"go-编码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-编码规范"}},[s._v("#")]),s._v(" go 编码规范")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://golang.iswbm.com/en/latest/c03/c03_04.html#",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[a("p",[s._v("文件命名")]),s._v(" "),a("p",[s._v("建议统一小写，不同单词之间用“_”隔开，测试文件以"),a("code",[s._v("_test.go")]),s._v("结尾")])]),s._v(" "),a("li",[a("p",[s._v("常量命名")]),s._v(" "),a("p",[s._v("建议大写下划线分割，可以于变量区分开")])]),s._v(" "),a("li",[a("p",[s._v("变量命名")]),s._v(" "),a("p",[s._v("建议驼峰")])]),s._v(" "),a("li",[a("p",[s._v("函数命名")]),s._v(" "),a("p",[s._v("建议驼峰，"),a("code",[s._v("注意")]),s._v("：go根据函数手写字母大小写区分外包能不能访问，需要则大写，不需要小写")])]),s._v(" "),a("li",[a("p",[s._v("接口命名")])]),s._v(" "),a("li",[a("p",[s._v("注释")])]),s._v(" "),a("li",[a("p",[s._v("包导入")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);