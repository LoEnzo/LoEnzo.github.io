<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h1 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql" aria-hidden="true">#</a> NoSql</h1>
<p><strong>演进：</strong></p>
<ul>
<li>单机MySql时代，访问量低，读写一体</li>
<li>Memcached(缓存) + Mysql + 垂直拆分（读写分离），网站数据大都是读，</li>
<li>分库分表 + 水平拆分 + Mysql集群</li>
<li>引用非关系形数据库</li>
</ul>
<p><strong>NoSql</strong>：Not Only Sql（不仅仅是Sql），泛指<code v-pre>非关系型数据库</code></p>
<p>随着互联网发展，对大数据的需求，不仅仅是简单的行列数据，更多是个人信息、社交网络、地理位置、图片、文档等，这些数据类型的存储不需要一个固定的格式，传统的关系型数据库就无法满足这些迫切的需求。</p>
<ul>
<li>关系型数据库：Oracle、MySql（表格，行、列）</li>
<li>非关系型数据库：MongDB、</li>
</ul>
<p>特点：</p>
<ul>
<li>方便拓展（数据之间没有关系，方便扩展）</li>
<li>大数据量，高性能（Redis读：110000/s，写：80000/s）</li>
<li>数据类型多样（不需要事先设计数据库，随取随用）</li>
</ul>
<p>大数据的3V+3高：</p>
<ul>
<li>
<p>3V：描述问题（海量：Volume，多样：Variety，实时：Velocity）</p>
</li>
<li>
<p>3高：对程序要求（高并发、高可托、高性能）</p>
</li>
</ul>
<h2 id="nosql四类" tabindex="-1"><a class="header-anchor" href="#nosql四类" aria-hidden="true">#</a> NoSql四类</h2>
<table>
<thead>
<tr>
<th><strong>分类</strong></th>
<th><strong>Examples举例</strong></th>
<th><strong>典型应用场景</strong></th>
<th><strong>数据模型</strong></th>
<th><strong>优点</strong></th>
<th><strong>缺点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>键值对（key-value）</strong></td>
<td>Tokyo Cabinet/Tyrant, Redis, Voldemort, Oracle BDB</td>
<td>内容缓存，主要用于处理大量数据的高访问负载，也用于一些日志系统等等。</td>
<td>Key 指向 Value 的键值对，通常用hash table来实现</td>
<td>查找速度快</td>
<td>数据无结构化，通常只被当作字符串或者二进制数据</td>
</tr>
<tr>
<td><strong>列存储数据库</strong></td>
<td>Cassandra, HBase, Riak</td>
<td>分布式的文件系统</td>
<td>以列簇式存储，将同一列数据存在一起</td>
<td>查找速度快，可扩展性强，更容易进行分布式扩展</td>
<td>功能相对局限</td>
</tr>
<tr>
<td><strong>文档型数据库</strong></td>
<td>CouchDB, MongoDb</td>
<td>Web应用（与Key-Value类似，Value是结构化的，不同的是数据库能够了解Value的内容）</td>
<td>Key-Value对应的键值对，Value为结构化数据</td>
<td>数据结构要求不严格，表结构可变，不需要像关系型数据库一样需要预先定义表结构</td>
<td>查询性能不高，而且缺乏统一的查询语法</td>
</tr>
<tr>
<td><strong>图形数据库</strong></td>
<td>Neo4J, InfoGrid, Infinite Graph</td>
<td>社交网络，推荐系统等。专注于构建关系图谱</td>
<td>图结构</td>
<td>利用图结构相关算法。比如最短路径寻址，N度关系查找等</td>
<td>很多时候需要对整个图做计算才能得出需要的信息，而且这种结构不太好做分布式的集群</td>
</tr>
</tbody>
</table>
<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<ul>
<li><a href="https://redis.io/" target="_blank" rel="noopener noreferrer">官方文档</a>，可下载最新稳定版</li>
<li><a href="http://www.redis.cn/" target="_blank" rel="noopener noreferrer">redis中文官方网站</a></li>
<li><a href="https://www.redis.net.cn/tutorial/3501.html" target="_blank" rel="noopener noreferrer">Redis教程</a></li>
</ul>
<h2 id="redis基础知识" tabindex="-1"><a class="header-anchor" href="#redis基础知识" aria-hidden="true">#</a> Redis基础知识</h2>
<ul>
<li>Redis默认有16个数据库，默认使用第0个</li>
<li>Redis是单线程的，Redis是内存数据库，瓶颈是内存和带宽，CPU不是，所以单线程就能实现，多线程CPU会进行上下文切换，耗时更多</li>
</ul>
<h3 id="redis连接-命令" tabindex="-1"><a class="header-anchor" href="#redis连接-命令" aria-hidden="true">#</a> Redis连接 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3650.html" target="_blank" rel="noopener noreferrer">Echo 命令</a></td>
<td style="text-align:left">打印字符串</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3653.html" target="_blank" rel="noopener noreferrer">Select 命令</a></td>
<td style="text-align:left">切换到指定的数据库</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3651.html" target="_blank" rel="noopener noreferrer">Ping 命令</a></td>
<td style="text-align:left">查看服务是否运行</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3652.html" target="_blank" rel="noopener noreferrer">Quit 命令</a></td>
<td style="text-align:left">关闭当前连接</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3649.html" target="_blank" rel="noopener noreferrer">Auth 命令</a></td>
<td style="text-align:left">验证密码是否正确</td>
</tr>
</tbody>
</table>
<h2 id="_5种基本类型" tabindex="-1"><a class="header-anchor" href="#_5种基本类型" aria-hidden="true">#</a> 5种基本类型</h2>
<h3 id="redis-键-key-命令" tabindex="-1"><a class="header-anchor" href="#redis-键-key-命令" aria-hidden="true">#</a> Redis 键(key) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3543.html" target="_blank" rel="noopener noreferrer">Type 命令</a></td>
<td style="text-align:left">返回 key 所储存的值的类型。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3533.html" target="_blank" rel="noopener noreferrer">PEXPIREAT 命令</a></td>
<td style="text-align:left">设置 key 的过期时间亿以毫秒计。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3534.html" target="_blank" rel="noopener noreferrer">PEXPIREAT 命令</a></td>
<td style="text-align:left">设置 key 过期时间的时间戳(unix timestamp) 以毫秒计</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3541.html" target="_blank" rel="noopener noreferrer">Rename 命令</a></td>
<td style="text-align:left">修改 key 的名称</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3537.html" target="_blank" rel="noopener noreferrer">PERSIST 命令</a></td>
<td style="text-align:left">移除 key 的过期时间，key 将持久保持。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3536.html" target="_blank" rel="noopener noreferrer">Move 命令</a></td>
<td style="text-align:left">将当前数据库的 key 移动到给定的数据库 db 当中。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3540.html" target="_blank" rel="noopener noreferrer">RANDOMKEY 命令</a></td>
<td style="text-align:left">从当前数据库中随机返回一个 key 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3529.html" target="_blank" rel="noopener noreferrer">Dump 命令</a></td>
<td style="text-align:left">序列化给定 key ，并返回被序列化的值。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3539.html" target="_blank" rel="noopener noreferrer">TTL 命令</a></td>
<td style="text-align:left">以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3531.html" target="_blank" rel="noopener noreferrer">Expire 命令</a></td>
<td style="text-align:left">seconds 为给定 key 设置过期时间。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3528.html" target="_blank" rel="noopener noreferrer">DEL 命令</a></td>
<td style="text-align:left">该命令用于在 key 存在是删除 key。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3538.html" target="_blank" rel="noopener noreferrer">Pttl 命令</a></td>
<td style="text-align:left">以毫秒为单位返回 key 的剩余的过期时间。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3542.html" target="_blank" rel="noopener noreferrer">Renamenx 命令</a></td>
<td style="text-align:left">仅当 newkey 不存在时，将 key 改名为 newkey 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3530.html" target="_blank" rel="noopener noreferrer">EXISTS 命令</a></td>
<td style="text-align:left">检查给定 key 是否存在。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3532.html" target="_blank" rel="noopener noreferrer">Expireat 命令</a></td>
<td style="text-align:left">EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3535.html" target="_blank" rel="noopener noreferrer">Keys 命令</a></td>
<td style="text-align:left">查找所有符合给定模式( pattern)的 key 。</td>
</tr>
</tbody>
</table>
<h3 id="redis-字符串-string-命令" tabindex="-1"><a class="header-anchor" href="#redis-字符串-string-命令" aria-hidden="true">#</a> Redis 字符串(String) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3552.html" target="_blank" rel="noopener noreferrer">Setnx 命令</a></td>
<td style="text-align:left">只有在 key 不存在时设置 key 的值。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3546.html" target="_blank" rel="noopener noreferrer">Getrange 命令</a></td>
<td style="text-align:left">返回 key 中字符串值的子字符</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3555.html" target="_blank" rel="noopener noreferrer">Mset 命令</a></td>
<td style="text-align:left">同时设置一个或多个 key-value 对。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3551.html" target="_blank" rel="noopener noreferrer">Setex 命令</a></td>
<td style="text-align:left">将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3544.html" target="_blank" rel="noopener noreferrer">SET 命令</a></td>
<td style="text-align:left">设置指定 key 的值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3545.html" target="_blank" rel="noopener noreferrer">Get 命令</a></td>
<td style="text-align:left">获取指定 key 的值。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3548.html" target="_blank" rel="noopener noreferrer">Getbit 命令</a></td>
<td style="text-align:left">对 key 所储存的字符串值，获取指定偏移量上的位(bit)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3550.html" target="_blank" rel="noopener noreferrer">Setbit 命令</a></td>
<td style="text-align:left">对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3561.html" target="_blank" rel="noopener noreferrer">Decr 命令</a></td>
<td style="text-align:left">将 key 中储存的数字值减一。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3562.html" target="_blank" rel="noopener noreferrer">Decrby 命令</a></td>
<td style="text-align:left">key 所储存的值减去给定的减量值（decrement） 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3554.html" target="_blank" rel="noopener noreferrer">Strlen 命令</a></td>
<td style="text-align:left">返回 key 所储存的字符串值的长度。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3556.html" target="_blank" rel="noopener noreferrer">Msetnx 命令</a></td>
<td style="text-align:left">同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3559.html" target="_blank" rel="noopener noreferrer">Incrby 命令</a></td>
<td style="text-align:left">将 key 所储存的值加上给定的增量值（increment） 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3560.html" target="_blank" rel="noopener noreferrer">Incrbyfloat 命令</a></td>
<td style="text-align:left">将 key 所储存的值加上给定的浮点增量值（increment） 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3553.html" target="_blank" rel="noopener noreferrer">Setrange 命令</a></td>
<td style="text-align:left">用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3557.html" target="_blank" rel="noopener noreferrer">Psetex 命令</a></td>
<td style="text-align:left">这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3563.html" target="_blank" rel="noopener noreferrer">Append 命令</a></td>
<td style="text-align:left">如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3547.html" target="_blank" rel="noopener noreferrer">Getset 命令</a></td>
<td style="text-align:left">将给定 key 的值设为 value ，并返回 key 的旧值(old value)。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3549.html" target="_blank" rel="noopener noreferrer">Mget 命令</a></td>
<td style="text-align:left">获取所有(一个或多个)给定 key 的值。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3558.html" target="_blank" rel="noopener noreferrer">Incr 命令</a></td>
<td style="text-align:left">将 key 中储存的数字值增一。</td>
</tr>
</tbody>
</table>
<h3 id="redis-哈希-hash-命令" tabindex="-1"><a class="header-anchor" href="#redis-哈希-hash-命令" aria-hidden="true">#</a> Redis 哈希(Hash) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3573.html" target="_blank" rel="noopener noreferrer">Hmset 命令</a></td>
<td style="text-align:left">同时将多个 field-value (域-值)对设置到哈希表 key 中。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3572.html" target="_blank" rel="noopener noreferrer">Hmget 命令</a></td>
<td style="text-align:left">获取所有给定字段的值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3574.html" target="_blank" rel="noopener noreferrer">Hset 命令</a></td>
<td style="text-align:left">将哈希表 key 中的字段 field 的值设为 value 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3567.html" target="_blank" rel="noopener noreferrer">Hgetall 命令</a></td>
<td style="text-align:left">获取在哈希表中指定 key 的所有字段和值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3566.html" target="_blank" rel="noopener noreferrer">Hget 命令</a></td>
<td style="text-align:left">获取存储在哈希表中指定字段的值/td&gt;</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3565.html" target="_blank" rel="noopener noreferrer">Hexists 命令</a></td>
<td style="text-align:left">查看哈希表 key 中，指定的字段是否存在。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3568.html" target="_blank" rel="noopener noreferrer">Hincrby 命令</a></td>
<td style="text-align:left">为哈希表 key 中的指定字段的整数值加上增量 increment 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3571.html" target="_blank" rel="noopener noreferrer">Hlen 命令</a></td>
<td style="text-align:left">获取哈希表中字段的数量</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3564.html" target="_blank" rel="noopener noreferrer">Hdel 命令</a></td>
<td style="text-align:left">删除一个或多个哈希表字段</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3576.html" target="_blank" rel="noopener noreferrer">Hvals 命令</a></td>
<td style="text-align:left">获取哈希表中所有值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3569.html" target="_blank" rel="noopener noreferrer">Hincrbyfloat 命令</a></td>
<td style="text-align:left">为哈希表 key 中的指定字段的浮点数值加上增量 increment 。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3570.html" target="_blank" rel="noopener noreferrer">Hkeys 命令</a></td>
<td style="text-align:left">获取所有哈希表中的字段</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3575.html" target="_blank" rel="noopener noreferrer">Hsetnx 命令</a></td>
<td style="text-align:left">只有在字段 field 不存在时，设置哈希表字段的值。</td>
</tr>
</tbody>
</table>
<h3 id="redis-列表-list-命令" tabindex="-1"><a class="header-anchor" href="#redis-列表-list-命令" aria-hidden="true">#</a> Redis 列表(List) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3580.html" target="_blank" rel="noopener noreferrer">Lindex 命令</a></td>
<td style="text-align:left">通过索引获取列表中的元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3592.html" target="_blank" rel="noopener noreferrer">Rpush 命令</a></td>
<td style="text-align:left">在列表中添加一个或多个值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3586.html" target="_blank" rel="noopener noreferrer">Lrange 命令</a></td>
<td style="text-align:left">获取列表指定范围内的元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3591.html" target="_blank" rel="noopener noreferrer">Rpoplpush 命令</a></td>
<td style="text-align:left">移除列表的最后一个元素，并将该元素添加到另一个列表并返回</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3577.html" target="_blank" rel="noopener noreferrer">Blpop 命令</a></td>
<td style="text-align:left">移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3578.html" target="_blank" rel="noopener noreferrer">Brpop 命令</a></td>
<td style="text-align:left">移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3579.html" target="_blank" rel="noopener noreferrer">Brpoplpush 命令</a></td>
<td style="text-align:left">从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3587.html" target="_blank" rel="noopener noreferrer">Lrem 命令</a></td>
<td style="text-align:left">移除列表元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3582.html" target="_blank" rel="noopener noreferrer">Llen 命令</a></td>
<td style="text-align:left">获取列表长度</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3589.html" target="_blank" rel="noopener noreferrer">Ltrim 命令</a></td>
<td style="text-align:left">对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3583.html" target="_blank" rel="noopener noreferrer">Lpop 命令</a></td>
<td style="text-align:left">移出并获取列表的第一个元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3585.html" target="_blank" rel="noopener noreferrer">Lpushx 命令</a></td>
<td style="text-align:left">将一个或多个值插入到已存在的列表头部</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3581.html" target="_blank" rel="noopener noreferrer">Linsert 命令</a></td>
<td style="text-align:left">在列表的元素前或者后插入元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3590.html" target="_blank" rel="noopener noreferrer">Rpop 命令</a></td>
<td style="text-align:left">移除并获取列表最后一个元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3588.html" target="_blank" rel="noopener noreferrer">Lset 命令</a></td>
<td style="text-align:left">通过索引设置列表元素的值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3584.html" target="_blank" rel="noopener noreferrer">Lpush 命令</a></td>
<td style="text-align:left">将一个或多个值插入到列表头部</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3593.html" target="_blank" rel="noopener noreferrer">Rpushx 命令</a></td>
<td style="text-align:left">为已存在的列表添加值</td>
</tr>
</tbody>
</table>
<h3 id="redis-集合-set-命令" tabindex="-1"><a class="header-anchor" href="#redis-集合-set-命令" aria-hidden="true">#</a> Redis 集合(Set) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3606.html" target="_blank" rel="noopener noreferrer">Sunion 命令</a></td>
<td style="text-align:left">返回所有给定集合的并集</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3595.html" target="_blank" rel="noopener noreferrer">Scard 命令</a></td>
<td style="text-align:left">获取集合的成员数</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3604.html" target="_blank" rel="noopener noreferrer">Srandmember 命令</a></td>
<td style="text-align:left">返回集合中一个或多个随机数</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3601.html" target="_blank" rel="noopener noreferrer">Smembers 命令</a></td>
<td style="text-align:left">返回集合中的所有成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3598.html" target="_blank" rel="noopener noreferrer">Sinter 命令</a></td>
<td style="text-align:left">返回给定所有集合的交集</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3605.html" target="_blank" rel="noopener noreferrer">Srem 命令</a></td>
<td style="text-align:left">移除集合中一个或多个成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3602.html" target="_blank" rel="noopener noreferrer">Smove 命令</a></td>
<td style="text-align:left">将 member 元素从 source 集合移动到 destination 集合</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3594.html" target="_blank" rel="noopener noreferrer">Sadd 命令</a></td>
<td style="text-align:left">向集合添加一个或多个成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3600.html" target="_blank" rel="noopener noreferrer">Sismember 命令</a></td>
<td style="text-align:left">判断 member 元素是否是集合 key 的成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3597.html" target="_blank" rel="noopener noreferrer">Sdiffstore 命令</a></td>
<td style="text-align:left">返回给定所有集合的差集并存储在 destination 中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3596.html" target="_blank" rel="noopener noreferrer">Sdiff 命令</a></td>
<td style="text-align:left">返回给定所有集合的差集</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3608.html" target="_blank" rel="noopener noreferrer">Sscan 命令</a></td>
<td style="text-align:left">迭代集合中的元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3599.html" target="_blank" rel="noopener noreferrer">Sinterstore 命令</a></td>
<td style="text-align:left">返回给定所有集合的交集并存储在 destination 中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3607.html" target="_blank" rel="noopener noreferrer">Sunionstore 命令</a></td>
<td style="text-align:left">所有给定集合的并集存储在 destination 集合中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3603.html" target="_blank" rel="noopener noreferrer">Spop 命令</a></td>
<td style="text-align:left">移除并返回集合中的一个随机元素</td>
</tr>
</tbody>
</table>
<h3 id="redis-有序集合-sorted-set-命令" tabindex="-1"><a class="header-anchor" href="#redis-有序集合-sorted-set-命令" aria-hidden="true">#</a> Redis 有序集合(sorted set) 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3625.html" target="_blank" rel="noopener noreferrer">Zrevrank 命令</a></td>
<td style="text-align:left">返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3614.html" target="_blank" rel="noopener noreferrer">Zlexcount 命令</a></td>
<td style="text-align:left">在有序集合中计算指定字典区间内成员数量</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3627.html" target="_blank" rel="noopener noreferrer">Zunionstore 命令</a></td>
<td style="text-align:left">计算给定的一个或多个有序集的并集，并存储在新的 key 中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3621.html" target="_blank" rel="noopener noreferrer">Zremrangebyrank 命令</a></td>
<td style="text-align:left">移除有序集合中给定的排名区间的所有成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3610.html" target="_blank" rel="noopener noreferrer">Zcard 命令</a></td>
<td style="text-align:left">获取有序集合的成员数</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3619.html" target="_blank" rel="noopener noreferrer">Zrem 命令</a></td>
<td style="text-align:left">移除有序集合中的一个或多个成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3613.html" target="_blank" rel="noopener noreferrer">Zinterstore 命令</a></td>
<td style="text-align:left">计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3618.html" target="_blank" rel="noopener noreferrer">Zrank 命令</a></td>
<td style="text-align:left">返回有序集合中指定成员的索引</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3612.html" target="_blank" rel="noopener noreferrer">Zincrby 命令</a></td>
<td style="text-align:left">有序集合中对指定成员的分数加上增量 increment</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3617.html" target="_blank" rel="noopener noreferrer">Zrangebyscore 命令</a></td>
<td style="text-align:left">通过分数返回有序集合指定区间内的成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3616.html" target="_blank" rel="noopener noreferrer">Zrangebylex 命令</a></td>
<td style="text-align:left">通过字典区间返回有序集合的成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3626.html" target="_blank" rel="noopener noreferrer">Zscore 命令</a></td>
<td style="text-align:left">返回有序集中，成员的分数值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3622.html" target="_blank" rel="noopener noreferrer">Zremrangebyscore 命令</a></td>
<td style="text-align:left">移除有序集合中给定的分数区间的所有成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3628.html" target="_blank" rel="noopener noreferrer">Zscan 命令</a></td>
<td style="text-align:left">迭代有序集合中的元素（包括元素成员和元素分值）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3624.html" target="_blank" rel="noopener noreferrer">Zrevrangebyscore 命令</a></td>
<td style="text-align:left">返回有序集中指定分数区间内的成员，分数从高到低排序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3620.html" target="_blank" rel="noopener noreferrer">Zremrangebylex 命令</a></td>
<td style="text-align:left">移除有序集合中给定的字典区间的所有成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3623.html" target="_blank" rel="noopener noreferrer">Zrevrange 命令</a></td>
<td style="text-align:left">返回有序集中指定区间内的成员，通过索引，分数从高到底</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3615.html" target="_blank" rel="noopener noreferrer">Zrange 命令</a></td>
<td style="text-align:left">通过索引区间返回有序集合成指定区间内的成员</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3611.html" target="_blank" rel="noopener noreferrer">Zcount 命令</a></td>
<td style="text-align:left">计算在有序集合中指定区间分数的成员数</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3609.html" target="_blank" rel="noopener noreferrer">Zadd 命令</a></td>
<td style="text-align:left">向有序集合添加一个或多个成员，或者更新已存在成员的分数</td>
</tr>
</tbody>
</table>
<h2 id="_3种特殊类型" tabindex="-1"><a class="header-anchor" href="#_3种特殊类型" aria-hidden="true">#</a> 3种特殊类型</h2>
<h3 id="redis-地理位置-geo-命令" tabindex="-1"><a class="header-anchor" href="#redis-地理位置-geo-命令" aria-hidden="true">#</a> Redis 地理位置(geo) 命令</h3>
<p>使用经纬度定位地理坐标并用一个<strong>有序集合zset保存</strong>，所以zset命令也可以使用</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3687.html" target="_blank" rel="noopener noreferrer">GEOHASH 命令</a></td>
<td style="text-align:left">返回一个或多个位置元素的 Geohash 表示</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3688.html" target="_blank" rel="noopener noreferrer">GEOPOS 命令</a></td>
<td style="text-align:left">从key里返回所有给定位置元素的位置（经度和纬度）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3686.html" target="_blank" rel="noopener noreferrer">GEODIST 命令</a></td>
<td style="text-align:left">返回两个给定位置之间的距离</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3689.html" target="_blank" rel="noopener noreferrer">GEORADIUS 命令</a></td>
<td style="text-align:left">以给定的经纬度为中心， 找出某一半径内的元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3685.html" target="_blank" rel="noopener noreferrer">GEOADD 命令</a></td>
<td style="text-align:left">将指定的地理空间位置（纬度、经度、名称）添加到指定的key中</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3690.html" target="_blank" rel="noopener noreferrer">GEORADIUSBYMEMBER 命令</a></td>
<td style="text-align:left">找出位于指定范围内的元素，中心点是由给定的位置元素决定</td>
</tr>
</tbody>
</table>
<h3 id="redis-基数hyperloglog-命令" tabindex="-1"><a class="header-anchor" href="#redis-基数hyperloglog-命令" aria-hidden="true">#</a> Redis 基数HyperLogLog 命令</h3>
<p>基数：数据集中不重复元素的个数</p>
<p>场景：网页的访问量（UV）：一个用户多次访问，也只能算作一个人。</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3631.html" target="_blank" rel="noopener noreferrer">Pgmerge 命令</a></td>
<td style="text-align:left">将多个 HyperLogLog 合并为一个 HyperLogLog</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3629.html" target="_blank" rel="noopener noreferrer">Pfadd 命令</a></td>
<td style="text-align:left">添加指定元素到 HyperLogLog 中。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3630.html" target="_blank" rel="noopener noreferrer">Pfcount 命令</a></td>
<td style="text-align:left">返回给定 HyperLogLog 的基数估算值。</td>
</tr>
</tbody>
</table>
<h3 id="redis-位图-bit-命令" tabindex="-1"><a class="header-anchor" href="#redis-位图-bit-命令" aria-hidden="true">#</a> Redis 位图 Bit 命令</h3>
<p><strong>应用场景</strong>：签到统计、状态统计</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://www.redis.net.cn/order/3548.html" target="_blank" rel="noopener noreferrer">Getbit 命令</a></td>
<td>对 key 所储存的字符串值，获取指定偏移量上的位(bit)。</td>
</tr>
<tr>
<td><a href="https://www.redis.net.cn/order/3550.html" target="_blank" rel="noopener noreferrer">Setbit 命令</a></td>
<td>对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)。</td>
</tr>
<tr>
<td><code v-pre>bitcount key [start end]</code></td>
<td>统计字符串被设置为1的bit数，也可以指定统计范围按字节</td>
</tr>
<tr>
<td><code v-pre>bitop operration destkey key[key..]</code></td>
<td>对一个或多个保存二进制位的字符串 key 进行位元操作，并将结果保存到 destkey 上。</td>
</tr>
<tr>
<td><code v-pre>BITPOS key bit [start] [end]</code></td>
<td>返回字符串里面第一个被设置为1或者0的bit位。start和end只能按字节,不能按位</td>
</tr>
</tbody>
</table>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>
<h3 id="redis-事务-命令" tabindex="-1"><a class="header-anchor" href="#redis-事务-命令" aria-hidden="true">#</a> Redis 事务 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3639.html" target="_blank" rel="noopener noreferrer">Exec 命令</a></td>
<td style="text-align:left">执行所有事务块内的命令。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3642.html" target="_blank" rel="noopener noreferrer">Watch 命令</a></td>
<td style="text-align:left">监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3638.html" target="_blank" rel="noopener noreferrer">Discard 命令</a></td>
<td style="text-align:left">取消事务，放弃执行事务块内的所有命令。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3641.html" target="_blank" rel="noopener noreferrer">Unwatch 命令</a></td>
<td style="text-align:left">取消 WATCH 命令对所有 key 的监视。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3640.html" target="_blank" rel="noopener noreferrer">Multi 命令</a></td>
<td style="text-align:left">标记一个事务块的开始。</td>
</tr>
</tbody>
</table>
<p>Redis单条命令保存原子性，但是事务不保证原子性</p>
<p>Redis 事务本质：一组命令的集合，一个事务种的所有命令都会被序列化，按顺序执行</p>
<p>开启事务-&gt;命令入队-&gt;执行命令</p>
<p>特点：一致性、顺序性、排他性</p>
<h4 id="正常和非正常事务" tabindex="-1"><a class="header-anchor" href="#正常和非正常事务" aria-hidden="true">#</a> 正常和非正常事务</h4>
<p>::: details 正常事务</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>&gt; multi
OK
&gt; set k1 v1
QUEUED
&gt; set k2 v2
QUEUED
&gt; get k1
QUEUED
&gt; get k2
QUEUED
&gt; exec
OK
OK
v1
v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details 编译异常，指命令错误</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&gt; multi
OK
&gt; getk1
QUEUED
&gt; exec
ReplyError: EXECABORT Transaction discarded because of previous errors.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<p>::: details 运行异常，指令语法正确，结果错误</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>&gt; multi
OK
&gt; incr k1
QUEUED
&gt; get k2
QUEUED
&gt; exec
v2

