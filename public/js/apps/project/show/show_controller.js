define(["app", "apps/project/show/show_view"], function(Kuende) {
  Kuende.module("ProjectApp.Show", function(Show, Kuende, Backbone, Marionette, $, _) {
    return Show.Controller({
      showProject: function() {
        var project, projectView;
        project = Kuende.request("project:entities");
        return projectView = new Show.Project({
          model: project
        });
      }
    });
  });
  return Kuende.ProjectApp.Show.Controller;
});
