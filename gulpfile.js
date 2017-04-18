
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var injectPartials = require('gulp-inject-partials');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Run webserver
gulp.task('webserver', function() {
  // gulp.src('dist')
  //   .pipe(webserver({
  //     port: '8000',
  //     livereload: true,
  //     directoryListing: true,
  //     open: true,
  //     path: './dist/index.html'
  //   }))

  connect.server({
    livereload: true,
    root: ['.', '.tmp', 'dist']
  });
});

// gulp.task('livereload', function() {
//   gulp.src(['.tmp/styles/*.css', '.tmp/scripts/*.js'])
//     .pipe(watch())
//     .pipe(connect.reload());
// });

// inject HTML partials
gulp.task('html', function () {
  return gulp.src('./src/views/*.html')
           .pipe(injectPartials())
           .pipe(gulp.dest('./dist/'))
           .pipe(connect.reload());
});

// Compile CSS
gulp.task('css', function () {
  return gulp.src('src/stylesheets/styles.scss')
    .pipe( sourcemaps.init() )
    .pipe(sass.sync().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/css/') )
    .pipe(notify({
      title: "CSS compiled successfully",
      message: "Jupi!",
      onLast: true
    }))
    .pipe(connect.reload());
});

// Minimalize CSS
gulp.task('minify-css', function() {
  return gulp.src('dist/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

// Build scripts
gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(notify({
          title: "JavaScript builded successfully",
          message: "Jupi!",
          onLast: true
      }))
      .pipe(connect.reload());
});

gulp.task('clean', function () {
    return gulp.src('assets/fonts', {read: false})
        .pipe(clean());
});

gulp.task('copy', function () {
    gulp.src(['src/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts/'))
    gulp.src(['src/images/**/*'])
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('build', function () {
    gulp.start(['html', 'css', 'minify-css', 'scripts', 'copy']);
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
