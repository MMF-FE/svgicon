// import { Component, Vue } from 'vue-property-decorator'

//     type Icon = {
//         width: number
//         height: number
//         viewBox: string
//         data: string
//         [key: string]: any
//     }

//     @Component
//     class SvgIcon extends Vue {
//         static icons: { [key: string]: Icon }
//         static register: (data: { [key: string]: Icon }) => void
//         static install: (vue: Vue, options: { [key: string]: any }) => void
//     }

//     export default SvgIcon
import Vue from 'vue'
import { PluginFunction } from 'vue'

declare class VueSvgIcon extends Vue {
    static icons: { [key: string]: Icon }
    static register: (data: { [key: string]: Icon }) => void
    static install: PluginFunction<{
        tagName?: string
        classPrefix?: string
        isStroke?: boolean
        defaultWidth?: string
        defaultHeight?: string
    }>
}

export type Icon = {
    width: number
    height: number
    viewBox: string
    data: string
    [key: string]: any
}

export default VueSvgIcon
