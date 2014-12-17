define(["app","apps/entities/project"], function(Kuende) {
	Kuende.module("ProjectApp",function(ProjectApp, Kuende, Backbone,Marionette,$,_){

		var API = {
			showProject: function(){
				require(['apps/project/show/show_controller'],function() {
					ProjectApp.Show.Controller.showProject();
				});
		    }
		};

		Kuende.on("project:show", function () {
			API.showProject();
		});

	});
});