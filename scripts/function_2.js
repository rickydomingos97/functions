// Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

// function anonymous or function expression

// parametros da funcao

/*
const sum = function(number1, number2) {
    console.log(number1 * number2);
}
<<<<<<< HEAD
let number1 = 20
let number2 = 11
sum(number1, number2)
console.log(`o numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`a soma é ${number1, number2}`)
*/

/*const sum = function(number01, number02) {
    let total = number01 + number02
    return total
}


let number01 = 20
let number02 = 15

console.log(`o numero 1 eh ${number01}`)
console.log(`o numero 2 eh ${number02}`)
console.log(`a soma eh ${sum(number01, number02)}`)
*/

/**
    const soma = function(numero1, numero2) {
    let totalsoma = numero1 + numero2;
    return totalsoma
}

let nomer1 = 20
let nomer2 = 5

console.log(`o numero1 eh ${nomer1}`)
console.log(`o numero2 eh ${nomer2}`)
console.log(`a soma eh ${soma(nomer1, nomer2)}`)
 */

/**
 * const soma = function() {
    let totalsoma = nomer1 + nomer2;
    return totalsoma
}

let nomer1 = 20
let nomer2 = 5

console.log(`o numero1 eh ${nomer1}`)
console.log(`o numero2 eh ${nomer2}`)
console.log(`a soma eh ${soma(nomer1, nomer2)}`)
 */


/*
const soma = (numero1, numero2)=>{
    let total = numero1 + numero2
    return total
}

let nomer01 = 15
let nomer02 = 4

console.log(`o primeiro numero eh ${nomer01}`)
console.log(`o segundo numero eh ${nomer02}`)
console.log(`a soma dos dois numeros eh ${soma(nomer01, nomer02)}`)*/

/*
const minus = (numero1, numero2)=>{
    let total = numero1 - numero2
    return total
}

let n1 = 20
let n2 = 1
console.log(`${minus(n1, n2)}`)

const texto = function(palavra1, palavra2) {
    let linha = palavra1 + palavra2
    return linha
}

let p1 = "oi "
let p2 = "oioi"
console.log(`${texto(p1, p2)}`)


const multiply = (numero1, numero2)=>{
    let total = numero1 * numero2
    return total
}

let numero01 = 2
let numero02 = 20
console.log(`resultado ${multiply(numero01, numero02)}`)

const divide = ()=>{
    let totaldivisao = nomer01 / nomer02
    return totaldivisao
}

let nomer01 = 40
let nomer02 = 2

console.log(`resultado da divisao eh ${divide(nomer01, nomer02)}`)

*/
let nomer1 = 8
let nomer2 = 2

const vezes = (nomer1, nomer2)=>{
    let total = nomer1 * nomer2
    return total
}
console.log(`Operacao de multiplicacao`)
console.log(`${nomer1} x ${nomer2} = ${vezes(nomer1, nomer2)}`)



const soma = (nomer1, nomer2) => {
    let total = nomer1 + nomer2
    return total
}
console.log(`operacao de soma`)
console.log(`${nomer1} + ${nomer2} = ${soma(nomer1, nomer2)}`)

const minus = (nomer1, nomer2) => {
    let total = nomer1 - nomer2
    return total
}
console.log(`operacao de subtração`)
console.log(`${nomer1} - ${nomer2} = ${minus(nomer1, nomer2)}`)

/**============================================================== */

// funcao eh um liquidificador

/*
function fazerSuco(fruta1, fruta2) {
    return 'suco de ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maça')
console.log(copo)

function fazerOmelete(ingrediente1, ingrediente2) {
    return ingrediente1 + ingrediente2
}
const panela = fazerOmelete('ovo', 'ovos')
console.log(panela)
*/

const fazerSuco = (fruta1, fruta2)=>{
    let copo = fruta1 + fruta2
    return copo
}
let fruta1 = 'banana'
let fruta2 = 'uva'
console.log(`suco de ${fazerSuco(fruta1, fruta2)}`)

const notaFiscal = function(produto1, produto2) {
    let compra = produto1 + produto2
    return compra
}
let produto1 = 10.98
let produto2 = 9.99
console.log(`valor final da compra ${notaFiscal(produto1, produto2)}`)

const Russia = function (cidade1, cidade2) {
    let pais = cidade1 + cidade2
    return pais
}
let cidade1 = 'moscow '
let cidade2 = 'krasnodar'
console.log(`as suas cidades sao: ${Russia(cidade1, cidade2)}`)