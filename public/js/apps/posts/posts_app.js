var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app"], function(Kuende) {
  return Kuende.module("PostsApp", function(PostsApp, Kuende, Backbone, Marionette, $, _) {
    var API;
    PostsApp.Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        return Router.__super__.constructor.apply(this, arguments);
      }

      Router.prototype.appRoutes = {
        "": "arhivePosts",
        "news": "listPosts"
      };

      return Router;

    })(Marionette.AppRouter);
    API = {
      listPosts: function() {
        require(['apps/posts/list/list_controller'], function() {
          return PostsApp.List.Controller.listPosts();
        });
        return {
          arhivePosts: function() {
            return require(['apps/posts/arhive/arhive_controller'], function() {
              return PostsApp.Arhive.Controller.arhivePosts();
            });
          }
        };
      }
    };
    Kuende.on("posts:list", function() {
      Kuende.navigate("news");
      return API.listPosts();
    });
    Kuende.on("posts:arhive", function() {
      Kuende.navigate("home");
      return API.arhivePosts();
    });
    return Kuende.addInitializer(function() {
      return new PostsApp.Router({
        controller: API
      });
    });
  });
});
