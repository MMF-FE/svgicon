// 引用代码高亮样式

import * as hljs from 'highlight.js/lib/highlight'
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

export default hljs
