const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 133.45}',
    '{"nome": "kit de lapis", "preco":41.22}'
]

let precos = carrinho.map(JSON.parse).map( value => value.preco)
console.log(precos)