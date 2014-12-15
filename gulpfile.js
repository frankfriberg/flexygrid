var gulp 	= require('gulp');
var sass 	= require('gulp-ruby-sass');

gulp.task('scss', function () {
    return gulp.src('scss/main.scss')
    	// Set style to preferred: nested, compact, compressed or expanded
        .pipe(sass({style: 'nested'}))
        .on('error', function (err) { console.log(err.message);})
        .pipe(gulp.dest('dev/css'));
});

gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', ['scss']);
});

gulp.task('default', function() {
	gulp.start('scss');
});