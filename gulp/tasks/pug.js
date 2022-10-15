module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('dev/pug/pages/**/*.pug') /* take .pug filed */
      .pipe($.gp.pug({
        pretty: true /* disabling markup minification */
      }))
      .pipe($.gulp.dest('build')) /* return compiled .html files */
      .on('end', $.browserSync.reload);
  });
}