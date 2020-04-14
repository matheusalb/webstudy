// pessoa -> #endereçoMemória
const pessoa = {nome:'joao'}
pessoa.nome = 'Pedro'

// o endereço de memoria não muda!

// da erro pois vai mudar o endereço de memória
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Ńão deixa mudar mais o objeto
pessoa.nome= 'tilba'
console.log(pessoa.nome)