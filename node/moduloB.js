// forma mais comum
let a = 2 // não é exportado
module.exports  = { // nao funciona utilizando 'exports' nem 'this', só com module.exports
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite!'
    }
}