

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const app = express();
const PORT = 8080;

let aboutMessage = 'projectWolf API v.1.0.0'

// always type definitions 
const typeDefs = `
	type Query {
		about: String!
	}
	type Mutation {
		setAboutMessage(message: String!): String
	}
`;

// always resolvers, has to match type definitions. we can define more mutations if we want to.
const resolvers = {
	Query: {
		about: () => aboutMessage,
	},
	Mutation: {
		setAboutMessage,
	} 
};

function setAboutMessage(_, { message }) {
	return aboutMessage = message;
}

const server = new ApolloServer({
	typeDefs,
	resolvers
});

app.use(express.static(`${__dirname}/public`)); // static assets js/css etc..

// endpoint for our graphQL API
server.applyMiddleware({ app, path: '/graphql'})

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});




app.listen(PORT, () => {
    console.log("server listening on port", PORT);
});