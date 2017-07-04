var gulp = require('gulp')
var path = require('path')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('less', function () {
  return gulp.src('./src/style.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('default', ['less'])
