let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    location: req._url('/')
  })
}

exports.handler = begin.html.post(route)
