// Create web server
const express = require('express');
const app = express();
const comments = require('./comments.json');

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Set up the /comments route to send the comments data
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});