import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    jobs(offset: Int, limit: Int): [Job!]!
    job(id: ID!): Job!
  }

  extend type Mutation {
    deleteJob(id: ID!): Boolean!
    makeFavoriteJob(id: ID!): Job!
  }

  type Job {
    id: ID!
    title: String!
    link: String!
    description: String!
    pubDate: String!
    guid: String!
    isFavorite: Int!
    createdAt: Date!
  }
`;
