<template>
    <svg version="1.1" :class="clazz" :viewBox="box" v-html="path" :style="style"></svg>
</template>

<script>
  let icons = {}

  export default {
    data() {
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

      iconData() {
        if (this.icon) {
          return icons[this.icon]
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
          let reg = /<(path|rect|circle|polygon|line|polyline)\s/gi

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
              return match + `${style}="${color}" ${reverseStyle}="none"`
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
        console.log('fff')
        return `0 0 ${parseFloat(width)} ${parseFloat(height)}`
      },

      style() {
        let digitReg = /^\d+$/
        let width = digitReg.test(this.width) ? this.width + 'px' : this.width
        let height = digitReg.test(this.height) ? this.height + 'px' : this.height

        return {
          width: width,
          height: height
        }
      }
    },

    install(Vue, options = {}) {
      let tagName = options.tagName || 'svgicon'
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
