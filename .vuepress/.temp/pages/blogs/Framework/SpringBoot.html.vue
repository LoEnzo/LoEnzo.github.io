<template><div><p>::: tip</p>
<p><strong>SpringBoot</strong> 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。简单来说，SpringBoot就是整合了很多基础框架的模板配置方式，达到开箱即用的效果。</p>
<p>:::</p>
<!-- more -->
<h2 id="一、知识点" tabindex="-1"><a class="header-anchor" href="#一、知识点" aria-hidden="true">#</a> 一、知识点</h2>
<h3 id="_1-springboot项目下的mvnw与mvnw-cmd" tabindex="-1"><a class="header-anchor" href="#_1-springboot项目下的mvnw与mvnw-cmd" aria-hidden="true">#</a> 1. SpringBoot项目下的mvnw与mvnw.cmd</h3>
<p>Maven是一个常用的构建工具，但是Maven的版本和插件的配合并不是那么完美，有时候你不得不切换到一个稍微旧一些的版本，以保证所有东西正常工作，而Gradle提供了一个Wrapper，可以很好解决版本切换的问题，当然更重要的是不需要预安装Gradle。</p>
<p>Maven虽然没有官方的Wrapper，但是有一个第三方的Wrapper可以使用。</p>
<p>安装： <code v-pre>mvn -N io.takari:maven:wrapper </code>；</p>
<p>安装指定版本：<code v-pre>mvn -N io.takari:maven:wrapper -Dmaven=3.1.0</code></p>
<p>构建：<code v-pre>./mvnw clean install</code></p>
<h3 id="_2-jar包查看" tabindex="-1"><a class="header-anchor" href="#_2-jar包查看" aria-hidden="true">#</a> 2. jar包查看</h3>
<p>springboot最终一般是打成jar包，我们一般会指定一个稳定版本打一个Tag分支，确定本次上线的jar版本是否正确需要和上次的jar包进行对比，而服务器通过临时解压开查是比较麻烦的，受限于网速，jar包大小，下载到本地用软件对比也比较麻烦，可以直接用jar指令来查看版本信息。</p>
<p>常用指令：</p>
<p>查看jar包中工程的信息：<code v-pre>jar tvf jar包路径 | grep &quot;jar包中工程名&quot;</code></p>
<p>输出jar包某个工程：<code v-pre>jar -xvf jar包路径 BOOT-INF/lib/需要输入的工程名</code></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-c</td>
<td>创建一个jar包</td>
</tr>
<tr>
<td>-t</td>
<td>显示jar中的内容列表</td>
</tr>
<tr>
<td>-x</td>
<td>解压jar包</td>
</tr>
<tr>
<td>-u</td>
<td>添加文件到jar包中</td>
</tr>
<tr>
<td>-f</td>
<td>指定jar包的文件名</td>
</tr>
<tr>
<td>-v</td>
<td>生成详细的报造，并输出至标准设备</td>
</tr>
<tr>
<td>-m</td>
<td>指定manifest.mf文件.(manifest.mf文件中可以对jar包及其中的内容作一些一设置)</td>
</tr>
<tr>
<td>-0</td>
<td>产生jar包时不对其中的内容进行压缩处理</td>
</tr>
<tr>
<td>-M</td>
<td>不产生所有文件的清单文件(Manifest.mf)。这个参数与忽略掉-m参数的设置</td>
</tr>
<tr>
<td>-i</td>
<td>为指定的jar文件创建索引文件</td>
</tr>
<tr>
<td>-C</td>
<td>表示转到相应的目录下执行jar命令,相当于cd到那个目录，然后不带-C执行jar命令</td>
</tr>
</tbody>
</table>
</div></template>


