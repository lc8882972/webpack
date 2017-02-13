var JSON5 = require('json5');
var gulp = require('gulp');

gulp.task('default',function(){
    var obj = JSON5.parse('{ "presets": ["es2015"] }');
    console.log(obj);
})