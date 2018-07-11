const scalarJSON = require('graphql-type-json');
const scalarDateTime = require('graphql-iso-date');
let data = require('@begin-functions/data');

/*
let books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
*/

const getAllBooks = () => {

    data.get ({ns: 'books'}, (err, page) => {
        if (err) throw err

        console.log(JSON.stringify(page.docs))
        console.log(JSON.stringify(page))

        return page.docs
    })

}

const createBook = (input) => {

// writing object to BFD now... 

    let currDate = new Date()

    let { title, author } = input.input

    data.set(
      {ns: 'books', title: title, author: author}
    )

    //books.push(input.input)
    return currDate 
}


module.exports = {
    JSON: scalarJSON,
    DateTime: scalarDateTime,
    Mutation: {
        addBook: (_, input) => {
            return createBook (input) 
        }
    },
    Query: {
        books: () => {return getAllBooks()}
    }
};