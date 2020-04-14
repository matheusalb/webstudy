// pequeno projeto de API REST utilizando o framework Express

const bancoDeDados  = require('./bancoDeDados')
const bodyParser = require('body-parser')
const porta = 3003
// porta 80 é a padrão do protocoloc HTTP

const express = require('express')
const app = express()

// vai fazer o parser no body da requisição para todas as páginas, se a requisição for 'urlencoded'
app.use(bodyParser.urlencoded({extended: true}))

// resposta para a requisição get em /produtos
// app.use passa uma resposta pra todos os /alguma_coisa
app.get('/produtos',(req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos',(req, res, next) => {
    //console.log(req)
    //res.send({nome: 'Notebook', preco: 123.45}) // converte p JSON
    res.send(bancoDeDados.getProdutos())
})

// :id define um parametro digitado, está guardado na requisição
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    // res.params armazena os parametros que eu coloquei na URL
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})


app.get('/oii', (req, res, next) => {
    res.send("é o tiii")
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

