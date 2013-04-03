var greg = greg || {};

greg.Collection = Backbone.Collection.extend({
  	model: greg.projectModel,
  	
  	initialize : function(){
  		this.on('add',this.render,this);
  	},
  	render : function(){
  		model = new greg.projectModel();
  		$('#projects').append(model.viewProject.render);
  	}
});