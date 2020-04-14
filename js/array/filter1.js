const produtos = [
    {nome: 'notebook', preco: 2499, fragil:true},
    {nome: 'a', preco: 499, fragil:false},
    {nome: 'b', preco: 21499, fragil:true},
]

console.log(produtos.filter(function(p) {
   return p.preco > 500
}))

console.log(produtos.filter(v => v.preco > 500 && v.fragil))