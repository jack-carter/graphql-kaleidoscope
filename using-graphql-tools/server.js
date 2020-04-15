// const express = require('express')
// const http = require('express-graphql')
// const app = express()

const { GraphQLServer } = require('graphql-yoga')

const schema = require('./schema.js')

// app.use('/graphql',http({
//     schema: schema
// }))

// let server = app.listen(0, () => {
//     console.log('GraphQL Server listening on port %s',server.address().port)
// })

let server = new GraphQLServer({
    schema,
})

server.start(() => console.log('GraphQL server running at http://localhost:4000 !'))