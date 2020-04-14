// arrow function  (this)
// o this fica associado ao local onde a função foi escrita

const lexico1 = () => console.log(this ===exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
// em uma funçãoo tradicional o this aponta para global

// parametro default

// operador rest

// let total1 = 0
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3))