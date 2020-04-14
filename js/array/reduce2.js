const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'a', nota: 5.3, bolsista: true },
    {nome: 'b', nota: 9.3, bolsista: false },
    {nome: 'c', nota: 2.3, bolsista: true }
]

let allBolsistas = alunos.reduce( (acumulador, v) => v.bolsista && acumulador)
console.log(allBolsistas)

let someBolsistas = alunos.reduce( (acumulador, v) => v.bolsista || acumulador)
console.log(someBolsistas)
