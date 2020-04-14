// operador ... rest(juntar)/spread((espalhar))

//usar spread com objeto

const funcionario = {nome: 'Maria', salario: 1232.20}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

let a = [[1,2], [3,4]]
let b = [].concat(...a)
console.log(...a)
