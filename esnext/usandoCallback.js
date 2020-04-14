// SEM PROMISE

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { // com modulo HTTP, no .get a resposta não chega de uma vez, recebo uma string de dados do que tá recebendo, tenho que fazer o controle manualmente
        let resultado = ''
        res.on('data', dados => { // tratamento
            resultado += dados
        })

        res.on('end', () => { // quando chegar os dados, o evento 'end' será disparado
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
// lembrar que a função não é SINCRONA, por isso tem que ser um dentro do outro, a chamada
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(valor => `A: ${valor.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(valor => `B: ${valor.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(valor => `C: ${valor.nome}`))     
            console.log(nomes)
        }) 
    })  
}) 
// com promise fica bem mais elegante do que compor callback um dentro da outra, (callback hell)
console.log('oiii')