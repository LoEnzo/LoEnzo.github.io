---
title: 搭建`Vuepress`静态网站
tags:
 - vuepress
categories:
 - StudyNotes
date: 2020-05-11
---

::: tip

Vuepress静态个人博客搭建，参考关方文档，主题为默认主题；细化侧边栏、导航栏，添加自动获取sidebar目录的js；

:::

<!-- more -->

用于记录技术笔记，知识总结，方面查看

## 1. 搭建前的准备

* [官方文档介绍](https://vuepress.vuejs.org/zh/)
* [Node.js](http://nodejs.cn/)  版本 > 1.8
* [yarn](https://yarn.bootcss.com/)
* [git](https://git-scm.com/)

## 2. 创建项目

* 在`github`或`gitlab`上创建自己的项目，并克隆到本地，

## 3. 本地环境搭建

### 3.1 环境搭建

* 新建docs文件夹，并初始化

```bash
npm init -y
```

* 全局安装

```bash
yarn global add vuepress # 或者：npm install -g vuepress
```

* 将 `vuepress` 作为一个本地依赖安装

```bash 
yarn add -D vuepress # 或者：npm install -D vuepress
```

*  在 `package.json` 里加一些脚本: 

```bash
"scripts": {
	"docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
}
```

* 构建运行

```bash
yarn docs:dev # 或者：npm run docs:dev
```

* 若需要生成静态的 HTML 文件

```bash
yarn docs:build # 或者：npm run docs:build
```

* 简单目录结构

```shell
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

* 显示默认首页`README.md`的内容可填写一下内容

```yaml
---
home: true
lang: zh-CN
heroImage: /blog.png
heroText: A Persion Blog
# tagline: Hero 副标题
actionText: QuickLook
actionLink: /Travelsky/Git命令实践/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

* 本地访问`localhost:8080`即可看你的简单的`vuepress`网站，效果如下：

### 3.2 图标配置

​		在`.vuepress`目录下创建`public`文件夹，用于存放静态资源文件，这里只添加首页显示图片和网页导航图标。在网上选择自己喜欢的图片或者自己设计图片，再利用转换工具生成一个`.png`，`.ico`的文件，直接先主页`README.MD`文件中引用即可，

显示效果：

### 3.3 config.js的配置

通过上面的配置，本地启动只有一个默认的主页，及自带的搜索框，更多细化的设置需要在`config.js`文件里进行设置。`config.js` 是`vuepress`提供的默认配置文件，位置在`.vuepress`的文件夹根目录下，可以在此处添加相应的配置，例如导航栏、侧边栏等。

* 默认的页面转换路由

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

### 3.4 导航栏

​		在默认主题下，导航栏需要在`themeConfig`属性上进行配置`nav`，导航栏的两个重要属性为`text`和`link`，其中`text`指明了导航的文字内容，`link`指明了导航的链接，链接地址遵循上面介绍的默认页面转换路由设置。导航栏下拉列表配置实在text属性中添加`item`属性即可，参考如下：	

  基本的导航栏加下拉列表框配置：

  ```javascript
  module.exports = [
      { text: '主页', link: '/' },
      {
          text: '基础知识',
          items: [
              { text: 'Java基础', link: '/' },
              { text: 'Java核心', link: '/' },
          ]
      },
      {
          text: '相关框架',
          items: [
              { text: 'SpringMvc', link: '/' },
              { text: 'Mybatis', link: '/' },
              { text: 'Shiro', link: '/' },
          ]
      },
      {
          text: '测试',
          items: [
              { text: 'Mockito', link: '/' },
              { text: 'Jmockit', link: '/jmockit/' },
              { text: 'EasyMock', link: '/' },
              { text: 'PowerMock', link: '/' },
          ]
      },
      {
          text: '数据库',
          items: [
              { text: 'Oracle', link: '/' },
              { text: 'Mysql', link: '/' },
              { text: 'Redis', link: '/' },
          ]
      },
      {
          text: '软件',
          items: [
              { text: '工具手册', link: '/Software/' },
          ]
      },
      {
          text: 'TravleSky',
          items: [
              { text: 'IBE相关', link: '/Travelsky/' },
              { text: '代码工具', link: '/Travelsky/codeTools/' },
          ]
      },
  ];
  ```

  效果如图:

### 3.5 侧边栏


​		侧边栏是页面导航的重要组成部分，处于页面的左边部分，原理类型与前端页面锚点设置一样，可以快速定位到当前页的相应位置。主要属性`collapsable`，代表是否展开当前分组。

  ```javascript
  
  module.exports = {
    themeConfig: {
      // 其它配置
      sidebar: [
        {
          title: '软件相关',
          collapsable: false,
          children: [
            '/Software/',
            '/Software/IDEA',
            '/Software/VScode'
          ]
        },
        {
          title: 'IBE相关',
          collapsable: false,
          children: [
            '/Travelsky/',
            '/Travelsky/eTerm.md',
            '/Travelsky/小E.md',
          ]
        }
      ]
    }
  }
  ```

### 3.6 其他配置

  		主页名字显示，网站图片，插件加载，语言，需要上传`gitlab`配置等常用插件，显示最后更新时间，返回顶部，页面刷新，需要在通过`yarn`或`npm`进行安装，然后再属性中配置即可。

* 插件安装

  ```shell
   yarn add -D @vuepress/plugin-webpack
   yarn add -D @vuepress/plugin-back-to-to
   yarn add -D @vuepress/last-updated
  ```

*  配置

  ```javascript
  module.exports = {
  	title: '宅小呆的日常',
  	description: '宅小呆的博客',
  	locales: {
  		'/': {
  			lang: 'zh-CN',
  		}
  	},
  	head: [
  		['link', { rel: 'icon', href: '/blog.ico' }]
  	],
  	// 配置
  	plugins:  {
          '@vuepress/pwa':{
              serviceWorker: true,
              updatePopup:{
                  message:"发现新内容可用",
                  buttonText:"刷新"
              }
          },
          '@vuepress/back-to-top': true,
          '@vuepress/last-updated': true,
      },
  	themeConfig: {
  		lastUpdated: 'Last Updated',
  		displayAllHeaders: false,    // 
  		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  		repo: 'hjwu/VuepressBlog',
  		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  		// "GitHub"/"GitLab"/	"Bitbucket" 其中之一，或是 "Source"。
  		repoLabel: 'GitLab',
  		// 默认是 false, 设置为 true 来启用
  		// 假如文档不是放在仓库的根目录下：
  		docsDir: 'docs',
  		editLinks: true,
  		// 默认为 "Edit this page"
  		editLinkText: '编辑文档',
  	}
  }
  ```

##  4. `config.js`配置优化

​		通过上面的配置可以发现，配置主要写在  `module.exports = {}`中的，目前简单的设置、导航栏、侧边栏配置已经有130多行，如果尤其整理`md`文档的增加，势必会使得`config.js`文件的臃肿，不便于后期的维护。

​		我们可以将配置栏`plugin`、导航栏`nav`、侧边栏`sidebar`三部分分离出去，在`config.js`中引用即可

### 4.1 `config`文件夹配置

​		在根目录创建`config`文件夹，创建`pluginConfig`、`navbarConfig`、`   sidebarConfig`三个文件，将之前的配置填入其中即可，然后再`config.js`进行引用，注意相对路径

```shell
const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');
```

### 4.2 `sidebar`的优化

​		考虑到后续整理`md`文档的继续增加，文件夹目录的层级嵌套增加，一直在`sidebarConf.js`维护也会显得臃肿麻烦，所以我们可借助其他工具类自动扫描层级目录配置，方面管理，首先需要配置后面的`utils`配置，创建`sidebarConf`文件夹替代`sidebarConfi.js`。`sidebarConf`文件夹层级目录和`docs`目录下管理`md`文件夹的目录保持一致，里面创建一个`index.js`文件即可

```shell
├─ sidebarConf
│  ├─ Software
│  │  └─ index.js
│  └─ Travelsky
│     └─ codeTools
│		 └─ index.js
│	  └─ index.js
│─ index.js
```

* 根目录`index.js`

```javascript
// 软件使用相关
const software = require('./Software/index.js');

// IBE相关
const Travelsky = require('./Travelsky/index.js');
const codeTools = require('./Travelsky/codeTools/index.js');

// 测试相关
const jmockit = require('./Jmockit/index.js');

module.exports = {
    // 软件相关
    '/Software/': software,

    // IBE相关
    '/Travelsky/codeTools/': codeTools,
    '/Travelsky/': Travelsky,

    // 测试相关
    '/Jmockit/': jmockit,
};
```

* 层级文件夹下`index.js`

```javascript
const utils = require('../../../../utils/index.js');
// docs下的路径
const filePath = '/Travelsky/codeTools';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.genSidebar('常用代码工具', filenames, false),
];
```

### 4.3 `utils`文件夹配置

​		`utils`目录下主要包含两个文件`getFilenames.js`、`index.js`用于获取`md`文档的文件名和`md`文档的路径

* `getFilenames.js`

```javascript
const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName: function (rpath) {
        let filenames = [];
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0) {
                fullpath = rpath + "/" + file
                var fileinfo = fs.statSync(fullpath)
                if (fileinfo.isFile()) {
                    if (file === 'README.md') {
                        file = '';
                    } else {
                        file = file.replace('.md', '');
                    }
                    filenames.push(file);
                }
            }
        })
        // console.log(filenames)
        filenames.sort(); // 排序
        return filenames;
    }
}
module.exports = filehelper;
```

* `index.js`

```javascript
const fs = require('fs');
const path = require('path');
const FOLDERPATH = '../docs';

const utils = {
	genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
		return {
			title,
			children,
			collapsable,
			sidebarDepth
		}
	},
	getChildren: function (filePath) {
		let childrenFiles = [];
		const files = fs.readdirSync(path.resolve(__dirname, FOLDERPATH + filePath))

		files.forEach(function (filename) {
			//获取单个文件或者目录完整路径
			var fullname = path.join(path.resolve(__dirname, FOLDERPATH + filePath), filename);
			var stats = fs.statSync(fullname);
			if (!stats.isDirectory()) {
				filename = filename.slice(0, -3);
				if (filename === 'readme') {
					filename = '';
				}
				childrenFiles.push(filename);
			}
		})
		childrenFiles = childrenFiles.sort();
		console.log(filePath + ' :' + childrenFiles);
		return childrenFiles;
	}
};

module.exports = utils;
```

## 5. 后言

关于`vuepress`的简单配置可以算是基本完成了，后续还可以添加并完善一些功能：

* 使用结合`leancloud`，使用`Valine`在文档页面添加评论系统
* 使用`Algolia`搜索代替`vuepress`内置搜索
* 使用`vue`组件更改和添加本地文档样式
* 使用`npm`包或第三方库
* 使用`pwa`,更加方便快捷的启动`vuepress`