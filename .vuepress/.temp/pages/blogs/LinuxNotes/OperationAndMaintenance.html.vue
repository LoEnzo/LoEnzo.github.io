<template><div><p>::: tip</p>
<p>:::</p>
<!-- more -->
<h1 id="qa线上问题处理" tabindex="-1"><a class="header-anchor" href="#qa线上问题处理" aria-hidden="true">#</a> QA线上问题处理</h1>
<p>Q：线上发现某个子进程CPU占用持续过高，正常情况下是但时间的暂用过高，对该现象进行排查</p>
<p>A：使用jstack工具定位错误位置</p>
<p>原因：正则代码匹配问题，导致无线循环遍历匹配，子线程CPU占用过高</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>top # top命令，查看占用CPU过高的进程，居于首位的

PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                           8713 prouser   20   0 9812m 2.3g  14m S 200.8  7.2  93:58.94 java 

top -H -p 进程ID # 查看改进程中，占用CPU高的线程
PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                           8894 prouser   20   0 9812m 2.3g  14m R 99.8  7.2  21:28.33 java                                     
8928 prouser   20   0 9812m 2.3g  14m R 99.8  7.2  42:50.46 java

# 查看长时间占用CPU的线程，打印十进制线程ID，jstack 需要
printf &quot;%x\n&quot; 8894
22be

jstack 8713 | grep &quot;22be&quot; -A 1000 &gt;jastack.log # 使用jstack工具，查看进程的近1000行日志输出到jastack.log日志文件，查看日志，定位错误位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


