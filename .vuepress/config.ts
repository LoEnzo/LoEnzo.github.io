import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

// head配置，包含百度资源搜索，鼠标点击js等
const headConf = require("./config/headConfig.js");
// 导航栏
const navConf = require("./config/navbarConfig.js");
// 友情链接
const friendshipLinksConf = require("./config/friendshipLinksConfig.js");
// 评论管理 valine 配置
const valineConf = require("./config/valineConfig.js");
// 系列管理 series 配置
const seriesConf = require("./config/seriesConfig.js");

export default defineUserConfig({
  title: "杂乱无章",
  description: "闲来没事随便记记...",
  head: headConf,
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.jpg",
    author: "LoEnzo",
    authorAvatar: "/avatar.jpg",
    docsRepo: "https://github.com/loenzo/LoEnzo.github.io",
    docsBranch: "master",
    docsDir: "",
    lastUpdatedText: "上次更新文本",
    // 自定义主题基础色
    primaryColor: '#3aa675',
	  // 不添加这个首页启动报错，github issue找到的 ，Cannot convert undefined or null to object
	  // https://github.com/vuepress-reco/vuepress-theme-reco/issues/257
	  locales: {
      // 键名是该语言所属的子路径 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
      },
    },
	  // 自动设置分类，针对 docs 目录下系列文章自动生成目录
    autoSetSeries: true,
    // 自动设置分类，针对 blogs 目录下系列文章自动生成到首页右侧目录,
    // autoSetBlogCategories: true,
    // 当前文档右侧索引标题
    catalogTitle: '目录索引',
    // 系列文档配置
    // series: seriesConf,
    // 导航栏配置
    navbar: navConf,
    // 友情链接，这里包含一些关注的博主
    friendshipLinks: friendshipLinksConf,
    // valine 评论系统配置，后台挂在 cleanCloud
    // commentConfig: valineConf,
  }),
  // debug: true,
});