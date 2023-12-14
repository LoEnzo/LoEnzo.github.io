<template><div><p>::: tip</p>
<p>Grafana是一个跨平台的开源的度量分析和可视化工具，可以通过将采集的数据查询然后可视化的展示，并及时通知。结合插件，可以快速灵活的展示数据，支持多数据源，混合展示，通知报警等特点。</p>
<p>:::</p>
<!-- more -->
<h2 id="安装启动" tabindex="-1"><a class="header-anchor" href="#安装启动" aria-hidden="true">#</a> 安装启动</h2>
<ul>
<li>
<p><a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">下载安装</a></p>
</li>
<li>
<p><a href="https://grafana.com/docs/grafana/latest/installation/rpm/" target="_blank" rel="noopener noreferrer">官方文档</a></p>
</li>
<li>
<p>yum，apt等方式安装，直接<code v-pre>sudo service grafana-server start</code>启动</p>
</li>
<li>
<p>压缩包安装，添加<code v-pre>安装目录/bin</code>进环境变量，以配置文件方式启动，默认端口3000</p>
<p><code v-pre>nohup grafana-server -homepath=&quot;/opt/app/lab/grafana-6.3.2&quot; &amp;</code></p>
</li>
</ul>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p><strong>特点：</strong></p>
<ul>
<li>
<p>展示方式：快速灵活的客户端图表，面板插件有许多不同方式的可视化指标和日志，官方库中具有丰富的仪表盘插件，比如热图、折线图、图表等多种展示方式；</p>
</li>
<li>
<p>数据源：Graphite，InfluxDB，OpenTSDB，Prometheus，Elasticsearch，CloudWatch和KairosDB等；</p>
</li>
<li>
<p>通知提醒：以可视方式定义最重要指标的警报规则，Grafana将不断计算并发送通知，在数据达到阈值时通过Slack、PagerDuty等获得通知；</p>
</li>
<li>
<p>混合展示：在同一图表中混合使用不同的数据源，可以基于每个查询指定数据源，甚至自定义数据源；</p>
</li>
<li>
<p>注释：使用来自不同数据源的丰富事件注释图表，将鼠标悬停在事件上会显示完整的事件元数据和标记；</p>
</li>
<li>
<p>过滤器：Ad-hoc过滤器允许动态创建新的键/值过滤器，这些过滤器会自动应用于使用该数据源的所有查询。</p>
</li>
</ul>
<p><strong>简单使用：</strong></p>
<ul>
<li>启动服务，浏览器登陆，默认<code v-pre>localhost:3000</code>，端口配置可改，默认用户名密码<code v-pre>admin</code>；</li>
</ul>
<h2 id="grafana-inflexdb" tabindex="-1"><a class="header-anchor" href="#grafana-inflexdb" aria-hidden="true">#</a> grafana+inflexDB</h2>
<p>在设置中，添加数据源，选择数据库，进行基本的配置即可，</p>
<p><img src="@source/blogs/BigData/images/grafana/grafana02.png" alt="image-20200822190425269"></p>
<h4 id="dashboard-面板配置" tabindex="-1"><a class="header-anchor" href="#dashboard-面板配置" aria-hidden="true">#</a> Dashboard（面板配置）</h4>
<p><img src="@source/blogs/BigData/images/grafana/grafana01.png" alt="image-20200822190144381"></p>
<h4 id="主要配置项说明" tabindex="-1"><a class="header-anchor" href="#主要配置项说明" aria-hidden="true">#</a> 主要配置项说明</h4>
<table>
<thead>
<tr>
<th style="text-align:left">配置项</th>
<th style="text-align:left">的说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">DataSource</td>
<td style="text-align:left">选择Grafana已配置的数据源</td>
</tr>
<tr>
<td style="text-align:left">FROM-Default</td>
<td style="text-align:left">默认Schema，保持不变即可</td>
</tr>
<tr>
<td style="text-align:left">FROM-measurement</td>
<td style="text-align:left">对应的InfluxDB的表名</td>
</tr>
<tr>
<td style="text-align:left">WHERE</td>
<td style="text-align:left">WHERE条件，根据自己需求选择</td>
</tr>
<tr>
<td style="text-align:left">SELECT-Field</td>
<td style="text-align:left">对应选的字段，可根据需求增减</td>
</tr>
<tr>
<td style="text-align:left">SELECT-mean()</td>
<td style="text-align:left">选择的字段对应的InfluxDB的函数</td>
</tr>
<tr>
<td style="text-align:left">GroupBY-time()</td>
<td style="text-align:left">根据时间分组</td>
</tr>
<tr>
<td style="text-align:left">GROUPBY-fill()</td>
<td style="text-align:left">当不存在数据时，以null为默认值填充</td>
</tr>
</tbody>
</table>
<p>也可以直接点击后侧的编辑按钮，编写SQL语句即可</p>
<p>往数据库插入数据即可看到变化</p>
<p><img src="@source/blogs/BigData/images/grafana/grafana03.png" alt="image-20200822190659534"></p>
<h2 id="密码修改" tabindex="-1"><a class="header-anchor" href="#密码修改" aria-hidden="true">#</a> 密码修改</h2>
<p>通过<code v-pre>shell</code>指令全局找<code v-pre>grafana.db</code>的位置，然后使用<code v-pre>sqlites</code> 修改密码，<code v-pre>sqlites</code>命令无法使用的话，根据提示先安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 找grafana.db文件位置
find / -name &quot;grafana.db&quot;

# 查看数据库中包含的表
.tables

# 查询用户表
select * from user;

# 重置admin用户的默认密码为admin
update user set password = '59acf18b94d7eb0694c61e60ce44c110c7a683ac6a8f09580d626f90f4a242000746579358d77dd9e570e83fa24faa88a8a6', salt = 'F3FAxVm33R' where login = 'admin';

#退出sqlite3
.exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


