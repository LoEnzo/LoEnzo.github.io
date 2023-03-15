(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{634:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("Harbor是由VMWare在Docker Registry的基础之上进行了二次封装，加进去了很多额外程序，而且提供了一个非常漂亮的web界面。用于存储和分发Docker镜像的企业级Registry服务器，虽然Docker官方也提供了公共的镜像仓库，但是从安全和效率等方面考虑，部署企业内部的私有环境Registry是非常必要的，Harbor和docker中央仓库的关系，就类似于nexus和Maven中央仓库的关系，Harbor除了存储和分发镜像外还具有用户管理**，"),t("strong",[s._v("项目管理")]),s._v("，"),t("strong",[s._v("配置管理和日志查询")]),s._v("，**高可用部署等主要功能。")])]),s._v(" "),t("h1",{attrs:{id:"搭建harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建harbor"}},[s._v("#")]),s._v(" 搭建Harbor")]),s._v(" "),t("h3",{attrs:{id:"开源仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源仓库"}},[s._v("#")]),s._v(" 开源仓库")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/goharbor/harbor/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Harbor github 开源项目"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("ul",[t("li",[s._v("可以直接下载release下的压缩包，解压到安装目录即可")]),s._v(" "),t("li",[s._v("修改默认"),t("code",[s._v("harbor.yml")]),s._v("配置")]),s._v(" "),t("li",[s._v("执行"),t("code",[s._v("./prepare")]),s._v("校验")]),s._v(" "),t("li",[s._v("执行harbor安装脚本，会自动下载harbor与harbor相关docker镜像，配置，启动harbor容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行安装指令,最后看到successfully即成功了")]),s._v("\n./install \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装完成镜像")]),s._v("\ngoharbor/harbor-registryctl:v2.5.1      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/harbor/start.…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                registryctl\ngoharbor/nginx-photon:v2.5.1            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8099-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp       nginx\ngoharbor/harbor-jobservice:v2.5.1       "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/harbor/entrypoint.…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                harbor-jobservice\ngoharbor/harbor-core:v2.5.1             "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/harbor/entrypoint.…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                harbor-core\ngoharbor/harbor-db:v2.5.1               "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/docker-entrypoint.…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                harbor-db\ngoharbor/harbor-portal:v2.5.1           "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx -g \'daemon of…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                harbor-portal\ngoharbor/registry-photon:v2.5.1         "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/harbor/entryp…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                registry\ngoharbor/harbor-log:v2.5.1              "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh -c /usr/loc…"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" days ago     Up 10days"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("healthy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1514-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10514")]),s._v("/tcp         harbor-log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("默认用户名密码")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("admin Harbor12345\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"问题处理历程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题处理历程"}},[s._v("#")]),s._v(" 问题处理历程")]),s._v(" "),t("p",[s._v("以下问题基于"),t("a",{attrs:{href:"https://github.com/goharbor/harbor/releases/tag/v2.5.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("2.5.1"),t("OutboundLink")],1),s._v("版本，内网环境，无法连接外网，仅供参考")]),s._v(" "),t("h4",{attrs:{id:"install无法安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install无法安装"}},[s._v("#")]),s._v(" "),t("code",[s._v("./install")]),s._v("无法安装")]),s._v(" "),t("p",[s._v("原因：报错内容忘记了， 原因是没有 "),t("code",[s._v("harbor.yml")]),s._v("，默认根目录提供了 "),t("code",[s._v("harbor.yml.tmpl")]),s._v("模板默认文件")]),s._v(" "),t("p",[s._v("解决：复制一份配置文件，重命名为"),t("code",[s._v("harbor.yml")]),s._v("即可")]),s._v(" "),t("h4",{attrs:{id:"启动包代码形式的错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动包代码形式的错误"}},[s._v("#")]),s._v(" 启动包代码形式的错误")]),s._v(" "),t("p",[s._v("报错：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("prepare base "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" is "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" to /root/harbor\nTraceback "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nFile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nmain"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nFile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python3.6/site-packages/click/core.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("764")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" __call__\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nexpected "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("block end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(", but found "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<block mapping start>'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/input/harbor.yml"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("原因：一般是配置文件格式错误，尤其是空格，或者顶格未对齐等")]),s._v(" "),t("p",[s._v("解决：根据最后一行定位配置文件报错位置，解决即可")]),s._v(" "),t("h4",{attrs:{id:"部分容器无法启动-例如-nginx-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分容器无法启动-例如-nginx-redis"}},[s._v("#")]),s._v(" 部分容器无法启动，例如 nginx，redis")]),s._v(" "),t("p",[s._v("原因："),t("code",[s._v("./install")]),s._v("安装 Harbor，会启动如下8个容器，我的报错都是应为本地单独启动了一个 nginx、redis 容器，导致harbor无法创建同样的name的容器，")]),s._v(" "),t("p",[s._v("nginx：修改自己nginx的name为其他即可")]),s._v(" "),t("p",[s._v("redis：harbor 采用外置redis，也就是自己的redis作为缓存，不采用内置默认的")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" ⠿ Network harbor_harbor        Created             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".0s\n ⠿ Container harbor-log         Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".5s\n ⠿ Container registryctl        Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".1s\n ⠿ Container harbor-portal      Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".1s\n ⠿ Container registry           Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".1s\n ⠿ Container harbor-db          Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".0s\n ⠿ Container harbor-core        Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".3s\n ⠿ Container nginx              Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7s\n ⠿ Container harbor-jobservice  Started             "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".6s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"启动报错1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动报错1"}},[s._v("#")]),s._v(" 启动报错1")]),s._v(" "),t("p",[s._v("报错："),t("code",[s._v("ERROR:root:Error: The protocol is https but attribute ssl_cert is not set")])]),s._v(" "),t("p",[s._v("解决：修改"),t("code",[s._v("harbor.yml")]),s._v("，修改hostname 为当前服务器ip")]),s._v(" "),t("h4",{attrs:{id:"启动报错2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动报错2"}},[s._v("#")]),s._v(" 启动报错2")]),s._v(" "),t("p",[s._v("报错："),t("code",[s._v("ERROR:root:Error: The protocol is https but attribute ssl_cert is not set")])]),s._v(" "),t("p",[s._v("解决：注释掉 https 相关内容，为配置证书这些，所有以http访问")]),s._v(" "),t("h4",{attrs:{id:"无法推动到-harbor-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无法推动到-harbor-仓库"}},[s._v("#")]),s._v(" 无法推动到 harbor 仓库")]),s._v(" "),t("p",[s._v("原因：本地 docker daemon.json 未配置信任该仓库")]),s._v(" "),t("p",[s._v("解决：修改 daemon.json ，刷新配置并重启")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/docker/daemon.json\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harbor.xxx.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx配置了域名的，就写域名即可，未配置，直接ip:端口也可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置\t\t\t\t   ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"修改docker配置-重启docker后-无法登陆-harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改docker配置-重启docker后-无法登陆-harbor"}},[s._v("#")]),s._v(" 修改docker配置，重启docker后，无法登陆 harbor")]),s._v(" "),t("p",[s._v('报错：web端登良，输入用户名、密码，报错提示核心服务不可用，查看容器，发现部分容器状态是 "healthy starting"，查看容器日志：')]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Error response from daemon: configured logging driver does not support reading\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("原因："),t("code",[s._v("daemon.json")]),s._v(" 配置错误，其次，docker 重启时，自己的 redis 容器未自动重启，导致 harbor 未连接上，重启即可")]),s._v(" "),t("h4",{attrs:{id:"重启-harbor-报错-部分容器报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启-harbor-报错-部分容器报错"}},[s._v("#")]),s._v(" 重启 harbor 报错，部分容器报错")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以手动挨个启动容器，也可以重新 `./install`，貌似等于全新安装，或者使用根目录下 `docker-compose.yaml` 启动，不过需要修改里面默认配置，保证和 harbor.yml 中 自己修改后的配置一样即可")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到harbor 安装的根目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"推送镜像到harbor-http-413-报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像到harbor-http-413-报错"}},[s._v("#")]),s._v(" 推送镜像到harbor，HTTP 413 报错")]),s._v(" "),t("p",[s._v("报错详情：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("error parsing HTTP "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("413")]),s._v(" response body: invalid character "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<'")]),s._v(" looking "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" beginning of value: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<html>'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("<head><title>413 Request Entity Too Large</title></head>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("<body bgcolor="),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("white"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(">"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("<center><h1>413 Request Entity Too Large</h1></center>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("<hr><center>nginx/1.10.3</center>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("</body>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("</html>"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("解决：nginx代理，修改默认限制上传附件，修改 nginx.conf")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tclient_max_body_size     50m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件大小限制，默认1m，限制请求体的大小，若超过所设定的大小，返回413错误")]),s._v("\n\tclient_header_timeout    1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取请求头的超时时间，若超过所设定的大小，返回408错误")]),s._v("\n\tclient_body_timeout      1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取请求实体的超时时间，若超过所设定的大小，返回413错误")]),s._v("\n\tproxy_connect_timeout    60s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http请求无法立即被容器(tomcat, netty等)处理，被放在nginx的待处理池中等待被处理。此参数为等待的最长时间，默认为60秒，官方推荐最长不要超过75秒")]),s._v("\n\tproxy_read_timeout       1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http请求被容器(tomcat, netty等)处理后，nginx会等待处理结果，也就是容器返回的response。此参数即为服务器响应时间，默认60秒")]),s._v("\n\tproxy_send_timeout       1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http请求被服务器处理完后，把数据传返回给Nginx的用时，默认60秒")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"docker-推送到harbor报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-推送到harbor报错"}},[s._v("#")]),s._v(" "),t("strong",[s._v("docker 推送到harbor报错")])]),s._v(" "),t("p",[s._v("原因：报错内容忘记了， 原因是因为 harbor默认提供一个名为"),t("code",[s._v("library")]),s._v("的项目，如果你推送的镜像不是该命名的，需要修改，或者新建一个对应的名称的项目即可")]),s._v(" "),t("p",[s._v("解决：修改需要推送的镜像名，后者新建项目")]),s._v(" "),t("h4",{attrs:{id:"contained-拉取-harbor-报错-默认采用的-https-导致的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contained-拉取-harbor-报错-默认采用的-https-导致的"}},[s._v("#")]),s._v(" "),t("strong",[s._v("contained 拉取 harbor 报错，默认采用的 https 导致的")])]),s._v(" "),t("p",[s._v("报错：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("crictl pull harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT\nFATA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("0000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" pulling image: rpc error: code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Unknown desc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" failed to pull and unpack image "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" failed to resolve reference "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harbor.xx.com/mall/mall-admin:1.0-SNAPSHOT"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" failed to "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" request: Head "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://harbor.killer.com/v2/mall/mall-admin/manifests/1.0-SNAPSHOT"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" dial tcp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172")]),s._v(".xx.xx.105:443: connect: connection refused \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("解决：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 contained 配置，使其支持http，注意，配置文件有问题，重启会报错的，注意查看")]),s._v("\nversion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/containerd"')]),s._v("\nstate "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/run/containerd"')]),s._v("\noom_score "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("grpc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  max_recv_message_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16777216")]),s._v("\n  max_send_message_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16777216")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("debug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  level "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("metrics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  address "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  grpc_histogram "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    sandbox_image "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k8s.gcr.io/pause:3.6"')]),s._v("\n    max_container_log_line_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".containerd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      default_runtime_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"runc"')]),s._v("\n      snapshotter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overlayfs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".containerd.runtimes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".containerd.runtimes.runc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          runtime_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.runc.v2"')]),s._v("\n          runtime_engine "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n          runtime_root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".containerd.runtimes.runc.options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            systemdCgroup "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下为新增，https://registry-1.docker.io为原始的")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.mirrors."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.io"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          endpoint "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://harbor.xx.com"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry-1.docker.io"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.configs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("plugins."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io.containerd.grpc.v1.cri"')]),s._v(".registry.configs."),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"harbor.xx.com"')]),s._v(".tls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          insecure_skip_verify "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个节点都修改 hosts，对应harbor的域名，仅仅自己调用可以")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172")]),s._v(".xx.xx.105 harbor.xx.com\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启contained服务")]),s._v("\nsystemctl restart containerd\nsystemctl status containerd.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果配置文件有问题，重启containerd可能报错如下")]),s._v("\nJob "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" containerd.service failed because the control process exited with error code. See "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"systemctl status containerd.service"')]),s._v(" and "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"journalctl -xe"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("ul",[t("li",[s._v("K8S主动拉取私有仓库地址Secret（经过上面配置已经可以拉取，这个未尝试）")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl create secret docker-registry "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("secret名字"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --docker-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("仓库地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --docker-username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("你的账号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --docker-password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("你的密码"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --docker-email "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("你的邮箱"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("命名空间"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建yaml指定即可")]),s._v("\nspec:\n  replicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      imagePullSecrets:\n        - name: uread-secret  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# secret 名字")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);