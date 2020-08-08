(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{523:function(a,s,t){"use strict";t.r(s);var n=t(4),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[a._v("springboot介绍以及简单使用")])]),a._v(" "),t("h2",{attrs:{id:"一、知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、知识点"}},[a._v("#")]),a._v(" 一、知识点")]),a._v(" "),t("p",[a._v("简介：")]),a._v(" "),t("p",[t("strong",[a._v("SpringBoot")]),a._v(" 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。简单来说，SpringBoot就是整合了很多基础框架的模板配置方式，达到开箱即用的效果。")]),a._v(" "),t("h3",{attrs:{id:"_1-springboot项目下的mvnw与mvnw-cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-springboot项目下的mvnw与mvnw-cmd"}},[a._v("#")]),a._v(" 1. SpringBoot项目下的mvnw与mvnw.cmd")]),a._v(" "),t("p",[a._v("Maven是一个常用的构建工具，但是Maven的版本和插件的配合并不是那么完美，有时候你不得不切换到一个稍微旧一些的版本，以保证所有东西正常工作。")]),a._v(" "),t("p",[a._v("而Gradle提供了一个Wrapper，可以很好解决版本切换的问题，当然更重要的是不需要预安装Gradle。")]),a._v(" "),t("p",[a._v("Maven虽然没有官方的Wrapper，但是有一个第三方的Wrapper可以使用。")]),a._v(" "),t("p",[a._v("安装很简单 "),t("code",[a._v("mvn -N io.takari:maven:wrapper")]),a._v("，安装完成如下")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://ju.outofmemory.cn/imgr?src=http%3A%2F%2Fwww.huangyunkun.com%2Fimages%2F2015%2F10%2Fmaven-wrapper.png",alt:"安装"}})]),a._v(" "),t("p",[a._v("使用的时候直接 "),t("code",[a._v("./mvnw clean install")]),a._v("即可，它会自动下载最新版本来执行。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://ju.outofmemory.cn/imgr?src=http%3A%2F%2Fwww.huangyunkun.com%2Fimages%2F2015%2F10%2Fmaven-wrapper-run.png",alt:"运行"}})]),a._v(" "),t("p",[a._v("如果需要指定版本,重新生成mvnw文件在运行即可")]),a._v(" "),t("ol",[t("li",[a._v("mvn -N io.takari:maven:wrapper -Dmaven=3.1.0")]),a._v(" "),t("li",[a._v("./mvnw clean install")])]),a._v(" "),t("h3",{attrs:{id:"启动报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动报错"}},[a._v("#")]),a._v(" 启动报错")]),a._v(" "),t("div",{staticClass:"language-cmd line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Error running 'App': Command line is too long. Shorten command line for App\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("解决：")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v(".idea\\workspace.xml")]),a._v("，目录下添加改节点，重新启动报错1，需要再重新打包一次")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("component")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("PropertiesComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dynamic.classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("加载mysql驱动显示以下信息")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("Loading "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jdbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Driver")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'. This is deprecated. The new driver class is com.mysql.cj.jdbc.Driver'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" The driver is automatically registered via the "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SPI")]),a._v(" and manual loading "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("of")]),a._v(" the driver "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("is")]),a._v(" generally unnecessary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("解决：")]),a._v(" "),t("p",[a._v("配置文件中驱动升级为"),t("code",[a._v("com.mysql.cj.jdbc.Driver")]),a._v("，完整配置如下：")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jdbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3306/springboot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("useUnicode=true"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" root\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" password\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("driver-class-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" com.mysql.cj.jdbc.Driver\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);