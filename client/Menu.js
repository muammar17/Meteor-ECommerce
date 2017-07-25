//Meteor.subscribe('categories');

Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('categories');
	});
});

Template.Menu.helpers({
	categories: ()=> {
		return Categories.find({inMenu: true});
	}
});