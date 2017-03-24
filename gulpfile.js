var JSON5 = require('json5')
var gulp = require('gulp')
  // var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var px2rem = require('postcss-px2rem')
var autoprefixer = require('autoprefixer')
var browserSync = require('browser-sync').create();
var webpack = require('webpack')
var browserSyncObj = require('browser-sync').create();
var reload = browserSync.reload;
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
  gulp.start(['autopre']);
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

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss',['build-sass']);
  gulp.watch('./src/scss/**.css', ['autopre']);
});

var browserSyncTask = function () {
  var webpackConfig = require('./webpack.config')
  var compiler = webpack(webpackConfig)

  var server = {
    baseDir: ["./", "./dist"],
    directory: true
  }

  server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }),
    require('webpack-hot-middleware')(compiler, {
      //   publicPath: 'dist',
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  ]

  browserSync.init({server:server,host: "192.168.253.1"})
  gulp.watch("./src/index.html").on('change', reload);
  gulp.watch("./src/scss/*.scss").on('change', reload);
}

gulp.task('serve', browserSyncTask)

gulp.task('autopreW', function () {
  gulp.src('./src/scss/*.css')
    // .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({ stream: true }));
})