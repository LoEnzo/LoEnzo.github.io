<template><div><p>::: tip</p>
<p>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git版本管理工具的常规使用，常用命令汇总，<a href="https://www.cnblogs.com/junwu/p/6004663.html" target="_blank" rel="noopener noreferrer">详细汇总</a></p>
<p>:::</p>
<!-- more -->
<h2 id="git常用指令" tabindex="-1"><a class="header-anchor" href="#git常用指令" aria-hidden="true">#</a> Git常用指令</h2>
<h3 id="_1-git-工作流程图" tabindex="-1"><a class="header-anchor" href="#_1-git-工作流程图" aria-hidden="true">#</a> 1. Git 工作流程图</h3>
<p><img src="@source/blogs/DevTools/img/Git02.png" alt="Git流程图"></p>
<h3 id="_2-git-常规配置" tabindex="-1"><a class="header-anchor" href="#_2-git-常规配置" aria-hidden="true">#</a> 2. Git 常规配置</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># git 版本
git --version 

# git 升级
git update-git-for-windows

# 克隆项目
git clone [url]

# 显示当前git的配置
git config --list

# 设置提交代码的个人信息，global为全局配置，可选
git config --global user.name &quot;you name&quot;
git config --global user.email &quot;you email&quot;

# linux 删除，添加git凭证
git config credential.helper store
git config --global --unset credential.helper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-提交并推送" tabindex="-1"><a class="header-anchor" href="#_3-提交并推送" aria-hidden="true">#</a> 3. 提交并推送</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 添加文件到暂存区，-A参数代表所有，也可以指定具体文件信息
git add -A

# 提交暂存区到仓库区
git commit -m &quot;Information describing the content of this submission&quot;

# 推送到远端仓库
git push

# 拉取最新代码
git pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-分支" tabindex="-1"><a class="header-anchor" href="#_4-分支" aria-hidden="true">#</a> 4. 分支</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看所有分支，白色为本地分支，红色为远端分支，r参数代表远端分支
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-tag" tabindex="-1"><a class="header-anchor" href="#_5-tag" aria-hidden="true">#</a> 5. Tag</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看tag信息
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-查看信息" tabindex="-1"><a class="header-anchor" href="#_6-查看信息" aria-hidden="true">#</a> 6. 查看信息</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 当前状态，分支，未提交文件信息等
git status

# 显示当前分支的历史版本，--stat参数显示commit历史，以及每次commit发生变更的问题
git log --stat

# 回退到指定版本，hard后面跟随的参数是每次提交后产生的随机哈希值，可以git log查看	
git reset --hard hash_code

# 查看Branch log后退出，直接按q即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-同步提交" tabindex="-1"><a class="header-anchor" href="#_7-同步提交" aria-hidden="true">#</a> 7. 同步提交</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 适用整体同步用merge,部分代码同步可以用cherry-pick，先获取到 部分提交内容f的commitHash; 
    a - b - c - d   Master
         \
           e - f - g Feature
# 切换到Master，将f提交部分内容同步到Master，支持多个commitHash一起提交，最后再推送到远端
git cherry-pick &lt;HashA&gt; &lt;HashB&gt;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-回退" tabindex="-1"><a class="header-anchor" href="#_8-回退" aria-hidden="true">#</a> 8. 回退</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 版本回退，回退到该版本之后的提交记录都会丢失，然后强制推送到远端，慎用
git reset --hard commit_id
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-修改提交记录" tabindex="-1"><a class="header-anchor" href="#_9-修改提交记录" aria-hidden="true">#</a> 9.修改提交记录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 有时候因为自己commit信息写错了，需要修改对应的记录
# 修改最后一次提交记录
git commit --amend -m &quot;new commit message&quot;

