---
toc
---
# 深入

## SVG 文件作为组件导入
`@yzfe/svgicon-loader` 或者 `vite-plugin-svgicon` 都提供 `component` 和 `customCode`选项将 SVG 文件作为组件导入。

- `component` 选项可选值
    - `vue` Vue 3.x 组件
    - `react` React 组件
    - `custom` 自定义生成的代码， 与 `customCode` 配搭使用

### 使用预设值
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, 'src/assets/svg'),
            component: 'react',
        })
    ]
})
```

用法
```tsx
import ArrowIcon from 'svg-icon-path/arrow.svg'
export default funtion() {
   return (
        <div>
            <ArrowIcon color="red" />
        </div>
    )
}
```

### 自定义
通过设置 `component` 为 `custom`和配置 `customCode` 来自定义生成的代码。`@yzfe/svgicon-loader` 或 `vite-plugin-svgicon` 已预先生成代码片段，`const data = {/*iconData*/}`，最后会将这段代码与 `customCode` 拼接作为最终的代码。

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, 'src/assets/svg'),
            component: 'custom',
            customCode: `
                import Vue from 'vue'
                import { VueSvgIcon } from '@yzfe/vue-svgicon'

                export default {
                    functional: true,
                    render(h, context) {
                        return h(VueSvgIcon, {
                            ...context.data,
                            data: data
                        })
                    }
                }
            `
        })
    ]
})
```
上述配置将 SVG 文件加载为下面的代码：
```js
const data = {/*iconData*/}
import Vue from 'vue'
import { VueSvgIcon } from '@yzfe/vue-svgicon'

export default {
    functional: true,
    render(h, context) {
        return h(VueSvgIcon, {
            ...context.data,
            data: data
        })
    }
}
```

::: warning
如果使用的是 `@yzfe/svgicon-loader`, 需要加上 `babel-loader` 处理生成的代码。
:::

## 配置多个路径
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, '../../packages/assets/svg'),
        }),
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            // 匹配:  xxx.svg?component
            matchQuery: /component/,
            svgFilePath: path.join(__dirname, '../../packages/assets'),
            component: 'vue',
        }),
         svgicon({
            include: ['**/assets/font-awesome/**/*.svg'],
            svgFilePath: path.join(
                __dirname,
                '../../packages/assets/font-awesome'
            ),
        }),
    ]
})
```

用法
```ts
// 导入为图标数据
import ArrowIconData from '@/assets/svg/arrow.svg'
import FaArrowIconData from '@/assets/font-awesome/arrow.svg'

// 导入为组件
import ArrowIcon from 'svg-icon-path/arrow.svg?component'

// 导入为路径
import ArrowSvgUrl from 'svg-icon-path/arrow.svg?url'
```

## Typescript
如果配置 SVG 文件作为组件导入，需要加上组件的类型定义。

```ts
// react
declare module '@/assets/svg/*.svg' {
    import { ReactSvgIconFC } from '@yzfe/react-svgicon'
    const value: ReactSvgIconFC
    export = value
}

// vue
declare module '@/assets/svg/*.svg' {
    import { VueSvgIcon } from '@yzfe/vue3-svgicon'
    const value: typeof VueSvgIcon
    export = value
}
```

## vue-cli
如果你的项目使用 `vue-cli`, 推荐使用 `@yzfe/vue-cli-plugin-svgicon` 进行快速配置。

```bash
# 将会提示你填写 SVG 文件路径，全局注册的组件标签名称和 vue 的版本
vue add @yzfe/svgicon
```

如果已经安装了 `@yzfe/vue-cli-plugin-svgicon`, 但是没有调用到这个插件，你可以手动调用。
```bash
vue invoke @yzfe/svgicon
```

成功调用后，会自动添加必要的依赖和代码，另外还会生成 `.vue-svgicon.config.js` 文件，用来配置 `@yzfe/svgicon-loader` 和 `webpack` 别名，还有 `transformAssetUrls` 等。

<<<../demo/vue2-webpack/.vue-svgicon.config.js
