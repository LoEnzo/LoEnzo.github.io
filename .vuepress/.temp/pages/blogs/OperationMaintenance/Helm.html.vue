<template><div><p>::: tip</p>
<p>Helm是Kubernetes的包管理工具，如果比作操作系统，那么Helm就好比yum，apt-get，homebrew。使用Helm chart可以方便我们部署和管理自己的应用。Helm 安装 charts 到 Kubernetes 集群中，每次安装都会创建一个新的 release。Helm 本质就是让 K8s 的应用管理（Deployment,Service 等 ) 可配置，能动态生成。通过动态生成 K8s 资源清 单文件（deployment.yaml，service.yaml）。然后调用 Kubectl 自动执行 K8s 资源部署。</p>
<p>:::</p>
<!-- more -->
<h1 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h1>
<p><strong>文档地址</strong></p>
<ul>
<li><a href="https://github.com/helm/helm/releases" target="_blank" rel="noopener noreferrer">github_release</a>，直接下载，当前使用<a href="https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz" target="_blank" rel="noopener noreferrer">v3.9.0</a></li>
<li><a href="https://helm.sh/zh/docs/" target="_blank" rel="noopener noreferrer">官方文档</a></li>
</ul>
<p><strong>版本参考</strong></p>
<p>::: detail Helm和对应支持的Kubernetes版本</p>
<table>
<thead>
<tr>
<th style="text-align:left">Helm 版本</th>
<th style="text-align:left">支持的 Kubernetes 版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3.7.x</td>
<td style="text-align:left">1.22.x - 1.19.x</td>
</tr>
<tr>
<td style="text-align:left">3.6.x</td>
<td style="text-align:left">1.21.x - 1.18.x</td>
</tr>
<tr>
<td style="text-align:left">3.5.x</td>
<td style="text-align:left">1.20.x - 1.17.x</td>
</tr>
<tr>
<td style="text-align:left">3.4.x</td>
<td style="text-align:left">1.19.x - 1.16.x</td>
</tr>
<tr>
<td style="text-align:left">3.3.x</td>
<td style="text-align:left">1.18.x - 1.15.x</td>
</tr>
<tr>
<td style="text-align:left">3.2.x</td>
<td style="text-align:left">1.18.x - 1.15.x</td>
</tr>
<tr>
<td style="text-align:left">3.1.x</td>
<td style="text-align:left">1.17.x - 1.14.x</td>
</tr>
<tr>
<td style="text-align:left">3.0.x</td>
<td style="text-align:left">1.16.x - 1.13.x</td>
</tr>
<tr>
<td style="text-align:left">2.16.x</td>
<td style="text-align:left">1.16.x - 1.15.x</td>
</tr>
<tr>
<td style="text-align:left">2.15.x</td>
<td style="text-align:left">1.15.x - 1.14.x</td>
</tr>
<tr>
<td style="text-align:left">2.14.x</td>
<td style="text-align:left">1.14.x - 1.13.x</td>
</tr>
<tr>
<td style="text-align:left">2.13.x</td>
<td style="text-align:left">1.13.x - 1.12.x</td>
</tr>
<tr>
<td style="text-align:left">2.12.x</td>
<td style="text-align:left">1.12.x - 1.11.x</td>
</tr>
<tr>
<td style="text-align:left">2.11.x</td>
<td style="text-align:left">1.11.x - 1.10.x</td>
</tr>
<tr>
<td style="text-align:left">2.10.x</td>
<td style="text-align:left">1.10.x - 1.9.x</td>
</tr>
<tr>
<td style="text-align:left">2.9.x</td>
<td style="text-align:left">1.10.x - 1.9.x</td>
</tr>
<tr>
<td style="text-align:left">2.8.x</td>
<td style="text-align:left">1.9.x - 1.8.x</td>
</tr>
<tr>
<td style="text-align:left">2.7.x</td>
<td style="text-align:left">1.8.x - 1.7.x</td>
</tr>
<tr>
<td style="text-align:left">2.6.x</td>
<td style="text-align:left">1.7.x - 1.6.x</td>
</tr>
<tr>
<td style="text-align:left">2.5.x</td>
<td style="text-align:left">1.6.x - 1.5.x</td>
</tr>
<tr>
<td style="text-align:left">2.4.x</td>
<td style="text-align:left">1.6.x - 1.5.x</td>
</tr>
<tr>
<td style="text-align:left">2.3.x</td>
<td style="text-align:left">1.5.x - 1.4.x</td>
</tr>
<tr>
<td style="text-align:left">2.2.x</td>
<td style="text-align:left">1.5.x - 1.4.x</td>
</tr>
<tr>
<td style="text-align:left">2.1.x</td>
<td style="text-align:left">1.5.x - 1.4.x</td>
</tr>
<tr>
<td style="text-align:left">2.0.x</td>
<td style="text-align:left">1.4.x - 1.3.x</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p><strong>安装</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tar -zxvf harbor-offline-installer-v3.9.0.tgz

mv linux-amd64/helm /usr/local/bin/helm

helm version	# 有返回即安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1>
<h3 id="添加仓库" tabindex="-1"><a class="header-anchor" href="#添加仓库" aria-hidden="true">#</a> 添加仓库</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>helm repo add bitnami https://charts.bitnami.com/bitnami

# 添加私有harbor仓库
helm repo add harbor http://harbor.xxx.com/chartrepo/xxx --username=admin --password=Harbor12345

