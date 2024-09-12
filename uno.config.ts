// https://github.com/uni-helper/unocss-preset-uni
import { presetUni } from '@uni-helper/unocss-preset-uni'

import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // 布局
    ['flex-center', 'flex justify-center items-center'],

    // 按钮
    ['btn', 'inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white lh-none disabled:cursor-default disabled:bg-gray-600 hover:bg-teal-800 disabled:opacity-50 !outline-none'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // 底部安全区域
    [/^(bottom|mb|pb)-safe(?:-(\d+))?$/, ([n]) => handleBottomSafeArea(n)],
  ],
  presets: [
    presetUni(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ],
})

// 处理底部安全区域
function handleBottomSafeArea(name) {
  const prefix = name.split('-')[0]
  const value = name.split('-').slice(-1)
  return value.toString() !== 'safe'
    ? `${prefix}-[calc(env(safe-area-inset-bottom)+${value}rpx)]`
    : `${prefix}-[env(safe-area-inset-bottom)]`
}
