module.exports = [
    // 添加rss订阅插件，测试发现只能订阅标题和tip内容
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
  ] 
