# GraphQL Kaleidoscope Mock Data

To keep the focus on the specific ways to implementation a GraphQl Schema and Server we've opted to use only mock data across these implementations, by creating a Data Service each approach can use equally, thus reducing the amount of extraneous code that would be required with some form of actual database.

## The Data Service

GraphQL Servers must always deal with asynchronous operations, because all GraphQL Services must tie themselves to some form of external data storage engine over some form of network, which will always create the potential, and the likelihood, of wait times.

In the GraphQL world the need to handle these commonly occurring situations has led us to the use of the DataLoader.

To support each of the various approaches across this repository, we have created a set of DataLoader components that fully mimic the interactions a GraphQL Server would have with a typical DataLoader implementation.

### The DepartmentLoader

...

### The EmployeeLoader

...

## The Data

### Departments

```
[
    { type: ACCOUNTING, name: "Accounting" },
    { type: MARKETING, name: "Marketing" },
    { type: CUSTOMERSERVIE, name: "Customer Service" }
]
```

### Employees

```
[
    { name: "Mickey Mouse", department: ACCOUNTING, fulltime: true },
    { name: "Minney Mouse", department: ACCOUNTING, fulltime: true },

    { name: "Goofy", department: MARKETING, fulltime: true },
    { name: "Donald Duck", department: MARKETING, fulltime: true },

    { name: "Bugs Bunny", department: CUSTOMERSERVICE, fulltime: false },
    { name: "Daffy Duck", department: CUSTOMERSERVICE, fulltime: false }
]
```