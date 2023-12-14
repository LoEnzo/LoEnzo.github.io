<template><div><p>::: tip</p>
<p>Vuepress静态个人博客搭建，参考关方文档，主题为默认主题；细化侧边栏、导航栏，添加自动获取sidebar目录的js；</p>
<p>:::</p>
<!-- more -->
<p>用于记录技术笔记，知识总结，方面查看</p>
<h2 id="_1-搭建前的准备" tabindex="-1"><a class="header-anchor" href="#_1-搭建前的准备" aria-hidden="true">#</a> 1. 搭建前的准备</h2>
<ul>
<li><a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">官方文档介绍</a></li>
<li><a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">Node.js</a>  版本 &gt; 1.8</li>
<li><a href="https://yarn.bootcss.com/" target="_blank" rel="noopener noreferrer">yarn</a></li>
<li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git</a></li>
</ul>
<h2 id="_2-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-创建项目" aria-hidden="true">#</a> 2. 创建项目</h2>
<ul>
<li>在<code v-pre>github</code>或<code v-pre>gitlab</code>上创建自己的项目，并克隆到本地，</li>
</ul>
<h2 id="_3-本地环境搭建" tabindex="-1"><a class="header-anchor" href="#_3-本地环境搭建" aria-hidden="true">#</a> 3. 本地环境搭建</h2>
<h3 id="_3-1-环境搭建" tabindex="-1"><a class="header-anchor" href="#_3-1-环境搭建" aria-hidden="true">#</a> 3.1 环境搭建</h3>
<ul>
<li>新建docs文件夹，并初始化</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>全局安装</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yarn global add vuepress # 或者：npm install -g vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>将 <code v-pre>vuepress</code> 作为一个本地依赖安装</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yarn add -D vuepress # 或者：npm install -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在 <code v-pre>package.json</code> 里加一些脚本:</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>&quot;scripts&quot;: {
	&quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构建运行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yarn docs:dev # 或者：npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>若需要生成静态的 HTML 文件</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yarn docs:build # 或者：npm run docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>简单目录结构</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>显示默认首页<code v-pre>README.md</code>的内容可填写一下内容</li>
