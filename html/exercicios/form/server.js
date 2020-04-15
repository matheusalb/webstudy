const express = require('express')
const app = express() // express fornece um servidor http
const bodyParser = require('body-parser')

// urlencoded é o padrão que o formulário é enviado;
// vai fazer um parse no body de geral p obter o body como objeto
// pode ser acessado por req.body
app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp, next) => {
    console.log(req.body)
    resp.send('<h1>Parabéns</h1>')
})

app.get('/usuarios', (req, resp, next) => {
    // console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req, resp, next) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003, () => console.log(`Servidor executando na porta 3003`))