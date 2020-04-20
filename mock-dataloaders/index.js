// This file creates a series of mock DataLoaders for GraphQL implementations to use.

// To keep things simple we'll just keep the data in memory.

const Departments = [
    { type: "ACCOUNTING", name: "Accounting" },
    { type: "MARKETING", name: "Marketing" },
    { type: "CUSTOMERSERVICE", name: "Customer Service" }
]

const Employees = [
    { name: "Mickey Mouse", department: "ACCOUNTING", fulltime: true },
    { name: "Minney Mouse", department: "ACCOUNTING", fulltime: true },

    { name: "Goofy", department: "MARKETING", fulltime: true },
    { name: "Donald Duck", department: "MARKETING", fulltime: true },

    { name: "Bugs Bunny", department: "CUSTOMERSERVICE", fulltime: false },
    { name: "Daffy Duck", department: "CUSTOMERSERVICE", fulltime: false }
]

module.exports = {
    Departments,
    Employees
}