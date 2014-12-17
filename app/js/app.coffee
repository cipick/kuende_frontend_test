define ["marionette",'apps/posts/posts_app','apps/project/project_app'], (Marionette) ->
  Kuende = new Backbone.Marionette.Application()

  Kuende.addRegions
    mainRegion: "#main-region"

  Kuende.navigate = (route, options) ->
    options || (options = {})
    Backbone.history.navigate(route, options)

  Kuende.on "start", ->
    if(Backbone.history)
      Backbone.history.start()

  Kuende