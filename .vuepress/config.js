// 引入主题配置
const themeConf = require("./config/themeConfig.js");

module.exports = {
  title: "杂乱无章",
  description: "前山微有雨, 永巷净无尘",
  dest: "public",
  // base: '/myblog/',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}],
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
  // 添加rss订阅插件，测试发现只能订阅标题和tip内容
  plugins: [
    ['@vuepress-reco/rss', {
      site_url: 'https://hjwu.ml',
      copyright: ''
    }],
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
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-182914025-1' // UA-00000000-0
      }
    ]
  ],    
  theme: "reco", 
  themeConfig: themeConf,
  markdown: {
    lineNumbers: true,
  },
};
