// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="global.d.ts" />

import jsdom from 'mocha-jsdom'
import { assert, expect } from 'chai'
import { svgIcon, setOptions, Props } from '@yzfe/svgicon'
import icons from './assets/icons'

function mount(props: Props) {
    const result = svgIcon(props)
    const element = document.createElement('svg')
    element.innerHTML = result.path

    return {
        result,
        element,
    }
}

describe('Test svgIcon', () => {
    jsdom({
        url: 'https://example.org/',
    })

    describe('Test svgIcon result', () => {
        it('should return correct result data', () => {
            const result = svgIcon({
                data: icons.arrowIcon,
            })
            assert.ok(!!result.path, 'not path data')
            assert.ok(!!result.className, 'not defalt className')
        })
    })

    describe('Test Prop: dir', () => {
        it('should has correct direction', async () => {
            const dirs = ['left', 'up', 'right', 'down']
            for (let i = 0; i < dirs.length; i++) {
                const dir = dirs[i]
                const result = svgIcon({
                    data: icons.arrowIcon,
                    dir,
                })

                expect(result.className).has.contain(
                    `svg-${dir}`,
                    'has no dir: ' + dir
                )

                // Can't contains other dir
                expect(result.className).to.not.be.contains(
                    dirs.filter((v) => v != dir).map(() => `svg-${dir}`),
                    "Can't contains other dir"
                )
            }
        })
    })

    describe('Test prop: color', () => {
        it('should fill with green color', async () => {
            const { element } = mount({
                data: icons.arrowIcon,
                color: 'green',
            })

            const path = element.querySelector('path')
            assert.ok(!!path, 'path is not fond')
            assert.equal('green', path && path.getAttribute('fill'))
        })

        it('should stroke with green color', async () => {
            const { element } = mount({
                data: icons.arrowIcon,
                color: 'r-green',
            })

            const path = element.querySelector('path')
            assert.ok(!!path, 'path is not found')
            assert.equal('none', path && path.getAttribute('fill'))
            assert.equal('green', path && path.getAttribute('stroke'))
        })

        it('should fill with red and green color', async () => {
            const { element } = mount({
                data: icons.vueIcon,
                color: 'red green',
            })

            const paths = element.querySelectorAll('path')
            paths.forEach((path, ix) => {
                assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
            })
        })

        it('should fill with red color and stroke with green ', async () => {
            const vueIcon = mount({
                data: icons.vueIcon,
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
            const arrowIcon = mount({
                data: icons.vueIcon,
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
            let arrowIcon = mount({
                data: icons.arrowIcon,
            })
            expect(arrowIcon.result.className).contains('svg-fill')

            arrowIcon = mount({
                data: icons.arrowIcon,
                fill: false,
            })

            expect(arrowIcon.result.className).not.contains('svg-fill')
        })

        it('should has stroke style by default when use isStroke option', async () => {
            setOptions({
                isStroke: true,
            })

            const arrowIcon = mount({
                data: icons.arrowIcon,
            })

            expect(arrowIcon.result.className).not.contains('svg-fill')

            // restore options
            setOptions({
                isStroke: false,
            })
        })
    })

    describe('Test prop: width/height/scale', function () {
        it('size should be 50px/40px', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                width: '50',
                height: '40',
            })

            assert.equal('50px', arrowIcon.result.style.width)
            assert.equal('40px', arrowIcon.result.style.height)
        })

        it('size should be 10em/10em', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                width: '10em',
                height: '10em',
            })

            assert.equal('10em', arrowIcon.result.style.width)
            assert.equal('10em', arrowIcon.result.style.height)
        })

        it('size should be 40px/70px', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                scale: '10',
            })

            assert.equal('40px', arrowIcon.result.style.width)
            assert.equal('70px', arrowIcon.result.style.height)
        })

        it('size should be 40px/70px', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                scale: '10',
                width: '50',
                height: '50',
            })

            assert.equal('40px', arrowIcon.result.style.width)
            assert.equal('70px', arrowIcon.result.style.height)
        })
    })

    describe('Test unique id', () => {
        it('should not has same id', async () => {
            const maskIcon = mount({ data: icons.maskIcon })
            const giftIcon = mount({ data: icons.giftIcon })
            const html1 = maskIcon.element.innerHTML
            const html2 = giftIcon.element.innerHTML

            function findIds(html: string) {
                const reg = /\sid="([\w-])+"/g
                return (html.match(reg) || []) as string[]
            }

            const ids1 = findIds(html1)
            const ids2 = findIds(html2)

            assert.ok(ids1.every((v) => ids2.indexOf(v) < 0))
        })
    })

    describe('Test replace content', () => {
        it('shold replace color', async () => {
            const vueIcon = mount({
                data: icons.vueIcon,
                replace: (svg) => {
                    return svg.replace('#35495E', '#222222')
                },
            })

            const html = vueIcon.element.innerHTML
            assert.ok(html.includes('fill="#222222"'))
        })
    })
})
