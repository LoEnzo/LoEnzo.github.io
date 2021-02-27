(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{578:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("mysql安装以及使用")])]),s._v(" "),a("h2",{attrs:{id:"linux安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装mysql"}},[s._v("#")]),s._v(" linux安装mysql")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载安装，使用命令可以直接获取对应你系统的mysql版本")]),s._v(" "),a("blockquote",[a("p",[s._v("sudo apt-get install mysql-server")])])]),s._v(" "),a("li",[a("p",[s._v("初始化设置")]),s._v(" "),a("blockquote",[a("p",[s._v("sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("mysqld.cnf基本设置")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[s._v("[mysqld]\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("user")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("pid-file")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/run/mysqld/mysqld.pid")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("socket")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/run/mysqld/mysqld.sock")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("port")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("datadir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/lib/mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("character_set_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("utf8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("bind-address")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("127.0.0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("key_buffer_size")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("16M")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("myisam-recover-options")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("BACKUP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("log_error")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/var/log/mysql/error.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("max_binlog_size")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100M")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])]),s._v(" "),a("li",[a("p",[s._v("启动服务")]),s._v(" "),a("blockquote",[a("p",[s._v("/etc/init.d/mysql start")])])])]),s._v(" "),a("h2",{attrs:{id:"基本设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本设置"}},[s._v("#")]),s._v(" 基本设置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("修改为密码登陆")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql -u root\n\nuse mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SELECT user, host, plugin FROM user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改root用户认证方式")]),s._v("\nupdate user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql_native_password'")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("root安全设置")]),s._v(" "),a("blockquote",[a("p",[s._v("sudo mysql_secure_installation")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("安全设置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("➜  ~ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation \n\nSecuring the MySQL server deployment.\n\nConnecting to MySQL using a blank password.\nThe "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'validate_password'")]),s._v(" plugin is installed on the server.\nThe subsequent steps will run with the existing configuration\nof the plugin.\nPlease "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root here.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码，但是这里可以看到，由于启用了validate_password，所以如果密码复杂度不够，会如下所示的提示密码设置不成功")]),s._v("\nNew password: \n\nRe-enter new password: \n\nEstimated strength of the password: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" \nDo you wish to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" with the password provided?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". Failed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" Error: Your password does not satisfy the current policy requirements\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码设置成Root@123这种有大小写、特殊字符、数字的内容，就通过了")]),s._v("\nNew password: \n\nRe-enter new password: \n\nEstimated strength of the password: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" \nDo you wish to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" with the password provided?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nBy default, a MySQL installation has an anonymous user,\nallowing anyone to log into MySQL without having to have\na user account created "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" them. This is intended only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v("\ntesting, and to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" the installation go a bit smoother.\nYou should remove them before moving into a production\nenvironment.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否删除匿名用户，这里删除即可，没太大用处")]),s._v("\nRemove anonymous users? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nSuccess.\n\n\nNormally, root should only be allowed to connect from\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" This ensures that someone cannot guess at\nthe root password from the network.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#　是否禁用root用户远程登录？这里不禁用，当然如果你希望禁用，并且创建别的用户远程登录，这里可以选择ｙ")]),s._v("\nDisallow root login remotely? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" n\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". skipping.\nBy default, MySQL comes with a database named "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" that\nanyone can access. This is also intended only "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" testing,\nand should be removed before moving into a production\nenvironment.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否删除test数据库，这里删除即可，不然留着也没什么用")]),s._v("\nRemove "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database and access to it? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\n - Dropping "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccess.\n\n - Removing privileges on "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccess.\n\nReloading the privilege tables will ensure that all changes\nmade so far will take effect immediately.\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否刷新权限？，这里选择y，然后会生效")]),s._v("\nReload privilege tables now? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Press y"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("Y "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Yes, any other key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" No"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" y\nSuccess.\n\nAll done"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br")])])])])]),s._v(" "),a("p",[s._v("​\t\t:::")]),s._v(" "),a("h2",{attrs:{id:"qa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[s._v("#")]),s._v(" QA：")]),s._v(" "),a("p",[a("strong",[s._v("Q")]),s._v(": "),a("strong",[s._v("Window MySql服务突然启动报错")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止")])]),a("p",[a("strong",[s._v("A")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("备份安装目录下"),a("code",[s._v("data")]),s._v("文件夹，清空里面数据；")])]),s._v(" "),a("li",[a("p",[s._v("执行初始化命令"),a("code",[s._v("mysqld --initialize-insecure --user=mysql")])])]),s._v(" "),a("li",[a("p",[s._v("安装服务"),a("code",[s._v("mysqld --install MySQL")]),s._v("，启动服务"),a("code",[s._v("net start mysql")])])]),s._v(" "),a("li",[a("p",[s._v("登录"),a("code",[s._v("MySql")]),s._v("，输入指令"),a("code",[s._v("mysql -u root -p")]),s._v("，初始化密码在"),a("strong",[s._v("data")]),s._v("目录下"),a("code",[s._v(".err")]),s._v("文件里")])]),s._v(" "),a("li",[a("p",[s._v("登录成功后修改为之前的密码，或者新密码，按顺序推荐，二三未试过")])])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 方案一\nmysql> alter user 'root'@'localhost' identified by 'cy7m0ypu8CpLFperzI45';\n# 方案二\nmysql> set password for 'root'@'localhost'=password('cy7m0ypu8CpLFperzI45');\n# 方案三,需要刷新权限\nmysql> update mysql.user set authentication_string=password('cy7m0ypu8CpLFperzI45') where user='root' and Host = 'localhost';\nmysql> flush privileges;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[s._v("#")]),s._v(" Other")]),s._v(" "),a("p",[a("strong",[s._v("1.  springBoot整合mybatise启动报错")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Failed to obtain JDBC Connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" nested exception is java.sql.SQLException: The server "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone value "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'�й���׼ʱ��'")]),s._v(" is unrecognized or represents "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" than one "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone. You must configure either the server or JDBC driver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'serverTimezone'")]),s._v(" configuration property"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to use a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" specifc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you want to utilize "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" zone support.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("原因：使用 mysql 的 jdbc 驱动最新版（6.0+）时，会遇到数据库和系统时区差异引起的问题。")]),s._v(" "),a("p",[s._v("解决：在 jdbc 连接的 url 后面添加 serverTimezone=CST")]),s._v(" "),a("p",[s._v("注：CST 代表的是中国上海时间（与北京时间，东八区相同）")]),s._v(" "),a("p",[s._v("例：jdbc:mysql://localhost:3306**/your_database_name**?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST")])])}),[],!1,null,null,null);t.default=e.exports}}]);