//throw = throw new Error("Nome é necessario")
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome eh obrigatorio'
    }
    console.log('depois do erro')
}
// try... catch
try {
    sayMyName('ricky')
} catch(e) {
    console.log(e)
}
console.log('depois do try/ catch')

function fecharVenda(venda) {
    if(venda === '') {
        throw 'Nenhum produto adicionado!'
    }
    console.log('Forma de pagamento')
}
try {
    fecharVenda('')
}catch(e) {
    console.log(e)
}
console.log('venda concluida')
