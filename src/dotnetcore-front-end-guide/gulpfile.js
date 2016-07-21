var syspath = require('path');
var filter = require('gulp-filter');
var gulp = require('gulp');
var newer = require('gulp-newer');
var rename = require('gulp-rename');

var webroot = './wwwroot/';

/**
 * Move assets from components directories to assets root
 */

gulp.task('copy:assets', function () {
	return gulp.src('./Views/**/Assets/*.*')
			.pipe(filter(['**/*.{png,jpg,gif,ttf,woff,woff2}']))
			.pipe(newer(webroot))
			.pipe(rename(function (p) {
				p.dirname = p.dirname
					.split(syspath.sep)
					.filter(function (dir) {
						return (dir !== 'Assets');
					})
					.join(syspath.sep);
			}))
			.pipe(gulp.dest(webroot));
});
