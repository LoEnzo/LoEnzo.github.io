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
    ['meta', { name: 'keywords', content: 'vuepress,enzo,hjwu' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepco.press_reng' }],
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
  plugins: [
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/reward/alipay.JPG',
        wechat: '/reward/wechatpay.JPG',
        qq: '',
        paypal: '',
        duration: 2000
      }
    ],
    // google网站分析
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-182914025-1' // UA-00000000-0
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    '@vuepress-reco/extract-code',
    'flowchart',
    ['sitemap', {
      hostname: 'https:/hjwu.gq'
    }],
    // 添加rss订阅插件，测试发现只能订阅标题和tip内容
    ['@vuepress-reco/rss', {
      site_url: 'https://hjwu.gq',
      copyright: ''
    }],
  ],
  theme: "reco", 
  themeConfig: themeConf,
  markdown: {
    lineNumbers: true,
  },
};
