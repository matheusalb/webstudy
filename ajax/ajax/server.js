// faz o parser do body da requisição, transforma os dados recebidos no body em um objeto
const bodyParser = require('body-parser')
const express = require('express') // fornece um servidor http
const app = express()

// aqui vai servir todo o contéudo estático localizado a partir da raiz do servidor
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// vai executar a página index.html, por padrão
app.get('/teste', (req, res) => res.send(new Date))

// pra interpretar o formulário que veio o arquivo do upload
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// name="arquivo" que tá lá no input do html 
const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    // funcao callback executada quando acaba o upload
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }
        
        res.end('Conclúido com sucesso!')
    })
})

// sempre que eu receber dados para ler no servidor,
// preciso utilizar o body parser
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas pegar dados do client no express 
    // req.body
    // req.query; // parametros de uma requisição do tipo get
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Servidor executando na porta 8080'))