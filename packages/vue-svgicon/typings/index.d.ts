import { PluginFunction } from 'vue'

export interface PluginOptions {
    tagName?: string
    classPrefix?: string
    isStroke?: boolean
    defaultWidth?: string
    defaultHeight?: string
}

export interface Icon {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: any
}

declare const VueSvgIconPlugin: {
    icons: { [key: string]: Icon }
    register: (newIcons: { [key: string]: Icon }) => void
    install: PluginFunction<PluginOptions>
}

export default VueSvgIconPlugin
