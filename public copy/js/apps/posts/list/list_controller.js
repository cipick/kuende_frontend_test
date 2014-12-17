define(["app","apps/common/views"],function(Kuende, List){
	Kuende.module("PostsApp.List", function(List, Kuende, Backbone, Marionette, $, _){
		List.Controller = {
			listPosts: function(){
				var fetchingPosts = Kuende.request("post:entities");

				$.when(fetchingPosts).done(function(posts){

					//show the paginated Layout View
					var postsListView = new Kuende.Common.Views.PaginatedView({
						collection: posts,
						mainView: List.Posts
					});

	    		Kuende.mainRegion.show(postsListView);
		    });
			}
		}
	});

	return Kuende.PostsApp.List.Controller;
});