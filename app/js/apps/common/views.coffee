define [
  "app"
  "apps/posts/list/list_view"
], (Kuende) ->

      template: "#paginated-view"
      regions:
        paginationControlsRegion: ".js-pagination-controls"
        paginationMainRegion: ".js-pagination-main"

        controls = new Views.PaginationControls(paginatedCollection: collection)

        # posts
        listView = new Kuende.PostsApp.List.Posts(collection: collection)

        #   // listen for controls event
          collection.getPage page
          return

        return
    )
    Views.PaginationControls = Marionette.ItemView.extend(
        @paginatedCollection = options.paginatedCollection
        return

      events:
        "click a[class=navigatable]": "navigateToPage"
    )
    return

  return