(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{519:function(s,t,a){s.exports=a.p+"assets/img/Git02.3bc9d5f2.png"},520:function(s,t,a){s.exports=a.p+"assets/img/Git01.1b288224.png"},570:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git版本管理工具的常规使用，常用命令汇总，"),n("a",{attrs:{href:"https://www.cnblogs.com/junwu/p/6004663.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("详细汇总"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"git常用指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[s._v("#")]),s._v(" Git常用指令")]),s._v(" "),n("h3",{attrs:{id:"_1-git-工作流程图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-工作流程图"}},[s._v("#")]),s._v(" 1. Git 工作流程图")]),s._v(" "),n("p",[n("img",{attrs:{src:a(519),alt:"Git流程图"}})]),s._v(" "),n("h3",{attrs:{id:"_2-git-常规配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-常规配置"}},[s._v("#")]),s._v(" 2. Git 常规配置")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --version \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 升级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-git-for-windows\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆项目")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前git的配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置提交代码的个人信息，global为全局配置，可选")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you name"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you email"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux 删除，添加git凭证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config credential.helper store\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset credential.helper\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"_3-提交并推送"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交并推送"}},[s._v("#")]),s._v(" 3. 提交并推送")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加文件到暂存区，-A参数代表所有，也可以指定具体文件信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交暂存区到仓库区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Information describing the content of this submission"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远端仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取最新代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_4-分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-分支"}},[s._v("#")]),s._v(" 4. 分支")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有分支，白色为本地分支，红色为远端分支，r参数代表远端分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -branch -a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -r\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch your_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送分支到远端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin your_local_branch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D your_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远端分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete your_remote_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout your_branch_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"_5-tag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-tag"}},[s._v("#")]),s._v(" 5. Tag")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看tag信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag your_tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送tag到远端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin your_local_tag\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远端tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除本地、远端tag，本地执行git tag，将要删除的tag单独复制出来，在IDEA或者sublime中批量修改，在前面添加git tag -d")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除远端tag同理，将修改过的指令统一复制到命令行执行即可，远端的批量删除，复制过去某些tag内容丢失，暂不知道为啥")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再上一个tag上创建分支，适用于临时的简单修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch Branch_name pre_tag_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_6-查看信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看信息"}},[s._v("#")]),s._v(" 6. 查看信息")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前状态，分支，未提交文件信息等")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前分支的历史版本，--stat参数显示commit历史，以及每次commit发生变更的问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --stat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到指定版本，hard后面跟随的参数是每次提交后产生的随机哈希值，可以git log查看\t")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard hash_code\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Branch log后退出，直接按q即可")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_7-同步提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-同步提交"}},[s._v("#")]),s._v(" 7. 同步提交")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 适用整体同步用merge,部分代码同步可以用cherry-pick，先获取到 部分提交内容f的commitHash; ")]),s._v("\n    a - b - c - d   Master\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           e - f - g Feature\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到Master，将f提交部分内容同步到Master，支持多个commitHash一起提交，最后再推送到远端")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashA"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashB"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_8-其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-其他"}},[s._v("#")]),s._v(" 8. 其他")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("// 修改.ignore 是其生效\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题：")]),s._v(" "),n("h4",{attrs:{id:"_1-git-clone-报错-warning-clone-succeeded-but-checkout-failed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-clone-报错-warning-clone-succeeded-but-checkout-failed"}},[s._v("#")]),s._v(' 1. git clone 报错 warning: Clone succeeded, but checkout failed."')]),s._v(" "),n("p",[s._v("解决：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --system core.longpaths "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_2-git-push-github-或者-git-update-更新报错ssl-connect-ssl-error-syscall-in-connection-to-github-com-443"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-push-github-或者-git-update-更新报错ssl-connect-ssl-error-syscall-in-connection-to-github-com-443"}},[s._v("#")]),s._v(" 2. git push github 或者 git update 更新报错"),n("code",[s._v("SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443")])]),s._v(" "),n("p",[s._v("原因：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("因为Git的Http代理的问题，Git支持三种协议：git://、ssh://和http://，本来push的时候应该走ssh隧道的，但是因为设置了http代理，所以就走了http的代理，于是就提交不了了。 \n找到原因了，那就取消http代理吧：\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("解决：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_3-git-pull-报错-ssl-certificate-problem-unable-to-get-local-issuer-certificate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-pull-报错-ssl-certificate-problem-unable-to-get-local-issuer-certificate"}},[s._v("#")]),s._v(" 3. git pull 报错："),n("code",[s._v("SSL certificate problem: unable to get local issuer certificate")])]),s._v(" "),n("p",[s._v("原因：")]),s._v(" "),n("p",[s._v("这个是由于Git默认开启了SSL验证，关闭即可；")]),s._v(" "),n("p",[s._v("解决：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.sslVerify "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"_4-git修改凭证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-git修改凭证"}},[s._v("#")]),s._v(" 4. Git修改凭证")]),s._v(" "),n("p",[s._v("事例：使用"),n("code",[s._v("Tortoigit")]),s._v("提交文件时，因为没有权限，输入的凭证错误，导致提交失败，后续添加权限后，重复提交仍然失败。")]),s._v(" "),n("p",[s._v("原因：没有清除之前错误的Git凭证")]),s._v(" "),n("p",[s._v("解决：到 "),n("code",[s._v("控制面板-用户帐户-凭据管理器")]),s._v("目录下修改凭证的"),n("code",[s._v("用户名")]),s._v("和"),n("code",[s._v("密码")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(520),alt:"Git修改凭证"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);