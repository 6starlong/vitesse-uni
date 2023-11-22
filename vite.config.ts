/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import Unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-pages
    UniPages({
      dts: 'src/uni-pages.d.ts',
    }),

    // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniLayouts(),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        './src/composables',
        './src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      types: []
    }),

    // https://vue-macros.sxzz.moe/zh-CN/features/reactivity-transform.html
    ReactivityTransform(),

    // https://github.com/dcloudio/uni-app
    uni(),

    // https://github.com/unocss/unocss
    Unocss(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom'
  }
})
