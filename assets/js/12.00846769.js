(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{515:function(t,a,e){t.exports=e.p+"assets/img/km01.f11d7c50.png"},516:function(t,a,e){t.exports=e.p+"assets/img/km02.49e86e12.png"},517:function(t,a,e){t.exports=e.p+"assets/img/km03.8819ffdf.png"},564:function(t,a,e){"use strict";e.r(a);var s=e(7),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("KafkaManager简单使用")])]),t._v(" "),s("h2",{attrs:{id:"安装启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装启动"}},[t._v("#")]),t._v(" 安装启动")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/yahoo/CMAK/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("修改默认配置，路径是"),s("code",[t._v("安装路径/conf/application.conf")]),t._v("，修改一下内容：")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("kafka-manager.zkhosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"127.0.0.1:2181"     # zookeeper地址（输错了也能启动，暂时不知道为啥）')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("cmak.zkhosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('"127.0.0.1:2181"              # zookeeper集群地址')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("启动zookeeper、kafka")])]),t._v(" "),s("li",[s("p",[t._v("启动命令，指定配置文件，指定java环境，用的jdk8，启动报错，百度说是需要jdk11。默认9000端口，可以在启动的时候修改")]),t._v(" "),s("blockquote",[s("p",[t._v("nohup bin/cmak -Dconfig.file=conf/application.conf -java-home /usr/lib/jvm/java-11-openjdk-amd64 &")]),t._v(" "),s("p",[t._v("可以追加  -Dhttp.port=9000，修改为其他端口，不添加默认为9000")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/u011089412/article/details/87895652",target:"_blank",rel:"noopener noreferrer"}},[t._v("面板指令详细参考"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"添加节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[t._v("#")]),t._v(" 添加节点")]),t._v(" "),s("ol",[s("li",[t._v("添加节点")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(515),alt:"image-20200909161130142"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("成功显示")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(516),alt:"image-20200909161532684"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("详细面板")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(517),alt:"image-20200909161634274"}})]),t._v(" "),s("h2",{attrs:{id:"添加节点踩坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加节点踩坑"}},[t._v("#")]),t._v(" 添加节点踩坑")]),t._v(" "),s("ol",[s("li",[t._v("添加节点报错：")])]),t._v(" "),s("blockquote",[s("p",[t._v("Yikes! KeeperErrorCode = Unimplemented for /kafka-manager/mutex Try again.")])]),t._v(" "),s("p",[t._v("原因是zookpeer版本太低，升级版本即可，详细看zookeeper章节")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("启动报错")])]),t._v(" "),s("blockquote",[s("p",[t._v("java.io.IOException: No snapshot found, but there are log entries. Something i")])]),t._v(" "),s("p",[t._v("这个错是在启动zk是恢复数据报错的，因为之前的data全是我3.4.8版本的数据，现在启动3.5.5恢复这个数据就报错了")]),t._v(" "),s("p",[t._v("删除 zookeeper 配置里面保存data和log文件下的数据，")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("节点已经存在")])]),t._v(" "),s("blockquote",[s("p",[t._v("Yikes! requirement failed: Cluster already exists")])]),t._v(" "),s("p",[t._v("之前创建都没有成功，不知道为什么报错，但是换了名字，就可以，同时可以看到之前节点名称")]),t._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("kafka开启JMX后，原有指令查看、创建topic、生产者、消费者都会报错，感觉后续操作都转移到"),s("code",[t._v("kafka manager")]),t._v("web ui 界面来处理了")]),t._v(" "),s("blockquote",[s("p",[t._v("Error: Exception thrown by the agent : java.rmi.server.ExportException: Port already in use: 9988; nested exception is:")])])])}),[],!1,null,null,null);a.default=r.exports}}]);