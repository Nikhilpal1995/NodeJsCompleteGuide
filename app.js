const http = require('http');

//function rqlistener(req, res) {

//}

//http.createServer(rqlistener);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node.js Server</title></head>');
    //res.write(`<body><h1>Hello from my Node.js Server!</h1></body>`);
    res.write('<body>');

    // Use a switch statement to handle different URLs
    switch (req.url) {
        case '/home':
            res.write('<h1>Welcome home</h1>');
            break;
        case '/about':
            res.write('<h1>Welcome to About Us page</h1>');
            break;
        case '/node':
            res.write('<h1>Welcome to my Node.js project</h1>');
            break;
        default:
            res.write('<h1>My Node.js project</h1>');
            break;
    }

    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);