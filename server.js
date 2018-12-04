var express = require('express');
var server = express();
var api = require('./routes/api');

var http = require('http');
var appserver = http.createServer(server)
var port = normalizePort(process.env.PORT || '3000');
server.set('port', port);
appserver.listen(port);

server.use('/_api/', api);
server.use(express.static('build'));

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = server
