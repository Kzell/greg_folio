var greg = greg || {};

greg.mainView = Backbone.View.extend({
	el : $('ul#projects'),

	initialize : function(){
		_.bindAll(this, 'render', 'addProject');

		this.collection = new greg.Collection();
		this.collection.bind('add', this.appendProject);

		
	},

	addProject: function(projectJSON){
		var project = new greg.projectModel();
		project.set(projectJSON);
		this.collection.add(project);
	},

	appendProject: function(theProject){
		var projectView = new greg.projectView({ model:theProject });
		$('ul#projects').append(projectView.render('showroom').el);
	}
});