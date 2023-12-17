---
outline: deep
---
# Quick Start
This section provides a brief introduction to the configuration and usage of `svgicon`. For more in-depth information, it is recommended to refer to the "[In-Depth](./advanced.md)" section to gain a deeper understanding.

## Introduction
> svgicon is a name

svgicon is SVG icon component and tool set. It turns SVG files into icon data (vue) or icon components (react), allowing you to happily use SVG icons in your projects, whether you are using vue, react, vue3.x or Other js frameworks. svgicon includes the following npm packages:

- @yzfe/svgicon `Generate the data required by the SVG icon component according to the incoming parameters (props)`
- @yzfe/vue-svgicon `SVG icon component for vue`
- @yzfe/react-svgicon `SVG icon component for react `
- @yzfe/svgicon-gen `Generate icon data (icon name and processed SVG content) based on the content of the SVG file`
- @yzfe/svgicon-loader `Load the SVG file as icon data (vue) or SVG icon component (react), the generated code can be customized`
- vite-plugin-svgicon `vite plugin，like @yzfe/svgicon-loader`
- @yzfe/svgicon-viewer `Preview SVG icon`
- @yzfe/vue-cli-plugin-svgicon `A vue-cli plugin that can quickly configure svgicon`
- @yzfe/svgicon-polyfill `SVG innerHTML compatible (IE)`

## Configuration

### Vite
Use `vite-plugin-svgicon` to load svg files as icon data

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
            // If you are using react, it is recommended to configure the component option for react and load the svg file as react components.
            component: 'react',
        })
    ]
})
```


### Webpack
Use `@yzfe/svgicon-loader` to load svg files as icon data

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
                include: ['SVG file path'],
                use: [
                    'babel-loader',
                    {
                        loader: '@yzfe/svgicon-loader',
                        options: {
                            svgFilePath: ['SVG file path'],
                            // Custom svgo configuration
                            svgoConfig: null,
                            // If you are using react, it is recommended to configure the component option for react and load the svg file as react components.
                            component: 'react',
                        }
                    }
                ]
            },
        ]
    }
}
```

> Use [vue-cli](./advanced.md#vue-cli)

### Usage
```js
import arrowData from 'svg-file-path/arrow.svg'
// {name: 'arrow', data: {width: 16, height: 16, ...}}
console.log(arrowData)
```


## Vue 2.x
### Install dependencies
```bash
npm install @yzfe/svgicon @yzfe/vue-svgicon  --save
```

### Usage
```js
// main.js
import { VueSvgIcon } from '@yzfe/vue-svgicon'

// Import style
import '@yzfe/svgicon/lib/svgicon.css'
// Global component
Vue.component('icon', VueSvgIcon)
```
```vue
<template>
    <div>
        <icon :data="arrowData" />
        <!-- It is recommended to configure transformAssetUrls，. You can directly pass in the svg file path. -->
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
### Install dependencies
```bash
npm install @yzfe/svgicon @yzfe/vue-svgicon --save
```

### Usage
```ts
// main.ts
import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'
// Import style
import '@yzfe/svgicon/lib/svgicon.css'
// Global component
app.use(VueSvgIconPlugin, {tagName: 'icon'})
```

```vue
<script setup lang="ts">
import arrowData from 'svg-file-path/arrow.svg'
</script>
<template>
    <div>
        <icon :data="arrowData" />
        <!-- It is recommended to configure transformAssetUrls，. You can directly pass in the svg file path. -->
        <icon data="svg-file-path/arrow.svg" />
    </div>
</template>
```


## React
### Install dependencies
```bash
npm install @yzfe/svgicon @yzfe/react-svgicon --save
```

### Usage
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

## Other frameworks
Other frameworks can use `@yzfe/svgicon` to write icon components suitable for their frameworks, please refer to `@yzfe/react-svgicon`.

::: details @yzfe/react-svgicon
<<<../../packages/react-svgicon/src/index.tsx
:::
