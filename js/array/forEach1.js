const aprovados = ['agat', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indices) {
    console.log(indices+1, nome)
})


aprovados.forEach(function(nome, indices, array) {
    console.log(indices+1, nome)
    console.log(array)
})
