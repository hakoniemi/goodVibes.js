var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
    return gulp.src('./js/goodVibes.js')
        .pipe(uglify())
        .pipe(concat('goodVibes.min.js'))
        .pipe(gulp.dest('./js'));
});