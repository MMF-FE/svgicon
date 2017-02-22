# vue-svgicon
A tool that create Vue svg icon components.

## Usage
### Generate icon
Install
```bash
# install global
npm install vue-svgicon -g
# install for project
npm install vue-svgicon -d
```
Command
```bash
# generate svg icon components
vsvg -s /path/to/svg/source -t /path/for/generated/components
```

Use as npm scripts
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

### Use generated icon
Register global component
``` javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import svgicon from 'vue-svgicon/component/svgicon.vue'

// register svgicon global
Vue.component('svgicon', svgicon)

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
      <svgicon icon="vue" width="200" height="200" color="#42b983 #35495e"></svgicon>
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

## Props

### icon
icon name
```html
<svgicon icon="vue"></svgicon>
```

### dir
The direction of icon. Default value is **right**
```html
<svgicon icon="arrow" width="50" height="50" dir="left"></svgicon>
<svgicon icon="arrow" width="50" height="50" dir="up"></svgicon>
<svgicon icon="arrow" width="50" height="50"></svgicon>
<svgicon icon="arrow" width="50" height="50" dir="down"></svgicon>
```

### fill
Whether to fill the path/shape. Default value is **true**
```html
<svgicon icon="arrow" width="50" height="50"></svgicon>
<svgicon icon="arrow" width="50" height="50" :fill="false"></svgicon>
```

### width / height
Specify the size of icon. Default value is **16px / 16px**. Default unit is **px**
```html
<svgicon icon="arrow" width="50" height="50"></svgicon>
<svgicon icon="arrow" width="10em" height="10em"></svgicon>
```
### Color
Specify the color of icon. Default value is **inherit**.
```html
<p style="color: darkorange">
    <svgicon icon="arrow" width="50" height="50"></svgicon>
    <svgicon icon="arrow" width="50" height="50" color="red"></svgicon>
    <svgicon icon="arrow" width="50" height="50" color="green"></svgicon>
    <svgicon icon="arrow" width="50" height="50" color="blue"></svgicon>
</p>
```
If the icon is mutil path/shape, you can use mutil color. It is defined in the order of path/shape.
```html
<svgicon icon="vue" width="100" height="100" color="#42b983 #35495e"></svgicon>
```