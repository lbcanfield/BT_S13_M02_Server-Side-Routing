const express = require('express');

const server = express();

server.use(express.json());



//Catch-all endpoint
server.use('*', (request, response) => {
     response.json({
          message: 'Server Not Found'
     })
});

module.exports = server;