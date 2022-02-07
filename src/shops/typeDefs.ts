import { gql } from 'apollo-server';

const typeDefs = gql`
  type Shop {
    name: String
    address: String
    books: [Book]
  }

  type Query {
    shops: [Shop]
  }
`;

export default typeDefs;
