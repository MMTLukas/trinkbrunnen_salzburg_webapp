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
    // var template = _.template( $('#feed_template').html());
    // $(this.el).html(template);

    _.each(this.feedItemCollection.toArray(), function(feedItemModel) {

      $shortDescription = feedItemModel.get('description').substring(0, 230) + '...';

      $('#rss').append(
        '<article>' +
        '<h3 class="feed-title"><a href="' + feedItemModel.escape('link') + '">' + feedItemModel.escape("title") + '</a></h3>' + 
        '<p class="feed-date">' + feedItemModel.escape("pubDate") + '</p>' + 
        '<p class="feed-content">' + $shortDescription + '</p>' +
        '<a href="' + feedItemModel.escape('link') + '" class="feed-more">Mehr</a>' +
        '</article>'
      );
      
    });
    
    var allFeedImages = $('#rss').find('img');
    for(idx in allFeedImages) {
      if ( (allFeedImages[idx].height > 120) && (allFeedImages[idx]) ) {
        var scaleValue = 120 / allFeedImages[idx].height;
        allFeedImages[idx].height = 120;
        allFeedImages[idx].width = allFeedImages[idx].width * scaleValue;
      }
    }
    
    this.dispatchLoadingFinished();
  },
  dispatchLoadingFinished: function(){
    var event = document.createEvent('Event');
    event.initEvent('loadingFinish', true, true)
    document.dispatchEvent(event);
  }
});