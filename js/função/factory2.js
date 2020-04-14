function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

let p1 = criarProduto('telefone', 1000)
let p2 = criarProduto('tv', 500)
console.log(p1)
console.log(p2)