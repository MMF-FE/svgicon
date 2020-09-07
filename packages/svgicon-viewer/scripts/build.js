const path = require('path')
const exec = require('child_process').execSync

const execa = function (command) {
    exec(command, {
        stdio: 'inherit',
        env: process.env,
    })
}

process.chdir(path.join(__dirname, '../web'))
execa('yarn')
execa(`yarn build`)
