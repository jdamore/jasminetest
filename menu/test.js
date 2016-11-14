jasmine.getFixtures().fixturesPath = '.';

describe('the menu', function () {

	beforeEach(function() {
    loadFixtures('fixture.html');
  });

  describe('when displayed', function () {

  	it('should be visible', function () {
  	  expect($('.menu').is(':visible')).toBe(true);
  	});
 
	});

	describe('clicking on the title', function () {

		beforeEach(function() {
    	menuToggle();
  	});

  	it('should hide the menu', function () {
  	  expect($('.menu').is(':visible')).toBe(false);
  	});
 
	});

});