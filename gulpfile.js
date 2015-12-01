var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('scripts', function() {
  gulp.src([
    'node_modules/annyang/annyang.min.js',
    'node_modules/reveal.js/js/reveal.js',
    'src/scripts/**/*.js'
  ]).pipe(concat('main.js'))
    .pipe(gulp.dest('public/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
  return gulp.src([
    'node_modules/reveal.js/css/reveal.css',
    'node_modules/reveal.js/css/theme/simple.css',
    'src/styles/**/*.css'
  ]).pipe(concat('main.css'))
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

gulp.task('watch', function() {
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/styles/**/*.css', ['styles']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('scripts', 'styles', 'watch');
});
