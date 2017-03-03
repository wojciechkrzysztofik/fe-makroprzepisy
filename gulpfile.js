
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var injectPartials = require('gulp-inject-partials');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

// Run webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      port: '8000',
      livereload: true,
      open: true
    }));
});

// inject HTML partials
gulp.task('html', function () {
  return gulp.src('./src/views/index.html')
           .pipe(injectPartials())
           .pipe(gulp.dest('./'));
});

// Compile css
gulp.task('css', function () {
  return gulp.src('src/stylesheets/styles.scss')
    .pipe( sourcemaps.init() )
    .pipe(sass.sync().on('error', sass.logError))
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('assets/stylesheets/') )
    .pipe(notify({
      title: "CSS compiled successfully",
      message: "Jupi!",
      onLast: true
    }));
});

// Build scripts
gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('assets/scripts/'))
      .pipe(notify({
          title: "JavaScript builded successfully",
          message: "Jupi!",
          onLast: true
      }));
});

// Watch changes
gulp.task('watch', function () {
    gulp.watch('src/stylesheets/**/*.scss', ['css']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/views/**/*.html', ['html']);

    return gulp.start(['webserver']);
});

gulp.task('default', function() {
    gulp.start(['html', 'watch']);
});
