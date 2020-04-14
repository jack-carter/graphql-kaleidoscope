// This file creates a series of mock DataLoaders for GraphQL implementations to use.

module.exports = {
    findDepartmentsByType: new DataLoader( types => find(Departments,"type",types) ),
    findEmployeesByDepartment: new DataLoader( departments => find(Employees,"department",departments) ),
    findEmployeesByName: new DataLoader( names => find(Employees,"name",names) )
}

// All the DataLoaders above will essentially retrieve items in the same way, as defined by the batch function below.

const find = (collection, field, ...values) => {
    // Batch functions for DataLoaders should always return a Promise.
    // We've simply used the easiest Promise available.
    return Promise.resolve(collection.filter( item => values.includes(item[field]) ))
}

// To keep things simple we'll just keep the data in memory.

const Departments = [
    { type: ACCOUNTING, name: "Accounting" },
    { type: MARKETING, name: "Marketing" },
    { type: CUSTOMERSERVIE, name: "Customer Service" }
]

const Employees = [
    { name: "Mickey Mouse", department: ACCOUNTING, fulltime: true },
    { name: "Minney Mouse", department: ACCOUNTING, fulltime: true },

    { name: "Goofy", department: MARKETING, fulltime: true },
    { name: "Donald Duck", department: MARKETING, fulltime: true },

    { name: "Bugs Bunny", department: CUSTOMERSERVICE, fulltime: false },
    { name: "Daffy Duck", department: CUSTOMERSERVICE, fulltime: false }
]