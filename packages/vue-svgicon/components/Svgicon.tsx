import Vue from 'vue'
import { PluginOptions } from '../typings/index'

let options = {
    defaultWidth: '',
    defaultHeight: '',
    classPrefix: 'svg',
    isStroke: false
}

export function setOptions(opts: PluginOptions) {
    // Object.assign(options, opts)
    options.defaultWidth = opts.defaultWidth || options.defaultWidth
    options.defaultHeight = opts.defaultHeight || options.defaultHeight
    options.classPrefix = opts.classPrefix || options.classPrefix
    options.isStroke = opts.isStroke || options.isStroke
}

export default Vue.extend({
    data() {
        return {}
    },
    props: {
        // icon name
        name: String,
        // icon name alias
        icon: String,
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        scale: String,
        dir: String,
        fill: {
            type: Boolean,
            default: function() {
                return !options.isStroke
            }
        },
        color: String,
        original: {
            type: Boolean,
            default: false
        },
        title: String
    },
    computed: {
        clazz() {
            let clazz = `${options.classPrefix}-icon`

            if (this.fill) {
                clazz += ` ${options.classPrefix}-fill`
            }

            if (this.dir) {
                clazz += ` ${options.classPrefix}-${this.dir}`
            }

            return clazz
        },

        iconName() {
            return this.name || this.icon
        },

        iconData() {
            return null
        },

        colors() {
            if (this.color) {
                return this.color.split(' ')
            }
            return []
        },

        path() {
            let pathData = ''
            if (this.iconData) {
                pathData = this.iconData.data

                pathData = this.setTitle(pathData)

                // use original color
                if (this.original) {
                    pathData = this.addOriginalColor(pathData)
                }

                if (this.colors.length > 0) {
                    pathData = this.addColor(pathData)
                }
            }

            return this.getValidPathData(pathData)
        },

        box() {
            let width = this.width || 16
            let height = this.width || 16

            if (this.iconData) {
                if (this.iconData.viewBox) {
                    return this.iconData.viewBox
                }
                return `0 0 ${this.iconData.width} ${this.iconData.height}`
            }

            return `0 0 ${parseFloat(width)} ${parseFloat(height)}`
        },

        style() {
            let digitReg = /^\d+$/
            let scale = Number(this.scale)
            let width
            let height

            // apply scale
            if (!isNaN(scale) && this.iconData) {
                width = Number(this.iconData.width) * scale + 'px'
                height = Number(this.iconData.height) * scale + 'px'
            } else {
                width = digitReg.test(this.width)
                    ? this.width + 'px'
                    : this.width || options.defaultWidth
                height = digitReg.test(this.height)
                    ? this.height + 'px'
                    : this.height || options.defaultHeight
            }

            let style = {} as CSSStyleDeclaration

            if (width) {
                style.width = width
            }

            if (height) {
                style.height = height
            }
            return style
        }
    },

    created() {},

    methods: {
        addColor(data: string) {
            let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
            let i = 0
            return data.replace(reg, match => {
                let color =
                    this.colors[i++] || this.colors[this.colors.length - 1]
                let fill: boolean = this.fill

                // if color is '_', ignore it
                if (color && color === '_') {
                    return match
                }

                // if color start with 'r-', reverse the fill value
                if (color && color.indexOf('r-') === 0) {
                    fill = !fill
                    color = color.split('r-')[1]
                }

                let style = fill ? 'fill' : 'stroke'
                let reverseStyle = fill ? 'stroke' : 'fill'
                return match + `${style}="${color}" ${reverseStyle}="none" `
            })
        },

        addOriginalColor(data: string) {
            let styleReg = /_fill="|_stroke="/gi
            return data.replace(styleReg, styleName => {
                return styleName && styleName.slice(1)
            })
        },

        getValidPathData(pathData: string) {
            // If use original and colors, clear double fill or stroke
            if (this.original && this.colors.length > 0) {
                let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi
                pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
                    return `<${p1}${p2}${p3}_${p4}`
                })
            }

            return pathData
        },

        setTitle(pathData: string) {
            if (this.title) {
                let title = this.title
                    .replace(/\</gi, '&lt;')
                    .replace(/>/gi, '&gt;')
                    .replace(/&/g, '&amp;')
                return `<title>${title}</title>` + pathData
            }
            return pathData
        },

        onClick(e: Event) {
            this.$emit('click', e)
        }
    },

    render() {
        return (
            <svg
                version="1.1"
                class={this.clazz}
                domPropsViewBox={this.box}
                domPropsInnerHTML={this.path}
                style={this.style}
                onClick={this.onClick}
            />
        )
    }
})
