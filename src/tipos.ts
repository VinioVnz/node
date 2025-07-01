//tipos básicos
let nome: String = 'Vinicius'; //tipo string
let numero: number = 10; //tipo number
let numeroDecimal: number = 10.2;
let booleano: boolean = true;

let tipoArray: number[] = [1,2,3]
let arrayString: String[] = ['A','B','C']

//tuplas - arryas com quantidade e tipos fixos no elemento
let tupla1:[String,number] = ['Vinicius',18]

//enum - conjunto de valores nomeados
enum Status {
    Ativo,
    Inativo,
    Pendente
}

let s: Status = Status.Ativo;

enum Pedido {
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9
}

let valor: any = "string" //desativa a verificação de tipo
valor = 100

let outroValor: unknown = "Mensagem"//tipo de segurança que precisa ser validado antes de usar
if(typeof outroValor === "string"){
    console.log(outroValor.toUpperCase());
}

//tipo void para funções
function log(): void{
    console.log('Olá mundo')
}

let arrowFunction = ():void => {

}

//funcoes com tipos definidos
let soma = (v1:number, v2:number): number => {
    return v1 + v2
}

soma(10,4)

//objetos tipados
let pessoa : {nome:String; idade:number} = {
    nome : "Vinicius",
    idade : 18
}

//union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor: number | String){
    console.log(valor)
}

//intersection types - permite combinar tipos diferentes
type Individuo = {nome:String}
type Funcionario = {salario: number}

type Empregado = Individuo & Funcionario
let emp: Empregado = {
    nome: 'Vinicius',
    salario: 40000
}

//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com
//diferentes tipos

function identidade<T> (valor: T): T{
    return valor;
}

let chamandoString = identidade<String>('Teste de chamada')
let chamandoNumerico = identidade<number>(100)

//classes com tipagem
class Carro{
    modelo:String
    constructor(modelo: String){
        this.modelo = modelo
    }
    buzinar():void{
        console.log('BI BI')
    }
}

//instanceando um objeto
let fusca = new Carro('fusca')
fusca.buzinar();