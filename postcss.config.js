var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');
module.exports = {
  plugins: {
    // to edit target browsers: use "browserlist" field in package.json
    autoprefixer: {
      browsers: ["ios >=8", "android >=4.0"]
    },
    "postcss-px2rem": {
      remUnit: 75,
      baseDpr: 2
    }
  }
}
