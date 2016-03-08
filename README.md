Helper Functions to deal with protractor testing.

sleep(time) //Sleep for time or default for 3000ms

elementContainsText(element, text) //If element contains text, promise that resolve otherwise promise that rejects.

elementFromText(elements, text, strict) //Returns a promise that resolve the element in elements, 'elements.all'. If strict is true, then will check text exactly, otherwise uses a contains.

waitFor(element, timeout) //Stall protractor un til element is visible. Works for element.all as well. If no timeout, default to 3000ms

waitInvisible(element, timeout) //Like above but invisible.

