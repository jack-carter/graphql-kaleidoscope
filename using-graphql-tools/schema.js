// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    makeExecutableSchema
} = require('graphql-tools')

const typeDefs = `
type Query {
    departments : [Department!]!
    employees : [Employee!]!
}

enum DepartmentCategory {
    ACCOUNTING
    MARKETING
    CUSTOMERSERVICE
}

type Department {
    type: DepartmentCategory!
    name: String!
    employees: [Employee!]!
}

type Employee {
    name: String!
    department: DepartmentCategory!
    fulltime: Boolean!
}
`

const schema = makeExecutableSchema({ typeDefs })

module.exports = schema