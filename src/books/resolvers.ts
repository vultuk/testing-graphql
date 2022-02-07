import books from './books';

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (_, data) => {
      books.push(data);

      return true;
    },
  },
};

export default resolvers;
