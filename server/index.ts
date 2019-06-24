import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";
import { createConnection } from "typeorm";

const main = async () => {

    try {

        const connection = await createConnection()
        await connection.synchronize()
        console.log(`🚀  Server mysql connection success!`);

        const server = new ApolloServer({
            typeDefs,
            resolvers,
        })

        const { url } = await server.listen()
        console.log(`🚀  Server ready at ${url}`);
    } catch (error) {
        console.log(error)
    }

}

main()