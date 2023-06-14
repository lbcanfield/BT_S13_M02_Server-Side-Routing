const server = require('./api/server');

const PORT = 1701;

server.listen(PORT, () => {
     console.log(`Server Connected:  Listening on http://localhost:${PORT}`)
})