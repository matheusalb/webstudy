// node não suporta em default
import Pessoa from './pessoa'
// import './assets/css/estilo.css'
import './assets' 
// dessa forma acima ele vai buscar dentro de assets o arquivo index.js
// import './modulos/moduloA'

const atendente = new Pessoa
console.log(atendente.cumprimentar())