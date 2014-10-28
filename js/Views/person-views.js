app = app || {};

app.views.Person = Backbone.View.extend({
	tagName:'li',
	attributes: function(){
		return {
			class:'person' + this.model.get('type')
		};
	},
	events:{
		'click .list-header': 'showDetails'
	},

	template: _.template($('#person-template').html()),

	render: function(){
		this.$el.html(this.template(this.model.toJSON()))
		return this;
	},

	showDetails: function(e) {
		$(e.target).toggleClass('active');
		$(e.target).siblings('.details').slideToggle('fast');
	}	
});

app.views.People = Backbone.View.extend({
	el: 'wrapper',
	initialize:function(data){
		this.collection = new app.collections.People(data);
		this.render();
	},
	render: function(){
		var self = this;
		$('#listing').empty();
		_.each(this.collection.models, function(person){
			self.renderPerson(person);
		}, this);
	},
	renderPerson: function(person){
		var newperson = new app.views.Person({
			model:person
		});
		$('#listing').append(newperson.render().el);
	}
});
