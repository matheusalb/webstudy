// IIFE -> Immediately Invoked Function Express

(function() {
    console.log("sera executada na hora!")
    console.log('Foge do escopo mais abrangente!')
})()

console.log("sera executada na hora!")
console.log('Foge do escopo mais abrangente!')
// mesma coisa, só que aqui vai tocar no escopo global