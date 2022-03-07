// funcao eh um liquidificador

/*
function fazerSuco(fruta1, fruta2) {
    return 'suco de ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maça')
console.log(copo)

function fazerOmelete(ingrediente1, ingrediente2) {
    return ingrediente1 + ingrediente2
}
const panela = fazerOmelete('ovo', 'ovos')
console.log(panela)
*/

const fazerSuco = (fruta1, fruta2)=>{
    let copo = fruta1 + fruta2
    return copo
}
let fruta1 = 'banana'
let fruta2 = 'uva'
console.log(`suco de ${fazerSuco(fruta1, fruta2)}`)

const notaFiscal = function(produto1, produto2) {
    let compra = produto1 + produto2
    return compra
}
let produto1 = 10.99
let produto2 = 9.99
console.log(`valor final da compra ${notaFiscal(produto1, produto2)}`)