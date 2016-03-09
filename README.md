Helper Functions to deal with protractor testing.

/Example usage in protractor conf file.
var plus = require('protractor_plus');

module.exports= = {
	onPrepare: function() {
		/Will add all methods to global object
		plus(global);
	}
}

/If an item is passed, most likely global, will add all helper methods to that method. Otherwise, just call
/the function and refrence each metho, i.e.:
var plus = require('protractor_plus')();

/In a test
it('sleep', function() {
	plus.sleep();
});


sleep(time) /Sleep for time or default for 3000ms

elementContainsText(element, text) /If element contains text, promise that resolve otherwise promise that rejects.

elementFromText(elements, text, strict) /Returns a promise that resolve the element in elements, 'elements.all'. If strict is true, then will check text exactly, otherwise uses a contains.

waitFor(element, timeout) /Stall protractor un til element is visible. Works for element.all as well. If no timeout, default to 3000ms

waitInvisible(element, timeout) /Like above but invisible.

