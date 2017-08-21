# vue-svgicon

[![Build Status](https://img.shields.io/travis/MMF-FE/vue-svgicon.svg?style=flat-square)](https://travis-ci.org/MMF-FE/vue-svgicon)
[![Coverage Status](https://img.shields.io/coveralls/MMF-FE/vue-svgicon.svg?style=flat-square)](https://coveralls.io/r/MMF-FE/vue-svgicon?branch=master)


A tool to create svg icon components. (vue 2.x)

## Inspiration
https://github.com/Justineo/vue-awesome

## demo
https://mmf-fe.github.io/vue-svgicon/

## Some issues
- [Work on server-side render (SSR)](#work-on-server-side-render-ssr)
- [Work on IE and old browser](#work-on-ie-and-old-browser)

## Usage
### Generate icon
#### Install
```bash
# install global
npm install vue-svgicon -g
# install for project
npm install vue-svgicon --save-dev
```
#### Command
```bash
# generate svg icon components
vsvg -s /path/to/svg/source -t /path/for/generated/components
```

#### Use as npm scripts
```json
{
    "scripts": {
        "svg": "vsvg -s ./static/svg/src -t ./src/icons"
    }
}
```

```bash
# bash
npm run svg
```

It will generate icons to the specified path.

#### Custom icon content format

```bash
# specify template path
vsvg -s /path/to/svg/source -t /path/for/generated/components --tpl /path/for/icon-template
```
Default template is:
```javascript
var icon = require('vue-svgicon')
icon.register({
  '${name}': {
    width: ${width},
    height: ${height},
    viewBox: ${viewBox},
    data: `${data}`
  }
})

```

#### Custom icon file extension
```bash
vsvg -s /path/to/svg/source -t /path/for/generated/components --ext ts
```

### Use generated icon
Use plugin

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import * as svgicon from 'vue-svgicon'

// Default tag name is 'svgicon'
Vue.use(svgicon, {
    tagName: 'svgicon'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
```

Use icon in component
```html
<!-- App.vue -->
<template>
  <div id="app">
    <p>
      <svgicon name="vue" width="200" height="200" color="#42b983 #35495e"></svgicon>
    </p>
  </div>
</template>

<script>
import 'icons/vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>
```
You can import all icons at once
```javascript
import 'icons'
```

## Options

### tagName
Custom component tag name. Default is **svgicon**
```js
Vue.use(svgicon, {
  tagName: 'svgicon'
})
```
```html
<svgicon name="vue"></svgicon>
```

### defaultWidth / defaultHeight
Set default size if size props not set.
```js
Vue.use(svgicon, {
  defaultWidth: '1em',
  defaultHeight: '1em'
})
```

## Props

### icon / name
icon name.
```html
<svgicon icon="vue"></svgicon>
<svgicon name="vue"></svgicon>
```

### dir
The direction of icon. Default value is **right**
```html
<svgicon name="arrow" width="50" height="50" dir="left"></svgicon>
<svgicon name="arrow" width="50" height="50" dir="up"></svgicon>
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="arrow" width="50" height="50" dir="down"></svgicon>
```

### fill
Whether to fill the path/shape. Default value is **true**
```html
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="arrow" width="50" height="50" :fill="false"></svgicon>
```
You can use **r-color** to reverse the fill property
```html
<!-- the first one is fill(default), the second use stroke -->
<svgicon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></svgicon>
<!-- the first one is stoke, the second is fill -->
<svgicon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100" :fill="false"></svgicon>
```


### width / height
Specify the size of icon. Default value is **16px / 16px**. Default unit is **px**
```html
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="arrow" width="10em" height="10em"></svgicon>
```
### scale
Scale icon size, it will overwrite width/height prop
```html
<svgicon name="arrow" scale="10"></svgicon>
<svgicon name="arrow" scale="10" width="10em" height="10em"></svgicon>
```

### Color
Specify the color of icon. Default value is **inherit**.
```html
<p style="color: darkorange">
    <svgicon name="arrow" width="50" height="50"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="red"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="green"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="blue"></svgicon>
</p>
```
If the icon is mutil path/shape, you can use mutil color. It is defined in the order of path/shape.
```html
<svgicon name="vue" width="100" height="100" color="#42b983 #35495e"></svgicon>
```
Also, you can use CSS to add colors.
```html
<svgicon class="vue-icon" name="vue" width="100" height="100"></svgicon>
```
```css
.vue-icon path[pid="0"] {
    fill: #42b983
}

.vue-icon path[pid="1"] {
    fill: #35495e
}
```
> You can't use this feature in scoped block.

Use gradient
```html
<template>
    <svg>
       <defs>
          <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stop-color="#57f0c2"/>
              <stop offset="95%" stop-color="#147d58"/>
          </linearGradient>
          <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stop-color="#7295c2"/>
              <stop offset="95%" stop-color="#252e3d"/>
          </linearGradient>
      </defs>
    </svg>
    <svgicon name="vue" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></svgicon>
</template>
```

### Multiple directory (Namespace)
You can use multiple directory to discriminate the icons which has the same name.
```
├── arrow.svg
├── sora
│   ├── arrow.svg
│   └── fit
│       └── arrow.svg

```

```html
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="sora/arrow" width="50" height="50"></svgicon>
<svgicon name="sora/fit/arrow" width="50" height="50"></svgicon>

```

### Work on server-side render (SSR)
The component will insert the CSS style to the **document** object, so it will throw an error in SSR. The solution is to define an alias for vue-svgicon module if you use webpack.

```javascript
var config = {
    module: {
        resolve: {
            alias: {
                'vue-svgicon$': 'vue-svgicon/component/svgicon.vue'
            }
        }
    }
}
```
If you are using other build systems..., I think you can find a similar solution to how webpack does it.

### Work on IE and old browser
This component doesn't work on IE because IE don't support `innerHTML` in SVGElement. You can use [innersvg-polyfill](innersvg-polyfill) to make it work. You can also use the polyfill provided by this component.
```js
// in main.js first line
import 'vue-svgicon/dist/polyfill'
```
This polyfill is a wrapper of [innersvg-polyfill](https://github.com/dnozay/innersvg-polyfill).
