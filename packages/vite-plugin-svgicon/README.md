# vite plugin for @yzfe/svgicon

## Install

### vue2.x
```bash
yarn add @yzfe/svgicon
yarn add vite-plugin-svgicon --dev
```

### vue3.x
```bash
yarn add @yzfe/svgicon @yzfe/vue3-svgicon
yarn add vite-plugin-svgicon --dev
```

## Setup
```ts vue2.x
// vite.config.js
import { defineConfig } from 'vite'
import {createVuePlugin as vue} from 'vite-plugin-vue2'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        vue(),
        svgicon({
            include: ['**/svg-icon/**/*.svg']
        })
    ]
})
```

```ts vue3.x
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgicon from 'vite-plugin-svgicon'

export default defineConfig({
    plugins: [
        vue(),
        svgicon({
            include: ['**/svg-icon/**/*.svg']
        })
    ]
})
```

```ts
// main.ts vue2.x
import vue from 'vue'
import App from './App'
import { VueSvgIconPlugin } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.component("icon",VueSvgIcon);

new Vue({
    render:(h)=>(App),
}).$mount("#app")
```


```ts
// main.ts vue3.x
import { createApp } from 'vue'
import App from './App'
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'


createApp(App)
    .use(VueSvgIconPlugin, {
        tagName: 'icon'
    })
    .mount('#app')
```


```html
<!-- App.vue -->
<template>
    <div>
        <icon :data="vueSvg" original></icon>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import vueSvg from './assets/svg-icon/vue.svg'

export default defineComponent({
    name: 'App',
    data() {
        return {
            vueSvg
        }
    }
})
</script>
```

## options
```ts
export interface PluginOptions {
    svgFilePath?: string | string[];
    /** load as a component */
    component?: 'react' | 'custom';
    /** custom code when load as a custom component */
    customCode?: string;
    svgoConfig?: SvgoOptons;
    /** Svg files to be excluded, use minimatch */
    exclude?: string | string[];
    /** Svg files to be included, use minimatch */
    include?: string | string[];
}
```
