import { PluginFunction } from 'vue'

export interface PluginOptions {
    tagName?: string
    classPrefix?: string
    // Is stroke default
    isStroke?: boolean
    isOriginalDefault?: boolean
    defaultWidth?: string
    defaultHeight?: string
}

export interface IconData {
    width?: number | string
    height?: number | string
    viewBox: string
    data: string
    [key: string]: unknown
}

export interface Icon {
    name: string
    data: IconData
}

declare const VueSvgIconPlugin: {
    install: PluginFunction<PluginOptions>
}

export default VueSvgIconPlugin
