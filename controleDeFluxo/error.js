// throw

// function sayMyName(name)
// try... catch

function Pessoa(nome) {
    this.nome = nome
    this.andar = ()=>{
        return this.nome + ' esta andando'
    }
    this.comer = ()=>{
        return this.nome + ' esta comendo banana'
    }
}

const joao = new Pessoa('Joao')
console.log(joao.comer())