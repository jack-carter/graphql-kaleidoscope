// This file creates a series of mock DataLoaders for GraphQL implementations to use.

const DataLoader = require('dataloader')

const Employees = {
    loadAll() {
        console.log('Loading ALL Employees')
        return Promise.resolve(ALL(EmployeeData))
    }
}

module.exports = {
    Employees
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
    return collection.filter( item => values.includes(item[field]) )
}

// To keep things simple we'll just keep the data in memory.

const EmployeeData = [
    { name: "Mickey Mouse", department: 'Accounting', fulltime: true },
    { name: "Minney Mouse", department: 'Accounting', fulltime: true },

    { name: "Goofy", department: 'Marketing', fulltime: true },
    { name: "Donald Duck", department: 'Marketing', fulltime: true },

    { name: "Bugs Bunny", department: 'Customer Service', fulltime: false },
    { name: "Daffy Duck", department: 'Customer Service', fulltime: false }
]