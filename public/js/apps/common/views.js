var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["app", "apps/posts/list/list_view"], function(Kuende) {
  return Kuende.module("Common.Views", function(Views, Kuende, Backbone, Marionette, $, _) {
    var page;
    Views.PaginatedView = (function(_super) {
      __extends(PaginatedView, _super);

      function PaginatedView() {
        return PaginatedView.__super__.constructor.apply(this, arguments);
      }

      PaginatedView.prototype.template = "#paginated-view";

      PaginatedView.prototype.regions = {
        paginationControlsRegion: ".js-pagination-controls",
        paginationMainRegion: ".js-pagination-main"
      };

      PaginatedView.prototype.initialize = function() {
        var controls, listView;
        controls = new Views.PaginationControls;
        ({
          paginatedCollection: this.collection
        });
        listView = new Kuende.PostsApp.List.Post({
          collection: this.collection
        });
        this.listenTo(controls, "page:change", function(page) {
          collection.getPage(page);
          return Kuende.navigate("#news/page/" + (page + 1));
        });
        return this.on("show", function() {
          this.paginationControlsRegion.show(controls);
          return this.paginationMainRegion.show(listView);
        });
      };

      return PaginatedView;

    })(Marionette.LayoutView);
    Views.PaginationControls = (function(_super) {
      __extends(PaginationControls, _super);

      function PaginationControls() {
        return PaginationControls.__super__.constructor.apply(this, arguments);
      }

      PaginationControls.prototype.template = "#pagination-controls";

      PaginationControls.prototype.className = "pagination";

      PaginationControls.prototype.initialize = function(options) {
        return this.paginatedCollection = options.paginatedCollection;
      };

      PaginationControls.prototype.events = {
        "click a[class=navigatable]": "navigateToPage"
      };

      PaginationControls.prototype.navigateToPage = function(e) {};

      return PaginationControls;

    })(Marionette.ItemView);
    e.preventDefault();
    page = parseInt($(e.target).data("page"), 10);
    return this.trigger("page:change", page - 1);
  });
});
