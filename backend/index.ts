require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/typedefs';
import { resolvers } from './schema/resolvers';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

(async function startApolloServer() {
	const app = express();

	mongoose
		.connect(
			process.env.MONGOD_DB_URL || 'mongodb://localhost:27017/blockchain-arcade'
		)
		.then(() => console.log('Connected to MongoDB...'))
		.catch(err => console.error('FAILED to connect to MongoDB: ' + err));

	// typeDefs are all the types & queries I define in GraphQL
	// resolvers are all the functions that resolve the data
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		// Useful for accessing data across every request, like authentication
		context: ({ req, res }: { req: Request; res: Response }) => ({ req, res })
	});

	await server.start();

	// Applying cors here would apply to ALL routes, not just /graphql
	// if you want it to just apply to /graphql, add it to .applyMiddleware()
	app.use(cors());

	server.applyMiddleware({ app });

	const port = process.env.PORT || 4000;
	app.listen(port, () =>
		console.log(`Listening at: http://localhost:${port}/graphql`)
	);
})();
