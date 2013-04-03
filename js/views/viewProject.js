var greg = greg || {};

// var pouet = $.ajax({
// 		type:"GET",url:'js/templates/project.htm',async:false
// 	}).responseText;


// alert(pouet);

greg.projectView = Backbone.View.extend({
	tagName : 'section',
	className: 'project',
	template: _.template($.ajax({type:"GET",url:'js/templates/project.htm',async:false}).responseText),

	events: {
		'click .project-nav-next' : 'loadNextProject'
	},

	initialize : function(){
		_.bindAll(this, 'render', 'loadNextProject');
		this.listenTo(this.model, "change", this.render);


		// ajoute le #1 projet
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
    	return this.$el;
	},

	loadNextProject: function(){
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},

	loadProjectDetails: function(){

	}
});