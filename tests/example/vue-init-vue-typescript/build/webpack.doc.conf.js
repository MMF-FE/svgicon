/**
 * webpack doc config
 * @author Allenice
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const md = require('markdown-it')()
const slugify = require('transliteration').slugify
const prismjs = require('prismjs')

// prismjs components
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-yaml')

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(
            parseInt(
                encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
                16
            )
        )
    })
    return str
}

let docConfig = {
    resolve: {
        alias: {
            // override router
            router: path.resolve('./src/router/doc.ts')
        }
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: {
                    linkify: true,
                    highlight(str, lang) {
                        let langMark =
                            prismjs.languages[lang] || prismjs.languages['bash']
                        return prismjs.highlight(str, langMark)
                    },
                    use: [
                        [
                            require('markdown-it-container'),
                            'demo',
                            {
                                validate: function(params) {
                                    return params.trim().match(/^demo\s*(.*)$/)
                                },

                                render: function(tokens, idx) {
                                    var m = tokens[idx].info
                                        .trim()
                                        .match(/^demo\s*(.*)$/)
                                    if (tokens[idx].nesting === 1) {
                                        var description =
                                            m && m.length > 1 ? m[1] : ''
                                        var content = tokens[idx + 1].content
                                        var html = convert(
                                            utils.strip(content, [
                                                'script',
                                                'style'
                                            ])
                                        ).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                                        var descriptionHTML = description
                                            ? md.render(description)
                                            : ''

                                        return `<demo-block class="demo-box">
                                          <div class="source" slot="source">${html}</div>
                                          ${descriptionHTML}
                                          <div class="highlight" slot="highlight">`
                                    }
                                    return '</div></demo-block>\n'
                                }
                            }
                        ],
                        [require('markdown-it-container'), 'tip']
                    ],
                    preprocess: function(MarkdownIt, source) {
                        MarkdownIt.renderer.rules.table_open = function() {
                            return '<table class="table">'
                        }
                        // MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                        return source
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/pages\/App/, 'pages/Doc')
    ]
}

module.exports = docConfig
