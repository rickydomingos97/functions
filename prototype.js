/**
 * Strings em numeros
 * 
 * let string = "123"
console.log(Number(string))
let number = 432
console.log(String(number))
 */





function Dia(dia) {
    this.day = dia
    this.terminou = ()=>{
        return this.day + ": esse dia terminou, ate mais!"
    }
}

const segunda = new Dia("Monday")
console.log(segunda.terminou())