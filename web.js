var express = require('express');
var fs = require('fs');
var content = require('buffer');

var app = express.createServer(express.logger());

var fs = require('fs');

//var content;

// First I want to read the file
fs.readFile('./index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
});

app.get('/', function(request, response) {

 response.send(content.toString('utf8'));


});//app.get end

var port = process.env.PORT || 8080;
app.listen(port, function() {
 console.log("Listening on " + port);
});
