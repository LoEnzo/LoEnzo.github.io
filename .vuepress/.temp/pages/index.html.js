export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImageStyle\":{\"maxWidth\":\"30%\",\"width\":\"100%\",\"display\":\"block\",\"margin\":\"0rem auto 2rem\",\"background\":\"rgb(255,255,255,0)\",\"borderRadius\":\"1rem\"},\"bgImage\":\"/backgroud.jpg\",\"bgImageStyle\":{\"height\":\"400px\"}},\"headers\":[]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
