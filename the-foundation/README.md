# The Foundation

The best illustrate the differences between the various approaches to implementing GraphQL in Node.js we felt it best to use the same underlying problem, or semantic, context, so that each approach can highlight how it would solve the same problem.

## The Problem

Our intent is to use a problem that is simple enough to fully grasp all at one time, yet rich enough to force us to exercise all the aspects of GraphQL, so that we can highlight how each approach differs in implementing that aspect.

For our purposes we've chosen a simple Employee database that:

* Maintains employee records
* Allows us to perform searches against employee properties, such as age, type of compensation, department, etc.
* Allows us to explore aggregate operations, like totals, averages, etc.
* Allows us to fully explore the nesting nature of GraphQL queries; companies, departments, etc.

## The Schema

The easiest means of describing the data which is accessible through GraphQL is to use the GraphQL Schema Definition Language (SDL). We recognize that some implementations use an SDL-first approach, whereas others use a code-first approach, but all wind-up providing an SDL of some form, whether hand-crafted or generated, so it makes sense to us to describe the problem in terms of SDL.

```
type Query {
    departments : [Department!]!
    department(name: String!) : Department
    department(type: DepartmentCategory) : Department
    employees : [Employee!]!
    employee(name: String!) : Employee
}

enum DepartmentCategory {
    ACCOUNTING
    MARKETING
    CUSTOMERSERVICE
}

type Department {
    type: DepartmentCategory
    name: String!
    employees: [Employee!]!
}

type Employee {
    name: String!
    department: Department!
    fulltime: Boolean!
}
```

## Pre-Determined & Common Architecture

Because GraphQL servers are intended to leverage the useful qualities of RESTfulness we've pre-determined that each solution will build a working GraphQL API behind a common RESTful server framework.

### RESTful Framework

For our purposes we've chosen the use of Express.js as the common framework for all approaches to use, so that we don't pollute the specific differences betwween approaches with the use of differing RESTful frameworks, as that would take away from our prime focus of showing the specific differences between solution implementations.

### Database

It is not our intent to focus on how to integrate a specific database into a solution. There are plenty of tutorials online that do that already. Instead, we've opted for a simpler approach where NO DATABASE is used in these solutions, but instead we obscure the retrieval of data through a common component that shrouds how and where data resides, so that each implementation approach uses the exact same data retrieval mechanism, thus again highlighting their specific differences from other approaches.
