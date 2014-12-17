var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app", "apps/entities/post"], Kuende(function() {
  Kuende.module("PostsApp.List", function(List, Kuende, Backbone, Marionette, $, _) {
    List.Post = (function(_super) {
      __extends(Post, _super);

      function Post() {
        return Post.__super__.constructor.apply(this, arguments);
      }

      Post.prototype.template = "#blog_post-template";

      Post.prototype.className = "blog-post";

      return Post;

    })(Marionette.ItemView);
    return List.Posts = (function(_super) {
      __extends(Posts, _super);

      function Posts() {
        return Posts.__super__.constructor.apply(this, arguments);
      }

      Posts.prototype.childView = List.Post;

      Posts.prototype.className = "blog-main col-xs-12";

      return Posts;

    })(Marionette.CollectionView);
  });
  return Kuende.PostsApp.List;
}));
