export interface LoaderOptions {
    idSeparator: string
    svgFilePath: string
}

export interface OptimizedSvg {
    data: string
    info: {
        width: string
        height: string
        [key: string]: any
    }
}

export default function(source: string): void
