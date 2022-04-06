---
title: K3s实践
tags:
 - k3s
 - github actions
categories:
 - K8sNotes
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

打算实现 github action 通过 dockerfiles 构建最新镜像，推送到阿里云个人仓库，再通过 远程连接 kubectl 远程访问 apiserver 拉取最新的镜像进行部署即可，学习下 k3s.yaml 文件编写

要点：

* [找到一篇人家实践过的文章](https://www.it610.com/article/1333652759500627968.htm)

* dockerfiles 编写

::: details 放置项目根目录 dockerfiles

```yaml
# 设置继承镜像
FROM rbgoodall/alpine-nginx

# 提供作者信息
LABEL maintainer="loenzo"

# 将编译后的静态文件拷贝到镜像
ADD /public /usr/share/nginx/html

# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
# ADD default.conf /etc/nginx/conf.d/default.conf

# 更改 ubuntu:18.04
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic main restricted universe multiverse" > /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-security main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-updates main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-proposed main restricted universe multiverse" >> /etc/apt/sources.list
# RUN echo "deb http://mirros.163.com/ubuntu/ bionic-backports main restricted universe multiverse" >> /etc/apt/sources.list
# RUN apt-get update

# VOLUME [ "/etc/nginx/conf.d/" ]

# 开放端口
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["nginx"]

# 设置启动命令
CMD ["-g","daemon off;"]
```

:::

* github actions 结合 dockefiles 执行，推送到个人阿里云仓库

::: details  workflow

```yaml
name: master
on:
  push:
      branches:
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    # node 编译
    - name: build
      uses: actions/setup-node@v1
    - run: |
        npm i -g hexo-cli
        npm i
        hexo clean
        hexo g
    # docker build，并 push
    - name: Docker push
      uses: azure/docker-login@v1
      with:
        login-server: reg.qiniu.com
        username: ${{ secrets.REGISTRY_USERNAME }}
        password: ${{ secrets.REGISTRY_PASSWORD }}
    - run: |
        docker build -t reg.qiniu.com/holo-blog/blog:${{ github.sha }} -t reg.qiniu.com/holo-blog/blog .
        docker push reg.qiniu.com/holo-blog/blog:${{ github.sha }}
        docker push reg.qiniu.com/holo-blog/blog
    # 让K8s应用deployment
    - run: |
        sed -i 's/{TAG}/${{ github.sha }}/g' deployment.yaml
    - name: deploy to cluster
      uses: steebchen/kubectl@master
      env:
        KUBE_CONFIG_DATA: ${{ secrets.KUBE_CONFIG_DATA }}
        KUBECTL_VERSION: "1.15"
      with:
        args: apply -f deployment.yaml
    - name: verify deployment
      uses: steebchen/kubectl@master
      env:
        KUBE_CONFIG_DATA: ${{ secrets.KUBE_CONFIG_DATA }}
        KUBECTL_VERSION: "1.15"
      with:
        args: '"rollout status -n blog deployment/blog"'
```

:::

::: details github密钥获取、配置

```shell
# secrets.KUBE_CONFIG_DATA 
kubectl config view | base64
```

:::

* k3s deployment.yml

::: details  k3s 指令yaml文件

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: blog
  namespace: blog
spec:
  rules:
  - host: dalaocarryme.com
    http:
      paths:
      - backend:
          serviceName: blog
          servicePort: 80
  - host: www.dalaocarryme.com
    http:
      paths:
      - backend:
          serviceName: blog
          servicePort: 80
  - host: blog.dalaocarryme.com
    http:
      paths:
      - backend:
          serviceName: blog
          servicePort: 80
  backend:
    serviceName: blog
    servicePort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: blog
  namespace: blog
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: blog
  sessionAffinity: ClientIP
  type: ClusterIP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: blog
  namespace: blog
spec:
  progressDeadlineSeconds: 600
  replicas: 2
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: blog
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: blog
    spec:
      containers:
      - image: reg.qiniu.com/holo-blog/blog:{TAG}
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: 80
            scheme: HTTP
          initialDelaySeconds: 10
          periodSeconds: 2
          successThreshold: 1
          timeoutSeconds: 2
        name: blog
        ports:
        - containerPort: 80
          name: 80tcp02
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: 80
            scheme: HTTP
          initialDelaySeconds: 10
          periodSeconds: 2
          successThreshold: 2
          timeoutSeconds: 2
        resources: {}
        securityContext:
          allowPrivilegeEscalation: false
          capabilities: {}
          privileged: false
          readOnlyRootFilesystem: false
          runAsNonRoot: false
        stdin: true
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        tty: true
        volumeMounts:
        - mountPath: /usr/share/nginx/html/db.json
          name: db
        - mountPath: /usr/share/nginx/html/Thumbs.json
          name: thumbs
      dnsConfig: {}
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
      volumes:
      - hostPath:
          path: /data/db.json
          type: ""
        name: db
      - hostPath:
          path: /data/Thumbs.json
          type: ""
        name: thumbs
```

:::

* 待测试，部分命名，变量需要对应修改