---
title: '开发环境配置笔记'
isShowComments: true
---


::: tip 

Window更换电脑，需要重新配置整套开发环境，环境变量，常用软件自定义设计，总是忘记需要百度，所以这里做个汇总，方便下次自己查阅
:::



[常用软件安卓目录参考](https://hjwu.gq/blogs/Other/SoftwareSummary.html)

## Java

### JDK 

```shell
JAVA_HOME	jdk安装路径

CLASSPATH	;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;

PATH		%JAVA_HOME%\bin	%JAVA_HOME%\jre\bin

验证：java -version
```

### Node.js

```shell
安装完成默认会添加到path路径，如果不慎勾选取消了，或者使用的压缩包，配置PATH即可
PATH	软件安装目录
```

### maven

```shell
MAVEN_HOME	软件安装路径
PATH		%MAVEN_HOME%\bin
```

### Tomcat

```shell
CATALINA_BASE	软件安装路径
CATALINA_HOME	软件安装路径
PATH			%CATALINA_HOME%\lib	%CATALINA_HOME%\bin
验证:	安装目录\bin 启动startup.bat，本地访问 localhost:8080，能看到tomcat信息即可
```



## Editor

### SublmeText3

```shell
# 安装中文插件

Ctrl+`	输入下列内容，出现success或者提示框即可
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

ctrl+shift+p	打开命令面板

输入install pacakge enter
输入ChineseLocalzations enter即可

# 安装插件 一键格式化 html css js

同上，输入html-css-js prettify enter
注意，默认使用nodejs环境，安装插件完成后，在首选项，设置，插件设置中修改该插件的设置，修改文件的node path即可
```

### Typora

```shell
# 修改默认样式

打开 安装路径\resources\app\style base-control.css
搜索 typora-source .CodeMirror-lines，修改 max-width: 1200px
打开typora偏好设置，打开 github 主题配置，其他主题同理
搜索 write标签，修改 max-width: 1060ox
```

