<template><div><p>::: tip</p>
<p>Flume 是一个分布式、可靠、和高可用的海量日志聚合的系统，支持在系统中定制各类数据发送方，通过<strong>监控整个文件目录或者某一个特定文件，用于收集数据</strong>；同时Flume也 提供数据写到各种数据接受方(可定制)的能力，<strong>用于转发数据</strong>。Flume 的易用性在于通过读取配置文件，可以自动收集日志文件，在大数据处理及各种复杂的情况下，flume 经常被用来作为数据处理的工具。</p>
<p>:::</p>
<!-- more -->
<h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h2>
<p><img src="@source/blogs/BigData/images/flume/flume1.png" alt=""></p>
<!-- more -->
<h2 id="安装启动" tabindex="-1"><a class="header-anchor" href="#安装启动" aria-hidden="true">#</a> 安装启动</h2>
<ol>
<li>
<p>命令或下载压缩包安装；</p>
</li>
<li>
<p>添加环境变量：</p>
<p>复制一份<code v-pre>conf/flume.env.sh.template</code>取消<code v-pre>.template</code>后缀，在里面添加系统<code v-pre>JAVA_HOME</code>环境变量；</p>
<p>在系统环境变量里添加<code v-pre>${FLUME_HOME}=flume安装目录</code>，再把bin目录添加到<code v-pre>$FLUME_HOME/bin:$PATH</code>;</p>
</li>
<li>
<p>刷新环境变量，输入<code v-pre>flume-ng version</code>能看到版本号相关信息即安装成功；</p>
</li>
<li>
<p>flume启动命令解析</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 完整命令
nohup flume-ng agent --name agent --conf $FLUME_HOME/conf --conf-file $FLUME_HOME/conf/kafka.properties -Dflume.root.logger=INFO,console &amp;

