export interface Options {
    tagName?: string
    classPrefix?: string
    // Is stroke default
    isStroke?: boolean
    isOriginalDefault?: boolean
    defaultWidth?: string
    defaultHeight?: string
}

export interface IconData {
    width?: number | string
    height?: number | string
    viewBox: string
    data: string
    [key: string]: unknown
}

export interface Icon {
    name: string
    data: IconData
}

export interface Props {
    /** icon data */
    data?: Icon
    width: string
    height: string
    scale?: string
    /** icon direction */
    dir?: string
    color?: string
    title?: string
    fill?: boolean
    /** is use original color */
    original?: boolean
}

export default class SvgIcon {
    public static options: Options = {
        defaultWidth: '',
        defaultHeight: '',
        classPrefix: 'svg',
        isStroke: false,
        isOriginalDefault: false,
    }

    constructor(props: Partial<Props>) {
        this.props = props
    }

    private _props: Partial<Props> = {}

    public get props(): Partial<Props> {
        const props = {
            ...this._props,
        }

        if (typeof props.original !== 'boolean' && 'original' in props) {
            props.original = true
        }

        if (typeof props.fill !== 'boolean' && 'fill' in props) {
            props.fill = true
        }

        return {
            ...{
                width: '',
                height: '',
                fill: !SvgIcon.options.isStroke,
                original: !!SvgIcon.options.isOriginalDefault,
            },
            ...props,
        }
    }

    public set props(props: Partial<Props>) {
        if (this._props !== props) {
            this._props = props
        }
    }

    public get colors(): string[] {
        if (this.props.color) {
            return this.props.color.split(' ')
        }
        return []
    }

    public get icon(): Icon | undefined {
        return this.props.data
    }

    public get iconData(): IconData | null {
        const resource = this.props.data
        const iconData = resource ? resource.data : null
        return iconData
    }

    public get clazz(): string {
        let clazz = `${SvgIcon.options.classPrefix}-icon`

        if (this.props.fill) {
            clazz += ` ${SvgIcon.options.classPrefix}-fill`
        }

        if (this.props.dir) {
            clazz += ` ${SvgIcon.options.classPrefix}-${this.props.dir}`
        }

        return clazz
    }

    public get path(): string {
        let pathData = ''
        if (this.iconData) {
            pathData = this.iconData.data

            pathData = this.setTitle(pathData)

            // use original color
            if (this.props.original) {
                pathData = this.addOriginalColor(pathData)
            }

            if (this.colors.length > 0) {
                pathData = this.addColor(pathData)
            }
        }

        return this.getValidPathData(pathData)
    }

    public get box(): string {
        const width = parseFloat(this.props.width || '16')
        const height = parseFloat(this.props.width || '16')

        if (this.iconData) {
            if (this.iconData.viewBox) {
                return this.iconData.viewBox
            }
            return `0 0 ${this.iconData.width} ${this.iconData.height}`
        }

        return `0 0 ${width} ${height}`
    }

    public get style(): Record<string, string | number> {
        const digitReg = /^\d+$/
        const scale = Number(this.props.scale)
        let width
        let height

        // apply scale
        if (!isNaN(scale) && this.iconData) {
            width = Number(this.iconData.width) * scale + 'px'
            height = Number(this.iconData.height) * scale + 'px'
        } else {
            width = digitReg.test(this.props.width || '')
                ? this.props.width + 'px'
                : this.props.width || SvgIcon.options.defaultWidth
            height = digitReg.test(this.props.height || '')
                ? this.props.height + 'px'
                : this.props.height || SvgIcon.options.defaultHeight
        }

        const style: Record<string, string | number> = {}

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
            let fill = this.props.fill

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
        if (this.props.original && this.colors.length > 0) {
            const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi
            pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
                return `<${p1}${p2}${p3}_${p4}`
            })
        }

        return pathData
    }

    protected setTitle(pathData: string): string {
        if (this.props.title) {
            const title = this.props.title
                .replace(/</gi, '&lt;')
                .replace(/>/gi, '&gt;')
                .replace(/&/g, '&amp;')
            return `<title>${title}</title>` + pathData
        }
        return pathData
    }
}
