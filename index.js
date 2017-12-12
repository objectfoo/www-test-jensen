var http = require('http')
var args = process.argv.slice(2)
var port = 8282
var portIdx
var server
var newPort

// parse port
portIdx = args.indexOf('--port')
if (portIdx >= 0 && args[portIdx + 1]) {
  newPort = parseInt(args[portIdx + 1], 10) // could be NaN
  if (newPort) {
    port = newPort;
  }
}

server = http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, 'localhost', function () {
  console.log('Server running on port: ' + server.address().port)
})
