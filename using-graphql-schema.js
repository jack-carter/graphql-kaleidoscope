// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList
} = require('graphql')

const {
    Employees,
} = require('./mock-dataloaders')

const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        // No resolvers necessary, as it directly use the corresponding property.
        name: { type: new GraphQLNonNull(GraphQLString) },
        department: { type: new GraphQLNonNull(GraphQLString) },
        fulltime: { type: new GraphQLNonNull(GraphQLBoolean) }
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        employees: {
            type: new GraphQLNonNull( new GraphQLList( new GraphQLNonNull( EmployeeType )) ),
            async resolve(parent, args) {
                return await Employees.loadAll()
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

module.exports = schema