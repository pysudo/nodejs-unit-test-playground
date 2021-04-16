const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');


gulp.task('mocha', function () {
    return gulp.src(["text/*.js"], { read: false })
        .pipe(mocha({reporter: "list"}))
        .on('error', gutil.log);
})

gulp.task('watch-mocha', function() {
    gulp.series('mocha')();
    gulp.watch(["./**/*.js", "test/**/*.js"], gulp.series('mocha'));
})

gulp.task('default', gulp.series('watch-mocha'));