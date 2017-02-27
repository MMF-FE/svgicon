<template>
    <svg version="1.1" :class="clazz" :viewBox="box" v-html="path" :style="style"></svg>
</template>

<script>
    let icons = {}
    export default {
        data () {
            return {}
        },
        props: {
            icon: String,
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: ''
            },
            dir: String,
            fill: {
                type: Boolean,
                default: true
            },
            color: String
        },

        computed: {
            clazz () {
                let clazz = 'svg-icon'

                if (this.fill) {
                    clazz += ' svg-fill'
                }

                if (this.dir) {
                    clazz += ' svg-' + this.dir
                }

                return clazz
            },

            iconData () {
                if (this.icon) {
                    return icons[this.icon]
                }

                return null
            },

            colors () {
                if (this.color) {
                    return this.color.split(' ')
                }
                return ''
            },

            path () {
                if (this.iconData) {
                    let reg = /<(path|rect|circle|polygon|line|polyline)\s/gi
                    let id = 0

                    this.iconData.data = this.iconData.data.replace(reg, function(match) {
                        return match + `pid="${id++}" `
                    })

                    if (this.colors && this.colors.length > 0) {
                        let i = 0
                        let colors = this.colors
                        let style = this.fill ? 'fill' : 'stroke'
                        return this.iconData.data.replace(reg, function(match) {
                            return match + `${style}="${colors[i++]}" `
                        })
                    } else {
                        return this.iconData.data
                    }
                }
                return ''
            },

            box () {
                if (this.iconData) {
                    if (this.iconData.viewBox) {
                        return this.iconData.viewBox
                    }
                    return `0 0 ${this.iconData.width} ${this.iconData.height}`
                }

                return `0 0 ${parseFloat(this.width)} ${parseFloat(this.height)}`
            },

            style () {
                let digitReg = /^\d+$/
                let width = digitReg.test(this.width) ? this.width + 'px' : this.width
                let height = digitReg.test(this.height) ? this.height + 'px' : this.height

                return {
                    width: width,
                    height: height
                }
            }
        },

        install (Vue, options = {}) {
            let tagName = options.tagName || 'svgicon'
            Vue.component(tagName, this)
        },

        // register icons
        register (data) {
            for (let name in data) {
                if (!icons[name]) {
                    icons[name] = data[name]
                }
            }
        },
        icons
    }
</script>

<style scoped>
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
        transform: rotate(-90deg);
    }

    .svg-right {
         /*default*/
         transform: rotate(0deg);
    }

    .svg-down {
        transform: rotate(90deg);
    }

    .svg-left {
        transform: rotate(180deg);
    }

</style>
