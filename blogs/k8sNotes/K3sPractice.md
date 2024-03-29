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

缺点：推送到服务器job耗时非常长，无法动态识别不需要更新推送到服务器的静态文件，一般10min，网络不好40min

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

* [找到一篇人家实践过的文章](https://www.it610.com/article/1333652759500627968.htm)，没能成功，ingress配置貌似可以不需要使用，下面是自己成功的情况

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

* github actions 结合 dockefiles 执行，推送到个人阿里云仓库，服务器k3s单点，action调用kubectl api接口，更新镜像部署，测试可用

::: details  github action workflow

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
    - name: build pages
      uses: actions/checkout@v1
    - run: yarn install
    - run: yarn build

    # 推送构建的静态网页到myblog分支
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2.5.0
      env:
        ACTIONS_DEPLOY_KEY: ${{secrets.ACCESS_TOKEN}}
        PUBLISH_BRANCH: myblog
        PUBLISH_DIR: public

    # 推送到 CleanCloud 云函数平台
    - name: Deploy to LeanEngine
      uses: enflo/curl-action@v1.2
      with:
        curl: -X POST https://us-w1-console-api.leancloud.app/1.1/engine/groups/web/production/version?gitTag=myblog&token=${{ secrets.DEPLOY_LEANCLOUD_TOKEN }}

    # 推送 docker 镜像到阿里云私有仓库
    - name: Build And Push Docker image
      uses: aliyun/acr-login@v1                                           # 使用阿里云镜像服务action
      env:
        docker_repo: registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep  # 指定自己的仓库地址
        image_name: blog                                                  # 指定镜像名称
        tag: ${{ github.sha }}                                            # 指定镜像标签
    - run: docker version
    - run: docker login --username=${{ secrets.DOCKER_USERNAME }} --password=${{ secrets.DOCKER_PASSWORD }} registry.cn-hangzhou.aliyuncs.com # 登录阿里云镜像仓库
    - run: docker build . --file Dockerfile --tag registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/blog:${{ github.sha }} # 使用Dockerfile构建镜像
    - run: docker push registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/blog:${{ github.sha }}     # 推送镜像到镜像仓库

    - name: Docker Images List # 列出所有镜像
      run: docker images

    # 让K3s应用deployment
    - run: |
        sed -i 's/{TAG}/${{ github.sha }}/g' deployment.yaml
    - uses: danielr1996/kubectl-action@1.0.0
      name: Deploy to k3s
      with:
        kubeconfig: ${{ secrets.KUBE_CONFIG_DATA }}
        args: apply -f deployment.yaml
    
    # 推送 github action 执行成功到iphone
    - name: push github action to iphone
      run: curl --location --request POST 'https://api2.pushdeer.com/message/push?pushkey=${{ secrets.PUSHDEER_KEY }}&text='github_action_execute_successfully''
```

:::

::: details github密钥获取、配置

```shell
# secrets.KUBE_CONFIG_DATA 
# 注意，里面ip可能是127.0.0.1，可以先不用base64，复制里面内容到新的文件，修改里面的ip为服务器真实ip，然后在 cat xx.yaml | base64
kubectl config view | base64
```

:::

* k3s deployment.yml，里面tag变量取值git提交的hash值，通过action更新到yaml里面

::: details  k3s deploymen.yaml

```yaml
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
        - image: registry.cn-hangzhou.aliyuncs.com/aliyun-docker-rep/blog:{TAG}
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
          resources: { }
          securityContext:
            allowPrivilegeEscalation: false
            capabilities: { }
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
      dnsConfig: { }
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: { }
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

* 能域名成功访问前置条件

```
Traefik是一个边缘路由器，它会拦截外部的请求并根据逻辑规则选择不同的操作方式，这些规则决定着这些请求到底该如何处理。Traefik提供自动发现能力，会实时检测服务，并自动更新路由规则
k3s 集群中默认使用 Traefik 作为 Ingress Controller，k3s 1.20 及更早版本默认安装 Traefik v1，而 k3s 1.21 及更高版本默认安装 Traefik v2，v2 版本在性能和功能性上都有比较大的提升
Traefik 理解为 k8s ingressController，nignx 代理，不过k3s默认安装好了，不需要你额外配置
```

::: details k3s 开启traefik dashborad，方便查看 配置的路由情况

```yaml
# dashboard.yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: dashboard
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`ingress.loenzo.top`) && (PathPrefix(`/dashboard`) || PathPrefix(`/api`))
      kind: Rule
      services:
        - name: api@internal
          kind: TraefikService
```

:::

::: details 配置 http://loenzo.top 路由

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: blog-ingress-route
  namespace: blog
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`loenzo.top`) && PathPrefix(`/`)
      kind: Rule
      services:
        - name: blog
          port: 80
```

:::

::: details 创建证书

创建证书：` kubectl create secret tls loenzo-top-tls --cert=/etc/nginx/cert/loenzo.top.pem --key=/etc/nginx/cert/loenzo.top.key -n blog`

两个证书文件随便网上申领一个免费的即可，然后下载下来放到自己的路径，可自定义

```shell
kubectl get secret -n blog
NAME             TYPE                DATA   AGE
loenzo-top-tls   kubernetes.io/tls   2      9d
```

:::

::: details 配置 https://loenzo.top 路由，需要配置证书

```yaml
 apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: blog-ingress-https-route
  namespace: blog
spec:
  entryPoints:
    - websecure   ## 使用https方式
  routes:
    - match: Host(`loenzo.top`) && PathPrefix(`/`)
      kind: Rule
      services:
        - name: blog
          port: 80
  tls:
    secretName: loenzo-top-tls  ## 配置证书
```

:::

* 最后，通过 github  action 部署把，服务器查看最新pod更新时间即可