var greg = greg || {};

greg.projectView = Backbone.View.extend({
	tagName : 'li',
	className: 'project',
	templates: {
		showroom : _.template($.ajax({type:"GET",url:'js/templates/project.htm',async:false}).responseText),
		details : _.template($.ajax({type:"GET",url:'js/templates/details.htm',async:false}).responseText)
	},

	initialize : function(){
		this.listenTo(this.model, "change", this.render);
	},

	render : function(part){
		$(this.el).html(this.templates[part](this.model.toJSON()));
    	return this;
	}

});