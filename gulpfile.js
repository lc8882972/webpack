var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var px2rem = require('postcss-px2rem')
var autoprefixer = require('autoprefixer')
var browserSync = require('browser-sync').create()
var webpack = require('webpack')
var webpackStream = require('webpack-stream')
var reload = browserSync.reload
var proxyMiddleware = require('http-proxy-middleware')

var processors = [
    px2rem({
        remUnit: 75,
        baseDpr: 2
    }),
    autoprefixer({ browsers: ['ios >= 8', 'android >=4.0'] })
]

gulp.task('build', function() {
    gulp.start(['autopre'])
})

gulp.task('build-sass', function() {
    gulp.src('./src/scss/**.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/css'))
})

var browserSyncTask = function() {
    var webpackConfig = require('./webpack.config')
    var compiler = webpack(webpackConfig)
    var proxy = proxyMiddleware('/api', {target: 'http://localhost:56148'})
    var server = {
        baseDir: ['./', './dist']
    }

    server.middleware = [
        proxy,
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

    browserSync.init({
        server: server
    })
    gulp.watch('./src/article.html').on('change', reload)
    gulp.watch('./src/scss/*.scss').on('change', reload)
}

gulp.task('server', browserSyncTask)

gulp.task('webpackStream', function() {
    return gulp.src('src/index.html')
        .pipe(webpackStream(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'))
})