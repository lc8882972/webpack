var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');
module.exports = {
  plugins: [
    px2rem(),
    autoprefixer({ browsers: ['ios >= 8', 'android >=4.0'] })
  ]
}