/**
 * get git userinfo
 */

import { execSync as exec } from 'child_process'

export default function() {
    let name = ''
    let email = ''

    try {
        name = exec('git config --get user.name', {
            encoding: 'utf8'
        })
        email = exec('git config --get user.email', {
            encoding: 'utf8'
        })
    } catch (e) {
        console.error(e)
    }

    name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
    email = email && ' <' + email.toString().trim() + '>'
    return (name || '') + (email || '')
}