# 修改最近n次记录，不确定可以git log查看历史记录确认
git rebase -i HEAD~n
# 之后会进入会进入交互式界面，列出了你想要修改的提交以及它们的哈希值和提交信息。在想要修改的提交前一行，将其对应的`pick`改为`edit`。保存退出后，Git 会自动切换到想要修改的这个提交
git commit --amend -m &quot;new commit message&quot;
# 继续变基命令
git rebase --continue
# 强制推送到远端，可以先 git log 查看修改记录是否正确
git push -f origin &lt;current_branch_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-储藏" tabindex="-1"><a class="header-anchor" href="#_10-储藏" aria-hidden="true">#</a> 10. 储藏</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 本地仓库，当前正在开发，修改的代码还处于混乱状态，不好针对当前状态进行一个说明不清晰的commit，但是又需要切换到其他分支进行其他任务处理，这时候就需要 git stash 场景了，可以多次储藏
# 将修改的内容储藏
git stash
git stash save &quot;可以添加注释，本次储藏内容&quot;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-git-pull-fetch-区别" tabindex="-1"><a class="header-anchor" href="#_11-git-pull-fetch-区别" aria-hidden="true">#</a> 11. git pull | fetch 区别</h3>
<p>git pull 可以选择拉取远端的更新代码，通常我们是拉取远端master更新的代码到本地分支，确保分支推送到远端后,合并时没有冲突，</p>
<p>git pull指令拉取后会自动执行git merge操作，有冲突需要我们手动解决冲突，</p>
<p>拉取指令：<code v-pre>git pull origin master</code>，</p>
<p>git fetch 是拉取远端分支更新的代码，并不会自动合并，我们自己观察是否有冲突，选择是否合并到本地分支</p>
<p>拉取指令：<code v-pre>git fetch origin master</code></p>
<p>查看拉取回的更新信息：<code v-pre>git log -p FETCH_HEAD</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>git pull = git fetch + git merge FETCH_HEAD 
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
git add . --&gt; 
git commit -m &quot;Feature update&quot; --&gt; 
git pull --&gt; 
git add . --&gt;
git commit -m &quot;Conflict Fix&quot; --&gt; 
git push
       
# git pull --rebase 场景 合并后，显示为一条提交记录，git提交记录看起来更为清晰，方便回退，不会产生新的merge commit hashId，
# 如果有冲突，解决冲突后，git rebase --continue 再 git push
# git pull --rebase 拉取到的远端记录有冲突会新建立一个随机分支解决冲突，避免了直接污染原来的分区
 a - b - e - f - g - c' - d'

# 顺序参考：
git add . --&gt;
git commit -m &quot;Feature update&quot; --&gt;
git pull --rebase --&gt; 
git rebase --continue --&gt; 
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-其他" tabindex="-1"><a class="header-anchor" href="#_12-其他" aria-hidden="true">#</a> 12. 其他</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 修改.ignore 使其生效
git rm -r --cached

# 修改tag标签名
git tag new_tag_name old_tag_name
git tag -d old_tag_name
git push origin :refs/tags/old_tag_name
git push --tags

# 清除之前所有的commit，因为修改错误remote.origin.url地址，导致把不是这个项目的文件拉取下来了，虽然文件删除，但所有历史commit同步到当前项目了，看起来非常杂乱
git checkout --orphan latest_branch
git add -A
git commit -am &quot;commit message&quot;
git branch -D master
git branch -m master
git push -f origin master

# 迁移项目，由于将git项目迁移到了其他地址，怎么让本地的修改能推送到新的git仓库
git remote set-url origin 变更后的git仓库地址	// 注意，推送前确保本地未提交的文件先提交到暂存区，确保和原git仓库master代码没有冲突，有冲突先解决，然后就可以同步主干代码了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA：</h3>
<h4 id="git-clone-报错" tabindex="-1"><a class="header-anchor" href="#git-clone-报错" aria-hidden="true">#</a> git clone 报错</h4>
<p>报错：<code v-pre>warning: Clone succeeded, but checkout failed.</code> 或者<code v-pre>filename too long</code>，</p>
<p>原因：这个是你本地放置的仓库地址在多级文件夹里面，且自己要拉取的项目某些文件的层级也很多导致的，一般拉取到最外层的磁盘即可，当然，可以修改git配置解决</p>
<p>解决：<code v-pre>git config --system core.longpaths true</code></p>
<h4 id="git-push-github-或者-git-update-更新报错-443" tabindex="-1"><a class="header-anchor" href="#git-push-github-或者-git-update-更新报错-443" aria-hidden="true">#</a> git push github 或者 git update 更新报错 443</h4>
<p>报错： <code v-pre>SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443</code>，</p>
<p>原因：因为Git的Http代理的问题，Git支持三种协议：git://、ssh://和http://；本来push的时候应该走ssh隧道的，但是因为设置了http代理，所以就走了http的代理，于是就提交不了了</p>
<p>解决：取消代理<code v-pre>git config --global --unset http.proxy</code></p>
<h4 id="git-pull-报错-ssl错误" tabindex="-1"><a class="header-anchor" href="#git-pull-报错-ssl错误" aria-hidden="true">#</a> git pull 报错：SSL错误</h4>
<p>错误： <code v-pre>SSL certificate problem: unable to get local issuer certificate</code></p>
<p>原因：这个是由于Git默认开启了SSL验证，关闭即可；</p>
<p>解决：<code v-pre>git config --global http.sslVerify false</code></p>
<h4 id="git-pull-报错429" tabindex="-1"><a class="header-anchor" href="#git-pull-报错429" aria-hidden="true">#</a> git pull 报错429</h4>
<p>原因：偶尔出现的拉去大文件，或者网络不好的情况， <code v-pre>fatal: unable to access 'https://XXX.git/': The requested URL returned error: 429</code></p>
<p>解决：<code v-pre>git config --global http.postBuffer 5242880000</code></p>
<h4 id="git-push-报错403" tabindex="-1"><a class="header-anchor" href="#git-push-报错403" aria-hidden="true">#</a> git push 报错403</h4>
<p>报错：<code v-pre>fatal: unable to access 'https://XXX.git/': The requested URL returned error: 403</code>，开始还可以推送，后面就报错了，暂时不知道为啥，详细错误</p>
<p>解决：临时办法</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vim .git/config

