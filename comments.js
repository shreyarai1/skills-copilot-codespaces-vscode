// Create web server
// Create a new comment
// Get all comments
// Get a specific comment
// Delete a specific comment
// Update a specific comment

const express = require('express');
const commentsRouter = express.Router();

// Create a new comment
commentsRouter.post('/', (req, res) => {
    res.send('Create a new comment');
});

// Get all comments
commentsRouter.get('/', (req, res) => {
    res.send('Get all comments');
});

// Get a specific comment
commentsRouter.get('/:commentId', (req, res) => {
    res.send('Get a specific comment');
});

// Delete a specific comment
commentsRouter.delete('/:commentId', (req, res) => {
    res.send('Delete a specific comment');
});

// Update a specific comment
commentsRouter.put('/:commentId', (req, res) => {
    res.send('Update a specific comment');
});

module.exports = commentsRouter