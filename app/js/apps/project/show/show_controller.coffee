define ["app","apps/project/show/show_view"], (Kuende) ->
	Kuende.module "ProjectApp.Show", (Show, Kuende, Backbone, Marionette, $, _) ->

		Show.Controller

			showProject: ->
				project = Kuende.request("project:entities")

				projectView = new Show.Project
					model: project

	Kuende.ProjectApp.Show.Controller