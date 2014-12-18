define [
  "app"
  "apps/entities/project"
], (Kuende) ->
  Kuende.module "ProjectApp.Show", (Show, Kuende, Backbone, Marionette, $, _) ->
    Show.Project = Marionette.ItemView.extend(
      template: "#project-template"
      className: "blog-main col-sm-8"
    )
    return

  Kuende.ProjectApp.Show
