import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
const pluginConf = require('./conf/pluginConf.js')
const sidebarConf = require('./conf/sidebarConf.js')
const navbarConf = require('./conf/navbarConf.js')



export default defineUserConfig({
  title: '杂乱无章',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.jpg',
    author: 'LoEnzo',
    authorAvatar: "/logo.jpg",
    docsRepo: 'https://github.com/LoEnzo/LoEnzo.github.io',
    docsBranch: 'master',
    docsDir: 'blogs',
    lastUpdatedText: '',
    series: sidebarConf,
    navbar: navbarConf,
    autoSetSeries: true,
    catalogTitle: '目录',
    // blog 自动设置分类
    autoSetBlogCategories: true,
    autoAddCategoryToNavbar: true,
     // blog 自动设置分类
    // valine评论管理
    valineConfig: {
      appId: "J1Uq1gtVn91RhSSw4FaAv2GD-MdYXbMMI",
      appKey: "rxJmmc3H8KmkmMeddXkBRnsw", 
      placeholder: 'hjwumail@dingtalk.com',
      recordIP: true,
      serverURLs: "https://valine.loenzo.top"
    },
  }),
})
