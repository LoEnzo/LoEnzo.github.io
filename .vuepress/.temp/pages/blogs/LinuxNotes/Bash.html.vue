<template><div><p>::: tip</p>
<p>Bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。Shell 有很多种，只要能给用户提供命令行环境的程序，都可以看作是 Shell，Bash 是目前最常用的 Shell。</p>
<p>:::</p>
<!-- more -->
<h2 id="常用指令和快捷键" tabindex="-1"><a class="header-anchor" href="#常用指令和快捷键" aria-hidden="true">#</a> 常用指令和快捷键</h2>
<h3 id="基础指令" tabindex="-1"><a class="header-anchor" href="#基础指令" aria-hidden="true">#</a> 基础指令</h3>
<p>$ 是用户的命令提示，实例：<code v-pre>[user@hostname] $</code>，#是root用户的命令提示，实例：<code v-pre>[root@hostname] #</code></p>
<table>
<thead>
<tr>
<th>指令</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>$ echo $shell</td>
<td>查看当前运行的shell</td>
</tr>
<tr>
<td>$ cat /etc/shells</td>
<td>查看当前Linux安装的所有shell</td>
</tr>
<tr>
<td>$ bash</td>
<td>一般Linux进入命令行环境就已经打开了bash,如果默认shell不是bash,可以命令行进入bash</td>
</tr>
<tr>
<td>$ bash --version</td>
<td>bash版本</td>
</tr>
<tr>
<td>$ exit</td>
<td>退出</td>
</tr>
<tr>
<td>$ pwd</td>
<td>查看当前路径</td>
</tr>
</tbody>
</table>
<h3 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a> 常用快捷键</h3>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>alt+b</td>
<td>移动到当前单词首位</td>
</tr>
<tr>
<td>clear | ctrl+l</td>
<td>清除屏幕内容</td>
</tr>
<tr>
<td>shift + PageUp</td>
<td>向上滚动</td>
</tr>
<tr>
<td>shift + PageDown</td>
<td>向下滚动</td>
</tr>
<tr>
<td>cd -</td>
<td>进入上一次进入的目录</td>
</tr>
<tr>
<td>echo -n</td>
<td>不换行输入</td>
</tr>
<tr>
<td>echo -e</td>
<td>能输入\t \n 转义内容</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> 特殊符号</h3>
<p><strong>单引号</strong>：单引号保留字符的字面意思，<code v-pre>*</code>，<code v-pre>\</code>，<code v-pre>$</code>，`` `符号都会变成普通字符</p>
<p><strong>双引号</strong>：以上的特殊字符都会保留其扩展的含义</p>
<h3 id="别名-alias-命令" tabindex="-1"><a class="header-anchor" href="#别名-alias-命令" aria-hidden="true">#</a> 别名，alias 命令</h3>
<p><code v-pre>alias</code>命令用来为一个命令指定别名，这样更便于记忆。下面是<code v-pre>alias</code>的格式。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 左边是别名,右边是原始命令名称
$ alias NAME=DEFINITION

# 显示所有别名
$ alias

# 去除别名
$ unalias name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本入门" tabindex="-1"><a class="header-anchor" href="#脚本入门" aria-hidden="true">#</a> 脚本入门</h2>
<p>参考：<a href="https://wangdoc.com/bash/intro.html" target="_blank" rel="noopener noreferrer">Bash脚本教程</a></p>
<h4 id="_1-shebang行" tabindex="-1"><a class="header-anchor" href="#_1-shebang行" aria-hidden="true">#</a> 1. Shebang行</h4>
<p>脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以<code v-pre>#!</code>字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。</p>
<p><code v-pre>#!</code>后面就是脚本解释器的位置，Bash 脚本的解释器一般是<code v-pre>/bin/sh</code>或<code v-pre>/bin/bash</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>#!/bin/sh

#!/bin/bash

# 如果 Bash 解释器不放在目录/bin，脚本就无法执行了。为了保险，可以写成下面这样
#!/usr/bin/env bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-脚本执行权限" tabindex="-1"><a class="header-anchor" href="#_2-脚本执行权限" aria-hidden="true">#</a> 2. 脚本执行权限</h4>
<p>脚本一般使用<code v-pre>.sh</code>作为结尾，只要脚本总指定了<code v-pre>Shebang</code>行的就可以执行，前提的脚本具有执行权限，</p>
<p>脚本的权限通常设为<code v-pre>755</code>（拥有者有所有权限，其他人有读和执行权限）或者<code v-pre>700</code>（只有拥有者可以执行）。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 给所有用户执行权限
$ chmod +x script.sh

# 给所有用户读权限和执行权限(read, excute)
$ chmod +rx script.sh
# 或者
$ chmod 755 script.sh

# 只给脚本拥有者读权限和执行权限
$ chmod u+rx script.sh

# 没有执行权限,一般执行指令如下
sh script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-脚本参数" tabindex="-1"><a class="header-anchor" href="#_3-脚本参数" aria-hidden="true">#</a> 3. 脚本参数</h4>
<p>调用脚本时，可以带参数，参数之间以空格断开，</p>
<p>在脚本内部可以使用<code v-pre>$1</code>-<code v-pre>$9</code>调用输入的1-9个参数，10个参数以上的格式为<code v-pre>${10}</code>，<code v-pre>$0</code>是脚本的文件名，即<code v-pre>script.sh</code>，·$</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 脚本执行样例
sh script.sh parameter1 parameter2

# exit 命令用于终止当前脚本的执行，并向 Shell 返回一个退出值, 0代表成功, 1代表失败
$ exit

# 在脚本中 exit 后面可以携带参数0,1 用于提示执行成功或失败
# exit  0：正常运行程序并退出程序；
# exit  1：非正常运行导致退出程序；
$ exit 0 
$ exit 1

# 环境变量 $? 可以读取上一个命令的返回值
$ mkdir existCatgre
$ cd existCatgre
$ $?
$ 0
$ cd notExistCatgre
$ $?
$ 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-符号" tabindex="-1"><a class="header-anchor" href="#_4-符号" aria-hidden="true">#</a> 4. 符号</h4>
<table>
<thead>
<tr>
<th>符号</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>'     '</td>
<td>单引号，用于保留字符的字面含义，$ * \ 都会变成普通字符；如果要对单引号里面的\转移，外层需要加上$, 例：<code v-pre>$ echo $'it\'s'</code>，不过<strong>更合理应该是<code v-pre>$ echo &quot;it's&quot;</code></strong></td>
</tr>
<tr>
<td>&quot;   &quot;</td>
<td>双引号，保存原始命令的输出格式，例如: <code v-pre>echo &quot;$(cal)&quot;</code>,除了 $ ` \会被bash自动扩展外，其他符号能保留本来的含义；文件名包含空格，需要用双引号。</td>
</tr>
<tr>
<td>``</td>
<td>反单引号，与$() 一样，用于命令替换，好处在于所有的unix shell都支持，移植性高，缺点是容易看错</td>
</tr>
<tr>
<td><strong>:=</strong></td>
<td>${var:=string}，如果变量var为空，就将string赋值给var</td>
</tr>
<tr>
<td><strong>:+</strong></td>
<td>${var:=string}，如果变量var不为空，才将string复制给var</td>
</tr>
</tbody>
</table>
<h4 id="_5-指令" tabindex="-1"><a class="header-anchor" href="#_5-指令" aria-hidden="true">#</a> 5.指令</h4>
<table>
<thead>
<tr>
<th>指令</th>
<th>含义</th>
<th>事例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ln（链接指令）ln -参数 [源文件]  [目标文件]</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td>-s</td>
<td>创建软连接</td>
<td>ln -s  web.jar  temp.jar</td>
</tr>
</tbody>
</table>
<h4 id="_6-条件判断" tabindex="-1"><a class="header-anchor" href="#_6-条件判断" aria-hidden="true">#</a> 6. 条件判断</h4>
<p>条件语句，前后要用<code v-pre>if</code>，<code v-pre>fi</code>包起来；[] 标识条件测试，前后都要有空格；</p>
<p>在shell中，<code v-pre>then</code>和<code v-pre>if</code>是分开的语句。如果要在同一行里面输入，则需要用分号将他们隔开；</p>
<p><strong>if中对比变量的处理都要加双引号</strong>，以免出现不必要的错误；</p>
<p>空变量和没有初始化的变量可能会对shell脚本测试产生灾难性的影响，因此在不确定变量的内容的时候，在测试号前使用-n或者-z测试一下</p>
<p>? 变量包含了之前执行命令的退出状态（最近完成的前台进程）（可以用于检测退出状态）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>if [ commands ]; then
  commands
