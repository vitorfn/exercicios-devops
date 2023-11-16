const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('Olá, mundo!\n');

    res.end();
}).listen(30000);
