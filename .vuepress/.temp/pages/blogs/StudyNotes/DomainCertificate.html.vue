<template><div><p>::: tip</p>
<p>正常一个证书只能匹配一个域名，个人申请阿里云服务器、免费域名，搭建多个服务，需要通过nginx配置多个子域名来进行访问，且需要支持https，所以泛域名证书应运而生，一个证书可以配套多个域名生效。</p>
<p>:::</p>
<!-- more -->
<h1 id="泛域名证书申请" tabindex="-1"><a class="header-anchor" href="#泛域名证书申请" aria-hidden="true">#</a> 泛域名证书申请</h1>
<ul>
<li>
<p>Let's Encrypt</p>
<ul>
<li>
<p><a href="https://letsencrypt.osfipin.com/" target="_blank" rel="noopener noreferrer">Let's Encrypt</a>：免费证书申请，支持泛域名，</p>
<ul>
<li>手动方式：手动申请、下载，上传到服务器使用即可</li>
<li>自动方式：使用 Certbot 工具自动申请证书、续期，自行搜索docker方式， certbot-auto 已经过时废弃了；其他方式 <a href="https://github.com/jinhucheung/letscertbot" target="_blank" rel="noopener noreferrer">letscertbot</a></li>
</ul>
</li>
<li>
<p><a href="https://www.yuque.com/osfipin/letsencrypt/uslilx" target="_blank" rel="noopener noreferrer">Let's Encrypt 在线文档</a></p>
</li>
</ul>
</li>
<li>
<p>acme.sh</p>
<ul>
<li><a href="https://github.com/acmesh-official/acme.sh" target="_blank" rel="noopener noreferrer">acme.sh</a>：使用 acme.sh 自动申请泛域名证书</li>
<li><a href="https://github.com/acmesh-official/acme.sh/wiki/dnsapi" target="_blank" rel="noopener noreferrer">不同平台需要的AccessKeyID、AccessKeySecret配置参考</a>
<ul>
<li><a href="https://usercenter.console.aliyun.com/" target="_blank" rel="noopener noreferrer">阿里云</a></li>
<li><a href="https://console.dnspod.cn/account/token/apikey" target="_blank" rel="noopener noreferrer">dnspod</a></li>
</ul>
</li>
<li><a href="https://www.jeay.net/server/acme-aliyun-cer.html" target="_blank" rel="noopener noreferrer">参考文档</a>（未成功，有报错，自行尝试）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 安装acme.sh
curl https://get.acme.sh | sh

# 根据自己服务器配置AccessKey ID和AccessKey Secret，不同平台进行的域名解析需要的值不一样
# 阿里云
export Ali_Key=&quot;刚刚的AccessKey ID&quot;
export Ali_Secret=&quot;刚刚的AccessKey Secret&quot;

# dnspod
export DP_Id=&quot;1234&quot;
export DP_Key=&quot;sADDsdasdgdsf&quot;

# dnspod


~/.acme.sh/acme.sh --issue --dns dns_ali -d lmzg.com -d *.lmzg.com # 阿里云
~/.acme.sh/acme.sh --issue --dns dns_dp -d lmzg.com -d *.lmzg.com  # dnspod

# 更新证书
acme.sh --renew -d example.com --force
acme.sh --renew -d example.com --force --ecc # ecc证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


