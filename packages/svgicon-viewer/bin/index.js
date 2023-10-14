#!/usr/bin/env node

const yargs = require('yargs')
const path = require('path')
const fs = require('fs-extra')
const gen = require('@yzfe/svgicon-gen').default
const glob = require('glob')
const serve = require('./serve')

const distPath = path.join(__dirname, '../dist')

const args = yargs
    .usage(
        '$0 <svgFilePath> [metaFile]',
        'Start vue-svgicon viewer',
        (yarg) => {
            yarg.positional('svgFilePath', {
                describe: 'SVG source file folder.',
            })

            yarg.positional('metaFile', {
                describe: 'meta.json file, custom display name',
            })

            yarg.option('output', {
                describe: 'Output path for static html',
                type: 'string',
            }).alias('o', 'output')
        }
    )
    .help('help')
    .alias('h', 'help').argv

const svgFilePath = path.isAbsolute(args.svgFilePath)
    ? args.svgFilePath
    : path.join(process.cwd(), args.svgFilePath)

let metaFile = ''
if (args.metaFile) {
    metaFile = path.isAbsolute(args.metaFile)
        ? args.metaFile
        : path.join(process.cwd(), args.metaFile)
} else {
    // 默认取 svg 目录的 meta.json
    metaFile = path.join(svgFilePath, 'meta.json')
}

const isOutput = !!args.output

;(async function () {
    let files = glob.sync(path.join(svgFilePath, '**/*.svg'))
    let icons = []
    let meta = {}
    for (let i = 0; i < files.length; i++) {
        let filename = files[i]
        let content = fs.readFileSync(filename, 'utf8')
        let icon = await gen(content, filename, svgFilePath)
        icons.push(icon)
    }

    if (metaFile && fs.existsSync(metaFile)) {
        try {
            meta = require(metaFile)
        } catch (err) {
            console.log(err)
        }
    }

    const injectCode = `
        window.icons = ${JSON.stringify(icons || [])}
        window.iconMetas = ${JSON.stringify(meta || {})}
    `
    const injectReg = /\/\*\{\{inject\}\}\*\//
    let html = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8')
    html = html.replace(injectReg, injectCode)

    if (isOutput) {
        const outputPath = path.isAbsolute(args.output)
            ? args.output
            : path.join(process.cwd(), args.output)
        fs.copySync(distPath, outputPath)
        fs.writeFileSync(path.join(outputPath, 'index.html'), html, 'utf8')
    } else {
        serve(html)
    }
})()
