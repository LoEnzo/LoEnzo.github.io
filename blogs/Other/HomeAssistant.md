---
title: HomeAssistant 智能家居尝试
tags:
 - HomeAssistant 
categories: 
 - Other
date: 2022-02-09
---

::: tip 

智能家居生态目前感觉米家的最丰富，但是之能再米家内部进行全屋互联，不能支持很多其他平台，单一受限。HomeAssistant 是一个基于python的家庭智能化平台，可运行于本地服务器，或者树莓派上。利用该平台，可以统一控制家庭中所有的智能设备。home assistant集成了小米、博联等公司的通信协议，可以直接发现并控制这些公司的智能设备，也可以通过mqtt协议连接其它设备。同时可以通过插件扩展与苹果的Apple HomeKit互动，home assistant同时还集成了一些如天气、汇率、在线音乐等云端服务。他的控制页面可以通过网页显示，也可以通过手机APP（支持安卓及iOS）展示。

:::

# 安装

环境安装

* python安装
  * 下载 python3
  * 下载 pip3
  * pip3 install homeassistant
  * pip3 install sqlalchemy
* docker安装
  * `docker run -d --name="home-assistant" -v /你的/config/路径:/config -v /etc/localtime:/etc/localtime:ro --net=host homeassistant/home-assistant`

启动

* hass --open-ui，默认端口 8123

# 问题

* python 安装，网络问题，环境变量问题，仓库源问题
* pip pip3 安装问题，网络问题
* 成功启动，hass 提示是python 3.8.6 版本问题
* hass 无法搜索hacs集成
* 采用 新建`custom_componets`目录直接下载github 项目 hacs 导入，搜索集成显示 空白行，安装后台报错；切换各个版本，清楚浏览器缓存都不行
* WSL+docker安装 home-assistant，本地成功启动，网络问题，偶尔无法连接github，能安装 hacs、xiaomi_gataway3、homekit 等集成，但是 homekit 产生二维码 iphone 无法添加
* 阿里云服务器+docker 安装 home-assistant，成功启动，安装各种集成， 无法登陆小米账号，确定账号正确
* 后续自己配置 `configuration.yaml` 语法了解
* 概览UI设计

# 参考

### 文档参考

* [安装 – Docker - Home Assistant 中文文档 - 文江博客 (wenjiangs.com)](https://www.wenjiangs.com/doc/home-assistant-installation-docker)

* [HACS文档参考](https://hacs.xyz/docs/setup/prerequisites)
* [HomeAssistant论坛 | HomeKit论坛 | Node-Red论坛-『瀚思彼岸』» 智能家居技术论坛！ - Powered by Discuz! (hassbian.com)](https://bbs.hassbian.com/)
* [无法访问hacs、hacs无法下载github项目参考](https://bbs.hassbian.com/forum.php?mod=viewthread&action=printable&tid=14242)：没账号，有脚本缺失，建议现在项目到目录解压，重启，再搜索识别

### 集成github项目

* [AlexxIT/XiaomiGateway3](https://github.com/AlexxIT/XiaomiGateway3)
* [ha0y/xiaomi_miot_raw](https://github.com/ha0y/xiaomi_miot_raw)
* [hacs/integration](https://github.com/hacs/integration)

### 别人模板参考

* [概览 – Home Assistant (home-assistant.io)](https://demo.home-assistant.io/#/lovelace/0)