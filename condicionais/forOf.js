// for ... of
// vai criar um lop atraves de uma variavel previamente existente
/**
 * let nomes = ['joao', 'ana', 'maria']

for(let nome of nomes) {
    console.log(nome)
}
 */

let entradas = [23, 1, 20, 2]

function soma(array) {
    let total = 0

    for(let valor of array) {
        total +=valor
    }
    return total
}