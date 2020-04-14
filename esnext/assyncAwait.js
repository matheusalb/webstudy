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

// recurso do ES8
// Objetivo de simplificar o uso de promises!
let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // função async retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos =>{ console.log(alunos); return alunos.map(a => a.nome)} )
    .then(nomes => console.log(nomes))