---
outline: deep
---
# 快速上手
本节内容主要是简单的介绍 svgicon 配置和使用，建议查看【[深入](./advanced.md)】这一节了解更多。

## 介绍
> svgicon 是一个名称

svgicon 是 SVG 图标组件和工具集，将 SVG 文件变成图标数据(vue)或者图标组件(react)，让你可以愉快的在项目中使用 SVG 图标，无论你是使用 vue, react, vue3.x, taro 还是其他 js 框架。svgicon 包括了以下的 npm 包：

- @yzfe/svgicon `根据传入的参数(props)生成 SVG 图标组件需要的数据`
- @yzfe/vue-svgicon `适用于 vue ^2.7 || >3.0.0 的 SVG 图标组件`
- @yzfe/vue2-svgicon `适用于 vue < 2.7 的 SVG 图标组件`
- @yzfe/react-svgicon `适用于 react 的 SVG 图标组件`
- @yzfe/taro-svgicon `适用于 taro 的 SVG 图标组件`
- @yzfe/svgicon-gen `根据 SVG 文件内容，生成图标数据（图标名称和处理过的 SVG 内容）`
- @yzfe/svgicon-loader `将 SVG 文件加载成图标数据(vue)或者 SVG 图标组件(react), 可以自定义生成的代码`
- vite-plugin-svgicon `vite 插件，功能与 @yzfe/svgicon-loader 类似`
- @yzfe/svgicon-viewer `预览 SVG 图标`
- @yzfe/vue-cli-plugin-svgicon `vue-cli 插件，可以快速的配置 svgicon`
- @yzfe/svgicon-polyfill `SVG innerHTML 兼容（IE）`

## 配置


### Vite
使用 vite-plugin-svgicon 加载 SVG 文件为图标数据
```bash
npm install vite-plugin-svgicon -D
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        svgicon({
            include: ['**/assets/svg/**/*.svg'],
            svgFilePath: path.join(__dirname, 'src/assets/svg'),
            // 如果是使用 React，建议配置 component 选项为 react, 加载 SVG 文件为 react 组件
            component: 'react',
        })
    ]
})
```

### Webpack
使用 @yzfe/svgicon-loader 加载 SVG 文件为图标数据
```bash
npm install @yzfe/svgicon-loader -D
```

```js
// webpack.config.js
{
    module: {
        rules: [
             {
                test: /\.svg$/,
                include: ['SVG 文件路径'],
                use: [
                    'babel-loader',
                    {
                        loader: '@yzfe/svgicon-loader',
                        options: {
                            svgFilePath: ['SVG 文件路径'],
                            // 自定义 svgo 配置
                            svgoConfig: null,
                            // 如果是使用 React，建议配置 component 选项为 react, 加载 SVG 文件为 react 组件
                            component: 'react',
                        }
                    }
                ]
            },
        ]
    }
}
```
> 使用 [vue-cli](./advanced.md#vue-cli)

### 使用
```js
import arrowData from 'svg-file-path/arrow.svg'
// {name: 'arrow', data: {width: 16, height: 16, ...}}
console.log(arrowData)
```


## Vue 2.x
### 安装依赖
```bash
npm install @yzfe/svgicon @yzfe/vue2-svgicon  --save
```

### 使用
```js
// main.js
import { VueSvgIcon } from '@yzfe/vue2-svgicon'

// 引入 css 样式
import '@yzfe/svgicon/lib/svgicon.css'
// 注册全局组件
Vue.component('icon', VueSvgIcon)
```
```vue
<template>
    <div>
        <icon :data="arrowData" />
        <!-- 建议配置 transformAssetUrls， 可以直接传入 SVG 文件路径 -->
        <icon data="svg-file-path/arrow.svg" />
    </div>
</template>
<script>
import arrowData from 'svg-file-path/arrow.svg'
export default {
    data() {
        return: {
            arrowData
        }
    }
}
</script>
```

## Vue 3.x
### 安装依赖
```bash
npm install @yzfe/svgicon @yzfe/vue-svgicon --save
```

### 使用
```ts
// main.ts
import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'
// 引入 css 样式
import '@yzfe/svgicon/lib/svgicon.css'
// 注册全局组件
app.use(VueSvgIconPlugin, {tagName: 'icon'})
```

```vue
<script setup lang="ts">
import arrowData from 'svg-file-path/arrow.svg'
</script>
<template>
    <div>
        <icon :data="arrowData" />
        <!-- 建议配置 transformAssetUrls， 可以直接传入 SVG 文件路径 -->
        <icon data="svg-file-path/arrow.svg" />
    </div>
</template>
```


## React
### 安装依赖
```bash
npm install @yzfe/svgicon @yzfe/react-svgicon --save
```

### 使用
```ts
import '@yzfe/svgicon/lib/svgicon.css'
```

```tsx
import ArrowIcon from 'svg-file-path/arrow.svg'

export default function FC() {
    return (
        <div>
            <ArrowIcon color="red" />
        </div>
    )
}
```

## TaroJs
### 安装依赖
```bash
npm install @yzfe/svgicon @yzfe/taro-svgicon
```
TaroJs 使用方式与 React 一致，请参考 React 一节

## 其他框架
其他 js 框架可以通过 `@yzfe/svgicon ` 编写适用于其框架的图标组件，可以参考 `@yzfe/react-svgicon`.

::: details @yzfe/react-svgicon
<<<../../../packages/react-svgicon/src/index.tsx
:::
