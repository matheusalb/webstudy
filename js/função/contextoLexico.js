const valor = 'Global' // tá no contexto do arquivo

function minhaFuncao() { // tá no contexto do arquivo
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// a função tem consciencia do local que foi definida
// tem informação do local onde ela foi definida
