import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
        login(username: String!, password: String!): String!
    }
`