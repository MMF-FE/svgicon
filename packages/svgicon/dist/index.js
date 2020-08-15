export default class SvgIcon {
    constructor(props) {
        this._props = props;
    }
    get props() {
        return {
            ...{
                width: '',
                height: '',
                fill: !SvgIcon.options.isStroke,
                original: !!SvgIcon.options.isOriginalDefault,
            },
            ...this._props,
        };
    }
    set props(props) {
        this._props = props;
    }
    get colors() {
        if (this.props.color) {
            return this.props.color.split(' ');
        }
        return [];
    }
    get icon() {
        return this.props.data;
    }
    get iconData() {
        const resource = this.props.data;
        const iconData = resource ? resource.data : null;
        return iconData;
    }
    get clazz() {
        let clazz = `${SvgIcon.options.classPrefix}-icon`;
        if (this.props.fill) {
            clazz += ` ${SvgIcon.options.classPrefix}-fill`;
        }
        if (this.props.dir) {
            clazz += ` ${SvgIcon.options.classPrefix}-${this.props.dir}`;
        }
        return clazz;
    }
    get path() {
        let pathData = '';
        if (this.iconData) {
            pathData = this.iconData.data;
            pathData = this.setTitle(pathData);
            // use original color
            if (this.props.original) {
                pathData = this.addOriginalColor(pathData);
            }
            if (this.colors.length > 0) {
                pathData = this.addColor(pathData);
            }
        }
        return this.getValidPathData(pathData);
    }
    get box() {
        const width = parseFloat(this.props.width || '16');
        const height = parseFloat(this.props.width || '16');
        if (this.iconData) {
            if (this.iconData.viewBox) {
                return this.iconData.viewBox;
            }
            return `0 0 ${this.iconData.width} ${this.iconData.height}`;
        }
        return `0 0 ${width} ${height}`;
    }
    get style() {
        const digitReg = /^\d+$/;
        const scale = Number(this.props.scale);
        let width;
        let height;
        // apply scale
        if (!isNaN(scale) && this.iconData) {
            width = Number(this.iconData.width) * scale + 'px';
            height = Number(this.iconData.height) * scale + 'px';
        }
        else {
            width = digitReg.test(this.props.width || '')
                ? this.props.width + 'px'
                : this.props.width || SvgIcon.options.defaultWidth;
            height = digitReg.test(this.props.height || '')
                ? this.props.height + 'px'
                : this.props.height || SvgIcon.options.defaultHeight;
        }
        const style = {};
        if (width) {
            style.width = width;
        }
        if (height) {
            style.height = height;
        }
        return style;
    }
    addColor(data) {
        const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi;
        let i = 0;
        return data.replace(reg, (match) => {
            let color = this.colors[i++] || this.colors[this.colors.length - 1];
            let fill = this.props.fill;
            // if color is '_', ignore it
            if (color && color === '_') {
                return match;
            }
            // if color start with 'r-', reverse the fill value
            if (color && /^r-/.test(color)) {
                fill = !fill;
                color = color.substr(2);
            }
            const style = fill ? 'fill' : 'stroke';
            const reverseStyle = fill ? 'stroke' : 'fill';
            return match + `${style}="${color}" ${reverseStyle}="none" `;
        });
    }
    addOriginalColor(data) {
        const styleReg = /_fill="|_stroke="/gi;
        return data.replace(styleReg, (styleName) => {
            return styleName && styleName.slice(1);
        });
    }
    getValidPathData(pathData) {
        // If use original and colors, clear double fill or stroke
        if (this.props.original && this.colors.length > 0) {
            const reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi;
            pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
                return `<${p1}${p2}${p3}_${p4}`;
            });
        }
        return pathData;
    }
    setTitle(pathData) {
        if (this.props.title) {
            const title = this.props.title
                .replace(/</gi, '&lt;')
                .replace(/>/gi, '&gt;')
                .replace(/&/g, '&amp;');
            return `<title>${title}</title>` + pathData;
        }
        return pathData;
    }
}
SvgIcon.options = {
    defaultWidth: '',
    defaultHeight: '',
    classPrefix: 'svg',
    isStroke: false,
    isOriginalDefault: false,
};
//# sourceMappingURL=index.js.map