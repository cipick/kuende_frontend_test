define(["marionette", 'apps/posts/posts_app', 'apps/project/project_app'], function(Marionette) {
  var Kuende;
  Kuende = new Backbone.Marionette.Application();
  Kuende.addRegions({
    mainRegion: "#main-region"
  });
  Kuende.navigate = function(route, options) {
    options || (options = {});
    return Backbone.history.navigate(route, options);
  };
  Kuende.on("start", function() {
    if (Backbone.history) {
      return Backbone.history.start();
    }
  });
  return Kuende;
});
