!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSvgIcon=e():t.VueSvgIcon=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){n(7);var r=n(5)(n(2),n(6),"data-v-7ef413f4",null);t.exports=r.exports},function(t,e,n){t.exports=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};e.default={data:function(){return{}},props:{icon:String,width:{type:String,default:""},height:{type:String,default:""},dir:String,fill:{type:Boolean,default:!0},color:String},computed:{svgString:function(){var t="";for(var e in this.style)t+=e+": "+this.style[e]+"; ";return'<svg version="1.1" viewBox="'+this.box+'" style="width: 100%; height: 100%;"> '+this.path+" </svg>"},clazz:function t(){var t="svg-icon";return this.fill&&(t+=" svg-fill"),this.dir&&(t+=" svg-"+this.dir),t},iconData:function(){return this.icon?r[this.icon]:null},colors:function(){return this.color?this.color.split(" "):""},path:function(){var t=this;if(this.iconData){if(this.colors&&this.colors.length>0){var e=0;return this.iconData.data.replace(/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,function(n){var r=t.colors[e++]||t.colors[t.colors.length-1],i=t.fill;return r&&0===r.indexOf("r-")&&(i=!i,r=r.split("r-")[1]),n+(i?"fill":"stroke")+'="'+r+'" '+(i?"stroke":"fill")+'="none"'})}return this.iconData.data}return""},box:function(){var t=this.width||16,e=this.width||16;return this.iconData?this.iconData.viewBox?this.iconData.viewBox:"0 0 "+this.iconData.width+" "+this.iconData.height:"0 0 "+parseFloat(t)+" "+parseFloat(e)},style:function(){var t=/^\d+$/;return{width:t.test(this.width)?this.width+"px":this.width,height:t.test(this.height)?this.height+"px":this.height}}},install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tagName||"svgicon";t.component(n,this)},register:function(t){for(var e in t)r[e]||(r[e]=t[e])},icons:r}},function(t,e,n){e=t.exports=n(4)(),e.push([t.i,".svg-icon[data-v-7ef413f4]{display:inline-block;width:16px;height:16px;color:inherit;vertical-align:middle;fill:none;stroke:currentColor}.svg-fill[data-v-7ef413f4]{fill:currentColor;stroke:none}.svg-up[data-v-7ef413f4]{transform:rotate(-90deg)}.svg-right[data-v-7ef413f4]{transform:rotate(0deg)}.svg-down[data-v-7ef413f4]{transform:rotate(90deg)}.svg-left[data-v-7ef413f4]{transform:rotate(180deg)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.clazz,style:t.style,domProps:{innerHTML:t._s(t.svgString)}})},staticRenderFns:[]}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(8)("1aec5a2d",r,!0)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(g){var o=h++;r=d||(d=i()),e=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(9),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var i=u(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=f[s.id];a.refs--,n.push(a)}e?(i=u(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=o[0],a=o[1],c=o[2],u=o[3],f={id:t+":"+i,css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}}])});
//# sourceMappingURL=index.js.map