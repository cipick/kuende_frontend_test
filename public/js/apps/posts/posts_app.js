define(["app"], function(Kuende) {
	Kuende.module("PostsApp",function(PostsApp,Kuende, Backbone,Marionette,$,_){
		PostsApp.Router = Marionette.AppRouter.extend({
    		appRoutes: {
  				""										: "arhivePosts",
					"news"								: "listPosts"
		  	}
		});

		var API = {
			listPosts: function(){
				require(['apps/posts/list/list_controller'],function() {
					PostsApp.List.Controller.listPosts();
				});
		    },
		    arhivePosts: function(){
		    	require(['apps/posts/arhive/arhive_controller'],function() {
		     		PostsApp.Arhive.Controller.arhivePosts();
		     	});
	    	}
		};

		Kuende.on("posts:list", function () {
			Kuende.navigate("news");
			API.listPosts();
		});

		Kuende.on("posts:arhive", function () {
			Kuende.navigate("home");
			API.arhivePosts();
		});

		Kuende.addInitializer(function(){
			new PostsApp.Router({
		      controller: API
		    });
		});
	});
});