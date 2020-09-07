function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
}

let idSeed = 0
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export default {
    genUID: (): string => {
        idSeed++
        return (
            idSeed +
            '_' +
            [1, 2, 3, 4, 5]
                .map(() => chars[getRandomInt(0, chars.length)])
                .join('')
        )
    },
}
