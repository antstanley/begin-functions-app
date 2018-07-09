var schema = `
scalar JSON
scalar DateTime

input bookInput {
  title: String,
  author: String
}

type mutation { 
    addBook(input: bookInput!): DateTime 
}

type query { 
  books: [Book] 
}

type Book { title: String, author: String }
`

module.exports = schema;