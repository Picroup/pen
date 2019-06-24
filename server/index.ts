import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";

const main = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    const { url } = await server.listen()
    console.log(`🚀  Server ready at ${url}`);
}

main()