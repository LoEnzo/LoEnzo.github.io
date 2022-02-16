---
title: 泛域名证书申请
tags:
 - SSL
 - domain
categories:
 - StudyNotes
date: 2022-02-15
---

::: tip

正常一个证书只能匹配一个域名，个人申请阿里云服务器、免费域名，搭建多个服务，需要通过nginx配置多个子域名来进行访问，且需要支持https，所以泛域名证书应运而生，一个证书可以配套多个域名生效。

:::

<!-- more -->

# 泛域名证书申请

* Let's Encrypt
  * [Let's Encrypt](https://letsencrypt.osfipin.com/)：免费证书申请，支持泛域名，

    * 手动方式：手动申请、下载，上传到服务器使用即可
    * 自动方式：使用 Certbot 工具自动申请证书、续期，自行搜索docker方式， certbot-auto 已经过时废弃了；其他方式 [letscertbot](https://github.com/jinhucheung/letscertbot)

    

  * [Let's Encrypt 在线文档](https://www.yuque.com/osfipin/letsencrypt/uslilx)

* acme.sh 

  * [acme.sh](https://github.com/acmesh-official/acme.sh)：使用 acme.sh 自动申请泛域名证书
  * [不同平台需要的AccessKeyID、AccessKeySecret配置参考](https://github.com/acmesh-official/acme.sh/wiki/dnsapi)
    * [阿里云](https://usercenter.console.aliyun.com/)
    * [dnspod](https://console.dnspod.cn/account/token/apikey)
  * [参考文档](https://www.jeay.net/server/acme-aliyun-cer.html)（未成功，有报错，自行尝试）

  ```shell
  # 安装acme.sh
  curl https://get.acme.sh | sh
  
  # 根据自己服务器配置AccessKey ID和AccessKey Secret，不同平台进行的域名解析需要的值不一样
  # 阿里云
  export Ali_Key="刚刚的AccessKey ID"
  export Ali_Secret="刚刚的AccessKey Secret"
  
  # dnspod
  export DP_Id="1234"
  export DP_Key="sADDsdasdgdsf"
  
  # dnspod
  
  
  ~/.acme.sh/acme.sh --issue --dns dns_ali -d lmzg.com -d *.lmzg.com # 阿里云
  ~/.acme.sh/acme.sh --issue --dns dns_dp -d lmzg.com -d *.lmzg.com  # dnspod
  
  # 更新证书
  acme.sh --renew -d example.com --force
  acme.sh --renew -d example.com --force --ecc # ecc证书
  ```

  