# 分布解析
flume-ng agent
--name a1         					 				 # 配置文件中设置的a1  a1.sources = r1
-conf $FLUME_HOME/conf   							 # 配置文件的路径
--confi-file $FLUME_HOME/conf/demo.properties		 # 指定配置文件
-Dflume.root.logger=INFO,console					 # 指令启动后控制台输入日志，后台启动可以不加此命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数配置详解" tabindex="-1"><a class="header-anchor" href="#参数配置详解" aria-hidden="true">#</a> 参数配置详解</h2>
<h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3>
<table>
<thead>
<tr>
<th>Flume组件</th>
<th>介绍</th>
<th>理解</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>source</strong></td>
<td>采集日志数据，将采集到的日志数据传输给channel</td>
<td>数据来源的地方</td>
</tr>
<tr>
<td><strong>channel</strong></td>
<td>一个队列，存储source传递过来的数据</td>
<td>数据传输的管道</td>
</tr>
<tr>
<td><strong>sink</strong></td>
<td>从channel中获取数据，将数据输出到目标位置（HDFS、HBase、Source）</td>
<td>数据要传送到那里去</td>
</tr>
<tr>
<td><strong>Event</strong></td>
<td>传输数据的单元，Flume中采集数据并传输的最小单位</td>
<td>数据传输的单位</td>
</tr>
</tbody>
</table>
<h3 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h3>
<p>Flume中常用的Source有<strong>NetCat，Avro，Exec，Spooling Directory，Taildir</strong>，也可以根据业务场景的需要自定义Source,具体介绍如下。</p>
<table>
<thead>
<tr>
<th>Sources</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>NetCat</strong></td>
<td>NetCat Source可以使用TCP和UDP两种协议方式，使用方法基本相同，通过<strong>监听指定的IP和端口来传输数据</strong>，它会将监听到的每一行数据转化成一个Event写入到Channel中。（必须参数以@标示，下类同）</td>
</tr>
<tr>
<td><strong>Avro</strong></td>
<td>不同主机上的Agent通过网络传输数据可使用的Source，一般是接受Avro client的数据，或和是上一级Agent的Avro Sink成对存在。</td>
</tr>
<tr>
<td><strong>Exec</strong></td>
<td>Exec source通过执行给定的Unix命令的传输结果数据，如cat，tail -F等，实时性比较高，但是一旦Agent进程出现问题，可能会导致数据的丢失。</td>
</tr>
<tr>
<td><strong>Spooling Directory</strong></td>
<td>通过监控一个文件夹将新增文件内容转换成Event传输数据，特点是不会丢失数据，使用Spooling Directory Source需要注意的两点是: <br />1)不能对被监控的文件夹下的新增的文件做出任何更改<br />2）新增到监控文件夹的文件名称必须是唯一的。由于是对整个新增文件的监控，<br />Spooling Directory Source的实时性相对较低，不过可以采用对文件高粒度分割达到近似实时。</td>
</tr>
<tr>
<td><strong>Taildir</strong></td>
<td>可以实时的监控指定一个或多个文件中的新增内容，由于该方式将数据的偏移量保存在一个指定的json文件中，即使在Agent挂掉或被kill也不会有数据的丢失，需要注意的是，该Source不能在Windows上使用。</td>
</tr>
</tbody>
</table>
<p>::: details NetCat Source 参数详情</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channels@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定为：netcat</td>
</tr>
<tr>
<td>bind@</td>
<td>–</td>
<td>绑定机器名或IP地址</td>
</tr>
<tr>
<td>port@</td>
<td>–</td>
<td>端口号</td>
</tr>
<tr>
<td>max-line-length</td>
<td>512</td>
<td>一行的最大字节数</td>
</tr>
<tr>
<td>ack-every-event</td>
<td>true</td>
<td>对成功接受的Event返回OK</td>
</tr>
<tr>
<td>selector.type</td>
<td>replicating</td>
<td>选择器类型replicating or multiplexing</td>
</tr>
<tr>
<td>selector.*</td>
<td>选择器相关参数</td>
<td></td>
</tr>
<tr>
<td>interceptors</td>
<td>–</td>
<td>拦截器列表，多个以空格分隔</td>
</tr>
<tr>
<td>interceptors.*</td>
<td>拦截器相关参数</td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details Avro Srource 参数详情</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channels@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定为：avro</td>
</tr>
<tr>
<td>bind@</td>
<td>–</td>
<td>监听的主机名或IP地址</td>
</tr>
<tr>
<td>port@</td>
<td>–</td>
<td>端口号</td>
</tr>
<tr>
<td>threads</td>
<td>–</td>
<td>传输可使用的最大线程数</td>
</tr>
<tr>
<td>selector.type</td>
<td></td>
<td></td>
</tr>
<tr>
<td>selector.*</td>
<td></td>
<td></td>
</tr>
<tr>
<td>interceptors</td>
<td>–</td>
<td>拦截器列表</td>
</tr>
<tr>
<td>interceptors.*</td>
<td></td>
<td></td>
</tr>
<tr>
<td>compression-type</td>
<td>none</td>
<td>可设置为“none” 或 “deflate”. 压缩类型需要和AvroSource匹配</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details Exc Source 参数详情</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channels@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定为：exec</td>
</tr>
<tr>
<td>command@</td>
<td>–</td>
<td>需要去执行的命令</td>
</tr>
<tr>
<td>shell</td>
<td>–</td>
<td>运行命令的shell脚本文件</td>
</tr>
<tr>
<td>restartThrottle</td>
<td>10000</td>
<td>尝试重启的超时时间</td>
</tr>
<tr>
<td>restart</td>
<td>false</td>
<td>如果命令执行失败，是否重启</td>
</tr>
<tr>
<td>logStdErr</td>
<td>false</td>
<td>是否记录错误日志</td>
</tr>
<tr>
<td>batchSize</td>
<td>20</td>
<td>批次写入channel的最大日志数量</td>
</tr>
<tr>
<td>batchTimeout</td>
<td>3000</td>
<td>批次写入数据的最大等待时间（毫秒）</td>
</tr>
<tr>
<td>selector.type</td>
<td>replicating</td>
<td>选择器类型replicating or multiplexing</td>
</tr>
<tr>
<td>selector.*</td>
<td></td>
<td>选择器其他参数</td>
</tr>
<tr>
<td>interceptors</td>
<td>–</td>
<td>拦截器列表，多个空格分隔</td>
</tr>
<tr>
<td>interceptors.*</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details Spooling Directory Source 参数详情</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channels@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定：spooldir.</td>
</tr>
<tr>
<td>spoolDir@</td>
<td>–</td>
<td>被监控的文件夹目录</td>
</tr>
<tr>
<td>fileSuffix</td>
<td>.COMPLETED</td>
<td>完成数据传输的文件后缀标志</td>
</tr>
<tr>
<td>deletePolicy</td>
<td>never</td>
<td>删除已经完成数据传输的文件时间：never or immediate</td>
</tr>
<tr>
<td>fileHeader</td>
<td>false</td>
<td>是否在header中添加文件的完整路径信息</td>
</tr>
<tr>
<td>fileHeaderKey</td>
<td>file</td>
<td>如果header中添加文件的完整路径信息时key的名称</td>
</tr>
<tr>
<td>basenameHeader</td>
<td>false</td>
<td>是否在header中添加文件的基本名称信息</td>
</tr>
<tr>
<td>basenameHeaderKey</td>
<td>basename</td>
<td>如果header中添加文件的基本名称信息时key的名称</td>
</tr>
<tr>
<td>includePattern</td>
<td>^.*$</td>
<td>使用正则来匹配新增文件需要被传输数据的文件</td>
</tr>
<tr>
<td>ignorePattern</td>
<td>^$</td>
<td>使用正则来忽略新增的文件</td>
</tr>
<tr>
<td>trackerDir</td>
<td>.flumespool</td>
<td>存储元数据信息目录</td>
</tr>
<tr>
<td>consumeOrder</td>
<td>oldest</td>
<td>文件消费顺序：oldest, youngest and random.</td>
</tr>
<tr>
<td>maxBackoff</td>
<td>4000</td>
<td>如果channel容量不足，尝试写入的超时时间，如果仍然不能写入，则会抛出ChannelException</td>
</tr>
<tr>
<td>batchSize</td>
<td>100</td>
<td>批次处理粒度</td>
</tr>
<tr>
<td>inputCharset</td>
<td>UTF-8</td>
<td>输入码表格式</td>
</tr>
<tr>
<td>decodeErrorPolicy</td>
<td>FAIL</td>
<td>遇到不可解码字符后的处理方式：FAIL，REPLACE，IGNORE</td>
</tr>
<tr>
<td>selector.type</td>
<td>replicating</td>
<td>选择器类型：replicating or multiplexing</td>
</tr>
<tr>
<td>selector.*</td>
<td></td>
<td>选择器其他参数</td>
</tr>
<tr>
<td>interceptors</td>
<td>–</td>
<td>拦截器列表，空格分隔</td>
</tr>
<tr>
<td>interceptors.*</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details Taildir  Source 参数详情</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channels@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>指定类型：TAILDIR.</td>
</tr>
<tr>
<td>filegroups@</td>
<td>–</td>
<td>文件组的名称，多个空格分隔</td>
</tr>
<tr>
<td>filegroups.@</td>
<td>–</td>
<td>被监控文件的绝对路径</td>
</tr>
<tr>
<td>positionFile</td>
<td>~/.flume/taildir_position.json</td>
<td>存储数据偏移量路径</td>
</tr>
<tr>
<td>headers..</td>
<td>–</td>
<td>Header key的名称</td>
</tr>
<tr>
<td>byteOffsetHeader</td>
<td>false</td>
<td>是否添加字节偏移量到key为‘byteoffset’值中</td>
</tr>
<tr>
<td>skipToEnd</td>
<td>false</td>
<td>当偏移量不能写入到文件时是否跳到文件结尾</td>
</tr>
<tr>
<td>idleTimeout</td>
<td>120000</td>
<td>关闭没有新增内容的文件超时时间（毫秒）</td>
</tr>
<tr>
<td>writePosInterval</td>
<td>3000</td>
<td>在positionfile 写入每一个文件lastposition的时间间隔</td>
</tr>
<tr>
<td>batchSize</td>
<td>100</td>
<td>批次处理行数</td>
</tr>
<tr>
<td>fileHeader</td>
<td>false</td>
<td>是否添加header存储文件绝对路径</td>
</tr>
<tr>
<td>fileHeaderKey</td>
<td>file</td>
<td>fileHeader启用时，使用的key</td>
</tr>
</tbody>
</table>
<p>:::</p>
<h3 id="channels" tabindex="-1"><a class="header-anchor" href="#channels" aria-hidden="true">#</a> Channels</h3>
<p>官网提供的Channel有多种类型可供选择，这里介绍<strong>Memory Channel</strong>和<strong>File Channel</strong>。</p>
<p>::: details Memory Channel 参数详解</p>
<p>Memory Channel是使用内存来存储Event，使用内存的意味着数据传输速率会很快，但是当Agent挂掉后，存储在Channel中的数据将会丢失。</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定为：memory</td>
</tr>
<tr>
<td>capacity</td>
<td>100</td>
<td>存储在channel中的最大容量</td>
</tr>
<tr>
<td>transactionCapacity</td>
<td>100</td>
<td>从一个source中去或者给一个sink，每个事务中最大的事件数</td>
</tr>
<tr>
<td>keep-alive</td>
<td>3</td>
<td>对于添加或者删除一个事件的超时的秒钟</td>
</tr>
<tr>
<td>byteCapacityBufferPercentage</td>
<td>20</td>
<td>定义缓存百分比</td>
</tr>
<tr>
<td>byteCapacity</td>
<td>see description</td>
<td>Channel中允许存储的最大字节总数</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details File Channel 参数详解</p>
<p>File Channel使用磁盘来存储Event，速率相对于Memory Channel较慢，但数据不会丢失。</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Property Name</td>
<td>Default</td>
<td>Description</td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>类型指定：file.</td>
</tr>
<tr>
<td>checkpointDir</td>
<td>~/.flume/file-channel/checkpoint</td>
<td>checkpoint目录</td>
</tr>
<tr>
<td>useDualCheckpoints</td>
<td>false</td>
<td>备份checkpoint，为True，backupCheckpointDir必须设置</td>
</tr>
<tr>
<td>backupCheckpointDir</td>
<td>–</td>
<td>备份checkpoint目录</td>
</tr>
<tr>
<td>dataDirs</td>
<td>~/.flume/file-channel/data</td>
<td>数据存储所在的目录设置</td>
</tr>
<tr>
<td>transactionCapacity</td>
<td>10000</td>
<td>Event存储最大值</td>
</tr>
<tr>
<td>checkpointInterval</td>
<td>30000</td>
<td>checkpoint间隔时间</td>
</tr>
<tr>
<td>maxFileSize</td>
<td>2146435071</td>
<td>单一日志最大设置字节数</td>
</tr>
<tr>
<td>minimumRequiredSpace</td>
<td>524288000</td>
<td>最小的请求闲置空间（以字节为单位）</td>
</tr>
<tr>
<td>capacity</td>
<td>1000000</td>
<td>Channel最大容量</td>
</tr>
<tr>
<td>keep-alive</td>
<td>3</td>
<td>一个存放操作的等待时间值（秒）</td>
</tr>
<tr>
<td>use-log-replay-v1</td>
<td>false</td>
<td>Expert: 使用老的回复逻辑</td>
</tr>
<tr>
<td>use-fast-replay</td>
<td>false</td>
<td>Expert: 回复不需要队列</td>
</tr>
<tr>
<td>checkpointOnClose</td>
<td>true</td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<h3 id="sinks" tabindex="-1"><a class="header-anchor" href="#sinks" aria-hidden="true">#</a> Sinks</h3>
<p>Flume常用Sinks有<strong>Log Sink，HDFS Sink，Avro Sink，Kafka Sink</strong>，当然也可以自定义Sink。</p>
<p>::: details Log Sink</p>
<p><strong>Logger Sink</strong>：以INFO 级别的日志记录到log日志中，这种方式通常用于测试。</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channel@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type＠</td>
<td>–</td>
<td>类型指定：logger</td>
</tr>
<tr>
<td>maxBytesToLog</td>
<td>16</td>
<td>能够记录的最大Event Body字节数</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details HDFS Sink</p>
<p><strong>HDFS Sink</strong>：Sink数据到HDFS，目前支持text 和 sequence files两种文件格式，支持压缩，并可以对数据进行分区，分桶存储。</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>Default</td>
<td>Description</td>
</tr>
<tr>
<td>channel@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>指定类型：hdfs</td>
</tr>
<tr>
<td>hdfs.path@</td>
<td>–</td>
<td>HDFS的路径 hdfs://namenode/flume/webdata/</td>
</tr>
<tr>
<td>hdfs.filePrefix</td>
<td>FlumeData</td>
<td>保存数据文件的前缀名</td>
</tr>
<tr>
<td>hdfs.fileSuffix</td>
<td>–</td>
<td>保存数据文件的后缀名</td>
</tr>
<tr>
<td>hdfs.inUsePrefix</td>
<td>–</td>
<td>临时写入的文件前缀名</td>
</tr>
<tr>
<td>hdfs.inUseSuffix</td>
<td>.tmp</td>
<td>临时写入的文件后缀名</td>
</tr>
<tr>
<td>hdfs.rollInterval</td>
<td>30</td>
<td>间隔多长将临时文件滚动成最终目标文件，单位：秒， 如果设置成0，则表示不根据时间来滚动文件</td>
</tr>
<tr>
<td>hdfs.rollSize</td>
<td>1024</td>
<td>当临时文件达到多少（单位：bytes）时，滚动成目标文件， 如果设置成0，则表示不根据临时文件大小来滚动文件</td>
</tr>
<tr>
<td>hdfs.rollCount</td>
<td>10</td>
<td>当 events 数据达到该数量时候，将临时文件滚动成目标文件，如果设置成0，则表示不根据events数据来滚动文件</td>
</tr>
<tr>
<td>hdfs.idleTimeout</td>
<td>0</td>
<td>当目前被打开的临时文件在该参数指定的时间（秒）内， 没有任何数据写入，则将该临时文件关闭并重命名成目标文件</td>
</tr>
<tr>
<td>hdfs.batchSize</td>
<td>100</td>
<td>每个批次刷新到 HDFS 上的 events 数量</td>
</tr>
<tr>
<td>hdfs.codeC</td>
<td>–</td>
<td>文件压缩格式，包括：gzip, bzip2, lzo, lzop, snappy</td>
</tr>
<tr>
<td>hdfs.fileType</td>
<td>SequenceFile</td>
<td>文件格式，包括：SequenceFile, DataStream,CompressedStre， 当使用DataStream时候，文件不会被压缩，不需要设置hdfs.codeC; 当使用CompressedStream时候，必须设置一个正确的hdfs.codeC值；</td>
</tr>
<tr>
<td>hdfs.maxOpenFiles</td>
<td>5000</td>
<td>最大允许打开的HDFS文件数，当打开的文件数达到该值，最早打开的文件将会被关闭</td>
</tr>
<tr>
<td>hdfs.minBlockReplicas</td>
<td>–</td>
<td>HDFS副本数，写入 HDFS 文件块的最小副本数。 该参数会影响文件的滚动配置，一般将该参数配置成1，才可以按照配置正确滚动文件</td>
</tr>
<tr>
<td>hdfs.writeFormat</td>
<td>Writable</td>
<td>写 sequence 文件的格式。包含：Text, Writable（默认）</td>
</tr>
<tr>
<td>hdfs.callTimeout</td>
<td>10000</td>
<td>执行HDFS操作的超时时间（单位：毫秒）</td>
</tr>
<tr>
<td>hdfs.threadsPoolSize</td>
<td>10</td>
<td>hdfs sink 启动的操作HDFS的线程数</td>
</tr>
<tr>
<td>hdfs.rollTimerPoolSize</td>
<td>1</td>
<td>hdfs sink 启动的根据时间滚动文件的线程数</td>
</tr>
<tr>
<td>hdfs.kerberosPrincipal</td>
<td>–</td>
<td>HDFS安全认证kerberos配置</td>
</tr>
<tr>
<td>hdfs.kerberosKeytab</td>
<td>–</td>
<td>HDFS安全认证kerberos配置</td>
</tr>
<tr>
<td>hdfs.proxyUser</td>
<td></td>
<td>代理用户</td>
</tr>
<tr>
<td>hdfs.round</td>
<td>false</td>
<td>是否启用时间上的”舍弃”</td>
</tr>
<tr>
<td>hdfs.roundValue</td>
<td>1</td>
<td>时间上进行“舍弃”的值</td>
</tr>
<tr>
<td>hdfs.roundUnit</td>
<td>second</td>
<td>时间上进行”舍弃”的单位，包含：second,minute,hour</td>
</tr>
<tr>
<td>hdfs.timeZone</td>
<td>Local Time</td>
<td>时区。</td>
</tr>
<tr>
<td>hdfs.useLocalTimeStamp</td>
<td>false</td>
<td>是否使用当地时间</td>
</tr>
<tr>
<td>hdfs.closeTries 0</td>
<td>Number</td>
<td>hdfs sink 关闭文件的尝试次数；如果设置为1，当一次关闭文件失败后，hdfs sink将不会再次尝试关闭文件， 这个未关闭的文件将会一直留在那，并且是打开状态； 设置为0，当一次关闭失败后，hdfs sink会继续尝试下一次关闭，直到成功</td>
</tr>
<tr>
<td>hdfs.retryInterval</td>
<td>180</td>
<td>hdfs sink 尝试关闭文件的时间间隔， 如果设置为0，表示不尝试，相当于于将hdfs.closeTries设置成1</td>
</tr>
<tr>
<td>serializer</td>
<td>TEXT</td>
<td>序列化类型</td>
</tr>
<tr>
<td>serializer.*</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details Avro Sink</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>channel@</td>
<td>–</td>
<td></td>
</tr>
<tr>
<td>type@</td>
<td>–</td>
<td>指定类型：avro.</td>
</tr>
<tr>
<td>hostname@</td>
<td>–</td>
<td>主机名或IP</td>
</tr>
<tr>
<td>port@</td>
<td>–</td>
<td>端口号</td>
</tr>
<tr>
<td>batch-size</td>
<td>100</td>
<td>批次处理Event数</td>
</tr>
<tr>
<td>connect-timeout 20000</td>
<td>连接超时时间</td>
<td></td>
</tr>
<tr>
<td>request-timeout</td>
<td>20000</td>
<td>请求超时时间</td>
</tr>
<tr>
<td>compression-type</td>
<td>none</td>
<td>压缩类型，“none” or “deflate”.</td>
</tr>
<tr>
<td>compression-level</td>
<td>6</td>
<td>压缩级别，0表示不压缩，1-9数字越大，压缩比越高</td>
</tr>
<tr>
<td>ssl</td>
<td>false</td>
<td>使用ssl加密</td>
</tr>
</tbody>
</table>
<p>:::</p>
<p>::: details kafka Sink</p>
<p>传输数据到Kafka中，需要注意的是Flume版本和Kafka版本的兼容性</p>
<table>
<thead>
<tr>
<th>Property Name</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>–</td>
<td>指定类型：<strong>org.apache.flume.sink.kafka.KafkaSink</strong></td>
</tr>
<tr>
<td>kafka.bootstrap.servers</td>
<td>–</td>
<td>kafka服务地址   <strong>localhost:9092</strong></td>
</tr>
<tr>
<td>kafka.topic</td>
<td>default-flume-topic</td>
<td>kafka Topic</td>
</tr>
<tr>
<td>flumeBatchSize</td>
<td>100</td>
<td>批次写入kafka Event数</td>
</tr>
</tbody>
</table>
<p>:::</p>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试：</h2>
<h3 id="_1-监控444444端口" tabindex="-1"><a class="header-anchor" href="#_1-监控444444端口" aria-hidden="true">#</a> 1. 监控444444端口</h3>
<p>复制一份<code v-pre>flume-conf.propertise.template</code>改名为<code v-pre>demo.propertise</code></p>
<p>修改文件内容为：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code># example.conf: A single-node Flume configuration

