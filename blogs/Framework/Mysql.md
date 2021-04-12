---
title: Mysql 操作手册
tags:
 - SQL
categories:
 - Framework
date: 2020-05-11
---

::: tip

mysql安装以及使用

:::

<!-- more -->

## linux安装mysql

* 下载安装，使用命令可以直接获取对应你系统的mysql版本

  > sudo apt-get install mysql-server

* 初始化设置

  > sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

  ::: details mysqld.cnf基本设置
  
  ```properties
  [mysqld]
  
  user            = mysql
  pid-file        = /var/run/mysqld/mysqld.pid
  socket  = /var/run/mysqld/mysqld.sock
  port            = 3306
  datadir = /var/lib/mysql
  character_set_server=utf8
  
  bind-address            = 127.0.0.1
  key_buffer_size         = 16M
  myisam-recover-options  = BACKUP
  log_error = /var/log/mysql/error.log
  max_binlog_size   = 100M
  ```
  
  :::
  
 * 启动服务

   >  /etc/init.d/mysql start



## 基本设置

* 修改为密码登陆

  ```shell
  sudo mysql -u root
  
  use mysql;
  mysql> SELECT user, host, plugin FROM user;
  
  # 修改root用户认证方式
  update user set plugin='mysql_native_password' where user='root';
  ```
  
 * root安全设置

   > sudo mysql_secure_installation

   ::: details 安全设置

   ```shell
   ➜  ~ sudo mysql_secure_installation 
   
   Securing the MySQL server deployment.
   
   Connecting to MySQL using a blank password.
   The 'validate_password' plugin is installed on the server.
   The subsequent steps will run with the existing configuration
   of the plugin.
   Please set the password for root here.
   # 设置密码，但是这里可以看到，由于启用了validate_password，所以如果密码复杂度不够，会如下所示的提示密码设置不成功
   New password: 
   
   Re-enter new password: 
   
   Estimated strength of the password: 25 
   Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
    ... Failed! Error: Your password does not satisfy the current policy requirements
   
   #密码设置成Root@123这种有大小写、特殊字符、数字的内容，就通过了
   New password: 
   
   Re-enter new password: 
   
   Estimated strength of the password: 100 
   Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
   By default, a MySQL installation has an anonymous user,
   allowing anyone to log into MySQL without having to have
   a user account created for them. This is intended only for
   testing, and to make the installation go a bit smoother.
   You should remove them before moving into a production
   environment.
   # 是否删除匿名用户，这里删除即可，没太大用处
   Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
   Success.
   
   
   Normally, root should only be allowed to connect from
   'localhost'. This ensures that someone cannot guess at
   the root password from the network.
   #　是否禁用root用户远程登录？这里不禁用，当然如果你希望禁用，并且创建别的用户远程登录，这里可以选择ｙ
   Disallow root login remotely? (Press y|Y for Yes, any other key for No) : n
   
    ... skipping.
   By default, MySQL comes with a database named 'test' that
   anyone can access. This is also intended only for testing,
   and should be removed before moving into a production
   environment.
   
   # 是否删除test数据库，这里删除即可，不然留着也没什么用
   Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
    - Dropping test database...
   Success.
   
    - Removing privileges on test database...
   Success.
   
   Reloading the privilege tables will ensure that all changes
   made so far will take effect immediately.
   # 是否刷新权限？，这里选择y，然后会生效
   Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
   Success.
   
   All done! 
   ```

		:::




## QA：

**Q**: **Window MySql服务突然启动报错**

::: tip

本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动停止

:::

**A**：

* 备份安装目录下`data`文件夹，清空里面数据；

* 执行初始化命令`mysqld --initialize-insecure --user=mysql`
* 安装服务` mysqld --install MySQL`，启动服务`net start mysql`
* 登录`MySql`，输入指令`mysql -u root -p`，初始化密码在**data**目录下`.err`文件里
* 登录成功后修改为之前的密码，或者新密码，按顺序推荐，二三未试过

```mysql
# 方案一
mysql> alter user 'root'@'localhost' identified by 'cy7m0ypu8CpLFperzI45';
# 方案二
mysql> set password for 'root'@'localhost'=password('cy7m0ypu8CpLFperzI45');
# 方案三,需要刷新权限
mysql> update mysql.user set authentication_string=password('cy7m0ypu8CpLFperzI45') where user='root' and Host = 'localhost';
mysql> flush privileges;
```

## Other

**1.  springBoot整合mybatise启动报错**

```shell
Failed to obtain JDBC Connection; nested exception is java.sql.SQLException: The server time zone value '�й���׼ʱ��' is unrecognized or represents more than one time zone. You must configure either the server or JDBC driver (via the 'serverTimezone' configuration property) to use a more specifc time zone value if you want to utilize time zone support.
```

原因：使用 mysql 的 jdbc 驱动最新版（6.0+）时，会遇到数据库和系统时区差异引起的问题。

解决：在 jdbc 连接的 url 后面添加 serverTimezone=CST

注：CST 代表的是中国上海时间（与北京时间，东八区相同）

例：jdbc:mysql://localhost:3306**/your_database_name**?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=CST