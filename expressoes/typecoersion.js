/**
 * Falsy
 * Quando um valor é considerado false em contextos
 * onde um booleano é obrigatorio ( condicionais e loops )
 * false
 * 0
 * -
 * ""
 * null
 * undefined
 * NaN
 */
console.log( "" ? 'verdadeiro' : 'false' )

/**
 * TRUTHY
 * Quando um valor é considerado true em contextos
 * onde um booleano é obrigatorio
 * 
 * true
 * {}
 * []
 * 1
 * 3.23
 * "0"
 * "false"
 * -1
 * Infinity
 * -Infinity
 */
console.log( {} ? 'verdadeiro' : 'false' )