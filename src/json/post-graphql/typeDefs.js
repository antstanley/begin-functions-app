var schema = `
scalar JSON
scalar DateTime

input bookInput {
  title: String,
  author: String
}

type Mutation { 
    addBook(input: bookInput!): DateTime 
}

type Query { 
  books: [Book] 
}

type Book { title: String, author: String }
`

module.exports = schema;