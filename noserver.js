const path = require('path')

const filesystem = {
    cwd: process.cwd(),
    __dirname: __dirname,
    schema: path.join(__dirname,'using-graphql')
}

console.log(JSON.stringify(filesystem,null,4))

const schema = require(path.join(__dirname,'using-graphql/schema.js'))