elif [ commands ]; then
  commands...
else
  commands
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件判断</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>备注</th>
<th>事例</th>
</tr>
</thead>
<tbody>
<tr>
<td>-eq  （equal）</td>
<td>等于</td>
<td>if [ ${pid:=0} -eq 0 ] 判断PID是否为0</td>
</tr>
<tr>
<td>-ne  （not equal）</td>
<td>不等于</td>
<td></td>
</tr>
</tbody>
</table>
<p>if参数</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>备注</th>
<th>事例</th>
</tr>
</thead>
<tbody>
<tr>
<td>[ -a FILE ]</td>
<td>如果 FILE 存在则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -b FILE ]</td>
<td>如果 FILE 存在且是一个块特殊文件则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -c FILE ]</td>
<td>如果 FILE 存在且是一个字特殊文件则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -d FILE ]</td>
<td>如果 FILE 存在且是一个目录则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -e FILE ]</td>
<td>如果 FILE 存在则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -f FILE ]</td>
<td>如果 FILE 存在且是一个普通文件则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -g FILE ]</td>
<td>如果 FILE 存在且已经设置了SGID则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -h FILE ]</td>
<td>如果 FILE 存在且是一个符号连接则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -k FILE ]</td>
<td>如果 FILE 存在且已经设置了粘制位则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -p FILE ]</td>
<td>如果 FILE 存在且是一个名字管道(F如果O)则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -r FILE ]</td>
<td>如果 FILE 存在且是可读的则为真。</td>
<td></td>
</tr>
<tr>
<td><strong>[ -s FILE ]</strong></td>
<td>如果 FILE 存在且大小不为o则为真。</td>
<td>判断文件是否存在</td>
</tr>
<tr>
<td>[ -t FD ]</td>
<td>如果文件描述符 FD 打开且指向一个终端则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -u FILE ]</td>
<td>如果 FILE 存在且设置了SUID (set user ID)则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -w FILE ]</td>
<td>如果 FILE 如果 FILE 存在且是可写的则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -x FILE ]</td>
<td>如果 FILE 存在且是可执行的则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -O FILE ]</td>
<td>如果 FILE 存在且属有效用户ID则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -G FILE ]</td>
<td>如果 FILE 存在且属有效用户组则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -L FILE ]</td>
<td>如果 FILE 存在且是一个符号连接则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -N FILE ]</td>
<td>如果 FILE 存在 and has been mod如果ied since it was last read则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -S FILE ]</td>
<td>如果 FILE 存在且是一个套接字则为真。</td>
<td></td>
</tr>
<tr>
<td>[ FILE1 -nt FILE2 ]</td>
<td>如果 FILE1 has been changed more recently than FILE2, or 如果 FILE1 exists and FILE2 does not则为真。</td>
<td></td>
</tr>
<tr>
<td>[ FILE1 -ot FILE2 ]</td>
<td>如果 FILE1 比 FILE2 要老, 或者 FILE2 存在且 FILE1 不存在则为真。</td>
<td></td>
</tr>
<tr>
<td>[ FILE1 -ef FILE2 ]</td>
<td>如果 FILE1 和 FILE2 指向相同的设备和节点号则为真。</td>
<td></td>
</tr>
<tr>
<td>[ -o OPTIONNAME ]</td>
<td>如果 shell选项 “OPTIONNAME” 开启则为真。</td>
<td></td>
</tr>
<tr>
<td><strong>[ -z STRING ]</strong></td>
<td>“STRING” 的长度为零则为真。</td>
<td>判断文件名是否存在</td>
</tr>
<tr>
<td>[ -n STRING ] or [ STRING ]</td>
<td>“STRING” 的长度为非零 non-zero则为真。</td>
<td></td>
</tr>
<tr>
<td>[ STRING1 == STRING2 ]</td>
<td>如果2个字符串相同。 “=” may be used instead of “==” for strict POSIX compliance则为真。</td>
<td></td>
</tr>
<tr>
<td>[ STRING1 != STRING2 ]</td>
<td>如果字符串不相等则为真。</td>
<td></td>
</tr>
<tr>
<td>[ STRING1 &lt; STRING2 ]</td>
<td>如果 “STRING1” sorts before “STRING2” lexicographically in the current locale则为真。</td>
<td></td>
</tr>
<tr>
<td>[ STRING1 &gt; STRING2 ]</td>
<td>如果 “STRING1” sorts after “STRING2” lexicographically in the current locale则为真。<br/>[ -z “echo 111s|sed 's/[0-9]//g'” ] &amp;&amp; echo 1</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="_7-set使用" tabindex="-1"><a class="header-anchor" href="#_7-set使用" aria-hidden="true">#</a> 7. set使用</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code># 执行脚本
$ bash script.sh

