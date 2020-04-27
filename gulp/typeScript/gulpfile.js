const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
// é o arquivo de configuração que o compilador do typescript vai usar
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    // nao precisa botar nada no src pois ele ja vai saber por conta do ts.createProject
    return tsProject.src()
        // tsProject vai ser responsável pela compilação
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)