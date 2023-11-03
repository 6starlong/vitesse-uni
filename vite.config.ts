/// <reference types="vitest" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

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

    // https://github.com/antfu/unplugin-auto-import
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

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://vue-macros.sxzz.moe/zh-CN/features/reactivity-transform.html
    ReactivityTransform(),

    uni(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
