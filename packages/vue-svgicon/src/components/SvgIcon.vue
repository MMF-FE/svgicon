<template>
    <svg
        v-html="path"
        version="1.1"
        class="clazz"
        :view-box="box"
        :style="style"
        @click="onClick"
    />
</template>

<script lang="ts">
import Vue from 'vue'
import { PluginOptions, Icon, IconData } from '../../typings'
import options from '../options'

export default Vue.extend({
    data() {
        return {
            loaded: true,
        }
    },
    props: {
        // icon data
        /**
         * @type Icon
         */
        data: {
            type: Object,
            default: null,
        },
        width: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: '',
        },
        scale: String,
        dir: String,
        color: String,
        title: String,
        fill: {
            type: Boolean,
            default: () => {
                return !options.isStroke
            },
        },
        original: {
            type: Boolean,
            default: () => {
                return !!options.isOriginalDefault
            },
        },
    },
    computed: {
        clazz(): string {
            let clazz = `${options.classPrefix}-icon`

            if (this.fill) {
                clazz += ` ${options.classPrefix}-fill`
            }

            if (this.dir) {
                clazz += ` ${options.classPrefix}-${this.dir}`
            }

            return clazz
        },

        iconData(): IconData | null {
            let resource: Icon = this.data
            let iconData = resource ? resource.data : null
            return iconData
        },

        colors(): string[] {
            if (this.color) {
                return this.color.split(' ')
            }
            return []
        },

        path(): string {
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

        box(): string {
            let width = parseFloat(this.width) || 16
            let height = parseFloat(this.width) || 16

            if (this.iconData) {
                if (this.iconData.viewBox) {
                    return this.iconData.viewBox
                }
                return `0 0 ${this.iconData.width} ${this.iconData.height}`
            }

            return `0 0 ${width} ${height}`
        },

        style(): CSSStyleDeclaration {
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
        },
    },

    created() {},

    methods: {
        addColor(data: string): string {
            let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
            let i = 0
            return data.replace(reg, (match) => {
                let color =
                    this.colors[i++] || this.colors[this.colors.length - 1]
                let fill: boolean = this.fill

                // if color is '_', ignore it
                if (color && color === '_') {
                    return match
                }

                // if color start with 'r-', reverse the fill value
                if (color && /^r-/.test(color)) {
                    fill = !fill
                    color = color.substr(2)
                }

                let style = fill ? 'fill' : 'stroke'
                let reverseStyle = fill ? 'stroke' : 'fill'
                return match + `${style}="${color}" ${reverseStyle}="none" `
            })
        },

        addOriginalColor(data: string) {
            let styleReg = /_fill="|_stroke="/gi
            return data.replace(styleReg, (styleName) => {
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

        setTitle(pathData: string): string {
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
        },
    },
})
</script>

<style lang="scss">
/* recommended css code for vue-svgicon */
.svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
}

.svg-fill {
    fill: currentColor;
    stroke: none;
}

.svg-up {
    /* default */
    transform: rotate(0deg);
}

.svg-right {
    transform: rotate(90deg);
}

.svg-down {
    transform: rotate(180deg);
}

.svg-left {
    transform: rotate(-90deg);
}

</style>