define(["app", "apps/entities/project"], function(Kuende) {
  return Kuende.module("ProjectApp", function(ProjectApp, Kuende, Backbone, Marionette, $, _) {
    var API;
    API = {
      showProject: function() {
        return ProjectApp.Show.Controller.showProject();
      }
    };
    return Kuende.on("project:show", function() {
      return API.showProject();
    });
  });
});
