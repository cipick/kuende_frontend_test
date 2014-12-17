define ["app"], (Kuende) ->
	Kuende.module "Entities", ( Entities, Kuende, Backbone, Marionette, $, _) ->
		class Entities.Project extends Backbone.Model.extend
			urlRoot: "api/info"

    class Entities.ProjectCollection extends Backbone.Collection
      model: Entities.Project
      url: 'api/info'

		API =
			getPostEntities: ->

				project = new Entities.ProjectCollection()
				defer = $.Deferred()

        project.fetch
          success : (data) ->
            defer.resolve(data)

   			defer.promise()

		Kuende.reqres.setHandler("project:entities", ->
			API.getPostEntities()