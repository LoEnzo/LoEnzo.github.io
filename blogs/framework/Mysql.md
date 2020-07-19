---
title: Mysql 操作手册
tags:
 - SQL
categories:
 - framework
date: 2020-05-11
---

::: tip

mysql安装以及使用

:::

<!-- more -->

## 一、账户

用户名，密码： root, always

## 二、报错

### 1.  springBoot整合mybatise启动报错

```cmd
Failed to obtain JDBC Connection; nested exception is java.sql.SQLException: The server time zone value '�й���׼ʱ��' is unrecognized or represents more than one time zone. You must configure either the server or JDBC driver (via the 'serverTimezone' configuration property) to use a more specifc time zone value if you want to utilize time zone support.
```

原因：使用 mysql 的 jdbc 驱动最新版（6.0+）时，会遇到数据库和系统时区差异引起的问题。

解决：在 jdbc 连接的 url 后面添加 serverTimezone=CST

注：CST 代表的是中国上海时间（与北京时间，东八区相同）

例：jdbc:mysql://localhost:3306**/your_database_name**?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST

