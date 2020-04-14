// COM PROMISE

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dado => resultado +=dado)
            
            res.on('end', () => { 
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// // lembrar que a função não é SINCRONA, por isso tem que ser um dentro do outro, a chamada
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(valor => `A: ${valor.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(valor => `B: ${valor.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(valor => `C: ${valor.nome}`))     
//             console.log(nomes)
//         }) 
//     })  
// }) 

// com promise fica bem mais elegante do que compor callback um dentro da outra, (callback hell)

// passa varias promises e quando todas as promisses forem resolvidas, ele chama a cadeia dos métodos 'then'
// array de promisses
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    // .then(turmas => console.log(turmas))
    // .catch(erros => console.log(erros.message))
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))
    .catch(e => console.log(e.message))

getTurma('D').catch(e=> console.log( 'deu erro, boy\n',e.message))
