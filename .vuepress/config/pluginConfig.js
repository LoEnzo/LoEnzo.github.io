module.exports = [
  // 打赏插件
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
    base_url: '/', // required
    site_url: 'https://hjwu.gq',
    copyright: '',
    count: 10
  }],
  // 复制代码功能
  [
    "vuepress-plugin-nuggets-style-copy",
    {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }
  ],
]