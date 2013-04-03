greg = greg || {};

var greg.projectModel = new Backbone.Model.extend({
	defaults : {
		title : 'Title project',
		client : 'Hetic',
		role : 'WebDesigneur',
		description : 'ceci est un super projet',
		pictures : [],
		technologies : []
	}
});