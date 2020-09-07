import React from 'react';
import { svgIcon, getPropKeys } from '@yzfe/svgicon';
export { setOptions } from '@yzfe/svgicon';

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

var ReactSvgIcon = /** @class */ (function (_super) {
    __extends(ReactSvgIcon, _super);
    function ReactSvgIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactSvgIcon.prototype.render = function () {
        var props = this.props;
        var result = svgIcon(props);
        var attrs = {};
        if (props) {
            var propsKeys = getPropKeys();
            for (var key in props) {
                if (propsKeys.indexOf(key) < 0) {
                    attrs[key] = props[key];
                }
            }
        }
        attrs.viewBox = result.box;
        attrs.className = (attrs.className || '') + (" " + result.className);
        attrs.style = __assign(__assign({}, (attrs.style || {})), result.style);
        return (React.createElement("svg", __assign({}, attrs, { dangerouslySetInnerHTML: { __html: result.path } })));
    };
    return ReactSvgIcon;
}(React.PureComponent));

export { ReactSvgIcon };
//# sourceMappingURL=index.esm.js.map
