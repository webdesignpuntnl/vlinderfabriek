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

// copy index html dev
gulp.task('htmldev', function () {
    return gulp.src('_source/*.html')
    .pipe(gulp.dest('www/'))
});

// copy index html build
gulp.task('htmlbuild', function () {
  return gulp.src(['_source/*.html', '_source/*.png', '_source/*.xml', '_source/*.ico', '_source/*.svg', '_source/*.webmanifest'])
  .pipe(gulp.dest('www/'))
});

// copy pages folder 
gulp.task('pages', function () {
  return gulp.src('_source/pages/**')
  .pipe(gulp.dest('www/pages/'))
});

// copy php folder 
gulp.task('php', function () {
  return gulp.src('_source/php/**')
  .pipe(gulp.dest('www/php/'))
});

// inject css and js in index for dev
gulp.task('injectIndexDev', ['webpackdev','sassdev'], function () {
  return target = gulp.src('_source/index.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false}, {relative: true, quiet: true}))
  .pipe(gulp.dest('www/'));
});


// inject css and js in pages for dev
gulp.task('injectPagesDev', ['webpackdev','sassdev'], function () {
  return target = gulp.src('_source/pages/*.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false, addPrefix: '..', quiet: true}))
  .pipe(gulp.dest('www/pages/'));
}); 

// inject css and js in index for build
gulp.task('injectIndex', ['webpackbuild','sassbuild'], function () {
  return target = gulp.src('_source/index.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false}, {relative: true}))
  .pipe(gulp.dest('www/'));
});


// inject css and js in pages for build
gulp.task('injectPages', ['webpackbuild','sassbuild'], function () {
  return target = gulp.src('_source/pages/*.html')
  .pipe(inject(gulp.src(['www/css/*.css', 'www/js/*.js'], {read: false}), {ignorePath: 'www/', addRootSlash: false, addPrefix: '..'}))
  .pipe(gulp.dest('www/pages/'));
}); 


// copy images
gulp.task('image', function () {
  return gulp.src('_source/media/images/**')
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
  gulp.src('_source/scss/vlinderfabriek-styles.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(sass({
      outputStyle: 'expanded', // nested, compact, expanded, compressed
      includePaths: ['scss'],
    }))
    .on('error', console.error.bind(console))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('www/css/'));
});

// sass compiling build
gulp.task('sassbuild', () => {
  gulp.src('_source/scss/vlinderfabriek-styles.scss')
    .pipe(sass({
      outputStyle: 'compressed', // nested, compact, expanded, compressed
      includePaths: ['scss'],
    }))
    .on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(gulp.dest('www/css/'));
});

// remove unused css
gulp.task('css', () => gulp.src('./www/css/vlinderfabriek-styles.css')
  .pipe(purifycss(['./www/**/*.js', './www/**/*.html']))
  .pipe(gulp.dest('./www/css')));


// browser-sync
gulp.task('browser-sync', () => {
  browserSync.init(['www/css/*.css', 'www/js/*.js', 'www/*.html', 'www/pages/*.html', 'www/media/images/*'], {
    server: {
      baseDir: 'www',
    },
    port: 8080,
    // host: '192.168.1.5',
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


gulp.task('dev', ['clean', 'webpackdev', 'sassdev', 'image', 'pages', 'htmldev', 'injectIndexDev', 'injectPagesDev', 'browser-sync'], () => {
  gulp.watch(['_source/scss/*.scss', '_source/js/*.js', '_source/media/images/**', '_source/*.html', '_source/pages/*.html'], ['webpackdev', 'htmldev', 'injectIndexDev', 'injectPagesDev', 'pages', 'sassdev', 'image']);
});
gulp.task('build', ['clean', 'sassbuild', 'webpackbuild', 'image', 'htmlbuild', 'pages', 'php', 'injectIndex', 'injectPages']);