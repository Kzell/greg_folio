var greg = greg || {};

greg.projectView = Backbone.View.extend({
	tagName : 'section',
	className: 'project',

	initialize : function(){
		this.listenTo(this.model, "change", this.render);
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
    	return this;
	}
});