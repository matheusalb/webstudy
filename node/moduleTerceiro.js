// npm é o gerenciador de biblioteca do node
// npm i 'nome_biblioteca' ; instala de forma local
// sudo npm i -g 'nome_biblioteca"; instala de forma global

const _ = require('lodash')
setInterval(() => {
    console.log(_.random(600,1000))   
}, 1000);