[remote “origin”]
	url = https://用户名:密码@gitXXX.git 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新推送即可</p>
<h4 id="no-path-specified-see-man-git-pull-for-valid-url-syntax" tabindex="-1"><a class="header-anchor" href="#no-path-specified-see-man-git-pull-for-valid-url-syntax" aria-hidden="true">#</a> NO path specified. See 'man git-pull' for valid url syntax</h4>
<p>原因：本地含有多个仓库，全局设置了<code v-pre>remote.origin.url</code></p>
<p>解决：<code v-pre>git config --global --unset remote.origin.url</code>，慎用<code v-pre>global</code>配置，尤其是电脑上需要保存公司项目、自己的github项目，因为用户名、邮箱不同，最好都在自己的项目下设置配置即可</p>
<h4 id="设置和取消代理" tabindex="-1"><a class="header-anchor" href="#设置和取消代理" aria-hidden="true">#</a> 设置和取消代理</h4>
<p>设置代理：<code v-pre>git config --global https.proxy http://127.0.0.1:8081</code></p>
<p>取消代理：<code v-pre>git config --global --unset https.proxy</code></p>
<h4 id="git-status无法显示修改的文件" tabindex="-1"><a class="header-anchor" href="#git-status无法显示修改的文件" aria-hidden="true">#</a> Git status无法显示修改的文件</h4>
<p>原因：git 默认修改文件不区分大小写</p>
<p>解决：可以查看状态：<code v-pre>git config --get core.ignorecase</code>，修改为false即可：<code v-pre>git config core.ignorecase false</code></p>
<p><strong>git pull 报错：cannot lock ref ...：is at ... but expected ...</strong></p>
<p>报错详情，省略部分</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>error: cannot lock ref '...'：is at &lt;commit_id1&gt; but expected &lt;commit_id2&gt;
From https://....
! &lt;commit_id1&gt;..&lt;commit_id2&gt; &lt;branchName&gt; -&gt; origin/&lt;branchName&gt; (unable to update local ref)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：本地分支和远程分支的HEAD不太一致，但是奇怪报错分支并不是自己的，有可能是分支名区分大小写导致的，参考上面；</p>
<p>解决：去除Window区分大小写设置，参考上面，未生效；还可以删除本地保留的记录，<code v-pre>\.git\refs\remotes\origin</code>，删除对应报错的分支记录，重新拉取即可</p>
<h4 id="git修改凭证" tabindex="-1"><a class="header-anchor" href="#git修改凭证" aria-hidden="true">#</a> Git修改凭证</h4>
<p>事例：使用<code v-pre>Tortoigit</code>提交文件时，因为没有权限，输入的凭证错误，导致提交失败，后续添加权限后，重复提交仍然失败。</p>
<p>原因：没有清除之前错误的Git凭证</p>
<p>解决：到 <code v-pre>控制面板-用户帐户-凭据管理器</code>目录下修改凭证的<code v-pre>用户名</code>和<code v-pre>密码</code></p>
<p><img src="@source/blogs/DevTools/img/Git01.png" alt="Git修改凭证"></p>
</div></template>


