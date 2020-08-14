export interface OptimizedSvg {
    data: string
    info: {
        width: string
        height: string
        [key: string]: null | undefined | string | number
    }
    path?: string
}

export interface IconData {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: string | number
}

export interface Icon {
    name: string
    data: IconData
}
