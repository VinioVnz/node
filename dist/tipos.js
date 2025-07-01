"use strict";
//tipos básicos
let nome = 'Vinicius'; //tipo string
let numero = 10; //tipo number
let numeroDecimal = 10.2;
let booleano = true;
let tipoArray = [1, 2, 3];
let arrayString = ['A', 'B', 'C'];
//tuplas - arryas com quantidade e tipos fixos no elemento
let tupla1 = ['Vinicius', 18];
//enum - conjunto de valores nomeados
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo;
var Pedido;
(function (Pedido) {
    Pedido[Pedido["Pendente"] = 1] = "Pendente";
    Pedido[Pedido["Recebido"] = 2] = "Recebido";
    Pedido[Pedido["Cancelado"] = 9] = "Cancelado";
})(Pedido || (Pedido = {}));
let valor = "string"; //desativa a verificação de tipo
valor = 100;
let outroValor = "Mensagem"; //tipo de segurança que precisa ser validado antes de usar
if (typeof outroValor === "string") {
    console.log(outroValor.toUpperCase());
}
//tipo void para funções
function log() {
    console.log('Olá mundo');
}
let arrowFunction = () => {
};
//funcoes com tipos definidos
let soma = (v1, v2) => {
    return v1 + v2;
};
soma(10, 4);
//objetos tipados
let pessoa = {
    nome: "Vinicius",
    idade: 18
};
//union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor) {
    console.log(valor);
}
let emp = {
    nome: 'Vinicius',
    salario: 40000
};
//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com
//diferentes tipos
function identidade(valor) {
    return valor;
}
let chamandoString = identidade('Teste de chamada');
let chamandoNumerico = identidade(100);
//classes com tipagem
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }
    buzinar() {
        console.log('BI BI');
    }
}
//instanceando um objeto
let fusca = new Carro('fusca');
fusca.buzinar();
