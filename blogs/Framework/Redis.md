---
title: Redis入门
tags:
 - Redis
categories:
 - Framework
date: 2021-06-24
---

::: tip

:::

<!-- more -->

# NoSql

**演进：**

* 单机MySql时代，访问量低，读写一体
* Memcached(缓存) + Mysql + 垂直拆分（读写分离），网站数据大都是读，
* 分库分表 + 水平拆分 + Mysql集群
* 引用非关系形数据库

**NoSql**：Not Only Sql（不仅仅是Sql），泛指`非关系型数据库`

随着互联网发展，对大数据的需求，不仅仅是简单的行列数据，更多是个人信息、社交网络、地理位置、图片、文档等，这些数据类型的存储不需要一个固定的格式，传统的关系型数据库就无法满足这些迫切的需求。

* 关系型数据库：Oracle、MySql（表格，行、列）
* 非关系型数据库：MongDB、

特点：

* 方便拓展（数据之间没有关系，方便扩展）
* 大数据量，高性能（Redis读：110000/s，写：80000/s）
* 数据类型多样（不需要事先设计数据库，随取随用）

大数据的3V+3高：

* 3V：描述问题（海量：Volume，多样：Variety，实时：Velocity）

* 3高：对程序要求（高并发、高可托、高性能）

## NoSql四类

| **分类**                | **Examples举例**                                   | **典型应用场景**                                             | **数据模型**                                    | **优点**                                                     | **缺点**                                                     |
| ----------------------- | -------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **键值对（key-value）** | Tokyo Cabinet/Tyrant, Redis, Voldemort, Oracle BDB | 内容缓存，主要用于处理大量数据的高访问负载，也用于一些日志系统等等。 | Key 指向 Value 的键值对，通常用hash table来实现 | 查找速度快                                                   | 数据无结构化，通常只被当作字符串或者二进制数据               |
| **列存储数据库**        | Cassandra, HBase, Riak                             | 分布式的文件系统                                             | 以列簇式存储，将同一列数据存在一起              | 查找速度快，可扩展性强，更容易进行分布式扩展                 | 功能相对局限                                                 |
| **文档型数据库**        | CouchDB, MongoDb                                   | Web应用（与Key-Value类似，Value是结构化的，不同的是数据库能够了解Value的内容） | Key-Value对应的键值对，Value为结构化数据        | 数据结构要求不严格，表结构可变，不需要像关系型数据库一样需要预先定义表结构 | 查询性能不高，而且缺乏统一的查询语法                         |
| **图形数据库**          | Neo4J, InfoGrid, Infinite Graph                    | 社交网络，推荐系统等。专注于构建关系图谱                     | 图结构                                          | 利用图结构相关算法。比如最短路径寻址，N度关系查找等          | 很多时候需要对整个图做计算才能得出需要的信息，而且这种结构不太好做分布式的集群 |

# Redis

## 参考文档

