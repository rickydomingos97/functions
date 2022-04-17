function comprar(cesta = '') {
    if(cesta === '') {
        throw ' cesta vazia! escolha algo legal para voce!'
    }
    console.log(cesta)
}
try {
    comprar('tenis nike')
}catch(e) {
    console.log(e)
}
console.log('final da aplicacao')