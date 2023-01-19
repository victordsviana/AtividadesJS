//Carrega o modulo em http e url
var http = require('http');
var url = require ('url');

//função de callback para o servidor http
var callback = function (request, response){
    //define o cabeçalho com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
    //faz o parse da url separando o caminho (rota)
    var parts = url.parse(request.url);
    //verifica a rota
    if(parts.path == "/"){
        response.end("Site Principal");
    }else if (parts.path == "/rota1"){
        response.end("Site da Rota 1");   
    }else{
        response.end("Rota inválida: " + parts.path);
    }
};
// cria um servidor http que responde para todas as requisições
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/")