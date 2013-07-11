var express = require('express');
var fs = require('fs');
var content = require('buffer');

var app = express.createServer(express.logger());

var fs = require('fs');

var content;

app.get('/', function(request, response) {
  
 response.send("hello");


});//app.get end

var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});
