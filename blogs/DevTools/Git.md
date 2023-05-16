---
title: Git 操作手册
tags:
 - Git
categories:
 - DevTools
date: 2020-05-11
---

::: tip

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git版本管理工具的常规使用，常用命令汇总，[详细汇总](https://www.cnblogs.com/junwu/p/6004663.html)

:::

<!-- more -->

## Git常用指令

### 1. Git 工作流程图

![Git流程图](./img/Git02.png)

### 2. Git 常规配置

```shell
# git 版本
git --version 

# git 升级
git update-git-for-windows

# 克隆项目
git clone [url]

# 显示当前git的配置
git config --list

# 设置提交代码的个人信息，global为全局配置，可选
git config --global user.name "you name"
git config --global user.email "you email"

# linux 删除，添加git凭证
git config credential.helper store
git config --global --unset credential.helper
```

### 3. 提交并推送

```shell
# 添加文件到暂存区，-A参数代表所有，也可以指定具体文件信息
git add -A

# 提交暂存区到仓库区
git commit -m "Information describing the content of this submission"

# 推送到远端仓库
git push

# 拉取最新代码
git pull
```

### 4. 分支

```sh
# 查看所有分支，白色为本地分支，红色为远端分支，r参数代表远端分支
git -branch -a | -r

# 创建分支
git branch your_branch_name

# 推送分支到远端
git push --set-upstream origin your_local_branch

# 删除本地分支
git branch -D your_branch_name

# 删除远端分支
git push origin --delete your_remote_branch_name

# 切换分支
git checkout your_branch_name
```

### 5. Tag

```sh
# 查看tag信息
git tag

# 创建tag
git tag your_tag_name

# 推送tag到远端
git push origin your_local_tag

# 删除本地tag
git tag -d tag_name

# 删除远端tag
git push origin :refs/tags/tag_name

# 批量删除本地、远端tag，本地执行git tag，将要删除的tag单独复制出来，在IDEA或者sublime中批量修改，在前面添加git tag -d
git tag -d tag_name1
git tag -d tag_name2

# 批量删除远端tag同理，将修改过的指令统一复制到命令行执行即可，远端的批量删除，复制过去某些tag内容丢失，暂不知道为啥
git push origin :refs/tags/tag_name1
git push origin :refs/tags/tag_name2

# 再上一个tag上创建分支，适用于临时的简单修改
git branch Branch_name pre_tag_name
```

### 6. 查看信息

```shell
# 当前状态，分支，未提交文件信息等
git status

# 显示当前分支的历史版本，--stat参数显示commit历史，以及每次commit发生变更的问题
git log --stat

# 回退到指定版本，hard后面跟随的参数是每次提交后产生的随机哈希值，可以git log查看	
git reset --hard hash_code

# 查看Branch log后退出，直接按q即可
```

### 7. 同步提交

```shell
# 适用整体同步用merge,部分代码同步可以用cherry-pick，先获取到 部分提交内容f的commitHash; 
    a - b - c - d   Master
         \
           e - f - g Feature
# 切换到Master，将f提交部分内容同步到Master，支持多个commitHash一起提交，最后再推送到远端
git cherry-pick <HashA> <HashB>
git push
```

### 8. 回退

```shell
# 版本回退，回退到该版本之后的提交记录都会丢失，然后强制推送到远端，慎用
git reset --hard commit_id
git push -f
```

### 9.修改提交记录

```shell
# 有时候因为自己commit信息写错了，需要修改对应的记录
# 修改最后一次提交记录
git commit --amend -m "new commit message"

# 修改最近n次记录，不确定可以git log查看历史记录确认
git rebase -i HEAD~n
# 之后会进入会进入交互式界面，列出了你想要修改的提交以及它们的哈希值和提交信息。在想要修改的提交前一行，将其对应的`pick`改为`edit`。保存退出后，Git 会自动切换到想要修改的这个提交
git commit --amend -m "new commit message"
# 继续变基命令
git rebase --continue
# 强制推送到远端，可以先 git log 查看修改记录是否正确
git push -f origin <current_branch_name>
```

### 10. 储藏

```shell
# 本地仓库，当前正在开发，修改的代码还处于混乱状态，不好针对当前状态进行一个说明不清晰的commit，但是又需要切换到其他分支进行其他任务处理，这时候就需要 git stash 场景了，可以多次储藏
# 将修改的内容储藏
git stash
git stash save "可以添加注释，本次储藏内容"

# 此时再查看状态就不会有提示已经修改而未提交的状态
git status
nothing to commit

# 查看储藏
git stash list
stash@{0}: On master: test2
stash@{1}: On master: test1

# 切换回原分支，还原储藏
git stash apply # 应用最近一次的stash
git stash apply stash@{0}	# 应用指定的stash
git stash pop # 应用最近一次stash，随后删除该记录


# 删除堆栈的储藏，后面跟对应的储藏名
git stash drop # 删除最近一次的储藏
git stash drop stash@{0} 
```

### 11. git pull | fetch 区别

git pull 可以选择拉取远端的更新代码，通常我们是拉取远端master更新的代码到本地分支，确保分支推送到远端后,合并时没有冲突，

git pull指令拉取后会自动执行git merge操作，有冲突需要我们手动解决冲突，

拉取指令：`git pull origin master`，

git fetch 是拉取远端分支更新的代码，并不会自动合并，我们自己观察是否有冲突，选择是否合并到本地分支

拉取指令：`git fetch origin master`

查看拉取回的更新信息：`git log -p FETCH_HEAD`

```shell
git pull = git fetch + git merge FETCH_HEAD 
git pull --rebase = git fetch + git rebase FETCH_HEAD 

# 个人在b节点创建了Feature分支，并有 e-f-g 提交记录，主干Master在这之后有 c-d 提交记录
 a - b - c - d   Master
      \
       e - f - g Feature
       
# git pull 场景 合并后, 新增一条h commit记录，如果有冲突，解决冲突后再提交 git push
 a - b - c - d - h
      \         /
       e - f - g
# 顺序参考：
git add . --> 
git commit -m "Feature update" --> 
git pull --> 
git add . -->
git commit -m "Conflict Fix" --> 
git push
       
# git pull --rebase 场景 合并后，显示为一条提交记录，git提交记录看起来更为清晰，方便回退，不会产生新的merge commit hashId，
# 如果有冲突，解决冲突后，git rebase --continue 再 git push
# git pull --rebase 拉取到的远端记录有冲突会新建立一个随机分支解决冲突，避免了直接污染原来的分区
 a - b - e - f - g - c' - d'

# 顺序参考：
git add . -->
git commit -m "Feature update" -->
git pull --rebase --> 
git rebase --continue --> 
git push
```

### 12. 其他

```shell
# 修改.ignore 使其生效
git rm -r --cached

# 修改tag标签名
git tag new_tag_name old_tag_name
git tag -d old_tag_name
git push origin :refs/tags/old_tag_name
git push --tags

# 清除之前所有的commit，因为修改错误remote.origin.url地址，导致把不是这个项目的文件拉取下来了，虽然文件删除，但所有历史commit同步到当前项目了，看起来非常杂乱
git checkout --orphan latest_branch
git add -A
git commit -am "commit message"
git branch -D master
git branch -m master
git push -f origin master

# 迁移项目，由于将git项目迁移到了其他地址，怎么让本地的修改能推送到新的git仓库
git remote set-url origin 变更后的git仓库地址	// 注意，推送前确保本地未提交的文件先提交到暂存区，确保和原git仓库master代码没有冲突，有冲突先解决，然后就可以同步主干代码了
```

### QA：

#### git clone 报错 

报错：`warning: Clone succeeded, but checkout failed.` 或者`filename too long`，

原因：这个是你本地放置的仓库地址在多级文件夹里面，且自己要拉取的项目某些文件的层级也很多导致的，一般拉取到最外层的磁盘即可，当然，可以修改git配置解决

解决：`git config --system core.longpaths true`

#### git push github 或者 git update 更新报错 443

报错： `SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443`，

原因：因为Git的Http代理的问题，Git支持三种协议：git://、ssh://和http://；本来push的时候应该走ssh隧道的，但是因为设置了http代理，所以就走了http的代理，于是就提交不了了

解决：取消代理`git config --global --unset http.proxy`	

#### git pull 报错：SSL错误

错误： `SSL certificate problem: unable to get local issuer certificate`

原因：这个是由于Git默认开启了SSL验证，关闭即可；

解决：`git config --global http.sslVerify false`

#### git pull 报错429

原因：偶尔出现的拉去大文件，或者网络不好的情况， `fatal: unable to access 'https://XXX.git/': The requested URL returned error: 429`

解决：`git config --global http.postBuffer 5242880000`

#### git push 报错403

报错：`fatal: unable to access 'https://XXX.git/': The requested URL returned error: 403`，开始还可以推送，后面就报错了，暂时不知道为啥，详细错误

解决：临时办法

```shell
vim .git/config

[remote “origin”]
	url = https://用户名:密码@gitXXX.git 
```

重新推送即可

#### NO path specified. See 'man git-pull' for valid url syntax

原因：本地含有多个仓库，全局设置了`remote.origin.url`

解决：`git config --global --unset remote.origin.url`，慎用`global`配置，尤其是电脑上需要保存公司项目、自己的github项目，因为用户名、邮箱不同，最好都在自己的项目下设置配置即可

#### 设置和取消代理

设置代理：`git config --global https.proxy http://127.0.0.1:8081`

取消代理：`git config --global --unset https.proxy`

#### Git status无法显示修改的文件

原因：git 默认修改文件不区分大小写

解决：可以查看状态：`git config --get core.ignorecase`，修改为false即可：`git config core.ignorecase false`

**git pull 报错：cannot lock ref ...：is at ... but expected ...**

报错详情，省略部分

```shell
error: cannot lock ref '...'：is at <commit_id1> but expected <commit_id2>
From https://....
! <commit_id1>..<commit_id2> <branchName> -> origin/<branchName> (unable to update local ref)
```

原因：本地分支和远程分支的HEAD不太一致，但是奇怪报错分支并不是自己的，有可能是分支名区分大小写导致的，参考上面；

解决：去除Window区分大小写设置，参考上面，未生效；还可以删除本地保留的记录，`\.git\refs\remotes\origin`，删除对应报错的分支记录，重新拉取即可

#### Git修改凭证

事例：使用`Tortoigit`提交文件时，因为没有权限，输入的凭证错误，导致提交失败，后续添加权限后，重复提交仍然失败。

原因：没有清除之前错误的Git凭证

解决：到 `控制面板-用户帐户-凭据管理器`目录下修改凭证的`用户名`和`密码`

![Git修改凭证](./img/Git01.png)