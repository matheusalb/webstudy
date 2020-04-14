// usando a notação literal
const ob1 = {}

// Object em JS
const ob2 = new Object

// funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // (o this seria a instancia) utilizar this. cria o atributo sendo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    } // lembrar que a função tem noção de onde foi criada, e ao instanciar o objeto, ela vai ter armazenada os paramêtros passados a função construtora, ou seja, serão atributos privados
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory, pode usar internamente tanto uma função construtora como um objeto explícito
// é um padrão de projeto
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

// Object.create
const filha = Object.create(null)
filha.nome= 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // Transforma o JSON num objeto
console.log(fromJSON.info)
console.log(typeof JSON)