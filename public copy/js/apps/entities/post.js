define(["app","pageablecollection"],function(Kuende){
	Kuende.module("Entities", function( Entities, Kuende, Backbone, Marionette, $, _){
		Entities.Post = Backbone.Model.extend({
			urlRoot: "api/news",
		});

		// sidebar posts
		Entities.PostSidebar = Backbone.Collection.extend({
			model: Entities.Post,
			url: 'api/news',
		});

		// pageable Collection
		Entities.PageableCollection = Backbone.PageableCollection.extend({
	  	model: Entities.Post,
	  	url: "api/news",

	  	state: {
	  		firstPage: 0,
	  		pageSize: 10,
	  	},

	  	queryParams: {
	  		currentPage: null,
	  		pageSize: null,
	  		start: function () { return this.state.currentPage * 10 },
	  		limit: function () { return this.state.pageSize; }
	  	}

		});

		var API = {
				getPostEntities: function(options){
		      var posts = new Entities.PageableCollection();
		      var defer = $.Deferred();

					response = posts.fetch({
						success: function(data){
		      		defer.resolve(data);
		      	}
					});

		      return defer.promise();
		    },
		    getSidebarPostEntities: function(){
		      var posts = new Entities.PostSidebar();
		      var defer = $.Deferred();

		      posts.fetch({
		      	data: $.param({ limit:5 }),
		      	success: function(data){
		      		defer.resolve(data);
		      	}
		      });
	      return defer.promise();
	    	}
			};

			Kuende.reqres.setHandler("post:entities", function(){
				return API.getPostEntities();
			});

			Kuende.reqres.setHandler("sidebarposts:entities", function(){
				return API.getSidebarPostEntities();
			});

	});
	return ;
});