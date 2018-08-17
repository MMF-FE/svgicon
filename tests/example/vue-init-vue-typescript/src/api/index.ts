import axios from 'axios'
import { post, get, ax } from './http'

// import modules

export default {
    getPackage(data: Types.PlainObject) {
        return get<{
            content: string
        }>('static/api-test.json', {
            params: data
        })
    },
    ax: ax,
    axios: axios
}
