
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var injectPartials = require('gulp-inject-partials');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var dirSync = require('gulp-directory-sync');
var del = require('del');

// Run webserver
gulp.task('webserver', function() {

  connect.server({
    livereload: true,
    root: ['.', '.tmp', 'dist']
  });
});

// inject HTML partials
gulp.task('html', function () {
  return gulp.src('./src/views/*.html')
           .pipe(injectPartials())
           .pipe(gulp.dest('./dist/'))
           .pipe(connect.reload());
});

// Compile CSS
gulp.task('css', function () {
  return gulp.src('src/scss/styles.scss')
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

// Clean images and fonts in Application.Web
gulp.task('clean', function () {
  del(['dist/images',
       'dist/fonts',
       'dist/scripts',
       'dist/css'
      ], {force: true});
});

// Sync/copy font files between src and dist folders
gulp.task('sync-fonts', function() {
    return gulp.src('')
        .pipe(dirSync('src/fonts', 'dist/fonts'));
});

// Sync/copy images between src and dist folders
gulp.task('sync-images', function() {
    return gulp.src('')
        .pipe(dirSync('src/images', 'dist/images'));
});

gulp.task('build', function () {
    gulp.start(['clean', 'sync-fonts', 'sync-images', 'html', 'css', 'minify-css', 'scripts']);
});

// Watch changes
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['css']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/views/**/*.html', ['html']);
    gulp.watch('src/fonts/**/*', ['sync-fonts']);
    gulp.watch('src/images/**/*', ['sync-images']);
});

gulp.task('default', function() {
    gulp.start(['sync-fonts', 'sync-images', 'watch', 'webserver']);
});
