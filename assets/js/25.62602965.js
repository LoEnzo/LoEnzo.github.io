(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{556:function(s,t,a){s.exports=a.p+"assets/img/Git02.3bc9d5f2.png"},557:function(s,t,a){s.exports=a.p+"assets/img/Git01.1b288224.png"},667:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git版本管理工具的常规使用，常用命令汇总，"),n("a",{attrs:{href:"https://www.cnblogs.com/junwu/p/6004663.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("详细汇总"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"git常用指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[s._v("#")]),s._v(" Git常用指令")]),s._v(" "),n("h3",{attrs:{id:"_1-git-工作流程图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-工作流程图"}},[s._v("#")]),s._v(" 1. Git 工作流程图")]),s._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:"Git流程图"}})]),s._v(" "),n("h3",{attrs:{id:"_2-git-常规配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-常规配置"}},[s._v("#")]),s._v(" 2. Git 常规配置")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --version \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 升级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" update-git-for-windows\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆项目")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前git的配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置提交代码的个人信息，global为全局配置，可选")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you name"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you email"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux 删除，添加git凭证")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config credential.helper store\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset credential.helper\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"_3-提交并推送"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交并推送"}},[s._v("#")]),s._v(" 3. 提交并推送")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加文件到暂存区，-A参数代表所有，也可以指定具体文件信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交暂存区到仓库区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Information describing the content of this submission"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远端仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取最新代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_4-分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-分支"}},[s._v("#")]),s._v(" 4. 分支")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有分支，白色为本地分支，红色为远端分支，r参数代表远端分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -branch -a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" -r\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch your_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送分支到远端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin your_local_branch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D your_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远端分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete your_remote_branch_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout your_branch_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"_5-tag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-tag"}},[s._v("#")]),s._v(" 5. Tag")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看tag信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag your_tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送tag到远端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin your_local_tag\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远端tag")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除本地、远端tag，本地执行git tag，将要删除的tag单独复制出来，在IDEA或者sublime中批量修改，在前面添加git tag -d")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d tag_name2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 批量删除远端tag同理，将修改过的指令统一复制到命令行执行即可，远端的批量删除，复制过去某些tag内容丢失，暂不知道为啥")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/tag_name2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再上一个tag上创建分支，适用于临时的简单修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch Branch_name pre_tag_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_6-查看信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看信息"}},[s._v("#")]),s._v(" 6. 查看信息")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前状态，分支，未提交文件信息等")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前分支的历史版本，--stat参数显示commit历史，以及每次commit发生变更的问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --stat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到指定版本，hard后面跟随的参数是每次提交后产生的随机哈希值，可以git log查看\t")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard hash_code\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Branch log后退出，直接按q即可")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_7-同步提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-同步提交"}},[s._v("#")]),s._v(" 7. 同步提交")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 适用整体同步用merge,部分代码同步可以用cherry-pick，先获取到 部分提交内容f的commitHash; ")]),s._v("\n    a - b - c - d   Master\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n           e - f - g Feature\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到Master，将f提交部分内容同步到Master，支持多个commitHash一起提交，最后再推送到远端")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashA"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashB"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_8-回退"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-回退"}},[s._v("#")]),s._v(" 8. 回退")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 版本回退，回退到该版本之后的提交记录都会丢失，然后强制推送到远端，慎用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard commit_id\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_9-git-pull-fetch-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-git-pull-fetch-区别"}},[s._v("#")]),s._v(" 9. git pull | fetch 区别")]),s._v(" "),n("p",[s._v("git pull 可以选择拉取远端的更新代码，通常我们是拉取远端master更新的代码到本地分支，确保分支推送到远端后,合并时没有冲突，")]),s._v(" "),n("p",[s._v("git pull指令拉取后会自动执行git merge操作，有冲突需要我们手动解决冲突，")]),s._v(" "),n("p",[s._v("拉取指令："),n("code",[s._v("git pull origin master")]),s._v("，")]),s._v(" "),n("p",[s._v("git fetch 是拉取远端分支更新的代码，并不会自动合并，我们自己观察是否有冲突，选择是否合并到本地分支")]),s._v(" "),n("p",[s._v("拉取指令："),n("code",[s._v("git fetch origin master")])]),s._v(" "),n("p",[s._v("查看拉取回的更新信息："),n("code",[s._v("git log -p FETCH_HEAD")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch + "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge FETCH_HEAD \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch + "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase FETCH_HEAD \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 个人在b节点创建了Feature分支，并有 e-f-g 提交记录，主干Master在这之后有 c-d 提交记录")]),s._v("\n a - b - c - d   Master\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n       e - f - g Feature\n       \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull 场景 合并后, 新增一条h commit记录，如果有冲突，解决冲突后再提交 git push")]),s._v("\n a - b - c - d - h\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("         /\n       e - f - g\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顺序参考：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Feature update"')]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Conflict Fix"')]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n       \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull --rebase 场景 合并后，显示为一条提交记录，git提交记录看起来更为清晰，方便回退，不会产生新的merge commit hashId，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有冲突，解决冲突后，git rebase --continue 再 git push")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git pull --rebase 拉取到的远端记录有冲突会新建立一个随机分支解决冲突，避免了直接污染原来的分区")]),s._v("\n a - b - e - f - g - c"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' - d'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顺序参考：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Feature update"')]),s._v(" --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"_10-其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-其他"}},[s._v("#")]),s._v(" 10. 其他")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改.ignore 使其生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -r --cached\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改tag标签名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag new_tag_name old_tag_name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d old_tag_name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/old_tag_name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --tags\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除之前所有的commit，因为修改错误remote.origin.url地址，导致把不是这个项目的文件拉取下来了，虽然文件删除，但所有历史commit同步到当前项目了，看起来非常杂乱")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --orphan latest_branch\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit message"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m master\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f origin master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 迁移项目，由于将git项目迁移到了其他地址，怎么让本地的修改能推送到新的git仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin 变更后的git仓库地址\t// 注意，推送前确保本地未提交的文件先提交到暂存区，确保和原git仓库master代码没有冲突，有冲突先解决，然后就可以同步主干代码了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"qa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[s._v("#")]),s._v(" QA：")]),s._v(" "),n("h4",{attrs:{id:"git-clone-报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-clone-报错"}},[s._v("#")]),s._v(" git clone 报错")]),s._v(" "),n("p",[s._v("报错："),n("code",[s._v("warning: Clone succeeded, but checkout failed.")]),s._v(" 或者"),n("code",[s._v("filename too long")]),s._v("，")]),s._v(" "),n("p",[s._v("原因：这个是你本地放置的仓库地址在多级文件夹里面，且自己要拉取的项目某些文件的层级也很多导致的，一般拉取到最外层的磁盘即可，当然，可以修改git配置解决")]),s._v(" "),n("p",[s._v("解决："),n("code",[s._v("git config --system core.longpaths true")])]),s._v(" "),n("h4",{attrs:{id:"git-push-github-或者-git-update-更新报错-443"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-push-github-或者-git-update-更新报错-443"}},[s._v("#")]),s._v(" git push github 或者 git update 更新报错 443")]),s._v(" "),n("p",[s._v("报错： "),n("code",[s._v("SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443")]),s._v("，")]),s._v(" "),n("p",[s._v("原因：因为Git的Http代理的问题，Git支持三种协议：git://、ssh://和http://；本来push的时候应该走ssh隧道的，但是因为设置了http代理，所以就走了http的代理，于是就提交不了了")]),s._v(" "),n("p",[s._v("解决：取消代理"),n("code",[s._v("git config --global --unset http.proxy")])]),s._v(" "),n("h4",{attrs:{id:"git-pull-报错-ssl错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-报错-ssl错误"}},[s._v("#")]),s._v(" git pull 报错：SSL错误")]),s._v(" "),n("p",[s._v("错误： "),n("code",[s._v("SSL certificate problem: unable to get local issuer certificate")])]),s._v(" "),n("p",[s._v("原因：这个是由于Git默认开启了SSL验证，关闭即可；")]),s._v(" "),n("p",[s._v("解决："),n("code",[s._v("git config --global http.sslVerify false")])]),s._v(" "),n("h4",{attrs:{id:"git-pull-报错429"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-报错429"}},[s._v("#")]),s._v(" git pull 报错429")]),s._v(" "),n("p",[s._v("原因：偶尔出现的拉去大文件，或者网络不好的情况， "),n("code",[s._v("fatal: unable to access 'https://XXX.git/': The requested URL returned error: 429")])]),s._v(" "),n("p",[s._v("解决："),n("code",[s._v("git config --global http.postBuffer 5242880000")])]),s._v(" "),n("h4",{attrs:{id:"git-push-报错403"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-push-报错403"}},[s._v("#")]),s._v(" git push 报错403")]),s._v(" "),n("p",[s._v("报错："),n("code",[s._v("fatal: unable to access 'https://XXX.git/': The requested URL returned error: 403")]),s._v("，开始还可以推送，后面就报错了，暂时不知道为啥，详细错误")]),s._v(" "),n("p",[s._v("解决：临时办法")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .git/config\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote “origin”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\turl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://用户名:密码@gitXXX.git \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("重新推送即可")]),s._v(" "),n("h4",{attrs:{id:"no-path-specified-see-man-git-pull-for-valid-url-syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#no-path-specified-see-man-git-pull-for-valid-url-syntax"}},[s._v("#")]),s._v(" NO path specified. See 'man git-pull' for valid url syntax")]),s._v(" "),n("p",[s._v("原因：本地含有多个仓库，全局设置了"),n("code",[s._v("remote.origin.url")])]),s._v(" "),n("p",[s._v("解决："),n("code",[s._v("git config --global --unset remote.origin.url")]),s._v("，慎用"),n("code",[s._v("global")]),s._v("配置，尤其是电脑上需要保存公司项目、自己的github项目，因为用户名、邮箱不同，最好都在自己的项目下设置配置即可")]),s._v(" "),n("h4",{attrs:{id:"设置和取消代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置和取消代理"}},[s._v("#")]),s._v(" 设置和取消代理")]),s._v(" "),n("p",[s._v("设置代理："),n("code",[s._v("git config --global https.proxy http://127.0.0.1:8081")])]),s._v(" "),n("p",[s._v("取消代理："),n("code",[s._v("git config --global --unset https.proxy")])]),s._v(" "),n("h4",{attrs:{id:"git-status无法显示修改的文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-status无法显示修改的文件"}},[s._v("#")]),s._v(" Git status无法显示修改的文件")]),s._v(" "),n("p",[s._v("原因：git 默认修改文件不区分大小写")]),s._v(" "),n("p",[s._v("解决：可以查看状态："),n("code",[s._v("git config --get core.ignorecase")]),s._v("，修改为false即可："),n("code",[s._v("git config core.ignorecase false")])]),s._v(" "),n("h4",{attrs:{id:"git修改凭证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git修改凭证"}},[s._v("#")]),s._v(" Git修改凭证")]),s._v(" "),n("p",[s._v("事例：使用"),n("code",[s._v("Tortoigit")]),s._v("提交文件时，因为没有权限，输入的凭证错误，导致提交失败，后续添加权限后，重复提交仍然失败。")]),s._v(" "),n("p",[s._v("原因：没有清除之前错误的Git凭证")]),s._v(" "),n("p",[s._v("解决：到 "),n("code",[s._v("控制面板-用户帐户-凭据管理器")]),s._v("目录下修改凭证的"),n("code",[s._v("用户名")]),s._v("和"),n("code",[s._v("密码")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(557),alt:"Git修改凭证"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);