</ul>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code>---
home: true
lang: zh-CN
heroImage: /blog.png
heroText: A Persion Blog
# tagline: Hero 副标题
actionText: QuickLook
actionLink: /Demo/Git命令实践/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>本地访问<code v-pre>localhost:8080</code>即可看你的简单的<code v-pre>vuepress</code>网站，效果如下：</li>
</ul>
<h3 id="_3-2-图标配置" tabindex="-1"><a class="header-anchor" href="#_3-2-图标配置" aria-hidden="true">#</a> 3.2 图标配置</h3>
<p>​		在<code v-pre>.vuepress</code>目录下创建<code v-pre>public</code>文件夹，用于存放静态资源文件，这里只添加首页显示图片和网页导航图标。在网上选择自己喜欢的图片或者自己设计图片，再利用转换工具生成一个<code v-pre>.png</code>，<code v-pre>.ico</code>的文件，直接先主页<code v-pre>README.MD</code>文件中引用即可，</p>
<p>显示效果：</p>
<h3 id="_3-3-config-js的配置" tabindex="-1"><a class="header-anchor" href="#_3-3-config-js的配置" aria-hidden="true">#</a> 3.3 config.js的配置</h3>
<p>通过上面的配置，本地启动只有一个默认的主页，及自带的搜索框，更多细化的设置需要在<code v-pre>config.js</code>文件里进行设置。<code v-pre>config.js</code> 是<code v-pre>vuepress</code>提供的默认配置文件，位置在<code v-pre>.vuepress</code>的文件夹根目录下，可以在此处添加相应的配置，例如导航栏、侧边栏等。</p>
<ul>
<li>默认的页面转换路由</li>
</ul>
<table>
<thead>
<tr>
<th>文件的相对路径</th>
<th>页面路由地址</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/README.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/guide/README.md</code></td>
<td><code v-pre>/guide/</code></td>
</tr>
<tr>
<td><code v-pre>/config.md</code></td>
<td><code v-pre>/config.html</code></td>
</tr>
</tbody>
</table>
<h3 id="_3-4-导航栏" tabindex="-1"><a class="header-anchor" href="#_3-4-导航栏" aria-hidden="true">#</a> 3.4 导航栏</h3>
<p>​		在默认主题下，导航栏需要在<code v-pre>themeConfig</code>属性上进行配置<code v-pre>nav</code>，导航栏的两个重要属性为<code v-pre>text</code>和<code v-pre>link</code>，其中<code v-pre>text</code>指明了导航的文字内容，<code v-pre>link</code>指明了导航的链接，链接地址遵循上面介绍的默认页面转换路由设置。导航栏下拉列表配置实在text属性中添加<code v-pre>item</code>属性即可，参考如下：</p>
<p>基本的导航栏加下拉列表框配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module.exports = [
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
            { text: 'IBE相关', link: '/Demo/' },
            { text: '代码工具', link: '/Demo/codeTools/' },
        ]
    },
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如图:</p>
<h3 id="_3-5-侧边栏" tabindex="-1"><a class="header-anchor" href="#_3-5-侧边栏" aria-hidden="true">#</a> 3.5 侧边栏</h3>
<p>​		侧边栏是页面导航的重要组成部分，处于页面的左边部分，原理类型与前端页面锚点设置一样，可以快速定位到当前页的相应位置。主要属性<code v-pre>collapsable</code>，代表是否展开当前分组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
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
          '/Demo/',
          '/Demo/eTerm.md',
          '/Demo/小E.md',
        ]
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-其他配置" tabindex="-1"><a class="header-anchor" href="#_3-6-其他配置" aria-hidden="true">#</a> 3.6 其他配置</h3>
<pre><code>	主页名字显示，网站图片，插件加载，语言，需要上传`gitlab`配置等常用插件，显示最后更新时间，返回顶部，页面刷新，需要在通过`yarn`或`npm`进行安装，然后再属性中配置即可。
</code></pre>
<ul>
<li>
<p>插件安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> yarn add -D @vuepress/plugin-webpack
 yarn add -D @vuepress/plugin-back-to-to
 yarn add -D @vuepress/last-updated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module.exports = {
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
                message:&quot;发现新内容可用&quot;,
                buttonText:&quot;刷新&quot;
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
		// &quot;GitHub&quot;/&quot;GitLab&quot;/	&quot;Bitbucket&quot; 其中之一，或是 &quot;Source&quot;。
		repoLabel: 'GitLab',
		// 默认是 false, 设置为 true 来启用
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		editLinks: true,
		// 默认为 &quot;Edit this page&quot;
		editLinkText: '编辑文档',
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-config-js配置优化" tabindex="-1"><a class="header-anchor" href="#_4-config-js配置优化" aria-hidden="true">#</a> 4. <code v-pre>config.js</code>配置优化</h2>
<p>​		通过上面的配置可以发现，配置主要写在  <code v-pre>module.exports = {}</code>中的，目前简单的设置、导航栏、侧边栏配置已经有130多行，如果尤其整理<code v-pre>md</code>文档的增加，势必会使得<code v-pre>config.js</code>文件的臃肿，不便于后期的维护。</p>
<p>​		我们可以将配置栏<code v-pre>plugin</code>、导航栏<code v-pre>nav</code>、侧边栏<code v-pre>sidebar</code>三部分分离出去，在<code v-pre>config.js</code>中引用即可</p>
<h3 id="_4-1-config文件夹配置" tabindex="-1"><a class="header-anchor" href="#_4-1-config文件夹配置" aria-hidden="true">#</a> 4.1 <code v-pre>config</code>文件夹配置</h3>
<p>​		在根目录创建<code v-pre>config</code>文件夹，创建<code v-pre>pluginConfig</code>、<code v-pre>navbarConfig</code>、<code v-pre>   sidebarConfig</code>三个文件，将之前的配置填入其中即可，然后再<code v-pre>config.js</code>进行引用，注意相对路径</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>const pluginConf = require('../../config/pluginConf.js');
const navConf = require('../../config/navConf.js');
const sidebarConf = require('../../config/sidebarConf/index.js');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-sidebar的优化" tabindex="-1"><a class="header-anchor" href="#_4-2-sidebar的优化" aria-hidden="true">#</a> 4.2 <code v-pre>sidebar</code>的优化</h3>
<p>​		考虑到后续整理<code v-pre>md</code>文档的继续增加，文件夹目录的层级嵌套增加，一直在<code v-pre>sidebarConf.js</code>维护也会显得臃肿麻烦，所以我们可借助其他工具类自动扫描层级目录配置，方面管理，首先需要配置后面的<code v-pre>utils</code>配置，创建<code v-pre>sidebarConf</code>文件夹替代<code v-pre>sidebarConfi.js</code>。<code v-pre>sidebarConf</code>文件夹层级目录和<code v-pre>docs</code>目录下管理<code v-pre>md</code>文件夹的目录保持一致，里面创建一个<code v-pre>index.js</code>文件即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>├─ sidebarConf
│  ├─ Software
│  │  └─ index.js
│  └─ Demo
│     └─ codeTools
│		 └─ index.js
│	  └─ index.js
│─ index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>根目录<code v-pre>index.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>// 软件使用相关
const software = require('./Software/index.js');

// IBE相关
const Demo = require('./Demo/index.js');
const codeTools = require('./Demo/codeTools/index.js');

// 测试相关
const jmockit = require('./Jmockit/index.js');

module.exports = {
    // 软件相关
    '/Software/': software,

    // 相关
    '/Demo/codeTools/': codeTools,
    '/Demo/': Demo,

    // 测试相关
    '/Jmockit/': jmockit,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>层级文件夹下<code v-pre>index.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>const utils = require('../../../../utils/index.js');
// docs下的路径
const filePath = '/Demo/codeTools';
let filenames = [];
filenames = utils.getChildren(filePath);
module.exports = [
  utils.genSidebar('常用代码工具', filenames, false),
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-utils文件夹配置" tabindex="-1"><a class="header-anchor" href="#_4-3-utils文件夹配置" aria-hidden="true">#</a> 4.3 <code v-pre>utils</code>文件夹配置</h3>
<p>​		<code v-pre>utils</code>目录下主要包含两个文件<code v-pre>getFilenames.js</code>、<code v-pre>index.js</code>用于获取<code v-pre>md</code>文档的文件名和<code v-pre>md</code>文档的路径</p>
<ul>
<li><code v-pre>getFilenames.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName: function (rpath) {
        let filenames = [];
        fs.readdirSync(rpath).forEach(file =&gt; {
            if (excludes.indexOf(file) &lt; 0) {
                fullpath = rpath + &quot;/&quot; + file
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>index.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>const fs = require('fs');
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-后言" tabindex="-1"><a class="header-anchor" href="#_5-后言" aria-hidden="true">#</a> 5. 后言</h2>
<p>关于<code v-pre>vuepress</code>的简单配置可以算是基本完成了，后续还可以添加并完善一些功能：</p>
<ul>
<li>使用结合<code v-pre>leancloud</code>，使用<code v-pre>Valine</code>在文档页面添加评论系统</li>
<li>使用<code v-pre>Algolia</code>搜索代替<code v-pre>vuepress</code>内置搜索</li>
<li>使用<code v-pre>vue</code>组件更改和添加本地文档样式</li>
<li>使用<code v-pre>npm</code>包或第三方库</li>
<li>使用<code v-pre>pwa</code>,更加方便快捷的启动<code v-pre>vuepress</code></li>
</ul>
</div></template>


