/* eslint-disable */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
const purifycss = require('gulp-purifycss');
const inject = require('gulp-inject');
const del = require('del');
const webpack = require('webpack-stream');


const paths = {
  scss: './_source/scss/*.scss',
};

// copy index html 
gulp.task('html', function () {
    return gulp.src('_source/*.html')
    .pipe(gulp.dest('www/'))
});

// copy pages folder 
gulp.task('pages', function () {
  return gulp.src('_source/pages/**')
  .pipe(gulp.dest('www/pages/'))
});

// inject css and js in index
gulp.task('injectIndex', ['webpackdev','sassdev'], function () {
  return target = gulp.src('_source/index.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false}, {relative: true}))
  .pipe(gulp.dest('www/'));
});


// inject css and js in pages
gulp.task('injectPages', ['webpackdev','sassdev'], function () {
  return target = gulp.src('_source/pages/*.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false, addPrefix: '..'}))
  .pipe(gulp.dest('www/pages/'));
}); 


// copy images
gulp.task('image', function () {
  return gulp.src('_source/images/**')
  .pipe(gulp.dest('www/media/images'))
}); 

// webpack dev
gulp.task('webpackdev', function() {
  return gulp.src('_source/js/start.js')
    .pipe(webpack( require('./webpack.dev.js') ))
    .pipe(gulp.dest('www/js/'));
});

//webpack build
gulp.task('webpackbuild', function() {
  return gulp.src('_source/js/start.js')
    .pipe(webpack( require('./webpack.build.js') ))
    .pipe(gulp.dest('www/js/'));
});

// sass compiling dev
gulp.task('sassdev', () => {
  gulp.src('_source/scss/webdesignpuntnl-styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded', // nested, compact, expanded, compressed
      includePaths: ['scss'],
    }))
    .on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www/css/'));
});

// sass compiling build
gulp.task('sassbuild', () => {
  gulp.src('_source/scss/webdesignpuntnl-styles.scss')
    .pipe(sass({
      outputStyle: 'compressed', // nested, compact, expanded, compressed
      includePaths: ['scss'],
    }))
    .on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(gulp.dest('www/css/'));
});

// remove unused css
gulp.task('css', () => gulp.src('./www/css/webdesignpuntnl-styles.css')
  .pipe(purifycss(['./www/**/*.js', './www/**/*.html']))
  .pipe(gulp.dest('./www/css')));


// browser-sync
gulp.task('browser-sync', () => {
  browserSync.init(['www/css/*.css', 'www/js/*.js', 'www/*.html', 'www/pages/*.html', 'www/media/images/*'], {
    server: {
      baseDir: 'www',
    },
    host: '192.168.1.5',
    // tunnel: true,
    notify: false,
  });
});

/* optimize images
gulp.task('image', () => {
  gulp.src('_source/images/**')
    .pipe(imageoptim.optimize())
    .pipe(gulp.dest('./www/media/images/'))
}); */


// delete files before build
gulp.task('clean', function() {
  return del.sync('www');
})


gulp.task('dev', ['clean', 'webpackdev', 'sassdev', 'image', 'pages', 'html', 'injectIndex', 'injectPages', 'browser-sync'], () => {
  gulp.watch(['_source/scss/*.scss', '_source/js/*.js', 'www/js/*.js', '_source/images/**', '_source/*.html', '_source/pages/*.html'], ['webpackdev', 'html', 'injectIndex', 'injectPages', 'pages', 'sassdev', 'image']);
});
gulp.task('build', ['clean', 'sassbuild', 'image', 'html', 'pages', 'injectIndex', 'injectPages', 'webpackbuild']);