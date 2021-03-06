describe("Collection - Markers", function() {
  beforeEach(function() {
		this.markerCollection = new MarkerCollection;
		this.marker = new MarkerModel;
  });
  
  afterEach(function(){
	this.markerCollection = null;
	this.marker = null;
  });
	  
  it("should allow to push a marker and have afterwards the correct length", function() {
	this.markerCollection.push([this.marker]);
	expect(this.markerCollection.length).toEqual(1);
  });		
  
  describe('when working with network', function(){
	  beforeEach(function() {
		this.markerCollection.url = '../db/elements.php';
			this.server = sinon.fakeServer.create();
		this.server.respondWith("GET", "../db/elements.php", [200, { "Content-Type": "application/json" }, '[{"latitude":"47","longitude":"12","water_distributor":"WG","fontain_name":"TB","description":"Salzburg"}]']);
	  });
	  
	  afterEach(function(){
		this.server.restore();
	  });
	  
  it('should make the right ajax call when fetching collection', function(){
	this.markerCollection.fetch();
	expect(this.server.requests.length).toEqual(1);
	expect(this.server.requests[0].method).toEqual("GET");
	expect(this.server.requests[0].url).toEqual("../db/elements.php");
  });
		  
	  it("response should be parsed correctly", function() {
		this.markerCollection.fetch();
		this.server.respond();
		expect(this.markerCollection.length).toEqual(1);
	expect(this.markerCollection.at(0).get('latitude')).toEqual("47");
	expect(this.markerCollection.at(0).get('longitude')).toEqual("12");
	expect(this.markerCollection.at(0).get('title')).toBeDefined();
	  });
  });
});