// for ... of
// vai criar um lop atraves de uma variavel previamente existente
/**
 * let nomes = ['joao', 'ana', 'maria']

for(let nome of nomes) {
    console.log(nome)
}
 */

let numbers = [1, 3, 2]

function soma(valores) {
    let total = 0
    for(let valor of valores) {
        total += valor
    }
    return total
}

console.log(soma())