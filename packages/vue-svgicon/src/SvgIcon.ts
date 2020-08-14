import { Icon, IconData, PluginOptions } from '../typings'

type Options = PluginOptions

export default class SvgIcon {
    public static options: Options = {
        defaultWidth: '',
        defaultHeight: '',
        classPrefix: 'svg',
        isStroke: false,
        isOriginalDefault: false,
    }

    public data: Icon | null = null
    public width = ''
    public height = ''
    public scale = ''
    public dir = ''
    public color = ''
    public title = ''
    public fill = !SvgIcon.options.isStroke
    public original = !!SvgIcon.options.isOriginalDefault

    public get clazz(): string {
        let clazz = `${SvgIcon.options.classPrefix}-icon`

        if (this.fill) {
            clazz += ` ${SvgIcon.options.classPrefix}-fill`
        }

        if (this.dir) {
            clazz += ` ${SvgIcon.options.classPrefix}-${this.dir}`
        }

        return clazz
    }

    protected get iconData(): IconData | null {
        const resource = this.data
        const iconData = resource ? resource.data : null
        return iconData
    }

    protected get colors(): string[] {
        if (this.color) {
            return this.color.split(' ')
        }
        return []
    }

    public get path(): string {
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
    }

    public get box(): string {
        const width = parseFloat(this.width) || 16
        const height = parseFloat(this.width) || 16

        if (this.iconData) {
            if (this.iconData.viewBox) {
                return this.iconData.viewBox
            }
            return `0 0 ${this.iconData.width} ${this.iconData.height}`
        }

        return `0 0 ${width} ${height}`
    }

    public get style(): CSSStyleDeclaration {
        const digitReg = /^\d+$/
        const scale = Number(this.scale)
        let width
        let height

        // apply scale
        if (!isNaN(scale) && this.iconData) {
            width = Number(this.iconData.width) * scale + 'px'
            height = Number(this.iconData.height) * scale + 'px'
        } else {
            width = digitReg.test(this.width)
                ? this.width + 'px'
                : this.width || SvgIcon.options.defaultWidth
            height = digitReg.test(this.height)
                ? this.height + 'px'
                : this.height || SvgIcon.options.defaultHeight
        }

        const style = {} as CSSStyleDeclaration

        if (width) {
            style.width = width
        }

        if (height) {
            style.height = height
        }
        return style
    }

    protected addColor(data: string): string {
        const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
        let i = 0
        return data.replace(reg, (match) => {
            let color = this.colors[i++] || this.colors[this.colors.length - 1]
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

            const style = fill ? 'fill' : 'stroke'
            const reverseStyle = fill ? 'stroke' : 'fill'
            return match + `${style}="${color}" ${reverseStyle}="none" `
        })
    }

    protected addOriginalColor(data: string): string {
        const styleReg = /_fill="|_stroke="/gi
        return data.replace(styleReg, (styleName) => {
            return styleName && styleName.slice(1)
        })
    }

    protected getValidPathData(pathData: string): string {
        // If use original and colors, clear double fill or stroke
        if (this.original && this.colors.length > 0) {
            const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi
            pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
                return `<${p1}${p2}${p3}_${p4}`
            })
        }

        return pathData
    }

    protected setTitle(pathData: string): string {
        if (this.title) {
            const title = this.title
                .replace(/\</gi, '&lt;')
                .replace(/>/gi, '&gt;')
                .replace(/&/g, '&amp;')
            return `<title>${title}</title>` + pathData
        }
        return pathData
    }
}
