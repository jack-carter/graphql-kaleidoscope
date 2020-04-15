const path = require('path')
const express = require('express')
const http = require('express-graphql')
const app = express()

const schemaPath = path.join(__dirname,'using-graphql','schema.js')

console.log('Using schema as defined in "%s"',schemaPath)

app.use('/graphql',http({
    schema: require(schemaPath)
}))

let server = app.listen(0, () => {
    console.log('GraphQL Server listening on port %s',server.address().port)
})