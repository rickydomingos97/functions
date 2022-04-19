/**
 * O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos
 * =================================
 * type conversion (typecasting)
 * type coersion
 *
 * Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.
 */
// aqui temos uma coersion, onde o '9' String força
// o 5 number a virar uma string e concatena
console.log('9' + 5)

/**Aqui temos uma type conversion, onde a string
 * '9' foi feito o casting para number e assim
 * somando com o 5 number e resultando em 14.
 * 
 * casting
 */
console.log(Number('9') + 5)