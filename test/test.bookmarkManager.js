describe('Bookmark Manager', function() {
	var manager;
	beforeEach(function(){
		manager = new BookmarkManager('learning');
	});
	it('should have the name it is set when created', function() {
		expect(manager.name).to.equal('learning');
	});
});