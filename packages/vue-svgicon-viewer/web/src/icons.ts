import { Icon } from 'vue-svgicon'

let icons: Icon[] = []

let req = require.context('@icon', true, /\.svg/)
req.keys().forEach(key => {
    icons.push(req(key))
})

// warn if there are same icon
icons.forEach((v, index) => {
    icons.slice(0, index).some(s => {
        let isDuplicate =
            s.data.viewBox === v.data.viewBox && s.data.data === v.data.data

        if (isDuplicate) {
            console.warn(
                `The svg content of ${s.name}.svg is the same as ${v.name}.svg`
            )
        }
        return isDuplicate
    })
})

export default icons
