// Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

// function anonymous or function expression

// parametros da funcao
const sum = function(number1, number2) {
    console.log(number1 * number2);
}

//let number1 = 20
//let number2 = 11
//sum(number1, number2)
//console.log(`o numero 1 é ${number1}`)
//console.log(`O numero 2 é ${number2}`)
//console.log(`a soma é ${number1, number2}`)

let number1 = 2
let number2 = 4
sum(number1, number2)
console.log(sum)