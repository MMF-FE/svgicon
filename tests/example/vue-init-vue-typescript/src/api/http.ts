/**
 * api http base
 * @author Allenice
 * @since 2017-06-30 05:35:10
 */

import axios from 'axios'
import stringify = require('qs/lib/stringify')

const host = '/'

// build http header
function buildHeader(): { [key: string]: string } {
    return {}
}

export let ax = axios.create({
    baseURL: host,
    headers: buildHeader(),
    timeout: 10000,
    responseType: 'json',
    transformRequest: [
        function(data) {
            if (data instanceof FormData) return data
            return stringify(data)
        }
    ],
    transformResponse: [
        function(data) {
            if (data) {
                return data
            } else {
                let msg = 'Unknow Error'
                throw new Error(msg)
            }
        }
    ]
})

/* tslint:disable-next-line */
function processData(data: any = {}) {
    if (data instanceof FormData) {
        // data.append('token', token)
    } else {
        // data.token = token
    }

    return data
}

// 处理错误
function handleError(err) {
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(err)) {
        console.log(err)
    } else {
        alert(err)
    }
}

// http get method
export function get<T>(url, data?: Types.PlainObject): Promise<T> {
    return ax
        .get(url, {
            params: processData(data)
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}

// http post method
export function post<T>(url, data?: Types.PlainObject): Promise<T> {
    return ax
        .post(url, processData(data))
        .then(res => {
            return res.data
        })
        .catch(err => {
            handleError(err)
            throw err
        })
}

// delete, put, patch,etc ....
