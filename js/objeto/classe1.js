// classe é um detalhe de sintaxe, a classe é convertida a uma função por de baixo dos panos

class Lacamento {
    constructor(nome = 'Genérico', valor = 0, privado = 'sou privado') {
        this.nome = nome
        this.valor = valor
        this.printarPrivado = function () {
            console.log(privado)
        }
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))   
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// let lan = new Lacamento('veva', 199, 'oiii')
// lan.printarPrivado()

const salario = new Lacamento('salario', 45000)
const contaDeLuz = new Lacamento('Luz', -220)
salario.printarPrivado()


const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