* [官方文档](https://redis.io/)，可下载最新稳定版
* [redis中文官方网站](http://www.redis.cn/)
* [Redis教程](https://www.redis.net.cn/tutorial/3501.html)

## Redis基础知识

* Redis默认有16个数据库，默认使用第0个
* Redis是单线程的，Redis是内存数据库，瓶颈是内存和带宽，CPU不是，所以单线程就能实现，多线程CPU会进行上下文切换，耗时更多

### Redis连接 命令

| 命令                                                    | 描述               |
| :------------------------------------------------------ | :----------------- |
| [Echo 命令](https://www.redis.net.cn/order/3650.html)   | 打印字符串         |
| [Select 命令](https://www.redis.net.cn/order/3653.html) | 切换到指定的数据库 |
| [Ping 命令](https://www.redis.net.cn/order/3651.html)   | 查看服务是否运行   |
| [Quit 命令](https://www.redis.net.cn/order/3652.html)   | 关闭当前连接       |
| [Auth 命令](https://www.redis.net.cn/order/3649.html)   | 验证密码是否正确   |

## 5种基本类型

### Redis 键(key) 命令

| 命令                                                       | 描述                                                         |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| [Type 命令](https://www.redis.net.cn/order/3543.html)      | 返回 key 所储存的值的类型。                                  |
| [PEXPIREAT 命令](https://www.redis.net.cn/order/3533.html) | 设置 key 的过期时间亿以毫秒计。                              |
| [PEXPIREAT 命令](https://www.redis.net.cn/order/3534.html) | 设置 key 过期时间的时间戳(unix timestamp) 以毫秒计           |
| [Rename 命令](https://www.redis.net.cn/order/3541.html)    | 修改 key 的名称                                              |
| [PERSIST 命令](https://www.redis.net.cn/order/3537.html)   | 移除 key 的过期时间，key 将持久保持。                        |
| [Move 命令](https://www.redis.net.cn/order/3536.html)      | 将当前数据库的 key 移动到给定的数据库 db 当中。              |
| [RANDOMKEY 命令](https://www.redis.net.cn/order/3540.html) | 从当前数据库中随机返回一个 key 。                            |
| [Dump 命令](https://www.redis.net.cn/order/3529.html)      | 序列化给定 key ，并返回被序列化的值。                        |
| [TTL 命令](https://www.redis.net.cn/order/3539.html)       | 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。 |
| [Expire 命令](https://www.redis.net.cn/order/3531.html)    | seconds 为给定 key 设置过期时间。                            |
| [DEL 命令](https://www.redis.net.cn/order/3528.html)       | 该命令用于在 key 存在是删除 key。                            |
| [Pttl 命令](https://www.redis.net.cn/order/3538.html)      | 以毫秒为单位返回 key 的剩余的过期时间。                      |
| [Renamenx 命令](https://www.redis.net.cn/order/3542.html)  | 仅当 newkey 不存在时，将 key 改名为 newkey 。                |
| [EXISTS 命令](https://www.redis.net.cn/order/3530.html)    | 检查给定 key 是否存在。                                      |
| [Expireat 命令](https://www.redis.net.cn/order/3532.html)  | EXPIREAT 的作用和 EXPIRE 类似，都用于为 key 设置过期时间。 不同在于 EXPIREAT 命令接受的时间参数是 UNIX 时间戳(unix timestamp)。 |
| [Keys 命令](https://www.redis.net.cn/order/3535.html)      | 查找所有符合给定模式( pattern)的 key 。                      |

### Redis 字符串(String) 命令

| 命令                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Setnx 命令](https://www.redis.net.cn/order/3552.html)       | 只有在 key 不存在时设置 key 的值。                           |
| [Getrange 命令](https://www.redis.net.cn/order/3546.html)    | 返回 key 中字符串值的子字符                                  |
| [Mset 命令](https://www.redis.net.cn/order/3555.html)        | 同时设置一个或多个 key-value 对。                            |
| [Setex 命令](https://www.redis.net.cn/order/3551.html)       | 将值 value 关联到 key ，并将 key 的过期时间设为 seconds (以秒为单位)。 |
| [SET 命令](https://www.redis.net.cn/order/3544.html)         | 设置指定 key 的值                                            |
| [Get 命令](https://www.redis.net.cn/order/3545.html)         | 获取指定 key 的值。                                          |
| [Getbit 命令](https://www.redis.net.cn/order/3548.html)      | 对 key 所储存的字符串值，获取指定偏移量上的位(bit)。         |
| [Setbit 命令](https://www.redis.net.cn/order/3550.html)      | 对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)。   |
| [Decr 命令](https://www.redis.net.cn/order/3561.html)        | 将 key 中储存的数字值减一。                                  |
| [Decrby 命令](https://www.redis.net.cn/order/3562.html)      | key 所储存的值减去给定的减量值（decrement） 。               |
| [Strlen 命令](https://www.redis.net.cn/order/3554.html)      | 返回 key 所储存的字符串值的长度。                            |
| [Msetnx 命令](https://www.redis.net.cn/order/3556.html)      | 同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。 |
| [Incrby 命令](https://www.redis.net.cn/order/3559.html)      | 将 key 所储存的值加上给定的增量值（increment） 。            |
| [Incrbyfloat 命令](https://www.redis.net.cn/order/3560.html) | 将 key 所储存的值加上给定的浮点增量值（increment） 。        |
| [Setrange 命令](https://www.redis.net.cn/order/3553.html)    | 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始。 |
| [Psetex 命令](https://www.redis.net.cn/order/3557.html)      | 这个命令和 SETEX 命令相似，但它以毫秒为单位设置 key 的生存时间，而不是像 SETEX 命令那样，以秒为单位。 |
| [Append 命令](https://www.redis.net.cn/order/3563.html)      | 如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。 |
| [Getset 命令](https://www.redis.net.cn/order/3547.html)      | 将给定 key 的值设为 value ，并返回 key 的旧值(old value)。   |
| [Mget 命令](https://www.redis.net.cn/order/3549.html)        | 获取所有(一个或多个)给定 key 的值。                          |
| [Incr 命令](https://www.redis.net.cn/order/3558.html)        | 将 key 中储存的数字值增一。                                  |

### Redis 哈希(Hash) 命令

| 命令                                                         | 描述                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------- |
| [Hmset 命令](https://www.redis.net.cn/order/3573.html)       | 同时将多个 field-value (域-值)对设置到哈希表 key 中。    |
| [Hmget 命令](https://www.redis.net.cn/order/3572.html)       | 获取所有给定字段的值                                     |
| [Hset 命令](https://www.redis.net.cn/order/3574.html)        | 将哈希表 key 中的字段 field 的值设为 value 。            |
| [Hgetall 命令](https://www.redis.net.cn/order/3567.html)     | 获取在哈希表中指定 key 的所有字段和值                    |
| [Hget 命令](https://www.redis.net.cn/order/3566.html)        | 获取存储在哈希表中指定字段的值/td>                       |
| [Hexists 命令](https://www.redis.net.cn/order/3565.html)     | 查看哈希表 key 中，指定的字段是否存在。                  |
| [Hincrby 命令](https://www.redis.net.cn/order/3568.html)     | 为哈希表 key 中的指定字段的整数值加上增量 increment 。   |
| [Hlen 命令](https://www.redis.net.cn/order/3571.html)        | 获取哈希表中字段的数量                                   |
| [Hdel 命令](https://www.redis.net.cn/order/3564.html)        | 删除一个或多个哈希表字段                                 |
| [Hvals 命令](https://www.redis.net.cn/order/3576.html)       | 获取哈希表中所有值                                       |
| [Hincrbyfloat 命令](https://www.redis.net.cn/order/3569.html) | 为哈希表 key 中的指定字段的浮点数值加上增量 increment 。 |
| [Hkeys 命令](https://www.redis.net.cn/order/3570.html)       | 获取所有哈希表中的字段                                   |
| [Hsetnx 命令](https://www.redis.net.cn/order/3575.html)      | 只有在字段 field 不存在时，设置哈希表字段的值。          |

### Redis 列表(List) 命令

| 命令                                                        | 描述                                                         |
| :---------------------------------------------------------- | :----------------------------------------------------------- |
| [Lindex 命令](https://www.redis.net.cn/order/3580.html)     | 通过索引获取列表中的元素                                     |
| [Rpush 命令](https://www.redis.net.cn/order/3592.html)      | 在列表中添加一个或多个值                                     |
| [Lrange 命令](https://www.redis.net.cn/order/3586.html)     | 获取列表指定范围内的元素                                     |
| [Rpoplpush 命令](https://www.redis.net.cn/order/3591.html)  | 移除列表的最后一个元素，并将该元素添加到另一个列表并返回     |
| [Blpop 命令](https://www.redis.net.cn/order/3577.html)      | 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。 |
| [Brpop 命令](https://www.redis.net.cn/order/3578.html)      | 移出并获取列表的最后一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。 |
| [Brpoplpush 命令](https://www.redis.net.cn/order/3579.html) | 从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它； 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。 |
| [Lrem 命令](https://www.redis.net.cn/order/3587.html)       | 移除列表元素                                                 |
| [Llen 命令](https://www.redis.net.cn/order/3582.html)       | 获取列表长度                                                 |
| [Ltrim 命令](https://www.redis.net.cn/order/3589.html)      | 对一个列表进行修剪(trim)，就是说，让列表只保留指定区间内的元素，不在指定区间之内的元素都将被删除。 |
| [Lpop 命令](https://www.redis.net.cn/order/3583.html)       | 移出并获取列表的第一个元素                                   |
| [Lpushx 命令](https://www.redis.net.cn/order/3585.html)     | 将一个或多个值插入到已存在的列表头部                         |
| [Linsert 命令](https://www.redis.net.cn/order/3581.html)    | 在列表的元素前或者后插入元素                                 |
| [Rpop 命令](https://www.redis.net.cn/order/3590.html)       | 移除并获取列表最后一个元素                                   |
| [Lset 命令](https://www.redis.net.cn/order/3588.html)       | 通过索引设置列表元素的值                                     |
| [Lpush 命令](https://www.redis.net.cn/order/3584.html)      | 将一个或多个值插入到列表头部                                 |
| [Rpushx 命令](https://www.redis.net.cn/order/3593.html)     | 为已存在的列表添加值                                         |

### Redis 集合(Set) 命令

| 命令                                                         | 描述                                                |
| :----------------------------------------------------------- | :-------------------------------------------------- |
| [Sunion 命令](https://www.redis.net.cn/order/3606.html)      | 返回所有给定集合的并集                              |
| [Scard 命令](https://www.redis.net.cn/order/3595.html)       | 获取集合的成员数                                    |
| [Srandmember 命令](https://www.redis.net.cn/order/3604.html) | 返回集合中一个或多个随机数                          |
| [Smembers 命令](https://www.redis.net.cn/order/3601.html)    | 返回集合中的所有成员                                |
| [Sinter 命令](https://www.redis.net.cn/order/3598.html)      | 返回给定所有集合的交集                              |
| [Srem 命令](https://www.redis.net.cn/order/3605.html)        | 移除集合中一个或多个成员                            |
| [Smove 命令](https://www.redis.net.cn/order/3602.html)       | 将 member 元素从 source 集合移动到 destination 集合 |
| [Sadd 命令](https://www.redis.net.cn/order/3594.html)        | 向集合添加一个或多个成员                            |
| [Sismember 命令](https://www.redis.net.cn/order/3600.html)   | 判断 member 元素是否是集合 key 的成员               |
| [Sdiffstore 命令](https://www.redis.net.cn/order/3597.html)  | 返回给定所有集合的差集并存储在 destination 中       |
| [Sdiff 命令](https://www.redis.net.cn/order/3596.html)       | 返回给定所有集合的差集                              |
| [Sscan 命令](https://www.redis.net.cn/order/3608.html)       | 迭代集合中的元素                                    |
| [Sinterstore 命令](https://www.redis.net.cn/order/3599.html) | 返回给定所有集合的交集并存储在 destination 中       |
| [Sunionstore 命令](https://www.redis.net.cn/order/3607.html) | 所有给定集合的并集存储在 destination 集合中         |
| [Spop 命令](https://www.redis.net.cn/order/3603.html)        | 移除并返回集合中的一个随机元素                      |

### Redis 有序集合(sorted set) 命令

| 命令                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Zrevrank 命令](https://www.redis.net.cn/order/3625.html)    | 返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序 |
| [Zlexcount 命令](https://www.redis.net.cn/order/3614.html)   | 在有序集合中计算指定字典区间内成员数量                       |
| [Zunionstore 命令](https://www.redis.net.cn/order/3627.html) | 计算给定的一个或多个有序集的并集，并存储在新的 key 中        |
| [Zremrangebyrank 命令](https://www.redis.net.cn/order/3621.html) | 移除有序集合中给定的排名区间的所有成员                       |
| [Zcard 命令](https://www.redis.net.cn/order/3610.html)       | 获取有序集合的成员数                                         |
| [Zrem 命令](https://www.redis.net.cn/order/3619.html)        | 移除有序集合中的一个或多个成员                               |
| [Zinterstore 命令](https://www.redis.net.cn/order/3613.html) | 计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 key 中 |
| [Zrank 命令](https://www.redis.net.cn/order/3618.html)       | 返回有序集合中指定成员的索引                                 |
| [Zincrby 命令](https://www.redis.net.cn/order/3612.html)     | 有序集合中对指定成员的分数加上增量 increment                 |
| [Zrangebyscore 命令](https://www.redis.net.cn/order/3617.html) | 通过分数返回有序集合指定区间内的成员                         |
| [Zrangebylex 命令](https://www.redis.net.cn/order/3616.html) | 通过字典区间返回有序集合的成员                               |
| [Zscore 命令](https://www.redis.net.cn/order/3626.html)      | 返回有序集中，成员的分数值                                   |
| [Zremrangebyscore 命令](https://www.redis.net.cn/order/3622.html) | 移除有序集合中给定的分数区间的所有成员                       |
| [Zscan 命令](https://www.redis.net.cn/order/3628.html)       | 迭代有序集合中的元素（包括元素成员和元素分值）               |
| [Zrevrangebyscore 命令](https://www.redis.net.cn/order/3624.html) | 返回有序集中指定分数区间内的成员，分数从高到低排序           |
| [Zremrangebylex 命令](https://www.redis.net.cn/order/3620.html) | 移除有序集合中给定的字典区间的所有成员                       |
| [Zrevrange 命令](https://www.redis.net.cn/order/3623.html)   | 返回有序集中指定区间内的成员，通过索引，分数从高到底         |
| [Zrange 命令](https://www.redis.net.cn/order/3615.html)      | 通过索引区间返回有序集合成指定区间内的成员                   |
| [Zcount 命令](https://www.redis.net.cn/order/3611.html)      | 计算在有序集合中指定区间分数的成员数                         |
| [Zadd 命令](https://www.redis.net.cn/order/3609.html)        | 向有序集合添加一个或多个成员，或者更新已存在成员的分数       |

## 3种特殊类型

### Redis 地理位置(geo) 命令

使用经纬度定位地理坐标并用一个**有序集合zset保存**，所以zset命令也可以使用

| 命令                                                         | 描述                                                      |
| :----------------------------------------------------------- | :-------------------------------------------------------- |
| [GEOHASH 命令](https://www.redis.net.cn/order/3687.html)     | 返回一个或多个位置元素的 Geohash 表示                     |
| [GEOPOS 命令](https://www.redis.net.cn/order/3688.html)      | 从key里返回所有给定位置元素的位置（经度和纬度）           |
| [GEODIST 命令](https://www.redis.net.cn/order/3686.html)     | 返回两个给定位置之间的距离                                |
| [GEORADIUS 命令](https://www.redis.net.cn/order/3689.html)   | 以给定的经纬度为中心， 找出某一半径内的元素               |
| [GEOADD 命令](https://www.redis.net.cn/order/3685.html)      | 将指定的地理空间位置（纬度、经度、名称）添加到指定的key中 |
| [GEORADIUSBYMEMBER 命令](https://www.redis.net.cn/order/3690.html) | 找出位于指定范围内的元素，中心点是由给定的位置元素决定    |

### Redis 基数HyperLogLog 命令

基数：数据集中不重复元素的个数

场景：网页的访问量（UV）：一个用户多次访问，也只能算作一个人。

| 命令                                                     | 描述                                      |
| :------------------------------------------------------- | :---------------------------------------- |
| [Pgmerge 命令](https://www.redis.net.cn/order/3631.html) | 将多个 HyperLogLog 合并为一个 HyperLogLog |
| [Pfadd 命令](https://www.redis.net.cn/order/3629.html)   | 添加指定元素到 HyperLogLog 中。           |
| [Pfcount 命令](https://www.redis.net.cn/order/3630.html) | 返回给定 HyperLogLog 的基数估算值。       |

### Redis 位图 Bit 命令

**应用场景**：签到统计、状态统计

| 命令                                                    | 描述                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| [Getbit 命令](https://www.redis.net.cn/order/3548.html) | 对 key 所储存的字符串值，获取指定偏移量上的位(bit)。         |
| [Setbit 命令](https://www.redis.net.cn/order/3550.html) | 对 key 所储存的字符串值，设置或清除指定偏移量上的位(bit)。   |
| `bitcount key [start end]`                              | 统计字符串被设置为1的bit数，也可以指定统计范围按字节         |
| `bitop operration destkey key[key..]`                   | 对一个或多个保存二进制位的字符串 key 进行位元操作，并将结果保存到 destkey 上。 |
| `BITPOS key bit [start] [end]`                          | 返回字符串里面第一个被设置为1或者0的bit位。start和end只能按字节,不能按位 |

## 事务

### Redis 事务 命令

| 命令                                                     | 描述                                                         |
| :------------------------------------------------------- | :----------------------------------------------------------- |
| [Exec 命令](https://www.redis.net.cn/order/3639.html)    | 执行所有事务块内的命令。                                     |
| [Watch 命令](https://www.redis.net.cn/order/3642.html)   | 监视一个(或多个) key ，如果在事务执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。 |
| [Discard 命令](https://www.redis.net.cn/order/3638.html) | 取消事务，放弃执行事务块内的所有命令。                       |
| [Unwatch 命令](https://www.redis.net.cn/order/3641.html) | 取消 WATCH 命令对所有 key 的监视。                           |
| [Multi 命令](https://www.redis.net.cn/order/3640.html)   | 标记一个事务块的开始。                                       |

Redis单条命令保存原子性，但是事务不保证原子性

Redis 事务本质：一组命令的集合，一个事务种的所有命令都会被序列化，按顺序执行

开启事务->命令入队->执行命令

特点：一致性、顺序性、排他性

#### 正常和非正常事务

::: details 正常事务

```shell
> multi
OK
> set k1 v1
QUEUED
> set k2 v2
QUEUED
> get k1
QUEUED
> get k2
QUEUED
> exec
OK
OK
v1
v2
```

:::

::: details 编译异常，指命令错误

```
> multi
OK
> getk1
QUEUED
> exec
ReplyError: EXECABORT Transaction discarded because of previous errors.
```

:::

::: details 运行异常，指令语法正确，结果错误

```shell
> multi
OK
> incr k1
QUEUED
> get k2
QUEUED
> exec
v2

# 之前的版本会返回错误信息
ERR value is not an integer or out of range
v2
```

:::

#### 悲观锁

每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，Java中，synchronized的思想也是悲观锁

#### 乐观锁

每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候回判断一下再次期间别人有没有去更新这个数据，可以使用`版本号`等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量，`提交版本必须大于记录当前版本才能执行更新`



## 其他命令

### Redis 服务器 命令

| 命令                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Client Pause 命令](https://www.redis.net.cn/order/3659.html) | 在指定时间内终止运行来自客户端的命令                         |
| [Debug Object 命令](https://www.redis.net.cn/order/3672.html) | 获取 key 的调试信息                                          |
| [Flushdb 命令](https://www.redis.net.cn/order/3675.html)     | 删除当前数据库的所有key                                      |
| [Save 命令](https://www.redis.net.cn/order/3680.html)        | 异步保存数据到硬盘                                           |
| [Showlog 命令](https://www.redis.net.cn/order/3683.html)     | 管理 redis 的慢日志                                          |
| [Lastsave 命令](https://www.redis.net.cn/order/3677.html)    | 返回最近一次 Redis 成功将数据保存到磁盘上的时间，以 UNIX 时间戳格式表示 |
| [Config Get 命令](https://www.redis.net.cn/order/3667.html)  | 获取指定配置参数的值                                         |
| [Command 命令](https://www.redis.net.cn/order/3662.html)     | 获取 Redis 命令详情数组                                      |
| [Slaveof 命令](https://www.redis.net.cn/order/3682.html)     | 将当前服务器转变为指定服务器的从属服务器(slave server)       |
| [Debug Segfault 命令](https://www.redis.net.cn/order/3673.html) | 让 Redis 服务崩溃                                            |
| [Flushall 命令](https://www.redis.net.cn/order/3674.html)    | 删除所有数据库的所有key                                      |
| [Dbsize 命令](https://www.redis.net.cn/order/3671.html)      | 返回当前数据库的 key 的数量                                  |
| [Bgrewriteaof 命令](https://www.redis.net.cn/order/3654.html) | 异步执行一个 AOF（AppendOnly File） 文件重写操作             |
| [Cluster Slots 命令](https://www.redis.net.cn/order/3661.html) | 获取集群节点的映射数组                                       |
| [Config Set 命令](https://www.redis.net.cn/order/3669.html)  | 修改 redis 配置参数，无需重启                                |
| [Command Info 命令](https://www.redis.net.cn/order/3666.html) | 获取指定 Redis 命令描述的数组                                |
| [Shutdown 命令](https://www.redis.net.cn/order/3681.html)    | 异步保存数据到硬盘，并关闭服务器                             |
| [Sync 命令](https://www.redis.net.cn/order/3684.html)        | 用于复制功能(replication)的内部命令                          |
| [Client Kill 命令](https://www.redis.net.cn/order/3656.html) | 关闭客户端连接                                               |
| [Role 命令](https://www.redis.net.cn/order/3679.html)        | 返回主从实例所属的角色                                       |
| [Redis Monitor 命令](https://www.redis.net.cn/order/3678.html) | 实时打印出 Redis 服务器接收到的命令，调试用                  |
| [Command Getkeys 命令](https://www.redis.net.cn/order/3664.html) | 获取给定命令的所有键                                         |
| [Client Getname 命令](https://www.redis.net.cn/order/3658.html) | 获取连接的名称                                               |
| [Config Resetstat 命令](https://www.redis.net.cn/order/3670.html) | 重置 INFO 命令中的某些统计数据                               |
| [Command Count 命令](https://www.redis.net.cn/order/3663.html) | 获取 Redis 命令总数                                          |
| [Time 命令](https://www.redis.net.cn/order/3665.html)        | 返回当前服务器时间                                           |
| [Info 命令](https://www.redis.net.cn/order/3676.html)        | 获取 Redis 服务器的各种信息和统计数值                        |
| [Config rewrite 命令](https://www.redis.net.cn/order/3668.html) | 对启动 Redis 服务器时所指定的 redis.conf 配置文件进行改写    |
| [Client List 命令](https://www.redis.net.cn/order/3657.html) | 获取连接到服务器的客户端连接列表                             |
| [Client Setname 命令](https://www.redis.net.cn/order/3660.html) | 设置当前连接的名称                                           |
| [Bgsave 命令](https://www.redis.net.cn/order/3655.html)      | 在后台异步保存当前数据库的数据到磁盘                         |

### Redis 脚本 命令

| 命令                                                         | 描述                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------- |
| [Script kill 命令](https://www.redis.net.cn/order/3647.html) | 杀死当前正在运行的 Lua 脚本。                            |
| [Script Load 命令](https://www.redis.net.cn/order/3648.html) | 将脚本 script 添加到脚本缓存中，但并不立即执行这个脚本。 |
| [Eval 命令](https://www.redis.net.cn/order/3643.html)        | 执行 Lua 脚本。                                          |
| [Evalsha 命令](https://www.redis.net.cn/order/3644.html)     | 执行 Lua 脚本。                                          |
| [Script Exists 命令](https://www.redis.net.cn/order/3645.html) | 查看指定的脚本是否已经被保存在缓存当中。                 |
| [Script Flush 命令](https://www.redis.net.cn/order/3646.html) | 从脚本缓存中移除所有脚本。                               |

### Redis 发布订阅 命令

| 命令                                                         | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| [Unsubscribe 命令](https://www.redis.net.cn/order/3637.html) | 指退订给定的频道。                 |
| [Subscribe 命令](https://www.redis.net.cn/order/3636.html)   | 订阅给定的一个或多个频道的信息。   |
| [Pubsub 命令](https://www.redis.net.cn/order/3633.html)      | 查看订阅与发布系统状态。           |
| [Punsubscribe 命令](https://www.redis.net.cn/order/3635.html) | 退订所有给定模式的频道。           |
| [Publish 命令](https://www.redis.net.cn/order/3634.html)     | 将信息发送到指定的频道。           |
| [Psubscribe 命令](https://www.redis.net.cn/order/3632.html)  | 订阅一个或多个符合给定模式的频道。 |

## 使用

### Jedis使用

Jedis 是 Redis官方推荐的java链接开发工具，使用java操作Redis中间件

* 依赖

```xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>3.3.0</version>
</dependency>
```

* 使用

  jedis里面封装了前面详细的每条指令，直接 **.** 查看使用即可

```java
public static void main(){
    Jedis jedis = new Jedis("127.0.0.1", 6379);		// 连接Redis数据库，具体参数可以看构造方法
	jedis.ping()									// Redis操作指令
	jedis.close()  									// 断开数据库
}
```

* 事务

::: details 事务基础使用范例

```java
public static void main(){
    Jedis jedis=new Jedis("127.0.0.1",6379);
	Transaction multi=jedis.multi();		// 开启redis事务
	try {									
		multi.set("key1", "value1");		// 设置数据
		multi.set("key2", "value2");
		int num=1/0;						// 代码抛出异常事务，执行失败						
		multi.set("key3", "value3");
        multi.exec();
	} catch (Exception e) {
		multi.discard();					// redis 事务回滚
		e.printStackTrace();
	} finally {
        jedis.close();						
    }
}
```

:::

### SpringBoot整合

SpringBoot操作数据库，使用SpringData项目，可以连接常用数据库

* **注意**

  在SpringBoot2.x之后，原来使用的`Jedis`被替换成了`lettuce`

  **Jedis**：采用的直连，多个线程（多个终端连接Redis）操作，是不安全的，可以只用 Jedis pool 连接池避免线程不安全问题，但是会造成redis-server变大，性能受影响，类似`BIO`

  **lettuce**：采用netty，示例可以在多个线程中进行共享，不存在线程不安全问题，可以剑圣线程数据，类似`NIO`

* 依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
    <version>2.5.2</version>
</dependency>
```

* 配置

```properties
spring.redis.host=127.0.0.1
spring.redis.port=6379
spring.redis.lettuce.pool.max-active=8			# 配置连接池,使用lettuce这个
```

* 测试

  注意：传入对象需要序列化，否则会报错`org.springframework.data.redis.serializer.SerializationException: Cannot serialize; `

```java
@SpringBootTest
@ExtendWith(SpringExtension.class)
public class RedisTest {

    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @Test
    public void testRedisTemplate() {
        redisTemplate.opsForValue().set("k1", "v1");
        redisTemplate.opsForValue().set("k2", "v1");
        System.out.println(redisTemplate.opsForValue().get("k1"));
    }
    
        @Test
    public void testSerialization() throws JsonProcessingException {
        User user = new User("hjwu", 25);
        System.out.println(redisTemplate.opsForValue().get("user"));
        redisTemplate.delete("user");
        redisTemplate.opsForValue().set("user", user);		// user实体类需要序列化，否则会报错
        System.out.println(redisTemplate.opsForValue().get("user"));
    }
}
```

* 常规方法说明

```bash
opsForValue()	# 操作字符串 String
opsForList()	# 操作列表 List
opsForeSet()	# 操作集合
opsForHash()	# 操作哈希
opsForZSet()	# 操作有序集合
opsForGeo()		# 操作地理空间
opsForHyperLogLog()		# 基数统计
```

* 自定义`RestTemplate`

```java
@Configuration
public class RedisConfig {

    @Bean
    @SuppressWarnings("all")
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory) {

        RedisTemplate<String, Object> template = new RedisTemplate<>();
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
```

# Redis.conf详解

```shell
# redis 容量不区分大小写

# 可以使用include 组合多个配置问题
include .\path\to\local.conf
include c:\path\to\other.conf

# 网络配置
bind 127.0.0.1		# ip绑定
protected-mode yes	# 保护模式，默认开启
port 6379			# 端口

# 日志
loglevel notice		# 日志级别：debug|verbose|notice|warning
logfile ""			# 日志输入文件

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
slaveof <masterip> <masterport>		# 配置主机
masterauth <master-password>		# 配置主机密码

# 客户端连接
maxclients 10000 					# 最大客户端数量
maxmemory <bytes> 					# 最大内存限制
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
appendfilename "appendonly.aof"		# 默认文件名
# appendfsync always				# 数据同步策略
# always：每次修改就同步；everysec：每秒同步一次；不进行同步
```

# Redis持久化

Redis是缓存数据库，数据断电即失，所以数据最终是需要持久化到Oracle、Mysql数据中的

## RDB

RDB：Redis DataBases

**说明：**在指定的时间的间隔后，会将内存中的数据集快照写数据库；在Redis意外崩溃重启后，直接读取快照文件，进行数据恢复

**原理：**

在进行 RDB 的时候，redis 的主线程是不会做 io 操作的，主线程会 fork 一个子线程来完成该操作；

* Redis 调用forks。同时拥有父进程和子进程。
* 子进程将数据集写入到一个临时 RDB 文件中。
* 当子进程完成对新 RDB 文件的写入时，Redis 用新 RDB 文件替换原来的 RDB 文件，并删除旧的 RDB 文件。

这种工作方式使得 Redis 可以从写时复制（copy-on-write）机制中获益(因为是使用子进程进行写操作，而父进程依然可以接收来自客户端的请求。)

![](./images/redis/rdb.jpg)

触发条件：

* 满足save规则
* 执行flushall命令
* 退出redis

优缺点

优点：适合大规模数据恢复，对数据的完整性要求不高

缺点：需要一定的时间间隔完成操作，如果redis意外宕机，会丢失最后一段时间间隔内修改的数据；fork进程的时会占用一定的内存空间

## AOF

**AOF：**Append Only File

说明：以日志的形式来记录每个写的操作，将Redis执行过的所有指令记录下来（读操作不记录），只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。

检查aof文件正确性：`redis-check-aof --fix`

优缺点：

优点：三种同步模式，

*always* ：记录每次操作，文件完整性高

everysec ：每秒同步一次，可能丢失这一秒数据

*no* ：从不同步，效率最高

缺点：aof文件很大，数据量越大，修复速度越慢，先相当于读取文件中保存的指令，重头执行一遍

# Redis主从复制

主节点Master/Leader，子节点Slava/follower，默认每台Redis服务器都是主节点

数据的复制是单向的，只能从主节点复制到子节点，Master以写为主，Slave节点以读为主，读写分离

作用：

1. 数据冗余：主从复制实现数据热备份，	
2. 故障恢复：当主节点出现问题，可以由从节点提供服务，快速实现故障回复
3. 负载均衡：主从复制基础上，实现读写分离，主节点负责写，多个从节点负责读，提高Redis服务器并发量
4. 高可用（集群）：主从复制还是哨兵模式（至少一主二从）和集群的基础

单台Redis最大使用内存不应该超过20G

## 环境配置

* 只配置从库，不用配置主库，默认都是主库

```shell
# 查看当前库信息
info replication

# Replication
role:master				# 当前角色
connected_slaves:0		# 从机数量
master_repl_offset:0
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0
```

* 配置伪集群（单机多集群），一个服务器开启三个redis进程，复制三份默认配置文件进行修改

```shell
端口号
pid名字
log文件名
dump.db文件名
```

* 配置主从，在从机中配置

```shell
# 命令方式配置，暂时的
SLAVEOF 主机ip port

# 配置文件方式配置，永久的
replicaof masterip masterport	# 连接主机的ip port
masterauth master-password		# 连接主机的密码

# 重新查看主机、从机 info reolication 即可看到主机、从机角色等变化
```

主机断开重新回复，依旧可以主从复制，

从机断开重新回复，也能接收到主机复制的信息

* 复制原理

Slave从机启动成功后会向Mater发送一个sync同步命令，Master接到命令，启动后台的存盘进程，收集所有指令整个数据文件发送到Slave，并完成一次同步

全量复制：初次启动，断开重连，

增量复制：连接中，Master继续将新收集到的数据复制同步给从机

指定某个从机为主机

```shell
SLAVEOF NO ONE
```

# Redis哨兵模式

主从切换技术的方法是:当主服务器宕机后，需要手动把一台从服务器切换为主服务器，这就需要人工干预，费事费力，还会造成一段时间内服务不可用。这不是一种推荐的方式，更多时候，我们优先考虑哨兵模式。

 Redis从2.8开始正式提供了 Sentinel(哨兵)架构来解决这个问题，能够后台监控主机是否故暲，如果故障了根据投票数自动将从库转换为主库。

哨兵模式是一种特殊的模式，首先 Redis提供了哨兵的命令，哨兵是一个独立的进程；作为进程，它会独立运行，其原理是哨兵通过发送命令，等待 Redis服务器响应，从而监控运行的多个 Redis实例。

## 配置

1. 配置哨兵配置文件`sentinel.conf`

```shelll
# sentinel monitor 被监控的名称 host port 1
sentinel monitor myredis 127.0.0.1 6379 1

# 数字1，代表主机挂了，salve投票看让谁成为新的主机
```

2. 启动哨兵

```shell
redis-sentinel sentinel_conf
```

* 如果Master节点宕机了，哨兵会从从机中选取新的主机，主机连接回来，只能成为新主机的从机

优点：

* 哨兵集群，基于主从复制，具有主从复制的所有优点
* 可以主从切换，故障转移，系统可用性更好
* 哨兵模式是主从模式的升级，手动到自动，健壮性更好

缺点：

* Redis不好在线扩容
* 实现哨兵模式的配置，上面仅仅是简单的监控

::: details 哨兵模式的全部配置

哨兵集群同样需要配置多个文件，多个端口

```shell
# Example sentinel.conf

# 哨兵 sentinel 实例运行的端口，默认 26379
port 26379

# 哨兵 sentinel 的工作目录
dir /tmp

# 哨兵 sentinel 监控的 redis主节点的 ip port
# master-name可以自己命名的主节点名字只能由字母A-z、数字0-9、这三个字符组成
# quorum配置多少个 sentinel1哨兵统一认为 master主节点失联那么这时客观上认为主节点失联了
# sentinel monitor <master-name> <ip> <redis-port> <quorum>
sentinel mon i tor mcmaster 127.0.0.1 6379 2

# 当在 Redis实例中开启了 requi repass foobared授权密码这样所有连接 Redis实例的客户端都要提供密码
# 设置哨兵 sentinel1连接主从的密码注意必须为主从设置一样的验证密码
# sentinel auth-pass <master-name> <password>
sentinel auth-pass mymaster MySUPER--secret-0123pas sword

#指定多少毫秒之后主节点没有应答哨兵 sentinel1此时哨兵主观上认为主节点下线默认30秒
# sentinel down-afte seconds <master-name> <milliseconds>
sentinel down-after-milliseconds mymaster 30000

# 这个配置项指定了在发生fai1over主备切换时最多可以有多少个s1ave同时对新的 master进行同步
# 这个数字越小，完成fai1over所需的时间就越长，
# 但是如果这个数字越大，就意味着越多的s1ave因为rep1 ication而不可用。
# 可以通过将这个值设为1来保证每次只有一个s1ave处于不能处理命令请求的状态。
# sentinel parallel-syncs <master-name> <nums laves>
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
# sentinel notification -script <master-name> <script-path>
sentinel notification -script mymaster/var/redis/notify. sh

# 客户端重新配置主节点参数脚本
# 当一个 master由于fai1over而发生改变时，这个脚本将会被调用，通知相关的客户端关于 master地址已经发生改变的信息
# 以下参数将会在调用脚本时传给脚本
# <master-name> <role> <state> <from-ip> <from-port> <to-ip> <to-port>
# 日前< state>总是“ failover”，
# <ro1e>是“1 eaden”或者“ observer”中的一个。
# 参数from-ip，from-port，to-ip，to-port是用来和旧的 master和新的 master(即旧的s1ave)通信的
# 这个脚本应该是通用的，能被多次调用，不是针对性的。
# sentinel client-reconfig-script <master-name> <script-path>
sentinel client-reconfig-script mymaster /var/redis/reconfig sh
```

:::

# Redis 缓存穿透和雪崩

## 缓存穿透

说明：指缓存查不到数据，去数据层查找

缓存穿透的概念很简单，用户想要査询—个数据，发现 . redis内存数据库没有，也就是缓存没有命中，于是向持久层数据库査询。发现也没有，于是本次査询失败。当用户很多的时候，缓存都没有命中，于是都去请求了持久层数据库。这会给持久层数据库造成很大的压力，这时候就相当于出现了缓存穿透。

**解决方案：**

* 布隆过滤器

  布隆过滤器是—种数据结构，对所有可能査询的参数以hash形式存储，在控制层先进行校验，不符合则丟弃，从而避免了对底层存储系统的查询压力

* 缓存空对象

  当存储层不命中后，即使返回的空对象也将其缓存起来，同时会设置一个过期时间，之后再访问这个数据将会从缓存中获取，保护了后端数据源；这种会造成存储空间浪费，且对需要保持一致性的业务有影响

## 缓存击穿

说明：查询量太大，缓存过期的空挡，全部查询到数据层

这里需要注意和缓存击穿的区别，缓存击穿，是指一个key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个ke在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个屏障上凿开了一个洞。

当某个key在过期的瞬间，有大量的请求并发访问，这类数据一般是热点数据，由于缓存过期，会同时访问数据库来查询最新数据，并且回写缓存，会导使数据库瞬间压力过大。

场景：微博热搜，导致服务器宕机

**解决方案：**

* 设置设点数据永不过期，也会浪费一定空间
* 加互斥锁，使用分布式锁，保证对于每个key同时有一个线程去查询后端服务，也就是在缓存到数据层查询的时候，只允许一个线程去查询，其他线程没有获得分布式锁的权限，因此只需要等待即可。这种方式将高并发的压力转移到了分布式锁，因此对分布式锁的考验很大

## 缓存雪崩

缓存雪崩，是指在某一个时间段，缓存集中过期失效

产生雪崩的原因之一，比如在写本文的时候，马上就要到双十二零点，很快就会迎来一波抢购，这波商品时间比较集中的放入了缓存，假设缓存一个小时。那么到了凌晨一点钟的时候，这批商品的缓存就都过期了。而对这批商品的访问査询，都落到了数据库上，对于数据库而言，就会产生周期性的压力波峰。于是所有的请求都会达到存储层，存储层的调用量会暴增，造成存储层也会挂掉的情况。

**解决方案：**

* Redis高可用，增加Redis集群数量（异地多活）
* 降级限流，这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。
* 数据预热，数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀





















