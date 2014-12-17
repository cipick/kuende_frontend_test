var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app", "pageablecollection"], function(Kuende) {
  return Kuende.module("Entities", function(Entities, Kuende, Backbone, Marionette, $, _) {
    var API;
    Entities.Post = (function(_super) {
      __extends(Post, _super);

      function Post() {
        return Post.__super__.constructor.apply(this, arguments);
      }

      Post.prototype.urlRoot = "api/news";

      return Post;

    })(Backbone.Model);
    Entities.PostSidebar = (function(_super) {
      __extends(PostSidebar, _super);

      function PostSidebar() {
        return PostSidebar.__super__.constructor.apply(this, arguments);
      }

      PostSidebar.prototype.model = Entities.Post;

      PostSidebar.prototype.url = 'api/news';

      return PostSidebar;

    })(Backbone.Collection);
    Entities.PageableCollection = (function(_super) {
      __extends(PageableCollection, _super);

      function PageableCollection() {
        return PageableCollection.__super__.constructor.apply(this, arguments);
      }

      PageableCollection.prototype.model = Entities.Post;

      PageableCollection.prototype.url = "api/news";

      PageableCollection.prototype.state = {
        firstPage: 0,
        pageSize: 10
      };

      PageableCollection.prototype.queryParams = {
        currentPage: null,
        pageSize: null,
        start: function() {
          return this.state.currentPage * 10;
        },
        limit: function() {
          return this.state.pageSize;
        }
      };

      return PageableCollection;

    })(Backbone.PageableCollection);
    API = {
      getPostEntities: function(options) {
        var defer, posts;
        posts = new Entities.PageableCollection();
        defer = $.Deferred();
        posts.fetch({
          success: function(data) {
            return defer.resolve(data);
          }
        });
        return defer.promise();
      },
      getSidebarPostEntities: function() {
        var defer, posts;
        posts = new Entities.PostSidebar();
        defer = $.Deferred();
        posts.fetch({
          data: $.param({
            limit: 5
          }),
          success: function(data) {
            return defer.resolve(data);
          }
        });
        return defer.promise();
      }
    };
    Kuende.reqres.setHandler("post:entities", function() {
      return API.getPostEntities();
    });
    return Kuende.reqres.setHandler("sidebarposts:entities", function() {
      return API.getSidebarPostEntities();
    });
  });
});
