// ES8: Object.values/Object.entries

const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// notação

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        console.log(this.nome)
    }
}

// Class

class Animal{}
class Cachorro extends Animal{
    falar() {
        return 'é o ti'
    }
}

console.log(new Cachorro().falar())