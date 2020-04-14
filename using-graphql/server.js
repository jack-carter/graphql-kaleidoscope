const express = require('express')
const http = require('express-graphql')
const app = express()

const schema = require('./schema.js')

app.use('/graphql',http({
    schema: schema
}))

let server = app.listen(0, () => {
    console.log('GraphQL Server listening on port %s',server.address().port)
})