var host = process.env.TEST_HOST || '127.0.0.1'
var port = process.env.TEST_PORT || 8282
var http = require('http')

var server = http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, host, function () {
  console.log('Server running at http://' + host + ':' + port + '/')
})
