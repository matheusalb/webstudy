const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// assicrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config)
}) // ppasssa uma função que vai ser executada assim que o leitura for feita, bem mais interssante.

const config = require('./arquivo.json') //  se for JSON posso ler mais facil assim
console.log(config.db)

fs.readdir(__dirname, (er, arquivos) => {
    console.log(arquivos)
})