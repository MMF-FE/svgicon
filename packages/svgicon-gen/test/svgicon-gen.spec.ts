import gen from '../'
import { assert } from 'chai'
import path from 'path'

const giftSvgFile = path.join(__dirname, '../../assets/svg/gift.svg')
const maskSvgFile = path.join(__dirname, '../../assets/svg/sora/fit/mask.svg')

describe('Test svgicon-gen', () => {
    describe('Test gen result', () => {
        it('just log', () => {
            gen('', giftSvgFile).then((res) => {
                console.log(res)
            })

            gen('', maskSvgFile).then((res) => {
                console.log(res)
            })
            assert.ok(true)
        })
    })
})
