import { expect, describe, it } from '@jest/globals'

import icons from './assets/icons'
import { svgIcon, setOptions } from '../dist'
import type { Props } from '../dist'

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
    describe('Test svgIcon result', () => {
        it('should return correct result data', () => {
            const result = svgIcon({
                data: icons.arrowIcon,
            })
            expect(!!result.path).toBeTruthy()
            expect(!!result.className).toBeTruthy()
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

                expect(result.className).toContain(`svg-${dir}`)

                // Can't contains other dir
                expect(
                    dirs.filter((v) => v != dir).map(() => `svg-${dir}`)
                ).toEqual(expect.not.arrayContaining([result.className]))
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
            expect(!!path).toBeTruthy()
            expect('green').toEqual(path && path.getAttribute('fill'))
        })

        it('should stroke with green color', async () => {
            const { element } = mount({
                data: icons.arrowIcon,
                color: 'r-green',
            })

            const path = element.querySelector('path')

            expect(!!path).toBeTruthy()
            expect('none').toEqual(path && path.getAttribute('fill'))
            expect('green').toEqual(path && path.getAttribute('stroke'))
        })

        it('should fill with red and green color', async () => {
            const { element } = mount({
                data: icons.vueIcon,
                color: 'red green',
            })

            const paths = element.querySelectorAll('path')
            paths.forEach((path, ix) => {
                expect(['red', 'green'][ix]).toEqual(path.getAttribute('fill'))
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
                    expect('red').toEqual(path.getAttribute('fill'))
                    expect('none').toEqual(path.getAttribute('stroke'))
                } else {
                    expect('none').toEqual(path.getAttribute('fill'))
                    expect('green').toEqual(path.getAttribute('stroke'))
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
                expect(['url(#gradient-1)', 'url(#gradient-2)'][ix]).toEqual(
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
            expect(arrowIcon.result.className).toContain('svg-fill')

            arrowIcon = mount({
                data: icons.arrowIcon,
                fill: false,
            })

            expect(arrowIcon.result.className).not.toContain('svg-fill')
        })

        it('should has stroke style by default when use isStroke option', async () => {
            setOptions({
                isStroke: true,
            })

            const arrowIcon = mount({
                data: icons.arrowIcon,
            })

            expect(arrowIcon.result.className).not.toContain('svg-fill')

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

            expect('50px').toEqual(arrowIcon.result.style.width)
            expect('40px').toEqual(arrowIcon.result.style.height)
        })

        it('size should be 10em/10em', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                width: '10em',
                height: '10em',
            })

            expect('10em').toEqual(arrowIcon.result.style.width)
            expect('10em').toEqual(arrowIcon.result.style.height)
        })

        it('size should be 40px/70px', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                scale: '10',
            })

            expect('40px').toEqual(arrowIcon.result.style.width)
            expect('70px').toEqual(arrowIcon.result.style.height)
        })

        it('size should be 40px/70px', async () => {
            const arrowIcon = mount({
                data: icons.arrowIcon,
                scale: '10',
                width: '50',
                height: '50',
            })

            expect('40px').toEqual(arrowIcon.result.style.width)
            expect('70px').toEqual(arrowIcon.result.style.height)
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

            expect(ids1.every((v) => ids2.indexOf(v) < 0)).toBe(true)
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
            expect(html.includes('fill="#222222"')).toBe(true)
        })
    })
})
