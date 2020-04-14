const pai = { nome: 'pedro', corCabelo:'preto'}

const filha1 = Object.create(pai) // cria o objeto já setando o seu protótipo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// const filha2 = Object.create(pai)

const filha2 = Object.create(pai, {
    nome: {value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'tilba'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    //console.log(key)
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}