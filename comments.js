// Create web server with express
const express = require('express');
const app = express();
// Add body parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create in-memory database
const comments = [
  {id: 1, author: 'John', text: 'Hello World!'},
  {id: 2, author: 'Bob', text: 'This is a comment.'},
  {id: 3, author: 'Joe', text: 'Nice to meet you.'}
];

// Create route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create route to post a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,


