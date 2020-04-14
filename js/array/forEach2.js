Array.prototype.meuForEach = function(callback) {
    for(let x in this) {
        callback(this[x], x, this)
    }
}

const aa = ['agat', 'aldo', 'daniel', 'raquel']
aa.meuForEach((valor, id) => console.log(id, valor))