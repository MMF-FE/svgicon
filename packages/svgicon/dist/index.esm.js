/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
var idSeed = 0;
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var utils = {
    genUID: function () {
        idSeed++;
        return (idSeed +
            '_' +
            [1, 2, 3, 4, 5]
                .map(function () { return chars[getRandomInt(0, chars.length)]; })
                .join(''));
    },
};

//#endregion SvgIconResult
var options = {
    defaultWidth: '',
    defaultHeight: '',
    classPrefix: 'svg',
    isStroke: false,
    isOriginalDefault: false,
};
function initProps(props) {
    props = __assign({}, props);
    // delete undefined prop
    Object.keys(props).forEach(function (key) {
        if (props[key] === void 0) {
            delete props[key];
        }
    });
    if (typeof props.original === 'string') {
        props.original = true;
    }
    if (typeof props.fill === 'string') {
        props.fill = true;
    }
    return __assign({
        width: options.defaultWidth,
        height: options.defaultHeight,
        fill: !options.isStroke,
        original: !!options.isOriginalDefault,
    }, props);
}
function getColors(props) {
    if (props.color) {
        return props.color.split(' ');
    }
    return [];
}
function getClassName(props) {
    var clazz = options.classPrefix + "-icon";
    if (props.fill) {
        clazz += " " + options.classPrefix + "-fill";
    }
    if (props.dir) {
        clazz += " " + options.classPrefix + "-" + props.dir;
    }
    return clazz;
}
function setTitle(pathData, props) {
    if (props.title) {
        var title = props.title
            .replace(/</gi, '&lt;')
            .replace(/>/gi, '&gt;')
            .replace(/&/g, '&amp;');
        return "<title>" + title + "</title>" + pathData;
    }
    return pathData;
}
function addOriginalColor(data) {
    var styleReg = /_fill="|_stroke="/gi;
    return data.replace(styleReg, function (styleName) {
        return styleName && styleName.slice(1);
    });
}
function getValidPathData(pathData, props, colors) {
    // If use original and colors, clear double fill or stroke
    if (props.original && colors.length > 0) {
        var reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi;
        pathData = pathData.replace(reg, function (match, p1, p2, p3, p4) {
            return "<" + p1 + p2 + p3 + "_" + p4;
        });
    }
    return pathData;
}
function addColor(data, props, colors) {
    var reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi;
    var i = 0;
    return data.replace(reg, function (match) {
        var color = colors[i++] || colors[colors.length - 1];
        var fill = props.fill;
        // if color is '_', ignore it
        if (color && color === '_') {
            return match;
        }
        // if color start with 'r-', reverse the fill value
        if (color && /^r-/.test(color)) {
            fill = !fill;
            color = color.substr(2);
        }
        var style = fill ? 'fill' : 'stroke';
        var reverseStyle = fill ? 'stroke' : 'fill';
        return match + (style + "=\"" + color + "\" " + reverseStyle + "=\"none\" ");
    });
}
function getPath(props, colors, iconData) {
    var uid = utils.genUID();
    var pathData = '';
    if (iconData) {
        pathData = iconData.data;
        pathData = setTitle(pathData, props);
        // use original color
        if (props.original) {
            pathData = addOriginalColor(pathData);
        }
        if (colors.length > 0) {
            pathData = addColor(pathData, props, colors);
        }
        // fix #99, inline svg use random id
        var idReg = /svgiconid([\w-/\\]+)/g;
        pathData = pathData.replace(idReg, function (match, elId) {
            return "svgiconid" + elId + "_" + uid;
        });
    }
    return getValidPathData(pathData, props, colors);
}
function getBox(props, iconData) {
    if (iconData) {
        if (iconData.viewBox) {
            return iconData.viewBox;
        }
        return "0 0 " + iconData.width + " " + iconData.height;
    }
    var width = typeof props.width === 'number'
        ? props.width
        : parseFloat(props.width || '16');
    var height = typeof props.height === 'number'
        ? props.height
        : parseFloat(props.height || '16');
    return "0 0 " + width + " " + height;
}
function getStyle(props, iconData) {
    var digitReg = /^\d+$/;
    var scale = props.scale;
    var isScale = scale !== '' && scale !== undefined && scale !== null;
    var width;
    var height;
    // apply scale
    if (isScale && iconData && iconData.width && iconData.height) {
        width = Number(iconData.width) * Number(scale) + 'px';
        height = Number(iconData.height) * Number(scale) + 'px';
    }
    else {
        width = digitReg.test(String(props.width || ''))
            ? props.width + 'px'
            : props.width || options.defaultWidth;
        height = digitReg.test(String(props.height || ''))
            ? props.height + 'px'
            : props.height || options.defaultHeight;
    }
    var style = {};
    if (width) {
        style.width = width;
    }
    if (height) {
        style.height = height;
    }
    return style;
}
/** set default options */
function setOptions(newOptions) {
    options = __assign(__assign({}, options), newOptions);
}
function getPropKeys() {
    return [
        'data',
        'color',
        'dir',
        'fill',
        'height',
        'width',
        'title',
        'scale',
        'original',
    ];
}
/** get svgicon result by props */
function svgIcon(props) {
    props = initProps(props);
    var colors = getColors(props);
    var iconData = props.data && props.data.data ? props.data.data : null;
    var className = getClassName(props);
    var path = getPath(props, colors, iconData);
    var box = getBox(props, iconData);
    var style = getStyle(props, iconData);
    return {
        path: path,
        box: box,
        className: className,
        style: style,
    };
}

export { getPropKeys, setOptions, svgIcon };
//# sourceMappingURL=index.esm.js.map
