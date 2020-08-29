"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
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
var t=function(){return(t=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};var e=0,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=function(){return++e+"_"+[1,2,3,4,5].map((function(){return i[(t=0,e=i.length,t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t)];var t,e})).join("")},n=function(){return(n=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},l={defaultWidth:"",defaultHeight:"",classPrefix:"svg",isStroke:!1,isOriginalDefault:!1};function a(t){var e=function(t){return t.color?t.color.split(" "):[]}(t=function(t){return t=n({},t),Object.keys(t).forEach((function(e){void 0===t[e]&&delete t[e]})),"string"==typeof t.original&&(t.original=!0),"string"==typeof t.fill&&(t.fill=!0),n({width:l.defaultWidth,height:l.defaultHeight,fill:!l.isStroke,original:!!l.isOriginalDefault},t)}(t)),i=t.data&&t.data.data?t.data.data:null,a=function(t){var e=l.classPrefix+"-icon";return t.fill&&(e+=" "+l.classPrefix+"-fill"),t.dir&&(e+=" "+l.classPrefix+"-"+t.dir),e}(t);return{path:function(t,e,i){var n=r(),l="";i&&(l=function(t,e){return e.title?"<title>"+e.title.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/&/g,"&amp;")+"</title>"+t:t}(l=i.data,t),t.original&&(l=l.replace(/_fill="|_stroke="/gi,(function(t){return t&&t.slice(1)}))),e.length>0&&(l=function(t,e,i){var r=0;return t.replace(/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,(function(t){var n=i[r++]||i[i.length-1],l=e.fill;return n&&"_"===n?t:(n&&/^r-/.test(n)&&(l=!l,n=n.substr(2)),t+(l?"fill":"stroke")+'="'+n+'" '+(l?"stroke":"fill")+'="none" ')}))}(l,t,e)),l=l.replace(/svgiconid([\w-/\\]+)/g,(function(t,e){return"svgiconid"+e+"_"+n})));return function(t,e,i){return e.original&&i.length>0&&(t=t.replace(/<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s.\-+#$&>]+)(fill|stroke)/gi,(function(t,e,i,r,n){return"<"+e+i+r+"_"+n}))),t}(l,t,e)}(t,e,i),box:function(t,e){return e?e.viewBox?e.viewBox:"0 0 "+e.width+" "+e.height:"0 0 "+("number"==typeof t.width?t.width:parseFloat(t.width||"16"))+" "+("number"==typeof t.height?t.height:parseFloat(t.height||"16"))}(t,i),className:a,style:function(t,e){var i,r,n=/^\d+$/,a=t.scale;""!==a&&null!=a&&e&&e.width&&e.height?(i=Number(e.width)*Number(a)+"px",r=Number(e.height)*Number(a)+"px"):(i=n.test(String(t.width||""))?t.width+"px":t.width||l.defaultWidth,r=n.test(String(t.height||""))?t.height+"px":t.height||l.defaultHeight);var o={};return i&&(o.width=i),r&&(o.height=r),o}(t,i)}}var o={functional:!0,props:["data","color","dir","fill","height","width","title","scale","original"],render:function(e,i){var r=a(i.props);return e("svg",t(t({},i.data),{attrs:t({viewBox:r.box},i.data.attrs),staticStyle:t(t({},r.style),i.data.staticStyle),staticClass:r.className+(i.data.staticClass?" "+i.data.staticClass:""),domProps:{innerHTML:r.path}}))}};exports.VueSvgIcon=o,exports.setOptions=function(t){l=n(n({},l),t)};
//# sourceMappingURL=index.js.map
