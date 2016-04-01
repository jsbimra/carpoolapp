module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: 	{
			sass:{
				files: 'scss/*.scss',
				tasks: ['sass']	
			},
			jsdoc: {
				files: 'js/*.js',
				tasks: ['jsdoc'],
				options:{
					debounceDelay: 250
				}
			}
		},
		sass: {
			dev: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: ['css/*.css', '*.html', 'GruntFile.js', 'js/*.js', 'doc/*.html']
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},
		jsdoc : {
	        dist : {
	            src: 'js/*.js', 
	            options: {
		            destination: 'doc',
		            configure : "jsdoc.conf.json"
	            }
	        }
	    }
	});

	//Load NPM task
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-jsdoc');
	//define default task
	grunt.registerTask('default', ['browserSync', 'watch:sass']);
	grunt.registerTask('servedoc', ['watch:jsdoc']);
};