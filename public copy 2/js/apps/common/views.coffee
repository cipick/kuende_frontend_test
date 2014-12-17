define ["app","apps/posts/list/list_view"], (Kuende) ->
	Kuende.module "Common.Views", (Views, Kuende, Backbone, Marionette, $, _) ->
		class Views.PaginatedView extends Marionette.LayoutView
			template: "#paginated-view"

			regions:
				paginationControlsRegion: ".js-pagination-controls"
				paginationMainRegion: ".js-pagination-main"


			initialize ->

				controls = new Views.PaginationControls
					paginatedCollection: @collection

				#posts
				listView = new Kuende.PostsApp.List.Post
					collection: @collection

			 #listen for controls event
				@listenTo(controls, "page:change", (page) ->
			    collection.getPage(page)
			    Kuende.navigate("#news/page/" + (page+1))

				@.on("show", ->
					@.paginationControlsRegion.show(controls)
					@.paginationMainRegion.show(listView)

		class Views.PaginationControls extends Marionette.ItemView
			template: "#pagination-controls"
			className: "pagination"

			initialize: (options) ->
				@.paginatedCollection = options.paginatedCollection

			events:
				"click a[class=navigatable]": "navigateToPage"

			navigateToPage: (e) ->
				e.preventDefault()
				page = parseInt($(e.target).data("page"), 10)

				# send event to paginated view
				@.trigger("page:change", page-1)
