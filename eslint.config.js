const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {
    rules: {
      // console 规则
      'no-console': [1, { allow: ['info', 'warn', 'error'] }],
      // 在内联 if 语句及其后续/替代表达式之间强制换行
      'antfu/if-newline': 'off',
      // 强制执行 1tbs 风格的大括号样式
      'style/brace-style': ['error', '1tbs'],
      // 允许（但不要求）使用尾随逗号
      'style/comma-dangle': ['error', 'only-multiline'],
      // 代码最大长度限制
      'style/max-len': ['warn', {
        code: 120,
        ignorePattern: '^\\s*class=',
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],

      // 解决 uv-switch 中的 active-color 属性样式不生效的问题
      'vue/attribute-hyphenation': ['error', 'always', {
        ignore: ['activeColor']
      }]
    }
  },
  unocss.configs.flat,
)
