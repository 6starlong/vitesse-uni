import uni from '@uni-helper/eslint-config'

export default uni(
  {
    unocss: true,
    formatters: true,
    rules: {
      // 在内联 if 语句及其后续/替代表达式之间强制换行
      'antfu/if-newline': 'off',
      // 强制执行 1tbs 风格的大括号样式
      'style/brace-style': ['error', '1tbs'],
      // 解决 uv-switch 等组件中的 active-color 属性样式不生效的问题
      'vue/attribute-hyphenation': ['error', 'always', {
        ignore: ['activeColor'],
      }],
    },
  },
)
