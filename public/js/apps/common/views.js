define(["app","apps/posts/list/list_view"], function(Kuende) {
	Kuende.module("Common.Views", function(Views, Kuende, Backbone, Marionette, $, _){
		Views.PaginatedView = Marionette.LayoutView.extend({
			template: "#paginated-view",

			regions: {
				paginationControlsRegion: ".js-pagination-controls",
				paginationMainRegion: ".js-pagination-main"
			},

			initialize: function(){

				var collection = this.collection;

				var controls = new Views.PaginationControls({
					paginatedCollection: collection
				});

				// posts
				var listView = new Kuende.PostsApp.List.Posts({
					collection: collection
				});

			// 	// listen for controls event
				var self = this;
				this.listenTo(controls, "page:change", function(page){
			    collection.getPage(page);
			    Kuende.navigate("#news/page/" + (page+1));
		    });

				this.on("show", function(){
					this.paginationControlsRegion.show(controls);
					this.paginationMainRegion.show(listView);
				})
			}
		});

		Views.PaginationControls = Marionette.ItemView.extend({
			template: "#pagination-controls",
			className: "pagination",

			initialize: function(options){

				this.paginatedCollection = options.paginatedCollection;

			},

			events: {
				"click a[class=navigatable]": "navigateToPage"
			},

			navigateToPage: function(e){
				e.preventDefault();
				var page = parseInt($(e.target).data("page"), 10);

				// send event to paginated view
				this.trigger("page:change", page-1);
			}

		});
	});
});
