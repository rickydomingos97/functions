/**
 * O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis. 
 */

// primeiro eu executo a funcao e depois eu crio a funcao
// nesse caso ela sofre elevacao

/**
 * sayMyName()

function sayMyName() {
    console.log('ricardo domingos')
}


sayMyName()

const sayMyName = function sayMyName() {
    console.log('ricardo domingos')
}
 */


// Uncaught ReferenceError: Cannot access 'sayMyName' before initialization


/* arow function = expression que geralmente
// ela nao sofre hoisting
// geralmente atribui a uma constante 'const'

const myName = (name) => {
    console.log(name)
}

myName('ricardo')

*/

// CALLBACK FUNCTION
// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

function sayMyName(name) {
    console.log('antes da callback')
    name()
    console.log('depois do callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

console.log('=====================')

function liquidificador(frutas) {
    console.log('1 - agua')
    frutas()
    console.log('3 - tomar suco')
}

liquidificador(
    ()=>{
        console.log('2 - bater suco')
    }
)