# 带set参数执行脚本
$ bash -euxo script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bash执行脚本时，会创建一个子shell，执行脚本的命令中，<code v-pre>script.sh</code>是在一个子shell环境中执行的，bash默认给了这个环境各种参数，set就是可以用来修改参数：<a href="https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html" target="_blank" rel="noopener noreferrer">官方手册</a></p>
<p>建议这个命令直接添加在脚本头部</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>#!/bin/sh

# 写法一
set -euxo pipefail

# 写法二
set -eux
set -o pipefail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用set指令：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>其他写法</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>set -u</strong></td>
<td>set -o nounset</td>
<td>执行脚本时，如果遇到不存在的变量就会报错，并停止执行。</td>
</tr>
<tr>
<td><strong>set -x</strong></td>
<td>set -o xtrace</td>
<td>用来在运行结果之前，先输出执行的那一行命令，对于调式脚本有用；在不需要输出的命令范围外使用 <code v-pre>set -x  command set -+</code>包含起来。</td>
</tr>
<tr>
<td><strong>set -e</strong></td>
<td>set -o errexit</td>
<td>脚本只要发生错误，就终止执行；有些命令失败后，需要它继续执行，可以在外层用 <code v-pre>set +e commmd set -e</code>包含起来</td>
</tr>
<tr>
<td><strong>set -o pipefail</strong></td>
<td></td>
<td>用于处理set -e不能满足的情况，只要一个子命令失败，整个管道命令就失败，脚本就会终止执行。</td>
</tr>
<tr>
<td>其他指令：</td>
<td></td>
<td></td>
</tr>
<tr>
<td>set -n</td>
<td>set -o noexec</td>
<td>不运行命令，只检查语法是否正确。</td>
</tr>
<tr>
<td>set -f</td>
<td>set -o noglob</td>
<td>表示不对通配符进行文件名扩展。使用<code v-pre>set +f</code>关闭</td>
</tr>
<tr>
<td>set -v</td>
<td>set -o verbose</td>
<td>表示打印 Shell 接收到的每一行输入。使用<code v-pre>set +v</code>关闭</td>
</tr>
</tbody>
</table>
<p>事例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>#!/bin/sh

