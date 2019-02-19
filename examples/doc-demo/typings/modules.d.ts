declare module 'highlight.js/lib/highlight' {
    import hjs from 'highlight.js'
    export = hjs
}

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '@/components/SvgIcon.vue' {
    import Vue from 'vue'
    import { PluginFunction } from 'vue'

    class VueSvgIcon extends Vue {
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
}
