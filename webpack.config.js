var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    resolve: {
        alias: {
            jquery: "https://code.jquery.com/jquery-3.1.1.slim.min.js"
        }
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ]
}