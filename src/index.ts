console.log('it works!')
import { ApolloServer, gql } from "apollo-server";


const main = async () => {

    const server = new ApolloServer({
        typeDefs: gql`
            type Query {
                login(username: String!, password: String!): String!
            }
        `,
        resolvers: {
            Query: {
                login: async (_, args) => {
                    return args.username;
                }
            }
        }
    })

    const { url } = await server.listen()
    console.log(`🚀  Server ready at ${url}`);
}

main()