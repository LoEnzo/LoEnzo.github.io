---
title: K3s实践
tags:
 - k3s
 - github actions
categories:
 - OperationMaintenance
date: 2021-10-03
---

::: tip

:::

<!-- more -->

## 实践一

实现 自动部署最新的github pages 博客

### 阶段一

手动执行`deploy.sh`，推送到 github pages 分支

缺点：每次修改，本地提交需要手动执行脚本

::: details deploy.sh 脚本

```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run build
yarn build

# 进入生成的文件夹
#cd docs/.vuepress/dist
cd public

git config --global user.name 'LoEnzo'
git config --global user.email '928264247@qq.com'

git init
git add -A
git commit -m 'deploy'

# 如果是发布到自定义域名
echo 'https://loenzo.ml/' > CNAME


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:LoEnzo/myblog.git master:gh-pages
# git push -f https://gitee.com/myMagicRain/myblog.git master:gh-pages

cd -
```

:::

### 阶段二

使用github actions，每次commit自动部署到github pages 分支，推送到 clean cloud 云函数平台

缺点：github pages 访问有时候很慢，clean cloud云函数平台有休眠机制，很久没访问再访问第一次很慢

::: details ci.yaml

```yaml
name: blog deploy

on: 
  push:
    branches: 
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v1
    - run: yarn install
    - run: yarn build
    # - run: npm install
    # - run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{secrets.ACCESS_TOKEN}}
        PUBLISH_BRANCH: myblog
        PUBLISH_DIR: public
	#   推送到clean cloud
    - name: Deploy to LeanEngine
      uses: enflo/curl-action@v1.2
      with:
        curl: -X POST https://us-w1-console-api.leancloud.app/1.1/engine/groups/web/production/version?gitTag=myblog&token=${{ secrets.DEPLOY_LEANCLOUD_TOKEN }}           
```

:::

### 阶段三

使用github acitons，将编译后的静态文件推送到个人阿里云服务器，配合nginx访问

缺点：推送到服务器job耗时非常长，无法动态识别不需要更新推送到服务器的静态文件

::: details ci.yaml

```yaml
name: blog deploy

on: 
  push:
    branches: 
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v1
    - run: yarn install
    - run: yarn build
    # - run: npm ci
    # - run: npm install vuepress
    # - run: npm run build

    # 推送到阿里云服务器
    - name: deploy file to server
      uses: wlixcc/SFTP-Deploy-Action@v1.0 
      with:  
        username: 'root'   #ssh user name
        server: '${{ secrets.Aliyun_IP }}'				# 引用之前创建好的secret
        ssh_private_key: ${{ secrets.Aliyun_KEY }}		# 引用之前创建好的secret
        local_path: 'public/*'							# 对应我们项目public的文件夹路径
        remote_path: '/opt/app/blog'					# 服务器对应nginx静态文件目录

    # 推送构建的静态网页到myblog分支
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{secrets.ACCESS_TOKEN}}
        PUBLISH_BRANCH: myblog
        PUBLISH_DIR: public

    - name: Deploy to LeanEngine
      uses: enflo/curl-action@v1.2
      with:
        curl: -X POST https://us-w1-console-api.leancloud.app/1.1/engine/groups/web/production/version?gitTag=myblog&token=${{ secrets.DEPLOY_LEANCLOUD_TOKEN }} 
```

:::

### 阶段四

打算实现 github action 通过 dockerfiles 构建最新镜像，推送到阿里云个人仓库，通过 k3s cronjob 定时任务定时拉取最新的镜像进行打包部署，学习下 k3s.yaml 文件编写

要点：

* dockerfiles 编写
* dockerfiles 优化
* github actions 结合 dockefiles 执行，推送到个人阿里云仓库
* k3s cronjob.yaml 编写
* k3s 拉取个人仓库加速