# 之前的版本会返回错误信息
ERR value is not an integer or out of range
v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h4 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁" aria-hidden="true">#</a> 悲观锁</h4>
<p>每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，Java中，synchronized的思想也是悲观锁</p>
<h4 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁" aria-hidden="true">#</a> 乐观锁</h4>
<p>每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候回判断一下再次期间别人有没有去更新这个数据，可以使用<code v-pre>版本号</code>等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量，<code v-pre>提交版本必须大于记录当前版本才能执行更新</code></p>
<h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h2>
<h3 id="redis-服务器-命令" tabindex="-1"><a class="header-anchor" href="#redis-服务器-命令" aria-hidden="true">#</a> Redis 服务器 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3659.html" target="_blank" rel="noopener noreferrer">Client Pause 命令</a></td>
<td style="text-align:left">在指定时间内终止运行来自客户端的命令</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3672.html" target="_blank" rel="noopener noreferrer">Debug Object 命令</a></td>
<td style="text-align:left">获取 key 的调试信息</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3675.html" target="_blank" rel="noopener noreferrer">Flushdb 命令</a></td>
<td style="text-align:left">删除当前数据库的所有key</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3680.html" target="_blank" rel="noopener noreferrer">Save 命令</a></td>
<td style="text-align:left">异步保存数据到硬盘</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3683.html" target="_blank" rel="noopener noreferrer">Showlog 命令</a></td>
<td style="text-align:left">管理 redis 的慢日志</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3677.html" target="_blank" rel="noopener noreferrer">Lastsave 命令</a></td>
<td style="text-align:left">返回最近一次 Redis 成功将数据保存到磁盘上的时间，以 UNIX 时间戳格式表示</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3667.html" target="_blank" rel="noopener noreferrer">Config Get 命令</a></td>
<td style="text-align:left">获取指定配置参数的值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3662.html" target="_blank" rel="noopener noreferrer">Command 命令</a></td>
<td style="text-align:left">获取 Redis 命令详情数组</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3682.html" target="_blank" rel="noopener noreferrer">Slaveof 命令</a></td>
<td style="text-align:left">将当前服务器转变为指定服务器的从属服务器(slave server)</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3673.html" target="_blank" rel="noopener noreferrer">Debug Segfault 命令</a></td>
<td style="text-align:left">让 Redis 服务崩溃</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3674.html" target="_blank" rel="noopener noreferrer">Flushall 命令</a></td>
<td style="text-align:left">删除所有数据库的所有key</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3671.html" target="_blank" rel="noopener noreferrer">Dbsize 命令</a></td>
<td style="text-align:left">返回当前数据库的 key 的数量</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3654.html" target="_blank" rel="noopener noreferrer">Bgrewriteaof 命令</a></td>
<td style="text-align:left">异步执行一个 AOF（AppendOnly File） 文件重写操作</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3661.html" target="_blank" rel="noopener noreferrer">Cluster Slots 命令</a></td>
<td style="text-align:left">获取集群节点的映射数组</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3669.html" target="_blank" rel="noopener noreferrer">Config Set 命令</a></td>
<td style="text-align:left">修改 redis 配置参数，无需重启</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3666.html" target="_blank" rel="noopener noreferrer">Command Info 命令</a></td>
<td style="text-align:left">获取指定 Redis 命令描述的数组</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3681.html" target="_blank" rel="noopener noreferrer">Shutdown 命令</a></td>
<td style="text-align:left">异步保存数据到硬盘，并关闭服务器</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3684.html" target="_blank" rel="noopener noreferrer">Sync 命令</a></td>
<td style="text-align:left">用于复制功能(replication)的内部命令</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3656.html" target="_blank" rel="noopener noreferrer">Client Kill 命令</a></td>
<td style="text-align:left">关闭客户端连接</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3679.html" target="_blank" rel="noopener noreferrer">Role 命令</a></td>
<td style="text-align:left">返回主从实例所属的角色</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3678.html" target="_blank" rel="noopener noreferrer">Redis Monitor 命令</a></td>
<td style="text-align:left">实时打印出 Redis 服务器接收到的命令，调试用</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3664.html" target="_blank" rel="noopener noreferrer">Command Getkeys 命令</a></td>
<td style="text-align:left">获取给定命令的所有键</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3658.html" target="_blank" rel="noopener noreferrer">Client Getname 命令</a></td>
<td style="text-align:left">获取连接的名称</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3670.html" target="_blank" rel="noopener noreferrer">Config Resetstat 命令</a></td>
<td style="text-align:left">重置 INFO 命令中的某些统计数据</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3663.html" target="_blank" rel="noopener noreferrer">Command Count 命令</a></td>
<td style="text-align:left">获取 Redis 命令总数</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3665.html" target="_blank" rel="noopener noreferrer">Time 命令</a></td>
<td style="text-align:left">返回当前服务器时间</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3676.html" target="_blank" rel="noopener noreferrer">Info 命令</a></td>
<td style="text-align:left">获取 Redis 服务器的各种信息和统计数值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3668.html" target="_blank" rel="noopener noreferrer">Config rewrite 命令</a></td>
<td style="text-align:left">对启动 Redis 服务器时所指定的 redis.conf 配置文件进行改写</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3657.html" target="_blank" rel="noopener noreferrer">Client List 命令</a></td>
<td style="text-align:left">获取连接到服务器的客户端连接列表</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3660.html" target="_blank" rel="noopener noreferrer">Client Setname 命令</a></td>
<td style="text-align:left">设置当前连接的名称</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3655.html" target="_blank" rel="noopener noreferrer">Bgsave 命令</a></td>
<td style="text-align:left">在后台异步保存当前数据库的数据到磁盘</td>
</tr>
</tbody>
</table>
<h3 id="redis-脚本-命令" tabindex="-1"><a class="header-anchor" href="#redis-脚本-命令" aria-hidden="true">#</a> Redis 脚本 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3647.html" target="_blank" rel="noopener noreferrer">Script kill 命令</a></td>
<td style="text-align:left">杀死当前正在运行的 Lua 脚本。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3648.html" target="_blank" rel="noopener noreferrer">Script Load 命令</a></td>
<td style="text-align:left">将脚本 script 添加到脚本缓存中，但并不立即执行这个脚本。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3643.html" target="_blank" rel="noopener noreferrer">Eval 命令</a></td>
<td style="text-align:left">执行 Lua 脚本。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3644.html" target="_blank" rel="noopener noreferrer">Evalsha 命令</a></td>
<td style="text-align:left">执行 Lua 脚本。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3645.html" target="_blank" rel="noopener noreferrer">Script Exists 命令</a></td>
<td style="text-align:left">查看指定的脚本是否已经被保存在缓存当中。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3646.html" target="_blank" rel="noopener noreferrer">Script Flush 命令</a></td>
<td style="text-align:left">从脚本缓存中移除所有脚本。</td>
</tr>
</tbody>
</table>
<h3 id="redis-发布订阅-命令" tabindex="-1"><a class="header-anchor" href="#redis-发布订阅-命令" aria-hidden="true">#</a> Redis 发布订阅 命令</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3637.html" target="_blank" rel="noopener noreferrer">Unsubscribe 命令</a></td>
<td style="text-align:left">指退订给定的频道。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3636.html" target="_blank" rel="noopener noreferrer">Subscribe 命令</a></td>
<td style="text-align:left">订阅给定的一个或多个频道的信息。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3633.html" target="_blank" rel="noopener noreferrer">Pubsub 命令</a></td>
<td style="text-align:left">查看订阅与发布系统状态。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3635.html" target="_blank" rel="noopener noreferrer">Punsubscribe 命令</a></td>
<td style="text-align:left">退订所有给定模式的频道。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3634.html" target="_blank" rel="noopener noreferrer">Publish 命令</a></td>
<td style="text-align:left">将信息发送到指定的频道。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.redis.net.cn/order/3632.html" target="_blank" rel="noopener noreferrer">Psubscribe 命令</a></td>
<td style="text-align:left">订阅一个或多个符合给定模式的频道。</td>
</tr>
</tbody>
</table>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="jedis使用" tabindex="-1"><a class="header-anchor" href="#jedis使用" aria-hidden="true">#</a> Jedis使用</h3>
<p>Jedis 是 Redis官方推荐的java链接开发工具，使用java操作Redis中间件</p>
<ul>
<li>依赖</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;redis.clients&lt;/groupId&gt;
    &lt;artifactId&gt;jedis&lt;/artifactId&gt;
    &lt;version&gt;3.3.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>使用</p>
