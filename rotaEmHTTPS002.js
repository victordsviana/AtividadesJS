//Carrega o modulo em http e url
var fs = require('fs');
var http = require('http');
var url = require ('url');

// Função para ler um arquivo e escrevê-lo na response
function readFile(response, file){
    //faz a leitura do arquivo de forma assicrona
    fs.readFile(file, function(err,data){
        //quando ler, escreve na response o conteudo do arquivo JSON.
        response.end(data);
    });
}



//função de callback para o servidor http
var callback = function (request, response){
    //define o cabeçalho com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
    //faz o parse da url separando o caminho (rota)
    var parts = url.parse(request.url);
    //verifica a rota

    if(parts.path == "/rota1/cadastro"){
        // Retorna o Json do cadastro.json
        readFile(response, "cadastro.json");
    }else if (parts.path == "/rota1/catalogo"){
        //Retorna o Json do catalogo.json
        readFile(response, "catalogo.json");   
    }else if (parts.path == "/rota1/dados"){
        //Retorna o Json do dados.json
        readFile(response, "dados.json");   
    }else{
        response.end("Rota não Mapeada: " + parts.path);
    }
};
// cria um servidor http que responde para todas as requisições
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/")