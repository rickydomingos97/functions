/**
 * Strings em numeros
 */

let string = "123"
console.log(Number(string))
let number = 432
console.log(String(number))

function Vendas(vendas) {
    this.venda = vendas
    this.pagamento = () => {
        return this.venda + ": venda no cartao."
    }

}
const venda = new Vendas("VendasSorvete")
console.log(venda.pagamento())
