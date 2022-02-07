import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import * as books from './books';
import * as shops from './shops';

const startServer = async () => {
  const items: { resolvers; typeDefs }[] = [books, shops];

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: items.map((i) => i.typeDefs),
    resolvers: items.map((i) => i.resolvers),
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: '/',
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000`);
};

startServer();
