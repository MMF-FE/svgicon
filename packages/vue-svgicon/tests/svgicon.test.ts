import { expect, it, describe, assert } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { VueSvgIcon, setOptions } from '../dist'
import vueIconData from '@icon/vue.svg'
import arrowIconData from '@icon/arrow.svg'
import maskIconData from '@icon/mask.svg'
import giftIconData from '@icon/gift.svg'

import IconVue from '@icon/vue.svg?component'
import { Props } from '@yzfe/svgicon'

function mountIcon(props: Props) {
    return shallowMount(VueSvgIcon, {
        props,
    })
}

describe('vite-plugin-svgicon', () => {
    it('should load as icon data', () => {
        expect(vueIconData.name).toBe('vue')
    })

    it('should load as vue component', () => {
        expect(IconVue.setup).toBeTruthy()
    })
})

describe('Test props: dir', async () => {
    it('should has correct direction', async () => {
        const dirs = ['left', 'up', 'right', 'down']
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i]
            const arrowIcon = mountIcon({
                data: arrowIconData,
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
        const arrowIcon = mountIcon({
            data: arrowIconData,
            color: 'green',
        })

        const path = arrowIcon.element.querySelector('path')
        assert.ok(!!path, 'path is not fond')
        assert.equal('green', path && path.getAttribute('fill'))
    })

    it('should stroke with green color', async () => {
        const arrowIcon = mountIcon({
            data: arrowIconData,
            color: 'r-green',
        })

        const path = arrowIcon.element.querySelector('path')
        assert.ok(!!path, 'path is not found')
        assert.equal('none', path && path.getAttribute('fill'))
        assert.equal('green', path && path.getAttribute('stroke'))
    })

    it('should fill with red and green color', async () => {
        const vueIcon = mountIcon({
            data: vueIconData,
            color: 'red green',
        })

        const paths = vueIcon.element.querySelectorAll('path')
        paths.forEach((path, ix) => {
            assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
        })
    })
    it('should fill with red color and stroke with green ', async () => {
        const vueIcon = mountIcon({
            data: vueIconData,
            color: 'red r-green',
        })

        const paths = vueIcon.element.querySelectorAll('path')
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
        const arrowIcon = mountIcon({
            data: arrowIconData,
            color: 'url(#gradient-1) url(#gradient-2)',
        })

        const $el = arrowIcon.element
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
        let arrowIcon = mountIcon({
            data: arrowIconData,
        })
        expect(arrowIcon.classes()).contains('svg-fill')

        arrowIcon = mountIcon({
            data: arrowIconData,
            fill: false,
        })

        expect(arrowIcon.classes()).not.contains('svg-fill')
    })

    it('should has stroke style by default when use isStroke option', async () => {
        setOptions({
            isStroke: true,
        })

        const arrowIcon = mountIcon({
            data: arrowIconData,
        })

        expect(arrowIcon.classes()).not.contains('svg-fill')
        setOptions({
            isStroke: false,
        })
    })
})

describe('Test prop: width/height/scale', function () {
    it('size should be 50px/40px', async () => {
        const arrowIcon = mountIcon({
            data: arrowIconData,
            width: '50',
            height: '40',
        })

        const $el = arrowIcon.element as HTMLElement
        assert.equal('50px', $el.style.width)
        assert.equal('40px', $el.style.height)
    })

    it('size should be 10em/10em', async () => {
        const arrowIcon = mountIcon({
            data: arrowIconData,
            width: '10em',
            height: '10em',
        })

        const $el = arrowIcon.element as HTMLElement
        assert.equal('10em', $el.style.width)
        assert.equal('10em', $el.style.height)
    })

    it('size should be 40px/70px', async () => {
        const arrowIcon = mountIcon({
            data: arrowIconData,
            scale: '10',
        })

        const $el = arrowIcon.element as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })

    it('size should be 40px/70px', async () => {
        const arrowIcon = mountIcon({
            data: arrowIconData,
            scale: '10',
            width: '50',
            height: '50',
        })

        const $el = arrowIcon.element as HTMLElement
        assert.equal('40px', $el.style.width)
        assert.equal('70px', $el.style.height)
    })
})

describe('Test unique id', () => {
    it('should not has same id', async () => {
        const maskIcon = mountIcon({ data: maskIconData })
        const giftIcon = mountIcon({ data: giftIconData })
        const html1 = maskIcon.html()
        const html2 = giftIcon.html()

        function findIds(html: string) {
            const reg = /\sid="([\w-])+"/g
            return (html.match(reg) || []) as string[]
        }

        const ids1 = findIds(html1)
        const ids2 = findIds(html2)

        assert.ok(ids1.every((v) => ids2.indexOf(v) < 0))
    })
})

describe('Test event', () => {
    it('shold emit click event', async () => {
        const vueIcon = mountIcon({
            data: vueIconData,
        })
        vueIcon.trigger('click')
        expect(vueIcon.emitted()).toHaveProperty('click')
    })
})
