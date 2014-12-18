define [
  "app"
  "apps/posts/list/list_view"
], (Kuende) ->
  Kuende.module "Common.Views", (Views, Kuende, Backbone, Marionette, $, _) ->
    Views.PaginatedView = Marionette.LayoutView.extend(
      template: "#paginated-view"
      regions:
        paginationControlsRegion: ".js-pagination-controls"
        paginationMainRegion: ".js-pagination-main"

      initialize: ->
        collection = @collection
        controls = new Views.PaginationControls(paginatedCollection: collection)

        # posts
        listView = new Kuende.PostsApp.List.Posts(collection: collection)

        #   // listen for controls event
        self = this
        @listenTo controls, "page:change", (page) ->
          collection.getPage page
          Kuende.navigate "#news/page/" + (page + 1)
          return

        @on "show", ->
          @paginationControlsRegion.show controls
          @paginationMainRegion.show listView
          return

        return
    )
    Views.PaginationControls = Marionette.ItemView.extend(
      template: "#pagination-controls"
      className: "pagination"
      initialize: (options) ->
        @paginatedCollection = options.paginatedCollection
        return

      events:
        "click a[class=navigatable]": "navigateToPage"

      navigateToPage: (e) ->
        e.preventDefault()
        page = parseInt($(e.target).data("page"), 10)

        # send event to paginated view
        @trigger "page:change", page - 1
        return
    )
    return

  return
