/**
 * O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis. 
 */

// primeiro eu executo a funcao e depois eu crio a funcao

sayMyName()

function sayMyName() {
    console.log('ricardo domingos')
}