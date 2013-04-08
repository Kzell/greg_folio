var greg = greg || {};

greg.router = Backbone.Router.extend({
	routes: {
		"" : "index",
	    "projects/:id" : "project"
	},

	initialize: function () {
		var mainView = new greg.mainView();
		mainView.addProject('koom');
		router = this;

		Backbone.history.start({pushState:true});

		$('body').delegate('a:not(.external)','click',function(e){
			e.preventDefault();
			url = encodeURI(decodeURI($(this).attr('href').replace(/^http\:\/\/([^\/]+)/, ""))).toLowerCase();
			router.navigate(url,true,true);
		});

		console.log(document.URL);
	},

	index : function(){
		console.log('index');
		//Init affichage à la home
		$('#details-wrapper').html('');
	},

	project : function(id){
		console.log('project', id);
	}
});