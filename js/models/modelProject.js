var greg = greg || {};

greg.projectModel = Backbone.Model.extend({
	defaults : {
		title : 'Title project',
		client : 'Hetic',
		role : 'WebDesigneur',
		description : 'ceci est un super projet',
		pictures : [],
		technologies : []
	}
});