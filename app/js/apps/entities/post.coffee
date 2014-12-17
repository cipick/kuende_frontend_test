define ["app","pageablecollection"], (Kuende) ->
  Kuende.module "Entities", ( Entities, Kuende, Backbone, Marionette, $, _) ->
    class Entities.Post extends Backbone.Model
      urlRoot: "api/news"
    class Entities.PostSidebar extends Backbone.Collection
      model: Entities.Post
      url: 'api/news'
    class Entities.PageableCollection extends Backbone.PageableCollection
      model: Entities.Post
      url: "api/news"
      state:
        firstPage: 0
        pageSize: 10
      queryParams:
        currentPage: null
        pageSize: null
        start: ->
          @.state.currentPage * 10
        limit: ->
          @.state.pageSize
    API =
      getPostEntities: (options) ->
        posts = new Entities.PageableCollection()
        defer = $.Deferred()
        posts.fetch
          success: (data) ->
            defer.resolve(data)
        defer.promise()
      getSidebarPostEntities: ->
        posts = new Entities.PostSidebar()
        defer = $.Deferred()
        posts.fetch
          data:
            $.param
              limit:5
          success: (data) ->
            defer.resolve(data)
        defer.promise()
    Kuende.reqres.setHandler "post:entities", ->
      API.getPostEntities()
    Kuende.reqres.setHandler "sidebarposts:entities", ->
      API.getSidebarPostEntities()