const express = require('express');

const postsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

//Catch-all endpoint
server.use('*', (request, response) => {
     response.status(404).json({
          message: 'Server Not Found'
     })
});

module.exports = server;