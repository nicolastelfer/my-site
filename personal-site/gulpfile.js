'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var destPath = 'site/assets/css/';

gulp.task('sass-watch', function () {
    gulp.src('dev/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(destPath))
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destPath));
});

gulp.task('scripts', function() {
    gulp.src(['./site/assets/js/libraries/jquery.js', './site/assets/js/libraries/bootstrap.min.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./site/assets/js'));
});


gulp.task('default', function () {
    gulp.watch('dev/sass/**/*.scss', ['sass-watch']);
});