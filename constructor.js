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

*/
function Carro(modelo) {
	this.modelo = modelo
	this.cor = function() {
		return " verde escuro"
	}
}
const civic = new Carro("Civic")
const onix = new Carro("Onix")
console.log(civic.modelo + civic.cor())