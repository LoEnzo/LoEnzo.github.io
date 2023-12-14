export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"杂乱无章\",\"description\":\"前山微有雨, 永巷净无尘\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width,initial-scale=1,user-scalable=no\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Enzo\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"vuepress,enzo,hjwu\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.json\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#42b983\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"href\":\"/icon_vuepress_hjwu.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/icon_vuepress_hjwu.svg\",\"color\":\"#42b983\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"/icon_vuepress_hjwu.png\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#000000\"}],[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"codeva-p04cMYFnLB\"}],[\"script\",{\"language\":\"javascript\",\"type\":\"text/javascript\",\"src\":\"/js/jquery-3.5.1.min.js\"}],[\"script\",{\"language\":\"javascript\",\"type\":\"text/javascript\",\"src\":\"/js/mouseClickEffect.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
