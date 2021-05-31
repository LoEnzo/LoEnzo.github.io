---
title: Mybatis-Plus的使用
tags:
 - Mybatis-Plus
categories:
 - Framework
date: 2020-05-31
---

::: tip

:::

<!-- more -->

| 对比项              | mybatis-plus                                                 | mybatis-enhance                                              | fastmybatis                                                  | mapper                                                       |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 表名映射            | @TableName                                                   | @Table                                                       | JPA:@Table                                                   | JPA:@Table                                                   |
| 主键映射            | @TableId                                                     | @Id                                                          | JPA:@Id                                                      | JPA:@Id                                                      |
| 字段映射            | @TableField                                                  | @Column                                                      | JPA:@Column                                                  | JPA:@Column                                                  |
| CRUD-主键查询       | selectById(Serializable var1)                                | selectOne(Id id)                                             | getById(ID var1)                                             | selectByPrimaryKey(Object var1)                              |
| 自定义字段          | `queryWrapper.select("name", "age")`                         | `selectBySql(String sql, Map<String, Object> params)`        | `mapper.listMap(columns, query)`                             | `example.selectProperties("id", "countryname");``Example.builder(Country.class)        .select("countryname")` |
| 自定义字段List<Map> | selectMaps(Wrapper var1)                                     | selectBySql()                                                | mapper.listMap(columns, query)                               | 无                                                           |
| 条件构造器          | Wrapper                                                      | 无构造器，提供selectBySql(String sql, Map<String, Object> params)方法 | Query                                                        | Example/Weekend                                              |
| 分页查询            | selectPage(IPagevar1, Wrappervar2)                           | selectByPageable(Pageable pageable)                          | new Query().page(1, 2)                                       | selectByExample(weekend) 实体类中包含page/rows字段           |
| 特色                | 功能强大、稳定                                               | Mapper采用spring data jpa一样的方式，接口方法名按规范命名可以不用写sql。提供相同namespace的mappper.xml自动合并 | Query条件构造简单方便，而且提供相同namespace的mapper.xml自动合并 | 提供Example、Weekend                                         |
| 文档链接            | [mybatis-plus](http://baomidou.oschina.io/mybatis-plus-doc/#/?id=) | [mybatis-enhance](https://gitee.com/hengboy/mybatis-enhance) | [fastmybatis](https://durcframework.gitee.io/fastmybatis/)   | [mapper](https://gitee.com/free/Mapper/wikis/1.3-spring-boot?sort_id=208198) |