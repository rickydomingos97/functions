// try catch
function notificacao(message = '') {
    if(message === ''){
        throw 'Sem novas mensagens'
    }
    console.log(message)
}
try {
    notificacao('')
}catch(e) {
    console.log(e)
}
console.log('final da aplicacao')