;(function(t) {
    function e(e) {
        for (
            var o, a, c = e[0], l = e[1], s = e[2], d = 0, u = [];
            d < c.length;
            d++
        )
            (a = c[d]), n[a] && u.push(n[a][0]), (n[a] = 0)
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
        h && h(e)
        while (u.length) u.shift()()
        return r.push.apply(r, s || []), i()
    }
    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], o = !0, a = 1; a < i.length; a++) {
                var l = i[a]
                0 !== n[l] && (o = !1)
            }
            o && (r.splice(e--, 1), (t = c((c.s = i[0]))))
        }
        return t
    }
    var o = {},
        n = { 3: 0 },
        r = []
    function a(t) {
        return c.p + 'js/' + ({}[t] || t) + '.' + { 0: 'c7dca6ea' }[t] + '.js'
    }
    function c(e) {
        if (o[e]) return o[e].exports
        var i = (o[e] = { i: e, l: !1, exports: {} })
        return t[e].call(i.exports, i, i.exports, c), (i.l = !0), i.exports
    }
    ;(c.e = function(t) {
        var e = [],
            i = n[t]
        if (0 !== i)
            if (i) e.push(i[2])
            else {
                var o = new Promise(function(e, o) {
                    i = n[t] = [e, o]
                })
                e.push((i[2] = o))
                var r,
                    l = document.getElementsByTagName('head')[0],
                    s = document.createElement('script')
                ;(s.charset = 'utf-8'),
                    (s.timeout = 120),
                    c.nc && s.setAttribute('nonce', c.nc),
                    (s.src = a(t)),
                    (r = function(e) {
                        ;(s.onerror = s.onload = null), clearTimeout(d)
                        var i = n[t]
                        if (0 !== i) {
                            if (i) {
                                var o =
                                        e &&
                                        ('load' === e.type
                                            ? 'missing'
                                            : e.type),
                                    r = e && e.target && e.target.src,
                                    a = new Error(
                                        'Loading chunk ' +
                                            t +
                                            ' failed.\n(' +
                                            o +
                                            ': ' +
                                            r +
                                            ')'
                                    )
                                ;(a.type = o), (a.request = r), i[1](a)
                            }
                            n[t] = void 0
                        }
                    })
                var d = setTimeout(function() {
                    r({ type: 'timeout', target: s })
                }, 12e4)
                ;(s.onerror = s.onload = r), l.appendChild(s)
            }
        return Promise.all(e)
    }),
        (c.m = t),
        (c.c = o),
        (c.d = function(t, e, i) {
            c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
        }),
        (c.r = function(t) {
            'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (c.t = function(t, e) {
            if ((1 & e && (t = c(t)), 8 & e)) return t
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t
            var i = Object.create(null)
            if (
                (c.r(i),
                Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    c.d(
                        i,
                        o,
                        function(e) {
                            return t[e]
                        }.bind(null, o)
                    )
            return i
        }),
        (c.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t['default']
                      }
                    : function() {
                          return t
                      }
            return c.d(e, 'a', e), e
        }),
        (c.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (c.p = '/'),
        (c.oe = function(t) {
            throw (console.error(t), t)
        })
    var l = (window['webpackJsonp'] = window['webpackJsonp'] || []),
        s = l.push.bind(l)
    ;(l.push = e), (l = l.slice())
    for (var d = 0; d < l.length; d++) e(l[d])
    var h = s
    r.push([3, 1]), i()
})({
    3: function(t, e, i) {
        t.exports = i('QqCh')
    },
    ADLm: function(t, e, i) {
        'use strict'
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e
                return i('svg', {
                    class: t.clazz,
                    style: t.style,
                    attrs: { version: '1.1', viewBox: t.box },
                    domProps: { innerHTML: t._s(t.path) },
                    on: { click: t.onClick }
                })
            },
            n = [],
            r = (i('pIFo'),
            i('xfY5'),
            i('KKXr'),
            i('f3/d'),
            i('bHtr'),
            i('VRzm'),
            {}),
            a = [],
            c = '',
            l = '',
            s = 'svg',
            d = !1,
            h = {
                data: function() {
                    return { loaded: !1 }
                },
                props: {
                    icon: String,
                    name: String,
                    width: { type: String, default: '' },
                    height: { type: String, default: '' },
                    scale: String,
                    dir: String,
                    fill: {
                        type: Boolean,
                        default: function() {
                            return !d
                        }
                    },
                    color: String,
                    original: { type: Boolean, default: !1 }
                },
                computed: {
                    clazz: function() {
                        var t = ''.concat(s, '-icon')
                        return (
                            this.fill && (t += ' '.concat(s, '-fill')),
                            this.dir &&
                                (t += ' '.concat(s, '-').concat(this.dir)),
                            t
                        )
                    },
                    iconName: function() {
                        return this.name || this.icon
                    },
                    iconData: function() {
                        var t = r[this.iconName]
                        return t || this.loaded ? t : null
                    },
                    colors: function() {
                        return this.color ? this.color.split(' ') : []
                    },
                    path: function() {
                        var t = ''
                        return (
                            this.iconData
                                ? ((t = this.iconData.data),
                                  this.original &&
                                      (t = this.addOriginalColor(t)),
                                  this.colors.length > 0 &&
                                      (t = this.addColor(t)))
                                : a.push({
                                      name: this.iconName,
                                      component: this
                                  }),
                            this.getValidPathData(t)
                        )
                    },
                    box: function() {
                        var t = this.width || 16,
                            e = this.width || 16
                        return this.iconData
                            ? this.iconData.viewBox
                                ? this.iconData.viewBox
                                : '0 0 '
                                      .concat(this.iconData.width, ' ')
                                      .concat(this.iconData.height)
                            : '0 0 '
                                  .concat(parseFloat(t), ' ')
                                  .concat(parseFloat(e))
                    },
                    style: function() {
                        var t,
                            e,
                            i = /^\d+$/,
                            o = Number(this.scale)
                        return (
                            !isNaN(o) && this.iconData
                                ? ((t = Number(this.iconData.width) * o + 'px'),
                                  (e = Number(this.iconData.height) * o + 'px'))
                                : ((t = i.test(this.width)
                                      ? this.width + 'px'
                                      : this.width),
                                  (e = i.test(this.height)
                                      ? this.height + 'px'
                                      : this.height)),
                            { width: t || c, height: e || l }
                        )
                    }
                },
                created: function() {
                    r[this.iconName] && (this.loaded = !0)
                },
                methods: {
                    addColor: function(t) {
                        var e = this,
                            i = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,
                            o = 0
                        return t.replace(i, function(t) {
                            var i =
                                    e.colors[o++] ||
                                    e.colors[e.colors.length - 1],
                                n = e.fill
                            if (i && '_' === i) return t
                            i &&
                                0 === i.indexOf('r-') &&
                                ((n = !n), (i = i.split('r-')[1]))
                            var r = n ? 'fill' : 'stroke',
                                a = n ? 'stroke' : 'fill'
                            return (
                                t +
                                ''
                                    .concat(r, '="')
                                    .concat(i, '" ')
                                    .concat(a, '="none" ')
                            )
                        })
                    },
                    addOriginalColor: function(t) {
                        var e = /_fill="|_stroke="/gi
                        return t.replace(e, function(t) {
                            return t && t.slice(1)
                        })
                    },
                    getValidPathData: function(t) {
                        if (this.original && this.colors.length > 0) {
                            var e = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi
                            t = t.replace(e, function(t, e, i, o, n) {
                                return '<'
                                    .concat(e)
                                    .concat(i)
                                    .concat(o, '_')
                                    .concat(n)
                            })
                        }
                        return t
                    },
                    onClick: function(t) {
                        this.$emit('click', t)
                    }
                },
                install: function(t) {
                    var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        i = e.tagName || 'svgicon'
                    e.classPrefix && (s = e.classPrefix),
                        (d = !!e.isStroke),
                        e.defaultWidth && (c = e.defaultWidth),
                        e.defaultHeight && (l = e.defaultHeight),
                        t.component(i, this)
                },
                register: function(t) {
                    var e = function(e) {
                        r[e] || (r[e] = t[e]),
                            (a = a.filter(function(t, i) {
                                return (
                                    t.name === e &&
                                        t.component.$set(
                                            t.component,
                                            'loaded',
                                            !0
                                        ),
                                    t.name !== e
                                )
                            }))
                    }
                    for (var i in t) e(i)
                },
                icons: r
            },
            u = h,
            p = i('KHd+'),
            f = Object(p['a'])(u, o, n, !1, null, null, null)
        e['a'] = f.exports
    },
    QqCh: function(t, e, i) {
        'use strict'
        i.r(e)
        i('VRzm')
        var o = i('XuX8'),
            n = i.n(o),
            r = i('xmWZ'),
            a = i('3Aqn'),
            c = i('qpph'),
            l = i('0yhX'),
            s = i('EdlT'),
            d = i('mrSG'),
            h = i('YKMj'),
            u = (i('pIFo'),
            {
                dir: [
                    '\n      <icon name="arrow" width="50" height="50" dir="left"></icon>\n      <icon name="arrow" width="50" height="50" dir="up"></icon>\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" dir="down"></icon>\n      '
                ],
                fill: [
                    '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" :fill="false"></icon>\n      '
                ],
                'r-color': [
                    '\n        <icon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>\n      '
                ],
                color: [
                    '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" color="red"></icon>\n      <icon name="arrow" width="50" height="50" color="green"></icon>\n      <icon name="arrow" width="50" height="50" color="blue"></icon>\n      '
                ],
                size: [
                    '\n      <icon name="arrow"></icon>\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" scale="15"></icon>\n      <icon name="arrow" width="10em" height="10em"></icon>\n      '
                ],
                'multi-color': [
                    '<icon name="check" :fill="false" width="100" height="100" color="r-#42b983 white"></icon>'
                ],
                'multi-color2': [
                    '<icon name="colorwheel" width="200" height="200" :color="datas[0]"></icon>',
                    '\n      <template>\n        <icon name="colorwheel" width="200" height="200" :color="colors"></icon>\n      </template>\n\n      <script>\n        export default {\n          data () {\n            return {\n              colors: \'#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944\'\n            }\n          }\n        }\n      </script>\n      '
                ],
                'original-color': [
                    '\n        <icon name="colorwheel" width="100" height="100" :original="true"></icon>\n        \x3c!-- overwrite original color --\x3e\n        <icon name="colorwheel" width="100" height="100" :original="true" color="_ black _ black _"></icon>\n        <icon name="colorwheel" width="100" height="100" :original="true" color="_ r-black _ r-red _"></icon>\n      '
                ],
                gradient: [
                    '<icon name="vue" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></icon>',
                    '\n      <template>\n        <svg style="width: 0; position: absolute; opacity: 0">\n          <defs>\n              <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#57f0c2"/>\n                  <stop offset="95%" stop-color="#147d58"/>\n              </linearGradient>\n              <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#7295c2"/>\n                  <stop offset="95%" stop-color="#252e3d"/>\n              </linearGradient>\n          </defs>\n        </svg>\n\n        #{{tpl}}\n      </template>\n      '
                ],
                namespace: [
                    '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="sora/arrow" width="50" height="50"></icon>\n      <icon name="sora/fit/arrow" width="50" height="50"></icon>\n      '
                ],
                uid: [
                    '\n      <icon name="mask" width="100" height="100"></icon>\n      <icon name="sora/fit/mask" width="100" height="100" color="url(#svgicon-sora-fit-mask-a) red green" ></icon>\n      '
                ],
                async: [
                    '\n        <icon name="download" width="40" height="40" color="red" ></icon>\n        <icon name="download" width="40" height="40" color="green" ></icon>\n        <icon name="download" width="40" height="40" color="blue" ></icon>\n        <icon name="good" width="40" height="40" class="good"></icon>\n      ',
                    "\n      <template> #{{tpl}}</template>\n\n      <script>\n        export default {\n          mounted () {\n            require.ensure([], () => {\n              require('icons-async')\n            }, 'async-icons')\n          }\n        }\n      </script>\n      "
                ]
            }),
            p = i('pw5m')
        p['registerLanguage']('javascript', i('TdF3')),
            p['registerLanguage']('xml', i('jctj'))
        var f = p,
            g = (function(t) {
                function e() {
                    return (
                        Object(r['a'])(this, e),
                        Object(l['a'])(
                            this,
                            Object(s['a'])(e).apply(this, arguments)
                        )
                    )
                }
                return (
                    Object(c['a'])(e, [
                        {
                            key: 'mounted',
                            value: function() {
                                var t = this,
                                    e = this.$refs.code
                                e &&
                                    ((e.textContent = this.codeString[1]
                                        ? this.codeString[1].replace(
                                              /#{{(\w+)}}/g,
                                              function(e, i) {
                                                  return t.codeString[0]
                                              }
                                          )
                                        : this.codeString[0]),
                                    f.highlightBlock(e))
                            }
                        },
                        {
                            key: 'render',
                            value: function() {
                                var t = arguments[0]
                                if (this.codeString) {
                                    var e = this.datas || [],
                                        i = (function(t) {
                                            function i() {
                                                var t
                                                return (
                                                    Object(r['a'])(this, i),
                                                    (t = Object(l['a'])(
                                                        this,
                                                        Object(s['a'])(i).apply(
                                                            this,
                                                            arguments
                                                        )
                                                    )),
                                                    (t.datas = e),
                                                    t
                                                )
                                            }
                                            return Object(a['a'])(i, t), i
                                        })(h['c'])
                                    return (
                                        (i = d['a'](
                                            [
                                                Object(h['a'])({
                                                    name: 'PreviewBlock',
                                                    template: '<div>'.concat(
                                                        this.codeString[0],
                                                        '</div>'
                                                    )
                                                })
                                            ],
                                            i
                                        )),
                                        t('div', { class: 'demo-block' }, [
                                            t(i),
                                            t('div', [
                                                t('pre', [
                                                    t('code', {
                                                        ref: 'code',
                                                        class: 'html'
                                                    })
                                                ])
                                            ])
                                        ])
                                    )
                                }
                                return t('div')
                            }
                        },
                        {
                            key: 'codeString',
                            get: function() {
                                return u[this.code]
                            }
                        }
                    ]),
                    Object(a['a'])(e, t),
                    e
                )
            })(h['c'])
        d['a'](
            [Object(h['b'])(), d['b']('design:type', String)],
            g.prototype,
            'code',
            void 0
        ),
            d['a'](
                [Object(h['b'])(), d['b']('design:type', Array)],
                g.prototype,
                'datas',
                void 0
            ),
            (g = d['a']([Object(h['a'])({ components: {} })], g))
        var m = g,
            v = (function(t) {
                function e() {
                    var t
                    return (
                        Object(r['a'])(this, e),
                        (t = Object(l['a'])(
                            this,
                            Object(s['a'])(e).apply(this, arguments)
                        )),
                        (t.colors =
                            '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'),
                        t
                    )
                }
                return (
                    Object(c['a'])(e, [
                        {
                            key: 'mounted',
                            value: function() {
                                setTimeout(function() {
                                    i.e(0)
                                        .then(i.bind(null, 'UNEA'))
                                        .then(function() {
                                            console.log('Async icons loaded')
                                        })
                                }, 3e3)
                            }
                        },
                        {
                            key: 'render',
                            value: function() {
                                var t = arguments[0]
                                return t('div', { attrs: { id: 'app' } }, [
                                    t(
                                        'svg',
                                        {
                                            style:
                                                'width: 0; position: absolute; opacity: 0'
                                        },
                                        [
                                            t('defs', [
                                                t(
                                                    'linearGradient',
                                                    {
                                                        attrs: {
                                                            id: 'gradient-1',
                                                            x1: '0',
                                                            y1: '0',
                                                            x2: '0',
                                                            y2: '1'
                                                        }
                                                    },
                                                    [
                                                        t('stop', {
                                                            attrs: {
                                                                offset: '5%',
                                                                'stop-color':
                                                                    '#57f0c2'
                                                            }
                                                        }),
                                                        t('stop', {
                                                            attrs: {
                                                                offset: '95%',
                                                                'stop-color':
                                                                    '#147d58'
                                                            }
                                                        })
                                                    ]
                                                ),
                                                t(
                                                    'linearGradient',
                                                    {
                                                        attrs: {
                                                            id: 'gradient-2',
                                                            x1: '0',
                                                            y1: '0',
                                                            x2: '0',
                                                            y2: '1'
                                                        }
                                                    },
                                                    [
                                                        t('stop', {
                                                            attrs: {
                                                                offset: '5%',
                                                                'stop-color':
                                                                    '#7295c2'
                                                            }
                                                        }),
                                                        t('stop', {
                                                            attrs: {
                                                                offset: '95%',
                                                                'stop-color':
                                                                    '#252e3d'
                                                            }
                                                        })
                                                    ]
                                                )
                                            ])
                                        ]
                                    ),
                                    t('p', [
                                        t('icon', {
                                            class: 'vue-logo',
                                            attrs: {
                                                name: 'vue',
                                                width: '15rem',
                                                height: '15rem'
                                            }
                                        })
                                    ]),
                                    t('h1', ['Vue Svg Icon']),
                                    t('p', [
                                        t(
                                            'a',
                                            {
                                                class: 'github-button',
                                                attrs: {
                                                    href:
                                                        'https://github.com/MMF-FE/vue-svgicon',
                                                    'data-size': 'large',
                                                    'data-show-count': 'true',
                                                    'aria-label':
                                                        'Star MMF-FE/vue-svgicon on GitHub'
                                                }
                                            },
                                            ['Star']
                                        )
                                    ]),
                                    t('div', [
                                        t('h2', ['Color (defalt: inherit)']),
                                        t('p', { style: 'color: darkorange' }, [
                                            t('demo-block', {
                                                attrs: { code: 'color' }
                                            })
                                        ]),
                                        t('h2', [
                                            'Multi Color (define by path/shape order)'
                                        ]),
                                        t('demo-block', {
                                            attrs: { code: 'multi-color' }
                                        }),
                                        t('demo-block', {
                                            attrs: {
                                                code: 'multi-color2',
                                                datas: [this.colors]
                                            }
                                        }),
                                        t('h2', ['Use original colors']),
                                        t('demo-block', {
                                            attrs: { code: 'original-color' }
                                        }),
                                        t('h2', ['Gradient']),
                                        t('demo-block', {
                                            attrs: { code: 'gradient' }
                                        }),
                                        t('h2', ['Size (defalt unit: px)']),
                                        t('demo-block', {
                                            attrs: { code: 'size' }
                                        }),
                                        t('h2', ['Fill (default: fill)']),
                                        t('demo-block', {
                                            attrs: { code: 'fill' }
                                        }),
                                        t('h2', [
                                            'r-color (reverse fill property)'
                                        ]),
                                        t('demo-block', {
                                            attrs: { code: 'r-color' }
                                        }),
                                        t('div', [
                                            'circle is fill, path is stroke'
                                        ]),
                                        t('h2', ['Direction (default: right)']),
                                        t('demo-block', {
                                            attrs: { code: 'dir' }
                                        }),
                                        t('h2', ['Namespace']),
                                        t('demo-block', {
                                            attrs: { code: 'namespace' }
                                        }),
                                        t('h2', ['Unique Id']),
                                        t('demo-block', {
                                            attrs: { code: 'uid' }
                                        }),
                                        t('h2', ['Async']),
                                        t('demo-block', {
                                            attrs: { code: 'async' }
                                        })
                                    ])
                                ])
                            }
                        }
                    ]),
                    Object(a['a'])(e, t),
                    e
                )
            })(h['c'])
        v = d['a']([Object(h['a'])({ components: { DemoBlock: m } })], v)
        var w = v,
            b = i('ADLm')
        b['a'].register({
            arrow: {
                width: 4,
                height: 7,
                viewBox: '0 0 4 7',
                data:
                    '<path pid="0" d="M.702 1.006C.51.813.354.888.354 1.154v5.08c0 .275.163.334.348.149l2.34-2.34a.5.5 0 0 0 0-.697l-2.34-2.34z" _fill="#D8D8D8" fill-rule="evenodd"/>'
            }
        }),
            b['a'].register({
                check: {
                    width: 32,
                    height: 31,
                    viewBox: '0 0 32 31',
                    data:
                        '<g transform="translate(.953)" font-family="\'Helvetica Neue\'" _fill="none" fill-rule="evenodd"><ellipse pid="0" _fill="#8BDC84" cx="15.447" cy="15.5" rx="15.447" ry="15.5"/><path pid="1" _stroke="#FFF" stroke-width="2.52" stroke-linecap="round" stroke-linejoin="round" d="M21.925 12l-9.717 8-3.239-2.857"/></g>'
                }
            }),
            b['a'].register({
                clock: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    data:
                        '<g _fill="none" fill-rule="evenodd"><circle pid="0" _fill="#8A99B2" cx="8" cy="8" r="8"/><g _stroke="#1C2330" stroke-linecap="round"><path pid="1" d="M7.257 3.625V9.04M7.262 9.128h4.782"/></g></g>'
                }
            }),
            b['a'].register({
                colorwheel: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 800 800',
                    data:
                        '<path pid="0" d="M679.682 120.407c68.089 68.584 105.462 148.798 114.209 245.015L678.59 375.461l-.003-.029-41.446 3.607c-5.168-55.563-29.522-107.846-68.584-147.507l111.125-111.125z" _fill="#FBAD20"/><path pid="1" _fill="#F5EB13" d="M793.991 365.323c8.051 96.316-14.811 181.798-69.977 261.119l-48.196-33.714-.011.017-80.811-56.558c31.609-45.722 46.518-101.385 42.145-157.148l77.93-6.783 78.92-6.933z"/><path pid="2" d="M594.996 536.088l34.143 23.926.05-.07 94.825 66.398c-55.761 78.921-128.222 129.714-222.75 155.459l-30.018-112.122.082-.024-10.717-40.231c41.548-11.332 78.623-32.801 108.342-62.523a239.826 239.826 0 0 0 26.043-30.813z" _fill="#B8D433"/><path pid="3" d="M299.784 614.911c50.493 23.16 107.847 28.13 160.827 14.612l25.544 95.421-.225.057 15.234 56.898c-92.241 24.155-180.407 16.402-268.076-24.054l24.891-53.358-.041-.019 41.846-89.557z" _fill="#6BC9C6"/><path pid="4" d="M184.979 500.106c11.829 25.048 27.832 47.612 47.513 67.392 19.681 19.681 42.344 35.684 67.293 47.513l-17.495 37.571-.486 1.042-23.767 51.043-.034-.016-24.815 53.194c-44.133-20.773-81.109-46.319-112.916-78.227-31.808-31.806-57.453-68.783-78.227-112.915L147.308 517.6l.019.038 37.652-17.532z" _fill="#058BC5"/><path pid="5" d="M18.487 297.435l112.221 30.017-.028.114 40.085 10.721c-13.916 53.972-8.945 111.326 14.214 161.819l-89.656 41.847-.011-.024-53.267 24.873C1.591 479.034-6.163 390.968 18.487 297.435z" _fill="#34469D"/><path pid="6" d="M173.548 76.175l33.78 48.219.016-.012 26.477 37.831 6.224 8.886-.003.003 23.86 34.091c-10.934 7.752-21.272 16.599-30.814 26.043-29.719 29.719-51.19 66.794-62.224 107.25l-94.89-25.477-57.487-15.376c25.347-93.236 76.14-165.696 155.061-221.458z" _fill="#7E4D9F"/><path pid="7" d="M390.235 4.495c14.799-.376 29.582.415 44.333 1.504l-5.151 58.639.082.006-8.549 98.205c-55.762-4.473-111.425 10.537-157.148 42.145l-23.891-34.137-.065.043-66.397-94.924c54.007-37.87 116.665-62.546 182.379-69.404 15.12-1.577 19.187-1.485 34.407-2.077z" _fill="#C63D96"/><path pid="8" d="M568.358 231.433c-39.66-39.162-91.944-63.416-147.607-68.584l8.648-98.205.016.002 5.153-58.647c96.217 8.847 176.431 46.22 245.015 114.209L568.358 231.433z" _fill="#ED1944"/>'
                }
            }),
            b['a'].register({
                mask: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 200 200',
                    data:
                        '<defs><clipPath id="svgicon-mask-a"><path pid="0" d="M0 0h200v100H0z"/></clipPath></defs><circle pid="1" cx="100" cy="100" r="100" clip-path="url(#svgicon-mask-a)"/>'
                }
            }),
            b['a'].register({
                'sora/arrow': {
                    width: 200,
                    height: 200,
                    viewBox: '0 0 1024 1024',
                    data:
                        '<defs/><path pid="0" d="M165.39 594.774h287.782v263.292l430.622-359.694-430.62-359.706v230.242H165.39v225.866z"/>'
                }
            }),
            b['a'].register({
                'sora/fit/arrow': {
                    width: 254.688,
                    height: 200,
                    viewBox: '0 0 1304 1024',
                    data:
                        '<defs/><path pid="0" d="M552.588 0h88.622c137.03 128.838 268.102 264.378 401.408 396.94v20.852C913.036 557.056 778.985 691.107 638.976 819.2h-87.878C654.615 689.617 764.09 564.503 881.012 446.836c-293.422 1.49-587.59-.744-881.012.745v-75.217c293.423 0 586.845-1.49 880.268 0C763.345 255.44 655.36 129.583 552.588 0z"/>'
                }
            }),
            b['a'].register({
                'sora/fit/mask': {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 200 200',
                    data:
                        '<defs><linearGradient id="svgicon-sora-fit-mask-a"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="svgicon-sora-fit-mask-b"><path pid="0" _fill="url(#svgicon-sora-fit-mask-a)" d="M0 0h200v200H0z"/></mask></defs><path pid="1" _fill="green" d="M0 0h200v200H0z"/><path pid="2" _fill="red" mask="url(#svgicon-sora-fit-mask-b)" d="M0 0h200v200H0z"/>'
                }
            }),
            b['a'].register({
                vue: {
                    width: 2500,
                    height: 2158,
                    viewBox: '0 0 256 221',
                    data:
                        '<path pid="0" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" _fill="#41B883"/><path pid="1" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" _fill="#35495E"/>'
                }
            })
        i('sR2V')
        ;(n.a.config.productionTip = !1),
            n.a.component('icon', b['a']),
            new n.a({
                render: function(t) {
                    return t(w)
                }
            }).$mount('#app')
    }
})
//# sourceMappingURL=app.90baf637.js.map
