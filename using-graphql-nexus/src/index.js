const {
    Departments,
    Employees
} = require('../../mock-dataloaders')

const {
    enumType,
    scalarType,
    objectType,
    queryType,
    stringArg,
    makeSchema
} = require('@nexus/schema')
const { GraphQLServer } = require('graphql-yoga')

const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("departments", {
    type: Department,
    resolve(root,args,ctx) {
        return Promise.resolve(Departments)
    }});
    t.list.field("employees", {
    type: Employee,
    resolve(root,args,ctx) {
        return Promise.resolve(Employees)
    }});
  }
});

const Department = objectType({
  name: "Department",
  definition(t) {
    t.field("type", {
      type: DepartmentCategory,
        nullable: true
    });
    t.string("name");
    t.list.field("employees", { type: Employee,
        resolve(department,args,ctx) {
            return Promise.resolve(Employees.filter(employee => employee.department == department.type))
        } });
  }
});

const Employee = objectType({
  name: "Employee",
  definition(t) {
    t.string("name");
    t.boolean("fulltime");
    t.field("department", { type: Department,
        resolve(employee,args,ctx) {
            return Promise.resolve(Departments.filter(department => department.type == employee.department))
        }});
  }
});

const DepartmentCategory = enumType({
  name: "DepartmentCategory",
  members: [
      "ACCOUNTING",
      "MARKETING",
      "CUSTOMERSERVICE"
  ]
});

const schema = makeSchema({
    types: [Query, Department, DepartmentCategory, Employee],
    outputs: {
        schema: __dirname + '/generated/schema.graphql',
        typegen: __dirname + '/generated/typings.ts'
    },
})

// TODO: Refactor this to use express server
const server = new GraphQLServer({
    schema,
})

server.start(() => console.log('Server is running on http://localhost:4000!'))

module.exports = schema