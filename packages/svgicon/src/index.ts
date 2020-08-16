import utils from './utils'

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
    data: Icon
    width?: string | number
    height?: string | number
    scale?: string | number
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
        this.uid = utils.genUID()
    }

    private _props: Partial<Props> = {}

    private uid = ''

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
                width: SvgIcon.options.defaultWidth,
                height: SvgIcon.options.defaultHeight,
                fill: !SvgIcon.options.isStroke,
                original: !!SvgIcon.options.isOriginalDefault,
            },
            ...props,
        }
    }

    public set props(props: Partial<Props>) {
        // Check is props updated and apply new props
        if (this._props !== props) {
            const keys = Object.keys(this._props || {}) as (keyof Props)[]
            if (Object.keys(props || {}).length !== keys.length) {
                this._props = props
            } else if (keys.some((key) => this._props[key] !== props[key])) {
                this._props = props
            }
        }
    }

    public get colors(): string[] {
        const props = this.props
        if (props.color) {
            return props.color.split(' ')
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
        const props = this.props
        let clazz = `${SvgIcon.options.classPrefix}-icon`

        if (props.fill) {
            clazz += ` ${SvgIcon.options.classPrefix}-fill`
        }

        if (props.dir) {
            clazz += ` ${SvgIcon.options.classPrefix}-${props.dir}`
        }

        return clazz
    }

    public get path(): string {
        const props = this.props
        const iconData = this.iconData

        let pathData = ''
        if (iconData) {
            pathData = iconData.data

            pathData = this.setTitle(pathData)

            // use original color
            if (props.original) {
                pathData = this.addOriginalColor(pathData)
            }

            if (this.colors.length > 0) {
                pathData = this.addColor(pathData)
            }

            // fix #99, inline svg use random id
            const idReg = /svgiconid([\w-/\\]+)/g
            pathData = pathData.replace(idReg, (match, elId) => {
                return `svgiconid${elId}_${this.uid}`
            })
        }

        return this.getValidPathData(pathData)
    }

    public get box(): string {
        const props = this.props
        const iconData = this.iconData

        const width =
            typeof props.width === 'number'
                ? props.width
                : parseFloat(props.width || '16')

        const height =
            typeof props.height === 'number'
                ? props.height
                : parseFloat(props.height || '16')

        if (iconData) {
            if (iconData.viewBox) {
                return iconData.viewBox
            }
            return `0 0 ${iconData.width} ${iconData.height}`
        }

        return `0 0 ${width} ${height}`
    }

    public get style(): Record<string, string | number> {
        const props = this.props
        const iconData = this.iconData
        const digitReg = /^\d+$/
        const scale = props.scale
        const isScale = scale !== '' && scale !== undefined && scale !== null
        let width
        let height

        // apply scale
        if (isScale && iconData) {
            width = Number(iconData.width) * Number(scale) + 'px'
            height = Number(iconData.height) * Number(scale) + 'px'
        } else {
            width = digitReg.test(String(props.width || ''))
                ? props.width + 'px'
                : props.width || SvgIcon.options.defaultWidth
            height = digitReg.test(String(props.height || ''))
                ? props.height + 'px'
                : props.height || SvgIcon.options.defaultHeight
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
        const props = this.props
        const colors = this.colors

        const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
        let i = 0
        return data.replace(reg, (match) => {
            let color = colors[i++] || colors[colors.length - 1]
            let fill = props.fill

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
        const props = this.props
        const colors = this.colors
        // If use original and colors, clear double fill or stroke
        if (props.original && colors.length > 0) {
            const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi
            pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
                return `<${p1}${p2}${p3}_${p4}`
            })
        }

        return pathData
    }

    protected setTitle(pathData: string): string {
        const props = this.props

        if (props.title) {
            const title = props.title
                .replace(/</gi, '&lt;')
                .replace(/>/gi, '&gt;')
                .replace(/&/g, '&amp;')
            return `<title>${title}</title>` + pathData
        }
        return pathData
    }
}
