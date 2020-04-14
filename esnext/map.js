const teconologias = new Map()
teconologias.set('react', {framework: false})
teconologias.set('angular', {framework: true})
teconologias.set('tipo', 2)

console.log(teconologias.get('react').framework)

const chavesVariadas = new Map ([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123,'Número']
])

console.log(chavesVariadas)

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


//chavesVariadas.delete
//chavesVariadas.has