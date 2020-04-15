const { queryType, stringArg, makeSchema } = require('@nexus/schema')
// const { GraphQLServer } = require('graphql-yoga')

const Query = queryType({
    definition(t) {
        t.string('hello', {
            args: { name: stringArg({ nullable: true }) },
            resolve: (parent, { name }) => `Hello ${name || 'World'}!` 
        })
    },
})

const schema = makeSchema({
    types: [Query],
    outputs: {
        schema: __dirname + '/generated/schema.graphql',
        typegen: __dirname + '/generated/typings.ts'
    },
})

/* 
    ! refactor this to use the same server as other examples instead of graphql-yoga
*/
// const server = new GraphQLServer({
//     schema,
// })

// server.start(() => console.log('Server is running on http://localhost:4000!'))

module.exports = schema