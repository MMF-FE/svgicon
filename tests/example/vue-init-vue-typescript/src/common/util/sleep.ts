/**
 * sleep for async/await
 * @export Function
 * @param {number} ms time for sleep
 * @returns Function
 */

let timerMap = {}

export default function(ms: number, label?: string) {
    return new Promise(resolve => {
        let timer = setTimeout(resolve, ms)

        if (label) {
            timerMap[label] = {
                timer: timer,
                resolve: resolve
            }
        }
    })
}
// 取消睡眠，并继续
export function wakeup(label: string) {
    let timer = timerMap[label]
    if (timer) {
        clearTimeout(timer.timer)
        timer.resolve()
        delete timerMap[label]
    }
}

// 取消睡眠
export function die(label: string) {
    let timer = timerMap[label]
    if (timer) {
        clearTimeout(timer.timer)
        delete timerMap[label]
    }
}
