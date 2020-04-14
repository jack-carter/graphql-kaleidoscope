// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    makeExecutableSchema
} = require('graphql-tools')

const typeDefs = `
type Query {
    hello: String
}
`

const schema = makeExecutableSchema({ typeDefs })

module.exports = schema