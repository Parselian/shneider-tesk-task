module.exports = () => {
  $.gulp.task('img', () => {
    return $.gulp.src('./dev/assets/images/**/*.*')
      .pipe($.gulp.dest('./build/assets/images/'));
  });
};