import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
    rating: Int
    shop: Shop
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, author: String): Boolean!
  }
`;

export default typeDefs;
