import { TaroSvgIconFC } from '@yzfe/taro-svgicon'

const icons: TaroSvgIconFC[] = []

const req = require.context('@icon', true, /\.svg/)
req.keys().forEach((key) => {
    icons.push(req(key).default)
})

export default icons
