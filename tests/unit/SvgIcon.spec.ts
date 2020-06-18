import { assert, expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import '@/components/icons'

describe('SvgIcon.vue', () => {
    it('should load icons', () => {
        expect(Object.keys(SvgIcon.icons).length).greaterThan(1)
        assert.ok(!!SvgIcon.icons['arrow'].data)
    })

    it('should mounted', () => {
        let wrapper = shallowMount(SvgIcon, {
            propsData: {
                name: 'arrow'
            }
        })

        assert.ok(!!wrapper.html())
    })

    describe('Prop: dir', () => {
        it('should has correct direction', () => {
            let dirs = ['left', 'up', 'right', 'down']

            dirs.forEach(dir => {
                let wrapper = shallowMount(SvgIcon, {
                    propsData: {
                        name: 'arrow',
                        dir: dir
                    }
                })

                expect(wrapper.classes()).has.contains(
                    `svg-${dir}`,
                    'has no dir: ' + dir
                )

                // Can't contains other dir
                expect(wrapper.classes()).to.not.be.contains(
                    dirs.filter(v => v != dir).map(v => `svg-${dir}`),
                    "Can't contains other dir"
                )
            })
        })
    })

    describe('Prop: fill', () => {
        it('should has fill style by default.', () => {
            let wrapper = shallowMount(SvgIcon, {
                propsData: {
                    name: 'arrow'
                }
            })
            assert.ok(wrapper.props().fill)
            expect(wrapper.classes()).to.be.contains('svg-fill')
        })

        it('should has stroke style by default when use isStroke option', () => {
            const localVue = createLocalVue()
            localVue.use(SvgIcon, {
                isStroke: true
            })
            let wrapper = shallowMount(SvgIcon, {
                localVue,
                propsData: {
                    name: 'arrow'
                }
            })

            assert.notOk(wrapper.props().fill)
            expect(wrapper.classes()).to.not.be.contains('svg-fill')
        })
    })

    describe('Prop: color', () => {
        let wrapper = mount(SvgIcon, {
            propsData: {
                name: 'arrow'
            }
        })

        it('should be green', async () => {
            await wrapper.setProps({
                name: 'arrow',
                color: 'green'
            })

            let path = wrapper.vm.$el.querySelector('path')
            assert.ok(!!path, 'path is no fond')
            assert.equal('green', path && path.getAttribute('fill'))
        })

        it('should has red and green color', async () => {
            await wrapper.setProps({
                name: 'vue',
                color: 'red green'
            })
            let paths = wrapper.vm.$el.querySelectorAll('path')
            paths.forEach((path, ix) => {
                assert.equal(['red', 'green'][ix], path.getAttribute('fill'))
            })
        })

        it('r-color', async () => {
            await wrapper.setProps({
                name: 'arrow',
                color: 'r-red'
            })
            let path = wrapper.vm.$el.querySelector('path')
            assert.ok(!!path, 'path not found')
            assert.equal('none', path && path.getAttribute('fill'))
            assert.equal('red', path && path.getAttribute('stroke'))
        })

        it('multi r-color', async () => {
            await wrapper.setProps({
                name: 'vue',
                color: 'red r-green'
            })
            let paths = wrapper.vm.$el.querySelectorAll('path')
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

        it('gradient', async function() {
            await wrapper.setProps({
                name: 'vue',
                color: 'url(#gradient-1) url(#gradient-2)'
            })
            let $el = wrapper.vm.$el

            $el.querySelectorAll('path').forEach((path, ix) => {
                assert.equal(
                    ['url(#gradient-1)', 'url(#gradient-2)'][ix],
                    path.getAttribute('fill')
                )
            })
        })
    })

    describe('prop size (width/height/scale)', function() {
        let wrapper = shallowMount(SvgIcon, {
            propsData: {
                name: 'arrow'
            }
        })
        it('size should be 50px/40px', async () => {
            await wrapper.setProps({
                width: '50',
                height: '40'
            })

            let $el = wrapper.vm.$el as HTMLElement
            assert.equal('50px', $el.style.width)
            assert.equal('40px', $el.style.height)
        })

        it('size should be 10em/10em', async () => {
            await wrapper.setProps({
                width: '10em',
                height: '10em'
            })

            let $el = wrapper.vm.$el as HTMLElement
            assert.equal('10em', $el.style.width)
            assert.equal('10em', $el.style.height)
        })

        it('size should be 40px/70px', async () => {
            await wrapper.setProps({
                scale: '10'
            })

            let $el = wrapper.vm.$el as HTMLElement
            assert.equal('40px', $el.style.width)
            assert.equal('70px', $el.style.height)
        })

        it('size should be 40px/70px', async () => {
            await wrapper.setProps({
                scale: '10',
                width: '50',
                height: '50'
            })

            let $el = wrapper.vm.$el as HTMLElement
            assert.equal('40px', $el.style.width)
            assert.equal('70px', $el.style.height)
        })
    })

    describe('unique id', () => {
        let arrow = shallowMount(SvgIcon, {
            propsData: {
                name: 'arrow'
            }
        })

        let arrowFit = shallowMount(SvgIcon, {
            propsData: {
                name: 'sora/arrow/fit'
            }
        })

        it('should not has same id', () => {
            let html1 = arrow.html()
            let html2 = arrowFit.html()

            function findIds(html: string) {
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
