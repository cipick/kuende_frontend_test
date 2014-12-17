define ["app","apps/entities/project"] , (Kuende) ->
  Kuende.module "ProjectApp", (ProjectApp, Kuende, Backbone,Marionette,$,_) ->
    API =
      showProject: ->
        ProjectApp.Show.Controller.showProject()
    Kuende.on "project:show", ->
      API.showProject()