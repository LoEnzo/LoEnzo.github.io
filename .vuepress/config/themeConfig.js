// 引入导航栏
const navConf = require("./navConfig.js");
// 博客设置
const blogConf = require("./blogConfig.js");
// 友链
const friendLinkConf = require("./friendLinkConfig.js");
// 插件
const pluginsConf = require("./pluginConfig.js");

module.exports = {
  nav: navConf,
  // sidebar: sidebarConf, 改用自动侧边栏插件
  type: "blog",
  // 博客设置
  blogConfig: blogConf,
  friendLink: friendLinkConf,
  plugins: pluginsConf,
  logo: "/logo.jpg",
  codeTheme: 'tomorrow',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成右侧边导航
  subSidebar: 'auto',
  lastUpdated: "Last Updated",
  // 作者
  author: "Enzo",
  // 作者头像
  authorAvatar: "/avatar.jpg",
  // 备案号
  record: "渝ICP备2022001000",
  recordLink: 'https://beian.miit.gov.cn/',
  // 项目开始时间
  startYear: "2017",
  // git地址
  repo: 'LoEnzo/LoEnzo.github.io',
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页！',
  // valine 
  valineConfig: {
    appId: "J1Uq1gtVn91RhSSw4FaAv2GD-MdYXbMMI", // your appId
    appKey: "rxJmmc3H8KmkmMeddXkBRnsw", // your appKey
    visitor: true,
    serverURLs: "https://valine.loenzo.top",
    placeholder: 'hjwumail@dingtalk.com',
  },
};
