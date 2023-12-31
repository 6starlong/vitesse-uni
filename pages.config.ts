import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    'backgroundColor': '@bgColor',
    'backgroundColorBottom': '@bgColorBottom',
    'backgroundColorTop': '@bgColorTop',
    'backgroundTextStyle': '@bgTxtStyle',
    'navigationBarBackgroundColor': '@navBgColor',
    'navigationBarTextStyle': '@navTxtStyle',
    'navigationBarTitleText': 'vitesse-uni',
    // 'navigationStyle': 'custom',
    'app-plus': {
      titleNView: false // 移除 H5、APP 顶部导航
    },
  },
  easycom: {
    autoscan: true,
    custom: {
      // https://ext.dcloud.net.cn/publisher?id=89985
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
})
