import { Icon } from '@yzfe/vue2-svgicon'

declare global {
    interface Window {
        icons: Icon[]
    }
}

const icons: Icon[] = window.icons || []

export default icons
