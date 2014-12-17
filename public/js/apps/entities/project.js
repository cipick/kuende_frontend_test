var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app"], function(Kuende) {
  return Kuende.module("Entities", function(Entities, Kuende, Backbone, Marionette, $, _) {
    var API;
    Entities.Project = (function(_super) {
      __extends(Project, _super);

      function Project() {
        return Project.__super__.constructor.apply(this, arguments);
      }

      Project.prototype.urlRoot = "api/info";

      return Project;

    })(Backbone.Model.extend);
    Entities.ProjectCollection = (function(_super) {
      __extends(ProjectCollection, _super);

      function ProjectCollection() {
        return ProjectCollection.__super__.constructor.apply(this, arguments);
      }

      ProjectCollection.prototype.model = Entities.Project;

      ProjectCollection.prototype.url = 'api/info';

      return ProjectCollection;

    })(Backbone.Collection);
    API = {
      getPostEntities: function() {
        var defer, project;
        project = new Entities.ProjectCollection();
        defer = $.Deferred();
        project.fetch({
          success: function(data) {
            return defer.resolve(data);
          }
        });
        return defer.promise();
      }
    };
    return Kuende.reqres.setHandler("project:entities", function() {
      return API.getPostEntities();
    });
  });
});
