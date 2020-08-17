import React from 'react';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
            Array(5)
                .fill('')
                .map(function () { return chars[getRandomInt(0, chars.length)]; })
                .join(''));
    },
};

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var SvgIcon = /** @class */ (function () {
    function SvgIcon(props) {
        this._props = {};
        this.uid = '';
        this.props = props;
        this.uid = utils.genUID();
    }
    Object.defineProperty(SvgIcon.prototype, "props", {
        get: function () {
            var props = __assign$1({}, this._props);
            if (typeof props.original !== 'boolean' && 'original' in props) {
                props.original = true;
            }
            if (typeof props.fill !== 'boolean' && 'fill' in props) {
                props.fill = true;
            }
            return __assign$1({
                width: SvgIcon.options.defaultWidth,
                height: SvgIcon.options.defaultHeight,
                fill: !SvgIcon.options.isStroke,
                original: !!SvgIcon.options.isOriginalDefault,
            }, props);
        },
        set: function (props) {
            var _this = this;
            // Check is props updated and apply new props
            if (this._props !== props) {
                var keys = Object.keys(this._props || {});
                if (Object.keys(props || {}).length !== keys.length) {
                    this._props = props;
                }
                else if (keys.some(function (key) { return _this._props[key] !== props[key]; })) {
                    this._props = props;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "colors", {
        get: function () {
            var props = this.props;
            if (props.color) {
                return props.color.split(' ');
            }
            return [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "icon", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "iconData", {
        get: function () {
            var resource = this.props.data;
            var iconData = resource ? resource.data : null;
            return iconData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "clazz", {
        get: function () {
            var props = this.props;
            var clazz = SvgIcon.options.classPrefix + "-icon";
            if (props.fill) {
                clazz += " " + SvgIcon.options.classPrefix + "-fill";
            }
            if (props.dir) {
                clazz += " " + SvgIcon.options.classPrefix + "-" + props.dir;
            }
            return clazz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "path", {
        get: function () {
            var _this = this;
            var props = this.props;
            var iconData = this.iconData;
            var pathData = '';
            if (iconData) {
                pathData = iconData.data;
                pathData = this.setTitle(pathData);
                // use original color
                if (props.original) {
                    pathData = this.addOriginalColor(pathData);
                }
                if (this.colors.length > 0) {
                    pathData = this.addColor(pathData);
                }
                // fix #99, inline svg use random id
                var idReg = /svgiconid([\w-/\\]+)/g;
                pathData = pathData.replace(idReg, function (match, elId) {
                    return "svgiconid" + elId + "_" + _this.uid;
                });
            }
            return this.getValidPathData(pathData);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "box", {
        get: function () {
            var props = this.props;
            var iconData = this.iconData;
            var width = typeof props.width === 'number'
                ? props.width
                : parseFloat(props.width || '16');
            var height = typeof props.height === 'number'
                ? props.height
                : parseFloat(props.height || '16');
            if (iconData) {
                if (iconData.viewBox) {
                    return iconData.viewBox;
                }
                return "0 0 " + iconData.width + " " + iconData.height;
            }
            return "0 0 " + width + " " + height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgIcon.prototype, "style", {
        get: function () {
            var props = this.props;
            var iconData = this.iconData;
            var digitReg = /^\d+$/;
            var scale = props.scale;
            var isScale = scale !== '' && scale !== undefined && scale !== null;
            var width;
            var height;
            // apply scale
            if (isScale && iconData) {
                width = Number(iconData.width) * Number(scale) + 'px';
                height = Number(iconData.height) * Number(scale) + 'px';
            }
            else {
                width = digitReg.test(String(props.width || ''))
                    ? props.width + 'px'
                    : props.width || SvgIcon.options.defaultWidth;
                height = digitReg.test(String(props.height || ''))
                    ? props.height + 'px'
                    : props.height || SvgIcon.options.defaultHeight;
            }
            var style = {};
            if (width) {
                style.width = width;
            }
            if (height) {
                style.height = height;
            }
            return style;
        },
        enumerable: false,
        configurable: true
    });
    SvgIcon.prototype.addColor = function (data) {
        var props = this.props;
        var colors = this.colors;
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
    };
    SvgIcon.prototype.addOriginalColor = function (data) {
        var styleReg = /_fill="|_stroke="/gi;
        return data.replace(styleReg, function (styleName) {
            return styleName && styleName.slice(1);
        });
    };
    SvgIcon.prototype.getValidPathData = function (pathData) {
        var props = this.props;
        var colors = this.colors;
        // If use original and colors, clear double fill or stroke
        if (props.original && colors.length > 0) {
            var reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi;
            pathData = pathData.replace(reg, function (match, p1, p2, p3, p4) {
                return "<" + p1 + p2 + p3 + "_" + p4;
            });
        }
        return pathData;
    };
    SvgIcon.prototype.setTitle = function (pathData) {
        var props = this.props;
        if (props.title) {
            var title = props.title
                .replace(/</gi, '&lt;')
                .replace(/>/gi, '&gt;')
                .replace(/&/g, '&amp;');
            return "<title>" + title + "</title>" + pathData;
        }
        return pathData;
    };
    SvgIcon.options = {
        defaultWidth: '',
        defaultHeight: '',
        classPrefix: 'svg',
        isStroke: false,
        isOriginalDefault: false,
    };
    return SvgIcon;
}());

function setOptions(options) {
    SvgIcon.options = __assign(__assign({}, SvgIcon.options), options);
}
var SvgIcon$1 = /** @class */ (function (_super) {
    __extends(SvgIcon$1, _super);
    function SvgIcon$1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            svgicon: new SvgIcon(props),
        };
        return _this;
    }
    SvgIcon$1.prototype.render = function () {
        this.state.svgicon.props = this.props;
        return (React.createElement("svg", { version: "1.1", dangerouslySetInnerHTML: {
                __html: this.state.svgicon.path || '',
            }, className: this.state.svgicon.clazz || '', viewBox: this.state.svgicon.box, style: this.state.svgicon.style, onClick: this.props.onClick }));
    };
    return SvgIcon$1;
}(React.Component));

export { SvgIcon$1 as SvgIcon, setOptions };
//# sourceMappingURL=index.esm.js.map
