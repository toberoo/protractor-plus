var plus = require(__dirname + '/../index.js');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		browserName: 'phantomjs',
		'phantomjs.binary.path': require('phantomjs').path
	},
	specs: ['spec.js'],
	onPrepare: function() {
		//Test on a stable website
		browser.ignoreSynchronization = true;
		browser.get('https://www.wikipedia.org');
		plus(global);
	}
};