(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{532:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("influxDB简单安装使用")])]),s._v(" "),n("h2",{attrs:{id:"安装启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装启动"}},[s._v("#")]),s._v(" 安装启动")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("yum，apt安装influxDB，启动服务"),n("code",[s._v("sudo service influxdb start")])])]),s._v(" "),n("li",[n("p",[s._v("压缩包安装，在"),n("code",[s._v("对应安装目录\\usr\\bin\\influxd")]),s._v("启动，也可以将该路径加入环境变量，直接以配置文件方式启动")]),s._v(" "),n("p",[n("code",[s._v("nohup influxd -config /opt/app/lab/influxdb-1.6.2-1/etc/influxdb/influxdb.conf &")])])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/mafeng/p/6848166.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参数参考1"),n("OutboundLink")],1),s._v("，"),n("a",{attrs:{href:"https://www.cnblogs.com/guyeshanrenshiwoshifu/p/9188368.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参数参考2"),n("OutboundLink")],1)])])]),s._v(" "),n("h2",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入influx")]),s._v("\ninflux\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看influxDB状态")]),s._v("\nshow stats\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个数据库")]),s._v("\ncreate database "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db_name"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有数据库")]),s._v("\nshow databases\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除数据库")]),s._v("\ndrop database "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db_name"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用数据库")]),s._v("\nuser db_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看该数据下所有表")]),s._v("\nshow measurements \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建表，不需要单独表，插入语句即可，表就是test")]),s._v("\ninsert test,host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,monitor_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看表的所有列")]),s._v("\nshow series from your_table_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除表")]),s._v("\ndrop measurement measurement_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from database limit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"开启身份验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启身份验证"}},[s._v("#")]),s._v(" 开启身份验证")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建管理员")]),s._v("\ninflux\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_name'")]),s._v(" WITH PASSWORD "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_password'")]),s._v(" WITH ALL PRIVILEGES\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SHOW USERS\nuser    admin\nhjwu    "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("开启身份验证（编辑influxdb配置文件，将165行处配置项的值由false改为true并保存退出）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("162")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v("   enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("164")]),s._v("   bind-address "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('":8086"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("165")]),s._v("   auth-enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("166")]),s._v("   log-enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("167")]),s._v("   write-tracing "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("   pprof-enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),s._v("   https-enabled "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("170")]),s._v("   https-certificate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/ssl/influxdb.pem"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("171")]),s._v("   max-row-limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("使用管理员登陆")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("influx -username your_name -password your_password\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"保存策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保存策略"}},[s._v("#")]),s._v(" 保存策略")]),s._v(" "),n("p",[s._v("注：保存策略即存储在数据库中的数据，多长时间删除一次。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建保存策略")]),s._v("\ncreate retention policy  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"policy_name"')]),s._v(" on test_db duration 2h replication "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" default\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看保存的策略")]),s._v("\nshow retention policies on your_database_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改保存策略")]),s._v("\nALTER  retention policy "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(" on test_db DEFAULT（修改默认）\n或者：ALTER  retention policy "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(" on "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_database_name"')]),s._v(" duration 719h\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除保留策略")]),s._v("\ndrop retention policy policy_name on your_database_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"在浏览器中如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中如何使用"}},[s._v("#")]),s._v(" 在浏览器中如何使用")]),s._v(" "),n("p",[s._v("InfluxDB默认是通过Http请求访问数据库的，也支持UDP协议（默认关闭），所以可以通过浏览器直接查询或新增删除数据。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式：数据库地址 + 端口 + query?db = 数据库名&q = 查询或删除或插入的SQL语句")]),s._v("\nhttp://10.10.1.2:8086/query?db"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("testdb"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("select * from measurement limit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);