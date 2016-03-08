module.exports = function(grunt) {

	//Config
	grunt.initConfig({
		//Webdriver Manager
		protractor_webdriver: {
			options: {
		    	seleniumPort: 4444,
				keepAlive: true,
				command: 'webdriver-manager update --standalone --proxy=http://proxye1.finra.org:8080'

			},
			update: {
				command: 'webdriver-manager update --standalone'
			}
		},

		//Protractor Tests
		protractor : {
			//Admin test options
			options: {
				keepAlive: true,
				noColor: false
			},
			test: {
				options: {
					configFile: "conf.js",
				}
			},
		}
	});

	//Load tasks
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.registerTask('default', ['protractor_webdriver:update']);
}


