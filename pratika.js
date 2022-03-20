/**
 * Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.
 

let word = "pessoas"
console.log("a palavra " + word + " tem " + word.length + " letras")

let num = 1234
console.log(String(num).length);

let number = 33.313131313
console.log(number.toFixed(2).replace(".", ","))
=====================================================
let word = "casa"
console.log(word + " tem " + word.length + " letras!")
let palavra = word
console.log(palavra)
palavra = "sabaka"
console.log(palavra)

let number = 123.12423532432
console.log(number.toFixed(2))

let palavra = "banana"
console.log(palavra.toUpperCase())
let palavra2 = "BANANA"
console.log(palavra2.toLowerCase())

Separando strings
Descrição
Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/

