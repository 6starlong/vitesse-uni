import type { Preset, SourceCodeTransformer } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

// uni-app https://github.com/unocss-applet/unocss-applet
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet())
  presets.push(presetRemRpx()) // 如果需要使用 rem 转 rpx 单位，需要启用此插件
  transformers.push(transformerAttributify())
  transformers.push(transformerApplet())
}
else {
  presets.push(presetUno())
  presets.push(presetAttributify())
}

export default defineConfig({
  // https://unocss.dev/config/shortcuts
  shortcuts: [
    // flex 布局
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'flex-around': 'flex justify-around items-center',
      'flex-start': 'flex justify-start items-center',
      'flex-end': 'flex justify-end items-center',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-baseline': 'flex items-baseline',
    },

    // 按钮
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-700 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // 底部安全区域
    [/^(bottom|mb|pb)-safe(?:-(\d+))?$/, ([n]) => handlerBottomSafeArea(n)],
  ],
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    ...presets,
  ],
  transformers: [
    transformerDirectives(), // 启用 @apply 功能
    transformerVariantGroup(), // 启用 () 分组功能
    ...transformers,
  ],
})

// 处理底部安全区域
function handlerBottomSafeArea(name) {
  const prefix = name.split('-')[0]
  const value = name.split('-').slice(-1)
  return value.toString() !== 'safe'
    ? `${prefix}-[calc(env(safe-area-inset-bottom)+${value}rpx)]`
    : `${prefix}-[env(safe-area-inset-bottom)]`
}
