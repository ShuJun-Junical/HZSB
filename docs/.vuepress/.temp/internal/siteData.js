export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"HZSB\",\"description\":\"关于衡中：曝光、记录、驳斥、批判。\",\"head\":[[\"meta\",{\"charset\":\"utf-8\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"/img\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://hm.baidu.com\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/img/logo.png\"}],[\"script\",{\"src\":\"https://unpkg.com/@popperjs/core@2\"}],[\"script\",{\"src\":\"https://unpkg.com/tippy.js@6\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"HZSB\",\"description\":\"关于衡中：曝光、记录、驳斥、批判。\"}}}")

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
