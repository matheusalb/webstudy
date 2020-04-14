const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('oiiii \n')
    process.exit()
}  else {
    process.stdout.write('Escreve seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`oiiii ${nome}! \n`)
        process.exit()
    })
}