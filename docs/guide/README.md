---
toc
---
# 快速上手
## 介绍
> svgicon 是一个名称

svgicon 是 SVG 图标组件和工具集，将 SVG 文件变成图标数据(vue)或者图标组件(react)，让你可以愉快的在项目中使用 SVG 图标，无论你是使用 vue, react, vue3.x 还是其他 js 框架。svgicon 包括了以下的 npm 包：

- @yzfe/svgicon `根据传入的参数(props)生成 SVG 图标组件需要的数据`
- @yzfe/vue-svgicon `适用于 vue2.x 的 SVG 图标组件`
- @yzfe/vue3-svgicon `适用于 vue3.x 的 SVG 图标组件`
- @yzfe/react-svgicon `适用于 react 的 SVG 图标组件`
- @yzfe/svgicon-gen `根据 SVG 文件内容，生成图标数据（图标名称和处理过的 SVG 内容）`
- @yzfe/svgicon-loader `将 SVG 文件加载成图标数据(vue)或者 SVG 图标组件(react), 可以自定义生成的代码`
- @yzfe/svgicon-viewer `预览 SVG 图标`
- @yzfe/vue-cli-plugin-svgicon `vue-cli 插件，可以快速的配置 svgicon`
- @yzfe/svgicon-polyfill `SVG innerHTML 兼容（IE）`

## Vue （2.x & 3.x）
### 安装
#### 使用 vue-cli 插件 (推荐)
```bash
# 将会提示你填写 SVG 文件路径，全局注册的组件标签名称和 vue 的版本
vue add @yzfe/svgicon
```

如果已经安装了 `@yzfe/vue-cli-plugin-svgicon`, 但是没有调用到这个插件，你可以手动调用。
```bash
vue invoke @yzfe/svgicon
```

成功调用后，会自动添加必要的依赖和代码，另外还会生成 `.vue-svgicon.config.js` 文件，用来配置 `@yzfe/svgicon-loader` 和 webpack 别名，还有 transformAssetUrls 等。
::: details demo/vue-demo/.vue-svgicon.config.js
<<< @/demo/vue-demo/.vue-svgicon.config.js
:::

#### 不使用 vue-cli 插件
使用 vue-cli，但是没有使用 @yzfe/vue-cli-plugin-svgicon.

```bash
# loader
yarn add @yzfe/svgicon-loader
# 添加图标组件
yarn add @yzfe/vue-svgicon # vue2.x
# or
yarn add @yzfe/vue3-svgicon # vue3.x
```
你可以参考这个插件的代码来配置 vue.config.js

::: details packages/vue-cli-plugin-svgicon/index.js
<<< @/packages/vue-cli-plugin-svgicon/index.js#chainWebpack{1}
:::
配置好 webpack 之后，还需要在入口文件加上以下代码

```ts
// vue2.x
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.component('icon', VueSvgIcon)
```

```ts
// vue3.x
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

app.use(VueSvgIconPlugin, {tagName: 'icon'})
```

#### 手动配置
Webpack config
```js
{
    module: {
        rules: [
            {
                test: /\.svg$/,
                include: ['SVG 文件路径'],
                use: [
                    {
                        loader: '@yzfe/svgicon-loader',
                        options: {
                            svgFilePath: ['SVG 文件路径'],
                            svgoConfig: null // 自定义 svgo 配置
                        }
                    }
                ]
            },
            // Recommend config, transformAssetUrls
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            transformAssetUrls: {
                                ['标签名']: 'data' // 全局注册的标签名，默认是 icon
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

其他配置可以参考：[不使用-vue-cli-插件](./#不使用-vue-cli-插件)

### 使用
```vue
<template>
    <div>
        <icon :data="arrowData" />
    </div>
</template>
<script>
import arrowData from 'svgfilepath/arrow.svg'
export default {
    data() {
        return: {
            arrowData
        }
    }
}
</script>
```
如果配置了 `transformAssetUrls`, 可以直接使用 svg 文件路径. 建议也配置 svg 文件路径的别名。

```vue
<template>
    <div>
        <!-- 这里假设配置了svg 文件路径的别名 @icon  -->
        <icon data="@icon/arrow.svg" />
    </div>
</template>
```


## React
### 安装
### 使用

## 其他框架


