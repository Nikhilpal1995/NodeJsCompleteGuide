const http = require('http');

//function rqlistener(req, res) {

//}

//http.createServer(rqlistener);

const server = http.createServer((req, res) => {
    console.log(`my name is NIKHIL`);
})

server.listen(4000);