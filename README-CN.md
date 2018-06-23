# vue-svgicon

[![Build Status](https://img.shields.io/travis/MMF-FE/vue-svgicon.svg?style=flat-square)](https://travis-ci.org/MMF-FE/vue-svgicon)
[![Coverage Status](https://img.shields.io/coveralls/MMF-FE/vue-svgicon.svg?style=flat-square)](https://coveralls.io/r/MMF-FE/vue-svgicon?branch=master)


A tool to create svg icon components. (vue 2.x)
一个创建 svg 图标组件的工具。(vue 2.x)

## 灵感
https://github.com/Justineo/vue-awesome

## demo
https://mmf-fe.github.io/vue-svgicon/

## 一些坑
- [在 IE 或旧浏览器中使用](#work-on-ie-and-old-browser)

## 使用方式
### 生成图标
#### 安装
```bash
# 安装到全局
npm install vue-svgicon -g
# 安装到项目
npm install vue-svgicon --save-dev
```
#### 命令
```bash
# 生成 svg 图标组件, -s: svg 源文件，-t: 图标组件生成路径
vsvg -s /path/to/svg/source -t /path/for/generated/components
```

#### 使用 npm scripts
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

以上命令会在指定目录下生成图标

#### 自定义生成的图标组件代码

```bash
# 指定模板路径
vsvg -s /path/to/svg/source -t /path/for/generated/components --tpl /path/for/icon-template
```
默认模板是
```javascript
/* eslint-disable */
var icon = require('vue-svgicon')
icon.register({
  '${name}': {
    width: ${width},
    height: ${height},
    viewBox: ${viewBox},
    data: '${data}'
  }
})

```

#### 自定义生成的图标文件后缀名
```bash
vsvg -s /path/to/svg/source -t /path/for/generated/components --ext ts
```

### 支持 ES6 模块
```bash
vsvg -s /path/to/svg/source -t /path/for/generated/components --ext ts --es6
```

### 使用生成的图标
首先，你需要为 `vue-svgicon` 在全局写一些样式代码。推荐的代码如下：
```css
/* recommended css code for vue-svgicon */
.svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
}

.svg-fill {
    fill: currentColor;
    stroke: none;
}

.svg-up {
    /* 默认 */
    transform: rotate(0deg);
}

.svg-right {
     transform: rotate(90deg);
}

.svg-down {
    transform: rotate(180deg);
}

.svg-left {
    transform: rotate(-90deg);
}

```
> 你可以使用 `classPrefix` 选项设置默认的 class 的前缀。默认的前缀是 `svg`

注册 `vue-svgicon` 组件

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import * as svgicon from 'vue-svgicon'

// 默认的标签名是 'svgicon'
Vue.use(svgicon, {
    tagName: 'svgicon'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
```

在组件中使用图标组件
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
// 使用之前需要引入生成的图标
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
你可以一次将所有图标引入进来
```javascript
import 'icons'
```

## plugin 选项

### tagName
自定义标签名. 默认是 **svgicon**
```js
Vue.use(svgicon, {
  tagName: 'svgicon'
})
```
```html
<svgicon name="vue"></svgicon>
```

### classPrefix
你可以使用 `classPrefix` 选项设置默认的 class 的前缀。默认的前缀是 `svg`

```js
Vue.use(svgicon, {
  classPrefix: 'vue-svg'
})
```
这样会生成像以下那样的代码
```html
<svg version="1.1" viewBox="0 0 4 7" class="vue-svg-icon vue-svg-fill vue-svg-up">
<!-- svg code -->
</svg>
```

### defaultWidth / defaultHeight
默认大小
```js
Vue.use(svgicon, {
  defaultWidth: '1em',
  defaultHeight: '1em'
})
```

### isStroke
默认使用描边样式
```js
Vue.use(svgicon, {
  isStroke: true
})
```


## 组件属性

### icon / name
图标名称
```html
<svgicon icon="vue"></svgicon>
<svgicon name="vue"></svgicon>
```

### dir
图标方向
```html
<svgicon name="arrow" width="50" height="50" dir="left"></svgicon>
<svgicon name="arrow" width="50" height="50" dir="up"></svgicon>
<svgicon name="arrow" width="50" height="50" dir="right"></svgicon>
<svgicon name="arrow" width="50" height="50" dir="down"></svgicon>
```

### fill
是否填充 path/shape. 默认是 **true**
```html
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="arrow" width="50" height="50" :fill="false"></svgicon>
```
You can use **r-color** to reverse the fill property
你可以使用 **r-color** 反向设置 fill 属性。
```html
<!-- 第一个 path 是填充的 (默认), 第二个是描边 -->
<svgicon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></svgicon>
<!-- 第一个 path 是描边的 (默认), 第二个是填充 -->
<svgicon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100" :fill="false"></svgicon>
```


### width / height
指定图标大小，默认单位是 **px**
```html
<svgicon name="arrow" width="50" height="50"></svgicon>
<svgicon name="arrow" width="10em" height="10em"></svgicon>
```
### scale
缩放图标
```html
<svgicon name="arrow" scale="10"></svgicon>
<svgicon name="arrow" scale="10" width="10em" height="10em"></svgicon>
```

### color
指定图标颜色. 默认是继承颜色.
```html
<p style="color: darkorange">
    <svgicon name="arrow" width="50" height="50"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="red"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="green"></svgicon>
    <svgicon name="arrow" width="50" height="50" color="blue"></svgicon>
</p>
```
如果图标有多个 path/shape, 你可以按照顺序定义多种颜色。
```html
<svgicon name="vue" width="100" height="100" color="#42b983 #35495e"></svgicon>
```
你可以使用 css 设置颜色
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


使用渐变
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

### original
使用 svg 原来的颜色
```html
<icon name="colorwheel" width="100" height="100" :original="true"></icon>
<!-- 覆盖原来的颜色，_ 表示当前位置的 path/shape 使用原来的颜色，其他使用新的颜色 -->
<icon name="colorwheel" width="100" height="100" :original="true" color="_ black _ black _"></icon>
```

### 多个路径 (Namespace)
你可以使用多个路径存放 svg 文件，避免同名冲突。
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

### 在 IE 或旧浏览器中使用
This component doesn't work on IE because IE don't support `innerHTML` in SVGElement. You can use [innersvg-polyfill](innersvg-polyfill) to make it work. You can also use the polyfill provided by this component.
```js
// in main.js first line
import 'vue-svgicon/dist/polyfill'
```
This polyfill is a wrapper of [innersvg-polyfill](https://github.com/dnozay/innersvg-polyfill).
