// cadeia de protótipos (prototype chain)
// HERANÇA EM OBJETO,NÃO NA CLASSE
Object.prototype.attr0 = 'Z' // não fazer isso
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'C'}
const filho= {__proto__: pai, attr3:'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        // this referencia o objeto atual, super referencia o protótipo do objeto
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status()) // o this na função status nesse momento é o objeto ferrari e não o objeto carro!!!!!