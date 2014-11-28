gulp = require('gulp')
gutil = require('gulp-util')
# Styles
stylus = require('gulp-stylus')
nib = require('nib')
# JS
coffee = require('gulp-coffee')
# Templating
handlebars = require('gulp-handlebars')
defineModule = require('gulp-define-module')

gulp.task 'build', ->
  # Styles
  gulp.src('./app/css/style.styl')
    .pipe(stylus({use: [nib()], 'include css': true}))
    .pipe(gulp.dest('./public/css'))

  # Scripts
  gulp.src('./app/js/**/*.coffee')
    .pipe(coffee({bare: true, join: true, 'include css': true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/js'))

  # Templates
  gulp.src ['./app/templates/**/*.hbs']
    .pipe(handlebars())
    .pipe(defineModule('amd'))
    .pipe(gulp.dest('./public/js/templates'))

gulp.task 'default', ['build']
