define(["marionette"], function(Marionette){
	var Kuende = new Backbone.Marionette.Application();

	Kuende.addRegions({
	  mainRegion: "#main-region"
	});

	Kuende.navigate = function(route, options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	}

	Kuende.getCurrentRoute = function(){
		return Backbone.history.fragment;
	}

	// Kuende.on("before:start", function(){
	//   _.templateSettings = {
	//     interpolate: /\{\{=(.+?)\}\}/g,
	//     escape: /\{\{-(.+?)\}\}/g,
	//     evaluate: /\{\{(.+?)\}\}/g
	//   };
	// });

	Kuende.on("start",function(){
		if(Backbone.history) {
			require(['apps/posts/posts_app','apps/project/project_app'],function() {
				Backbone.history.start();
			});
		};
	});

	return Kuende;
});
