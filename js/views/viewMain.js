var greg = greg || {};

greg.mainView = Backbone.View.extend({
	el : $('ul#projects'),

	initialize : function(){

		this.collection = new greg.Collection();

		this.addProject({
			title : 'Glouglou',
			subTitle : 'héhéhé'
		});
	},

	addProject: function(projectJSON){
		var project = new greg.projectModel();

		project.set(projectJSON);

		this.collection.add(project);

		var projectView = new greg.projectView({ model:project });
		
		$(this.el).append(projectView.render().el);
	}
});