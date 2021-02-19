(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{511:function(t,r,a){t.exports=a.p+"assets/img/kafka3.323ea144.png"},512:function(t,r,a){t.exports=a.p+"assets/img/kafka2.a7931f38.png"},513:function(t,r,a){t.exports=a.p+"assets/img/kafka1.01d84736.png"},562:function(t,r,a){"use strict";a.r(r);var e=a(7),o=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("Kafka是是一个分布式、支持分区的（partition）、多副本的（replica），基于zookeeper协调的分布式消息系统，它的最大的特性就是可以实时的处理大量数据以满足各种需求场景："),e("strong",[t._v("实时监控、日志收集，持久化存储、消息系统：高吞吐、用户行为分析和追踪")])])]),t._v(" "),e("h2",{attrs:{id:"安装启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装启动"}},[t._v("#")]),t._v(" 安装启动")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://kafka.apache.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("，"),e("a",{attrs:{href:"https://kafka.apachecn.org/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("压缩包安装，添加"),e("code",[t._v("安装目录/bin")]),t._v("进环境变量，根据配置文件启动"),e("code",[t._v("zookeeper")]),t._v("、"),e("code",[t._v("kafka")])]),t._v(" "),e("li",[t._v("启动"),e("code",[t._v("zookeeper")])])]),t._v(" "),e("blockquote",[e("p",[t._v("nohup bin/zookeeper-server-start.sh config/zk.properties &")])]),t._v(" "),e("ul",[e("li",[t._v("启动"),e("code",[t._v("kafka")])])]),t._v(" "),e("blockquote",[e("p",[t._v("nohup bin/kafka-server-start.sh config/kafka1.properties &")])]),t._v(" "),e("h2",{attrs:{id:"kafka核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka核心概念"}},[t._v("#")]),t._v(" Kafka核心概念")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_45710900/article/details/102852318?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159895248619724839808237%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=159895248619724839808237&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v1~rank_blog_v1-1-102852318.pc_v1_rank_blog_v1&utm_term=kafka&spm=1018.2118.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:a(511),alt:"这里写图片描述"}})]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Topic（主题）")])]),t._v(" "),e("p",[t._v("每一条发送到kafka集群的消息都可以有一个类别，这个类别叫做topic，不同的消息会进行分开存储，如果topic很大，可以分布到多个broker上；也可以理解为topic是一个队列，每一条消息都必须指定它的topic，可以说我们需要明确把消息放入哪一个队列")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Producer（生产者）")])]),t._v(" "),e("p",[t._v("向broker发送消息，通过zk定位到所有的broker(只需要向一个broker中生产数据，zk自动定位到其他brokder)，方式有"),e("strong",[t._v("同步、异步")]),t._v("，数据源可以有多种类型：flume、service、web app等")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Consumer（消费者）")])]),t._v(" "),e("p",[t._v("消费者：负责从broker拉取数据，消费模式有"),e("strong",[t._v("队列消费模式")]),t._v("、"),e("strong",[t._v("发布-订阅消费模式")])]),t._v(" "),e("p",[t._v("消费者组（Consumer Group）：同一Topic的一条消息只能被同一个Consumer Group内的一个Consumer消费，但多个Consumer Group可同时消费这一消息。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Broker（代理）")])]),t._v(" "),e("p",[t._v("一台kafka服务器就可以称之为broker.一个集群由多个broker组成，一个broker可以有多个topic")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Partition（分区）")])]),t._v(" "),e("p",[t._v("为了使得kafka吞吐量线性提高，物理上把topic分成一个或者多个分区，每一个分区是一个有序的队列。且每一个分区在物理上都对应着一个文件夹，该文件夹下存储这个分区所有消息和索引文件。")]),t._v(" "),e("p",[t._v("分区的个数设置："),e("strong",[t._v("建议设置的比broker的个数多")]),t._v("，保证所有的分区被broker均匀的分配，实现负载均衡")]),t._v(" "),e("p",[t._v("分区的表示: topic名字-分区的id")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Replicas（副本）")])]),t._v(" "),e("p",[t._v("建主题时可以指定副本因子，副本的个数，"),e("strong",[t._v("建议设置成 3")]),t._v("，不建议设置的太大，容易造成数据的过分冗余")]),t._v(" "),e("p",[t._v("提供数据的高可用，安全性，提高容错，一个节点-----宕机了-----broker无法使用----partition无法被访问----message无法读写----无法提供数据服务，这样所有的Partition数据都不可被消费，所以需要对分区备份。其中一个宕机后其它Replica必须要能继续服务并且即不能造成数据重复也不能造成数据丢失。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("offset（偏移量）")])]),t._v(" "),e("p",[t._v("在每个partition分区下的消息都是顺序保存的，kakfa使用一个唯一的标识来记录它们在该分区下的位置，这个位置标识被称为offset，每条消息都追加到partition中，是顺序读写磁盘，因此效率很高")])])]),t._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试：")]),t._v(" "),e("h3",{attrs:{id:"_1-创建一个topic的生产者和消费者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个topic的生产者和消费者"}},[t._v("#")]),t._v(" 1. 创建一个topic的生产者和消费者")]),t._v(" "),e("ul",[e("li",[t._v("启动zookeeper")])]),t._v(" "),e("blockquote",[e("p",[t._v("nohup bin/zookeeper-server-start.sh config/zk.properties &")])]),t._v(" "),e("ul",[e("li",[t._v("启动kafka")])]),t._v(" "),e("blockquote",[e("p",[t._v("nohup bin/kafka-server-start.sh config/kafka1.properties &")])]),t._v(" "),e("ul",[e("li",[t._v("创建一个topic为"),e("code",[t._v("kafkatest")])])]),t._v(" "),e("blockquote",[e("p",[t._v("bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic kafkatest")])]),t._v(" "),e("ul",[e("li",[t._v("创建一个名为"),e("code",[t._v("kafkatest")]),t._v("的消费者")])]),t._v(" "),e("blockquote",[e("p",[t._v("bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic kafkatest --from-beginning")])]),t._v(" "),e("ul",[e("li",[t._v("创建一个名为"),e("code",[t._v("kafkatest")]),t._v("的生产者（新开一个终端）")])]),t._v(" "),e("blockquote",[e("p",[t._v("bin/kafka-console-producer.sh --broker-list localhost:9092 --topic kafkatest")])]),t._v(" "),e("p",[t._v("模拟生产者产生数据：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(512),alt:"image-20200904144343482"}})]),t._v(" "),e("p",[t._v("模拟消费者处理数据：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(513),alt:"image-20200904144634968"}})]),t._v(" "),e("h3",{attrs:{id:"_2-flume-kafka-spark-inflxdb-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-flume-kafka-spark-inflxdb-grafana"}},[t._v("#")]),t._v(" 2. flume+kafka+spark+inflxdb+grafana")]),t._v(" "),e("blockquote",[e("p",[t._v("启动zookeeper")]),t._v(" "),e("p",[t._v("启动kafka")]),t._v(" "),e("p",[t._v("启动flume")]),t._v(" "),e("p",[t._v("启动sparkt")]),t._v(" "),e("p",[t._v("提交spark作业")]),t._v(" "),e("p",[t._v("grafana配置inflxdb")]),t._v(" "),e("p",[t._v("监控面板从influxdb中获取数据实时显示")])])])}),[],!1,null,null,null);r.default=o.exports}}]);