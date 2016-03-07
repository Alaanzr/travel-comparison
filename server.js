var express = require('./config/express');

var app = express();
var port = process.env.port || 3000;

app.listen(port);
console.log('The server is listening on port ' + port);
