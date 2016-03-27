var $        	= require('gulp-load-plugins')();
var gulp 	 	= require('gulp');
var browserSync = require('browser-sync').create();

var config = {
	browsersync: {
		watch: [
			'./*',
			'./js/*.js',
			'./js/controllers/*.js',
			'./js/controllers/*/*.js',
			'./js/controllers/*/*/*.js',
			'./js/directives/*.js',
			'./js/directives/*/*.js',
			'./js/directives/*/*/*.js',
			'./js/directives/*/*/*/*.js',
			'./js/filters/*.js',
			'./js/filters/*/*.js',
			'./js/factories/*.js',
			'./js/factories/*/*.js',
			'./css/*.css',
			'./templates/*.html',
			'./templates/admin/*.html',
			'./templates/admin/posts/*.html',
			'./templates/content/*.html',
			'./templates/directives/*.html',
			'./templates/directives/*/*.html'
		]
	}
}


var directives = {
  firebase: [
    'templates/directives/**/**/*.html',
  ],
}

// Compiles the directive partials into a single JavaScript file
// Generates AngularJS modules, which pre-load your HTML code into the $templateCache. 
// This way AngularJS doesn't need to request the actual HTML files anymore.
gulp.task('directives', function(cb) {
  gulp.src(directives.firebase)
    .pipe($.ngHtml2js({
      prefix: 'components/',
      moduleName: 'FireIO',
      declareModule: false
    }))
    .pipe($.uglify())
    .pipe($.concat('FireIO-templates.js'))
    .pipe(gulp.dest('./js'))
  ;

  cb();
});


// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
		notify: false
    });
	
	gulp.watch(config.browsersync.watch).on('change', browserSync.reload);
});
