var greg = greg || {};

greg.projectView = Backbone.View.extend({
	tagName : 'li',
	className: 'project',
	template: _.template($.ajax({type:"GET",url:'js/templates/project.htm',async:false}).responseText),

	events: {
		
	},

	initialize : function(){
		this.listenTo(this.model, "change", this.render);
	},

	render : function(){
		$(this.el).html(this.template(this.model.toJSON()));
    	return this;
	}

});