const { series, parallel } = require('gulp') 
const gulp = require('gulp')
const sass = require('gulp-sass')
const unglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat') 

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        // o sass() já converte o sass para css
        .pipe(sass().on('error', sass.logError))
        .pipe(unglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
        
}

function copyHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copyHTML)