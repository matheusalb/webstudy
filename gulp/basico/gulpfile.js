// gulp é um framewokr que facilita a tarefa de sair da area de dev
// para a area de produção
const gulp = require('gulp')
const {series, parallel} = require('gulp')
// pegando o atributo series
// para fazer várias tasks em série

// const { series } = require('gulp')
// const series = gulp.series

// uma task
const antes1 = cb => {
    console.log('Tarefa Antes 1')
    // retorna a execução da callback, é a forma de informar ao gulp
    // que a task terminou
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    // retorna a execução da callback, é a forma de informar ao gulp
    // que a task terminou
    return cb()
}

// uma task
function copiar(cb) {
    // diz ao gulp os arquivos como entrada pro workflow 
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')   
        .pipe(gulp.dest('pastaB'))
        // ele já cria a pastaB
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPretoEBranco())
    
    // basicamente se utiliza pra fazer modificações pra ficar pronto
    // pra produção, geralmente se bota em pastas chamadas dist ou build

    // pipe -> serve para aplicar trasnformação nos arquivos definidos
    // pelo src; pode utilizar plugins que forneçam, podem ser feitas em cadeia
    return cb()
}

const fim = cb => {
    console.log('Fim!')
    // retorna a execução da callback, é a forma de informar ao gulp
    // que a task terminou
    return cb()
}

// series faz as tasks serem executadas em sequencia
// pode misturar series com parallel, ou o contrário
module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim
    )
// o gulp espera receber uma task chamada default
// ela é a porta de entrada pro gulp