// 引入主题配置
const themeConf = require("./config/themeConfig.js");
// 引入插件
const pluginConf = require("./config/pluginConfig");

module.exports = {
  title: "杂乱无章",
  description: "前山微有雨, 永巷净无尘",
  dest: "public",
  // base: '/myblog/',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}],
    ['meta', { name: 'author', content: 'Enzo' }],
    ['meta', { name: 'keywords', content: 'vuepress,reco,reco_luan,vuepress-reco,vuepress-theme-reco,theme,blog,主题' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // 引入jquery
    ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/jquery-3.5.1.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/mouseClickEffect.js"
    }],
  ],
  serviceWorker: true,
  plugins: pluginConf,
  theme: "reco", 
  themeConfig: themeConf,
  markdown: {
    lineNumbers: true,
  },
};
