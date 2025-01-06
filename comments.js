// create web server
// create comments
// read comments

// create web server
const express = require('express');
const app = express();
const port = 3000;

// create comments
const comments = [
    { name: 'John', comment: 'Hello World!' },
    { name: 'Mary', comment: 'Hello Universe!' }
];

// read comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// test with curl
// curl http://localhost:3000/comments