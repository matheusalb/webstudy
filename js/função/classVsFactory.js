class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        // ter cuidado pois o this pode variar
    }
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome ${nome}`)
    }
} 

const p2 = pessoa('Pedro')
p2.falar()

const pessoaaaa = n => {
    return {
        nome: n,
        falar() { console.log(`Meu nome ${this.nome}`)}
    }
} 