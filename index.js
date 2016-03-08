var Promise = require('Promise');

module.exports = {
	sleep: function(time) {
		//Defaults to 2000
		if (time == undefined) {
			time = 2000;
		}
		return browser.driver.sleep(time);
	},

	elementContainsText: function(element, against) {
		if(element == null || text == null) {
			return undefined;
		}
		return new Promise(function(resolve, reject) {
			element.getText().then(function(text) {
				if (text.indexOf(against) != -1) {
					resolve(true);
				}
				reject(false);
			});
		});
	},

	//Find element from an element.all object that has against text.
	elementFromText: function(elements, against, strict) {

		//If we do not have enough information
		if (elements == null || against == null) {
			return undefined;
		}

		//Helper compare function
		function matched(text1, text2) {
			if (strict) {
				return text1 == text2
			}
			return text1.indexOf(text2) != -1;
		}

		//Iterate and find the right text.
		return new Promise(function(resolve, reject) {
			elements.each(function(el) {
				el.getText().then(function(text) {
					if (matched(text, against)) {
						resolve(el);
					}
				});
			})
			.then(resolve);
		});
	},

	//Add a wait function to wait for element
	waitFor: function(element, timeout) {

		//Default timeout is 3000ms
		if (timeout == undefined) {
			timeout = 3000;
		}

		//Sometimes self is used to define an object of elements.
		if (element.self != undefined) {
			element = element.self;
		}

		var waitFunc;

		//Check for multiple elements
		if (element.each != undefined) {
			waitFunc =	function() {
		       return element.count(function (count) {
		            return count > 0;
		        });
			}
		//Otherwise check if the element exists
		} else {
			waitFunc = function() {
				return element.isPresent()
			}
		}

		return new Promise(function(resolve, reject) {
			browser.wait(waitFunc, timeout).then(resolve);
		});
	},

	waitInvisible: function (element) {
		return browser.driver.wait(
			protractor.until.elementIsNotVisible(element),
			3000
		);
	}
}