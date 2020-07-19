---
title: GithubActions使用
tags:
 - GithubActions
categories:
 - LeaningDocument
date: 2020-05-15
---

::: tip
Vuepress搭建的个人静态博客，使用GithubAction实现本地提交推送，github监听到提交后根据`ci.yml`实现自动部署到gh-pages

:::

<!-- more -->

### 1. Vuepress 搭建

* [官方文档](https://www.vuepress.cn/)，参考官方文档自己搭建
* [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/) 在这个主题基础上初始化`blog`改造；

### 2. 项目同步

* 在`github`上创建对应的项目
* 将自己搭建的`vuepress`或者基于上面主题改造的项目推送到自己的`github`项目

### 3. 设置公钥私钥

* 本地项目位置打开`Git Bash`，邮箱与`github`注册邮箱保持一致

  ```shell
  ssh-keygen -t rsa -C youremail@example.com
  ```

* 本地生成文件

  ```shell
  # 默认路径
  C:\Users\yourComputerName\.ssh
  
  # 私钥
  id_rsa
  
  # 公钥
  id_rsa.pub
  ```

* 在`github`当前项目的位置

  Settings --> Deploy key --> Add Deploy key   添加公钥

  Settings --> Secrets 添加私钥

### 4 githubActions

​	在当前项目，点击Actions创建 `.yml` 文件，可选用已经有的模板进行修改

```yml
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
    
    # npm 使用下面这种
    # - run: npm ci
    # - run: npm install vuepress
    # - run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
      	# 之前项目的私钥，对应的要填写正确
        ACTIONS_DEPLOY_KEY: ${{secrets.ACCESS_TOKEN}}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: public
        # PUBLISH_DIR: docs/.vuepress/dist
```

### 5. 本地deploy脚本

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

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:LoEnzo/myblog.git master:gh-pages
# git push -f https://gitee.com/myMagicRain/myblog.git master:gh-pages

cd -
```

