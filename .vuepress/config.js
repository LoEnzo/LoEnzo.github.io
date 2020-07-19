module.exports = {
  title: "杂乱无章",
  description: '前山微有雨, 永巷净无尘',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/loenzo', icon: 'reco-github' },
          { text: '码云', link: 'https://gitee.com/company_enzo/', icon: 'reco-npm' }
        ]
      }
    ],
    sidebar: 'auto',  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: "言否",
        desc: "知无不言，言而不否",
        email: "18780004653@163.com",
        link: "http://yanfou.gitee.io/blog/"
      },
    ],
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Enzo',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    record: 'not yet',
    // 项目开始时间
    startYear: '2017',
    // valine 设置 (if you need valine comment )
    valineConfig: {
      appId: 'J1Uq1gtVn91RhSSw4FaAv2GD-MdYXbMMI',// your appId
      appKey: 'rxJmmc3H8KmkmMeddXkBRnsw', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  }
}  
