require('dotenv').config()

var host = process.env.TEST_HOST
var port = process.env.TEST_PORT

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

var http = require('http')

var server = http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, host, function () {
  console.log('Server running at http://' + host + ':' + port + '/')
})
