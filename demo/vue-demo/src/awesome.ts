import { Icon } from '@yzfe/vue-svgicon'

const icons: Icon[] = []

const req = require.context('@fa', true, /\.svg/)
req.keys().forEach((key) => {
    icons.push(req(key))
})

export default icons
