<template><div><p>::: tip</p>
<p>Linux防火墙，作为公网和内网之间的保护屏障，在保障数据安装性方面有至关重要的作用。常用的防火墙有 firewall，iptables，ufw，centos7开始默认是firewall。</p>
<p><a href="https://www.cnblogs.com/johnnyblog/p/11372561.html" target="_blank" rel="noopener noreferrer">参考一</a></p>
<p>:::</p>
<!-- more -->
<h1 id="firewall" tabindex="-1"><a class="header-anchor" href="#firewall" aria-hidden="true">#</a> firewall</h1>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>systemctl start firewalld.service</code></td>
<td>开启防火墙</td>
</tr>
<tr>
<td><code v-pre>systemctl stop firewalld.service</code></td>
<td>停止防火墙</td>
</tr>
<tr>
<td><code v-pre>systemctl status firewalld</code></td>
<td>查看防火墙设置状态</td>
</tr>
<tr>
<td><code v-pre>systemctl enable firewalld.service</code></td>
<td>开机自动启动</td>
</tr>
<tr>
<td><code v-pre>firewall-cmd --permanent --zone=public --add-port=8080-8081/tcp</code></td>
<td>开放端口永久</td>
</tr>
<tr>
<td><code v-pre>firewall-cmd  --zone=public --add-port=8080-8081/tcp</code></td>
<td>开放端口临时</td>
</tr>
<tr>
<td><code v-pre>systemctl restart firewalld.service</code></td>
<td>重新载入，是配置生效</td>
</tr>
<tr>
<td><code v-pre>firewall-cmd --list-port</code></td>
<td>查看端口</td>
</tr>
</tbody>
</table>
<p>新建规则，指定ip与端口</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>firewall-cmd --permanent --add-rich-rule=&quot;rule family=&quot;ipv4&quot; source address=&quot;192.168.142.166&quot; port protocol=&quot;tcp&quot; port=&quot;5432&quot; accept&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除规则</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>firewall-cmd --permanent --remove-rich-rule=&quot;rule family=&quot;ipv4&quot; source address=&quot;192.168.142.166&quot; port protocol=&quot;tcp&quot; port=&quot;11300&quot; accept&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对指定的ip开放端口段</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>firewall-cmd --permanent --add-rich-rule=&quot;rule family=&quot;ipv4&quot; source address=&quot;192.168.142.166&quot; port protocol=&quot;tcp&quot; port=&quot;30000-31000&quot; accept&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看配置：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>cat /etc/firewalld/zones/public.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: details firewall 端口开放配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;zone&gt;
  &lt;short&gt;Public&lt;/short&gt;
  &lt;description&gt;For use in public areas. You do not trust the other computers on networks to not harm your computer. Only selected incoming connections are accepted.&lt;/description&gt;
  &lt;service name=&quot;dhcpv6-client&quot;/&gt;
  &lt;service name=&quot;ssh&quot;/&gt;
  &lt;port protocol=&quot;tcp&quot; port=&quot;80&quot;/&gt;   # 刚才开发的端口号
  &lt;port protocol=&quot;tcp&quot; port=&quot;8080&quot;/&gt;
&lt;/zone&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h1 id="iptables" tabindex="-1"><a class="header-anchor" href="#iptables" aria-hidden="true">#</a> iptables</h1>
<table>
<thead>
<tr>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>iptables -V</code></td>
<td>查看版本号</td>
</tr>
<tr>
<td>`service iptables start</td>
<td>stop</td>
</tr>
<tr>
<td><code v-pre>service iptables save</code></td>
<td>保存iptables规则</td>
</tr>
<tr>
<td><code v-pre>iptables --list</code></td>
<td>查看iptables规则</td>
</tr>
<tr>
<td><code v-pre>iptables -A INPUT -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT </code></td>
<td>追加规则</td>
</tr>
</tbody>
</table>
</div></template>