<p>jedis里面封装了前面详细的每条指令，直接 <strong>.</strong> 查看使用即可</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(){
    Jedis jedis = new Jedis(&quot;127.0.0.1&quot;, 6379);		// 连接Redis数据库，具体参数可以看构造方法
	jedis.ping()									// Redis操作指令
	jedis.close()  									// 断开数据库
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>事务</li>
</ul>
<p>::: details 事务基础使用范例</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>public static void main(){
    Jedis jedis=new Jedis(&quot;127.0.0.1&quot;,6379);
	Transaction multi=jedis.multi();		// 开启redis事务
	try {									
		multi.set(&quot;key1&quot;, &quot;value1&quot;);		// 设置数据
		multi.set(&quot;key2&quot;, &quot;value2&quot;);
		int num=1/0;						// 代码抛出异常事务，执行失败						
		multi.set(&quot;key3&quot;, &quot;value3&quot;);
        multi.exec();
	} catch (Exception e) {
		multi.discard();					// redis 事务回滚
		e.printStackTrace();
	} finally {
        jedis.close();						
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="springboot整合" tabindex="-1"><a class="header-anchor" href="#springboot整合" aria-hidden="true">#</a> SpringBoot整合</h3>
<p>SpringBoot操作数据库，使用SpringData项目，可以连接常用数据库</p>
<ul>
<li>
<p><strong>注意</strong></p>
<p>在SpringBoot2.x之后，原来使用的<code v-pre>Jedis</code>被替换成了<code v-pre>lettuce</code></p>
<p><strong>Jedis</strong>：采用的直连，多个线程（多个终端连接Redis）操作，是不安全的，可以只用 Jedis pool 连接池避免线程不安全问题，但是会造成redis-server变大，性能受影响，类似<code v-pre>BIO</code></p>
<p><strong>lettuce</strong>：采用netty，示例可以在多个线程中进行共享，不存在线程不安全问题，可以剑圣线程数据，类似<code v-pre>NIO</code></p>
</li>
<li>
<p>依赖</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
    &lt;version&gt;2.5.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置</li>
</ul>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code>spring.redis.host=127.0.0.1
spring.redis.port=6379
spring.redis.lettuce.pool.max-active=8			# 配置连接池,使用lettuce这个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>测试</p>
<p>注意：传入对象需要序列化，否则会报错<code v-pre>org.springframework.data.redis.serializer.SerializationException: Cannot serialize; </code></p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@SpringBootTest
@ExtendWith(SpringExtension.class)
public class RedisTest {

    @Resource
    private RedisTemplate&lt;String, Object&gt; redisTemplate;

    @Test
    public void testRedisTemplate() {
        redisTemplate.opsForValue().set(&quot;k1&quot;, &quot;v1&quot;);
        redisTemplate.opsForValue().set(&quot;k2&quot;, &quot;v1&quot;);
        System.out.println(redisTemplate.opsForValue().get(&quot;k1&quot;));
    }
    
        @Test
    public void testSerialization() throws JsonProcessingException {
        User user = new User(&quot;hjwu&quot;, 25);
        System.out.println(redisTemplate.opsForValue().get(&quot;user&quot;));
        redisTemplate.delete(&quot;user&quot;);
        redisTemplate.opsForValue().set(&quot;user&quot;, user);		// user实体类需要序列化，否则会报错
        System.out.println(redisTemplate.opsForValue().get(&quot;user&quot;));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>常规方法说明</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>opsForValue()	# 操作字符串 String
opsForList()	# 操作列表 List
opsForeSet()	# 操作集合
opsForHash()	# 操作哈希
opsForZSet()	# 操作有序集合
opsForGeo()		# 操作地理空间
opsForHyperLogLog()		# 基数统计
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>自定义<code v-pre>RestTemplate</code></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>@Configuration
public class RedisConfig {

    @Bean
    @SuppressWarnings(&quot;all&quot;)
    public RedisTemplate&lt;String, Object&gt; redisTemplate(RedisConnectionFactory connectionFactory) {

        RedisTemplate&lt;String, Object&gt; template = new RedisTemplate&lt;&gt;();
        template.setConnectionFactory(connectionFactory);
        // 自定义Jackson序列化配置
        Jackson2JsonRedisSerializer jsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jsonRedisSerializer.setObjectMapper(om);
        jsonRedisSerializer.setObjectMapper(om);

        // key使用String的序列化方式
        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();
        template.setKeySerializer(stringRedisSerializer);
        // hash的key也是用String的序列化方式
        template.setHashKeySerializer(stringRedisSerializer);
        // value的key使用jackson的序列化方式
        template.setValueSerializer(jsonRedisSerializer);
        // hash的value也是用jackson的序列化方式
        template.setHashValueSerializer(jsonRedisSerializer);
        template.afterPropertiesSet();

        return template;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redis-conf详解" tabindex="-1"><a class="header-anchor" href="#redis-conf详解" aria-hidden="true">#</a> Redis.conf详解</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># redis 容量不区分大小写

# 可以使用include 组合多个配置问题
include .\path\to\local.conf
include c:\path\to\other.conf

# 网络配置
bind 127.0.0.1		# ip绑定
protected-mode yes	# 保护模式，默认开启
port 6379			# 端口

# 日志
loglevel notice		# 日志级别：debug|verbose|notice|warning
logfile &quot;&quot;			# 日志输入文件

# 持久化，多少秒内对多少个key进行了操作，就进行持久化，保存到数据库
save 900 1
save 300 10
save 60 10000

# RDB相关，默认不开启 aof
stop-writes-on-bgsave-error yes		# 持久化错误继续工作
rdbcompression yes					# 是否压缩 .rdb 文件
rdbchecksum yes						# 校验 .rdb 文件
dbfilename dump.rdb					# .rdb 文件名
dir ./								# rdb文件保存目录

# 主从复制 REPLICATION
slaveof &lt;masterip&gt; &lt;masterport&gt;		# 配置主机
masterauth &lt;master-password&gt;		# 配置主机密码

# 客户端连接
maxclients 10000 					# 最大客户端数量
maxmemory &lt;bytes&gt; 					# 最大内存限制
maxmemory-policy noeviction			# 内存达到限制值的处理策略，默认是 volatile-lru
config set maxmemory-policy volatile-lru	# 命令设置方式

volatile-lru 		# 只对设置了过期时间的key进行LRU（默认值）
allkeys-lru			# 删除lru算法的key
volatile-random 	# 随机删除即将过期key
allkeys-random		# 随机删除
volatile-ttl		# 删除即将过期的
noeviction			# 永不过期，返回错误

# AOF 相关
appendonly no						# 默认不开启
appendfilename &quot;appendonly.aof&quot;		# 默认文件名
# appendfsync always				# 数据同步策略
# always：每次修改就同步；everysec：每秒同步一次；不进行同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="redis持久化" tabindex="-1"><a class="header-anchor" href="#redis持久化" aria-hidden="true">#</a> Redis持久化</h1>
<p>Redis是缓存数据库，数据断电即失，所以数据最终是需要持久化到Oracle、Mysql数据中的</p>
<h2 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h2>
<p>RDB：Redis DataBases</p>
<p>**说明：**在指定的时间的间隔后，会将内存中的数据集快照写数据库；在Redis意外崩溃重启后，直接读取快照文件，进行数据恢复</p>
<p><strong>原理：</strong></p>
<p>在进行 RDB 的时候，redis 的主线程是不会做 io 操作的，主线程会 fork 一个子线程来完成该操作；</p>
<ul>
<li>Redis 调用forks。同时拥有父进程和子进程。</li>
<li>子进程将数据集写入到一个临时 RDB 文件中。</li>
<li>当子进程完成对新 RDB 文件的写入时，Redis 用新 RDB 文件替换原来的 RDB 文件，并删除旧的 RDB 文件。</li>
</ul>
<p>这种工作方式使得 Redis 可以从写时复制（copy-on-write）机制中获益(因为是使用子进程进行写操作，而父进程依然可以接收来自客户端的请求。)</p>
<p><img src="@source/blogs/Database/images/redis/rdb.jpg" alt=""></p>
<p>触发条件：</p>
<ul>
<li>满足save规则</li>
<li>执行flushall命令</li>
<li>退出redis</li>
</ul>
<p>优缺点</p>
<p>优点：适合大规模数据恢复，对数据的完整性要求不高</p>
<p>缺点：需要一定的时间间隔完成操作，如果redis意外宕机，会丢失最后一段时间间隔内修改的数据；fork进程的时会占用一定的内存空间</p>
<h2 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h2>
<p>**AOF：**Append Only File</p>
<p>说明：以日志的形式来记录每个写的操作，将Redis执行过的所有指令记录下来（读操作不记录），只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。</p>
<p>检查aof文件正确性：<code v-pre>redis-check-aof --fix</code></p>
<p>优缺点：</p>
<p>优点：三种同步模式，</p>
<p><em>always</em> ：记录每次操作，文件完整性高</p>
<p>everysec ：每秒同步一次，可能丢失这一秒数据</p>
<p><em>no</em> ：从不同步，效率最高</p>
<p>缺点：aof文件很大，数据量越大，修复速度越慢，先相当于读取文件中保存的指令，重头执行一遍</p>
<h1 id="redis主从复制" tabindex="-1"><a class="header-anchor" href="#redis主从复制" aria-hidden="true">#</a> Redis主从复制</h1>
<p>主节点Master/Leader，子节点Slava/follower，默认每台Redis服务器都是主节点</p>
<p>数据的复制是单向的，只能从主节点复制到子节点，Master以写为主，Slave节点以读为主，读写分离</p>
<p>作用：</p>
<ol>
<li>数据冗余：主从复制实现数据热备份，</li>
<li>故障恢复：当主节点出现问题，可以由从节点提供服务，快速实现故障回复</li>
<li>负载均衡：主从复制基础上，实现读写分离，主节点负责写，多个从节点负责读，提高Redis服务器并发量</li>
<li>高可用（集群）：主从复制还是哨兵模式（至少一主二从）和集群的基础</li>
</ol>
<p>单台Redis最大使用内存不应该超过20G</p>
<h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>
<ul>
<li>只配置从库，不用配置主库，默认都是主库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 查看当前库信息
info replication

# Replication
role:master				# 当前角色
connected_slaves:0		# 从机数量
master_repl_offset:0
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置伪集群（单机多集群），一个服务器开启三个redis进程，复制三份默认配置文件进行修改</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>端口号
pid名字
log文件名
dump.db文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>配置主从，在从机中配置</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 命令方式配置，暂时的
SLAVEOF 主机ip port

# 配置文件方式配置，永久的
replicaof masterip masterport	# 连接主机的ip port
masterauth master-password		# 连接主机的密码

# 重新查看主机、从机 info reolication 即可看到主机、从机角色等变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主机断开重新回复，依旧可以主从复制，</p>
<p>从机断开重新回复，也能接收到主机复制的信息</p>
<ul>
<li>复制原理</li>
</ul>
<p>Slave从机启动成功后会向Mater发送一个sync同步命令，Master接到命令，启动后台的存盘进程，收集所有指令整个数据文件发送到Slave，并完成一次同步</p>
<p>全量复制：初次启动，断开重连，</p>
<p>增量复制：连接中，Master继续将新收集到的数据复制同步给从机</p>
<p>指定某个从机为主机</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>SLAVEOF NO ONE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="redis哨兵模式" tabindex="-1"><a class="header-anchor" href="#redis哨兵模式" aria-hidden="true">#</a> Redis哨兵模式</h1>
<p>主从切换技术的方法是:当主服务器宕机后，需要手动把一台从服务器切换为主服务器，这就需要人工干预，费事费力，还会造成一段时间内服务不可用。这不是一种推荐的方式，更多时候，我们优先考虑哨兵模式。</p>
<p>Redis从2.8开始正式提供了 Sentinel(哨兵)架构来解决这个问题，能够后台监控主机是否故暲，如果故障了根据投票数自动将从库转换为主库。</p>
<p>哨兵模式是一种特殊的模式，首先 Redis提供了哨兵的命令，哨兵是一个独立的进程；作为进程，它会独立运行，其原理是哨兵通过发送命令，等待 Redis服务器响应，从而监控运行的多个 Redis实例。</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<ol>
<li>配置哨兵配置文件<code v-pre>sentinel.conf</code></li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># sentinel monitor 被监控的名称 host port 1
sentinel monitor myredis 127.0.0.1 6379 1

# 数字1，代表主机挂了，salve投票看让谁成为新的主机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>启动哨兵</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>redis-sentinel sentinel_conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果Master节点宕机了，哨兵会从从机中选取新的主机，主机连接回来，只能成为新主机的从机</li>
</ul>
<p>优点：</p>
<ul>
<li>哨兵集群，基于主从复制，具有主从复制的所有优点</li>
<li>可以主从切换，故障转移，系统可用性更好</li>
<li>哨兵模式是主从模式的升级，手动到自动，健壮性更好</li>
</ul>
<p>缺点：</p>
<ul>
<li>Redis不好在线扩容</li>
<li>实现哨兵模式的配置，上面仅仅是简单的监控</li>
</ul>
<p>::: details 哨兵模式的全部配置</p>
<p>哨兵集群同样需要配置多个文件，多个端口</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># Example sentinel.conf

# 哨兵 sentinel 实例运行的端口，默认 26379
port 26379

# 哨兵 sentinel 的工作目录
dir /tmp

# 哨兵 sentinel 监控的 redis主节点的 ip port
# master-name可以自己命名的主节点名字只能由字母A-z、数字0-9、这三个字符组成
# quorum配置多少个 sentinel1哨兵统一认为 master主节点失联那么这时客观上认为主节点失联了
# sentinel monitor &lt;master-name&gt; &lt;ip&gt; &lt;redis-port&gt; &lt;quorum&gt;
sentinel mon i tor mcmaster 127.0.0.1 6379 2

# 当在 Redis实例中开启了 requi repass foobared授权密码这样所有连接 Redis实例的客户端都要提供密码
# 设置哨兵 sentinel1连接主从的密码注意必须为主从设置一样的验证密码
# sentinel auth-pass &lt;master-name&gt; &lt;password&gt;
sentinel auth-pass mymaster MySUPER--secret-0123pas sword

#指定多少毫秒之后主节点没有应答哨兵 sentinel1此时哨兵主观上认为主节点下线默认30秒
# sentinel down-afte seconds &lt;master-name&gt; &lt;milliseconds&gt;
sentinel down-after-milliseconds mymaster 30000

# 这个配置项指定了在发生fai1over主备切换时最多可以有多少个s1ave同时对新的 master进行同步
# 这个数字越小，完成fai1over所需的时间就越长，
# 但是如果这个数字越大，就意味着越多的s1ave因为rep1 ication而不可用。
# 可以通过将这个值设为1来保证每次只有一个s1ave处于不能处理命令请求的状态。
# sentinel parallel-syncs &lt;master-name&gt; &lt;nums laves&gt;
sentinel parallel-syncs mymaster 1

# SCRIPTS EXECUTION

# 配置当某一事件发生时所需要执行的脚本，可以通过脚本来通知管理员，例如当系统运行不正常时发邮件通知相关人员。
# 对于脚本的运行结果有以下规则
# 若脚本执行后返回1，那么该脚本稍后将会被再次执行，重复次数目前默认为10
# 若脚本执行后返回2，或者比2更高的一个返回值，脚本将不会重复执行
# 如果脚本在执行过程中由于收到系统中断信号被终止了，则同返回值为1时的行为相同
# 一个脚本的最大执行时间为60s，如果超过这个时间，脚本将会被一个SIGKILL信号终止，之后重新执行

# 通知型脚本:当 sentinel1有任何警告级别的事件发生时(比如说 redis实例的主观失效和客观失效等等)，将会去调用这个脚本，这时这个脚本应该通过邮件，SMS等方式去通知系统管理员关于系统不正常运行的信息。调用该脚本时，将传给脚本两个参数，一个是事件的类型，一个是事件的描述。如果 sentinel.conf配置文件中配置∫这个脚本路径，那么必须保证这个脚本存在于这个路径，并且是可执行的，否则 sentinel 无法正常启动成功。

# 通知脚本
# sentinel notification -script &lt;master-name&gt; &lt;script-path&gt;
sentinel notification -script mymaster/var/redis/notify. sh

# 客户端重新配置主节点参数脚本
# 当一个 master由于fai1over而发生改变时，这个脚本将会被调用，通知相关的客户端关于 master地址已经发生改变的信息
# 以下参数将会在调用脚本时传给脚本
# &lt;master-name&gt; &lt;role&gt; &lt;state&gt; &lt;from-ip&gt; &lt;from-port&gt; &lt;to-ip&gt; &lt;to-port&gt;
# 日前&lt; state&gt;总是“ failover”，
# &lt;ro1e&gt;是“1 eaden”或者“ observer”中的一个。
# 参数from-ip，from-port，to-ip，to-port是用来和旧的 master和新的 master(即旧的s1ave)通信的
# 这个脚本应该是通用的，能被多次调用，不是针对性的。
# sentinel client-reconfig-script &lt;master-name&gt; &lt;script-path&gt;
sentinel client-reconfig-script mymaster /var/redis/reconfig sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h1 id="redis-缓存穿透和雪崩" tabindex="-1"><a class="header-anchor" href="#redis-缓存穿透和雪崩" aria-hidden="true">#</a> Redis 缓存穿透和雪崩</h1>
<h2 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h2>
<p>说明：指缓存查不到数据，去数据层查找</p>
<p>缓存穿透的概念很简单，用户想要査询—个数据，发现 . redis内存数据库没有，也就是缓存没有命中，于是向持久层数据库査询。发现也没有，于是本次査询失败。当用户很多的时候，缓存都没有命中，于是都去请求了持久层数据库。这会给持久层数据库造成很大的压力，这时候就相当于出现了缓存穿透。</p>
<p><strong>解决方案：</strong></p>
<ul>
<li>
<p>布隆过滤器</p>
<p>布隆过滤器是—种数据结构，对所有可能査询的参数以hash形式存储，在控制层先进行校验，不符合则丟弃，从而避免了对底层存储系统的查询压力</p>
</li>
<li>
<p>缓存空对象</p>
<p>当存储层不命中后，即使返回的空对象也将其缓存起来，同时会设置一个过期时间，之后再访问这个数据将会从缓存中获取，保护了后端数据源；这种会造成存储空间浪费，且对需要保持一致性的业务有影响</p>
</li>
</ul>
<h2 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h2>
<p>说明：查询量太大，缓存过期的空挡，全部查询到数据层</p>
<p>这里需要注意和缓存击穿的区别，缓存击穿，是指一个key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个ke在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个屏障上凿开了一个洞。</p>
<p>当某个key在过期的瞬间，有大量的请求并发访问，这类数据一般是热点数据，由于缓存过期，会同时访问数据库来查询最新数据，并且回写缓存，会导使数据库瞬间压力过大。</p>
<p>场景：微博热搜，导致服务器宕机</p>
<p><strong>解决方案：</strong></p>
<ul>
<li>设置设点数据永不过期，也会浪费一定空间</li>
<li>加互斥锁，使用分布式锁，保证对于每个key同时有一个线程去查询后端服务，也就是在缓存到数据层查询的时候，只允许一个线程去查询，其他线程没有获得分布式锁的权限，因此只需要等待即可。这种方式将高并发的压力转移到了分布式锁，因此对分布式锁的考验很大</li>
</ul>
<h2 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h2>
<p>缓存雪崩，是指在某一个时间段，缓存集中过期失效</p>
<p>产生雪崩的原因之一，比如在写本文的时候，马上就要到双十二零点，很快就会迎来一波抢购，这波商品时间比较集中的放入了缓存，假设缓存一个小时。那么到了凌晨一点钟的时候，这批商品的缓存就都过期了。而对这批商品的访问査询，都落到了数据库上，对于数据库而言，就会产生周期性的压力波峰。于是所有的请求都会达到存储层，存储层的调用量会暴增，造成存储层也会挂掉的情况。</p>
<p><strong>解决方案：</strong></p>
<ul>
<li>Redis高可用，增加Redis集群数量（异地多活）</li>
<li>降级限流，这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。</li>
<li>数据预热，数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀</li>
</ul>
</div></template>


