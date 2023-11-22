import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUni } from '@uni-helper/unocss-preset-uni'

export default defineConfig({
  // https://unocss.dev/config/shortcuts
  shortcuts: [
    // 布局
    [/^(flex|grid)-center/g, () => 'justify-center items-center'],
    [/^(flex|grid)-x-center/g, () => 'justify-center'],
    [/^(flex|grid)-y-center/g, () => 'items-center'],

    // 按钮
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // 底部安全区域
    [/^(bottom|mb|pb)-safe(?:-(\d+))?$/, ([n]) => handleBottomSafeArea(n)],
  ],
  presets: [
    // https://github.com/uni-helper/unocss-preset-uni
    presetUni({
      remRpx: { mode: 'rem2rpx' } // 1:8
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    })
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
  ]
})

// 处理底部安全区域
function handleBottomSafeArea(name) {
  const prefix = name.split('-')[0]
  const value = name.split('-').slice(-1)
  return value.toString() !== 'safe'
    ? `${prefix}-[calc(env(safe-area-inset-bottom)+${value}rpx)]`
    : `${prefix}-[env(safe-area-inset-bottom)]`
}
