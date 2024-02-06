const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      // console 规则
      'no-console': [1, { allow: ['info', 'warn', 'error'] }],
      // 在内联 if 语句及其后续/替代表达式之间强制换行
      'antfu/if-newline': 'off',
      // 强制执行 1tbs 风格的大括号样式
      'style/brace-style': ['error', '1tbs'],
      // 解决 uv-switch 中的 active-color 属性样式不生效的问题
      'vue/attribute-hyphenation': ['error', 'always', {
        ignore: ['activeColor'],
      }],
    },
  },
)