# Name the components on this agent
a1.sources = r1
a1.sinks = k1
a1.channels = c1

# Describe/configure the source
a1.sources.r1.type = netcat
a1.sources.r1.bind = localhost
a1.sources.r1.port = 44444

# Describe the sink
a1.sinks.k1.type = logger

# Use a channel which buffers events in memory
a1.channels.c1.type = memory
a1.channels.c1.capacity = 1000
a1.channels.c1.transactionCapacity = 100

# Bind the source and sink to the channel
a1.sources.r1.channels = c1
a1.sinks.k1.channel = c1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行输入一下文本，用于监听44444端口的信息，格式可以看之前的指令介绍</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>flume-ng agent --name a1 --conf $FLUME_HOME/conf --conf-file $FLUME_HOME/conf/demo.properties -Dflume.root.logger=INFO,console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新开一个终端窗口，telnet localhost 44444端口，输入信息，即可在之前的控制台看到监控到的打印信息</p>
<p><img src="@source/blogs/BigData/images/flume/flume2.png" alt="image-20200823124829699"></p>
<p><img src="@source/blogs/BigData/images/flume/flume3.png" alt="image-20200823125022747"></p>
<h3 id="_2-监控日志文本" tabindex="-1"><a class="header-anchor" href="#_2-监控日志文本" aria-hidden="true">#</a> 2. 监控日志文本</h3>
<p>只需要conf配置文件中的配置改一下即可，参考前面的 <strong>source</strong>配置，修改以下几行：</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>a1.sources.s1.type=exec
# 获取数据来源的地方设为日志
a1.sources.s1.command=tail -F /opt/app/applog/kafka.log
a1.sources.s1.channels=c1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用之前的启动命令，如果是新建立的一个配置文件，启动命令对应修改即可。启动后在<code v-pre>kafka.log</code>中输入数据，控制台会做出相应的打印。</p>
<h3 id="_3-flume-kafka" tabindex="-1"><a class="header-anchor" href="#_3-flume-kafka" aria-hidden="true">#</a> 3. flume+kafka</h3>
<p>主要模拟流程，flume获取<code v-pre>kafka.log</code>s数据，发送到kafka</p>
<p>新建一个<code v-pre>kafkap.properties</code>文件，内容如下：主要是修改了<code v-pre>sink</code>的相关配置，将数据传送到kafka去</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>agent.sources = s1
agent.channels = c1
agent.sinks = k1

