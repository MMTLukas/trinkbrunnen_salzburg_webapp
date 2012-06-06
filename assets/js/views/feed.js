var FeedView = Backbone.View.extend({
  el: $('#feed'),
  feedItemCollection: '',
  tagName: 'section',
  id: 'rss',
  initialize: function() {
  },
  timestamp: '',
  addFeedItemCollection: function(feedItemCollection) {
    this.feedItemCollection = feedItemCollection;
    this.render();
  },
  render: function() {
    var template = _.template( $('#feed_template').html());
    $(this.el).html(template);

    _.each(this.feedItemCollection.toArray(), function(feedItemModel) {
      $('#rss').append(
        '<article>' +
        '<h3 class="feed-title"><a href="' + feedItemModel.escape('link') + '">' + feedItemModel.escape("title") + '</a></h3>' + 
        '<p class="feed-date">' + feedItemModel.escape("pubDate") + '</p>' + 
        '<div class="feed-content">' + feedItemModel.get('description') + '</div>' +
        '</article>'
      );
    });
    
    var allFeedImages = document.getElementsByTagName('img')
    for(idx in allFeedImages){
      if(allFeedImages[idx].width > 150){
        var scaleValue = 150/allFeedImages[idx].width;
        allFeedImages[idx].width = 150;
        allFeedImages[idx].height = allFeedImages[idx].height*scaleValue;
      }
    }
    
    this.dispatchLoadingFinished();
  },
  dispatchLoadingFinished: function(){
    var event = document.createEvent('Event');
    event.initEvent('loadingFinish', true, true)
    document.dispatchEvent(event);
  },
});