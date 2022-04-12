/**
 * Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:
 * 
 * function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")

==========================================
* expressao new
* criar um novo objeto
* this keyword

==============================
console.log('===== function constructor =====')

function Person(name) {
	this.name = name
	this.walk = () => {
		return this.name + " esta andando"
	}
}
const ricardo = new Person("ricardo")
const joao = new Person("Joao")
console.log(ricardo.walk())
console.log(joao.walk())

function Carro(nome) {
	this.nome = nome
	this.liga = function() {
		return this.nome + " esta ligando"
	}
}

const civic = new Carro("Civic")
console.log(civic.liga())

===================================
function Carro(modelo) {
	this.modelo = modelo
	this.cor = function() {
		return " verde escuro"
	}
}
const civic = new Carro("Civic")
const onix = new Carro("Onix")
console.log(civic.modelo + civic.cor())

function Card(bandeira) {
	this.bandeira = bandeira
	this.visa = ()=>{
		return " Este cartao eh Visa"
	}
	this.master = ()=>{
		return " este cartao eh master"
	}
}

const inter = new Card()
const nubank = new Card()
console.log(inter.master())
console.log(nubank.visa())

=====================================
function Pessoa(nome) {
	this.nomePessoa = nome
	this.comer = ()=>{
		return this.nome + " esta comendo manga"
	}
	this.dormir = ()=>{
		return this.nome + " esta com muito sono"
	}
}

const joao = new Pessoa("JOAO")
const maria = new Pessoa("Maria")
console.log(joao.comer())
console.log(maria.comer())
console.log(maria.dormir())
console.log(joao.nomePessoa)
========================================
function Aula(aula) {
	this.aulas = aula
	this.assistir = function () {
		return this.aulas + ": aula ao vivo"
	}
	this.disponivel = ()=>{
		return false + " aula nao disponivel"
	}
}

const matematica = new Aula("Matematica")
console.log(matematica.assistir())

const russo = new Aula("Russo")
console.log(russo.assistir())
console.log(russo.disponivel())
====================================
<<<<<<< HEAD

=======
>>>>>>> c648a897e4d854972e08960fc4b404257ca552e7
function Pessoa(nome) {
	this.nomePessoa = nome
	this.acordar = ()=>{
		return this.nomePessoa + ": esta acordando"
	}
	this.dormir = ()=>{
		return this.nomePessoa + " esta dormindo"
	}
}

const maria = new Pessoa("MARIA")
console.log(maria.acordar())
const joao = new Pessoa("JOAO")
console.log(joao.dormir())
<<<<<<< HEAD
====================================
function Radio(nome) {
	this.nomeRadio = nome
	this.play = ()=>{
		return this.nomeRadio + ": tocando agora"
	}
	this.song = ()=>{
		return ": Inna - UP"
	}
	this.song1 = ()=>{
		return ": abcdfu"
	}
}

const europaplus = new Radio("EuropaPlus")
console.log(europaplus.nomeRadio)
console.log(europaplus.play())
console.log(europaplus.song())
console.log(europaplus.song1())
*/
/*
function Pagamento(options) {
	this.opcoes = options
	this.visa = ()=>{
		return ": visa"
	}
	this.master = ()=>{
		return ": master"
	}
	this.cash = ()=>{
		return ": dinheiro"
	}
}
const pagamentoCard = new Pagamento("Pagamento cartao")
const pagamentoCash = new Pagamento("Pagamento cash")
console.log(pagamentoCard.visa())
console.log(pagamentoCash.cash())


function Russia(cidade) {
	this.cidade = cidade
	this.rua = ()=>{
		return "Rua: petra metalnikova"
	}
}

const cidade = new Russia("Krasnodar")
const cidade2 = new Russia("Ural")

console.log(cidade.cidade)
console.log(cidade.rua())
*/
/* transformar uma cadeia de caracteres em elementos de um array
let word = "krasnodar"
console.log(Array.from(word))
console.log(Array.from(word).length)
*/
/**
 * Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
 */

let techs = ["html", "css", "js", "java"]
// adicionar um item ao fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente alguns elementos do array
console.log(techs)
// o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições,
//console.log(techs.slice(3, 5))

// remover 1 ou mais itens em qualquer posição do array
//console.log(techs.splice(2, 2))
//console.log(techs)
// encontrar a posiçao de um elemento no array
let index = techs.indexOf('css')
console.log(index)
// agora quero remover o item que eu procurei a posicao. usando:
techs.splice(index, 2) // o index do elemento buscado e a quantidade a ser removida a partir dele
console.log(techs)
/*
let nomes = ['joao', 'maria', 'carla']
nomes.push("sasha")
nomes.unshift("Igor")
//nomes.pop()
//nomes.shift()
console.log(nomes)
// console.log(nomes.slice(0, 1))
//console.log(nomes.splice(1, 2))
let index = nomes.indexOf('maria')
nomes.splice(index, 1)
console.log(nomes)
 */


function Pedido(order) {
    this.order = order
    this.enviado = ()=>{
        return "status: " + this.order + " => este pedido foi enviado com sucesso"
    }
}

const pedido1 = new Pedido("Pedido1")
console.log(pedido1.enviado())