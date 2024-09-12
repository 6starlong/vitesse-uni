<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/250519667-0b07fd60-968d-4d81-9185-1e8ac421ab02.png' alt='Vitesse Uni - Opinionated Vite + UniApp Starter Template' width='800'/>
</p>

<h5 align='center'>
<b><a href="https://github.com/antfu/vitesse">Vitesse</a> 的 uni-app 版本</b>
</h5>

<h6 align='center'>
<a href="https://vitesse-uni.netlify.app/">在线 Demo</a>
</h6>

<br/>

> 该模板主要是为了兼容 [uni-app](https://uniapp.dcloud.io/) 拥有更好的开发体验。如无跨端需求，建议使用 [Nuxt 3](https://nuxt.com/) 来代替。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/6starlong/vitesse-uni/tree/main/src/pages)

- 📦 [组件自动化加载](https://github.com/6starlong/vitesse-uni/blob/main/src/components)

- 📑 [布局系统](https://github.com/6starlong/vitesse-uni/tree/main/src/layouts)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动导入](https://github.com/6starlong/vitesse-uni/tree/master/src/composables) - 直接使用 Composition API 等

- ✅ 使用 [Vitest](https://vitest.dev/) 进行单元测试

- 🦾 TypeScript, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

- ☁️ 零配置部署 [Netlify](https://www.netlify.com/)

## 从 [Vitesse](https://github.com/antfu/vitesse) 中删除了以下特性

- ~~i18n~~
- ~~VueUse~~
- ~~SSG~~
- ~~PWA~~
- ~~Markdown~~

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- [uv-ui](https://github.com/climblee/uv-ui) - uv-ui 破釜沉舟之兼容vue3+2、app、h5、小程序等多端基于uni-app和uView2.x的生态框架，支持单独导入，开箱即用，利剑出击。

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 以文件系统为基础的路由
- [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`reactivity-transform`](https://vue-macros.sxzz.moe/features/reactivity-transform.html) - Vue Macros Reactivity Transform 独立包
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强Vue开发者体验的Vite插件

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 Composition API 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查代码格式，并使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置，使用单引号并去掉分号。

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库](https://github.com/6starlong/vitesse-uni/generate).

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit 6starlong/vitesse-uni my-uni-app
cd my-uni-app
pnpm i # 如果你没装过 pnpm, 运行: npm install -g pnpm
```
