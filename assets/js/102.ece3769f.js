(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{659:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("Vuepress搭建的个人静态博客，使用GithubAction实现本地提交推送，github监听到提交后根据"),a("code",[s._v("ci.yml")]),s._v("实现自动部署到gh-pages")])]),s._v(" "),a("h3",{attrs:{id:"_1-vuepress-搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuepress-搭建"}},[s._v("#")]),s._v(" 1. Vuepress 搭建")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("，参考官方文档自己搭建")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),a("OutboundLink")],1),s._v(" 在这个主题基础上初始化"),a("code",[s._v("blog")]),s._v("改造；")])]),s._v(" "),a("h3",{attrs:{id:"_2-项目同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目同步"}},[s._v("#")]),s._v(" 2. 项目同步")]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("github")]),s._v("上创建对应的项目")]),s._v(" "),a("li",[s._v("将自己搭建的"),a("code",[s._v("vuepress")]),s._v("或者基于上面主题改造的项目推送到自己的"),a("code",[s._v("github")]),s._v("项目")])]),s._v(" "),a("h3",{attrs:{id:"_3-设置公钥私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置公钥私钥"}},[s._v("#")]),s._v(" 3. 设置公钥私钥")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("本地项目位置打开"),a("code",[s._v("Git Bash")]),s._v("，邮箱与"),a("code",[s._v("github")]),s._v("注册邮箱保持一致")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" youremail@example.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("本地生成文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认路径")]),s._v("\nC:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("yourComputerName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".ssh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥")]),s._v("\nid_rsa\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥")]),s._v("\nid_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("在"),a("code",[s._v("github")]),s._v("当前项目的位置")]),s._v(" "),a("p",[s._v("Settings --\x3e Deploy key --\x3e Add Deploy key   添加公钥")]),s._v(" "),a("p",[s._v("Settings --\x3e Secrets 添加私钥")])])]),s._v(" "),a("h3",{attrs:{id:"_4-githubactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-githubactions"}},[s._v("#")]),s._v(" 4 githubActions")]),s._v(" "),a("p",[s._v("​\t在当前项目，点击Actions创建 "),a("code",[s._v(".yml")]),s._v(" 文件，可选用已经有的模板进行修改")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blog deploy\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改为分支")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" myblog\t\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  - master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn install\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn build\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm 使用下面这种")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - run: npm ci")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - run: npm install vuepress")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - run: npm run build")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v2.5.0\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 之前项目的私钥，对应的要填写正确")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACTIONS_DEPLOY_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("secrets.ACCESS_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PUBLISH_BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("PUBLISH_DIR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" public\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PUBLISH_DIR: docs/.vuepress/dist")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h3",{attrs:{id:"_5-本地deploy脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-本地deploy脚本"}},[s._v("#")]),s._v(" 5. 本地deploy脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#npm run build")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd docs/.vuepress/dist")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" public\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:LoEnzo/myblog.git master:gh-pages\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f https://gitee.com/myMagicRain/myblog.git master:gh-pages")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_6-让github-page绑定自定义域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-让github-page绑定自定义域名"}},[s._v("#")]),s._v(" 6. 让github page绑定自定义域名")]),s._v(" "),a("p",[a("strong",[s._v("自定义域名不生效")])]),s._v(" "),a("p",[s._v("个人遇到问题，直接在设置中customs添加自定义域名，域名供应商处也添加了指向cname的，通自定义域名也能访问，但是加载图片，css样式等找不到资源")]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("p",[s._v("将代码放到分支，githubAction中，通过npm，或yarn构建出来的静态网页放到mater，这样就通过自己定义域名访问了。")]),s._v(" "),a("p",[a("strong",[s._v("自定义域名，第二次推送就会失效，需要再手动添加一次")])]),s._v(" "),a("p",[s._v("解决：")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v(".vuepress\\public")]),s._v("文件夹目录下，创建一个自己"),a("code",[s._v("CNAME")]),s._v("文件，不带后缀，内容就是你自己购买的自定义域名，注意不带www 或者http")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("hjwu.ml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);