/** ### Transformar notas escolares
 * 
 * Crie um algoritimo que transforme as notas do sistema
 * numerico para sistema de notas em caracteres tipo A B C
 * 
 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69   - D
 * menor que 60    - F
 * 
 */

/**Solucao 1 */
let nota = 91

if(nota > 90) {
    console.log('A')
}else if(nota <= 90 && nota >= 80) {
    console.log('B')
}else if(nota >= 70 && nota <= 79) {
    console.log('C')
}else if (nota <= 69 && nota >= 60) {
    console.log('D')
}else {
    console.log('F')
}