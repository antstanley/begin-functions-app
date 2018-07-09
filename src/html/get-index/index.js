let begin = require('@architect/functions')
const graphiql = require('./graphiql.js')

function route(req, res) {
	console.log(JSON.stringify(req, null, 2))

	let options = {
		endpointURL: '/api/graphql'
	}

	graphiql(options, req.query, (err,response)=> {
		if (err) {
			res({
				status: '404',
				html: "Request can't be fulfilled"
			})
		} else {	    
			res(response)
		}
	})
}

exports.handler = begin.html.get(route)