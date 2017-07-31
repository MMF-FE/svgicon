/**
 *
 * @author vfasky<vfasky@gmail.com>
 *
 **/
'use strict'

import assert from 'assert'
import Vue from 'vue'
import svgicon from 'vue-svgicon'

require('../demo/src/icons')
Vue.use(svgicon)

describe('vue-svgion Test Case', function () {
  it('loading icon', function () {
    assert.equal(
      svgicon.icons.arrow.data,
      '<path pid="0" d="M.702 1.006C.51.813.354.888.354 1.154v5.08c0 .275.163.334.348.149l2.34-2.34a.5.5 0 0 0 0-.697l-2.34-2.34z" fill-rule="evenodd"/>'
    )
  })

  it('vue icon', function () {
    let IconVue = require('./iconVue.vue')
    let vm = new Vue(IconVue).$mount()

    assert.equal(
      vm.$el.innerHTML,
      '<path fill="#42b983" stroke="none" pid="0" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path><path fill="#35495e" stroke="none" pid="1" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path>'
    )
  })

  it('prop dir', function () {
    let DirVue = require('./dir.vue')
    let vm = new Vue(DirVue).$mount()

    let dirs = ['left', 'up', 'down']

    dirs.forEach((dir) => {
      let className = String(vm.$refs[dir].$el.className)
      assert.notEqual(-1, className.indexOf('svg-' + dir))
    })
  })

  it('prop fill', function () {
    let FillVue = require('./fill.vue')
    let vm = new Vue(FillVue).$mount()

    assert.notEqual(-1, vm.$refs.icon.$el.className.indexOf('svg-fill'))
    assert.equal(-1, vm.$refs.icon1.$el.className.indexOf('svg-fill'))

  })

  describe('prop color', function () {
    let ColorVue = require('./color.vue')
    let vm = new Vue(ColorVue).$mount()

    it('one color', function () {
      let $el = vm.$refs.color.$el
      assert.equal('green', $el.querySelector('path').getAttribute('fill'))
    })

    it('multi color', function () {
      let $el = vm.$refs.multiColor.$el
      $el.querySelectorAll('path').forEach((path, ix) => {
        assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
      })
    })

    it('one r-color', function () {
      let $el = vm.$refs.rColor1.$el

      assert.equal('none', $el.querySelector('path').getAttribute('fill'))
      assert.equal('red', $el.querySelector('path').getAttribute('stroke'))
    })

    it('multi r-color', function () {
      let $el = vm.$refs.rColor2.$el
      $el.querySelectorAll('path').forEach((path, ix) => {
        if (ix === 0) {
          assert.equal('red', path.getAttribute('fill'))
          assert.equal('none', path.getAttribute('stroke'))
        } else {
          assert.equal('none', path.getAttribute('fill'))
          assert.equal('green', path.getAttribute('stroke'))
        }
      })
    })

    it('gradient', function () {
      let $el = vm.$refs.gradient.$el

      $el.querySelectorAll('path').forEach((path, ix) => {
        assert.equal(['url(#gradient-1)', 'url(#gradient-2)'][ix], path.getAttribute('fill'))
      })
    })
  })

  describe('prop size (width/height/scale)', function () {
    let SizeVue = require('./size.vue')
    let vm = new Vue(SizeVue).$mount()

    it('size should be 16px/16px', function () {
      let $el = vm.$refs.size1.$el
      let style = window.getComputedStyle($el)

      // TODO: test default style
      assert.equal(true, true)
    })

    it('size should be 50px/50px', function () {
      let $el = vm.$refs.size2.$el
      let style = window.getComputedStyle($el)

      assert.equal('50px', $el.style.width)
      assert.equal('50px', $el.style.height)
    })

    it('size should be 10em/10em', function () {
      let $el = vm.$refs.size3.$el
      assert.equal('10em', $el.style.width)
      assert.equal('10em', $el.style.height)
    })

    it('size should be 40px/70px', function () {
      let $el = vm.$refs.size4.$el
      assert.equal('40px', $el.style.width)
      assert.equal('70px', $el.style.height)
    })

    it('size should be 40px/70px', function () {
      let $el = vm.$refs.size5.$el
      assert.equal('40px', $el.style.width)
      assert.equal('70px', $el.style.height)
    })
  })

  describe('unique id', function () {
    let idVue = require('./id.vue')
    let vm = new Vue(idVue).$mount()

    it('should not have same ids', function () {
      let $icon1 = vm.$refs.icon1.$el
      let $icon2 = vm.$refs.icon2.$el

      const html1 = $icon1.innerHTML
      const html2 = $icon2.innerHTML

      function findIds (html) {
        let ids = []
        let reg = /\sid=\"([\w-])+\"/g
        return html.match(reg) || []
      }

      let ids1 = findIds(html1)
      let ids2 = findIds(html2)

      assert.ok(ids1.every(v => ids2.indexOf(v) < 0))
    })
  })
})