# 私有harbor仓库默认没有helm chart，重新安装harbor后，直接刷新即可，harbor安装查看其他文档,安装完成后即可看到 helm chart，可以在线上传，也可以
./install.sh  --with-chartmuseum`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helm-push-插件安装" tabindex="-1"><a class="header-anchor" href="#helm-push-插件安装" aria-hidden="true">#</a> helm push 插件安装</h2>
<ul>
<li>
<p>在线安装：<code v-pre>helm plugin install https://github.com/chartmuseum/helm-push</code></p>
</li>
<li>
<p>离线安装： 下载最新release，当前使用 <a href="https://github.com/chartmuseum/helm-push" target="_blank" rel="noopener noreferrer">0.10.2</a></p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ helm env
HELM_BIN=&quot;helm&quot;
HELM_DEBUG=&quot;false&quot;
HELM_KUBEAPISERVER=&quot;&quot;
HELM_KUBECONTEXT=&quot;&quot;
HELM_KUBETOKEN=&quot;&quot;
HELM_NAMESPACE=&quot;default&quot;

HELM_PLUGINS=&quot;/root/.local/share/helm/plugins&quot;					# 注意下面这行是插件所在位置
HELM_REGISTRY_CONFIG=&quot;/root/.config/helm/registry.json&quot;
HELM_REPOSITORY_CACHE=&quot;/root/.cache/helm/repository&quot;
HELM_REPOSITORY_CONFIG=&quot;/root/.config/helm/repositories.yaml&quot;	# 添加仓库后保存的所有仓库相关配置的记录文件

$ mkdir /root/.local/share/helm/plugins/helm-push

$ cp helm-push_0.10.2_linux_amd64.tar.gz /root/.local/share/helm/plugins/helm-push

$ tar -zxvf /root/.local/share/helm/plugins/helm-push/helm-push_0.10.2_linux_amd64.tar.gz 

$ helm plugin list
[root@master1 nginx]# helm plugin list
NAME	VERSION	DESCRIPTION                      
push	0.10.2  	Push	 chart package to ChartMuseum
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helm-push-使用" tabindex="-1"><a class="header-anchor" href="#helm-push-使用" aria-hidden="true">#</a> helm push 使用</h2>
<p>V3.8.0版本后启动了OCI注册中心，<a href="https://helm.sh/zh/docs/topics/registries/" target="_blank" rel="noopener noreferrer">详细查看</a></p>
<p>直接执行 <code v-pre>helm push</code>报错如下 <code v-pre>helm push defaulting to oci:// </code>，对应 <a href="https://github.com/chartmuseum/helm-push/pull/110" target="_blank" rel="noopener noreferrer">issue</a> 参考，好像是本地要启动一个注册中心，因为我采用的k8s最新的不是使用docker，就没弄，我发现使用 <code v-pre>helm cm-push</code>可以直接推送成功，就未做尝试</p>
<p>感觉启动一个注册中心，<code v-pre>helm push</code>就会推送到本地仓库，仅猜测，待后续验证</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># helme cm-push 待推送chart 仓库名
helm cm-push nginx-0.1.1.tgz harbor		# 推送压缩包
helm cm-push nginx-0.1.1/ harbor		# 推送文件夹
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令" aria-hidden="true">#</a> 其他指令</h1>
<p><a href="https://blog.csdn.net/twingao/article/details/104282223" target="_blank" rel="noopener noreferrer">参考</a></p>
<h4 id="helm-repo-list" tabindex="-1"><a class="header-anchor" href="#helm-repo-list" aria-hidden="true">#</a> helm repo list</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>NAME            URL                                            
helm-hosted     http://nexushost.xxx.x/repository/helm-hosted/
harbor          http://harbor.xxx.com/chartrepo/xxx        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-search-repo" tabindex="-1"><a class="header-anchor" href="#helm-search-repo" aria-hidden="true">#</a> helm search repo</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ helm search repo nginx
NAME                    CHART VERSION   APP VERSION     DESCRIPTION                
harbor/nginx            0.1.0           1.16.0          A Helm chart for Kubernetes
helm-hosted/nginx       0.1.0           1.16.0          A Helm chart for Kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-install" tabindex="-1"><a class="header-anchor" href="#helm-install" aria-hidden="true">#</a> helm install</h3>
<p>通过改指令可以直接使用chart模板自动渲染需要k8s部署的yaml文件，还可以带参数 -key=value 的形式镜像覆盖默认值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 从远程harbor charts repo安装
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
  export POD_NAME=$(kubectl get pods --namespace default -l &quot;app.kubernetes.io/name=nginx,app.kubernetes.io/instance=nginx&quot; -o jsonpath=&quot;{.items[0].metadata.name}&quot;)
  echo &quot;Visit http://127.0.0.1:8080 to use your application&quot;
  kubectl --namespace default port-forward $POD_NAME 8080:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-list" tabindex="-1"><a class="header-anchor" href="#helm-list" aria-hidden="true">#</a> helm list</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
nginx   default         1               2022-07-05 17:10:50.607565199 +0800 CST deployed        nginx-0.1.0     1.16.0    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-uninstall" tabindex="-1"><a class="header-anchor" href="#helm-uninstall" aria-hidden="true">#</a> helm uninstall</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ helm uninstall nginx
release &quot;nginx&quot; uninstalled	# 如果有namespace，也需要加上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="helm-packge" tabindex="-1"><a class="header-anchor" href="#helm-packge" aria-hidden="true">#</a> helm packge</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ helm package hello-helm	# 基于自己写的chart打包
Successfully packaged chart and saved it to: /root/course/kubeadm/helm/hello-helm-0.1.0.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


