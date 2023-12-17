---
outline: deep
---
# In-Depth

## SVG imported as component
`@yzfe/svgicon-loader` or `vite-plugin-svgicon` both provide `component` and `customCode` options to import svg files as components.

- `component`
    - `vue` Vue 3.x Component
    - `react` React Component
    - `custom` Custom generated code, used with `customCode`

### Use presets
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

Usage
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

### Customize
Customize the generated code by setting the `component` and `customCode` options. The `@yzfe/svgicon-loader` or `vite-plugin-svgicon` has already generated a code snippet: `const data = {/*iconData*/}`. Finally, this code snippet will be concatenated with the `customCode` to form the final code.

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

The above configuration loads the svg file as the code below
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
If you are using `@yzfe/svgicon-loader`, you need to add `babel-loader` to process the generated code.
:::

## Configure multiple paths

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
            // macth:  xxx.svg?component
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

Usage
```ts
// import as icon data
import ArrowIconData from '@/assets/svg/arrow.svg'
import FaArrowIconData from '@/assets/font-awesome/arrow.svg'

// import as component
import ArrowIcon from 'svg-icon-path/arrow.svg?component'

// import as url
import ArrowSvgUrl from 'svg-icon-path/arrow.svg?url'
```

## Typescript
If SVG file is imported as a component, the type definition of the component needs to be added.

```ts
// react
declare module '@/assets/svg/*.svg' {
    import { ReactSvgIconFC } from '@yzfe/react-svgicon'
    const value: ReactSvgIconFC
    export = value
}

// vue
declare module '@/assets/svg/*.svg' {
    import { VueSvgIcon } from '@yzfe/vue-svgicon'
    const value: typeof VueSvgIcon
    export = value
}
```

## vue-cli {#vue-cli}
If your project uses `vue-cli`, it is recommended to use `@yzfe/vue-cli-plugin-svgicon` for quick configuration.

```bash
# You will be prompted to fill in the SVG file path, the globally registered component tag name and the vue version
vue add @yzfe/svgicon
```

If you have installed `@yzfe/vue-cli-plugin-svgicon`, but this plugin is not invoked, you can invoke it manually.
```bash
vue invoke @yzfe/svgicon
```

After a successful invoke, the necessary dependencies and code will be automatically added, and a `.vue-svgicon.config.js` file will be generated to configure `@yzfe/svgicon-loader` and webpack aliases, as well as transformAssetUrls, etc.

```js
const path = require('path')
const svgFilePaths = ['src/assets/svgicon'].map((v) => path.resolve(v))
const tagName = 'icon'

module.exports = {
    tagName,
    svgFilePath: svgFilePaths,
    svgoConfig: {},
    pathAlias: {
        '@icon': svgFilePaths[0],
    },
    transformAssetUrls: {
        [tagName]: ['data'],
    },
    loaderOptions: {},
}
```
