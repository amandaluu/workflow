const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const reload = browserSync.reload;


gulp.task('sass', function() {
	return gulp.src('src/scss/app.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('app/css'));
});


gulp.task('default', ['sass']);
