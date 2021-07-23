function _debounce(method: any, time = 500) {
    let timer = null
    return function () {
        const context = this
        const args = arguments
        // 在函数执行的时候先清除timer定时器;
        // @ts-ignore
        clearTimeout(timer)
        // @ts-ignore
        timer = setTimeout(function () {
            method.apply(context, args)
        }, time)
    } as typeof method
}

function _cloneDeep<T>(value: T): T {
    if (!value) return value
    return JSON.parse(JSON.stringify(value))
}

export const throttle = function (func: Function, delay: number) {
    let timer = null
    let startTime = Date.now()

    return function () {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments
        // @ts-ignore
        clearTimeout(timer)
        if (remaining <= 0) {
            func.apply(context, args)
            startTime = Date.now()
        } else {
            // @ts-ignore
            timer = setTimeout(() => {
                func.apply(context, args)
            }, remaining)
        }
    }
}

export const cloneDeep = _cloneDeep

export const debounce = _debounce

export default {
    cloneDeep,
    debounce,
    throttle,
}
