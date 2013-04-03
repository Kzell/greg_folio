var greg = greg || {};

greg.mainView = Backbone.View.extend({
	el:$('section'),
	className: 'project',
	// template: _.template($.ajax({type:"GET",url:'js/templates/project.htm',async:false}).responseText),

	// events: {
	// 	'click .project-nav-next' : 'loadNextProject'
	// },

	initialize : function(){
		_.bindAll(this, 'render', 'loadNextProject');


		// <ul id="projects"></ul>

		this.collection = new greg.Collection();
		this.collection.bind('add',this.appendProject)

		this.listenTo(this.model, "change", this.render);
	},

	render : function(){
		var sefl = this;
		$(this.el).append($('<ul>').attr('id','projects'));
	},

	appendProject: function(item){
		var itemView = new greg.projectView({
			
		});
	},
});