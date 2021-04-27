export interface LoaderOptions {
    svgFilePath?: string | string[]
    /** load as a component */
    component?: 'react' | 'taro' | 'custom'
    /** custom code when load as a custom component */
    customCode?: string
    svgoConfig?: unknown
}
