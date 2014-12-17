define ["app","apps/entities/post"], Kuende ->
	Kuende.module "PostsApp.Arhive", (Arhive, Kuende, Backbone, Marionette, $, _) ->

		class Arhive.Layout extends Marionette.LayoutView
			template: "#home-template"
			regions:
				projectRegion: "#project-region"
				sidebarRegion: "#sidebar-region"

    class Arhive.Post extends Marionette.ItemView
  		tagName: 'li'
    	template: "#sidebar-template"

    class Arhive.Posts extends Marionette.CollectionView
  		tagName: 'ol'
  		className: "list-unstyled"
    	childView:  Arhive.Post

	Kuende.PostsApp.Arhive