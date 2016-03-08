exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		browserName: 'phantomjs',
		'phantomjs.binary.path': require('phantomjs').path
	},
	specs: ['todo-spec.js']
};