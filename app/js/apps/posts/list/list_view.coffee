define ["app","apps/entities/post"], (Kuende) ->
	Kuende.module "PostsApp.List", (List, Kuende, Backbone,Marionette,$,_) ->

		class List.Post extends Marionette.ItemView
		  template: "#blog_post-template"
		  className: "blog-post"

		class List.Posts extends Marionette.CollectionView
		  childView: List.Post
		  className: "blog-main col-xs-12"

	Kuende.PostsApp.List