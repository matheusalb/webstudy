Array.prototype.meureduce = function(callback, acumulador) {
    let i
    if (acumulador === undefined){
        i = 1
        acumulador = this[0]
    } else i = 0

    for(;i < this.length; i++) {
       acumulador =  callback(acumulador, this[i])
    }
    return acumulador
}

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'a', nota: 5.3, bolsista: true },
    {nome: 'b', nota: 9.3, bolsista: false },
    {nome: 'c', nota: 2.3, bolsista: true }
]

let allBolsistas = alunos.meureduce( (acumulador, v) => v.bolsista && acumulador)
console.log(allBolsistas)

let someBolsistas = alunos.meureduce( (acumulador, v) => v.bolsista || acumulador)
console.log(someBolsistas)
