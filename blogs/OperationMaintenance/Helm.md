---
title: Helm
tags:
 - Helm
categories:
 - OperationMaintenance
date: 2022-06-06

---

::: tip

Helm是Kubernetes的包管理工具，如果比作操作系统，那么Helm就好比yum，apt-get，homebrew。使用Helm chart可以方便我们部署和管理自己的应用。Helm 安装 charts 到 Kubernetes 集群中，每次安装都会创建一个新的 release。Helm 本质就是让 K8s 的应用管理（Deployment,Service 等 ) 可配置，能动态生成。通过动态生成 K8s 资源清 单文件（deployment.yaml，service.yaml）。然后调用 Kubectl 自动执行 K8s 资源部署。


:::

<!-- more -->

# 下载安装

**文档地址**

* [github_release](https://github.com/helm/helm/releases)，直接下载，当前使用[v3.9.0](https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz)
* [官方文档](https://helm.sh/zh/docs/)

**版本参考**

::: detail Helm和对应支持的Kubernetes版本

| Helm 版本 | 支持的 Kubernetes 版本 |
| :-------- | :--------------------- |
| 3.7.x     | 1.22.x - 1.19.x        |
| 3.6.x     | 1.21.x - 1.18.x        |
| 3.5.x     | 1.20.x - 1.17.x        |
| 3.4.x     | 1.19.x - 1.16.x        |
| 3.3.x     | 1.18.x - 1.15.x        |
| 3.2.x     | 1.18.x - 1.15.x        |
| 3.1.x     | 1.17.x - 1.14.x        |
| 3.0.x     | 1.16.x - 1.13.x        |
| 2.16.x    | 1.16.x - 1.15.x        |
| 2.15.x    | 1.15.x - 1.14.x        |
| 2.14.x    | 1.14.x - 1.13.x        |
| 2.13.x    | 1.13.x - 1.12.x        |
| 2.12.x    | 1.12.x - 1.11.x        |
| 2.11.x    | 1.11.x - 1.10.x        |
| 2.10.x    | 1.10.x - 1.9.x         |
| 2.9.x     | 1.10.x - 1.9.x         |
| 2.8.x     | 1.9.x - 1.8.x          |
| 2.7.x     | 1.8.x - 1.7.x          |
| 2.6.x     | 1.7.x - 1.6.x          |
| 2.5.x     | 1.6.x - 1.5.x          |
| 2.4.x     | 1.6.x - 1.5.x          |
| 2.3.x     | 1.5.x - 1.4.x          |
| 2.2.x     | 1.5.x - 1.4.x          |
| 2.1.x     | 1.5.x - 1.4.x          |
| 2.0.x     | 1.4.x - 1.3.x          |

:::

**安装**

```shell
tar -zxvf harbor-offline-installer-v3.9.0.tgz

mv linux-amd64/helm /usr/local/bin/helm

helm version	# 有返回即安装成功
```

# 基本使用

### 添加仓库

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami

# 添加私有harbor仓库
helm repo add harbor http://harbor.xxx.com/chartrepo/xxx --username=admin --password=Harbor12345

# 私有harbor仓库默认没有helm chart，重新安装harbor后，直接刷新即可，harbor安装查看其他文档,安装完成后即可看到 helm chart，可以在线上传，也可以
./install.sh  --with-chartmuseum`
```

## helm push 插件安装

* 在线安装：`helm plugin install https://github.com/chartmuseum/helm-push`

* 离线安装： 下载最新release，当前使用 [0.10.2](https://github.com/chartmuseum/helm-push)

```shell
$ helm env
HELM_BIN="helm"
HELM_DEBUG="false"
HELM_KUBEAPISERVER=""
HELM_KUBECONTEXT=""
HELM_KUBETOKEN=""
HELM_NAMESPACE="default"

HELM_PLUGINS="/root/.local/share/helm/plugins"					# 注意下面这行是插件所在位置
HELM_REGISTRY_CONFIG="/root/.config/helm/registry.json"
HELM_REPOSITORY_CACHE="/root/.cache/helm/repository"
HELM_REPOSITORY_CONFIG="/root/.config/helm/repositories.yaml"	# 添加仓库后保存的所有仓库相关配置的记录文件

$ mkdir /root/.local/share/helm/plugins/helm-push

$ cp helm-push_0.10.2_linux_amd64.tar.gz /root/.local/share/helm/plugins/helm-push

$ tar -zxvf /root/.local/share/helm/plugins/helm-push/helm-push_0.10.2_linux_amd64.tar.gz 

$ helm plugin list
[root@master1 nginx]# helm plugin list
NAME	VERSION	DESCRIPTION                      
push	0.10.2  	Push	 chart package to ChartMuseum
```

## helm push 使用

V3.8.0版本后启动了OCI注册中心，[详细查看](https://helm.sh/zh/docs/topics/registries/)

直接执行 `helm push`报错如下 `helm push defaulting to oci:// `，对应 [issue](https://github.com/chartmuseum/helm-push/pull/110) 参考，好像是本地要启动一个注册中心，因为我采用的k8s最新的不是使用docker，就没弄，我发现使用 `helm cm-push`可以直接推送成功，就未做尝试

感觉启动一个注册中心，`helm push`就会推送到本地仓库，仅猜测，待后续验证

```shell
# helme cm-push 待推送chart 仓库名
helm cm-push nginx-0.1.1.tgz harbor		# 推送压缩包
helm cm-push nginx-0.1.1/ harbor		# 推送文件夹
```

# 其他指令

[参考](https://blog.csdn.net/twingao/article/details/104282223)

#### helm repo list

```shell
NAME            URL                                            
helm-hosted     http://nexushost.xxx.x/repository/helm-hosted/
harbor          http://harbor.xxx.com/chartrepo/xxx        
```

### helm search repo

```shell
$ helm search repo nginx
NAME                    CHART VERSION   APP VERSION     DESCRIPTION                
harbor/nginx            0.1.0           1.16.0          A Helm chart for Kubernetes
helm-hosted/nginx       0.1.0           1.16.0          A Helm chart for Kubernetes
```

### helm install

通过改指令可以直接使用chart模板自动渲染需要k8s部署的yaml文件，还可以带参数 -key=value 的形式镜像覆盖默认值

```shell
# 从远程harbor charts repo安装
helm install nginx harbor/nginx # nginx 这是命名，必须的，要不然要自动产生名字--generate-name

# 从本地目录或压缩文件安装
helm install nginx-0.1.0.tgz

# 执行安装返回参考
NAME: nginx
LAST DEPLOYED: Tue Jul  5 17:10:50 2022
NAMESPACE: default
STATUS: deployed
REVISION: 1
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=nginx,app.kubernetes.io/instance=nginx" -o jsonpath="{.items[0].metadata.name}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl --namespace default port-forward $POD_NAME 8080:80
```

### helm list

```shell
NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
nginx   default         1               2022-07-05 17:10:50.607565199 +0800 CST deployed        nginx-0.1.0     1.16.0    
```

### helm uninstall

```shell
release "nginx" uninstalled	# 如果有namespace，也需要加上
```

### helm packge

```shell
$ helm package hello-helm	# 基于自己写的chart打包
Successfully packaged chart and saved it to: /root/course/kubeadm/helm/hello-helm-0.1.0.tgz
```

