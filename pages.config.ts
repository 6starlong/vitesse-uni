import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'vitesse-uni',
    navigationStyle: 'custom',
  },
  easycom: {
    autoscan: true,
    custom: {
      // https://ext.dcloud.net.cn/publisher?id=89985
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
})
