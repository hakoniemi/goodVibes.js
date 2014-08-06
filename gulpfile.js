var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var goodVibes = './js/goodVibes.js';

gulp.task('lint', function() {
    return gulp.src(goodVibes)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('dist', ['lint'], function() {
    return gulp.src(goodVibes)
        .pipe(uglify())
        .pipe(concat('goodVibes.min.js'))
        .pipe(gulp.dest('./js/'));
});