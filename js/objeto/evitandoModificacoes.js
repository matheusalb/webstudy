const produto = Object.preventExtensions({
    nome:'qualqer', preco: 1.199, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto
console.log(produto)

// 
const pessoa = {nome: 'oi', idade: 69}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
delete pessoa.idade
pessoa.sobren = 'ti'
console.log(pessoa)


// freeze = selado + valores const

