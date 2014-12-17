requirejs.config({
  baseUrl: "./js",
  paths: {
    backbone: "vendor/backbone",
    jquery: "vendor/jquery",
    json2: "vendor/json2",
    underscore: "vendor/underscore",
    marionette: "vendor/backbone.marionette",
    pageablecollection: "vendor/backbone.paginator"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    pageablecollection: ["backbone"]
  }
});

require(["app"], function(Kuende) {
  return Kuende.start();
});
