define ["app","apps/entities/project"], (Kuende) ->

	Kuende.module "ProjectApp.Show", ( Show, Kuende, Backbone, Marionette, $, _) ->
	  class Show.Project extends Marionette.ItemView
	    template: "#project-template"
	    className: "blog-main col-sm-8"

	Kuende.ProjectApp.Show