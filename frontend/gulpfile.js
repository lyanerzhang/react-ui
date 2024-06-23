// const gulp = require('gulp')
// const del = require('del')
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
import gulp from 'gulp'
import del from 'del'
import babel from 'gulp-babel'
import ts from 'gulp-typescript'
const tsconfig = require('./tsconfig.json')
function clean() {
  return del('./lib/**')
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  })
  return gulp
    .src('./src/**/*.{ts,tsx}', {
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(
      babel({
        plugins: ['./babel-transform-less-to-css'],
      }),
    )
    .pipe(gulp.dest('lib/es/'))
}

export default gulp.series(clean, buildES)
