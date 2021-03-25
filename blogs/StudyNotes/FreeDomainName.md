---
title: 免费域名申请
tags:
 - domain
 - Valine
categories:
 - StudyNotes
date: 2020-07-10

---

::: tip

免费域名申请，[freenom](https://my.freenom.com/)，申请的域名是没有进行备案的，自带DNS解析速度较慢，搭配[dnspod](https://www.dnspod.cn/)进行解析；

运用免费域名搭建 Valine Admin后台搭建，切换国际版，国际版的云引擎不需要域名备案

:::

<!-- more -->

### **[详细教程](https://vuepress-theme-reco.recoluan.com/views/other/valine-admin.html)**



#### 域名申请：

[**freenom**](https://my.freenom.com/)

可以用google账号直接登陆，邮箱确定不再赘述，`freenom` 提供 `tk`、`ml`、`cf`、`ga`、`gq` 五种后缀的免费域名；

检测可用性，然后添加订单，时间选择12个月，是免费的。

成功后，在`Service`下，`My Domain`进入管理；

可以看到你购买的免费域名都是**激活**状态，点击后面的**Manage Domain**可以设置域名解析和DNS服务器

点击`Management Tools `下`Nameservers`

添加`Nameserver `



#### **域名解析，配置别名**

`freenom`自带解析较差，改用[dnspod](https://www.dnspod.cn/)

点击右上角控制台，邮箱账号注册，不再赘述；

进入后，点击左边目录，`DNS解析`->`我的域名`->`添加域名`

点击自己的域名，里面已经有的两条`NS`记录类型的的默认记录值，例如`f1g1ns1.dnspod.net`,`f1g1ns2.dnspod.net.`

将这两条地址添加到`freenom` 的`Nameserver`中，返回dnspod刷新即可

**Valine Admin 后台评论管理 自定义域名配置**

| 主机记录 | 默认类型 | 线路类型 | 记录值                            | TTL   | 备注      |
| -------- | -------- | -------- | --------------------------------- | ----- | --------- |
| @        | CNAME    | 默认     | j1uq1gtv.us-w1-cname.avosapps.us. | 600   | 对应cname |
| @        | NS       | 默认     | f1g1ns1.dnspod.net.               | 86400 |           |
| @        | NS       | 默认     | f1g1ns2.dnspod.net.               | 86400 |           |

**github page 自定义域名配置**

| 主机记录 | 默认类型 | 线路类型 | 记录值              | TTL   | 备注                    |
| -------- | -------- | -------- | ------------------- | ----- | ----------------------- |
| @        | www      | 默认     | loenzo.github.io.   | 600   | github page对应域名地址 |
| @        | NS       | 默认     | f1g1ns1.dnspod.net. | 86400 |                         |
| @        | NS       | 默认     | f1g1ns2.dnspod.net. | 86400 |                         |
| @        | A        | 默认     | 185.199.108.153     | 600   | github.io对应的ip地址   |
| @        | A        | 默认     | 185.199.109.153     | 600   |                         |
| @        | A        | 默认     | 185.199.110.153     | 600   |                         |
| @        | A        | 默认     | 185.199.111.153     | 600   |                         |
| @        | A        | 默认     | 185.199.112.153     | 600   |                         |



#### **Valine Admin后台搭建**

[Leancloud](https://www.leancloud.cn/)注册登陆，

进入后，切换国际版本，配置好邮箱，电话号码，（电话号码电信一直收不到，联通可以，不知道为什么）；

配置完成后，就可以快速创建**开发版**应用了；

在`设置`->`域名绑定`->`云引擎域名`，输入自己申请的免费域名即可，

验证通过后，它会要求你在申请运行商的节点配置cname别名，例如` j1uq1gtv.us-w1-cname.avosapps.us`

因为我们的域名解析改用了`dnspod`，可以在这里直接再添加一条别名即可，添加完成了，等到验证通过即可；

**后台会容易休眠**

加入定时任务，感觉没生效，报错`因流控原因,通过定时任务唤醒体验版实例失败,建议升级至标准版云引擎实例避免休眠`

**解决参考方案：**

* [cron-job](https://blog.hclonely.com/posts/ac04080d/)，[注册地址](https://cron-job.org/en/signup/)，未尝试，配置麻烦
* [Ajax请求唤醒](https://crosschannel.cc/daily/valine-admin-autoAwaken.html)，未尝试
* [GitHub+Actions缺点](https://www.antmoe.com/posts/ff6aef7b/index.html)，原理上，githubActions唤醒一次，其他由LeanCloud定时任务唤醒，经过尝试，定时任务也会有流控问题，可以直接换成githubActions 每29分钟发送一条请求到后台即可，这样会造成commit提交次数过多，强迫症勿用。
* 云监控系统也能唤醒LeanCloud，尝试 dnspod 添加监控，感觉可以，缺点：默认10分钟/次，浪费流量，占用CPU资源，放弃，鸡肋。

**最简单的githubAction唤醒valine-admin**

```yaml
name: 'LeanCloud Self Wake'

 # 触发条件
on:
  push:
  watch:
    types: [started]
  schedule:
    - cron: '*/29 23-23 * * ?'    # 北京时间 7:00 - 7:59，每 29 分钟触发一次
    - cron: '*/29 0-15 * * ?'     # 北京时间 8:00 - 23:59，每 29 分钟触发一次

jobs:
  curl-my-site:
     runs-on: ubuntu-latest
     steps:
       - name: 'xecute command'
         env:
           MY_SITE: ${{ secrets.SITE }}
         # 向站点发送 GET 请求
         run: |                                   
           curl $MY_SITE
```

