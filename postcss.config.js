var autoprefixer = require('autoprefixer');
// var pxtorem = require('postcss-pxtorem');
var px2rem = require('postcss-px2rem');
module.exports = {
  plugins: [
    autoprefixer({ browsers: ['ios >= 8', 'android >=4.0'] }),
    px2rem({remUnit: 24,baseDpr:2})
  ]
}