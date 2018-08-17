/**
 * 深度冻结一个对象
 *
 * @param {Object} obj
 * @returns
 */
function deepFreeze(obj: Object) {
    let propNames = Object.getOwnPropertyNames(obj)

    propNames.forEach(function(name) {
        let prop = obj[name]
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop)
        }
    })

    return Object.freeze(obj)
}

export default deepFreeze
