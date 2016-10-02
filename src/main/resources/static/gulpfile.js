var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

var lessDir = 'assets/css/less';
var cssDir = 'assets/css';

gulp.task('css', function () {
	return gulp.src([lessDir + '/main.less'])
			.pipe(less({style: 'compressed'}).on('error', gutil.log))
            .pipe(autoprefixer('last 10 versions', 'ie 9'))
            .pipe(cssmin())
			.pipe(gulp.dest(cssDir));
});

gulp.task('watch', function () {
	gulp.watch(lessDir + '/*.less', ['css']);
});

gulp.task('default', ['css']);