var gulp = require('gulp');
var gls = require('gulp-live-server');
var stylus = require('gulp-stylus');
var gutil = require('gulp-util');
gulp.task('compile:css', function(){
	gulp.src('_stylus/**/*.styl')
	.pipe(stylus({compress: true}))
	.pipe(gulp.dest('public/css/'));
});
gulp.task('watch', function(){
	gulp.watch('_stylus/**/*.styl', ['compile:css']);
});
gulp.task('serve', function(){
	var server = gls.static('public');
	server.start();
	gulp.watch(['public/**/*.js', 'public/**/*.css', 'public/**/*.html'], server.notify);
});
gulp.task('default', ['watch', 'serve']);