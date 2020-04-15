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
            resolve(parent,args) {
                let department = parent
                // TODO pull the Employees for this Department
                return [] // dummy return for now
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
            resolve(parent,args) {
                // TODO implement the resolver
                return [] // dummy return for now
            }
        },
        employees: {
            type: new GraphQLList(EmployeeType),
            resolve(parent, args) {
                // TODO implement the resolver
                return [] // dummy return for now
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: QueryType
})

module.exports = schema