define(["app", "apps/common/views"], function(Kuende, List) {
  Kuende.module("PostsApp.List", function(List, Kuende, Backbone, Marionette, $, _) {
    return List.Controller = {
      listPosts: function(page) {
        var fetchingPosts;
        fetchingPosts = Kuende.request("post:entities");
        return $.when(fetchingPosts).done(function(posts) {
          var postsListView;
          if (page) {
            posts.getPage(+page);
          }
          postsListView = new Kuende.Common.Views.PaginatedView({
            collection: posts,
            mainView: List.Posts
          });
          return Kuende.mainRegion.show(postsListView);
        });
      }
    };
  });
  return Kuende.PostsApp.List.Controller;
});
