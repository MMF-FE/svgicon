import { PluginFunction } from 'vue'

export interface PluginOptions {
    tagName?: string
    classPrefix?: string
    // Is stroke default
    isStroke?: boolean
    defaultWidth?: string
    defaultHeight?: string
}

export interface IconData {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: any
}

export interface Icon {
    name: string
    data: IconData
}

declare const VueSvgIconPlugin: {
    install: PluginFunction<PluginOptions>
}

export default VueSvgIconPlugin
