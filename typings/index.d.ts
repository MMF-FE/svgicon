import Vue from 'vue'
import { PluginFunction } from 'vue'

interface Icon {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: any
}

declare class VueSvgIcon extends Vue {
    static icons: { [key: string]: Icon }
    static register: (data: { [key: string]: Icon }) => void
    static install: PluginFunction<{
        tagName?: string
        classPrefix?: string
        isStroke?: boolean
        isOriginalDefault?: boolean
        defaultWidth?: string
        defaultHeight?: string
    }>
}

export default VueSvgIcon
