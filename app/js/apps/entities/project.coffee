define ["app"], (Kuende) ->
  Kuende.module "Entities", (Entities, Kuende, Backbone, Marionette, $, _) ->
    Entities.Project = Backbone.Model.extend(urlRoot: "api/info")
    Entities.ProjectCollection = Backbone.Collection.extend(
      model: Entities.Project
      url: "api/info"
    )
    API = getPostEntities: ->

      # i think i should use Entities.Project but i had a problem with the template
      project = new Entities.ProjectCollection()
      defer = $.Deferred()
      project.fetch success: (data) ->
        defer.resolve data
        return

      defer.promise()

    Kuende.reqres.setHandler "project:entities", ->
      API.getPostEntities()

    return

  return
