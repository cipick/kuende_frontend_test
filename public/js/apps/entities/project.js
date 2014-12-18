define(["app"], function(Kuende) {
  Kuende.module("Entities", function(Entities, Kuende, Backbone, Marionette, $, _) {
    var API;
    Entities.Project = Backbone.Model.extend({
      urlRoot: "api/info"
    });
    Entities.ProjectCollection = Backbone.Collection.extend({
      model: Entities.Project,
      url: "api/info"
    });
    API = {
      getPostEntities: function() {
        var defer, project;
        project = new Entities.ProjectCollection();
        defer = $.Deferred();
        project.fetch({
          success: function(data) {
            defer.resolve(data);
          }
        });
        return defer.promise();
      }
    };
    Kuende.reqres.setHandler("project:entities", function() {
      return API.getPostEntities();
    });
  });
});
