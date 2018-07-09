let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: {ok: true}
  })
}

exports.handler = begin.json.post(route)
