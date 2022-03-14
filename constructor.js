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