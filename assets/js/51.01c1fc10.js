(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{611:function(e,a,t){"use strict";t.r(a);var s=t(3),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"})]),e._v(" "),a("h2",{attrs:{id:"安装启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装启动"}},[e._v("#")]),e._v(" 安装启动")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://mirror.bit.edu.cn/apache/zookeeper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载安装，选取带bin.tar.gz"),a("OutboundLink")],1),e._v("，否则启动报错找不到jar包之类的")])]),e._v(" "),a("li",[a("p",[e._v("修改环境变量")]),e._v(" "),a("blockquote",[a("p",[e._v("export ZOOKEEPER=/opt/app/lab/apache-zookeeper-3.5.8")]),e._v(" "),a("p",[e._v("export PATH=${ZOOKEEPER}/bin:$PATH")])])]),e._v(" "),a("li",[a("p",[e._v("修改默认配置，路径conf，复制一份模板用于修改，修改配置")]),e._v(" "),a("blockquote",[a("p",[e._v("cp zoo_sample.cfg zoo.cfg")])]),e._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# example sakes.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dataDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("/tmp/zookeeper")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 新添加的，路径需要手动创建")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("dataLogDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("/tmp/zookeeper/log")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the port at which the clients will connect")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("clientPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("2181")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("启动，"),a("code",[e._v("start-foreground")]),e._v("启动可以看到报错")])]),e._v(" "),a("li",[a("blockquote",[a("p",[e._v("Usage: ./bin/zkServer.sh {start|start-foreground|stop|restart|status|upgrade|print-cmd}")])])])]),e._v(" "),a("blockquote"),e._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),a("h4",{attrs:{id:"_1-升级zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-升级zookeeper"}},[e._v("#")]),e._v(" 1. 升级zookeeper")]),e._v(" "),a("p",[e._v("最开始是用的"),a("code",[e._v("kafka")]),e._v("自带的"),a("code",[e._v("zookeeper")]),e._v("配置文件方式启动的，使用"),a("code",[e._v("kafka manager")]),e._v("的时候报错，百度原因是"),a("code",[e._v("zookeeper")]),e._v("版本太低了")]),e._v(" "),a("p",[e._v("查看当前"),a("code",[e._v("zookeeper")]),e._v("版本，默认端口是2181，去官网下载新版本的"),a("code",[e._v("zookeeper")]),e._v("安装包安装即可")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("stat")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("nc")]),e._v(" localhost "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2181")]),e._v("\nZookeeper version: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.4")]),e._v(".12-e5259e437540f349646870ea94dc2658c4e44b3b, built on 03/27/2018 03:55 GMT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-日志报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-日志报错"}},[e._v("#")]),e._v(" 2. 日志报错")]),e._v(" "),a("blockquote",[a("p",[e._v("Unable to access datadir, exiting abnormally")]),e._v(" "),a("p",[e._v("Snapshot directory has log files. Check if dataLogDir and dataDir configuration is correct")])]),e._v(" "),a("p",[e._v("在执行清除文件的时候，Zookeeper发现当前节点上缺少"),a("code",[e._v("snap directory")]),e._v("(临时目录)，即缺少"),a("code",[e._v("/data/zookeeper/data/version-2")]),e._v("，并且在Zookeeper尝试自动创建此目录时也失败了 ( "),a("code",[e._v("zookeeper.datadir.autocreate")]),e._v(" 是"),a("code",[e._v("flase")]),e._v(") ，最终导致了"),a("code",[e._v("exiting abnormally")]),e._v("(异常退出）")]),e._v(" "),a("p",[e._v("解决：删除设置的两个目录下的"),a("code",[e._v("version-2")]),e._v("即可，")])])}),[],!1,null,null,null);a.default=r.exports}}]);