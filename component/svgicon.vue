<template>
    <svg version="1.1" :class="clazz" :viewBox="box" v-html="path" :style="style"></svg>
</template>

<script>
  let icons = {}
  let defaultWidth = ''
  let defaultHeight = ''

  export default {
    data() {
      return {}
    },
    props: {
      icon: String,
      name: String,
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
        default: true
      },
      color: String
    },

    computed: {
      clazz() {
        let clazz = 'svg-icon'

        if (this.fill) {
          clazz += ' svg-fill'
        }

        if (this.dir) {
          clazz += ' svg-' + this.dir
        }

        return clazz
      },

      iconName () {
        return this.name || this.icon
      },

      iconData() {
        if (this.iconName) {
          return icons[this.iconName]
        }

        return null
      },

      colors() {
        if (this.color) {
          return this.color.split(' ')
        }
        return ''
      },

      path() {
        if (this.iconData) {
          let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi

          if (this.colors && this.colors.length > 0) {
            let i = 0

            return this.iconData.data.replace(reg, (match) => {
              let color = this.colors[i++] || this.colors[this.colors.length - 1]
              let fill = this.fill

              // if color start with 'r-', reverse the fill value
              if (color && color.indexOf('r-') === 0) {
                fill = !fill
                color = color.split('r-')[1]
              }

              let style = fill ? 'fill' : 'stroke'
              let reverseStyle = fill ? 'stroke' : 'fill'
              return match + `${style}="${color}" ${reverseStyle}="none" `
            })
          } else {
            return this.iconData.data
          }
        }
        return ''
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
          width = (Number(this.iconData.width) * scale) + 'px'
          height = (Number(this.iconData.height) * scale) + 'px'
        } else {
          width = digitReg.test(this.width) ? this.width + 'px' : this.width
          height = digitReg.test(this.height) ? this.height + 'px' : this.height
        }

        return {
          width: width || defaultWidth,
          height: height || defaultHeight
        }
      }
    },

    install(Vue, options = {}) {
      let tagName = options.tagName || 'svgicon'

      // default size
      options.defaultWidth && (defaultWidth = options.defaultWidth)
      options.defaultHeight && (defaultHeight = options.defaultHeight)

      Vue.component(tagName, this)
    },

    // register icons
    register(data) {
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
