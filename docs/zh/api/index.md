---
toc
---
# API

## @yzfe/svgicon
### Props
生成 SVG 图标数据函数的参数（属性）

<<<../../../packages/svgicon/src/index.ts#props

### getPropKeys
获取 props 的 key 数组
```ts
export declare function getPropKeys(): (keyof Props)[];
```

### svgIcon
根据传入的属性生成图标数据
```ts
declare function svgIcon(props: Props): SvgIconResult;
```

### Options
全局配置，影响 props 的默认值

<<<../../../packages/svgicon/src/index.ts#Options

### setOptions
修改默认选项

```ts
export declare function setOptions(newOptions: Options): void;
```

### Typings
<<<../../../packages/svgicon/dist/index.d.ts

## @yzfe/svgicon-gen
在 nodejs 环境中运行，生成 `Icon` 对象 (props.data 的值)

<<<../../../packages/svgicon-gen/dist/index.d.ts

> TIP: 你可以直接使用 `@yzfe/svgicon-gen` 预先生成图标数据，保存为 js 文件，这样可以不用 `@yzfe/svgicon-loader` 加载图标了。


## @yzfe/svgicon-loader
将 SVG 文件加载成图标数据(vue)或者 SVG 图标组件(react), 可以自定义生成的代码

### Loader options
<<<../../../packages/svgicon-loader/typings/index.d.ts

## vite-plugin-svigon
### Plugin options
<<<../../../packages/vite-plugin-svgicon/src/index.ts#PluginOptions
