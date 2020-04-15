// We won't be using all of the GraphQL schema type definitions, but only the ones needed for the
// dataset and query structure we've defined.

const {
    GraphQLSchema,
    GraphQLEnumType,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList
} = require('graphql')

const {
    Departments,
    NO_MATCHES
} = require('../mock-dataloaders')

function RESOLVING(item) {
    console.log('Resolving "%s" ...',item)
}

const DepartmentCategoryType = new GraphQLEnumType({
    name: 'DepartmentCategory',
    values: {
        ACCOUNTING: { value: 0 },
        MARKETING: { value: 1 },
        CUSTOMERSERVICE: { value: 2 }
    }
})

const DepartmentType = new GraphQLObjectType({
    name: 'Department',
    fields: () => ({
        // No resolvers necessary, as it will use the corresponding property.
        type: { type: DepartmentCategoryType },
        name: { type: GraphQLString },
        
        // Must have a resolver to narrow the list of Employees to just this department. 
        employees: { 
            type: GraphQLList(EmployeeType),
            async resolve(parent,args) {
                RESOLVING('Department.employees')
                // TODO pull the Employees for this Department
                return await NO_MATCHES // dummy return for now
            } 
        }
    })
})

const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        // No resolvers necessary, as it directly use the corresponding property.
        name: { type: GraphQLString },
        department: { type: DepartmentType },
        fulltime: { type: GraphQLBoolean }
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        departments: {
            type: new GraphQLList(DepartmentType),
            async resolve(parent,args) {
                RESOLVING('departments ...')
                let employees = await Departments.loadAll()
                RESOLVING('departments: %s',departments)
                return departments
            }
        },
        employees: {
            type: new GraphQLList(EmployeeType),
            async resolve(parent, args) {
                RESOLVING('employees ...')
                let employees = await Employees.loadAll()
                RESOLVING('employees: %s',employees)
                return employees
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

module.exports = schema