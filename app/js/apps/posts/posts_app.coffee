define ["app"], (Kuende) ->
	Kuende.module "PostsApp", (PostsApp,Kuende, Backbone,Marionette,$,_) ->

		class PostsApp.Router extends Marionette.AppRouter
			appRoutes:
				"": "arhivePosts"
				"news": "listPosts"
				"news/page/:page": "listPosts"

		API =
			listPosts: (page) ->
				require ['apps/posts/list/list_controller'], () ->
					PostsApp.List.Controller.listPosts(page);

			arhivePosts: ->
				require ['apps/posts/arhive/arhive_controller'], () ->
					PostsApp.Arhive.Controller.arhivePosts()

		Kuende.on "posts:list", ->
			Kuende.navigate("news")
			API.listPosts()

		Kuende.on "posts:arhive", ->
			Kuende.navigate("home")
			API.arhivePosts()

		Kuende.addInitializer ->
			new PostsApp.Router
				controller: API