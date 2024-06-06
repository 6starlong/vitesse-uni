import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  presets: [
    // https://github.com/uni-helper/unocss-preset-uni
    presetUni({
      remRpx: { mode: 'rem2rpx' }, // 1:8
      uno: {
        dark: 'class',
      },
    }),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      cdn: 'https://esm.sh/',
    }),
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ],
  // https://unocss.dev/config/shortcuts
  shortcuts: [
    // 布局
    [/^(flex|grid)-center/g, () => 'justify-center items-center'],
    [/^(flex|grid)-x-center/g, () => 'justify-center'],
    [/^(flex|grid)-y-center/g, () => 'items-center'],

    // 按钮
    ['btn', 'inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white lh-none disabled:cursor-default disabled:bg-gray-600 hover:bg-teal-800 disabled:opacity-50 !outline-none'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // 底部安全区域
    [/^(bottom|mb|pb)-safe(?:-(\d+))?$/, ([n]) => handleBottomSafeArea(n)],
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
