import books from '../books/books';
import shops from './shops';

const resolvers = {
  Query: {
    shops: () =>
      shops.map((shop: any) => {
        shop.books = books.filter((b) => b.shop.name === shop.name);

        return shop;
      }),
  },
};

export default resolvers;
