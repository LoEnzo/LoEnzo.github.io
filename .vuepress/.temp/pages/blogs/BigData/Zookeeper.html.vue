<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h2 id="安装启动" tabindex="-1"><a class="header-anchor" href="#安装启动" aria-hidden="true">#</a> 安装启动</h2>
<ul>
<li>
<p><a href="http://mirror.bit.edu.cn/apache/zookeeper/" target="_blank" rel="noopener noreferrer">下载安装，选取带bin.tar.gz</a>，否则启动报错找不到jar包之类的</p>
</li>
<li>
<p>修改环境变量</p>
<blockquote>
<p>export ZOOKEEPER=/opt/app/lab/apache-zookeeper-3.5.8</p>
<p>export PATH=${ZOOKEEPER}/bin:$PATH</p>
</blockquote>
</li>
<li>
<p>修改默认配置，路径conf，复制一份模板用于修改，修改配置</p>
<blockquote>
<p>cp zoo_sample.cfg zoo.cfg</p>
</blockquote>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code># example sakes.
dataDir=/tmp/zookeeper
# 新添加的，路径需要手动创建
dataLogDir=/tmp/zookeeper/log
# the port at which the clients will connect
clientPort=2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动，<code v-pre>start-foreground</code>启动可以看到报错</p>
</li>
<li>
<blockquote>
<p>Usage: ./bin/zkServer.sh {start|start-foreground|stop|restart|status|upgrade|print-cmd}</p>
</blockquote>
</li>
</ul>
<blockquote></blockquote>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h4 id="_1-升级zookeeper" tabindex="-1"><a class="header-anchor" href="#_1-升级zookeeper" aria-hidden="true">#</a> 1. 升级zookeeper</h4>
<p>最开始是用的<code v-pre>kafka</code>自带的<code v-pre>zookeeper</code>配置文件方式启动的，使用<code v-pre>kafka manager</code>的时候报错，百度原因是<code v-pre>zookeeper</code>版本太低了</p>
<p>查看当前<code v-pre>zookeeper</code>版本，默认端口是2181，去官网下载新版本的<code v-pre>zookeeper</code>安装包安装即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>echo stat|nc localhost 2181
Zookeeper version: 3.4.12-e5259e437540f349646870ea94dc2658c4e44b3b, built on 03/27/2018 03:55 GMT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-日志报错" tabindex="-1"><a class="header-anchor" href="#_2-日志报错" aria-hidden="true">#</a> 2. 日志报错</h4>
<blockquote>
<p>Unable to access datadir, exiting abnormally</p>
<p>Snapshot directory has log files. Check if dataLogDir and dataDir configuration is correct</p>
</blockquote>
<p>在执行清除文件的时候，Zookeeper发现当前节点上缺少<code v-pre>snap directory</code>(临时目录)，即缺少<code v-pre>/data/zookeeper/data/version-2</code>，并且在Zookeeper尝试自动创建此目录时也失败了 ( <code v-pre>zookeeper.datadir.autocreate</code> 是<code v-pre>flase</code>) ，最终导致了<code v-pre>exiting abnormally</code>(异常退出）</p>
<p>解决：删除设置的两个目录下的<code v-pre>version-2</code>即可，</p>
</div></template>


