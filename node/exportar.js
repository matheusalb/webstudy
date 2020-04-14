console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // aponta
exports.b = 2 // aponta
module.exports.c = 3 // pra mim 

module.exports = {publico: true}