<template><div><p>::: tip</p>
<p>智能家居生态目前感觉米家的最丰富，但是之能再米家内部进行全屋互联，不能支持很多其他平台，单一受限。HomeAssistant 是一个基于python的家庭智能化平台，可运行于本地服务器，或者树莓派上。利用该平台，可以统一控制家庭中所有的智能设备。home assistant集成了小米、博联等公司的通信协议，可以直接发现并控制这些公司的智能设备，也可以通过mqtt协议连接其它设备。同时可以通过插件扩展与苹果的Apple HomeKit互动，home assistant同时还集成了一些如天气、汇率、在线音乐等云端服务。他的控制页面可以通过网页显示，也可以通过手机APP（支持安卓及iOS）展示。</p>
<p>:::</p>
<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<p>环境安装</p>
<ul>
<li>python安装
<ul>
<li>下载 python3</li>
<li>下载 pip3</li>
<li>pip3 install homeassistant</li>
<li>pip3 install sqlalchemy</li>
</ul>
</li>
<li>docker安装
<ul>
<li><code v-pre>docker run -d --name=&quot;home-assistant&quot; -v /你的/config/路径:/config -v /etc/localtime:/etc/localtime:ro --net=host homeassistant/home-assistant</code></li>
</ul>
</li>
</ul>
<p>启动</p>
<ul>
<li>hass --open-ui，默认端口 8123</li>
</ul>
<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1>
<ul>
<li>python 安装，网络问题，环境变量问题，仓库源问题</li>
<li>pip pip3 安装问题，网络问题</li>
<li>成功启动，hass 提示是python 3.8.6 版本问题</li>
<li>hass 无法搜索hacs集成</li>
<li>采用 新建<code v-pre>custom_components</code>目录直接下载github 项目 hacs 导入，搜索集成显示 空白行，安装后台报错；切换各个版本，清楚浏览器缓存都不行</li>
<li>WSL+docker安装 home-assistant，本地成功启动，网络问题，偶尔无法连接github，能安装 hacs、xiaomi_gataway3、homekit 等集成，但是 homekit 产生二维码 iphone 无法添加（咨询别人WSL本地不行，本地虚拟机可以，网络问题，待尝试）</li>
<li>阿里云服务器+docker 安装 home-assistant，成功启动，安装各种集成， 无法登陆小米账号，应该是小米添加了二次认证问题，需要在同一网络中用手机号验证一次才行。有个方法可以试试，服务器重置为Ubuntu，安装图形话界面，调用浏览器进行手机验证。未尝试，觉得有点麻烦，后面再试试吧</li>
<li>后续自己配置 <code v-pre>configuration.yaml</code> 语法了解</li>
<li>概览UI设计</li>
</ul>
<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1>
<h3 id="文档参考" tabindex="-1"><a class="header-anchor" href="#文档参考" aria-hidden="true">#</a> 文档参考</h3>
<ul>
<li>
<p><a href="https://www.wenjiangs.com/doc/home-assistant-installation-docker" target="_blank" rel="noopener noreferrer">安装 – Docker - Home Assistant 中文文档 - 文江博客 (wenjiangs.com)</a></p>
</li>
<li>
<p><a href="https://hacs.xyz/docs/setup/prerequisites" target="_blank" rel="noopener noreferrer">HACS文档参考</a></p>
</li>
<li>
<p><a href="https://bbs.hassbian.com/" target="_blank" rel="noopener noreferrer">HomeAssistant论坛 | HomeKit论坛 | Node-Red论坛-『瀚思彼岸』» 智能家居技术论坛！ - Powered by Discuz! (hassbian.com)</a></p>
</li>
<li>
<p><a href="https://bbs.hassbian.com/forum.php?mod=viewthread&amp;action=printable&amp;tid=14242" target="_blank" rel="noopener noreferrer">无法访问hacs、hacs无法下载github项目参考</a>：没账号，有脚本缺失，建议现在项目到目录解压，重启，再搜索识别</p>
</li>
</ul>
<h3 id="集成github项目" tabindex="-1"><a class="header-anchor" href="#集成github项目" aria-hidden="true">#</a> 集成github项目</h3>
<ul>
<li><a href="https://github.com/AlexxIT/XiaomiGateway3" target="_blank" rel="noopener noreferrer">AlexxIT/XiaomiGateway3</a></li>
<li><a href="https://github.com/ha0y/xiaomi_miot_raw" target="_blank" rel="noopener noreferrer">ha0y/xiaomi_miot_raw</a></li>
<li><a href="https://github.com/hacs/integration" target="_blank" rel="noopener noreferrer">hacs/integration</a></li>
</ul>
<h3 id="别人模板参考" tabindex="-1"><a class="header-anchor" href="#别人模板参考" aria-hidden="true">#</a> 别人模板参考</h3>
<ul>
<li><a href="https://demo.home-assistant.io/#/lovelace/0" target="_blank" rel="noopener noreferrer">概览 – Home Assistant (home-assistant.io)</a></li>
</ul>
</div></template>


