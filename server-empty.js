const {Server} = require("http");
const requestCallback = require("./request-callback");

const  server = new Server();

let i = 0;

server.on('request', requestCallback(i));

server.listen(3000);