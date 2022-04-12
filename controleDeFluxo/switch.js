/**
 * Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.
 * ============================
 * function calculate(number1, operator, number2) {
    let result = 0

    switch ( operator ) {
        case '+':
            result = number1 + number2
            break
        default:
            break
    }
    return result
}

console.log(calculate(4, '+' , 2))

function calculate(number1, operator, number2) {
    let result = 0 // esse result vai para dentro da operacao do case no switch

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('Operação invalida')
            break
    }
    return result
}
console.log(calculate(2, '+',  2))
 */
function calculate(number1, operator, number2) {
    let result = 0

    switch(operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Invalid Option')
            break
    }
    return result
}

console.log(calculate(2, '+', 4))
console.log(calculate(2, '-', 1))
console.log(calculate('h'))