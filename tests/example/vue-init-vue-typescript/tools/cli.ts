#!/usr/bin/env node
/**
 * Command line tool, 可以根据实际需要修改
 */

'use strict'

import * as yargs from 'yargs'
import add from './command/add'
import snippet from './command/snippet'
import store from './command/store'
import router from './command/router'

// tslint:disable-next-line
let version = require('../package.json').version

yargs
    .command(add)
    .command(snippet)
    // add store
    .command(store)
    // add router
    .command(router)
    .version(version)
    .alias('version', 'v')
    .help().argv
