<template><div><p>::: tip</p>
<p>免费域名申请，<a href="https://my.freenom.com/" target="_blank" rel="noopener noreferrer">freenom</a>，申请的域名是没有进行备案的，自带DNS解析速度较慢，搭配<a href="https://www.dnspod.cn/" target="_blank" rel="noopener noreferrer">dnspod</a>进行解析；</p>
<p>运用免费域名搭建 Valine Admin后台搭建，切换国际版，国际版的云引擎不需要域名备案</p>
<p>:::</p>
<!-- more -->
<h3 id="详细教程" tabindex="-1"><a class="header-anchor" href="#详细教程" aria-hidden="true">#</a> <strong><a href="https://vuepress-theme-reco.recoluan.com/views/other/valine-admin.html" target="_blank" rel="noopener noreferrer">详细教程</a></strong></h3>
<h4 id="域名申请" tabindex="-1"><a class="header-anchor" href="#域名申请" aria-hidden="true">#</a> 域名申请：</h4>
<p><a href="https://my.freenom.com/" target="_blank" rel="noopener noreferrer"><strong>freenom</strong></a></p>
<p>可以用google账号直接登陆，邮箱确定不再赘述，<code v-pre>freenom</code> 提供 <code v-pre>tk</code>、<code v-pre>ml</code>、<code v-pre>cf</code>、<code v-pre>ga</code>、<code v-pre>gq</code> 五种后缀的免费域名；</p>
<p>检测可用性，然后添加订单，时间选择12个月，是免费的。</p>
<p>成功后，在<code v-pre>Service</code>下，<code v-pre>My Domain</code>进入管理；</p>
<p>可以看到你购买的免费域名都是<strong>激活</strong>状态，点击后面的<strong>Manage Domain</strong>可以设置域名解析和DNS服务器</p>
<p>点击<code v-pre>Management Tools </code>下<code v-pre>Nameservers</code></p>
<p>添加<code v-pre>Nameserver </code></p>
<h4 id="域名解析-配置别名" tabindex="-1"><a class="header-anchor" href="#域名解析-配置别名" aria-hidden="true">#</a> <strong>域名解析，配置别名</strong></h4>
<p><code v-pre>freenom</code>自带解析较差，改用<a href="https://www.dnspod.cn/" target="_blank" rel="noopener noreferrer">dnspod</a></p>
<p>点击右上角控制台，邮箱账号注册，不再赘述；</p>
<p>进入后，点击左边目录，<code v-pre>DNS解析</code>-&gt;<code v-pre>我的域名</code>-&gt;<code v-pre>添加域名</code></p>
<p>点击自己的域名，里面已经有的两条<code v-pre>NS</code>记录类型的的默认记录值，例如<code v-pre>f1g1ns1.dnspod.net</code>,<code v-pre>f1g1ns2.dnspod.net.</code></p>
<p>将这两条地址添加到<code v-pre>freenom</code> 的<code v-pre>Nameserver</code>中，返回dnspod刷新即可</p>
<p><strong>Valine Admin 后台评论管理 自定义域名配置</strong></p>
<table>
<thead>
<tr>
<th>主机记录</th>
<th>默认类型</th>
<th>线路类型</th>
<th>记录值</th>
<th>TTL</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@</td>
<td>CNAME</td>
<td>默认</td>
<td>j1uq1gtv.us-w1-cname.avosapps.us.</td>
<td>600</td>
<td>对应cname</td>
</tr>
<tr>
<td>@</td>
<td>NS</td>
<td>默认</td>
<td>f1g1ns1.dnspod.net.</td>
<td>86400</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>NS</td>
<td>默认</td>
<td>f1g1ns2.dnspod.net.</td>
<td>86400</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>github page 自定义域名配置</strong></p>
<table>
<thead>
<tr>
<th>主机记录</th>
<th>默认类型</th>
<th>线路类型</th>
<th>记录值</th>
<th>TTL</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>@</td>
<td>www</td>
<td>默认</td>
<td>loenzo.github.io.</td>
<td>600</td>
<td>github page对应域名地址</td>
</tr>
<tr>
<td>@</td>
<td>NS</td>
<td>默认</td>
<td>f1g1ns1.dnspod.net.</td>
<td>86400</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>NS</td>
<td>默认</td>
<td>f1g1ns2.dnspod.net.</td>
<td>86400</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>A</td>
<td>默认</td>
<td>185.199.108.153</td>
<td>600</td>
<td>github.io对应的ip地址</td>
</tr>
<tr>
<td>@</td>
<td>A</td>
<td>默认</td>
<td>185.199.109.153</td>
<td>600</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>A</td>
<td>默认</td>
<td>185.199.110.153</td>
<td>600</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>A</td>
<td>默认</td>
<td>185.199.111.153</td>
<td>600</td>
<td></td>
</tr>
<tr>
<td>@</td>
<td>A</td>
<td>默认</td>
<td>185.199.112.153</td>
<td>600</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="valine-admin后台搭建" tabindex="-1"><a class="header-anchor" href="#valine-admin后台搭建" aria-hidden="true">#</a> <strong>Valine Admin后台搭建</strong></h4>
<p><a href="https://www.leancloud.cn/" target="_blank" rel="noopener noreferrer">Leancloud</a>注册登陆，</p>
<p>进入后，切换国际版本，配置好邮箱，电话号码，（电话号码电信一直收不到，联通可以，不知道为什么）；</p>
<p>配置完成后，就可以快速创建<strong>开发版</strong>应用了；</p>
<p>在<code v-pre>设置</code>-&gt;<code v-pre>域名绑定</code>-&gt;<code v-pre>云引擎域名</code>，输入自己申请的免费域名即可，</p>
<p>验证通过后，它会要求你在申请运行商的节点配置cname别名，例如<code v-pre> j1uq1gtv.us-w1-cname.avosapps.us</code></p>
<p>因为我们的域名解析改用了<code v-pre>dnspod</code>，可以在这里直接再添加一条别名即可，添加完成了，等到验证通过即可；</p>
<p><strong>后台会容易休眠</strong></p>
<p>加入定时任务，感觉没生效，报错<code v-pre>因流控原因,通过定时任务唤醒体验版实例失败,建议升级至标准版云引擎实例避免休眠</code></p>
<p><strong>解决参考方案：</strong></p>
<ul>
<li><a href="https://blog.hclonely.com/posts/ac04080d/" target="_blank" rel="noopener noreferrer">cron-job</a>，<a href="https://cron-job.org/en/signup/" target="_blank" rel="noopener noreferrer">注册地址</a>，未尝试，配置麻烦</li>
<li><a href="https://crosschannel.cc/daily/valine-admin-autoAwaken.html" target="_blank" rel="noopener noreferrer">Ajax请求唤醒</a>，未尝试</li>
<li><a href="https://www.antmoe.com/posts/ff6aef7b/index.html" target="_blank" rel="noopener noreferrer">GitHub+Actions缺点</a>，原理上，githubActions唤醒一次，其他由LeanCloud定时任务唤醒，经过尝试，定时任务也会有流控问题，可以直接换成githubActions 每29分钟发送一条请求到后台即可，这样会造成commit提交次数过多，强迫症勿用。</li>
<li>云监控系统也能唤醒LeanCloud，尝试 dnspod 添加监控，感觉可以，缺点：默认10分钟/次，浪费流量，占用CPU资源，放弃，鸡肋。</li>
</ul>
<p><strong>最简单的githubAction唤醒valine-admin</strong></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>name: 'LeanCloud Self Wake'

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


