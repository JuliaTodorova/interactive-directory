app = || {};

app.models.Person = Backbone.Model.extend({
	defaults:{
		'ID': '',
		'Firstname':'',
		'Lastname':'',
		'Email':'',
		'Phone':'',
		"Parent":''
	},

	initialize function(){
		var self = this;
		if(this.get('Parent') !== ''){
			self.set('type','student');
		}else{
			self.set('type','Parent')
		}
	}
});


app.collection.People = Backbone.Collection.extend({
	model: app.models.Person,
	comparator: function(person){
		return person.get('lastname');
	}
});