const {
    makeExecutableSchema
} = require('graphql-tools')

const {
    Departments,
    Employees,
    NO_MATCHES
} = require('../mock-dataloaders')

const typeDefs = `
type Query {
    employees : [Employee!]!
}

type Employee {
    name: String!
    department: String!
    fulltime: Boolean!
}
`

const resolvers = {
    Query: {
        async employees() {
            return await Employees.loadAll()
        }
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema