Kuende.module("Entities", function(Entities, Kuende, Backbone, Marionette, $, _){
  Entities.Header = Backbone.Model.extend({
  });

  Entities.HeaderCollection = Backbone.Collection.extend({
    model: Entities.Header

  });

  var initializeHeaders = function(){
    Entities.headers = new Entities.HeaderCollection([
      { name: "Home", url: "", navigationTrigger: "project:show" },
      { name: "News", url: "news", navigationTrigger: "posts:list" }
    ]);
  };

  var API = {
    getHeaders: function(){
      if(Entities.headers === undefined){
        initializeHeaders();
      }
      return Entities.headers;
    }
  };

  Kuende.reqres.setHandler("header:entities", function(){
    return API.getHeaders();
  });
});