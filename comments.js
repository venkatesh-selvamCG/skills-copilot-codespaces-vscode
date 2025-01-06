// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

// add middleware
app.use(bodyParser.json());

// serve static files
app.use(express.static('public'));

// get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// post comments
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error');
    }
    res.json(comments);
  });
});

// start server
app.listen(3000, function() {
  console.log('Server started on http://localhost:3000');
});
