console.log(this === module.exports)

function logThis() {
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()