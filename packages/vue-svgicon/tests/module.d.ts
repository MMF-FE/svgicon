declare module '@icon/*.svg?component' {
    import { VueSvgIcon } from 'dist/index.d.ts'
    const value: typeof VueSvgIcon
    export = value
}

declare module '*.svg' {
    import { Icon } from '@yzfe/svgicon'
    const value: Icon
    export = value
}
