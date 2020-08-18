export interface LoaderOptions {
    svgFilePath?: string
    /** load as a component */
    component?: 'react' | 'vue' | 'unset'
    svgoConfig?: unknown
}
