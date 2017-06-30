const path = require('path')
const webpack = require('webpack') //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction =  process.env.NODE_ENV === 'production' ? true : false

var config = {
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader' // translates CSS into CommonJS
                },
                {
                    loader: 'postcss-loader'
                }]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader' // translates CSS into CommonJS
                },
                {
                    loader: 'postcss-loader'
                },
                {
                    loader: 'sass-loader'
                }]
            })
        },
        // {
        //     test: /\.(png|jpg|gif|svg)$/,
        //     loader: 'url-loader',
        //     options: {
        //         limit: 102400,
        //         name: '[name].[ext]?[hash:8]'
        //     }
        // },
        // { test: /\.jpg$/, loader: 'file-loader' },
        { test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
        ]
    },
    resolve: {
        alias: {
            // jquery: 'https://code.jquery.com/jquery-3.1.1.slim.min.js',
            'vue$': 'vue/dist/vue'
        }
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/article.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

if(isProduction){
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
    config.plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true
    }))
    // copy custom static assets
    config.plugins.push(    
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './assets'),
            to: 'assets',
            toType: 'dir',
            ignore: ['\.js$']}
        ]))
    config.entry = [
        './src/index.js'
    ]
}else{
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports =config