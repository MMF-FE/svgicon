<template>
    <svg version="1.1" :class="clazz" :viewBox="box" v-html="path" :style="style"></svg>
</template>

<script>
  let icons = {}
  let notLoadedIcons = []
  let defaultWidth = ''
  let defaultHeight = ''
  let classPrefix = 'svg'

  export default {
    data() {
      return {
        loaded: false
      }
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
      color: String,
      original: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      clazz() {
        let clazz = `${classPrefix}-icon`

        if (this.fill) {
          clazz += ` ${classPrefix}-fill`
        }

        if (this.dir) {
          clazz += ` ${classPrefix}-${this.dir}`
        }

        return clazz
      },

      iconName () {
        return this.name || this.icon
      },

      iconData() {
        if (this.iconName && this.loaded) {
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
        let _this = this
        function addColor (data) {
          let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
          let i = 0
          return data.replace(reg, (match) => {
            let color = _this.colors[i++] || _this.colors[_this.colors.length - 1]
            let fill = _this.fill

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
        }

        function addOriginalColor (data) {
          let styleReg = /_fill=\"|_stroke="/gi
          return data.replace(styleReg, (styleName) => {
            return styleName && styleName.slice(1)
          })
        }

        let pathData = ''
        if (this.iconData) {
          pathData = this.iconData.data

          // use original color
          if (this.original) {
            pathData = addOriginalColor(pathData)
          }

          if (this.colors && this.colors.length > 0) {
            pathData = addColor(pathData)
          }

        } else {
          // if no iconData, push to notLoadedIcons
          notLoadedIcons.push({
            name: this.iconName,
            component: this
          })
        }

        return pathData
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

    created () {
      if (icons[this.iconName]) {
        this.loaded = true
      }
    },

    install(Vue, options = {}) {
      let tagName = options.tagName || 'svgicon'

      if (options.classPrefix) {
        classPrefix = options.classPrefix
      }

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

        // check new register icon is not loaded, and set loaded to true
        notLoadedIcons = notLoadedIcons.filter((v, ix) => {
          if (v.name === name) {
            v.component.$set(v.component, 'loaded', true)
          }

          return v.name !== name
        })
      }
    },

    icons
  }

</script>
