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

/**Solucao 1
 * 
 * let nota = 91

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
console.log("O seu score foi de : " + nota)
*/
let score = -9
let scoreA = score >= 90 && score <=100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal

if (scoreA) {
    scoreFinal = "A"
} else if ( scoreB ) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if(scoreF) {
    scoreFinal = "F"
}else {
    scoreFinal = "Nota invalida"
}
console.log('A sua nota foi: ' + score)
console.log(scoreFinal)

