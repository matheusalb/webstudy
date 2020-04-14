// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'oiii'
produto['marca do produto'] = 'Generico'
produto.preco= 220

console.log(produto)
delete produto.preco
delete produt['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        logradouro: 'rua tilba',
        numero: 123
    },
    condutores: [{
        nome: 'tilbao',
        idade: 19
    }, {
        nome: 'o22',
        idade: 22
    }],
    calcularValorSeguro() {

    }
}
