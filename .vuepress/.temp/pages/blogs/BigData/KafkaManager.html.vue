<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h2 id="安装启动" tabindex="-1"><a class="header-anchor" href="#安装启动" aria-hidden="true">#</a> 安装启动</h2>
<ul>
<li>
<p><a href="https://github.com/yahoo/CMAK/releases" target="_blank" rel="noopener noreferrer">下载安装</a></p>
</li>
<li>
<p>修改默认配置，路径是<code v-pre>安装路径/conf/application.conf</code>，修改一下内容：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>kafka-manager.zkhosts=&quot;127.0.0.1:2181&quot;     # zookeeper地址（输错了也能启动，暂时不知道为啥）
cmak.zkhosts=&quot;127.0.0.1:2181&quot;              # zookeeper集群地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动zookeeper、kafka</p>
</li>
<li>
<p>启动命令，指定配置文件，指定java环境，用的jdk8，启动报错，百度说是需要jdk11。默认9000端口，可以在启动的时候修改</p>
<blockquote>
<p>nohup bin/cmak -Dconfig.file=conf/application.conf -java-home /usr/lib/jvm/java-11-openjdk-amd64 &amp;</p>
<p>可以追加  -Dhttp.port=9000，修改为其他端口，不添加默认为9000</p>
</blockquote>
</li>
<li>
<p><a href="https://blog.csdn.net/u011089412/article/details/87895652" target="_blank" rel="noopener noreferrer">面板指令详细参考</a></p>
</li>
</ul>
<h2 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h2>
<ol>
<li>添加节点</li>
</ol>
<p><img src="@source/blogs/BigData/images/kafkaManager/km01.png" alt="image-20200909161130142"></p>
<ol start="2">
<li>成功显示</li>
</ol>
<p><img src="@source/blogs/BigData/images/kafkaManager/km02.png" alt="image-20200909161532684"></p>
<ol start="3">
<li>详细面板</li>
</ol>
<p><img src="@source/blogs/BigData/images/kafkaManager/km03.png" alt="image-20200909161634274"></p>
<h2 id="添加节点踩坑" tabindex="-1"><a class="header-anchor" href="#添加节点踩坑" aria-hidden="true">#</a> 添加节点踩坑</h2>
<ol>
<li>添加节点报错：</li>
</ol>
<blockquote>
<p>Yikes! KeeperErrorCode = Unimplemented for /kafka-manager/mutex Try again.</p>
</blockquote>
<p>原因是zookpeer版本太低，升级版本即可，详细看zookeeper章节</p>
<ol start="2">
<li>启动报错</li>
</ol>
<blockquote>
<p>java.io.IOException: No snapshot found, but there are log entries. Something i</p>
</blockquote>
<p>这个错是在启动zk是恢复数据报错的，因为之前的data全是我3.4.8版本的数据，现在启动3.5.5恢复这个数据就报错了</p>
<p>删除 zookeeper 配置里面保存data和log文件下的数据，</p>
<ol start="3">
<li>节点已经存在</li>
</ol>
<blockquote>
<p>Yikes! requirement failed: Cluster already exists</p>
</blockquote>
<p>之前创建都没有成功，不知道为什么报错，但是换了名字，就可以，同时可以看到之前节点名称</p>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<p>kafka开启JMX后，原有指令查看、创建topic、生产者、消费者都会报错，感觉后续操作都转移到<code v-pre>kafka manager</code>web ui 界面来处理了</p>
<blockquote>
<p>Error: Exception thrown by the agent : java.rmi.server.ExportException: Port already in use: 9988; nested exception is:</p>
</blockquote>
</div></template>


