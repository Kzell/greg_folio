var greg = greg || {};

greg.Collection = Backbone.Collection.extend({
  	model: null,
  	
  	initialize : function(){
  		this.on('add',this.render,this);
  	},
  	render : function(){
  		this.model = new greg.projectModel();
  		$('#projects').html(this.model.viewProject.render());
  	}
});