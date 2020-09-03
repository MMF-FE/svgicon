---
toc
---
# API

## @yzfe/svgicon
### Props
生成 SVG 图标数据函数的参数（属性）

<<<@/packages/svgicon/src/index.ts#props

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

<<<@/packages/svgicon/src/index.ts#Options

### setOptions
修改默认选项

```ts
export declare function setOptions(newOptions: Options): void;
```

### Typings

```ts
// 图标数据内容
export interface IconData {
    width?: number | string;
    height?: number | string;
    viewBox: string;
    data: string;
    [key: string]: unknown;
}

// 图标数据对象
export interface Icon {
    name: string;
    data: IconData;
}

// svgIcon 方法返回的结果
export interface SvgIconResult {
    /** SVG content */
    path: string
    /** viewBox */
    box: string
    className: string
    style: Record<string, string | number>
}
```

## @yzfe/svgicon-gen
在 nodejs 环境中运行，生成 `Icon` 对象 (props.data 的值)

```ts
/**
 * generate svgicon object
 * @param source svg icon content
 * @param filename svg icon file absolute path
 * @param svgRootPath svg icon root path, to calc relative path
 * @param svgoConfig svgo config
 */
export default function gen(source: string, filename: string, svgRootPath?: string | string[], svgoConfig?: SVGO.Options): Promise<Icon>;
```

> TIP: 你可以直接使用 `@yzfe/svgicon-gen` 预先生成图标数据，保存为 js 文件，这样可以不用 `@yzfe/svgicon-loader` 加载图标了。


## @yzfe/svgicon-loader
将 SVG 文件加载成图标数据(vue)或者 SVG 图标组件(react), 可以自定义生成的代码
### Loader options
```ts
export interface LoaderOptions {
    // svg 文件路径，可以是多个路径。
    svgFilePath?: string | string[]
    /** 加载为组件 */
    component?: 'react' | 'custom'
    /** 自定义生成的代码 */
    customCode?: string
    /** svgo 配置 */
    svgoConfig?: unknown
}

```

### 自定义 loader 生成的代码
如果你觉得默认生成的代码不符合你的预期，你可以设置 `component` 为 `custom`, 并设置 `customCode`。 `@yzfe/svgicon-loader` 已经为你生成了一行代码，定义了图标数据的变量 `data`，然后拼接 `customCode` 的内容作为 loader 最终生成的代码。你可以查看源码了解原理。
