---
title: influxDB简单使用
tags:
 - influxDB
categories:
 - BigData
date: 2020-08-17
---

::: tip

:::

<!-- more -->

## 安装启动

* yum，apt安装influxDB，启动服务`sudo service influxdb start`

* 压缩包安装，在`对应安装目录\usr\bin\influxd`启动，也可以将该路径加入环境变量，直接以配置文件方式启动

  `nohup influxd  -config /opt/app/lab/influxdb-1.6.2-1/etc/influxdb/influxdb.conf &`

* [参数参考1](https://www.cnblogs.com/mafeng/p/6848166.html)，[参数参考2](https://www.cnblogs.com/guyeshanrenshiwoshifu/p/9188368.html)

## 常用命令

```shell
# 进入influx
influx

# 查看influxDB状态
show stats

# 创建一个数据库
create database "db_name"

# 显示所有数据库
show databases

# 删除数据库
drop database "db_name"

# 使用数据库
user db_name

# 查看该数据下所有表
show measurements 

# 创建表，不需要单独表，插入语句即可，表就是test
insert test,host=127.0.0.1,monitor_name=test count=1 

# 查看表的所有列
show series from your_table_name

# 删除表
drop measurement measurement_name

# 查询表
select * from database limit 10
```

## 开启身份验证

```shell
# 创建管理员
influx
> CREATE USER 'your_name' WITH PASSWORD 'your_password' WITH ALL PRIVILEGES
> SHOW USERS
user    admin
hjwu    true
```

开启身份验证（编辑influxdb配置文件，将165行处配置项的值由false改为true并保存退出）

```shell
162 [http]
163   enabled = true
164   bind-address = ":8086"
165   auth-enabled = true
166   log-enabled = true
167   write-tracing = false
168   pprof-enabled = false
169   https-enabled = false
170   https-certificate = "/etc/ssl/influxdb.pem"
171   max-row-limit = 10000
```

使用管理员登陆

```shell
influx -username your_name -password your_password
```

## 保存策略

注：保存策略即存储在数据库中的数据，多长时间删除一次。

```shell
# 创建保存策略
create retention policy  "policy_name" on test_db duration 2h replication 1 default

# 查看保存的策略
show retention policies on your_database_name

# 修改保存策略
ALTER  retention policy "default" on test_db DEFAULT（修改默认）
或者：ALTER  retention policy "default" on "your_database_name" duration 719h

# 删除保留策略
drop retention policy policy_name on your_database_name
```

## 在浏览器中如何使用

InfluxDB默认是通过Http请求访问数据库的，也支持UDP协议（默认关闭），所以可以通过浏览器直接查询或新增删除数据。

```shell
# 格式：数据库地址 + 端口 + query?db = 数据库名&q = 查询或删除或插入的SQL语句
http://10.10.1.2:8086/query?db=testdb&q=select * from measurement limit 10
```
