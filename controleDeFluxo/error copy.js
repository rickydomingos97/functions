function almoco(prato = '') {
    if(prato === '') {
        throw 'Prato vazio'
    }
    console.log(prato)
}try {
    almoco('Borshe')
}catch(e) {
    console.log(e)
}
console.log('fim')