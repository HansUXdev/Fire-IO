var gulp = require('gulp');
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
