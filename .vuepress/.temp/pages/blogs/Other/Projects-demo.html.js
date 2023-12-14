export const data = JSON.parse("{\"key\":\"v-d16a8d4e\",\"path\":\"/blogs/Other/Projects-demo.html\",\"title\":\"项目案例\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"项目案例\",\"isShowComments\":true},\"headers\":[]}")

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
