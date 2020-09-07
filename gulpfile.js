var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");

// Static server
gulp.task('serve', [sass], function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  
  
});