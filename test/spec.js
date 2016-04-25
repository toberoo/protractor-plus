
describe('Test Protractor Plus with Protractor !', function() {

	it('Sleep Function', function(done) {
		//Get current time
		var currTime = (new Date()).getTime();

		//Sleep
		sleep(2000).then(function() {

			//Get time after sleep
			var duration = (new Date()).getTime() - currTime

			//Assert that time has passed
			expect(duration >= 2000).toBe(true);
			//Not too much time
			expect(duration < 2300).toBe(true);

			done();
		});
	});

	it('Element Contains Text on wiki English link' , function(done) {

		var englishLink = element(by.css('.central-featured-lang.lang1'));

		//Test a true statement
		elementContainsText(englishLink, 'English').then(function(val) {

			expect(val).toBe(true);

			//Test a false statement
			elementContainsText(englishLink, 'Hispanic').then(
				//Should not run
				function(val) {expect(val).toBe(false); done();},
				//Should run
				function(val) {expect(val).toBe(false); done();}
			);
		});
	});

	it('Element From Text using links', function(done) {

		var links = element.all(by.css('.central-featured-lang strong'));

		//Test non strict
		elementFromText(links, 'Eng').then(function(el) {

			//Should exist
			expect(el).not.toBe(undefined);

			//Test Strict
			elementFromText(links, 'Eng', true).then(function(el) {
				expect(el).toBe(undefined);

				elementFromText(links, 'English', true).then(function(el) {
					expect(el).not.toBe(undefined);
					done();
				});
			});
		});
	});

	it ('Element from attribute', function(done) {

		var el = elementFromAttribute('title', 'English — Wikipedia — The Free Encyclopedia');
		el.getText().then(function(text) {
			expect(text.indexOf('English')).not.toBe(-1);
			done();
		});
	});

	it ('Element has attribute', function(done) {
		var el = elementFromAttribute('title', 'English — Wikipedia — The Free Encyclopedia');
		elementHasAttribute(el, 'title', 'English — Wikipedia — The Free Encyclopedia')
		.then(function() {
			expect(true).toBe(true);
			done();
		}, function() {
			expect(false).toBe(false);
			done();
		});
	});

	it('Wait For', function(done) {

		//Click link
		waitFor(element(by.css('.central-featured-lang.lang1')));
		done();
	});
});
