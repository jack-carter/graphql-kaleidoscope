# The graphql Package

The seminal implementation of GraphQL came from Facebook in the `npm` package `graphql`, which is what we will illustrate in this solution.

## Running the Server

With nodemon: 
```
npm run dev
```

Without nodemon: 

```
npm start
```

## Sending a GraphQL Query

```
curl -G 'http://localhost:<port>/graphql' --data-urlencode 'query={...}'
```
