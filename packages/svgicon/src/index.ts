import utils from './utils'

//#region Options
/** Global default options */
export interface Options {
    classPrefix?: string
    // Is stroke default
    isStroke?: boolean
    isOriginalDefault?: boolean
    /** 16px, defined in css */
    defaultWidth?: string
    defaultHeight?: string
}
//#endregion Options

export interface OriginalColor {
    type: 'fill' | 'stroke'
    color: string
}

export interface IconData {
    width?: number | string
    height?: number | string
    viewBox: string
    data: string
    originalColors?: OriginalColor[]
    stopColors?: string[]
    [key: string]: unknown
}

export interface Icon {
    name: string
    data: IconData
}

//#region props
export interface Props {
    /** icon data */
    data?: Icon
    width?: string | number
    height?: string | number
    scale?: string | number
    /** icon direction */
    dir?: string
    color?: string | string[]
    /** gradient stop colors */
    stopColors?: string[]
    title?: string
    fill?: boolean
    /** is use original color */
    original?: boolean
    /** Replace content, usually replace color */
    replace?: (svgInnerContent: string) => string
}
//#endregion props

//#region SvgIconResult
/** SvgIcon function result type */
export interface SvgIconResult {
    /** SVG content */
    path: string
    /** viewBox */
    box: string
    className: string
    style: Record<string, string | number>
}
//#endregion SvgIconResult

let options: Options = {
    defaultWidth: '',
    defaultHeight: '',
    classPrefix: 'svg',
    isStroke: false,
    isOriginalDefault: false,
}

function initProps(props: Props) {
    props = {
        ...props,
    }

    // delete undefined prop
    Object.keys(props).forEach((key) => {
        if (props[key as keyof Props] === void 0) {
            delete props[key as keyof Props]
        }
    })

    if (typeof props.original === 'string') {
        props.original = true
    }

    if (typeof props.fill === 'string') {
        props.fill = true
    }

    return {
        ...{
            width: options.defaultWidth,
            height: options.defaultHeight,
            fill: !options.isStroke,
            original: !!options.isOriginalDefault,
        },
        ...props,
    }
}

function getColors(props: Props) {
    if (Array.isArray(props.color)) {
        return props.color
    } else if (props.color) {
        return props.color.split(' ')
    }
    return []
}

function getClassName(props: Props) {
    let clazz = `${options.classPrefix}-icon`

    if (props.fill) {
        clazz += ` ${options.classPrefix}-fill`
    }

    if (props.dir) {
        clazz += ` ${options.classPrefix}-${props.dir}`
    }

    return clazz
}

function setTitle(pathData: string, props: Props): string {
    if (props.title) {
        const title = props.title
            .replace(/</gi, '&lt;')
            .replace(/>/gi, '&gt;')
            .replace(/&/g, '&amp;')
        return `<title>${title}</title>` + pathData
    }
    return pathData
}

function addOriginalColor(data: string): string {
    const styleReg = /_fill="|_stroke="/gi
    return data.replace(styleReg, (styleName) => {
        return styleName && styleName.slice(1)
    })
}

function getValidPathData(
    pathData: string,
    props: Props,
    colors: string[]
): string {
    // If use original and colors, clear duplicated fill or stroke
    if (props.original && colors.length > 0) {
        const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi
        pathData = pathData.replace(
            reg,
            (match, tag, attr, other, duplicatedAttr) => {
                return `<${tag}${attr}${other}_${duplicatedAttr}`
            }
        )
    }

    return pathData
}

function addColor(data: string, props: Props, colors: string[]): string {
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

// overwrite gradient stop color
function overwriteStopColors(data: string, props: Props) {
    const reg = /stop-color="([\w,#\s'()-_]+)"/gi
    const stopColors = props.stopColors || []

    let ix = 0
    return data.replace(reg, (match, color) => {
        color = stopColors[ix++] || color
        return `stop-color="${color}"`
    })
}

function getPath(props: Props, colors: string[], iconData: IconData | null) {
    const uid = utils.genUID()

    let pathData = ''
    if (iconData) {
        pathData = iconData.data

        pathData = setTitle(pathData, props)

        // use original color
        if (props.original) {
            pathData = addOriginalColor(pathData)
        }

        if (colors.length > 0) {
            pathData = addColor(pathData, props, colors)
        }

        // overwrite stop colors
        if (props.stopColors?.length) {
            pathData = overwriteStopColors(pathData, props)
        }

        // fix #99, inline svg use random id
        const idReg = /svgiconid([\w-/\\]+)/g
        pathData = pathData.replace(idReg, (match, elId) => {
            return `svgiconid${elId}_${uid}`
        })

        // custom replace content
        if (props.replace) {
            pathData = props.replace(pathData)
        }
    }

    return getValidPathData(pathData, props, colors)
}

function getBox(props: Props, iconData: IconData | null) {
    if (iconData) {
        if (iconData.viewBox) {
            return iconData.viewBox
        }
        return `0 0 ${iconData.width} ${iconData.height}`
    }

    const width =
        typeof props.width === 'number'
            ? props.width
            : parseFloat(props.width || '16')

    const height =
        typeof props.height === 'number'
            ? props.height
            : parseFloat(props.height || '16')

    return `0 0 ${width} ${height}`
}

function getStyle(props: Props, iconData: IconData | null) {
    const digitReg = /^\d+$/
    const scale = props.scale
    const isScale = scale !== '' && scale !== undefined && scale !== null
    let width
    let height

    // apply scale
    if (isScale && iconData && iconData.width && iconData.height) {
        width = Number(iconData.width) * Number(scale) + 'px'
        height = Number(iconData.height) * Number(scale) + 'px'
    } else {
        width = digitReg.test(String(props.width || ''))
            ? props.width + 'px'
            : props.width || options.defaultWidth
        height = digitReg.test(String(props.height || ''))
            ? props.height + 'px'
            : props.height || options.defaultHeight
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

/** set default options */
export function setOptions(newOptions: Options): void {
    options = {
        ...options,
        ...newOptions,
    }
}

export function getPropKeys(): (keyof Props)[] {
    return [
        'data',
        'color',
        'stopColors',
        'dir',
        'fill',
        'height',
        'width',
        'title',
        'scale',
        'original',
        'replace',
    ]
}

/** get svgicon result by props */
export function svgIcon(props: Props): SvgIconResult {
    props = initProps(props)
    const colors = getColors(props)
    const iconData = props.data && props.data.data ? props.data.data : null
    const path = getPath(props, colors, iconData)
    const className = getClassName(props)
    const box = getBox(props, iconData)
    const style = getStyle(props, iconData)

    return {
        path,
        box,
        className,
        style,
    }
}
