import path from 'node:path'
import Uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  /**
   * unocss@0.59.x版本后仅支持ESM，使用动态导入来兼容uni(Uni采用的是CommonJS，不支持ESM库)
   * @see https://github.com/dcloudio/uni-app/issues/4815
   */
  const UnoCSS = await import('unocss/vite').then(i => i.default)

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-pages
      UniPages({
        dts: 'src/uni-pages.d.ts',
      }),

      // https://github.com/unplugin/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'uni-app',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: [
          './src/composables',
          './src/server',
          './src/stores',
        ],
        vueTemplate: true,
      }),

      // https://github.com/unplugin/unplugin-vue-components
      Components({
        dts: 'src/components.d.ts',
        types: [],
      }),

      // https://vue-macros.sxzz.moe/zh-CN/features/reactivity-transform.html
      ReactivityTransform(),

      // https://github.com/dcloudio/uni-app
      Uni(),

      // https://github.com/unocss/unocss
      UnoCSS(),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),
    ],
  }
})
