// create web server
// 1. include http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var uri = url.parse(req.url);
    if (req.method == 'POST') {
        var postData = '';
        req.on('data', function(chunk) {
            postData += chunk;
        });
        req.on('end', function() {
            var params = querystring.parse(postData);
            console.log(params);
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('You sent the name "' + params.name + '".');
        });
    } else {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    }
});
server.listen(8080);
console.log('Server is running at http://');