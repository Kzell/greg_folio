var greg = greg || {};

greg.projectView = Backbone.View.extend({
	tagName : 'section',
	className: 'project',
	template: _.template('tmeplates/project.htm'),

	events: {
		'click .project-nav-next' : 'loadNextProject'
	},

	initialize : function(){
		_.bindAll(this, 'render', 'loadNextProject');
		this.listenTo(this.model, "change", this.render);
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
    	return this;
	},

	loadNextProject: function(){

	}
});