# 在执行脚本的时候输出 -e | -u | -x | -o pipefail 进行测试set指令
# set -euxo pipefail

# 关闭 set -e 选项 
set +e

# -u, $bar 变量不存在,脚本停止,报错
echo $bar
echo bar

# bar || true 最终返回true,set -e 不能处理该情况,脚本不会停止,将继续执行，set -o piprfail的时候,脚本停止,提示报错
bar || true
echo set -e fail

# 打开 set -e 选项
set -e

bar
echo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="springboot-启动脚本事例" tabindex="-1"><a class="header-anchor" href="#springboot-启动脚本事例" aria-hidden="true">#</a> springboot 启动脚本事例</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>#!/bin/bash

SpringBoot=$2

if [ &quot;$1&quot; = &quot;&quot; ];
then
    echo -e &quot;\033[0;31m 未输入操作名 \033[0m  \033[0;34m {start|stop|restart|status} \033[0m&quot;
    exit 1
fi

if [ &quot;$SpringBoot&quot; = &quot;&quot; ];
then
    echo -e &quot;\033[0;31m 未输入应用名 \033[0m&quot;
    exit 1
fi

function start()
{
    count=`ps -ef |grep java|grep $SpringBoot|grep -v grep|wc -l`
    if [ $count != 0 ];then
        echo &quot;$SpringBoot is running...&quot;
    else
        echo &quot;Start $SpringBoot success...&quot;
        nohup java -jar $SpringBoot &gt; /dev/null 2&gt;&amp;1 &amp;
    fi
}

function stop()
{
    echo &quot;Stop $SpringBoot&quot;
    boot_id=`ps -ef |grep java|grep $SpringBoot|grep -v grep|awk '{print $2}'`
    count=`ps -ef |grep java|grep $SpringBoot|grep -v grep|wc -l`

    if [ $count != 0 ];then
        kill $boot_id
        count=`ps -ef |grep java|grep $SpringBoot|grep -v grep|wc -l`

        boot_id=`ps -ef |grep java|grep $SpringBoot|grep -v grep|awk '{print $2}'`
        kill -9 $boot_id
    fi
}

function restart()
{
    stop
    sleep 2
    start
}

function status()
{
    count=`ps -ef |grep java|grep $SpringBoot|grep -v grep|wc -l`
    if [ $count != 0 ];then
        echo &quot;$SpringBoot is running...&quot;
    else
        echo &quot;$SpringBoot is not running...&quot;
    fi
}

case $1 in
    start)
    start;;
    stop)
    stop;;
    restart)
    restart;;
    status)
    status;;
    *)

    echo -e &quot;\033[0;31m Usage: \033[0m  \033[0;34m sh  $0  {start|stop|restart|status}  {SpringBootJarName} \033[0m
\033[0;31m Example: \033[0m
      \033[0;33m sh  $0  start esmart-test.jar \033[0m&quot;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


