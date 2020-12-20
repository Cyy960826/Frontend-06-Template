const http = require('http');

const server = http.createServer((req, res) => {
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(Buffer.from(chunk.toString()));
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log("body", body);
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end('Hello World\n');
    });
});

server.listen(8088);