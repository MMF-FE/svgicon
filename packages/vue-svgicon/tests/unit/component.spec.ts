import { expect, assert } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Icon from './Icon.vue'

import Vue from 'vue'
import VueSvgIcon from 'vue-svgicon'

Vue.use(VueSvgIcon, {
    tagName: 'icon'
})
const wrapper = mount(Icon)
const arrowIcon = wrapper.find({ ref: 'arrow' })
const vueIcon = wrapper.find({ ref: 'vue' })

describe('@yzfe/vue-svgicon-loader', () => {
    it('should load svg to be icon data', () => {
        let icon = vueIcon.props().data
        expect(icon.name).eq('vue')
        assert.ok(!!icon.data)
    })
})

describe('Test props: dir', () => {
    it('should has correct direction', () => {
        const dirs = ['left', 'up', 'right', 'down']

        dirs.forEach(dir => {
            arrowIcon.setProps({
                dir
            })
            expect(arrowIcon.classes()).has.contain(
                `svg-${dir}`,
                'has no dir: ' + dir
            )

            // Can't contains other dir
            expect(arrowIcon.classes()).to.not.be.contains(
                dirs.filter(v => v != dir).map(v => `svg-${dir}`),
                "Can't contains other dir"
            )
        })
    })
})

describe('Test prop: color', () => {
    it('should fill with green color', () => {
        arrowIcon.setProps({
            color: 'green'
        })
        let path = arrowIcon.vm.$el.querySelector('path')
        assert.ok(!!path, 'path is no fond')
        assert.equal('green', path && path.getAttribute('fill'))
    })

    it('should stroke with green color', () => {
        arrowIcon.setProps({
            color: 'r-green'
        })
        let path = arrowIcon.vm.$el.querySelector('path')
        assert.ok(!!path, 'path not found')
        assert.equal('none', path && path.getAttribute('fill'))
        assert.equal('green', path && path.getAttribute('stroke'))
    })

    it('should fill with red and green color', () => {
        vueIcon.setProps({
            color: 'red green'
        })
        let paths = vueIcon.vm.$el.querySelectorAll('path')
        paths.forEach((path, ix) => {
            assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
        })
    })

    it('should fill with red color and stroke with green ', () => {
        vueIcon.setProps({
            color: 'red r-green'
        })
        let paths = vueIcon.vm.$el.querySelectorAll('path')
        paths.forEach((path, ix) => {
            if (ix === 0) {
                assert.equal('red', path.getAttribute('fill'))
                assert.equal('none', path.getAttribute('stroke'))
            } else {
                assert.equal('none', path.getAttribute('fill'))
                assert.equal('green', path.getAttribute('stroke'))
            }
        })
    })

    it('should fill with gradient', function() {
        arrowIcon.setProps({
            color: 'url(#gradient-1) url(#gradient-2)'
        })
        let $el = arrowIcon.vm.$el

        $el.querySelectorAll('path').forEach((path, ix) => {
            assert.equal(
                ['url(#gradient-1)', 'url(#gradient-2)'][ix],
                path.getAttribute('fill')
            )
        })
    })
})

describe('Test props: fill', () => {
    it('should has fill style by default.', () => {
        assert.ok(arrowIcon.props().fill)
        expect(arrowIcon.classes()).contains('svg-fill')

        arrowIcon.setProps({
            fill: false
        })
        assert.ok(!arrowIcon.props().fill)
        expect(arrowIcon.classes()).not.contains('svg-fill')
    })

    it('should has stroke style by default when use isStroke option', () => {
        const localVue = createLocalVue()
        localVue.use(VueSvgIcon, {
            isStroke: true
        })
        let localWrapper = mount(Icon, {
            localVue
        })

        const localArrowIcon = localWrapper.find({ ref: 'arrow' })

        assert.notOk(localArrowIcon.props().fill)
        expect(localArrowIcon.classes()).not.contains('svg-fill')
    })
})

describe('Test prop: width/height/scale', function() {
    it('size should be 50px/40px', () => {
        arrowIcon.setProps({
            width: '50',
            height: '40'
        })

        let $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('50px', $el.style.width)
        assert.equal('40px', $el.style.height)
    })

    it('size should be 10em/10em', () => {
        arrowIcon.setProps({
            width: '10em',
            height: '10em'
        })

        let $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('10em', $el.style.width)
        assert.equal('10em', $el.style.height)
    })

    it('size should be 40px/70px', () => {
        arrowIcon.setProps({
            scale: '10'
        })

        let $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })

    it('size should be 40px/70px', () => {
        arrowIcon.setProps({
            scale: '10',
            width: '50',
            height: '50'
        })

        let $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })
})

describe('Test unique id', () => {
    it('should not has same id', () => {
        const maskIcon = wrapper.find({ ref: 'mask' })
        const giftIcon = wrapper.find({ ref: 'gift' })
        let html1 = maskIcon.html()
        let html2 = giftIcon.html()

        function findIds(html: string) {
            let reg = /\sid=\"([\w-])+\"/g
            return html.match(reg) || []
        }

        let ids1 = findIds(html1)
        let ids2 = findIds(html2)

        assert.ok(ids1.every(v => ids2.indexOf(v) < 0))
    })
})
