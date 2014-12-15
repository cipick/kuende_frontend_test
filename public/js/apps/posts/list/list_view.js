define(["app","apps/entities/post"],function(Kuende){
	Kuende.module("PostsApp.List", function(List, Kuende, Backbone,Marionette,$,_){
		List.Post = Marionette.ItemView.extend({
		  template: "#blog_post-template",
		  className: "blog-post"
		});

		List.Posts = Marionette.CollectionView.extend({
		  childView: List.Post,
		  className: "blog-main col-xs-12"
		});
	});

	return Kuende.PostsApp.List;
});