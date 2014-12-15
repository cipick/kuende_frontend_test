define(["app","apps/project/show/show_view"], function(Kuende) {
	Kuende.module("ProjectApp.Show", function( Show, Kuende, Backbone, Marionette, $, _){
		Show.Controller = {
			showProject: function(){
				var project = Kuende.request("project:entities");
				var projectView = new Show.Project({
					model: project
				});
				return projectView;
	    	}
		}
	});

	return Kuende.ProjectApp.Show.Controller;
});