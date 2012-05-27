describe("COLLECTIONS", function() {
	
	describe("Marker Collection", function() {
	  beforeEach(function() {
			this.markercollection = new MarkerCollection;
			this.marker = new MarkerModel;
	  });
	  afterEach(function(){
	  	this.markercollection = null;
	  	this.marker = null;
	  });
		  
	  it("should push a marker", function() {
	    this.markercollection.push([this.marker]);
	    expect(this.markercollection.length).toEqual(1);
	  });		
	});

	describe('Feed Item Collection', function() {
		beforeEach(function() {
			this.feedItemCollection = new FeedItemCollection();
			this.feedItem = new FeedItemModel();
		});
	  afterEach(function(){
	  	this.feedItemCollection = null;
	  	this.feedItem = null;
	  });

		it('should push a feed item', function() {
			this.feedItemCollection.push([this.feedItem]);
			expect(this.feedItemCollection.length).toEqual(1);
		});

	});

});