/**
 * get current date time
 */

function fillZero(num) {
    if (num < 10) {
        return '0' + num
    }

    return num
}

function dateFormat(date: Date) {
    let year = date.getFullYear()
    let month = fillZero(date.getMonth() + 1)
    let day = fillZero(date.getDate())
    let hour = fillZero(date.getHours())
    let min = fillZero(date.getMinutes())
    let sec = fillZero(date.getSeconds())

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

export default function() {
    return dateFormat(new Date())
}
