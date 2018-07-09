let begin = require('@architect/functions')
const graphiql = require('./graphiql.js')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))

  let options = {
	    endpointURL: '/api/graphql'
	}

	graphiql(options, request.query, (err,response)=> {
	    if (response) {
	    	res(response)
	    } else {	    
		    res({
		    	status: '404',
	    		html: "Request can't be fulfilled"
	  		})

	    }
	});
  
}

exports.handler = begin.html.get(route)