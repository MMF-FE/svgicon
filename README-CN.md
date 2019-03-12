# vue-svgicon

[![Build Status](https://img.shields.io/travis/MMF-FE/vue-svgicon.svg?style=flat-square)](https://travis-ci.org/MMF-FE/vue-svgicon)

Use inline Svg icon in Vue.js. (vue 2.x)

## 示例

https://mmf-fe.github.io/vue-svgicon/v4/

## 一些坑

-   [Work on IE and old browser](#work-on-ie-and-old-browser)

## 使用方式

### 安装依赖

```bash
# 安装 vue-svgicon 和 vue-svgicon-loader
npm install vue-svgicon@next
npm install @yzfe/vue-svgicon-loader@next --dev
```

### Webpack config

```js
{
    module: {
        rules: [
            {
                test: /\.svg$/,
                include: ['SVG source file path'],
                use: [
                    {
                        loader: '@yzfe/vue-svgicon-loader',
                        options: {
                            idSeparator: '_',
                            svgFilePath: 'SVG source file path'
                        }
                    }
                ]
            },
            // 推荐配置 transformAssetUrls
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            transformAssetUrls: {
                                icon: 'data'
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

### 注册 vue-svgicon 插件

#### Typescript

```ts
import Vue from 'vue'
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'

// [可选] 默认的样式，你可以使用自定义的样式.
// 默认样式源码: https://github.com/MMF-FE/vue-svgicon/blob/dev/packages/vue-svgicon/src/style.scss
import 'vue-svgicon/dist/svgicon.css'

Vue.use<PluginOptions>(VueSvgIcon, {
    tagName: 'icon'
})
```

### 使用图标

```html
<template>
    <div>
        <icon
            :data="vueIcon"
            width="200"
            height="200"
            color="#42b983 #35495e"
        />
    </div>
</template>
<script>
    import vueIcon from '@/assets/svg/vue.svg'

    export default {
        data() {
            return {
                vueIcon
            }
        }
    }
</script>
```

#### transformAssetUrls

如果 vue-loader 设置了 transformAssetUrls 选项，则可以直接在模板中使用 SVG 文件路径，而无需在 JS 中导入 SVG。

```html
<template>
    <div>
        <icon
            data="~assets/svg/vue.svg"
            width="200"
            height="200"
            color="#42b983 #35495e"
        />
    </div>
</template>
```

## @yzfe/vue-svgicon-loader 选项

#### idSeparator [可选]

生成唯一 id 属性的分隔符，默认是 `'_'`

```html
<svg version="1.1" viewBox="0 0 200 200">
    <defs>
        <clipPath id="svgicon_mask_a">
            <path pid="0" d="M0 0h200v100H0z"></path>
        </clipPath>
    </defs>
    <circle
        pid="1"
        cx="100"
        cy="100"
        r="100"
        clip-path="url(#svgicon_mask_a)"
    ></circle>
</svg>
```

#### svgFilePath [可选]

SVG 文件夹路径. 默认是 `process.cwd()` 。

## 插件 选项

### tagName

自定义标签名. 默认是 **svgicon**

```js
Vue.use(VueSvgIcon, {
    tagName: 'svgicon'
})
```

```html
<svgicon data="./vue.svg"></svgicon>
```

### classPrefix

你可以使用 `classPrefix` 选项设置默认的 class 的前缀。默认的前缀是 `svg`

```js
Vue.use(VueSvgIcon, {
    classPrefix: 'vue-svg'
})
```

这样会生成像以下那样的代码

```html
<svg
    version="1.1"
    viewBox="0 0 4 7"
    class="vue-svg-icon vue-svg-fill vue-svg-up"
>
    <!-- svg code -->
</svg>
```

### defaultWidth / defaultHeight

默认大小

### isStroke

默认使用描边样式

### isOriginalDefault

是否默认使用 SVG 原色。

## 组件 Props

### data

生成的 SVG 图标数据，格式如下：

```ts
export interface IconData {
    width: number
    height: number
    viewBox: string
    data: string // Optimized Svg content
    [key: string]: any
}

export interface Icon {
    name: string
    data: IconData
}
```

一般是通过 @yzfe/vue-svgicon-loader 生成的.

### dir

图标方向

```html
<icon data="arrow.svg" width="50" height="50" dir="left"></icon>
<icon data="arrow.svg" width="50" height="50" dir="up"></icon>
<icon data="arrow.svg" width="50" height="50" dir="right"></icon>
<icon data="arrow.svg" width="50" height="50" dir="down"></icon>
```

### fill

是否填充 path/shape. 默认是 **true**

```html
<icon data="arrow.svg" width="50" height="50"></icon>
<icon data="arrow.svg" width="50" height="50" :fill="false"></icon>
```

You can use **r-color** to reverse the fill property
你可以使用 **r-color** 反向设置 fill 属性。

```html
<!-- 第一个 path 是填充的 (默认), 第二个是描边 -->
<icon
    data="clock.svg"
    color="#8A99B2 r-#1C2330"
    width="100"
    height="100"
></icon>
<!-- 第一个 path 是描边的 (默认), 第二个是填充 -->
<icon
    data="clock.svg"
    color="#8A99B2 r-#1C2330"
    width="100"
    height="100"
    :fill="false"
></icon>
```

### width / height

指定图标大小，默认单位是 **px**

```html
<icon data="arrow.svg" width="50" height="50"></icon>
<icon data="arrow.svg" width="10em" height="10em"></icon>
```

### scale

缩放图标

```html
<icon data="arrow.svg" scale="10"></icon>
<icon data="arrow.svg" scale="10" width="10em" height="10em"></icon>
```

### color

指定图标颜色. 默认是继承颜色.

```html
<p style="color: darkorange">
    <icon data="arrow.svg" width="50" height="50"></icon>
    <icon data="arrow.svg" width="50" height="50" color="red"></icon>
    <icon data="arrow.svg" width="50" height="50" color="green"></icon>
    <icon data="arrow.svg" width="50" height="50" color="blue"></icon>
</p>
```

如果图标有多个 path/shape, 你可以按照顺序定义多种颜色。

```html
<icon data="vue.svg" width="100" height="100" color="#42b983 #35495e"></icon>
```

你可以使用 css 设置颜色

```html
<icon class="vue-icon" data="vue.svg" width="100" height="100"></icon>
```

```css
.vue-icon path[pid='0'] {
    fill: #42b983;
}

.vue-icon path[pid='1'] {
    fill: #35495e;
}
```

使用渐变

```html
<template>
    <svg>
        <defs>
            <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stop-color="#57f0c2" />
                <stop offset="95%" stop-color="#147d58" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stop-color="#7295c2" />
                <stop offset="95%" stop-color="#252e3d" />
            </linearGradient>
        </defs>
    </svg>
    <icon
        data="vue.svg"
        width="15rem"
        height="15rem"
        color="url(#gradient-1) url(#gradient-2)"
    ></icon>
</template>
```

### original

使用 svg 原来的颜色

```html
<icon data="colorwheel.svg" width="100" height="100" original></icon>
<!-- 覆盖原来的颜色，_ 表示当前位置的 path/shape 使用原来的颜色，其他使用新的颜色 -->
<icon
    data="colorwheel.svg"
    width="100"
    height="100"
    original
    color="_ black _ black _"
></icon>
```

### title
SVG title

```html
<icon data="@icon/vue.svg" title="vue icon" >
```

It will be generated like this:

```html
<svg
    version="1.1"
    viewBox="0 0 256 221"
    class="vue-svg-icon vue-svg-fill"
>
    <title>vue icon</title>
    <!-- svg code -->
</svg>
```

### 预览 图标

Use `@yzfe/vue-svgicon-viewer` preview SVG icons

```bash
# Install global
npm install -g @yzfe/vue-svgicon-viewer

# Install in project
npm install  @yzfe/vue-svgicon-viewer --dev

# Use command
vsvg-viewer ./svg/folder
```

### Work on IE and old browser

This component doesn't work on IE because IE don't support `innerHTML` in SVGElement. You can use [innersvg-polyfill](innersvg-polyfill) to make it work. You can also use the polyfill provided by `@yzfe/vue-svgicon-polyfill`.

```js
// in main.js first line
import '@yzfe/vue-svgicon-polyfill'
```

This polyfill is a wrapper of [innersvg-polyfill](https://github.com/dnozay/innersvg-polyfill).
