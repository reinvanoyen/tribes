'use strict';

var
	gulp = require('gulp'),
	browserify = require('browserify'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	source = require('vinyl-source-stream')
;

// js
// Makes a js bundle.
gulp.task( 'js', function() {

	return browserify( 'src/app.js')
		.transform( 'babelify', { presets: ['es2015'] } )
		.bundle()
		.pipe( source( 'bundle.js' ) )
		.pipe( gulp.dest( 'build' ) )
	;
} );

// watch
// Watches for changes and performs the needed tasks
gulp.task( 'watch', function() {

	gulp.watch( 'src/**/*.js', ['js'] );
} );

// default
gulp.task( 'default', [ 'watch' ] );