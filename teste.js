/*
function testeVar(){
    var a = 1;
    var b = 2;
    var soma = a+b;
    var nome ="a";


    if (nome == undefined){
        console.log("Teste 1 - Nome não foi inicializado");
    }

    if(typeof(nome) == "undefined"){
        console.log("Teste 2 - Nome não foi inicializado");
    }

    console.log("O tipo do nome é %s e o tipo da soma é %s", typeof(nome), typeof(soma));
    console.log("Ola %s, o resultado da soma é %d", nome, soma, "que", "legal");    
}
testeVar();


function testeArray(){
    var numeros= [1,2,3]
    numeros.push(4) //adiciona numero 4
    numeros.push(5) //adiciona numero 5
    for(let i in numeros){
        console.log(numeros[i]); //imprime cada item do array
    }

}
testeArray();


function testeArray1(){
    var numeros1= [1,2,3]
    numeros1.push(4) //adiciona numero 4
    numeros1.push(5) //adiciona numero 5
    numeros1.map(n => console.log(n));
}
testeArray1();


function objeto1(){
    var pessoa=Object();
    pessoa.nome = "João";
    pessoa.hello = function(){
        return "Hello Pessoa";
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto1();


function objeto2(){
    var pessoa={
    nome : "Pedro",
    hello : function(){
        return "Hello Pessoa";
    }
}
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto2();


function Pessoa(){
    this.nome = "João";
    this.hello = function(){
        return "Hello Pessoa";
    }
}
function objeto3(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto3();
*/
class Pessoa{
    constructor(){
        this.nome = "Jao";
    }
    hello(){
        return "Hello pessoa"
    }
}

function objeto4(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto4();

   