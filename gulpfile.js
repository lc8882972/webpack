var gulp = require('gulp')

// gulp.task('default', function() {
//   var obj = JSON5.parse('{ "presets": ["es2015"] }');
//   console.log(obj);
// })


var browserSync = require('browser-sync')
var webpack = require('webpack')
var browserSyncTask = function() {
  var webpackConfig = require('webpack.config')
  var compiler = webpack(webpackConfig)

  var server = {
    "baseDir": "dist"
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

  browserSync.init(config.tasks.browserSync)
}



gulp.task('browserSync', browserSyncTask)