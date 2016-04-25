**Make all the functions available in your specs by adding it to your global:**

	var plus = require('protractor_plus');
	module.exports= = {
		onPrepare: function() {
			plus(global);
			/*All of the functions can be called directly in the specs*/
		}
	}


**Optional: If you don't want to add it to the global object, you can simply require and call:**

	var plus = require('protractor_plus')();
	it('sleep', function() {
		plus.sleep();
	});


**Available Functions**

	Sleep for time or default for 3000ms
		sleep(time);

	If element contains text, promise that resolve otherwise promise that rejects.
		elementContainsText(element, text)

 	Returns a promise that resolve the element in elements, 'elements.all'. If strict is true, then will check text exactly, otherwise uses a contains.
		elementFromText(elements, text, strict)

	DOES NOT RETURN a promise, returns an element based on the attribute provided
		elementFromAttribute(attribute, value);

	Returns a promise that resolves if the element has attribute and value, rejects otherwise No value means it will only check for existence, value match otherwise
		elementHasAttribute(element, attribute, value)

 	Stall protractor un til element is visible. Works for element.all as well. If no timeout, default to 3000ms
		waitFor(element, timeout)

	Like above but invisible.
		waitInvisible(element, timeout)

	Click an element that is not currently viewable by browser
		clickOutOfView(element)

	Make the mouse hover over an element
		mouseOver(element);

	Scroll the browser's view over the element
		scrollIntoView(element);
