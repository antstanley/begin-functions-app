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
      var result = {
        status: 200,
        isRaw: true,
        headers: { 'Content-Type': 'application/json' },
        body: gqlResponse
      }
      callback(null, result)
    })
    .catch(function (error) {
      var result = {
        status: error.statusCode,
        headers: error.headers,
        isRaw: true,
        body: error.message
      }

      callback(null, result)
    })
}

module.exports = graphQLServer;
