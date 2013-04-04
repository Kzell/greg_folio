var greg = greg || {};

greg.mainView = Backbone.View.extend({
	el : $('ul#projects'),
	events: {
		'click .details': 'showDetails'
	},

	initialize : function(){
		_.bindAll(this, 'render', 'addProject');

		this.collection = new greg.Collection();
		this.collection.bind('add', this.appendProject);		
	},

	addProject: function(projectFileName){
		var self = this;
		$.getJSON('contents/projects.json', function(data){
			data = data[projectFileName];
			var project = new greg.projectModel();
			data.id = self.collection.models.length;
			project.set(data);
			self.collection.add(project);				
		});
	},

	appendProject: function(theProject){
		var projectView = new greg.projectView({ model:theProject });
		var view = projectView.render('showroom');
		$('ul#projects').append(view.el.html(view.content));
	},

	showDetails:function(e){
		var idProject = $(e.currentTarget).closest('.project').data('id');
		var theProject = this.collection.models[idProject];
		var projectViewDetails = new greg.projectView({ model:theProject });
		$('#details-wrapper').html(projectViewDetails.render('details').content);
	}
});