---
title: Bash脚本命令使用
tags:
 - bash
categories:
 - LeaningDocument
date: 2020-05-22
---

::: tip

Bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。Shell 有很多种，只要能给用户提供命令行环境的程序，都可以看作是 Shell，Bash 是目前最常用的 Shell。

:::

<!-- more -->

## 常用指令和快捷键

### 基础指令

$ 是用户的命令提示，实例：`[user@hostname] $`，#是root用户的命令提示，实例：`[root@hostname] #`

| 指令              | 备注                                                         |
| ----------------- | ------------------------------------------------------------ |
| $ echo $shell     | 查看当前运行的shell                                          |
| $ cat /etc/shells | 查看当前Linux安装的所有shell                                 |
| $ bash            | 一般Linux进入命令行环境就已经打开了bash,如果默认shell不是bash,可以命令行进入bash |
| $ bash --version  | bash版本                                                     |
| $ exit            | 退出                                                         |
| $ pwd             | 查看当前路径                                                 |

### 常用快捷键

| 快捷键           | 备注                 |
| ---------------- | -------------------- |
| alt+b            | 移动到当前单词首位   |
| clear \| ctrl+l  | 清除屏幕内容         |
| shift + PageUp   | 向上滚动             |
| shift + PageDown | 向下滚动             |
| cd -             | 进入上一次进入的目录 |
| echo -n          | 不换行输入           |
| echo -e          | 能输入\t \n 转义内容 |
|                  |                      |
|                  |                      |

### 特殊符号

**单引号**：单引号保留字符的字面意思，`*`，`\`，`$`，`` `符号都会变成普通字符

**双引号**：以上的特殊字符都会保留其扩展的含义

### 别名，alias 命令 

`alias`命令用来为一个命令指定别名，这样更便于记忆。下面是`alias`的格式。

```bash
# 左边是别名,右边是原始命令名称
$ alias NAME=DEFINITION

# 显示所有别名
$ alias

# 去除别名
$ unalias name
```

## 脚本入门

