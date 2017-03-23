var JSON5 = require('json5');
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');

var processors = [
  px2rem({
    remUnit: 75
  }),
  autoprefixer({ browsers: ['ios >= 8', 'android >=4.0'] })
];

gulp.task('default', function () {
  var obj = JSON5.parse('{ "presets": ["es2015"] }');
  console.log(obj);
})

gulp.task('build', function () {
  gulp.start(['build-sass','autopre','watch']);
})

gulp.task('build-sass', function () {
  gulp.src('./src/scss/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('autopre', function () {
  gulp.src('./src/scss/**.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('watch',function(){
  gulp.watch('./src/scss/**.scss',['build-sass']);
  gulp.watch('./src/scss/**.css',['autopre']);
});

