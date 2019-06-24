import { QueryResolvers, Resolvers } from "../../generated/graphql";


const queryResolvers: QueryResolvers = {
    login: async (_, args) => {
        return args.username
    }
}

export const resolvers: Resolvers = {
    Query: queryResolvers
}