define ["app","apps/posts/arhive/arhive_view"], (Kuende, Arhive) ->
	Kuende.module "PostsApp.Arhive", (Arhive, Kuende, Backbone, Marionette, $, _) ->
		Arhive.Controller =

			arhivePosts: ->

				fetchingPosts = Kuende.request("sidebarposts:entities")
				fetchingProject = Kuende.request("project:entities")

				postsArhiveLayout = new Arhive.Layout()

				require ['apps/project/show/show_controller'], ->

					$.when(fetchingPosts).done (posts) ->
						postsArhiveView = new Arhive.Posts
							collection: posts

						$.when(fetchingProject).done (project) ->
  						projectView = new Kuende.ProjectApp.Show.Project
    						collection: project

						  postsArhiveLayout.on "show", ->
						    postsArhiveLayout.projectRegion.show(projectView)
						    postsArhiveLayout.sidebarRegion.show(postsArhiveView)

						  Kuende.mainRegion.show(postsArhiveLayout)

	Kuende.PostsApp.Arhive.Controller