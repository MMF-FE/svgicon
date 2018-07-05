#!/usr/bin/env nod

/**
 * build svg icon
 * @author Allenice
 * @since 2017-02-17
 */

import * as yargs from 'yargs'
import * as path from 'path'
import build from './build'
import * as colors from 'colors'

const args = yargs
    .usage('Usage: $0 -s svgSourcePath -t targetPath')
    .demandOption(['s', 't'])
    .describe('s', 'Svg source path')
    .describe('t', 'Generate icon path')
    .describe('ext', "Generated file's extension")
    .default('ext', 'js')
    .describe('tpl', 'The template file which to generate icon files')
    .describe('es6', 'Use ES6 module')
    .help('help')
    .alias('h', 'help').argv

// svg file path
const sourcePath = path.join(process.cwd(), args.s)
// generated icon path
const targetPath = path.join(process.cwd(), args.t)

const tpl = args.tpl
const ext = args.ext
const es6 = args.es6
;(async function() {
    try {
        await build({
            sourcePath,
            targetPath,
            tpl,
            ext,
            es6
        })
    } catch (err) {
        console.log(colors.red(err))
    }
})()
