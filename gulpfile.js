'use strict'

const { src, dest, watch } = require('gulp')
const gulp = require('gulp-sass')(require('sass'))
const prefix = require('gulp-autoprefixer')

const scss = './assets/scss/**/*.scss'
const css = './assets/css'

function compileSass(done) {
  src(scss)
    .pipe(gulp().on('error', gulp.logError))
    .pipe(prefix())
    .pipe(dest(css))
  done()
}

function watchSass() {
  watch(scss, compileSass)
}

exports.watchSass = watchSass

// npm install gulp --save-deps && npm install gulp-sass --save-deps && npm i gulp-autoprefixer
// gulp watchSass
