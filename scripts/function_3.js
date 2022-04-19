// function scope

/* quando declaro uma variavel e nao declaro um valor ela eh undefined
let subjects = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}
console.log(subjects)
console.log(createThink(subjects))

 

let assunto = 'criar video'

function createThink(assunto) {
    assunto = 'estudar'
    return assunto
}

console.log(assunto)
console.log(createThink(assunto))



let fruta = 'banana'

function suco(fruta) {
    fruta = 'manga'
    return fruta
}

console.log(fruta);
console.log(suco(fruta))
*/

let dinheiro = 'real'
function carteira(dinheiro) {
    dinheiro = 'rublo'
    return dinheiro
}
console.log(dinheiro)
console.log(carteira(dinheiro))

let language = 'ingles'
function conversa(language) {
    language = 'portugues'
    return language
}
console.log('============')
console.log(language)
console.log(conversa(language))

console.log(`o ${language} e o ${conversa(language)}`)
console.log('============')

let nome = 'irina'
function pessoa(nome) {
    nome = 'domingos'
    return nome
}
console.log(`${nome} ${pessoa(nome)}`)
console.log('============')