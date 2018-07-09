var schema = `
scalar JSON
scalar DateTime

type mutation { 
    addBook(input: Book!): DateTime 
}

type query { 
  books: [Book] 
}

type Book { title: String, author: String }
`

module.exports = schema;