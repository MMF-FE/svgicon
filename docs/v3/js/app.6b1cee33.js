;(function (t) {
    function e(e) {
        for (
            var n, a, c = e[0], l = e[1], s = e[2], d = 0, f = [];
            d < c.length;
            d++
        )
            (a = c[d]),
                Object.prototype.hasOwnProperty.call(o, a) &&
                    o[a] &&
                    f.push(o[a][0]),
                (o[a] = 0)
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n])
        h && h(e)
        while (f.length) f.shift()()
        return r.push.apply(r, s || []), i()
    }
    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], n = !0, a = 1; a < i.length; a++) {
                var l = i[a]
                0 !== o[l] && (n = !1)
            }
            n && (r.splice(e--, 1), (t = c((c.s = i[0]))))
        }
        return t
    }
    var n = {},
        o = { app: 0 },
        r = []
    function a(t) {
        return (
            c.p +
            'js/' +
            ({}[t] || t) +
            '.' +
            { 'chunk-2d0c791e': '80cdeabd' }[t] +
            '.js'
        )
    }
    function c(e) {
        if (n[e]) return n[e].exports
        var i = (n[e] = { i: e, l: !1, exports: {} })
        return t[e].call(i.exports, i, i.exports, c), (i.l = !0), i.exports
    }
    ;(c.e = function (t) {
        var e = [],
            i = o[t]
        if (0 !== i)
            if (i) e.push(i[2])
            else {
                var n = new Promise(function (e, n) {
                    i = o[t] = [e, n]
                })
                e.push((i[2] = n))
                var r,
                    l = document.createElement('script')
                ;(l.charset = 'utf-8'),
                    (l.timeout = 120),
                    c.nc && l.setAttribute('nonce', c.nc),
                    (l.src = a(t))
                var s = new Error()
                r = function (e) {
                    ;(l.onerror = l.onload = null), clearTimeout(d)
                    var i = o[t]
                    if (0 !== i) {
                        if (i) {
                            var n =
                                    e &&
                                    ('load' === e.type ? 'missing' : e.type),
                                r = e && e.target && e.target.src
                            ;(s.message =
                                'Loading chunk ' +
                                t +
                                ' failed.\n(' +
                                n +
                                ': ' +
                                r +
                                ')'),
                                (s.name = 'ChunkLoadError'),
                                (s.type = n),
                                (s.request = r),
                                i[1](s)
                        }
                        o[t] = void 0
                    }
                }
                var d = setTimeout(function () {
                    r({ type: 'timeout', target: l })
                }, 12e4)
                ;(l.onerror = l.onload = r), document.head.appendChild(l)
            }
        return Promise.all(e)
    }),
        (c.m = t),
        (c.c = n),
        (c.d = function (t, e, i) {
            c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
        }),
        (c.r = function (t) {
            'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (c.t = function (t, e) {
            if ((1 & e && (t = c(t)), 8 & e)) return t
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t
            var i = Object.create(null)
            if (
                (c.r(i),
                Object.defineProperty(i, 'default', {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && 'string' != typeof t)
            )
                for (var n in t)
                    c.d(
                        i,
                        n,
                        function (e) {
                            return t[e]
                        }.bind(null, n)
                    )
            return i
        }),
        (c.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t['default']
                      }
                    : function () {
                          return t
                      }
            return c.d(e, 'a', e), e
        }),
        (c.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (c.p = './'),
        (c.oe = function (t) {
            throw (console.error(t), t)
        })
    var l = (window['webpackJsonp'] = window['webpackJsonp'] || []),
        s = l.push.bind(l)
    ;(l.push = e), (l = l.slice())
    for (var d = 0; d < l.length; d++) e(l[d])
    var h = s
    r.push([0, 'chunk-vendors']), i()
})({
    0: function (t, e, i) {
        t.exports = i('42a0')
    },
    '0032': function (t, e, i) {
        'use strict'
        var n = function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e
                return i('svg', {
                    class: t.clazz,
                    style: t.style,
                    attrs: { version: '1.1', viewBox: t.box },
                    domProps: { innerHTML: t._s(t.path) },
                    on: { click: t.onClick },
                })
            },
            o = [],
            r = (i('a481'), i('c5f6'), i('28a5'), i('7f7f'), i('6c7b'), {}),
            a = [],
            c = '',
            l = 'svg',
            s = !1,
            d = !1,
            h = {
                data: function () {
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
                        default: function () {
                            return !s
                        },
                    },
                    color: String,
                    original: {
                        type: Boolean,
                        default: function () {
                            return d
                        },
                    },
                    title: String,
                },
                computed: {
                    clazz: function () {
                        var t = ''.concat(l, '-icon')
                        return (
                            this.fill && (t += ' '.concat(l, '-fill')),
                            this.dir &&
                                (t += ' '.concat(l, '-').concat(this.dir)),
                            t
                        )
                    },
                    iconName: function () {
                        return this.name || this.icon
                    },
                    iconData: function () {
                        var t = r[this.iconName]
                        return t || this.loaded ? t : null
                    },
                    colors: function () {
                        return this.color ? this.color.split(' ') : []
                    },
                    path: function () {
                        var t = ''
                        return (
                            this.iconData
                                ? ((t = this.iconData.data),
                                  (t = this.setTitle(t)),
                                  this.original &&
                                      (t = this.addOriginalColor(t)),
                                  this.colors.length > 0 &&
                                      (t = this.addColor(t)))
                                : a.push({
                                      name: this.iconName,
                                      component: this,
                                  }),
                            this.getValidPathData(t)
                        )
                    },
                    box: function () {
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
                    style: function () {
                        var t,
                            e,
                            i = /^\d+$/,
                            n = Number(this.scale)
                        !isNaN(n) && this.iconData
                            ? ((t = Number(this.iconData.width) * n + 'px'),
                              (e = Number(this.iconData.height) * n + 'px'))
                            : ((t = i.test(this.width)
                                  ? this.width + 'px'
                                  : this.width || c),
                              (e = i.test(this.height)
                                  ? this.height + 'px'
                                  : this.height || c))
                        var o = {}
                        return t && (o.width = t), e && (o.height = e), o
                    },
                },
                created: function () {
                    r[this.iconName] && (this.loaded = !0)
                },
                methods: {
                    addColor: function (t) {
                        var e = this,
                            i = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,
                            n = 0
                        return t.replace(i, function (t) {
                            var i =
                                    e.colors[n++] ||
                                    e.colors[e.colors.length - 1],
                                o = e.fill
                            if (i && '_' === i) return t
                            i &&
                                0 === i.indexOf('r-') &&
                                ((o = !o), (i = i.substr(2)))
                            var r = o ? 'fill' : 'stroke',
                                a = o ? 'stroke' : 'fill'
                            return (
                                t +
                                ''
                                    .concat(r, '="')
                                    .concat(i, '" ')
                                    .concat(a, '="none" ')
                            )
                        })
                    },
                    addOriginalColor: function (t) {
                        var e = /_fill="|_stroke="/gi
                        return t.replace(e, function (t) {
                            return t && t.slice(1)
                        })
                    },
                    getValidPathData: function (t) {
                        if (this.original && this.colors.length > 0) {
                            var e = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi
                            t = t.replace(e, function (t, e, i, n, o) {
                                return '<'
                                    .concat(e)
                                    .concat(i)
                                    .concat(n, '_')
                                    .concat(o)
                            })
                        }
                        return t
                    },
                    setTitle: function (t) {
                        if (this.title) {
                            var e = this.title
                                .replace(/\</gi, '&lt;')
                                .replace(/>/gi, '&gt;')
                                .replace(/&/g, '&amp;')
                            return '<title>'.concat(e, '</title>') + t
                        }
                        return t
                    },
                    onClick: function (t) {
                        this.$emit('click', t)
                    },
                },
                install: function (t) {
                    var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                        i = e.tagName || 'svgicon'
                    e.classPrefix && (l = e.classPrefix),
                        (s = !!e.isStroke),
                        (d = !!e.isOriginalDefault),
                        e.defaultWidth && (c = e.defaultWidth),
                        e.defaultHeight && e.defaultHeight,
                        t.component(i, this)
                },
                register: function (t) {
                    var e = function (e) {
                        r[e] || (r[e] = t[e]),
                            (a = a.filter(function (t, i) {
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
                icons: r,
            },
            f = h,
            u = i('2877'),
            p = Object(u['a'])(f, n, o, !1, null, null, null)
        e['a'] = p.exports
    },
    '07c6': function (t, e, i) {
        'use strict'
        ;(function (t) {
            i('7f7f'), i('a481'), i('ac4d'), i('8a81')
            var e = i('7618')
            !(function (n, o) {
                'object' ==
                    ('undefined' === typeof exports
                        ? 'undefined'
                        : Object(e['a'])(exports)) &&
                'object' == Object(e['a'])(t)
                    ? (t.exports = o())
                    : 'function' == typeof define && i('3c35')
                    ? define([], o)
                    : 'object' ==
                      ('undefined' === typeof exports
                          ? 'undefined'
                          : Object(e['a'])(exports))
                    ? (exports.VueSvgIconPolyfill = o())
                    : (n.VueSvgIconPolyfill = o())
            })(window, function () {
                return (function (t) {
                    var i = {}
                    function n(e) {
                        if (i[e]) return i[e].exports
                        var o = (i[e] = { i: e, l: !1, exports: {} })
                        return (
                            t[e].call(o.exports, o, o.exports, n),
                            (o.l = !0),
                            o.exports
                        )
                    }
                    return (
                        (n.m = t),
                        (n.c = i),
                        (n.d = function (t, e, i) {
                            n.o(t, e) ||
                                Object.defineProperty(t, e, {
                                    enumerable: !0,
                                    get: i,
                                })
                        }),
                        (n.r = function (t) {
                            'undefined' != typeof Symbol &&
                                Symbol.toStringTag &&
                                Object.defineProperty(t, Symbol.toStringTag, {
                                    value: 'Module',
                                }),
                                Object.defineProperty(t, '__esModule', {
                                    value: !0,
                                })
                        }),
                        (n.t = function (t, i) {
                            if ((1 & i && (t = n(t)), 8 & i)) return t
                            if (
                                4 & i &&
                                'object' == Object(e['a'])(t) &&
                                t &&
                                t.__esModule
                            )
                                return t
                            var o = Object.create(null)
                            if (
                                (n.r(o),
                                Object.defineProperty(o, 'default', {
                                    enumerable: !0,
                                    value: t,
                                }),
                                2 & i && 'string' != typeof t)
                            )
                                for (var r in t)
                                    n.d(
                                        o,
                                        r,
                                        function (e) {
                                            return t[e]
                                        }.bind(null, r)
                                    )
                            return o
                        }),
                        (n.n = function (t) {
                            var e =
                                t && t.__esModule
                                    ? function () {
                                          return t.default
                                      }
                                    : function () {
                                          return t
                                      }
                            return n.d(e, 'a', e), e
                        }),
                        (n.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }),
                        (n.p = ''),
                        n((n.s = 0))
                    )
                })([
                    function (t, e, i) {
                        var n = i(1)
                        'string' !=
                            typeof window.document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'svg'
                            ).innerHTML && n()
                    },
                    function (t, e) {
                        t.exports = function () {
                            var t = function t(e, i) {
                                var n = e.nodeType
                                if (3 == n)
                                    i.push(
                                        e.textContent
                                            .replace(/&/, '&amp;')
                                            .replace(/</, '&lt;')
                                            .replace('>', '&gt;')
                                    )
                                else if (1 == n) {
                                    if (
                                        (i.push('<', e.tagName),
                                        e.hasAttributes())
                                    )
                                        for (
                                            var o = e.attributes,
                                                r = 0,
                                                a = o.length;
                                            r < a;
                                            ++r
                                        ) {
                                            var c = o.item(r)
                                            i.push(
                                                ' ',
                                                c.name,
                                                "='",
                                                c.value,
                                                "'"
                                            )
                                        }
                                    if (e.hasChildNodes()) {
                                        i.push('>')
                                        var l = e.childNodes
                                        for (r = 0, a = l.length; r < a; ++r)
                                            t(l.item(r), i)
                                        i.push('</', e.tagName, '>')
                                    } else i.push('/>')
                                } else {
                                    if (8 != n)
                                        throw (
                                            'Error serializing XML. Unhandled node of type: ' +
                                            n
                                        )
                                    i.push('\x3c!--', e.nodeValue, '--\x3e')
                                }
                            }
                            Object.defineProperty(
                                SVGElement.prototype,
                                'innerHTML',
                                {
                                    get: function () {
                                        for (
                                            var e = [], i = this.firstChild;
                                            i;

                                        )
                                            t(i, e), (i = i.nextSibling)
                                        return e.join('')
                                    },
                                    set: function (t) {
                                        for (; this.firstChild; )
                                            this.removeChild(this.firstChild)
                                        try {
                                            var e = new DOMParser()
                                            e.async = !1
                                            for (
                                                var i =
                                                        "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
                                                        t +
                                                        '</svg>',
                                                    n = e.parseFromString(
                                                        i,
                                                        'text/xml'
                                                    ).documentElement
                                                        .firstChild;
                                                n;

                                            )
                                                this.appendChild(
                                                    this.ownerDocument.importNode(
                                                        n,
                                                        !0
                                                    )
                                                ),
                                                    (n = n.nextSibling)
                                        } catch (t) {
                                            throw (
                                                (console.error(t),
                                                new Error(
                                                    'Error parsing XML string'
                                                ))
                                            )
                                        }
                                    },
                                }
                            ),
                                Object.defineProperty(
                                    SVGElement.prototype,
                                    'innerSVG',
                                    {
                                        get: function () {
                                            return this.innerHTML
                                        },
                                        set: function (t) {
                                            this.innerHTML = t
                                        },
                                    }
                                )
                        }
                    },
                ])
            })
        }.call(this, i('dd40')(t)))
    },
    '42a0': function (t, e, i) {
        'use strict'
        i.r(e)
        i('cadf'), i('551c'), i('f751'), i('097d'), i('07c6')
        var n = i('5ee5'),
            o = i.n(n),
            r = (i('6b54'), i('2397'), i('d225')),
            a = i('b0b4'),
            c = i('4e2b'),
            l = i('308d'),
            s = i('6bb5'),
            d = i('9ab4'),
            h = i('60a3'),
            f =
                (i('a481'),
                {
                    dir: [
                        '\n      <icon name="arrow" width="50" height="50" dir="left" title="left"></icon>\n      <icon name="arrow" width="50" height="50" dir="up" title="up"></icon>\n      <icon name="arrow" width="50" height="50" title="right"></icon>\n      <icon name="arrow" width="50" height="50" dir="down" title="down"></icon>\n      ',
                    ],
                    fill: [
                        '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" :fill="false"></icon>\n      ',
                    ],
                    'r-color': [
                        '\n        <icon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>\n        <icon name="clock" color="#8A99B2 r-var(--color-primary)" width="100" height="100"></icon>\n      ',
                    ],
                    color: [
                        '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" color="red"></icon>\n      <icon name="arrow" width="50" height="50" color="green"></icon>\n      <icon name="arrow" width="50" height="50" color="blue"></icon>\n      ',
                    ],
                    size: [
                        '\n      <icon name="arrow"></icon>\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" height="50"></icon>\n      <icon name="arrow" scale="15"></icon>\n      <icon name="arrow" width="10em" height="10em"></icon>\n      ',
                    ],
                    'multi-color': [
                        '<icon name="check" :fill="false" width="100" height="100" color="r-#42b983 white"></icon>',
                    ],
                    'multi-color2': [
                        '<icon name="colorwheel" width="200" height="200" :color="datas[0]"></icon>',
                        '\n      <template>\n        <icon name="colorwheel" width="200" height="200" :color="colors"></icon>\n      </template>\n\n      <script>\n        export default {\n          data () {\n            return {\n              colors: \'#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944\'\n            }\n          }\n        }\n      </script>\n      ',
                    ],
                    'original-color': [
                        '\n        <icon name="colorwheel" width="100" height="100" original></icon>\n        \x3c!-- overwrite original color --\x3e\n        <icon name="colorwheel" width="100" height="100" original color="_ black _ black _"></icon>\n        <icon name="colorwheel" width="100" height="100" original color="_ r-black _ r-red _"></icon>\n        <icon name="gift" width="100" height="100" original></icon>\n      ',
                    ],
                    gradient: [
                        '<icon name="vue" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></icon>',
                        '\n      <template>\n        <svg style="width: 0; position: absolute; opacity: 0">\n          <defs>\n              <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#57f0c2"/>\n                  <stop offset="95%" stop-color="#147d58"/>\n              </linearGradient>\n              <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#7295c2"/>\n                  <stop offset="95%" stop-color="#252e3d"/>\n              </linearGradient>\n          </defs>\n        </svg>\n\n        #{{tpl}}\n      </template>\n      ',
                    ],
                    namespace: [
                        '\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="sora/arrow" width="50" height="50"></icon>\n      <icon name="sora/fit/arrow" width="50" height="50"></icon>\n      ',
                    ],
                    uid: [
                        '\n      <icon name="mask" width="100" height="100"></icon>\n      <icon name="sora/fit/mask" width="100" height="100" color="url(#svgicon_sora_fit_mask_a) red green" ></icon>\n      ',
                    ],
                    async: [
                        '\n        <icon name="download" width="40" height="40" color="red" ></icon>\n        <icon name="download" width="40" height="40" color="green" ></icon>\n        <icon name="download" width="40" height="40" color="blue" ></icon>\n        <icon name="good" width="40" height="40" class="good"></icon>\n      ',
                        "\n      <template> #{{tpl}}</template>\n\n      <script>\n        export default {\n          mounted () {\n            require.ensure([], () => {\n              require('icons-async')\n            }, 'async-icons')\n          }\n        }\n      </script>\n      ",
                    ],
                }),
            u = i('a70e')
        u['registerLanguage']('javascript', i('4dd1')),
            u['registerLanguage']('xml', i('8dcb'))
        var p = u
        function g(t) {
            var e = m()
            return function () {
                var i,
                    n = Object(s['a'])(t)
                if (e) {
                    var o = Object(s['a'])(this).constructor
                    i = Reflect.construct(n, arguments, o)
                } else i = n.apply(this, arguments)
                return Object(l['a'])(this, i)
            }
        }
        function m() {
            if ('undefined' === typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' === typeof Proxy) return !0
            try {
                return (
                    Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                    ),
                    !0
                )
            } catch (t) {
                return !1
            }
        }
        var v = (function (t) {
            Object(c['a'])(i, t)
            var e = g(i)
            function i() {
                return Object(r['a'])(this, i), e.apply(this, arguments)
            }
            return (
                Object(a['a'])(i, [
                    {
                        key: 'mounted',
                        value: function () {
                            var t = this,
                                e = this.$refs.code
                            e &&
                                ((e.textContent = this.codeString[1]
                                    ? this.codeString[1].replace(
                                          /#{{(\w+)}}/g,
                                          function (e, i) {
                                              return t.codeString[0]
                                          }
                                      )
                                    : this.codeString[0]),
                                p.highlightBlock(e))
                        },
                    },
                    {
                        key: 'render',
                        value: function () {
                            var t = arguments[0]
                            if (this.codeString) {
                                var e = this.datas || [],
                                    i = (function (t) {
                                        Object(c['a'])(n, t)
                                        var i = g(n)
                                        function n() {
                                            var t
                                            return (
                                                Object(r['a'])(this, n),
                                                (t = i.apply(this, arguments)),
                                                (t.datas = e),
                                                t
                                            )
                                        }
                                        return n
                                    })(h['c'])
                                return (
                                    (i = Object(d['a'])(
                                        [
                                            Object(h['a'])({
                                                name: 'PreviewBlock',
                                                template: '<div>'.concat(
                                                    this.codeString[0],
                                                    '</div>'
                                                ),
                                            }),
                                        ],
                                        i
                                    )),
                                    t('div', { class: 'demo-block' }, [
                                        t(i),
                                        t('div', [
                                            t('pre', [
                                                t('code', {
                                                    ref: 'code',
                                                    class: 'html',
                                                }),
                                            ]),
                                        ]),
                                    ])
                                )
                            }
                            return t('div')
                        },
                    },
                    {
                        key: 'codeString',
                        get: function () {
                            return f[this.code]
                        },
                    },
                ]),
                i
            )
        })(h['c'])
        Object(d['a'])(
            [Object(h['b'])(), Object(d['b'])('design:type', String)],
            v.prototype,
            'code',
            void 0
        ),
            Object(d['a'])(
                [Object(h['b'])(), Object(d['b'])('design:type', Array)],
                v.prototype,
                'datas',
                void 0
            ),
            (v = Object(d['a'])([Object(h['a'])({ components: {} })], v))
        var w = v
        function b(t) {
            var e = y()
            return function () {
                var i,
                    n = Object(s['a'])(t)
                if (e) {
                    var o = Object(s['a'])(this).constructor
                    i = Reflect.construct(n, arguments, o)
                } else i = n.apply(this, arguments)
                return Object(l['a'])(this, i)
            }
        }
        function y() {
            if ('undefined' === typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' === typeof Proxy) return !0
            try {
                return (
                    Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                    ),
                    !0
                )
            } catch (t) {
                return !1
            }
        }
        var _ = (function (t) {
            Object(c['a'])(n, t)
            var e = b(n)
            function n() {
                var t
                return (
                    Object(r['a'])(this, n),
                    (t = e.apply(this, arguments)),
                    (t.colors =
                        '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'),
                    t
                )
            }
            return (
                Object(a['a'])(n, [
                    {
                        key: 'mounted',
                        value: function () {
                            setTimeout(function () {
                                i.e('chunk-2d0c791e')
                                    .then(i.bind(null, '50d1'))
                                    .then(function () {
                                        console.log('Async icons loaded')
                                    })
                            }, 3e3)
                        },
                    },
                    {
                        key: 'render',
                        value: function () {
                            var t = arguments[0]
                            return t('div', { attrs: { id: 'app' } }, [
                                t('p', [
                                    t('icon', {
                                        class: 'vue-logo',
                                        attrs: {
                                            name: 'vue',
                                            width: '15rem',
                                            height: '15rem',
                                        },
                                    }),
                                ]),
                                t('h1', ['Vue Svg Icon']),
                                t('p', [
                                    t(
                                        'a',
                                        {
                                            class: 'github-button',
                                            attrs: {
                                                href:
                                                    'https://github.com/MMF-FE/svgicon',
                                                'data-size': 'large',
                                                'data-show-count': 'true',
                                                'aria-label':
                                                    'Star MMF-FE/svgicon on GitHub',
                                            },
                                        },
                                        ['Star']
                                    ),
                                ]),
                                t('div', [
                                    t('h2', ['Color (defalt: inherit)']),
                                    t('p', { style: 'color: darkorange' }, [
                                        t('demo-block', {
                                            attrs: { code: 'color' },
                                        }),
                                    ]),
                                    t('h2', [
                                        'Multi Color (define by path/shape order)',
                                    ]),
                                    t('demo-block', {
                                        attrs: { code: 'multi-color' },
                                    }),
                                    t('demo-block', {
                                        attrs: {
                                            code: 'multi-color2',
                                            datas: [this.colors],
                                        },
                                    }),
                                    t('h2', ['Use original colors']),
                                    t('demo-block', {
                                        attrs: { code: 'original-color' },
                                    }),
                                    t('h2', ['Gradient']),
                                    t('demo-block', {
                                        attrs: { code: 'gradient' },
                                    }),
                                    t('h2', ['Size (defalt unit: px)']),
                                    t('demo-block', {
                                        attrs: { code: 'size' },
                                    }),
                                    t('h2', ['Fill (default: fill)']),
                                    t('demo-block', {
                                        attrs: { code: 'fill' },
                                    }),
                                    t('h2', [
                                        'r-color (reverse fill property)',
                                    ]),
                                    t('demo-block', {
                                        attrs: { code: 'r-color' },
                                    }),
                                    t('div', [
                                        'circle is fill, path is stroke',
                                    ]),
                                    t('h2', ['Direction (default: right)']),
                                    t('demo-block', { attrs: { code: 'dir' } }),
                                    t('h2', ['Namespace']),
                                    t('demo-block', {
                                        attrs: { code: 'namespace' },
                                    }),
                                    t('h2', ['Unique Id']),
                                    t('demo-block', { attrs: { code: 'uid' } }),
                                    t('h2', ['Async']),
                                    t('demo-block', {
                                        attrs: { code: 'async' },
                                    }),
                                ]),
                                t(
                                    'svg',
                                    {
                                        style:
                                            'width: 0; position: absolute; opacity: 0',
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
                                                        y2: '1',
                                                    },
                                                },
                                                [
                                                    t('stop', {
                                                        attrs: {
                                                            offset: '5%',
                                                            'stop-color':
                                                                '#57f0c2',
                                                        },
                                                    }),
                                                    t('stop', {
                                                        attrs: {
                                                            offset: '95%',
                                                            'stop-color':
                                                                '#147d58',
                                                        },
                                                    }),
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
                                                        y2: '1',
                                                    },
                                                },
                                                [
                                                    t('stop', {
                                                        attrs: {
                                                            offset: '5%',
                                                            'stop-color':
                                                                '#7295c2',
                                                        },
                                                    }),
                                                    t('stop', {
                                                        attrs: {
                                                            offset: '95%',
                                                            'stop-color':
                                                                '#252e3d',
                                                        },
                                                    }),
                                                ]
                                            ),
                                        ]),
                                    ]
                                ),
                            ])
                        },
                    },
                ]),
                n
            )
        })(h['c'])
        _ = Object(d['a'])(
            [Object(h['a'])({ components: { DemoBlock: w } })],
            _
        )
        var x = _,
            k = i('0032')
        k['a'].register({
            arrow: {
                width: 4,
                height: 7,
                viewBox: '0 0 4 7',
                data:
                    '<path pid="0" d="M.702 1.006C.51.813.354.888.354 1.154v5.08c0 .275.163.334.348.149l2.34-2.34a.5.5 0 0 0 0-.697l-2.34-2.34z" _fill="#D8D8D8" fill-rule="evenodd"/>',
            },
        }),
            k['a'].register({
                check: {
                    width: 32,
                    height: 31,
                    viewBox: '0 0 32 31',
                    data:
                        '<g transform="translate(.953)" font-family="\'Helvetica Neue\'" _fill="none" fill-rule="evenodd"><ellipse pid="0" _fill="#8BDC84" cx="15.447" cy="15.5" rx="15.447" ry="15.5"/><path pid="1" _stroke="#FFF" stroke-width="2.52" stroke-linecap="round" stroke-linejoin="round" d="M21.925 12l-9.717 8-3.239-2.857"/></g>',
                },
            }),
            k['a'].register({
                clock: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 16',
                    data:
                        '<g _fill="none" fill-rule="evenodd"><circle pid="0" _fill="#8A99B2" cx="8" cy="8" r="8"/><g _stroke="#1C2330" stroke-linecap="round"><path pid="1" d="M7.257 3.625V9.04M7.262 9.128h4.782"/></g></g>',
                },
            }),
            k['a'].register({
                colorwheel: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 800 800',
                    data:
                        '<path pid="0" d="M679.682 120.407c68.089 68.584 105.462 148.798 114.209 245.015L678.59 375.461l-.003-.029-41.446 3.607c-5.168-55.563-29.522-107.846-68.584-147.507l111.125-111.125z" _fill="#FBAD20"/><path pid="1" _fill="#F5EB13" d="M793.991 365.323c8.051 96.316-14.811 181.798-69.977 261.119l-48.196-33.714-.011.017-80.811-56.558c31.609-45.722 46.518-101.385 42.145-157.148l77.93-6.783 78.92-6.933z"/><path pid="2" d="M594.996 536.088l34.143 23.926.05-.07 94.825 66.398c-55.761 78.921-128.222 129.714-222.75 155.459l-30.018-112.122.082-.024-10.717-40.231c41.548-11.332 78.623-32.801 108.342-62.523a239.826 239.826 0 0 0 26.043-30.813z" _fill="#B8D433"/><path pid="3" d="M299.784 614.911c50.493 23.16 107.847 28.13 160.827 14.612l25.544 95.421-.225.057 15.234 56.898c-92.241 24.155-180.407 16.402-268.076-24.054l24.891-53.358-.041-.019 41.846-89.557z" _fill="#6BC9C6"/><path pid="4" d="M184.979 500.106c11.829 25.048 27.832 47.612 47.513 67.392 19.681 19.681 42.344 35.684 67.293 47.513l-17.495 37.571-.486 1.042-23.767 51.043-.034-.016-24.815 53.194c-44.133-20.773-81.109-46.319-112.916-78.227-31.808-31.806-57.453-68.783-78.227-112.915L147.308 517.6l.019.038 37.652-17.532z" _fill="#058BC5"/><path pid="5" d="M18.487 297.435l112.221 30.017-.028.114 40.085 10.721c-13.916 53.972-8.945 111.326 14.214 161.819l-89.656 41.847-.011-.024-53.267 24.873C1.591 479.034-6.163 390.968 18.487 297.435z" _fill="#34469D"/><path pid="6" d="M173.548 76.175l33.78 48.219.016-.012 26.477 37.831 6.224 8.886-.003.003 23.86 34.091c-10.934 7.752-21.272 16.599-30.814 26.043-29.719 29.719-51.19 66.794-62.224 107.25l-94.89-25.477-57.487-15.376c25.347-93.236 76.14-165.696 155.061-221.458z" _fill="#7E4D9F"/><path pid="7" d="M390.235 4.495c14.799-.376 29.582.415 44.333 1.504l-5.151 58.639.082.006-8.549 98.205c-55.762-4.473-111.425 10.537-157.148 42.145l-23.891-34.137-.065.043-66.397-94.924c54.007-37.87 116.665-62.546 182.379-69.404 15.12-1.577 19.187-1.485 34.407-2.077z" _fill="#C63D96"/><path pid="8" d="M568.358 231.433c-39.66-39.162-91.944-63.416-147.607-68.584l8.648-98.205.016.002 5.153-58.647c96.217 8.847 176.431 46.22 245.015 114.209L568.358 231.433z" _fill="#ED1944"/>',
                },
            }),
            k['a'].register({
                gift: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 16 17',
                    data:
                        '<path pid="0" d="M8.2 3.4L9.6 2 11 3.4l-.7.6.7.7.6-.6c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0L7.2 2.9l1 .5zM9.6 2L11 3.4l-.7.6.7.7.6-.6c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0L7.2 2.9l1 .4L9.6 2z" _fill="#ff3465"/><path pid="1" d="M8.8 4.8L5.9 2 4.5 3.4l.7.7-.7.7-.7-.7c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l3.5 3.5H8.8zm0 0L5.9 2 4.5 3.4l.7.7-.7.7-.7-.7c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l3.5 3.5H8.8zM2 10v6h12v-6H2zm0-1h12c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1z" _fill="#ff3465"/><path pid="2" d="M1 5v4h14V5H1zm0-1h14c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1z" _fill="#ff3465"/><linearGradient id="svgicon_gift_a" gradientUnits="userSpaceOnUse" x1="-216.25" y1="391.435" x2="-216.25" y2="392.435" gradientTransform="matrix(4 0 0 -11 873 4321.788)"><stop offset="0" stop-color="#ffd5e0"/><stop offset="1" stop-color="#ff3465"/></linearGradient><path pid="3" _fill="url(#svgicon_gift_a)" d="M6 5h4v11H6z"/>',
                },
            }),
            k['a'].register({
                mask: {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 200 200',
                    data:
                        '<defs><clipPath id="svgicon_mask_a"><path pid="0" d="M0 0h200v100H0z"/></clipPath></defs><circle pid="1" cx="100" cy="100" r="100" clip-path="url(#svgicon_mask_a)"/>',
                },
            }),
            k['a'].register({
                'sora/arrow': {
                    width: 200,
                    height: 200,
                    viewBox: '0 0 1024 1024',
                    data:
                        '<defs/><path pid="0" d="M165.39 594.774h287.782v263.292l430.622-359.694-430.62-359.706v230.242H165.39v225.866z"/>',
                },
            }),
            k['a'].register({
                'sora/fit/arrow': {
                    width: 254.688,
                    height: 200,
                    viewBox: '0 0 1304 1024',
                    data:
                        '<defs/><path pid="0" d="M552.588 0h88.622c137.03 128.838 268.102 264.378 401.408 396.94v20.852C913.036 557.056 778.985 691.107 638.976 819.2h-87.878C654.615 689.617 764.09 564.503 881.012 446.836c-293.422 1.49-587.59-.744-881.012.745v-75.217c293.423 0 586.845-1.49 880.268 0C763.345 255.44 655.36 129.583 552.588 0z"/>',
                },
            }),
            k['a'].register({
                'sora/fit/mask': {
                    width: 16,
                    height: 16,
                    viewBox: '0 0 200 200',
                    data:
                        '<defs><linearGradient id="svgicon_sora_fit_mask_a"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="svgicon_sora_fit_mask_b"><path pid="0" _fill="url(#svgicon_sora_fit_mask_a)" d="M0 0h200v200H0z"/></mask></defs><path pid="1" _fill="green" d="M0 0h200v200H0z"/><path pid="2" _fill="red" mask="url(#svgicon_sora_fit_mask_b)" d="M0 0h200v200H0z"/>',
                },
            }),
            k['a'].register({
                vue: {
                    width: 2500,
                    height: 2158,
                    viewBox: '0 0 256 221',
                    data:
                        '<path pid="0" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" _fill="#41B883"/><path pid="1" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" _fill="#35495E"/>',
                },
            })
        i('b11d')
        ;(o.a.config.productionTip = !1),
            o.a.use(k['a'], { tagName: 'icon' }),
            new o.a({
                render: function (t) {
                    return t(x)
                },
            }).$mount('#app')
    },
})
