let begin = require('@architect/functions')
const graphqlServer = require('./graphQLServer.js')
const graphqlTools = require('graphql-tools')

const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolver.js')

function route(req, res) {

	console.log(JSON.stringify(req, null, 2))


	let options = {
		endpointURL: '/staging/graphql'
	}

	const schema = graphqlTools.makeExecutableSchema({
		typeDefs,
		resolvers
	})

	options.schema = schema


	graphqlServer(options, req, (err, response) => {
		if (err) {
			res({
				status: 404,
				json: JSON.stringify(err)
			})
		} else {
			res(response)
		}
	})
}

exports.handler = begin.json.post(route)
