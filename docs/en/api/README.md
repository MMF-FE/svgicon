---
toc
---
# API

## @yzfe/svgicon
### Props
Parameters (attributes) of the function to generate SVG icon data

<<<@/packages/svgicon/src/index.ts#props

### getPropKeys
Get the key array of props

```ts
export declare function getPropKeys(): (keyof Props)[];
```

### svgIcon
Generate icon data based on the incoming attributes

```ts
declare function svgIcon(props: Props): SvgIconResult;
```

### Options
Global options, affecting the default value of props

<<<@/packages/svgicon/src/index.ts#Options

### setOptions
Modify the default options

```ts
export declare function setOptions(newOptions: Options): void;
```

### Typings
<<<@/packages/svgicon/dist/index.d.ts


## @yzfe/svgicon-gen
Run in the nodejs environment to generate the `Icon` object (The value of props.data)

<<<@/packages/svgicon-gen/dist/index.d.ts

> TIP: You can directly use `@yzfe/svgicon-gen` to generate icon data in advance and save it as a js file, so that you don't need to load icons with `@yzfe/svgicon-loader`.


## @yzfe/svgicon-loader
Load the SVG file as icon data (vue) or SVG icon component (react), the generated code can be customized

### Loader options
```ts
export interface LoaderOptions {
    // SVG file path, can be multiple paths.
    svgFilePath?: string | string[]
    /** Load as component */
    component?: 'react' | 'custom'
    /** Custom generated code */
    customCode?: string
    /** svgo configuration */
    svgoConfig?: unknown
}

```

### Customize the code generated by the loader
If you feel that the code generated by default does not meet your expectations, you can set `component` to `custom`, and set `customCode`. `@yzfe/svgicon-loader` has generated a line of code for you, defining the variable `data` of the icon data, and then splicing the content of `customCode` as the final code generated by the loader. You can view the source code to understand the principle.