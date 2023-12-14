<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h1 id="常用mybatis增强型框架对比" tabindex="-1"><a class="header-anchor" href="#常用mybatis增强型框架对比" aria-hidden="true">#</a> 常用mybatis增强型框架对比</h1>
<table>
<thead>
<tr>
<th>对比项</th>
<th>mybatis-plus</th>
<th>mybatis-enhance</th>
<th>fastmybatis</th>
<th>mapper</th>
</tr>
</thead>
<tbody>
<tr>
<td>表名映射</td>
<td>@TableName</td>
<td>@Table</td>
<td>JPA:@Table</td>
<td>JPA:@Table</td>
</tr>
<tr>
<td>主键映射</td>
<td>@TableId</td>
<td>@Id</td>
<td>JPA:@Id</td>
<td>JPA:@Id</td>
</tr>
<tr>
<td>字段映射</td>
<td>@TableField</td>
<td>@Column</td>
<td>JPA:@Column</td>
<td>JPA:@Column</td>
</tr>
<tr>
<td>CRUD-主键查询</td>
<td>selectById(Serializable var1)</td>
<td>selectOne(Id id)</td>
<td>getById(ID var1)</td>
<td>selectByPrimaryKey(Object var1)</td>
</tr>
<tr>
<td>自定义字段</td>
<td><code v-pre>queryWrapper.select(&quot;name&quot;, &quot;age&quot;)</code></td>
<td><code v-pre>selectBySql(String sql, Map&lt;String, Object&gt; params)</code></td>
<td><code v-pre>mapper.listMap(columns, query)</code></td>
<td><code v-pre>example.selectProperties(&quot;id&quot;, &quot;countryname&quot;);``Example.builder(Country.class)        .select(&quot;countryname&quot;)</code></td>
</tr>
<tr>
<td>自定义字段List&lt; Map&gt;</td>
<td>selectMaps(Wrapper var1)</td>
<td>selectBySql()</td>
<td>mapper.listMap(columns, query)</td>
<td>无</td>
</tr>
<tr>
<td>条件构造器</td>
<td>Wrapper</td>
<td>无构造器，提供selectBySql(String sql, Map&lt;String, Object&gt; params)方法</td>
<td>Query</td>
<td>Example/Weekend</td>
</tr>
<tr>
<td>分页查询</td>
<td>selectPage(IPagevar1, Wrappervar2)</td>
<td>selectByPageable(Pageable pageable)</td>
<td>new Query().page(1, 2)</td>
<td>selectByExample(weekend) 实体类中包含page/rows字段</td>
</tr>
<tr>
<td>特色</td>
<td>功能强大、稳定</td>
<td>Mapper采用spring data jpa一样的方式，接口方法名按规范命名可以不用写sql。提供相同namespace的mappper.xml自动合并</td>
<td>Query条件构造简单方便，而且提供相同namespace的mapper.xml自动合并</td>
<td>提供Example、Weekend</td>
</tr>
<tr>
<td>文档链接</td>
<td><a href="http://baomidou.oschina.io/mybatis-plus-doc/#/?id=" target="_blank" rel="noopener noreferrer">mybatis-plus</a></td>
<td><a href="https://gitee.com/hengboy/mybatis-enhance" target="_blank" rel="noopener noreferrer">mybatis-enhance</a></td>
<td><a href="https://durcframework.gitee.io/fastmybatis/" target="_blank" rel="noopener noreferrer">fastmybatis</a></td>
<td><a href="https://gitee.com/free/Mapper/wikis/1.3-spring-boot?sort_id=208198" target="_blank" rel="noopener noreferrer">mapper</a></td>
</tr>
</tbody>
</table>
</div></template>


