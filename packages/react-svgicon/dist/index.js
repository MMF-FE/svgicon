"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("@yzfe/svgicon");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=r(t),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};
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
***************************************************************************** */var s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(r,t),r.prototype.render=function(){var t=this.props,r=e.svgIcon(t),o={};if(t){var a=e.getPropKeys();for(var u in t)a.indexOf(u)<0&&(o[u]=t[u])}return o.viewBox=r.box,o.className=(o.className||"")+" "+r.className,o.style=s(s({},o.style||{}),r.style),n.default.createElement("svg",s({},o,{dangerouslySetInnerHTML:{__html:r.path}}))},r}(n.default.PureComponent);Object.defineProperty(exports,"setOptions",{enumerable:!0,get:function(){return e.setOptions}}),exports.ReactSvgIcon=a;
//# sourceMappingURL=index.js.map
