const http = require('http');

var callback = function (request, reponse){
    response.writeHead(200, {"Content-type": "text/plain"});

    response.end("Ola mundo Node!\n");

};

var server = http.createServer(callback);

server.listen(3000);
console.log("Servidor iniciado...");

