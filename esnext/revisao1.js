import { CONNREFUSED } from "dns"

// let e const
console.log(a)
{
    var a = 2
    let b = 3 // let tem escopo de bloco
    console.log(b)
}

console.log(a)
// console.log(b) // da erro

// for(let i = 0; i < 3; i++) {
//     let soma = i
// }
// console.log(soma)


// Template String

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x, ,y] =[1,2,3]
console.log(x, y)

const {idade: i, nome} = {nome: 'ana', idade: 9}
console.log(i, nome)