/**
 * svg element InnerHTML polyfill
 * @author Allenice
 * @since 2017-07-15 04:37:27
 */

let polyfill = require('./lib/svgicon-polyfill')

// check browser is suport SvgElement.innerHTML
if (
    typeof window.document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        .innerHTML !== 'string'
) {
    polyfill()
}
