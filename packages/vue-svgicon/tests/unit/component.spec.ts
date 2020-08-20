import { expect, assert } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Icon from './Icon.vue'

import Vue from 'vue'
import { VueSvgIcon, setOptions } from '@yzfe/vue-svgicon'

Vue.component('icon', VueSvgIcon)
const wrapper = mount(Icon)
const arrowIcon = wrapper.find({ ref: 'arrow' })
const vueIcon = wrapper.find({ ref: 'vue' })

describe('@yzfe/svgicon-loader', () => {
    it('should load svg to be icon data', () => {
        const icon = wrapper.vm.$data.vueIcon
        expect(icon.name).eq('vue')
        assert.ok(!!icon.data)
    })
})

describe('Test props: dir', async () => {
    it('should has correct direction', async () => {
        const dirs = ['left', 'up', 'right', 'down']
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i]
            await arrowIcon.setProps({
                dir,
            })

            expect(arrowIcon.classes()).has.contain(
                `svg-${dir}`,
                'has no dir: ' + dir
            )
            // Can't contains other dir
            expect(arrowIcon.classes()).to.not.be.contains(
                dirs.filter((v) => v != dir).map(() => `svg-${dir}`),
                "Can't contains other dir"
            )
        }
    })
})

describe('Test prop: color', () => {
    it('should fill with green color', async () => {
        await arrowIcon.setProps({
            color: 'green',
        })

        const path = arrowIcon.vm.$el.querySelector('path')
        assert.ok(!!path, 'path is not fond')
        assert.equal('green', path && path.getAttribute('fill'))
    })

    it('should stroke with green color', async () => {
        await arrowIcon.setProps({
            color: 'r-green',
        })
        const path = arrowIcon.vm.$el.querySelector('path')
        assert.ok(!!path, 'path is not found')
        assert.equal('none', path && path.getAttribute('fill'))
        assert.equal('green', path && path.getAttribute('stroke'))
    })

    it('should fill with red and green color', async () => {
        await vueIcon.setProps({
            color: 'red green',
        })

        const paths = vueIcon.vm.$el.querySelectorAll('path')
        paths.forEach((path, ix) => {
            assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
        })
    })

    it('should fill with red color and stroke with green ', async () => {
        await vueIcon.setProps({
            color: 'red r-green',
        })
        const paths = vueIcon.vm.$el.querySelectorAll('path')
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

    it('should fill with gradient', async function () {
        await arrowIcon.setProps({
            color: 'url(#gradient-1) url(#gradient-2)',
        })
        const $el = arrowIcon.vm.$el

        $el.querySelectorAll('path').forEach((path, ix) => {
            assert.equal(
                ['url(#gradient-1)', 'url(#gradient-2)'][ix],
                path.getAttribute('fill')
            )
        })
    })
})

describe('Test props: fill', () => {
    it('should has fill style by default.', async () => {
        expect(arrowIcon.classes()).contains('svg-fill')

        await arrowIcon.setProps({
            fill: false,
        })
        expect(arrowIcon.classes()).not.contains('svg-fill')
    })

    it('should has stroke style by default when use isStroke option', async () => {
        setOptions({
            isStroke: true,
        })

        const localVue = createLocalVue()
        const localWrapper = mount(Icon, {
            localVue,
        })

        const localArrowIcon = localWrapper.findComponent({ ref: 'arrow' })

        expect(localArrowIcon.classes()).not.contains('svg-fill')
    })
})

describe('Test prop: width/height/scale', function () {
    it('size should be 50px/40px', async () => {
        await arrowIcon.setProps({
            width: '50',
            height: '40',
        })

        const $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('50px', $el.style.width)
        assert.equal('40px', $el.style.height)
    })

    it('size should be 10em/10em', async () => {
        await arrowIcon.setProps({
            width: '10em',
            height: '10em',
        })

        const $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('10em', $el.style.width)
        assert.equal('10em', $el.style.height)
    })

    it('size should be 40px/70px', async () => {
        await arrowIcon.setProps({
            scale: '10',
        })

        const $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })

    it('size should be 40px/70px', async () => {
        await arrowIcon.setProps({
            scale: '10',
            width: '50',
            height: '50',
        })

        const $el = arrowIcon.vm.$el as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })
})

describe('Test unique id', () => {
    it('should not has same id', async () => {
        const maskIcon = wrapper.findComponent({ ref: 'mask' })
        const giftIcon = wrapper.findComponent({ ref: 'gift' })
        const html1 = maskIcon.html()
        const html2 = giftIcon.html()

        function findIds(html: string) {
            const reg = /\sid="([\w-])+"/g
            return html.match(reg) || []
        }

        const ids1 = findIds(html1)
        const ids2 = findIds(html2)

        assert.ok(ids1.every((v) => ids2.indexOf(v) < 0))
    })
})
