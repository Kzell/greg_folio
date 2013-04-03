var greg = greg || {};

greg.projectModel = Backbone.Model.extend({
	defaults : {
		title : 'Title project',
		subTitle : 'Hetic',
		role : 'WebDesigneur',
		description : 'ceci est un super projet',
		sumup : 'short description',
		pictures : [],
		technologies : [],
		link : 'http://'
	},

	initialize : function(){
		this.view = new greg.projectView({ model : this });
	}
});