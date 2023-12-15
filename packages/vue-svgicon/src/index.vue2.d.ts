import type { App, DefineComponent } from 'vue-demi'
import type { Options, Props, Icon } from '@yzfe/svgicon'

interface VueSvgIconProps extends Omit<Props, 'data'> {
    data?: Icon | string
}

export declare const VueSvgIcon: DefineComponent<VueSvgIconProps>
export declare const VueSvgIconPlugin: {
    install: (app: App, options: Options) => void
}
export { setOptions, Props, Options, Icon, IconData } from '@yzfe/svgicon'
