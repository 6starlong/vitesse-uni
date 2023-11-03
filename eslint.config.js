const antfu = require('@antfu/eslint-config').default
const unocss = require('@unocss/eslint-plugin')

module.exports = antfu(
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
  unocss.configs.flat,
)
