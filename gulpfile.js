var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
  return gulp.src('src/styles/**/*.css')
    .pipe(gulp.dest('public/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('clean', function() {
  return del([
    'public/assets/css',
    'public/assets/js'
  ]);
});

gulp.task('default', ['clean'], function() {
  gulp.start('scripts', 'styles');
});