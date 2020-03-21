const http = require('http');

const PORT = process.env.PORT || 5000

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('nodejs-email');
}).listen(PORT);