参考：[Bash脚本教程](https://wangdoc.com/bash/intro.html)

#### 1. Shebang行

脚本的第一行通常是指定解释器，即这个脚本必须通过什么解释器执行。这一行以`#!`字符开头，这个字符称为 Shebang，所以这一行就叫做 Shebang 行。

`#!`后面就是脚本解释器的位置，Bash 脚本的解释器一般是`/bin/sh`或`/bin/bash`。

```bash
#!/bin/sh

#!/bin/bash

# 如果 Bash 解释器不放在目录/bin，脚本就无法执行了。为了保险，可以写成下面这样
#!/usr/bin/env bash
```

#### 2. 脚本执行权限

脚本一般使用`.sh`作为结尾，只要脚本总指定了`Shebang`行的就可以执行，前提的脚本具有执行权限，

脚本的权限通常设为`755`（拥有者有所有权限，其他人有读和执行权限）或者`700`（只有拥有者可以执行）。

```bash
# 给所有用户执行权限
$ chmod +x script.sh

# 给所有用户读权限和执行权限(read, excute)
$ chmod +rx script.sh
# 或者
$ chmod 755 script.sh

# 只给脚本拥有者读权限和执行权限
$ chmod u+rx script.sh

# 没有执行权限,一般执行指令如下
sh script.sh
```

#### 3. 脚本参数

调用脚本时，可以带参数，参数之间以空格断开，

在脚本内部可以使用`$1`-`$9`调用输入的1-9个参数，10个参数以上的格式为`${10}`，`$0`是脚本的文件名，即`script.sh`，·$

```bash
# 脚本执行样例
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
```

#### 4. 符号

| 符号    | 含义                                                         |
| ------- | ------------------------------------------------------------ |
| '     ' | 单引号，用于保留字符的字面含义，$ * \ 都会变成普通字符；如果要对单引号里面的\转移，外层需要加上$, 例：`$ echo $'it\'s'`，不过**更合理应该是`$ echo "it's"`** |
| "   "   | 双引号，保存原始命令的输出格式，例如: `echo "$(cal)"`,除了 $ ` \会被bash自动扩展外，其他符号能保留本来的含义；文件名包含空格，需要用双引号。 |
| ``      | 反单引号，与$() 一样，用于命令替换，好处在于所有的unix shell都支持，移植性高，缺点是容易看错 |
| **:=**  | ${var:=string}，如果变量var为空，就将string赋值给var         |
| **:+**  | ${var:=string}，如果变量var不为空，才将string复制给var       |

#### 5.指令

| 指令                                            | 含义       | 事例                     |
| ----------------------------------------------- | ---------- | ------------------------ |
| **ln（链接指令）ln -参数 [源文件]  [目标文件]** |            |                          |
| -s                                              | 创建软连接 | ln -s  web.jar  temp.jar |



#### 6. 条件判断

条件语句，前后要用`if`，`fi`包起来；[] 标识条件测试，前后都要有空格；

在shell中，`then`和`if`是分开的语句。如果要在同一行里面输入，则需要用分号将他们隔开；

**if中对比变量的处理都要加双引号**，以免出现不必要的错误；

空变量和没有初始化的变量可能会对shell脚本测试产生灾难性的影响，因此在不确定变量的内容的时候，在测试号前使用-n或者-z测试一下

? 变量包含了之前执行命令的退出状态（最近完成的前台进程）（可以用于检测退出状态）

```bash
if [ commands ]; then
  commands
elif [ commands ]; then
  commands...
else
  commands
fi
```

条件判断

| 符号               | 备注   | 事例                                  |
| ------------------ | ------ | ------------------------------------- |
| -eq  （equal）     | 等于   | if [ ${pid:=0} -eq 0 ] 判断PID是否为0 |
| -ne  （not equal） | 不等于 |                                       |

if参数

| 参数                        | 备注                                                         | 事例               |
| --------------------------- | ------------------------------------------------------------ | ------------------ |
| [ -a FILE ]                 | 如果 FILE 存在则为真。                                       |                    |
| [ -b FILE ]                 | 如果 FILE 存在且是一个块特殊文件则为真。                     |                    |
| [ -c FILE ]                 | 如果 FILE 存在且是一个字特殊文件则为真。                     |                    |
| [ -d FILE ]                 | 如果 FILE 存在且是一个目录则为真。                           |                    |
| [ -e FILE ]                 | 如果 FILE 存在则为真。                                       |                    |
| [ -f FILE ]                 | 如果 FILE 存在且是一个普通文件则为真。                       |                    |
| [ -g FILE ]                 | 如果 FILE 存在且已经设置了SGID则为真。                       |                    |
| [ -h FILE ]                 | 如果 FILE 存在且是一个符号连接则为真。                       |                    |
| [ -k FILE ]                 | 如果 FILE 存在且已经设置了粘制位则为真。                     |                    |
| [ -p FILE ]                 | 如果 FILE 存在且是一个名字管道(F如果O)则为真。               |                    |
| [ -r FILE ]                 | 如果 FILE 存在且是可读的则为真。                             |                    |
| **[ -s FILE ]**             | 如果 FILE 存在且大小不为o则为真。                            | 判断文件是否存在   |
| [ -t FD ]                   | 如果文件描述符 FD 打开且指向一个终端则为真。                 |                    |
| [ -u FILE ]                 | 如果 FILE 存在且设置了SUID (set user ID)则为真。             |                    |
| [ -w FILE ]                 | 如果 FILE 如果 FILE 存在且是可写的则为真。                   |                    |
| [ -x FILE ]                 | 如果 FILE 存在且是可执行的则为真。                           |                    |
| [ -O FILE ]                 | 如果 FILE 存在且属有效用户ID则为真。                         |                    |
| [ -G FILE ]                 | 如果 FILE 存在且属有效用户组则为真。                         |                    |
| [ -L FILE ]                 | 如果 FILE 存在且是一个符号连接则为真。                       |                    |
| [ -N FILE ]                 | 如果 FILE 存在 and has been mod如果ied since it was last read则为真。 |                    |
| [ -S FILE ]                 | 如果 FILE 存在且是一个套接字则为真。                         |                    |
| [ FILE1 -nt FILE2 ]         | 如果 FILE1 has been changed more recently than FILE2, or 如果 FILE1 exists and FILE2 does not则为真。 |                    |
| [ FILE1 -ot FILE2 ]         | 如果 FILE1 比 FILE2 要老, 或者 FILE2 存在且 FILE1 不存在则为真。 |                    |
| [ FILE1 -ef FILE2 ]         | 如果 FILE1 和 FILE2 指向相同的设备和节点号则为真。           |                    |
| [ -o OPTIONNAME ]           | 如果 shell选项 “OPTIONNAME” 开启则为真。                     |                    |
| **[ -z STRING ]**           | “STRING” 的长度为零则为真。                                  | 判断文件名是否存在 |
| [ -n STRING ] or [ STRING ] | “STRING” 的长度为非零 non-zero则为真。                       |                    |
| [ STRING1 == STRING2 ]      | 如果2个字符串相同。 “=” may be used instead of “==” for strict POSIX compliance则为真。 |                    |
| [ STRING1 != STRING2 ]      | 如果字符串不相等则为真。                                     |                    |
| [ STRING1 < STRING2 ]       | 如果 “STRING1” sorts before “STRING2” lexicographically in the current locale则为真。 |                    |
| [ STRING1 > STRING2 ]       | 如果 “STRING1” sorts after “STRING2” lexicographically in the current locale则为真。<br/>[ -z “echo 111s\|sed 's/[0-9]//g'” ] && echo 1 |                    |

#### 7. set使用

```bash
# 执行脚本
$ bash script.sh

# 带set参数执行脚本
$ bash -euxo script.sh
```

Bash执行脚本时，会创建一个子shell，执行脚本的命令中，`script.sh`是在一个子shell环境中执行的，bash默认给了这个环境各种参数，set就是可以用来修改参数：[官方手册](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)

建议这个命令直接添加在脚本头部

```bash
#!/bin/sh

# 写法一
set -euxo pipefail

# 写法二
set -eux
set -o pipefail
```

常用set指令：

| 命令                | 其他写法       | 含义                                                         |
| ------------------- | -------------- | ------------------------------------------------------------ |
| **set -u**          | set -o nounset | 执行脚本时，如果遇到不存在的变量就会报错，并停止执行。       |
| **set -x**          | set -o xtrace  | 用来在运行结果之前，先输出执行的那一行命令，对于调式脚本有用；在不需要输出的命令范围外使用 `set -x  command set -+`包含起来。 |
| **set -e**          | set -o errexit | 脚本只要发生错误，就终止执行；有些命令失败后，需要它继续执行，可以在外层用 `set +e commmd set -e`包含起来 |
| **set -o pipefail** |                | 用于处理set -e不能满足的情况，只要一个子命令失败，整个管道命令就失败，脚本就会终止执行。 |
| 其他指令：          |                |                                                              |
| set -n              | set -o noexec  | 不运行命令，只检查语法是否正确。                             |
| set -f              | set -o noglob  | 表示不对通配符进行文件名扩展。使用`set +f`关闭               |
| set -v              | set -o verbose | 表示打印 Shell 接收到的每一行输入。使用`set +v`关闭          |

事例：

```bash
#!/bin/sh

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
```

#### springboot 启动脚本事例

```bash
#!/bin/bash

SpringBoot=$2

if [ "$1" = "" ];
then
    echo -e "\033[0;31m 未输入操作名 \033[0m  \033[0;34m {start|stop|restart|status} \033[0m"
    exit 1
fi

if [ "$SpringBoot" = "" ];
then
    echo -e "\033[0;31m 未输入应用名 \033[0m"
    exit 1
fi

function start()
{
    count=`ps -ef |grep java|grep $SpringBoot|grep -v grep|wc -l`
    if [ $count != 0 ];then
        echo "$SpringBoot is running..."
    else
        echo "Start $SpringBoot success..."
        nohup java -jar $SpringBoot > /dev/null 2>&1 &
    fi
}

function stop()
{
    echo "Stop $SpringBoot"
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
        echo "$SpringBoot is running..."
    else
        echo "$SpringBoot is not running..."
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

    echo -e "\033[0;31m Usage: \033[0m  \033[0;34m sh  $0  {start|stop|restart|status}  {SpringBootJarName} \033[0m
\033[0;31m Example: \033[0m
      \033[0;33m sh  $0  start esmart-test.jar \033[0m"
esac
```
