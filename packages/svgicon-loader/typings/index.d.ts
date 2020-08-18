export interface LoaderOptions {
    svgFilePath?: string
    /** load as a component */
    component?: 'react' | 'vue' | 'custom' | 'unset'
    /** custom code when load as a custom component */
    customCode?: string
    svgoConfig?: unknown
}
