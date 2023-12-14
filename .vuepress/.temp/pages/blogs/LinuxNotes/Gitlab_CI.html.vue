<template><div><p>::: tip</p>
<p>gitlab_CI介绍及简单使用,</p>
<p>:::</p>
<!-- more -->
<h2 id="_1-ci流水线" tabindex="-1"><a class="header-anchor" href="#_1-ci流水线" aria-hidden="true">#</a> 1. CI流水线</h2>
<h2 id="_2-shell脚本" tabindex="-1"><a class="header-anchor" href="#_2-shell脚本" aria-hidden="true">#</a> 2. shell脚本</h2>
<h3 id="_1-访问其他服务器" tabindex="-1"><a class="header-anchor" href="#_1-访问其他服务器" aria-hidden="true">#</a> 1. 访问其他服务器</h3>
<p><strong>主机公钥确认 <code v-pre>StrictHostKeyChecking</code></strong></p>
<ul>
<li>
<p><code v-pre>StrictHostKeyChecking=no</code> 最不安全的级别，当然也没有那么多烦人的提示了，相对安全的内网<strong>测试</strong>时建议使用。如果连接<strong>server</strong>的key在本地不存在，那么就自动添加到文件中（默认是known_hosts），并且给出一个警告。</p>
</li>
<li>
<p><code v-pre>StrictHostKeyChecking=ask</code> 默认的级别，就是出现刚才的提示了。如果连接和key不匹配，给出提示，并拒绝登录。</p>
</li>
<li>
<p><code v-pre>StrictHostKeyChecking=yes</code> 最安全的级别，如果连接与key不匹配，就拒绝连接，不会提示详细信息。</p>
</li>
</ul>
<h3 id="_2-scp跨服务器指令" tabindex="-1"><a class="header-anchor" href="#_2-scp跨服务器指令" aria-hidden="true">#</a> 2. scp跨服务器指令</h3>
<p><strong>scp</strong> 是 secure copy的缩写，scp是linux系统下基于ssh登陆进行安全的远程文件拷贝命令。</p>
<p>linux的 <strong>scp</strong> 命令可以在linux服务器之间复制文件和目录。</p>
<p>3．命令参数：</p>
<table>
<thead>
<tr>
<th>命令参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>-1</td>
<td>强制scp命令使用协议ssh1</td>
</tr>
<tr>
<td>-2</td>
<td>强制scp命令使用协议ssh2</td>
</tr>
<tr>
<td>-4</td>
<td>强制scp命令只使用IPv4寻址</td>
</tr>
<tr>
<td>-6</td>
<td>强制scp命令只使用IPv6寻址</td>
</tr>
<tr>
<td>-B</td>
<td>使用批处理模式（传输过程中不询问传输口令或短语）</td>
</tr>
<tr>
<td>-C</td>
<td>允许压缩。（将-C标志传递给ssh，从而打开压缩功能）</td>
</tr>
<tr>
<td>-p</td>
<td>保留原文件的修改时间，访问时间和访问权限。</td>
</tr>
<tr>
<td>-q</td>
<td>不显示传输进度条。</td>
</tr>
<tr>
<td>-r</td>
<td>递归复制整个目录。</td>
</tr>
<tr>
<td>-v</td>
<td>详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。</td>
</tr>
<tr>
<td>-c</td>
<td>cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。</td>
</tr>
<tr>
<td>-F</td>
<td>ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。</td>
</tr>
<tr>
<td>-i</td>
<td>identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。</td>
</tr>
<tr>
<td>-I</td>
<td>limit 限定用户所能使用的带宽，以Kbit/s为单位。</td>
</tr>
<tr>
<td>-o</td>
<td>ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，</td>
</tr>
<tr>
<td>-P</td>
<td>port 注意是大写的P, port是指定数据传输用到的端口号</td>
</tr>
<tr>
<td>-S</td>
<td>program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项</td>
</tr>
</tbody>
</table>
</div></template>


