/**
 * svg element InnerHTML polyfill
 * @author Allenice
 * @since 2017-07-15 04:37:27
 */

import polyfill from './innersvg-polyfill'

// check browser is suport SvgElement.innerHTML
if (typeof document === 'object') {
  if (typeof document.createElementNS("http://www.w3.org/2000/svg", "svg").innerHTML !== 'string') {
    polyfill()
  }
}
