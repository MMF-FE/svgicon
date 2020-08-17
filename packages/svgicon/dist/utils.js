function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
var idSeed = 0;
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export default {
    genUID: function () {
        idSeed++;
        return (idSeed +
            '_' +
            Array(5)
                .fill('')
                .map(function () { return chars[getRandomInt(0, chars.length)]; })
                .join(''));
    },
};
//# sourceMappingURL=utils.js.map