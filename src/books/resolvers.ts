import books from './books';

const resolvers = {
  Query: {
    books: (i1, i2, i3) => {
      console.log(i3);

      return books;
    },
  },
  Mutation: {
    createBook: (_, data) => {
      books.push(data);

      return true;
    },
  },
};

export default resolvers;
