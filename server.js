const options = require('command-line-args')([
    { name: 'help', alias: '?', type: Boolean },
    { name: 'use', alias: 'u', type: String, multiple: false, defaultOption: false }
])

if (options.help) {
    console.log('--help')
    console.log('--use <approach>')
    process.exit(0)
} else if (!options.use) {
    console.log('MUST specify schema option using --use <approach>')
    process.exit(-1)
}

const path = require('path')
const express = require('express')
const http = require('express-graphql')
const app = express()

const schemaFile = './' + 'using-' + options.use + '-schema.js'

console.log('Using schema as defined in %s',schemaFile)

const schema = require(schemaFile)

app.use('/graphql',http({
    schema: schema
}))

let server = app.listen(0, () => {
    console.log('GraphQL Server listening on port %s',server.address().port)
})