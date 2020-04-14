// usado para processamento ASSÍCRONO 

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {                
            resolve(frase) // chama o then; TEM UM ÚNICO PARAMÊTRO, se precisar, passa um vetor ou objeto
            // resolve tem um único paramêtro
        }, segundos * 1000)
    })
}

 let mypromise = falarDepoisDe(5, 'Que legal!')
    .then(frase => frase.concat('?!/?')) // oq for retornado vai ser salvo na ÚNICA variavel que resolve armazena
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // se chamar o reject tem q colocar o catch pra tratar o erro
    // o catch é chamado pra qualquer erro que aconteça no promise

// mypromise.then(frase => frase.concat('?!/?')) // oq for retornado vai ser salvo na ÚNICA variavel que resolve armazena
// .then(outraFrase => console.log(outraFrase))

// o then em cascata sai armazenando o retorno e passando pra nova função que vier com o then,
// o processamento do promise (o que ta dentro da definição do promise) é feito uma única vez!!!! 

// mypromise.then(frase => { 
//     console.log(frase)
//     return frase.concat('oiiiii')  }).then(frase => { 
//         setTimeout(()=> {  
//             console.log(frase)}, 15 *1000)
//         }) 

// mypromise.then(frase => console.log(frase))

// console.log('esperando')