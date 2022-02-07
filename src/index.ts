import { ApolloServer } from 'apollo-server';
import * as books from './books';
import * as shops from './shops';

const items: { resolvers; typeDefs }[] = [books, shops];

const server = new ApolloServer({
  typeDefs: items.map((i) => i.typeDefs),
  resolvers: items.map((i) => i.resolvers),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
