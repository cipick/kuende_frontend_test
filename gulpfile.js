/*
  Keep this file because gulp does not support running directly from CoffeeScript
 */

require('coffee-script/register')

var gutil = require('gulp-util')
  , gulpfile = 'gulpfile.coffee'

gutil.log('Using file', gutil.colors.magenta(gulpfile));

// Execute CoffeeScript config
require('./' + gulpfile);
