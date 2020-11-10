---
title: 利用heroku、OneManager搭建个人的OneDrive云盘映射
tags:
 - heroku
 - OneDrive
categories:
 - StudyNotes
date: 2020-08-09
---

::: tip

利用heroku搭建免费的OneManager，拉取**[GitHub开源网址](https://github.com/qkqpttgf/OneManager-php)**，部署到`heroku`，也可以fork到自己仓库，方便自己修改主题什么的，在`heroku`链接`github`，一个仓库的代码可以支持多个`heroku`应用，也就是说可以设置多个`OneDrive账号`（个人账号30G，另外单独买了个oneDrive账号），然后可以利用`cloudfare`的works功能，自定义域名。

转载自**[元洪博客](https://gyh.im/posts/7386aa8e/#前言)**，

:::

<!-- more -->

## 前言

onemanager是一款强大的OneDrive目录列表程序，支持的功能比OneIndex更多。支持无服务器一键搭建，支持腾讯SCF服务搭建，基本上能用的搭建方式都支持，而且支持OneDrive商业版、OneDrive个人版和世纪互联版。支持多盘绑定，支持访客上传文件，图床模式，可以让访客上传文件做为图床使用，非常的方便。

### 快速开始

注册

GitHub开源网址：https://github.com/qkqpttgf/OneManager-php

进入到github中，可以看到这个醒目的button，这篇文章正是利用heroku搭建免费的onemanager，不需要其他的服务器和主机。
点击那个按钮，进入注册（需要富强，注册引入了google人机验证），qq邮箱已被屏蔽，推荐使用gmail

![images](./images/OneManager/1(0).png)

### 创建app

- 在“App name”填写您的应用名称，“Choose a region”选择一个服务区域选择“United States”。 注意：“App name”填写的应用名称就是您次域名.herokuapp.com的前缀，名称必须以小写字母开头

![images](./images/OneManager/1(1).png)

![images](./images/OneManager/1(2).png)

- 点击“Deploy app”部署应用稍等片刻即可完成初始化。再点击“Manager APP”管理应用程序
- 点击“Setting”设置应用，直接往下拉在“Domains”处可以看到您的次域名（如果您已经填加了信用卡账户已验证，可以绑定自己的域名）点击您的次域名。

![images](./images/OneManager/1(3).png)
![images](./images/OneManager/1(4).png)

### 安装

- 单击此处“Click to install the project”安装OneManager-PHP项目

![images](./images/OneManager/1(5).png)

- 点击“新建API Key”获得API，在“API Key”处点击后面的“Reveal”显示您的API Key，复制API Key粘贴至API Key。“Set admin password”设置管理员密码，点击“确认”。

![images](./images/OneManager/1(6).png)
![images](./images/OneManager/1(7).png)

- 安装完成后登陆➠管理➠设置，添加OneDrive盘。

![images](./images/OneManager/1(8).png)
![images](./images/OneManager/1(9).png)
![images](./images/OneManager/1(10).png)

- 选择“MSC:国际版，自己申请应用ID与机密”，点击“申请应用ID与机密”。申请教育版的OneDrive账户即可申请获取ID和钥密，目前普通帐号也已经可以申请获取应用ID和钥密。**我自己申请没有成功，直接点的确认**

![images](./images/OneManager/1(11).png)
![images](./images/OneManager/1(12).png)
![images](./images/OneManager/1(13).png)

- 将获取的应用机密和应用ID分别填入client_secret和client_id，点击“确认”。之后就会跳转到下买你的界面

![images](./images/OneManager/1(14).png)

### 反向代理

**自选cloudflare节点**

由于heroku不绑定信用卡，就不能自定义域名。我觉得在heroku上绑卡没必要。所以我利用了cloudflare的workers功能实现了自定义域名。

首先你需要把域名添加进cloudflare，有两种方式，一种是通过dns接入，这种方式完全把域名交给cloudflare了。另一方式是通过cloudflare Partners的方式，这种方式可以不用dns接入。我是用的是[萌精灵](https://cdn.moeelf.com/)，详细的cf自选节点方法参见：[cloudflare自选节点](https://gyh.im/posts/f019efb0/)

- 进入萌精灵，登录你的cloudflare账号，添加域名。

  **注意：萌精灵我添加了域名，发现设置还是要回到cloudfare，最后发现先再自己购买的域名商处添加cloudfare的nameserver，等再cloudfare设置workers完成后，再切换回之前的（我用的是DNSPOD），在dnspod处添加一个cname，指向最终添加works，rout路由生的域名*，即可用自定义域名访问**

- 添加好域名后就需要进入[cloudflare](https://www.cloudflare.com/),进入你刚才添加的域名中，找到`workers`->`manager workers`，第一次要叫你设置一个域名`你需要设置的前缀（默认为你邮箱前缀）.workers.dev`

![images](./images/OneManager/1(15).png)

- 点`create a worker`

![images](./images/OneManager/1(16).png)

- 将下面的代码加入左边方框中，注意修改为自己的app名称

```javascript
LispaddEventListener(
    "fetch",event => {
        let url=new URL(event.request.url);     
        url.hostname="应用名称.herokuapp.com";  
        let request=new Request(url,event.request);    
        event. respondWith(       
            fetch(request)    
        )  
    }
)
```

![images](./images/OneManager/1(17).png)

- 完成后返回这里，点击添加`route`

![images](./images/OneManager/1(18).png)

- 添加一个`route`,格式为`前缀.你的域名/*`，比如`pan.gyh.im/*`,worker选择你刚才创建的

![images](./images/OneManager/1(20).png)