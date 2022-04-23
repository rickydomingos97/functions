/**
 * Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:
Crie um objeto(family) que possuirá 2 propriedades(incomes, expenses), ambas do tipo array:
    * receitas: [] 
    * despesas: []
    *  */
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00],
}
/* Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

// funcao para realizar somente a soma:
function sum(array) {
    
    let total = 0
    for(let value of array) {
        total += value
    }
    return total
}
/* funcao para somar, recebe o array que vai fazer a soma
// usando um forOf, total inicia com 0.
o value do array eh o total mais a soma dos valores
*/ 
function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0
    let balanceText = "negativo"
    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`Saldo: ${balanceText}: ${total}`)
}
calculateBalance()