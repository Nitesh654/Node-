const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);
// const server = http.createServer(handler.routes);
server.listen(4000);
