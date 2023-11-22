## 基于文件的路由

将为该目录中具有相同文件结构的 Vue 文件自动生成路由，使用 `pages.config.ts` 配置动态生成 `pages.json` 文件。查看 [`@uni-helper/vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) 了解更多详细信息。

### 路径别名

`~/` 是别名为 `./src/` 的文件夹。

例如:

```ts
import { isDark } from '../../../../composables'
```

现在你可以使用：

```ts
import { isDark } from '~/composables'
```
