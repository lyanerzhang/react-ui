import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
import path from 'path'
import gulp from 'gulp'
import del from 'del'
import babel from 'gulp-babel'
import less from 'gulp-less'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import ts from 'gulp-typescript'
import through from 'through2'
const tsconfig = require('./tsconfig.json')
const packageJson = require('./package.json')
const __dirname = path.resolve()
function clean() {
  return del('./lib/**')
}

function buildES() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    module: 'ES6',
  })
  return gulp
    .src('src/**/*.{ts,tsx}', {
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

function buildStyle() {
  return gulp
    .src(['./src/**/*.less'], {
      base: './src/',
      ignore: ['**/demos/**/*', '**/tests/**/*'],
    })
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        relativeUrls: true,
      }),
    )
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ['last 2 versions', '> 1%', 'ios 7'],
        }),
      ]),
    )
    .pipe(gulp.dest('./lib/es/'))
}

function generatePackageJSON() {
  return gulp
    .src('./package.json')
    .pipe(
      through.obj((file, enc, cb) => {
        const rawJSON = file.contents.toString()
        const parsed = JSON.parse(rawJSON)
        delete parsed.scripts
        delete parsed.devDependencies
        delete parsed.publishConfig
        delete parsed.files
        delete parsed.resolutions
        delete parsed.packageManager
        const stringified = JSON.stringify(parsed, null, 2)
        file.contents = Buffer.from(stringified)
        cb(null, file)
      })
    )
    .pipe(gulp.dest('./lib/'))
}
export default gulp.series(clean, buildES, buildStyle, generatePackageJSON)
