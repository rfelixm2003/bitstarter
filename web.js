var express = require("express");
var fs = require('fs');
var content = require('buffer');

var app = express(express.logger());

var fs = require('fs');

var content;

app.get('/', function(request, content) {
  
fs.readFile('./index.html', function read(err, content) {
    if (err) {
        throw err;
    }
    content = data;
    console.log(content.toString('utf8'));
   
});


});


var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});
