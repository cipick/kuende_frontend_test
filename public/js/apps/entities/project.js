define(["app"],function(Kuende){
	Kuende.module("Entities", function( Entities, Kuende, Backbone, Marionette, $, _){
		Entities.Project = Backbone.Model.extend({
			urlRoot: "api/info"
		});

    Entities.ProjectCollection = Backbone.Collection.extend({
      model: Entities.Project,
      url: 'api/info',
    });

		var API = {
			getPostEntities: function(){
        // i think i should use Entities.Project but i had a problem with the template
				var project = new Entities.ProjectCollection();
				var defer = $.Deferred();

        project.fetch({
          success : function(data) {
            defer.resolve(data);
   				}
   			});

   			return defer.promise();
			}
		};

		Kuende.reqres.setHandler("project:entities", function(){
			return API.getPostEntities();
		});

	});

	return ;
});