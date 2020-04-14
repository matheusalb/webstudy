// conjunto n indexiado n aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')
console.log(times)

const nomes = ['raquel', 'lucas', 'julia','lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)