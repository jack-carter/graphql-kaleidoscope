// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

const schema = new GraphQLSchema({})

module.exports = schema