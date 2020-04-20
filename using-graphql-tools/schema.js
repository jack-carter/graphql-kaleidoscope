// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    Departments,
    Employees
} =  require('../mock-dataloaders')

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

const resolvers = {
    Query: {
        departments(root,args,ctx) {
            return Promise.resolve(Departments) 
        },
        employees(root,args,ctx) {
            return Promise.resolve(Employees)
        }
    },
    Department: {
        employees(department,args,ctx) {
            return Promise.resolve(Employees.filter(employee => employee.department == department.type))
        }
    },
    Employee: {
        department(employee,args,ctx) {
            return Promise.resolve(Departments.filter(department => department.type == employee.department))
        }
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema