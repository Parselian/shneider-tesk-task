module.exports = () => {
  $.gulp.task('ftp', () => {
    const conn = $.ftp.create({
      host: '',
      user: '',
      password: ''
    })

    return $.gulp.src('build/**/*.*', {buffer: false})
      .pipe(conn.newer(''))
      .pipe( conn.dest('') )
  })
}