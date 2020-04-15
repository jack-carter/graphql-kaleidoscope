const OPTIONS = [
    { name: 'help', alias: '?', type: Boolean },
    { name: 'use', alias: 'u', type: String, multiple: false, defaultOption: false }
]

const options = require('command-line-args')(OPTIONS)

console.log('options:',JSON.stringify(options,null,4))

const path = require('path')

const filesystem = {
    cwd: process.cwd(),
    __dirname: __dirname,
    schema: path.join(__dirname,'using-' + options.use,'schema.js')
}

console.log('Filesystem:',JSON.stringify(filesystem,null,4))

const schema = require(filesystem.schema)

