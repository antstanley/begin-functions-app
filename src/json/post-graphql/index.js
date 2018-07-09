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
				json: response
			})
		} else {
			res({
				status: '404',
				json: {
					error: JSON.stringify(err)
				}
			})
		}
	})
}

exports.handler = begin.json.post(route)
