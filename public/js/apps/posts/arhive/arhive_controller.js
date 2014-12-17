define(["app", "apps/posts/arhive/arhive_view"], function(Kuende, Arhive) {
  Kuende.module("PostsApp.Arhive", function(Arhive, Kuende, Backbone, Marionette, $, _) {
    return Arhive.Controller = {
      arhivePosts: function() {
        var fetchingPosts, fetchingProject, postsArhiveLayout;
        fetchingPosts = Kuende.request("sidebarposts:entities");
        fetchingProject = Kuende.request("project:entities");
        postsArhiveLayout = new Arhive.Layout();
        return require(['apps/project/show/show_controller'], function() {
          return $.when(fetchingPosts).done(function(posts) {
            var postsArhiveView;
            postsArhiveView = new Arhive.Posts({
              collection: posts
            });
            return $.when(fetchingProject).done(function(project) {
              var projectView;
              projectView = new Kuende.ProjectApp.Show.Project({
                collection: project
              });
              postsArhiveLayout.on("show", function() {
                postsArhiveLayout.projectRegion.show(projectView);
                return postsArhiveLayout.sidebarRegion.show(postsArhiveView);
              });
              return Kuende.mainRegion.show(postsArhiveLayout);
            });
          });
        });
      }
    };
  });
  return Kuende.PostsApp.Arhive.Controller;
});
