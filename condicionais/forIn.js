// for in cria um lop em cima de um objeto paegando as suas propriedades
/**
 * let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    //console.log(person.name)
    console.log(person[property])
}
 */
let car = {
    name: 'Jeep',
    year: 2020,
    color: 'red'
}
// criar o loop com a variavel property:
for(let property in car) {
    console.log(property)
    console.log(car[property])
}