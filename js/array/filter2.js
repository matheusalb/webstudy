Array.prototype.meuFilter = function(callback) {
    let aux = []
    for (let i in this) {
        if (callback(this[i], i, this)) aux.push(this[i]) 
    }
    return aux
}

const produtos = [
    {nome: 'notebook', preco: 2499, fragil:true},
    {nome: 'a', preco: 499, fragil:false},
    {nome: 'b', preco: 21499, fragil:true},
]

console.log(produtos.meuFilter(function(p) {
    return p.preco > 500
 }))
 
 console.log(produtos.meuFilter(v => v.preco > 500 && v.fragil))