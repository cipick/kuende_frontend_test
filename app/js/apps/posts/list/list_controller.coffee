define ["app","apps/common/views"], (Kuende, List) ->
	Kuende.module "PostsApp.List", (List, Kuende, Backbone, Marionette, $, _) ->

		List.Controller =

			listPosts: (page) ->

				fetchingPosts = Kuende.request("post:entities")

				$.when(fetchingPosts).done (posts) ->
					# console.log posts
					if(page)
						posts.getPage +page
					# show the paginated Layout View
					postsListView = new Kuende.Common.Views.PaginatedView
						collection: posts,

						mainView: List.Posts
					Kuende.mainRegion.show(postsListView)

	Kuende.PostsApp.List.Controller