# sources
agent.sources.s1.type=exec
agent.sources.s1.command=tail -F /opt/app/applog/kafka.log
agent.sources.s1.channels=c1

# channels
agent.channels.c1.type=memory
agent.channels.c1.capacity=10000
agent.channels.c1.transactionCapacity=100

# sinks
agent.sinks.k1.type= org.apache.flume.sink.kafka.KafkaSink
agent.sinks.k1.brokerList=127.0.0.1:9092
agent.sinks.k1.topic=kafkatest
agent.sinks.k1.serializer.class=kafka.serializer.StringEncoder
agent.sinks.k1.channel=c1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>启动<code v-pre>zookeeper</code>，jps后台进程显示为<code v-pre>QuorumPeerMain</code>即成功</li>
</ul>
<blockquote>
<p>nohup bin/zookeeper-server-start.sh config/zk.properties &amp;</p>
</blockquote>
<ul>
<li>启动<code v-pre>kafka</code>，jps后台进程显示为<code v-pre>kafka</code>及成功</li>
</ul>
<blockquote>
<p>nohup bin/kafka-server-start.sh config/kafka1.properties &amp;</p>
</blockquote>
<ul>
<li>创建一个topic为<code v-pre>kafkatest</code>的消费者</li>
</ul>
<blockquote>
<p>bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic kafkatest --from-beginning</p>
</blockquote>
<ul>
<li>启动<code v-pre>flume</code></li>
</ul>
<blockquote>
<p>flume-ng agent --name agent --conf $FLUME_HOME/conf --conf-file $FLUME_HOME/conf/kafka.properties</p>
</blockquote>
<p>在<code v-pre>kafka.log</code>文件中写入输入，即可看到<code v-pre>kafkatest</code>终端的消费</p>
<h3 id="_4-flume-kafka-spark-inflxdb-grafana" tabindex="-1"><a class="header-anchor" href="#_4-flume-kafka-spark-inflxdb-grafana" aria-hidden="true">#</a> 4. flume+kafka+spark+inflxdb+grafana</h3>
<blockquote>
<p>启动zookeeper</p>
<p>启动kafka</p>
<p>启动flume</p>
<p>启动sparkt</p>
<p>提交spark作业</p>
<p>grafana配置inflxdb</p>
<p>监控面板从influxdb中获取数据实时显示</p>
</blockquote>
</div></template>


