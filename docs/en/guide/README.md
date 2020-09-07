---
toc
---
# Quick Start
## Introduction
> svgicon is a name

svgicon is SVG icon component and tool set. It turns SVG files into icon data (vue) or icon components (react), allowing you to happily use SVG icons in your projects, whether you are using vue, react, vue3.x or Other js frameworks. svgicon includes the following npm packages:

- @yzfe/svgicon `Generate the data required by the SVG icon component according to the incoming parameters (props)`
- @yzfe/vue-svgicon `SVG icon component for vue2.x`
- @yzfe/vue3-svgicon `SVG icon component for vue3.x`
- @yzfe/react-svgicon `SVG icon component for react `
- @yzfe/svgicon-gen `Generate icon data (icon name and processed SVG content) based on the content of the SVG file`
- @yzfe/svgicon-loader `Load the SVG file as icon data (vue) or SVG icon component (react), the generated code can be customized`
- @yzfe/svgicon-viewer `Preview SVG icon`
- @yzfe/vue-cli-plugin-svgicon `A vue-cli plugin that can quickly configure svgicon`
- @yzfe/svgicon-polyfill `SVG innerHTML compatible (IE)`

## Vue （2.x & 3.x）
### Installation
#### Use vue-cli plugin (recommended)
```bash
# You will be prompted to fill in the SVG file path, the globally registered component tag name and the vue version
vue add @yzfe/svgicon
```

If you have installed `@yzfe/vue-cli-plugin-svgicon`, but this plugin is not invoked, you can invoke it manually.
```bash
vue invoke @yzfe/svgicon
```

After a successful invoke, the necessary dependencies and code will be automatically added, and a `.vue-svgicon.config.js` file will be generated to configure `@yzfe/svgicon-loader` and webpack aliases, as well as transformAssetUrls, etc.
::: details demo/vue-demo/.vue-svgicon.config.js
<<< @/demo/vue-demo/.vue-svgicon.config.js
:::

#### Not use the vue-cli plugin
Use vue-cli, but not @ yzfe / vue-cli-plugin-svgicon.

```bash
# loader
yarn add @yzfe/svgicon-loader --dev
# Add icon component
yarn add @yzfe/vue-svgicon # vue2.x
# or
yarn add @yzfe/vue3-svgicon # vue3.x
```
Configure vue.config.js

```js
const svgFilePath = 'svg file path （absolute path)'

{
    chainWebpack(config) {
        config.module
            .rule('vue-svgicon')
            .include.add(svgFilePath)
            .end()
            .test(/\.svg$/)
            .use('svgicon')
            .loader('@yzfe/svgicon-loader')
            .options({
                svgFilePath
            })

        config.module.rule('svg').exclude.add(svgFilePath).end()

        // Recommended configuration transformAssetUrls
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((opt) => {
                opt.transformAssetUrls = opt.transformAssetUrls || {}
                opt.transformAssetUrls['icon'] = ['data']
                return opt
            })

        // Recommended configuration alias
        config.resolve.alias.set('@icon', svgFilePath)
    }
}
```

After configuring vue.config.js, you need to add the following code to the entry file

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

#### Manual configuration
Configure Webpack

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
                            svgoConfig: null // Custom svgo configuration
                        }
                    }
                ]
            },
            //  transformAssetUrls
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            transformAssetUrls: {
                                ['标签名']: 'data' // The globally registered tag name, the default is icon
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

Other configurations can refer to: [Not use-vue-cli-plugin](./#not-use-the-vue-cli-plugin)

### Usage
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
If `transformAssetUrls` is configured, the svg file path can be used directly. It is recommended to also configure the alias of the svg file path.

```vue
<template>
    <div>
        <!-- It is assumed that the alias of the svg file path is configured: @icon  -->
        <icon data="@icon/arrow.svg" />
    </div>
</template>
```


## React
### Installation
```bash
yarn add @yzfe/svgicon-loader  --dev
yarn add @yzfe/react-svgicon
```
Configure Webpack

```js{13}
{
    module: {
        rules: [
            {
                test: /\.svg$/,
                include: ['SVG file paths'],
                use: [
                    {
                        loader: '@yzfe/svgicon-loader',
                        options: {
                            svgFilePath: ['SVG 文件路径'],
                            svgoConfig: null,
                            component: 'react', // Generate React components
                        }
                    }
                ]
            }
        ]
    }
}
```
::: details umijs configuration demo
<<< @/demo/react-demo/.umirc.ts
:::

Import css
```ts
import '@yzfe/svgicon/lib/svgicon.css'
```
### Usage
```tsx
import MySvgIcon from 'svg-path/mysvg.svg'

export default function FC() {
    return (
        <div>
            <MySvgIcon color="red" />
        </div>
    )
}
```

## Other js frameworks
Other js frameworks can use `@yzfe/svgicon` to write icon components suitable for their frameworks, please refer to `@yzfe/react-svgicon`.

::: details @yzfe/react-svgicon
<<<@/packages/react-svgicon/src/index.tsx
:::