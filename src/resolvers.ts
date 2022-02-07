import books from './data';

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
