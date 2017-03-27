/**
 *
 * @author vfasky<vfasky@gmail.com>
 *
 **/
'use strict'

import assert from 'assert'
import Vue from 'vue'
import svgicon from 'vue-svgicon'

describe('vue-svgion Test Case', () => {

    before(() => {
        Vue.use(svgicon)
    })

    it('loading icon', () => {
        require('../demo/src/icons')

        assert.equal(
            svgicon.icons.arrow.data,
            '<path pid="0" d="M.702 1.006C.51.813.354.888.354 1.154v5.08c0 .275.163.334.348.149l2.34-2.34a.5.5 0 0 0 0-.697l-2.34-2.34z" fill-rule="evenodd"/>'
        )
    })

    it('vue icon', () => {
        let IconVue = require('./iconVue.vue')
        let vm = new Vue(IconVue).$mount()

        assert.equal(
            vm.$el.innerHTML,
            '<path fill="#42b983" stroke="none" pid="0" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path><path fill="#35495e" stroke="none" pid="1" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"></path>'
        )
    })

    it('prop dir', () => {
        let DirVue = require('./dir.vue')
        let vm = new Vue(DirVue).$mount()

        let dirs = ['left', 'up', 'down']

        dirs.forEach((dir) => {
            let className = String(vm.$refs[dir].$el.className)
            assert.notEqual(-1, className.indexOf('svg-' + dir))
        })
    })

    it('prop fill', () => {
        let FillVue = require('./fill.vue')
        let vm = new Vue(FillVue).$mount()

        assert.notEqual(-1, vm.$refs.icon.$el.className.indexOf('svg-fill'))
        assert.equal(-1, vm.$refs.icon1.$el.className.indexOf('svg-fill'))

    })

})
