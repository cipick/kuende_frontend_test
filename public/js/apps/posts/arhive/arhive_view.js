var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app", "apps/entities/post"], function(Kuende) {
  Kuende.module("PostsApp.Arhive", function(Arhive, Kuende, Backbone, Marionette, $, _) {
    Arhive.Layout = (function(_super) {
      __extends(Layout, _super);

      function Layout() {
        return Layout.__super__.constructor.apply(this, arguments);
      }

      Layout.prototype.template = "#home-template";

      Layout.prototype.regions = {
        projectRegion: "#project-region",
        sidebarRegion: "#sidebar-region"
      };

      return Layout;

    })(Marionette.LayoutView);
    Arhive.Post = (function(_super) {
      __extends(Post, _super);

      function Post() {
        return Post.__super__.constructor.apply(this, arguments);
      }

      Post.prototype.tagName = 'li';

      Post.prototype.template = "#sidebar-template";

      return Post;

    })(Marionette.ItemView);
    return Arhive.Posts = (function(_super) {
      __extends(Posts, _super);

      function Posts() {
        return Posts.__super__.constructor.apply(this, arguments);
      }

      Posts.prototype.tagName = 'ol';

      Posts.prototype.className = "list-unstyled";

      Posts.prototype.childView = Arhive.Post;

      return Posts;

    })(Marionette.CollectionView);
  });
  return Kuende.PostsApp.Arhive;
});
