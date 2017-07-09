var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["ios >=8", "android >=4.0"]
    },
    "postcss-px2rem": {
      remUnit: 75,
      baseDpr: 2
    }
  }
}
