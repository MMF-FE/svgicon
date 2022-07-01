export interface OriginalColor {
    type: 'fill' | 'stroke'
    color: string
}

export interface IconData {
    width?: number | string
    height?: number | string
    viewBox: string
    data: string
    originalColors: OriginalColor[]
    stopColors: string[]
    [key: string]: unknown
}

export interface Icon {
    name: string
    data: IconData
}
