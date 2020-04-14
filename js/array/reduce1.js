const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'a', nota: 5.3, bolsista: true },
    {nome: 'b', nota: 9.3, bolsista: false },
    {nome: 'c', nota: 2.3, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce( function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)