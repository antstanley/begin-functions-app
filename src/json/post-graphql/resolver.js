const scalarJSON = require('graphql-type-json');
const scalarDateTime = require('graphql-iso-date');

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

const createBook = (input) => {

// just updating the object in memory... should be a write to a DB

    let currDate = new Date()

    books.push(input)
    return currDate 
}


module.exports = {
    JSON: scalarJSON,
    DateTime: scalarDateTime,
    mutation: {
        addBook: (input) => {
            return createBook (input) 
        }
    },
    query: {
        books: ()=> books
    }
};