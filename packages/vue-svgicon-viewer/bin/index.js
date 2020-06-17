#!/usr/bin/env node

const yargs = require('yargs')
const path = require('path')
const exec = require('child_process').execSync

const execa = function(command) {
    exec(command, {
        stdio: 'inherit',
        env: process.env
    })
}

const args = yargs
    .usage('$0 <svgFilePath>', 'Start vue-svgicon viewer', yarg => {
        yarg.positional('svgFilePath', {
            describe: 'SVG source file folder.'
        })
    })
    .help('help')
    .alias('h', 'help').argv

process.env.SVGFILEPATH = path.isAbsolute(args.svgFilePath)
    ? args.svgFilePath
    : path.join(process.cwd(), args.svgFilePath)

process.chdir(path.join(__dirname, '../web'))
execa('yarn')
execa(`yarn serve`)
