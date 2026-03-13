const { watch, dest, src, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function compileCss() {
  return src('style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
      dirname: '',
      basename: 'style',
      extname: '.css'
    }))
    .pipe(dest('dist/css'))
}

function watchTask() {
  watch(['style/*.scss','style/components/*.scss'], compileCss);
}

exports.default = series(compileCss, watchTask);