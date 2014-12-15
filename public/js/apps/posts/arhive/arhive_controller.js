define(["app","apps/posts/arhive/arhive_view"],function(Kuende, Arhive){
	Kuende.module("PostsApp.Arhive", function(Arhive, Kuende, Backbone, Marionette, $, _){
		Arhive.Controller = {

			arhivePosts: function(){

				var fetchingPosts = Kuende.request("sidebarposts:entities");
				var fetchingProject = Kuende.request("project:entities");

				var postsArhiveLayout = new Arhive.Layout();

				require(['apps/project/show/show_controller'],function() {

					$.when(fetchingPosts).done(function(posts){
						var postsArhiveView = new Arhive.Posts({
							collection: posts
						});

						$.when(fetchingProject).done(function(project){

							//i will use Kuende.trigger("project:show")
							var projectView = new Kuende.ProjectApp.Show.Project({
									// same problem as in enitites/project
									collection: project
								}
							);

				    	postsArhiveLayout.on("show",function() {
				    		postsArhiveLayout.projectRegion.show(projectView);
				    		postsArhiveLayout.sidebarRegion.show(postsArhiveView);
				    	});

			    		Kuende.mainRegion.show(postsArhiveLayout);
			    	});
	    		});
				});
		    }
		}
	});

	return Kuende.PostsApp.Arhive.Controller;
});