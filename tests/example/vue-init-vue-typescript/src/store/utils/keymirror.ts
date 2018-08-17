/**
 * Create an object with values equal to its key names.
 */

export default function<T>(obj: T): { [K in keyof T]: string } {
    let ret = {}
    let key

    for (key in obj) {
        if ((obj as Object).hasOwnProperty(key)) {
            ret[key] = key
        }
    }

    return ret as { [K in keyof T]: K }
}
