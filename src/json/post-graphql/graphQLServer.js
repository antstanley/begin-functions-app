var apollo_server_core_1 = require('apollo-server-core')

function graphQLServer (options, request, callback) {
  if (!options) {
    throw new Error('Apollo Server requires options.')
  }
  if (arguments.length > 3) {
    throw new Error(
      'Apollo Server expects exactly one argument, got ' + arguments.length
    )
  }

  var queryRequest = {
    method: request.method,
    options: options,
    query: request.method === 'POST' ? request.body : request.query
  }
  if (queryRequest.query && typeof queryRequest.query === 'string') {
    queryRequest.query = JSON.parse(queryRequest.query)
  }

  apollo_server_core_1
    .runHttpQuery([request], queryRequest)
    .then(function (gqlResponse) {
      console.log(gqlResponse)
      const result = {
        json: JSON.parse(gqlResponse.graphqlResponse)
      }
      callback(null, result)
    })
    .catch(function (error) {
      console.log(`Error: ${error}`)
      const result = {
        status: 404,
        json: error
      }

      callback(null, result)
    })
}

module.exports = graphQLServer;
