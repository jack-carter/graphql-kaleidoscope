// This file creates a series of mock DataLoaders for GraphQL implementations to use.

const DataLoader = require('dataloader')

const Departments = {
    Category: {
        ACCOUNTING: 0,
        MARKETING: 1,
        CUSTOMERSERVICE: 2
    },

    loadAll() {
        console.log('Loading ALL Departments')
        return Promise.resolve(ALL(DepartmentData))
    }
}

const Employees = {
    loadAll() {
        console.log('Loading ALL Employees')
        return Promise.resolve(ALL(EmployeesData))
    }
}

module.exports = {
    Departments,
    DepartmentsCategory: Departments.Category,
    
    Employees,

    NO_MATCHES: LOAD( () => [] ),

    findDepartmentsByType: new DataLoader( types => find(Departments,"type",types) ),
    findEmployeesByDepartment: new DataLoader( departments => find(EmployeeData,"department",departments) ),
    findEmployeesByName: new DataLoader( names => find(EmployeeData,"name",names) )
}

// Convenience functions to keep typing low

function ALL(collection) {
    // Just include everything in the collection
    return collection.filter( item => true )
}

function LOAD(loadingfunction) {
    // Return a function that runs a Promise, that runs a loading function.
    return () => Promise.resolve(loadingfunction)
}

// All the DataLoaders above will essentially retrieve items in the same way, as defined by the batch function below.

const find = (collection, field, ...values) => {
    // Batch functions for DataLoaders should always return a Promise.
    // We've simply used the easiest Promise available.
    return Promise.resolve(collection.filter( item => values.includes(item[field]) ))
}

// These simply shorten the amount of typing in the collections that follow.

const ACCOUNTING = Departments.Category.ACCOUNTING
const MARKETING = Departments.Category.MARKETING
const CUSTOMERSERVICE = Departments.Category.CUSTOMERSERVICE

// To keep things simple we'll just keep the data in memory.

const DepartmentData = [
    { type: ACCOUNTING, name: "Accounting" },
    { type: MARKETING, name: "Marketing" },
    { type: CUSTOMERSERVICE, name: "Customer Service" }
]

const EmployeeData = [
    { name: "Mickey Mouse", department: ACCOUNTING, fulltime: true },
    { name: "Minney Mouse", department: ACCOUNTING, fulltime: true },

    { name: "Goofy", department: MARKETING, fulltime: true },
    { name: "Donald Duck", department: MARKETING, fulltime: true },

    { name: "Bugs Bunny", department: Departments.Category.CUSTOMERSERVICE, fulltime: false },
    { name: "Daffy Duck", department: Departments.Category.CUSTOMERSERVICE, fulltime: false }
]
