class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
        // ter cuidado pois o this pode variar
    }
}

function Pessoa2 (nome) {
    // publico
    this.nome = nome
    this.falar = () => console.log(`meu nome é ${this.nome}`)
}

const p1 = new Pessoa2("Matheus")
p1.falar()