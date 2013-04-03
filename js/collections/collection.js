var greg = greg || {};

greg.Collection = Backbone.Collection.extend({
  	model: greg.projectModel,
  	
  	initialize : function(){
  		this.on('add',this.render,this);
  	},
  	render : function(){
  		console.log(this);
  		// model = new greg.projectModel();
  		$('#projects').append(this.models[0].viewProject.render);
  	}
});