/**
 * Operator precedence
 * 
 * grouping     ()
 * negação e incremento     !  ++  --
 * multiplicacao e divisao     *   /
 * adicao e subtracao     +  -
 * relacional      <  <=  >  >=c
 * igaldade     ==  !=  ===  !==
 * AND     &&
 * OR     ||
 * Condicional     ? :
 * assigment ( atribuição )     = +=  -=  *=
 */

console.log( 2 + 5 * 10) //(5*10+2)
console.log((2 + 5) * 10) // (2 + 5 * 10)
console.log(3 > 2 > 1) // true > 1
console.log(true == 1) // true == 1 verdadeiro pois true é igual a 1
console.log(true === 1) // true === 1 false
console.log( 3 > 2 && 2 > 1 ) // V e V é igual true