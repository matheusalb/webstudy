const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13  
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // é acessível a partir do . ainda
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/213'
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b:2 }
const o2 = {c:3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)