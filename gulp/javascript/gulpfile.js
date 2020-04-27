const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function trasnformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => {
            // on captura eventos
            console.log(err)
        })
        .pipe(concat('condigo.min.js'))
        .pipe(gulp.dest('build/js'))

    // return cb()
}

function fim(cb) {
    console.log('Fim!!')
    return cb()
}

exports.default = series(trasnformacaoJS, fim)