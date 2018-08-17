// generate snippets

import * as fs from 'fs-extra'
import * as path from 'path'
import * as yargs from 'yargs'
import * as colors from 'colors'

// Create sass variable snippets
function createSssVarSnippet() {
    const snippetPath = path.resolve('.vscode/snippets/scss.json')
    const varPath = path.resolve('src/style/base/_var.scss')
    const varReg = /(\$(\w|-)+):\s(.+)/g

    if (!fs.existsSync(snippetPath)) {
        fs.createFileSync(snippetPath)
        fs.writeFileSync(snippetPath, '{}', 'utf8')
    }

    let vars = fs
        .readFileSync(varPath, 'utf8')
        .match(varReg)
        .map(v => {
            let entries = v.split(': ')
            return {
                name: entries[0],
                desc: entries[1].replace('; //', ' ')
            }
        })

    let snippets = {}
    vars.forEach(v => {
        snippets[v.name] = {
            prefix: v.name,
            body: `\\${v.name}`,
            description: v.desc
        }

        let hexReg = /(\#[0-9A-F]{6})|(^#[0-9A-F]{3})/gi
        let hexColor = (v.desc.match(hexReg) || [])[0]

        if (v.name.startsWith('$color-') && hexColor) {
            snippets[hexColor] = {
                prefix: hexColor,
                body: `\\${v.name}`,
                description: v.desc
            }
        }
    })

    let snippetObject = require(snippetPath)
    let snippetContent = JSON.stringify(
        Object.assign(snippetObject, snippets),
        null,
        4
    )

    fs.writeFileSync(snippetPath, snippetContent, 'utf8')
    console.log(colors.green('snippet created'))
}

let command: yargs.CommandModule = {
    command: 'snippet',
    describe: 'Create snippets',
    builder: {
        type: {
            alias: 't',
            describe: 'The snippet type',
            choices: ['sass-var'],
            default: 'sass-var'
        }
    },
    handler(args) {
        switch (args.type) {
            case 'sass-var':
                createSssVarSnippet()
                break
            default:
                console.log(`Undefind snippet type: ${args.type}`)
        }
    }
}

export default command
