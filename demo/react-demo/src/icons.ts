import { ReactSvgIconFC } from '@yzfe/react-svgicon'

const icons: ReactSvgIconFC[] = []

const req = require.context('@icon', true, /\.svg/)
req.keys().forEach((key) => {
    icons.push(req(key).default)
})

export default icons
