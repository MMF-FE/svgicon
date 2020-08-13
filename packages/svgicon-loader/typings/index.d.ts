export interface LoaderOptions {
    idSeparator: string
    svgFilePath: string
}

export interface OptimizedSvg {
    data: string
    info: {
        width: string
        height: string
        [key: string]: null | undefined | string | number
    }
}

export default function (source: string): void
