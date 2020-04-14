const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // É UM CLIENTE HTTP!!!!!!

function menorSalario(genero, nacionalidade, funcionarios) {
    return funcionarios.filter((element) => element.genero === genero && element.pais === nacionalidade)
    .reduce((acumulador, current) => current.salario < acumulador.salario ? current : acumulador) 
}

axios.get(url).then(respose => {
    const funcionarios = respose.data
    // mulher chinesa c menor salário
    theWoman = menorSalario("F","China", funcionarios)
    console.log(theWoman)
})

// ao dar npm i no diretório ele vai instalar todas as dependencias necessárias descritas pelo package.json
// c opção script voce pode usar opções padrões para usar com o npm, ex: npm start, npm test ..., comandos buscam por padrao o arquivo descrito por 'main'
// se não for padrão bota o run antes ex: npm run dev 