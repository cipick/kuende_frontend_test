define(["app","apps/entities/post"],function(Kuende){
	Kuende.module("PostsApp.Arhive",function(Arhive, Kuende, Backbone, Marionette, $, _){

		Arhive.Layout = Marionette.LayoutView.extend({
			template: "#home-template",
			regions: {
				projectRegion: "#project-region",
				sidebarRegion: "#sidebar-region"
			}
		});

    Arhive.Post = Marionette.ItemView.extend({
  		tagName: 'li',
    	template: "#sidebar-template",
		});

    Arhive.Posts = Marionette.CollectionView.extend({
  		tagName: 'ol',
  		className: "list-unstyled",
    	childView:  Arhive.Post,
		});
	});

	return Kuende.PostsApp.Arhive;
});