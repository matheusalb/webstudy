for (let letra of "cod3r") console.log(letra)


const chavesVariadas = new Map ([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123,'Número']
])

for (let valor of chavesVariadas) {
    console.log(valor)
}

for (let [ch, vl] of chavesVariadas.entries()) {

    console.log(ch, vl)
}

// em map: varivel.entries() == variavel
const s = new Set(['a','b','c'])

for(let x of s) {
    console.log(x)
}