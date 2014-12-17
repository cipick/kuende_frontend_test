var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app", "apps/entities/project"], function(Kuende) {
  Kuende.module("ProjectApp.Show", function(Show, Kuende, Backbone, Marionette, $, _) {
    return Show.Project = (function(_super) {
      __extends(Project, _super);

      function Project() {
        return Project.__super__.constructor.apply(this, arguments);
      }

      Project.prototype.template = "#project-template";

      Project.prototype.className = "blog-main col-sm-8";

      return Project;

    })(Marionette.ItemView);
  });
  return Kuende.ProjectApp.Show;
});
